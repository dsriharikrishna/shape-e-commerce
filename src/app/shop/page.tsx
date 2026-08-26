"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Filter, SlidersHorizontal, Search } from "lucide-react";
import { allProducts as products } from "@/features/products/data/products";
import ProductCard1 from "@/features/products/components/productCards/ProductCard1";
import Header3 from "@/shared/components/layout/headers/Header3";
import Footer3 from "@/shared/components/layout/footers/Footer3";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<[number, number]>([
    0, 500,
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Extract unique categories
  const allCategories = Array.from(
    new Set(products.flatMap((product) => product.category || []))
  )
    .filter((cat): cat is string => typeof cat === "string" && cat.length > 0)
    .slice(0, 10); // Take first 10 for display

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Text search
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategories.length === 0 ||
      (product.category || []).some((cat) => selectedCategories.includes(cat));

    // Price filter
    const matchesPrice =
      product.price >= selectedPrice[0] && product.price <= selectedPrice[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      <Header3 sticky={true} />

      {/* Breadcrumb Header */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Shop</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-black font-semibold">Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <span className="font-semibold text-gray-900">
              Showing {filteredProducts.length} results
            </span>
            <Button
              variant="outline"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Sidebar */}
          <aside
            className={`lg:w-1/4 flex-shrink-0 ${isSidebarOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="sticky top-32 space-y-8">
              {/* Search */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Search className="h-5 w-5 mr-2" /> Search
                </h3>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <SlidersHorizontal className="h-5 w-5 mr-2" /> Categories
                </h3>
                <ul className="space-y-3">
                  {allCategories.map((category) => (
                    <li key={category}>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-black rounded border-gray-300 focus:ring-black transition duration-150 ease-in-out"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                        <span className="text-gray-600 group-hover:text-black transition-colors">
                          {category}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter (Mock) */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={selectedPrice[1]}
                    onChange={(e) =>
                      setSelectedPrice([0, parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                  <div className="flex items-center justify-between text-sm font-medium text-gray-600">
                    <span>$0</span>
                    <span>${selectedPrice[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            {/* Toolbar */}
            <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <span className="text-gray-600">
                Showing 1–{Math.min(12, filteredProducts.length)} of{" "}
                {filteredProducts.length} results
              </span>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border-gray-200 rounded-lg text-sm focus:ring-black focus:border-black">
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.slice(0, 12).map((product) => (
                  <ProductCard1 key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedPrice([0, 500]);
                  }}
                  variant="outline"
                  className="mt-6"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination (Mock) */}
            {filteredProducts.length > 12 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronRight className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button variant="default" className="w-10 h-10 p-0">
                    1
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    2
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0">
                    3
                  </Button>
                  <span className="text-gray-400 px-2">...</span>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer3 />
    </>
  );
}
