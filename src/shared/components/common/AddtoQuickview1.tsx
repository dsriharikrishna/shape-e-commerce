"use client";

import { useContextElement } from "@/shared/store/Context";
import { Product } from "@/shared/types";

interface AddToQuickViewProps {
  product: Product;
  children: React.ReactNode;
  typeAnchor?: boolean;
  [key: string]: unknown;
}

export default function AddtoQuickview1({
  product,
  typeAnchor = false,
  children,
  ...rest
}: AddToQuickViewProps) {
  const { setQuickViewItem } = useContextElement();

  return (
    <>
      {!typeAnchor ? (
        <button
          onClick={() => {
            if (product) {
              setQuickViewItem(product);
            }
          }}
          {...rest}
        >
          {children}
        </button>
      ) : (
        <a
          onClick={() => {
            if (product) {
              setQuickViewItem(product);
            }
          }}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
}
