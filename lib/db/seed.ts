import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
import bcrypt from "bcryptjs";

const url = process.env.TURSO_DATABASE_URL ?? "file:./data/unimart.db";
const authToken = process.env.TURSO_AUTH_TOKEN;

const client = createClient({ url, authToken });
const db = drizzle(client, { schema });

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function seed() {
  console.log("Seeding database...\n");

  // Drop existing tables (order matters due to foreign keys)
  await client.executeMultiple(`
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS wishlist_items;
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      phone TEXT,
      avatar TEXT,
      role TEXT NOT NULL DEFAULT 'customer',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      description TEXT,
      img_src TEXT,
      parent_id INTEGER REFERENCES categories(id),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      description TEXT,
      price REAL NOT NULL,
      old_price REAL,
      discount REAL,
      img_src TEXT NOT NULL,
      hover_img_src TEXT,
      category_id INTEGER REFERENCES categories(id),
      rating REAL DEFAULT 0,
      review_count INTEGER DEFAULT 0,
      in_stock INTEGER DEFAULT 1,
      sku TEXT,
      tags TEXT,
      variants TEXT,
      brand TEXT,
      color TEXT,
      sizes TEXT,
      featured INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS cart_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      quantity INTEGER NOT NULL DEFAULT 1,
      size TEXT,
      color TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS wishlist_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      status TEXT NOT NULL DEFAULT 'pending',
      total_amount REAL NOT NULL,
      shipping_address TEXT NOT NULL,
      payment_method TEXT NOT NULL,
      payment_status TEXT NOT NULL DEFAULT 'pending',
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      product_id INTEGER NOT NULL REFERENCES products(id),
      quantity INTEGER NOT NULL,
      price REAL NOT NULL,
      size TEXT,
      color TEXT
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      rating INTEGER NOT NULL,
      title TEXT,
      comment TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  console.log("Tables created\n");

  // Seed users
  const adminPassword = await bcrypt.hash("admin123", 12);
  const userPassword = await bcrypt.hash("user123", 12);

  await db.insert(schema.users).values([
    {
      name: "Admin User",
      email: "admin@unimart.com",
      password: adminPassword,
      role: "admin",
      phone: "+1234567890",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      password: userPassword,
      role: "customer",
      phone: "+0987654321",
    },
    {
      name: "John Smith",
      email: "john@example.com",
      password: userPassword,
      role: "customer",
    },
  ]);

  console.log("3 users seeded");

  // Seed categories
  const fashionCategories = [
    { name: "Vintage Clothing", slug: "vintage-clothing", description: "Classic vintage and retro fashion pieces" },
    { name: "Urban Apparel", slug: "urban-apparel", description: "Modern streetwear and urban fashion" },
    { name: "Casual Wear", slug: "casual-wear", description: "Everyday casual clothing essentials" },
    { name: "Formal Wear", slug: "formal-wear", description: "Professional and formal attire" },
    { name: "Activewear", slug: "activewear", description: "Sports and fitness clothing" },
    { name: "Accessories", slug: "accessories", description: "Fashion accessories and add-ons" },
    { name: "Outerwear", slug: "outerwear", description: "Jackets, coats, and outerwear" },
    { name: "Footwear", slug: "footwear", description: "Shoes, sneakers, and boots" },
    { name: "Denim", slug: "denim", description: "Jeans, jackets, and denim essentials" },
    { name: "Knitwear", slug: "knitwear", description: "Sweaters, cardigans, and knit pieces" },
  ];

  await db.insert(schema.categories).values(fashionCategories);
  console.log(`${fashionCategories.length} categories seeded`);

  // Seed fashion products
  const fashionProducts = [
    { title: "Nirvana Graphic Oversized Sweatshirt", price: 179.98, oldPrice: 295, discount: 39, category: "Vintage Clothing", brand: "RetroVibe", imgSrc: "/assets/images/product-img/fashion/product-new-01-a-1.webp", tags: ["oversized", "graphic", "sweatshirt", "vintage"], sizes: ["S", "M", "L", "XL"], color: "Black", featured: true, rating: 4.8, reviewCount: 25 },
    { title: "Vibrant Tiger Cropped Graphic Tee", price: 179.98, oldPrice: 295, discount: 12, category: "Urban Apparel", brand: "StreetEdge", imgSrc: "/assets/images/product-img/fashion/product-new-02-a-1.webp", tags: ["cropped", "graphic", "tee"], sizes: ["XS", "S", "M", "L"], color: "White", featured: true, rating: 4.6, reviewCount: 18 },
    { title: "The Great Lakes Cozy Pullover", price: 179.98, oldPrice: 295, discount: 23, category: "Casual Wear", brand: "ComfortCo", imgSrc: "/assets/images/product-img/fashion/product-new-03-a-1.webp", tags: ["cozy", "pullover", "casual"], sizes: ["M", "L", "XL", "XXL"], color: "Green", featured: false, rating: 4.5, reviewCount: 12 },
    { title: "Retro Sunset Gradient Hoodie", price: 225.00, oldPrice: 350, discount: 36, category: "Vintage Clothing", brand: "RetroVibe", imgSrc: "/assets/images/product-img/fashion/product-new-04-a-1.webp", tags: ["hoodie", "retro", "gradient"], sizes: ["S", "M", "L", "XL"], color: "Orange", featured: true, rating: 4.9, reviewCount: 42 },
    { title: "Classic Denim Jacket Washed Blue", price: 299.99, oldPrice: 420, discount: 29, category: "Denim", brand: "DenimCraft", imgSrc: "/assets/images/product-img/fashion/product-new-05-a-1.webp", tags: ["denim", "jacket", "classic"], sizes: ["S", "M", "L", "XL"], color: "Blue", featured: true, rating: 4.7, reviewCount: 35 },
    { title: "Minimalist Cotton Crew Neck Tee", price: 59.99, oldPrice: 89, discount: 33, category: "Casual Wear", brand: "BasicLine", imgSrc: "/assets/images/product-img/fashion/product-new-06-a-1.webp", tags: ["cotton", "basic", "tee"], sizes: ["XS", "S", "M", "L", "XL"], color: "White", featured: false, rating: 4.3, reviewCount: 67 },
    { title: "Slim Fit Chino Pants Olive", price: 149.99, oldPrice: 210, discount: 29, category: "Casual Wear", brand: "UrbanFit", imgSrc: "/assets/images/product-img/fashion/product-new-07-a-1.webp", tags: ["chino", "slim-fit", "pants"], sizes: ["28", "30", "32", "34", "36"], color: "Olive", featured: false, rating: 4.4, reviewCount: 28 },
    { title: "Floral Print Summer Dress", price: 189.99, oldPrice: 280, discount: 32, category: "Casual Wear", brand: "BloomStyle", imgSrc: "/assets/images/product-img/fashion/product-new-08-a-1.webp", tags: ["floral", "summer", "dress"], sizes: ["XS", "S", "M", "L"], color: "Pink", featured: true, rating: 4.6, reviewCount: 19 },
    { title: "Wool Blend Overcoat Charcoal", price: 459.99, oldPrice: 650, discount: 29, category: "Outerwear", brand: "TailorMade", imgSrc: "/assets/images/product-img/fashion/product-new-09-a-1.webp", tags: ["wool", "overcoat", "formal"], sizes: ["S", "M", "L", "XL"], color: "Charcoal", featured: false, rating: 4.8, reviewCount: 14 },
    { title: "Leather Chelsea Boots Brown", price: 349.99, oldPrice: 500, discount: 30, category: "Footwear", brand: "StepCraft", imgSrc: "/assets/images/product-img/fashion/product-new-10-a-1.webp", tags: ["leather", "boots", "chelsea"], sizes: ["7", "8", "9", "10", "11"], color: "Brown", featured: true, rating: 4.7, reviewCount: 31 },
    { title: "Ribbed Knit Turtleneck Sweater", price: 129.99, oldPrice: 195, discount: 33, category: "Knitwear", brand: "CozyKnits", imgSrc: "/assets/images/product-img/fashion/product-new-11-a-1.webp", tags: ["knit", "turtleneck", "sweater"], sizes: ["S", "M", "L", "XL"], color: "Cream", featured: false, rating: 4.5, reviewCount: 22 },
    { title: "Athletic Performance Joggers", price: 99.99, oldPrice: 140, discount: 29, category: "Activewear", brand: "FlexMove", imgSrc: "/assets/images/product-img/fashion/product-new-12-a-1.webp", tags: ["joggers", "athletic", "performance"], sizes: ["S", "M", "L", "XL", "XXL"], color: "Black", featured: false, rating: 4.6, reviewCount: 45 },
    { title: "Silk Blend Formal Shirt White", price: 199.99, oldPrice: 300, discount: 33, category: "Formal Wear", brand: "TailorMade", imgSrc: "/assets/images/product-img/fashion/product-new-13-a-1.webp", tags: ["silk", "formal", "shirt"], sizes: ["S", "M", "L", "XL"], color: "White", featured: true, rating: 4.4, reviewCount: 16 },
    { title: "Canvas Sneakers Low Top", price: 89.99, oldPrice: 130, discount: 31, category: "Footwear", brand: "StepCraft", imgSrc: "/assets/images/product-img/fashion/product-new-14-a-1.webp", tags: ["sneakers", "canvas", "casual"], sizes: ["7", "8", "9", "10", "11", "12"], color: "White", featured: false, rating: 4.3, reviewCount: 55 },
    { title: "Vintage Leather Belt Classic", price: 79.99, oldPrice: 120, discount: 33, category: "Accessories", brand: "LeatherCo", imgSrc: "/assets/images/product-img/fashion/product-new-15-a-1.webp", tags: ["belt", "leather", "vintage"], sizes: ["30", "32", "34", "36", "38"], color: "Tan", featured: false, rating: 4.5, reviewCount: 38 },
    { title: "Puffer Jacket Matte Black", price: 329.99, oldPrice: 480, discount: 31, category: "Outerwear", brand: "ArcticShield", imgSrc: "/assets/images/product-img/fashion/product-new-16-a-1.webp", tags: ["puffer", "jacket", "winter"], sizes: ["S", "M", "L", "XL"], color: "Black", featured: true, rating: 4.8, reviewCount: 27 },
    { title: "Straight Leg Raw Denim Jeans", price: 199.99, oldPrice: 290, discount: 31, category: "Denim", brand: "DenimCraft", imgSrc: "/assets/images/product-img/fashion/product-new-17-a-1.webp", tags: ["jeans", "raw-denim", "straight"], sizes: ["28", "30", "32", "34", "36"], color: "Indigo", featured: false, rating: 4.6, reviewCount: 20 },
    { title: "Cashmere Blend V-Neck Cardigan", price: 269.99, oldPrice: 400, discount: 33, category: "Knitwear", brand: "CozyKnits", imgSrc: "/assets/images/product-img/fashion/product-new-18-a-1.webp", tags: ["cashmere", "cardigan", "v-neck"], sizes: ["S", "M", "L", "XL"], color: "Navy", featured: false, rating: 4.7, reviewCount: 11 },
    { title: "Graphic Print Bucket Hat", price: 49.99, oldPrice: 75, discount: 33, category: "Accessories", brand: "StreetEdge", imgSrc: "/assets/images/product-img/fashion/product-new-19-a-1.webp", tags: ["hat", "bucket", "graphic"], sizes: ["One Size"], color: "Multi", featured: false, rating: 4.2, reviewCount: 33 },
    { title: "Tailored Wool Blend Trousers", price: 249.99, oldPrice: 370, discount: 32, category: "Formal Wear", brand: "TailorMade", imgSrc: "/assets/images/product-img/fashion/product-new-20-a-1.webp", tags: ["trousers", "wool", "tailored"], sizes: ["28", "30", "32", "34", "36"], color: "Grey", featured: true, rating: 4.5, reviewCount: 15 },
    { title: "Compression Sports Leggings", price: 79.99, oldPrice: 115, discount: 30, category: "Activewear", brand: "FlexMove", imgSrc: "/assets/images/product-img/fashion/product-new-21-a-1.webp", tags: ["leggings", "compression", "sports"], sizes: ["XS", "S", "M", "L", "XL"], color: "Black", featured: false, rating: 4.6, reviewCount: 52 },
    { title: "Oversized Linen Blend Blazer", price: 319.99, oldPrice: 460, discount: 30, category: "Formal Wear", brand: "TailorMade", imgSrc: "/assets/images/product-img/fashion/product-new-22-a-1.webp", tags: ["blazer", "linen", "oversized"], sizes: ["S", "M", "L", "XL"], color: "Beige", featured: true, rating: 4.4, reviewCount: 9 },
    { title: "Distressed Skinny Jeans Black", price: 169.99, oldPrice: 250, discount: 32, category: "Denim", brand: "DenimCraft", imgSrc: "/assets/images/product-img/fashion/product-new-23-a-1.webp", tags: ["jeans", "skinny", "distressed"], sizes: ["26", "28", "30", "32", "34"], color: "Black", featured: false, rating: 4.5, reviewCount: 29 },
    { title: "Suede Crossbody Bag Tan", price: 159.99, oldPrice: 230, discount: 30, category: "Accessories", brand: "LeatherCo", imgSrc: "/assets/images/product-img/fashion/product-new-24-a-1.webp", tags: ["bag", "crossbody", "suede"], sizes: ["One Size"], color: "Tan", featured: false, rating: 4.6, reviewCount: 17 },
  ];

  const categoryMap = new Map<string, number>();
  const cats = await db.select().from(schema.categories).all();
  for (const cat of cats) {
    categoryMap.set(cat.name, cat.id);
  }

  for (let i = 0; i < fashionProducts.length; i++) {
    const p = fashionProducts[i];
    await db.insert(schema.products).values({
      title: p.title,
      slug: slugify(p.title),
      description: `Premium quality ${p.title.toLowerCase()}. Made with the finest materials for comfort and style.`,
      price: p.price,
      oldPrice: p.oldPrice,
      discount: p.discount,
      imgSrc: p.imgSrc,
      categoryId: categoryMap.get(p.category) ?? null,
      rating: p.rating,
      reviewCount: p.reviewCount,
      inStock: true,
      sku: `FM-${String(i + 1).padStart(4, "0")}`,
      tags: JSON.stringify(p.tags),
      brand: p.brand,
      color: p.color,
      sizes: JSON.stringify(p.sizes),
      featured: p.featured,
    });
  }

  console.log(`${fashionProducts.length} products seeded`);

  // Seed sample reviews
  const sampleReviews = [
    { userId: 2, productId: 1, rating: 5, title: "Amazing quality!", comment: "The fabric is super soft and the fit is perfect. Love the oversized style." },
    { userId: 3, productId: 1, rating: 4, title: "Great sweatshirt", comment: "Really comfortable, runs a bit large but that's expected for oversized." },
    { userId: 2, productId: 2, rating: 5, title: "Love the design", comment: "The tiger graphic is vibrant and eye-catching. Gets lots of compliments." },
    { userId: 3, productId: 3, rating: 4, title: "Cozy and warm", comment: "Perfect for chilly evenings. Very comfortable material." },
    { userId: 2, productId: 5, rating: 5, title: "Classic piece", comment: "This denim jacket is a must-have. Excellent craftsmanship." },
    { userId: 3, productId: 5, rating: 5, title: "Perfect fit", comment: "Fits like a glove. The washed blue color is beautiful." },
    { userId: 2, productId: 10, rating: 5, title: "Worth every penny", comment: "The leather quality is exceptional. Very comfortable right out of the box." },
    { userId: 3, productId: 10, rating: 4, title: "Stylish boots", comment: "Great looking boots. Take a few days to break in but then they're perfect." },
  ];

  await db.insert(schema.reviews).values(sampleReviews);
  console.log(`${sampleReviews.length} reviews seeded`);

  // Seed sample cart items for demo user
  await db.insert(schema.cartItems).values([
    { userId: 2, productId: 1, quantity: 1, size: "M" },
    { userId: 2, productId: 5, quantity: 1, size: "L", color: "Blue" },
  ]);
  console.log("2 cart items seeded for demo user");

  // Seed a sample order
  const [order] = await db
    .insert(schema.orders)
    .values({
      userId: 2,
      status: "delivered",
      totalAmount: 479.97,
      shippingAddress: JSON.stringify({
        fullName: "Jane Doe",
        address: "123 Fashion Street",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "US",
        phone: "+0987654321",
      }),
      paymentMethod: "card",
      paymentStatus: "paid",
    })
    .returning();

  await db.insert(schema.orderItems).values([
    { orderId: order.id, productId: 1, quantity: 1, price: 179.98, size: "M" },
    { orderId: order.id, productId: 5, quantity: 1, price: 299.99, size: "L", color: "Blue" },
  ]);
  console.log("1 sample order seeded\n");

  console.log("Database seeded successfully!");
  console.log("\nDemo accounts:");
  console.log("  Admin: admin@unimart.com / admin123");
  console.log("  User:  jane@example.com / user123");
  console.log("  User:  john@example.com / user123");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
