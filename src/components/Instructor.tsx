import React from "react";
import { Award, GraduationCap, Mic2, Mail, CheckCircle, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const Instructor: React.FC = () => {
  const famousArtists = [
    "Hoài Lâm",
    "Phi Nhung",
    "Đan Trường",
    "Noo Phước Thịnh",
    "Hồ Quang Hiếu",
    "Khánh Phương",
    "Lương Bích Hữu",
    "Khởi My"
  ];

  return (
    <section id="giang-vien" className="py-20 md:py-28 bg-[#0e1017] border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>NGƯỜI ĐỒNG HÀNH CÙNG BẠN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              TÁC GIẢ TRỌN BỘ KHOÁ HỌC
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Học trực tiếp từ kinh nghiệm sản xuất thực chiến của Producer uy tín hàng đầu
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-[#141622] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Instructor Portrait */}
            <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[500px]">
              <ScrollReveal direction="right" duration={0.65} className="h-full">
                <img
                  src="/src/assets/images/instructor_ho_thien_quan_1794222376245.jpg"
                  alt="Nhạc Sĩ Hồ Thiện Quân - DEHIT Productions"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141622] via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141622]" />

                <div className="absolute bottom-5 left-5 right-5 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                  <div className="text-xs uppercase font-semibold text-[#ffb800] tracking-wider">Tác giả khóa học</div>
                  <div className="text-xl font-bold text-white">Nhạc Sĩ Hồ Thiện Quân</div>
                  <div className="text-xs text-neutral-300">Giám đốc DEHIT Productions · Music Producer</div>
                </div>
              </ScrollReveal>
            </div>

            {/* Credentials & Bio */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <ScrollReveal direction="left" delay={0.15} duration={0.65}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black text-white">Nhạc Sĩ Hồ Thiện Quân</span>
                  </div>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    Với hơn 12 năm hoạt động chuyên nghiệp trong lĩnh vực hòa âm phối khí, sáng tác và sản xuất âm nhạc cho các dự án âm nhạc thương mại, gameshow truyền hình và các ca sĩ tên tuổi tại Việt Nam, Nhạc sĩ Hồ Thiện Quân đúc kết toàn bộ bí quyết làm nghề vào bộ giáo trình USB này để giúp bạn tiết kiệm hàng năm trời mày mò tự học.
                  </p>

                  {/* 3 Core Highlights (as requested by user) */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3.5 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/15 text-[#ff6b00] flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Tốt nghiệp Berklee College of Music (Boston, USA) & Nhạc Viện TP.HCM
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Nền tảng kiến thức âm nhạc hàn lâm chuẩn quốc tế kết hợp cùng tư duy sản xuất âm nhạc hiện đại, trực quan, cập nhật xu hướng mới nhất thế giới.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#ffb800]/15 text-[#ffb800] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          12+ năm kinh nghiệm sản xuất âm nhạc chuyên nghiệp
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Giám đốc âm nhạc tại DEHIT Productions, đào tạo thành công hơn 3.500+ học viên, hàng chục producer trẻ đang làm việc tại các studio chuyên nghiệp.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                        <Mic2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Hợp tác sản xuất cùng các nghệ sĩ & ca sĩ hàng đầu
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Từng tham gia phối khí, mix & master cho nhiều nghệ sĩ tên tuổi: Hoài Lâm, Cố ca sĩ Phi Nhung, Đan Trường, Noo Phước Thịnh, Hồ Quang Hiếu…
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Artists Produced Strip */}
                  <div className="mb-6">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2.5">
                      Nghệ sĩ đã từng làm việc & hợp tác:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {famousArtists.map((artist) => (
                        <span
                          key={artist}
                          className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300 font-medium"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Personal Mentor Guarantee */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Giải đáp thắc mắc chuyên môn 1-1 qua email trọn đời</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400 font-mono">
                    <Mail className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>hothienquan@gmail.com</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
