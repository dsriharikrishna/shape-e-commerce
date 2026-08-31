"use client";
import { Product } from "@/shared/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/shared/store/Context";
import { allProducts } from "@/shared/data/products";
import { Button, buttonVariants } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Modal, ModalDialog, ModalContent, ModalHeader, ModalCloseButton } from "@/shared/components/ui/modal";

export default function CompareView() {
  const {
    removeFromCompareItem,
    compareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    setItems([
      ...allProducts.filter((product) => compareItem.includes(product.id)),
    ]);
  }, [compareItem]);

  return (
    <Modal
      className="has-rbt-top-folder-shape"
      id="compareReviewModal"
      tabIndex={-1}
      aria-labelledby="compareReviewModalLabel"
      aria-hidden="true"
    >
      <ModalDialog className="modal-dialog-centered xl-size">
        <ModalContent>
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <ModalHeader>
            <ModalCloseButton
              type="button"
import { cn } from "@/shared/lib/utils";

export default function CompareView() {
  const {
    removeFromCompareItem,
    compareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    setItems([
      ...allProducts.filter((product) => compareItem.includes(product.id)),
    ]);
  }, [compareItem]);

  return (
    <Modal
      className="has-rbt-top-folder-shape"
      id="compareReviewModal"
      tabIndex={-1}
      aria-labelledby="compareReviewModalLabel"
      aria-hidden="true"
    >
      <ModalDialog className="modal-dialog-centered xl-size">
        <ModalContent>
          <div className="rbt-folder-shape-right-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={85}
              height={90}
              viewBox="0 0 85 90"
              fill="none"
            >
              <path
                d="M0 0H11.1844C14.5695 0 17.7971 1.42971 20.0716 3.93671L82.1927 72.4059C83.9992 74.397 84.9999 76.9893 84.9999 79.6778C84.9999 85.6547 85.0001 90 85.0001 90H0V0Z"
                fill="white"
              />
            </svg>
          </div>
          <ModalHeader>
            <ModalCloseButton
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              
            </ModalCloseButton>
          </ModalHeader>
          <div className="w-full relative z-10 flex flex-col p-6 md:p-8">
            <div className="flex flex-col w-full h-full">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <h5
                  id="compareReviewModalLabel"
                  className="text-xl md:text-2xl font-bold text-gray-900 m-0"
                >
                  Compare Product
                </h5>
              </div>
              
              <div className="w-full overflow-x-auto custom-scrollbar pb-4">
                <table className="w-full min-w-[800px] border-collapse text-sm text-left">
                  <tbody>
                    {/* Search Row */}
                    <tr>
                      <td className="p-4 align-top w-[250px]" />
                      {items.map((product, i) => (
                        <td key={i} className="p-4 align-top w-[300px]">
                          <div className="relative">
                            <Input
                              className="w-full h-10 pl-4 pr-10 rounded-lg bg-gray-50 border-gray-200 focus-visible:ring-primary focus-visible:border-primary shadow-sm"
                              type="text"
                              placeholder="Search and Select Product"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                              <i className="fa-sharp fa-solid fa-magnifying-glass" />
                            </button>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Product Summary Row */}
                    <tr>
                      <td className="p-4 align-top border-b border-gray-100 w-[250px]">
                        <div className="flex flex-col gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 56 56" fill="currentColor">
                              <path d="M28 7.5C25.0767 7.5 22.6975 9.88262 22.6975 12.8112C22.6936 13.7244 22.9272 14.6229 23.3755 15.4184C23.8237 16.214 24.4712 16.8793 25.2543 17.349C26.0823 17.8506 27.0319 18.1157 28 18.1157C28.9681 18.1157 29.9177 17.8506 30.7458 17.349C31.5289 16.8794 32.1764 16.2141 32.6247 15.4185C33.073 14.6229 33.3066 13.7244 33.3025 12.8112C33.3025 9.88262 30.9234 7.5 28 7.5ZM35.1392 42.6269H31.1667L31.1675 42.6225V19.1112C30.1963 19.61 29.1025 19.8638 28 19.8638C26.8975 19.8638 25.8038 19.61 24.8325 19.1112V42.6225L24.8334 42.6269H20.8609C19.8457 42.628 18.8723 43.0318 18.1544 43.7496C17.4364 44.4674 17.0324 45.4406 17.031 46.4559V47.6258C17.031 47.8578 17.1232 48.0804 17.2873 48.2445C17.4514 48.4086 17.674 48.5008 17.906 48.5008H38.094C38.3261 48.5008 38.5487 48.4086 38.7127 48.2445C38.8768 48.0804 38.969 47.8578 38.969 47.6258V46.4559C38.9676 45.4406 38.5637 44.4674 37.8457 43.7496C37.1277 43.0318 36.1544 42.628 35.1392 42.6269ZM12.2439 33.8524C15.9495 33.8524 18.9657 30.8371 18.9657 27.1306C18.9657 26.8629 18.9989 25.8575 18.8922 25.6134L18.8904 25.6055L13.5914 13.6871H21C20.9292 13.1059 20.9292 12.5183 21 11.9371H12.2395C12.0724 11.9416 11.9097 11.9922 11.7695 12.0833C11.6293 12.1744 11.517 12.3025 11.445 12.4534L5.60003 25.6037L5.59915 25.6064C5.4889 25.854 5.52128 26.8506 5.52128 27.1297C5.52215 30.8363 8.5374 33.8524 12.2439 33.8524ZM12.243 14.9611L16.744 25.0849H7.73853L12.243 14.9611ZM50.477 25.9529C50.4762 25.9161 50.4604 25.8803 50.4552 25.8435C50.4438 25.7612 50.4333 25.6799 50.4009 25.6064L50.4 25.6037L44.555 12.4525C44.4837 12.3013 44.3716 12.1729 44.2315 12.0818C44.0913 11.9906 43.9286 11.9402 43.7614 11.9362H35C35.0709 12.5174 35.0709 13.1051 35 13.6862H42.4086L37.1097 25.6046L37.1079 25.6125C37.086 25.6633 37.0834 25.7219 37.0712 25.777C37.0589 25.8356 37.0362 25.8934 37.0362 25.952L37.0344 25.959V27.1289C37.0344 30.8354 40.0497 33.8506 43.757 33.8506C47.4627 33.8506 50.4788 30.8354 50.4788 27.1289V25.959L50.477 25.9529ZM39.256 25.0849L43.757 14.9611L48.2615 25.0849H39.256Z" />
                            </svg>
                          </span>
                          <p className="text-gray-500 font-medium text-sm leading-relaxed m-0 pr-4">
                            Find and select products to see the differences
                            and similarities between them
                          </p>
                        </div>
                      </td>
                      {items.map((product, i) => (
                        <td key={i} className="p-4 align-top border-b border-gray-100">
                          <div className="flex flex-col relative group rounded-xl p-4 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all bg-white h-full">
                            <button
                              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                              onClick={() => removeFromCompareItem(product.id)}
                            >
                              <i className="fa-sharp fa-solid fa-xmark" />
                            </button>
                            <Link
                              href={`/product-single-default/${product.id}`}
                              className="block aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gray-50 relative"
                            >
                              <Image
                                alt="Product Image"
                                src={product.imgSrc}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </Link>
                            <div className="flex flex-col flex-1">
                              <a href="#" className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 hover:underline">
                                T-shirts
                              </a>
                              <h6 className="text-base font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                                <Link href={`/product-single-default/${product.id}`} className="hover:text-primary transition-colors">
                                  {product.title}
                                </Link>
                              </h6>
                              <a
                                className={cn(
                                  buttonVariants({ variant: "outline", size: "sm" }),
                                  "mt-auto flex items-center justify-center gap-2 w-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                                )}
                                href="#"
                                onClick={() => addProductToCart(product.id)}
                              >
                                <i className="fa-regular fa-cart-shopping" />
                                {isAddedToCartProducts(product.id) ? "Added" : "Add To Cart"}
                              </a>
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Customer Rating */}
                    <tr className="border-b border-gray-50">
                      <td className="p-4 align-middle font-bold text-gray-900 text-sm whitespace-nowrap bg-gray-50/50">
                        Customer Rating
                      </td>
                      {items.map((product, i) => (
                        <td key={i} className="p-4 align-middle text-center">
                          <div className="flex items-center justify-center gap-2">
                            <ul className="flex items-center gap-1 text-orange-400 text-xs m-0 p-0 list-none">
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                            </ul>
                            <p className="text-sm font-medium text-gray-500 m-0">(46)</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Price */}
                    <tr className="border-b border-gray-50">
                      <td className="p-4 align-middle font-bold text-gray-900 text-sm whitespace-nowrap bg-gray-50/50">Price</td>
                      {items.map((product, i) => (
                        <td key={i} className="p-4 align-middle text-center">
                          <span className="text-lg font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                          </span>
                        </td>
                      ))}
                    </tr>
                    
                    {/* Features */}
                    {[
                      { name: "Sold By", val: "A4C Online" },
                      { name: "Color", val: "Black" },
                      { name: "Fit Type", val: "In-Ear" },
                      { name: "Item Dimensions", val: "0.67 x 0.79 x 1.65 inches" },
                      { name: "Special Features", val: "wireless, voice assistant, Bluetooth, noise cancellation, adaptive, wireless charging" }
                    ].map((feature, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0">
                        <td className="p-4 align-middle font-bold text-gray-900 text-sm whitespace-nowrap bg-gray-50/50">
                          {feature.name}
                        </td>
                        {items.map((product, i) => (
                          <td key={i} className="p-4 align-middle text-center text-sm text-gray-600 font-medium">
                            {feature.val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalDialog>
    </Modal>
  );
}
