import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Truck, Clock, Sparkles, ArrowRight, Play, Laptop } from "lucide-react";
import { AudioPreviewWidget } from "./AudioPreviewWidget";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onOrderClick: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreCourses }) => {
  // Countdown timer state for conversion urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const softwares = [
    { name: "FL Studio", desc: "Producer Edition 21+", iconColor: "from-orange-500 to-amber-600", initial: "FL" },
    { name: "Steinberg Cubase", desc: "Pro Studio Engine", iconColor: "from-blue-600 to-cyan-500", initial: "CB" },
    { name: "Avid Sibelius", desc: "Ký âm & Sáng tác", iconColor: "from-purple-600 to-pink-500", initial: "SB" },
    { name: "Suno A.I", desc: "A.I Music Generation", iconColor: "from-emerald-500 to-teal-400", initial: "AI" },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#ff6b00]/15 via-[#ff9900]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#ff6b00]/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Announcement & Social Proof Bar */}
        <ScrollReveal direction="down" duration={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#ff6b00]/15 border border-[#ff6b00]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#ffb800]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BÁN CHẠY NHẤT · 3.500+ HỌC VIÊN ĐÃ SỞ HỮU</span>
            </div>

            {/* Countdown timer pill */}
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full text-xs text-neutral-300 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>Ưu đãi 79% còn:</span>
              <span className="font-bold text-white bg-black/40 px-1.5 py-0.5 rounded">
                {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <ScrollReveal direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.15] mb-5 [text-wrap:balance]">
              USB 64GB HỌC LÀM NHẠC <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff941a] to-[#ffb800]">
                TOÀN DIỆN
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15} duration={0.6}>
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8 [text-wrap:balance]">
              Trọn bộ 7 khóa học Producer từ căn bản đến nâng cao —{" "}
              <span className="text-white font-semibold underline decoration-[#ff6b00] decoration-2 underline-offset-4">
                115+ video bài giảng
              </span>
              , học offline mọi lúc mọi nơi không cần kết nối mạng.
            </p>
          </ScrollReveal>

          {/* Software Badges */}
          <ScrollReveal direction="up" delay={0.2} duration={0.6}>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-8">
              {softwares.map((sw) => (
                <div
                  key={sw.name}
                  className="flex items-center gap-2.5 bg-[#161822] border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-xl transition-all shadow-sm"
                >
                  <div
                    className={`w-7 h-7 rounded-lg bg-gradient-to-br ${sw.iconColor} flex items-center justify-center text-white font-black text-xs shadow-inner`}
                  >
                    {sw.initial}
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white leading-tight">{sw.name}</div>
                    <div className="text-[10px] text-neutral-400">{sw.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Main CTA & Secondary Action */}
          <ScrollReveal direction="up" delay={0.25} duration={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-[#ff6b00] via-[#ff7b1a] to-[#ff9900] hover:from-[#ff7b1a] hover:to-[#ffa61a] rounded-2xl shadow-xl shadow-[#ff6b00]/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer group glow-accent"
              >
                <span className="text-xl">🎵</span>
                <span>Đặt USB Ngay - Combo 7 Khoá - 899K</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-bold text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Xem giáo trình 7 khóa</span>
                <span className="text-xs bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full font-mono">115+ Video</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Pricing anchor and guarantee chips */}
          <ScrollReveal direction="up" delay={0.3} duration={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="line-through text-neutral-400">4.374.000đ</span>
                <span className="font-bold text-[#ffb800] text-sm">Chỉ 899.000đ</span>
                <span className="bg-[#ff6b00]/20 text-[#ff7a00] px-1.5 py-0.5 rounded text-[10px] font-bold">-79%</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-1 text-neutral-300">
                <Truck className="w-4 h-4 text-[#ff6b00]" />
                <span>Freeship toàn quốc · Ship COD</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-1 text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bảo hành 1 đổi 1 trong 12 tháng</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Visual Presentation: USB Box Showcase + Studio Interface */}
        <ScrollReveal direction="up" delay={0.2} duration={0.7}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12141c] shadow-2xl mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual media slot */}
              <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden group">
                <img
                  src="/src/assets/images/hero_usb_music_producer_1794222375574.jpg"
                  alt="USB 64GB Học Làm Nhạc Toàn Diện DEHIT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#12141c]/40 lg:to-[#12141c]" />

                {/* Floating feature pills on image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-xs">
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>USB 3.0 Kim Loại 64GB Siêu Bền</span>
                  </span>
                  <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Học Offline 100% Không Cần Mạng</span>
                  </span>
                </div>
              </div>

              {/* Right side interactive audio & course benefits */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#12141c]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-[#ff6b00] font-bold">Trọn Gói Sản Phẩm</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold px-2.5 py-0.5 rounded-full">
                      Sẵn hàng trong kho
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                    Tất Cả Trong 1 Chiếc USB Nhỏ Gọn
                  </h3>

                  <ul className="space-y-3 mb-6 text-sm text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span><strong>115+ Video bài giảng Full HD 1080p</strong> quay cận cảnh từng thao tác, chất lượng âm thanh phòng thu.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span><strong>7 Khóa học đầy đủ:</strong> Pop Ballad, Bolero, EDM Remix, Trap/R&B, Sáng tác ca khúc, Thu âm Cubase, Suno A.I.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span><strong>Tặng kèm kho tài nguyên VIP:</strong> Bộ Sample Drums, Soundfont, VST Plugins tuyển chọn sẵn trong USB.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span><strong>Hỗ trợ kỹ thuật 1-1 qua Ultraview</strong> và giải đáp trực tiếp từ Nhạc sĩ Hồ Thiện Quân.</span>
                    </li>
                  </ul>
                </div>

                {/* Interactive Audio Widget embedded inside hero showcase */}
                <div className="mt-2">
                  <AudioPreviewWidget />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Trust stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {[
            { value: "115+", label: "Video bài giảng chi tiết", color: "text-[#ffb800]" },
            { value: "3.500+", label: "Học viên toàn quốc", color: "text-[#ff6b00]" },
            { value: "12 Tháng", label: "Bảo hành 1 đổi 1 chính hãng", color: "text-white" },
            { value: "100%", label: "Kiểm tra trước khi thanh toán", color: "text-emerald-400" },
          ].map((stat, idx) => (
            <ScrollReveal key={stat.label} direction="up" delay={0.1 * idx} duration={0.5}>
              <div className="bg-[#141620] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
                <div className={`text-2xl sm:text-3xl font-extrabold ${stat.color} tabular-nums font-mono`}>
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
