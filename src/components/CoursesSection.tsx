import React, { useState } from "react";
import { COURSES_DATA, TOTAL_LESSONS, Course } from "../data/coursesData";
import { ChevronDown, ChevronUp, PlayCircle, Search, Sparkles, FolderOpen, Layers, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const CoursesSection: React.FC = () => {
  // Store expanded courses IDs
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({
    "pop-ballad": true, // open first one by default
    "bolero": false,
    "remix-edm": false,
    "rnb-hiphop": false,
    "sang-tac-pop": false,
    "thu-am-mixing": false,
    "suno-ai": false,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const toggleCourse = (id: string) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    COURSES_DATA.forEach((c) => {
      allExpanded[c.id] = true;
    });
    setExpandedCourses(allExpanded);
  };

  const collapseAll = () => {
    setExpandedCourses({});
  };

  // Filter courses based on search
  const filteredCourses = COURSES_DATA.filter((c) => {
    const matchQuery =
      searchQuery.trim() === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lessons.some((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.software.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchQuery) return false;

    if (activeTab === "all") return true;
    if (activeTab === "beat") return ["pop-ballad", "bolero", "remix-edm", "rnb-hiphop"].includes(c.id);
    if (activeTab === "songwriting") return ["sang-tac-pop"].includes(c.id);
    if (activeTab === "mixing") return ["thu-am-mixing"].includes(c.id);
    if (activeTab === "ai") return ["suno-ai"].includes(c.id);

    return true;
  });

  return (
    <section id="khoa-hoc" className="py-20 md:py-28 bg-[#0e1017] border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>GIÁO TRÌNH PRODUCER CHUYÊN NGHIỆP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              7 KHÓA HỌC TRONG 1 USB
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3 [text-wrap:balance]">
              Hơn <strong className="text-[#ffb800]">{TOTAL_LESSONS} video bài giảng</strong> chi tiết được sắp xếp khoa học, cầm tay chỉ việc từ cơ bản đến nâng cao. Nhận toàn bộ dự án mẫu (.flp, .cpr) và bộ sample bản quyền.
            </p>

            {/* Controls: Search and Expand */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141622] p-2 sm:p-3 rounded-2xl border border-white/10">
              {/* Search Input */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm bài học (808, Melodyne, Bolero, Sibelius...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 text-white placeholder:text-neutral-500 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-[#ff6b00]"
                />
              </div>

              {/* Expand / Collapse buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Mở tất cả
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Thu gọn
                </button>
              </div>
            </div>

            {/* Genre Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {[
                { id: "all", label: "Tất cả 7 Khóa" },
                { id: "beat", label: "Phối Beat (4 Khóa)" },
                { id: "songwriting", label: "Sáng Tác Ca Khúc" },
                { id: "mixing", label: "Thu Âm & Mixing" },
                { id: "ai", label: "Suno A.I Đột Phá" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/30"
                      : "bg-[#141622] text-neutral-400 hover:text-white border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Courses Accordion List */}
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12 bg-[#141622] rounded-2xl border border-white/5 text-neutral-400 text-sm">
              Không tìm thấy bài học nào phù hợp với từ khóa &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredCourses.map((course: Course, idx: number) => {
              const isExpanded = !!expandedCourses[course.id];

              return (
                <ScrollReveal key={course.id} direction="up" delay={0.06 * Math.min(idx, 4)} duration={0.5}>
                  <div
                    className={`bg-[#141622] rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? "border-[#ff6b00]/50 shadow-xl shadow-black/50"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Header / Clickable Card summary */}
                    <button
                      onClick={() => toggleCourse(course.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                    >
                      <div className="flex items-start sm:items-center gap-4">
                        {/* Icon & Order number */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex flex-col items-center justify-center shrink-0 group-hover:border-[#ff6b00]/40 transition-colors">
                          <span className="text-lg">{course.softwareIcon}</span>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-black text-[#ff6b00] tracking-wider uppercase font-mono">
                              {course.order}
                            </span>
                            <span className="text-neutral-500">·</span>
                            <span className="text-xs text-neutral-400 font-medium">
                              {course.software}
                            </span>
                            <span className="text-neutral-500">·</span>
                            <span className="text-xs font-bold text-[#ffb800] bg-[#ffb800]/10 px-2 py-0.5 rounded font-mono">
                              {course.videoCount} Video bài giảng
                            </span>
                          </div>

                          <h3 className="text-base sm:text-xl font-black text-white group-hover:text-[#ff6b00] transition-colors">
                            {course.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-neutral-400 mt-1 line-clamp-1 sm:line-clamp-none">
                            {course.shortDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="hidden md:flex flex-col items-end text-right">
                          <span className="text-xs font-semibold text-neutral-300">
                            {course.videoCount} Bài Học
                          </span>
                          <span className="text-[11px] text-emerald-400">Kèm Project Mẫu</span>
                        </div>
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isExpanded
                              ? "bg-[#ff6b00] text-white"
                              : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                          }`}
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content: Full Lessons List */}
                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-white/10 bg-black/20 animate-fadeIn">
                        {/* Key highlights strip */}
                        <div className="flex flex-wrap items-center gap-2.5 py-3 mb-4 text-xs text-neutral-300 border-b border-white/5">
                          <span className="text-neutral-400 font-semibold">Điểm nổi bật:</span>
                          {course.highlights.map((hl, i) => (
                            <span
                              key={i}
                              className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-neutral-200 flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>

                        {/* Full Lessons Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {course.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
                            >
                              <div className="w-6 h-6 rounded-lg bg-black/40 border border-white/10 text-neutral-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {lesson.id.toString().padStart(2, "0")}
                              </div>
                              <div className="flex-1 text-xs sm:text-sm text-neutral-200 font-medium leading-snug">
                                {lesson.title}
                              </div>
                              <PlayCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })
          )}
        </div>

        {/* Bottom course summary banner with order button */}
        <ScrollReveal direction="up" delay={0.2} duration={0.6}>
          <div className="mt-12 bg-gradient-to-r from-[#171926] via-[#1c1f30] to-[#171926] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30 flex items-center justify-center shrink-0">
                <Layers className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  Sở hữu toàn bộ 7 khóa học &amp; 115+ Video trong 1 USB
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  Chỉ 899.000đ (Tiết kiệm 79% so với giá gốc 4.374.000đ). Freeship COD toàn quốc.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById("dang-ky");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white font-extrabold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#ff6b00]/25 cursor-pointer whitespace-nowrap"
            >
              Đặt Mua USB 899K Ngay
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
