import React from "react";
import { Music2, Mail, Phone, MapPin, ShieldCheck, Truck, RefreshCw, ShoppingBag } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FooterProps {
  onOrderClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOrderClick }) => {
  return (
    <footer className="bg-[#08090d] text-neutral-400 border-t border-white/10 pt-16 pb-12 relative">
      {/* Final Call to Action Block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <ScrollReveal direction="up" duration={0.65}>
          <div className="relative rounded-3xl bg-gradient-to-r from-[#1b1c2b] via-[#211d2e] to-[#1b1c2b] border border-[#ff6b00]/30 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6b00]/10 blur-[100px] pointer-events-none" />

            <span className="text-xs uppercase tracking-widest text-[#ffb800] font-bold">
              CƠ HỘI ĐỘT PHÁ SỰ NGHIỆP PRODUCER
            </span>

            <h3 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-4 [text-wrap:balance]">
              Khởi Đầu Hành Trình Sản Xuất Âm Nhạc Chuyên Nghiệp Ngay Hôm Nay
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Trọn bộ 7 khóa học trong 1 chiếc USB 64GB kim loại chỉ còn <strong className="text-white font-mono">899.000đ</strong>. Freeship toàn quốc, nhận hàng kiểm tra mới thanh toán.
            </p>

            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9900] hover:from-[#ff7a1a] hover:to-[#ffa61a] text-white font-black text-base sm:text-lg shadow-xl shadow-[#ff6b00]/30 transition-transform hover:scale-105 active:scale-95 cursor-pointer glow-accent"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>ĐẶT MUA USB 64GB - 899K (FREESHIP COD)</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs sm:text-sm">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b00] to-[#ff9900] flex items-center justify-center text-white shadow-md shadow-[#ff6b00]/30">
                <Music2 className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span>DEHIT PRODUCTIONS</span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md mb-4">
              Đơn vị sản xuất âm nhạc chuyên nghiệp và đào tạo Producer hàng đầu. Bộ sản phẩm USB 64GB Học Làm Nhạc Toàn Diện được thiết kế độc quyền bởi Nhạc sĩ Hồ Thiện Quân.
            </p>
            <div className="flex flex-col gap-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Email hỗ trợ giảng viên: <strong>hothienquan@gmail.com</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Hotline / Zalo tư vấn: <strong>0988.234.567</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Studio: Quận 1, TP. Hồ Chí Minh &amp; Đống Đa, Hà Nội</span>
              </div>
            </div>
          </div>

          {/* Col 2: Course List */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              7 Khóa Học Độc Quyền
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>01. Làm Beat Pop Ballad (16 video)</li>
              <li>02. Làm Beat Bolero Trữ Tình (16 video)</li>
              <li>03. Beat Remix – House – EDM (18 video)</li>
              <li>04. Beat R&amp;B – Hiphop Trap (20 video)</li>
              <li>05. Sáng Tác Nhạc Pop &amp; Sibelius (21 video)</li>
              <li>06. Thu Âm &amp; Mixing Cubase (16 video)</li>
              <li>07. Suno A.I Sản Xuất Âm Nhạc (6 video)</li>
            </ul>
          </div>

          {/* Col 3: Cam kết & Bảo hành */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Chính Sách &amp; Cam Kết
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bảo hành 1 đổi 1 trong 12 tháng</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#ff6b00] shrink-0" />
                <span>Freeship toàn quốc - Ship COD</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#ffb800] shrink-0" />
                <span>Hỗ trợ kỹ thuật cài đặt từ xa</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Giải đáp 1-1 trọn đời với Giảng viên</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Copyright © 2026 DEHIT PRODUCTIONS. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Chính sách bảo mật</span>
            <span>·</span>
            <span>Điều khoản dịch vụ</span>
            <span>·</span>
            <span>Hướng dẫn kích hoạt USB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
