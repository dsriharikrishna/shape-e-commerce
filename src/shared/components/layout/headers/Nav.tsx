"use client";
import Link from "next/link";
import {
  categoryMegamenus,
  shopPages,
  supportMenuItems,
} from "@/shared/data/menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export default function Nav() {
  return (
    <>
      {/* Home */}
      <li>
        <Link href="/" className="!no-underline text-gray-900 hover:text-primary transition-colors">Home</Link>
      </li>

      {/* Collections — simple dropdown */}
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger render={<a href="#!" style={{ cursor: "pointer" }} className="!no-underline text-gray-900 hover:text-primary transition-colors" />}>
              Collections <i className="fa-regular fa-chevron-down text-[10px] ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="w-56 bg-white z-[9999] shadow-xl border border-gray-100 rounded-xl p-2">
            {categoryMegamenus.map((cat, index) => (
              <DropdownMenuItem key={index} className="rounded-md hover:bg-gray-50 focus:bg-gray-50 p-0" render={<Link href={cat.href} className="w-full flex items-center px-3 py-2 cursor-pointer text-gray-900 font-medium !no-underline hover:!no-underline hover:text-primary transition-colors" />}>
                  <i className={`${cat.icon} mr-3 text-gray-400`} /> {cat.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>

      {/* Shop — clean dropdown */}
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger render={<a href="#!" style={{ cursor: "pointer" }} className="!no-underline text-gray-900 hover:text-primary transition-colors" />}>
              Shop <i className="fa-regular fa-chevron-down text-[10px] ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="w-56 bg-white z-[9999] shadow-xl border border-gray-100 rounded-xl p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
            {shopPages
              .flatMap((section) => section.items)
              .map((item, index) => (
                <DropdownMenuItem key={index} className="rounded-md hover:bg-gray-50 focus:bg-gray-50 p-0" render={<Link href={item.href} className="w-full flex justify-between items-center px-3 py-2 cursor-pointer text-gray-900 font-medium !no-underline hover:!no-underline hover:text-primary transition-colors" />}>
                    <span>{item.label}</span>
                    {item.badge && (
                      <div className={`bg-${item.badgeColor === 'primary' ? 'primary/10 text-primary' : 'red-50 text-red-500'} rounded-md text-[10px] font-bold px-2 py-0.5 ml-2`}>
                        {item.badge}
                      </div>
                    )}
                </DropdownMenuItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>

      {/* New Arrivals — direct link */}
      <li>
        <Link href="/shop?collection=new-arrivals" className="flex items-center gap-2 !no-underline text-gray-900 hover:text-primary transition-colors">
          New Arrivals
          <div className="bg-red-50 text-red-500 rounded-md text-[10px] font-bold px-2 py-0.5">
            New
          </div>
        </Link>
      </li>

      {/* Blog — direct link */}
      <li>
        <Link href="/blog-default" className="!no-underline text-gray-900 hover:text-primary transition-colors">Blog</Link>
      </li>

      {/* Support — dropdown */}
      <li>
        <DropdownMenu>
          <DropdownMenuTrigger render={<a href="#!" style={{ cursor: "pointer" }} className="!no-underline text-gray-900 hover:text-primary transition-colors" />}>
              Support <i className="fa-regular fa-chevron-down text-[10px] ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} className="w-56 bg-white z-[9999] shadow-xl border border-gray-100 rounded-xl p-2">
            {supportMenuItems.map((item, index) => (
              <DropdownMenuItem key={index} className="rounded-md hover:bg-gray-50 focus:bg-gray-50 p-0" render={<Link href={item.href} className="w-full flex justify-between items-center px-3 py-2 cursor-pointer text-gray-900 font-medium !no-underline hover:!no-underline hover:text-primary transition-colors" />}>
                  <span>{item.label}</span>
                  {item.badge && (
                    <div className={`bg-${item.badgeColor === 'primary' ? 'primary/10 text-primary' : 'red-50 text-red-500'} rounded-md text-[10px] font-bold px-2 py-0.5 ml-2`}>
                      {item.badge}
                    </div>
                  )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    </>
  );
}
