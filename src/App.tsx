import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Instructor } from "./components/Instructor";
import { VideoSection } from "./components/VideoSection";
import { CoursesSection } from "./components/CoursesSection";
import { PricingSection } from "./components/PricingSection";
import { OrderForm } from "./components/OrderForm";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { RecentBuyerToast } from "./components/RecentBuyerToast";
import { ShoppingBag, ArrowUp } from "lucide-react";

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<"usb" | "drive">("usb");

  const scrollToOrder = () => {
    const el = document.getElementById("dang-ky");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCourses = () => {
    const el = document.getElementById("khoa-hoc");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPackageFromPricing = (pkg: "usb" | "drive") => {
    setSelectedPackage(pkg);
    scrollToOrder();
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f1f3f5] flex flex-col selection:bg-[#ff6b00] selection:text-white">
      {/* 1. Header/Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOrderClick={scrollToOrder} onExploreCourses={scrollToCourses} />

        {/* 3. Section Giảng viên */}
        <Instructor />

        {/* 4. Section Video (Giới thiệu & Review thực tế) */}
        <VideoSection />

        {/* 5. Section 7 Khóa học trong 1 USB */}
        <CoursesSection />

        {/* 6. Section Pricing */}
        <PricingSection onSelectPackage={handleSelectPackageFromPricing} />

        {/* 7. Form Đặt hàng (id="dang-ky") */}
        <OrderForm
          selectedPackage={selectedPackage}
          onPackageChange={setSelectedPackage}
        />

        {/* 8. Section Testimonials (3.500+ người đã tin tưởng) */}
        <TestimonialsSection />

        {/* Objection Buster FAQ Section */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer onOrderClick={scrollToOrder} />

      {/* Real-time social proof toast */}
      <RecentBuyerToast />

      {/* Mobile Sticky Quick CTA Bar (15% height cap compliant) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#12141c]/95 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-black text-[#ffb800] font-mono">899.000đ</span>
            <span className="text-[11px] text-neutral-400 line-through">4.374K</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">Freeship COD toàn quốc</span>
        </div>

        <button
          onClick={scrollToOrder}
          className="flex-1 max-w-[190px] py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#ff6b00]/30 active:scale-95 transition-transform"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Đặt Mua USB Ngay</span>
        </button>
      </div>
    </div>
  );
}
