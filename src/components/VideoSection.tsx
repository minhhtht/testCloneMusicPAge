import React, { useState } from "react";
import { Play, Volume2, Sparkles, CheckCircle, ExternalLink, X, Monitor, Music } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const VideoSection: React.FC = () => {
  const [isPlayingMainVideo, setIsPlayingMainVideo] = useState(false);
  const [activeReviewVideo, setActiveReviewVideo] = useState<number | null>(null);

  const studentReviews = [
    {
      id: 1,
      title: "Học viên Hoàng Long khoe beat Vinahouse hoàn thành sau 5 ngày",
      author: "Hoàng Long (Hà Nội)",
      duration: "03:45",
      type: "FL Studio Project Review",
      stats: "Đã có 12.000+ views trên TikTok"
    },
    {
      id: 2,
      title: "Học viên Ngọc Tuấn phối khí ca khúc Pop Ballad đệm hát piano",
      author: "Ngọc Tuấn (TP.HCM)",
      duration: "04:12",
      type: "Hòa âm phối khí & Thu âm",
      stats: "Được ca sĩ mua độc quyền 15 triệu"
    },
    {
      id: 3,
      title: "Đập hộp thực tế USB 64GB DEHIT và kiểm tra 115 bài giảng",
      author: "Trần Bảo (Đà Nẵng)",
      duration: "05:20",
      type: "Mở hộp & Trải nghiệm thực tế",
      stats: "Học offline siêu mượt, không cần mạng"
    }
  ];

  return (
    <section id="video-review" className="py-20 md:py-28 bg-[#0b0c10] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section 1: Main Introduction Video */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ffb800] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>XEM TRƯỚC BÀI GIẢNG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              VIDEO GIỚI THIỆU
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Khám phá phương pháp giảng dạy trực quan, chi tiết từng click chuột của Nhạc sĩ Hồ Thiện Quân
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Video Player Box */}
        <ScrollReveal direction="up" delay={0.15} duration={0.7}>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#141622] shadow-2xl mb-20 group">
            <div className="relative aspect-video max-h-[560px] w-full overflow-hidden bg-black flex items-center justify-center">
              {/* Background image preview */}
              <img
                src="/src/assets/images/hero_usb_music_producer_1794222375574.jpg"
                alt="Video Giới Thiệu Khóa Học Producer"
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <button
                  onClick={() => setIsPlayingMainVideo(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9900] text-white flex items-center justify-center shadow-2xl shadow-[#ff6b00]/50 hover:scale-110 active:scale-95 transition-all cursor-pointer mb-4 glow-accent"
                  aria-label="Phát video giới thiệu"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </button>
                <div className="text-lg sm:text-xl font-extrabold text-white">
                  Bấm để xem video giới thiệu tổng quan 7 khóa học
                </div>
                <div className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-md">
                  115+ Video quay trực tiếp màn hình DAW FL Studio & Cubase chất lượng Full HD sắc nét
                </div>
              </div>

              {/* Video footer metadata inside preview */}
              <div className="absolute bottom-4 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-neutral-300 pointer-events-none">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <Monitor className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Chất lượng video: 1080p Full HD · Âm thanh 320kbps</span>
                </div>
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <Music className="w-3.5 h-3.5 text-[#ffb800]" />
                  <span>Hướng dẫn thực chiến từ A-Z</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section 2: Review Thực Tế */}
        <div>
          <ScrollReveal direction="up" duration={0.6}>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                REVIEW THỰC TẾ TỪ HỌC VIÊN
              </h3>
              <p className="text-neutral-400 text-sm mt-1">
                Các sản phẩm và clip phản hồi chân thực sau khi học trọn bộ USB
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentReviews.map((rev, idx) => (
              <ScrollReveal key={rev.id} direction="up" delay={0.1 * idx} duration={0.55}>
                <div
                  onClick={() => setActiveReviewVideo(rev.id)}
                  className="bg-[#141622] border border-white/10 hover:border-[#ff6b00]/40 rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1.5 group shadow-lg"
                >
                  <div className="relative aspect-video bg-[#1a1d2d] flex items-center justify-center overflow-hidden">
                    <img
                      src="/src/assets/images/usb_box_product_showcase_1794222376457.jpg"
                      alt={rev.title}
                      className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-[#ff6b00] backdrop-blur-md text-white flex items-center justify-center transition-all shadow-md">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>

                    <span className="absolute bottom-2.5 right-2.5 bg-black/80 font-mono text-[11px] text-white px-2 py-0.5 rounded">
                      {rev.duration}
                    </span>
                    <span className="absolute top-2.5 left-2.5 bg-[#ff6b00] text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded">
                      {rev.type}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#ffb800] transition-colors line-clamp-2 mb-2">
                      {rev.title}
                    </h4>
                    <div className="text-xs text-neutral-400 flex items-center justify-between">
                      <span>{rev.author}</span>
                      <span className="text-[#ff6b00] font-semibold">{rev.stats}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Main Video Modal */}
      {(isPlayingMainVideo || activeReviewVideo !== null) && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#141624] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                <span className="text-sm font-bold text-white">
                  {isPlayingMainVideo ? "Video Giới Thiệu USB 64GB - DEHIT Productions" : "Video Review Trải Nghiệm Học Viên"}
                </span>
              </div>
              <button
                onClick={() => {
                  setIsPlayingMainVideo(false);
                  setActiveReviewVideo(null);
                }}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Đóng video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Canvas Simulation with Interactive Track Player */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
              <img
                src="/src/assets/images/hero_usb_music_producer_1794222375574.jpg"
                alt="Player Mockup"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />

              <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-[#ff6b00] text-white flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isPlayingMainVideo
                    ? "Demo Bài Giảng FL Studio & Cubase - Nhạc Sĩ Hồ Thiện Quân"
                    : "Học Viên Chia Sẻ Project & Đánh Giá Khóa Học"}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mb-5">
                  115+ Video bài giảng lưu sẵn trong USB 64GB với tốc độ đọc cực cao, không giật lag, xem offline trọn đời trên mọi máy tính.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                    ✓ Âm thanh chuẩn phòng thu 320kbps
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffb800]/20 text-[#ffb800] border border-[#ffb800]/30 font-medium">
                    ✓ File mẫu kèm theo từng bài học (.flp / .cpr)
                  </span>
                </div>
              </div>

              {/* Fake progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                <div className="h-full bg-[#ff6b00] w-1/3" />
              </div>
            </div>

            {/* Bottom Bar in Modal */}
            <div className="px-6 py-4 bg-[#10121a] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300">
              <span>Được biên soạn & giảng dạy độc quyền bởi <strong>Nhạc sĩ Hồ Thiện Quân</strong></span>
              <button
                onClick={() => {
                  setIsPlayingMainVideo(false);
                  setActiveReviewVideo(null);
                  const el = document.getElementById("dang-ky");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                Đặt USB Ngay - 899K
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
