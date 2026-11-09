import React, { useState } from "react";
import { FAQ_DATA } from "../data/faqData";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0e1017] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-3">
              <HelpCircle className="w-4 h-4" />
              <span>GIẢI ĐÁP THẮC MẮC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              Mọi thắc mắc trước khi đặt mua USB 64GB Học Làm Nhạc Toàn Diện
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.06 * idx} duration={0.5}>
                <div
                  className="bg-[#141624] border border-white/10 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#ff6b00] text-white" : "bg-white/5 text-neutral-400"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
