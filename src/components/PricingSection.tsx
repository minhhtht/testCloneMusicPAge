import React from "react";
import { Check, Sparkles, ShieldCheck, Truck, Zap, HardDrive, Cloud, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PricingSectionProps {
  onSelectPackage: (pkg: "usb" | "drive") => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="bang-gia" className="py-20 md:py-28 bg-[#0b0c10] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff6b00]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffb800] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>ƯU ĐÃI ĐẶC BIỆT HÔM NAY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              BẢNG GIÁ KHÓA HỌC
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Chọn hình thức học phù hợp với bạn nhất. Tiết kiệm đến 79% trong đợt khuyến mãi này.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: USB VẬT LÝ 64GB (Bán chạy nhất - viền vàng/glow nổi bật) */}
          <ScrollReveal direction="up" delay={0.1} duration={0.65} className="flex flex-col">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#1b1c2b] to-[#12141f] border-2 border-[#ffb800] p-7 sm:p-9 shadow-2xl flex flex-col justify-between glow-gold transform md:-translate-y-2 h-full">
              {/* Best seller floating badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff6b00] to-[#ffb800] text-black font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>BÁN CHẠY NHẤT · 92% HỌC VIÊN LỰA CHỌN</span>
              </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ffb800]/20 text-[#ffb800] flex items-center justify-center">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      USB VẬT LÝ 64GB
                    </h3>
                    <span className="text-xs text-[#ffb800] font-semibold">Bản chuẩn cao cấp Full quyền lợi</span>
                  </div>
                </div>
                <span className="bg-[#ff6b00]/20 border border-[#ff6b00]/40 text-[#ff7a00] font-bold text-xs px-2.5 py-1 rounded-lg">
                  TIẾT KIỆM 79%
                </span>
              </div>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    899.000đ
                  </span>
                  <span className="text-sm sm:text-base text-neutral-400 line-through font-mono">
                    4.374.000đ
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Đã bao gồm phí ship toàn quốc + Thu tiền tận nhà (COD)
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3.5 mb-8 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>USB Kim loại 64GB nguyên khối</strong> chính hãng, siêu bền, tốc độ cao.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>115+ Video bài giảng Full HD 1080p</strong> lưu sẵn, học offline không cần mạng internet.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>Freeship toàn quốc:</strong> Kiểm tra hàng trước khi thanh toán, an tâm 100%.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>Bảo hành chính hãng 12 tháng</strong> (1 đổi 1 tận nơi nếu lỗi từ nhà sản xuất).
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>Tặng kho Sample Pack, Soundfont &amp; VST Plugins</strong> trị giá 1.500.000đ lưu sẵn trong USB.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>Hỗ trợ kỹ thuật cài đặt phần mềm</strong> từ xa qua Ultraview/AnyDesk.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-200">
                    <strong>Hỗ trợ giải đáp chuyên môn 1-1 qua email trọn đời</strong> trực tiếp với Nhạc sĩ Hồ Thiện Quân.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSelectPackage("usb")}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ffb800] hover:from-[#ff7a1a] hover:to-[#ffc21a] text-black font-black text-base shadow-lg shadow-[#ff6b00]/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ĐẶT MUA USB 64GB - 899K (COD TẬN TAY)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        {/* Card 2: BẢN DRIVE ONLINE */}
        <ScrollReveal direction="up" delay={0.2} duration={0.65} className="flex flex-col">
          <div className="rounded-3xl bg-[#13151f] border border-white/10 p-7 sm:p-9 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      BẢN DRIVE ONLINE
                    </h3>
                    <span className="text-xs text-neutral-400">Dành cho ai có sẵn mạng internet tốt</span>
                  </div>
                </div>
              </div>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    699.000đ
                  </span>
                  <span className="text-sm sm:text-base text-neutral-400 line-through font-mono">
                    2.800.000đ
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Nhận link Google Drive ngay sau khi xác nhận đơn
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-3.5 mb-8 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Nhận link Google Drive sau 1 phút:</strong> Học ngay tức thì không cần đợi ship.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Trọn bộ 115+ Video bài giảng Full HD:</strong> Xem trực tiếp hoặc tải về máy tính.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Học trên mọi thiết bị:</strong> Máy tính, laptop, điện thoại, iPad linh hoạt.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Truy cập vĩnh viễn:</strong> Không giới hạn thời gian hay số lần tải.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Tặng kho Sample pack &amp; tài liệu PDF</strong> đính kèm theo thư mục Drive.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 text-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-neutral-300">
                    <strong>Hỗ trợ giải đáp 1-1 qua email</strong> cùng Nhạc sĩ Hồ Thiện Quân.
                  </span>
                </div>

                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-white/5 text-neutral-500 flex items-center justify-center shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span className="text-neutral-400 line-through">
                    Không bao gồm USB vật lý 64GB kim loại &amp; tính năng cắm học offline khi không có internet.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSelectPackage("drive")}
              className="w-full py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <span>CHỌN BẢN DRIVE ONLINE - 699K</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);
};
