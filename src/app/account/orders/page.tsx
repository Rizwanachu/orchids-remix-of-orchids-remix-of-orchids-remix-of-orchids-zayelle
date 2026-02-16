import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Package, ChevronRight } from "lucide-react";

const demoOrders = [
  {
    id: "ZAY-10001",
    date: "Feb 10, 2026",
    status: "Delivered",
    total: "Rs. 1,798",
    items: 2,
    statusColor: "text-green-600 bg-green-50",
  },
  {
    id: "ZAY-10002",
    date: "Feb 14, 2026",
    status: "In Transit",
    total: "Rs. 899",
    items: 1,
    statusColor: "text-blue-600 bg-blue-50",
  },
];

export default function MyOrdersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF9F6]">
        <div className="bg-[#F5F2ED] py-10 md:py-14">
          <div className="container px-4 md:px-8">
            <h1 className="text-[32px] md:text-[40px] font-serif text-[#1A1A1A] tracking-tight">
              My Orders
            </h1>
            <nav className="mt-2 text-[13px] text-[#757575]">
              <a href="/account" className="hover:text-[#1A1A1A] transition-colors">Account</a>
              <span className="mx-2">&gt;</span>
              <span className="text-[#1A1A1A]">My Orders</span>
            </nav>
          </div>
        </div>

        <div className="container px-4 md:px-8 py-12 md:py-16 max-w-[800px] mx-auto">
          {demoOrders.length > 0 ? (
            <div className="space-y-4">
              {demoOrders.map((order) => (
                <div key={order.id} className="bg-white border border-[#E8E4DE] rounded-[12px] p-5 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-[15px] font-semibold text-[#1A1A1A]">{order.id}</p>
                      <p className="text-[13px] text-[#757575]">{order.date}</p>
                    </div>
                    <span className={`text-[12px] font-medium px-3 py-1 rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#F5F2ED]">
                    <div className="flex items-center gap-2 text-[14px] text-[#757575]">
                      <Package size={16} />
                      <span>{order.items} item{order.items > 1 ? "s" : ""}</span>
                      <span className="mx-1">|</span>
                      <span className="font-medium text-[#1A1A1A]">{order.total}</span>
                    </div>
                    <a href={`/pages/track-order`} className="flex items-center gap-1 text-[13px] text-[#5C4B3D] hover:underline underline-offset-4">
                      Track <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package size={48} className="text-[#D4C8BE] mx-auto mb-4" />
              <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-2">No orders yet</h2>
              <p className="text-[14px] text-[#757575] mb-6">Start shopping to see your orders here.</p>
              <a
                href="/collections/all"
                className="inline-flex items-center justify-center bg-[#5C4B3D] text-white px-8 py-3.5 rounded-sm font-medium text-[13px] uppercase tracking-wider hover:bg-[#4A3C31] transition-colors"
              >
                Shop Now
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
