import React, { useState, useEffect } from "react";
import { Music2, ShoppingBag, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-white font-extrabold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 hover:text-[#ff7a00] transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b00] to-[#ff9900] flex items-center justify-center text-white shadow-md shadow-[#ff6b00]/30">
            <Music2 className="w-4 h-4 stroke-[2.5]" />
          </span>
          <span>DEHIT PRODUCTIONS</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <button
            onClick={() => scrollToSection("khoa-hoc")}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            7 Khóa Học
          </button>
          <button
            onClick={() => scrollToSection("giang-vien")}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Giảng Viên
          </button>
          <button
            onClick={() => scrollToSection("video-review")}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Video Demo
          </button>
          <button
            onClick={() => scrollToSection("bang-gia")}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Bảng Giá
          </button>
          <button
            onClick={() => scrollToSection("danh-gia")}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Đánh Giá
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollToSection("dang-ky")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] hover:from-[#ff7b1a] hover:to-[#ff9b1a] rounded-xl shadow-lg shadow-[#ff6b00]/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Đặt USB Ngay</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12141c] border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <button
            onClick={() => scrollToSection("khoa-hoc")}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#ff6b00]"
          >
            7 Khóa Học Trong 1 USB
          </button>
          <button
            onClick={() => scrollToSection("giang-vien")}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#ff6b00]"
          >
            Nhạc Sĩ Hồ Thiện Quân
          </button>
          <button
            onClick={() => scrollToSection("video-review")}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#ff6b00]"
          >
            Video Giới Thiệu & Review
          </button>
          <button
            onClick={() => scrollToSection("bang-gia")}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#ff6b00]"
          >
            Bảng Giá Ưu Đãi
          </button>
          <button
            onClick={() => scrollToSection("danh-gia")}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#ff6b00]"
          >
            Học Viên Đánh Giá
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection("dang-ky")}
              className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Đặt USB Ngay - 899K (Freeship)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
