import React from "react";
import { TESTIMONIALS_DATA } from "../data/testimonialsData";
import { Star, ShieldCheck, Sparkles, Quote, ThumbsUp } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="danh-gia" className="py-20 md:py-28 bg-[#0b0c10] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffb800] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>ĐÁNH GIÁ CHÂN THỰC TỪ NGƯỜI DÙNG</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              3.500+ NGƯỜI ĐÃ TIN TƯỞNG
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Học viên từ khắp mọi miền đất nước đã tự tay sản xuất và ra mắt bài nhạc của riêng mình
            </p>

            {/* Aggregate Rating Banner */}
            <div className="inline-flex items-center gap-3 bg-[#141624] border border-white/10 px-5 py-2.5 rounded-full mt-6">
              <div className="flex items-center gap-1 text-[#ffb800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffb800]" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.98 / 5.0</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400 text-xs">Dựa trên 3.500+ đơn hàng đã giao</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.08 * (idx % 3)} duration={0.55}>
              <div
                className="bg-[#141624] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl group h-full"
              >
              <div>
                {/* Top: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#ffb800]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffb800]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Đã mua USB</span>
                  </div>
                </div>

                {/* Course tag */}
                <div className="text-[11px] font-medium text-[#ff6b00] mb-2 font-mono">
                  Đánh giá về: {item.highlightCourse}
                </div>

                {/* Comment quote */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff9900] text-white font-black text-xs flex items-center justify-center shadow-md">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                    <span className="text-xs text-neutral-400">{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-neutral-400 text-xs">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Hài lòng</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
};
