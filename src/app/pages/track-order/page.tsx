"use client";

import React, { useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF9F6]">
        <div className="bg-[#F5F2ED] py-12 md:py-20">
          <div className="container px-4 md:px-8 max-w-[800px] mx-auto text-center">
            <h1 className="text-[36px] md:text-[48px] font-serif text-[#1A1A1A] tracking-tight mb-4">
              Track Your Order
            </h1>
            <p className="text-[16px] text-[#757575]">
              Enter your order details below to check the status of your delivery.
            </p>
          </div>
        </div>

        <div className="container px-4 md:px-8 py-12 md:py-20 max-w-[600px] mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-[#1A1A1A] uppercase tracking-wider mb-2">
                  Order Number
                </label>
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#E8E4DE] rounded-sm text-[14px] focus:outline-none focus:border-[#5C4B3D] transition-colors bg-white"
                  placeholder="e.g. ZAY-10001"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-[#1A1A1A] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#E8E4DE] rounded-sm text-[14px] focus:outline-none focus:border-[#5C4B3D] transition-colors bg-white"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#5C4B3D] text-white py-3.5 rounded-sm font-medium text-[13px] uppercase tracking-wider hover:bg-[#4A3C31] transition-colors"
              >
                <Search size={14} />
                Track Order
              </button>
            </form>
          ) : (
            <div className="text-center">
              {/* Demo tracking result */}
              <div className="mb-8">
                <p className="text-[14px] text-[#757575] mb-1">Order Number</p>
                <p className="text-[18px] font-semibold text-[#1A1A1A]">{orderId}</p>
              </div>

              <div className="flex items-center justify-center gap-2 md:gap-8 mb-10">
                {[
                  { icon: CheckCircle, label: "Confirmed", active: true },
                  { icon: Package, label: "Packed", active: true },
                  { icon: Truck, label: "Shipped", active: false },
                  { icon: CheckCircle, label: "Delivered", active: false },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className={`flex flex-col items-center ${step.active ? "text-[#5C4B3D]" : "text-[#D4C8BE]"}`}>
                      <step.icon size={24} />
                      <span className="text-[11px] mt-1 font-medium">{step.label}</span>
                    </div>
                    {i < 3 && <div className={`w-8 md:w-16 h-[2px] mx-1 md:mx-2 ${i < 1 ? "bg-[#5C4B3D]" : "bg-[#E8E4DE]"}`} />}
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#F5F2ED] rounded-[12px] text-left space-y-3">
                <p className="text-[14px] text-[#5C4B3D]">
                  <strong>Status:</strong> Your order has been confirmed and is being packed.
                </p>
                <p className="text-[14px] text-[#5C4B3D]">
                  <strong>Estimated Delivery:</strong> 5-7 business days from dispatch.
                </p>
                <p className="text-[13px] text-[#757575]">
                  You will receive tracking updates via email and SMS once your order is shipped.
                </p>
              </div>

              <button
                onClick={() => { setSubmitted(false); setOrderId(""); setEmail(""); }}
                className="mt-6 text-[13px] text-[#5C4B3D] underline underline-offset-4 hover:text-[#1A1A1A] transition-colors"
              >
                Track another order
              </button>
            </div>
          )}

          <div className="mt-12 text-center p-6 bg-[#F5F2ED] rounded-[12px]">
            <p className="text-[14px] text-[#5C4B3D]">
              Need help with your order? <a href="/pages/contact" className="underline underline-offset-4 font-medium hover:text-[#1A1A1A]">Contact us</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
