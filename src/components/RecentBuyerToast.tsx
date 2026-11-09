import React, { useState, useEffect } from "react";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

const BUYERS = [
  { name: "Anh Minh Tuấn", city: "Hà Nội", item: "USB 64GB Học Làm Nhạc", time: "2 phút trước" },
  { name: "Bạn Hoàng Long", city: "TP. Hồ Chí Minh", item: "USB 64GB Học Làm Nhạc", time: "5 phút trước" },
  { name: "Anh Quốc Bảo", city: "Đà Nẵng", item: "USB 64GB Học Làm Nhạc", time: "8 phút trước" },
  { name: "Bạn Thanh Vân", city: "Cần Thơ", item: "Bản Google Drive Online", time: "11 phút trước" },
  { name: "Anh Văn Hùng", city: "Hải Phòng", item: "USB 64GB Học Làm Nhạc", time: "14 phút trước" },
  { name: "Anh Trọng Nhân", city: "Bình Dương", item: "USB 64GB Học Làm Nhạc", time: "18 phút trước" },
];

export const RecentBuyerToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after initial 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % BUYERS.length);
        setIsVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !isVisible) return null;

  const currentBuyer = BUYERS[currentIndex];

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-[#181a26]/95 backdrop-blur-md border border-white/15 p-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#ff9900] text-white flex items-center justify-center shrink-0 shadow-md">
        <ShoppingBag className="w-4 h-4" />
      </div>

      <div className="flex-1 min-w-0 text-left">
        <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
          <span>{currentBuyer.name}</span>
          <span className="text-neutral-400 font-normal">({currentBuyer.city})</span>
        </div>
        <div className="text-[11px] text-[#ffb800] truncate font-medium">
          Vừa đặt: {currentBuyer.item}
        </div>
        <div className="text-[10px] text-neutral-400">
          {currentBuyer.time} · <span className="text-emerald-400 font-semibold">Đã xác nhận COD</span>
        </div>
      </div>

      <button
        onClick={() => setDismissed(true)}
        className="text-neutral-400 hover:text-white p-1 rounded-lg"
        aria-label="Đóng thông báo"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
