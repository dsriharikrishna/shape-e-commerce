"use client";

import { cn } from "@/lib/utils";

const services = [
  { id: 1, label: "Free Delivery", icon: "fa-truck-fast" },
  { id: 2, label: "Hot Deals", icon: "fa-stars" },
  { id: 3, label: "Authentic Brands", icon: "fa-badge-check" },
  { id: 4, label: "Cash On Delivery", icon: "fa-money-bill" },
  { id: 5, label: "Installment", icon: "fa-calendar-days" },
];

export default function FilterByService({
  selectedItems,
  onChange,
}: {
  selectedItems: string[];
  onChange: (value: string) => void;
}) {
  const toggleService = (label: string) => {
    onChange(label);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {services.map((service) => {
        const isActive = selectedItems.includes(service.label);
        return (
          <button
            key={service.id}
            onClick={(e) => {
              e.preventDefault();
              toggleService(service.label);
            }}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
              isActive 
                ? "bg-primary border-primary text-white" 
                : "bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
            )}
          >
            {service.label}
            <i className={cn("fa-regular", service.icon)} />
          </button>
        );
      })}
    </div>
  );
}
