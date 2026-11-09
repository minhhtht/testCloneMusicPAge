import React, { useState } from "react";
import { Truck, ShieldCheck, CheckCircle2, ShoppingCart, User, Phone, MapPin, FileText, Sparkles, RefreshCw, MessageSquare } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface OrderFormProps {
  selectedPackage: "usb" | "drive";
  onPackageChange: (pkg: "usb" | "drive") => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  selectedPackage,
  onPackageChange
}) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Hà Nội");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<{
    orderId: string;
    fullName: string;
    phone: string;
    address: string;
    pkg: "usb" | "drive";
    price: string;
  } | null>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = "Vui lòng nhập họ và tên của bạn";
    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/(0[3|5|7|8|9])+([0-9]{8})\b/.test(phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (cần 10 chữ số, ví dụ 0988234567)";
    }
    if (selectedPackage === "usb" && !address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ nhận hàng để shipper giao tận nơi";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real order processing
    setTimeout(() => {
      const orderId = `DH-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedOrder({
        orderId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        address: selectedPackage === "usb" ? `${address.trim()}, ${city}` : "Nhận link qua Email & Zalo",
        pkg: selectedPackage,
        price: selectedPackage === "usb" ? "899.000đ" : "699.000đ"
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedOrder(null);
    setFullName("");
    setPhone("");
    setAddress("");
    setNote("");
  };

  const currentPrice = selectedPackage === "usb" ? "899.000đ" : "699.000đ";
  const originalPrice = selectedPackage === "usb" ? "4.374.000đ" : "2.800.000đ";

  return (
    <section id="dang-ky" className="py-20 md:py-28 bg-[#0e1017] border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-3">
              <Truck className="w-4 h-4" />
              <span>GIAO HÀNG TẬN TAY TRÊN TOÀN QUỐC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight">
              ĐIỀN THÔNG TIN NHẬN USB TẬN NHÀ
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-2 [text-wrap:balance]">
              Đặt Hàng — <strong className="text-white">Freeship Toàn Quốc</strong>. Đơn hàng xử lý trong 30 phút, ship COD tận tay, kiểm tra rồi mới thanh toán.
            </p>
          </div>
        </ScrollReveal>

        {/* If Order Submitted Successfully */}
        {submittedOrder ? (
          <div className="bg-[#141624] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono uppercase bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-bold">
              ĐẶT HÀNG THÀNH CÔNG · MÃ ĐƠN: {submittedOrder.orderId}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-2">
              Cảm ơn {submittedOrder.fullName}!
            </h3>

            <p className="text-neutral-300 text-sm max-w-lg mx-auto mb-8">
              Bộ phận chăm sóc khách hàng DEHIT Productions sẽ gọi điện hoặc nhắn tin Zalo cho bạn qua số{" "}
              <strong className="text-white font-mono">{submittedOrder.phone}</strong> trong vòng 30 phút để xác nhận đơn và gửi hàng.
            </p>

            {/* Order Details summary box */}
            <div className="bg-black/40 rounded-2xl p-5 border border-white/10 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2.5 mb-8">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Gói sản phẩm:</span>
                <span className="font-bold text-white">
                  {submittedOrder.pkg === "usb" ? "USB 64GB Kim Loại (Combo 7 Khóa)" : "Bản Drive Online (Combo 7 Khóa)"}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Tổng thanh toán:</span>
                <span className="font-extrabold text-[#ffb800] text-base font-mono">{submittedOrder.price}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Hình thức thanh toán:</span>
                <span className="font-semibold text-emerald-400">COD (Kiểm tra &amp; trả tiền khi nhận)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-neutral-400">Phí vận chuyển:</span>
                <span className="font-semibold text-emerald-400">0đ (Freeship toàn quốc)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">Địa chỉ nhận hàng:</span>
                <span className="font-medium text-white text-right max-w-[220px]">{submittedOrder.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Zalo Xác Nhận Nhanh</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Đặt thêm đơn hàng khác</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Area */
          <ScrollReveal direction="up" delay={0.15} duration={0.65}>
            <div className="bg-[#141624] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  1. Chọn gói học bạn muốn đặt:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => onPackageChange("usb")}
                    className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all cursor-pointer ${
                      selectedPackage === "usb"
                        ? "bg-[#ff6b00]/15 border-[#ff6b00] ring-1 ring-[#ff6b00]"
                        : "bg-white/[0.03] border-white/10 hover:border-white/20 text-neutral-400"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-white text-sm sm:text-base">
                          USB 64GB Vật Lý
                        </span>
                        <span className="bg-[#ff6b00] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Khuyên dùng
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Học offline không cần mạng, tặng USB kim loại, bảo hành 12 tháng.
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-base sm:text-lg font-black text-[#ffb800] font-mono">
                        899K
                      </span>
                      <div className="text-[11px] text-neutral-400 line-through">4.374K</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onPackageChange("drive")}
                    className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all cursor-pointer ${
                      selectedPackage === "drive"
                        ? "bg-[#ff6b00]/15 border-[#ff6b00] ring-1 ring-[#ff6b00]"
                        : "bg-white/[0.03] border-white/10 hover:border-white/20 text-neutral-400"
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-white text-sm sm:text-base">
                        Bản Google Drive Online
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Nhận link qua email sau 1 phút, học trên điện thoại &amp; máy tính.
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-base sm:text-lg font-black text-white font-mono">
                        699K
                      </span>
                      <div className="text-[11px] text-neutral-400 line-through">2.800K</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Họ và tên của bạn <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Văn Hùng"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full bg-black/40 border ${
                        errors.fullName ? "border-red-500" : "border-white/10"
                      } text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Số điện thoại nhận hàng <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="Ví dụ: 0988 234 567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full bg-black/40 border ${
                        errors.phone ? "border-red-500" : "border-white/10"
                      } text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Address details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Tỉnh / Thành phố
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ff6b00]"
                  >
                    <option value="Hà Nội" className="bg-[#141624]">Hà Nội</option>
                    <option value="TP. Hồ Chí Minh" className="bg-[#141624]">TP. Hồ Chí Minh</option>
                    <option value="Đà Nẵng" className="bg-[#141624]">Đà Nẵng</option>
                    <option value="Hải Phòng" className="bg-[#141624]">Hải Phòng</option>
                    <option value="Cần Thơ" className="bg-[#141624]">Cần Thơ</option>
                    <option value="Bình Dương" className="bg-[#141624]">Bình Dương</option>
                    <option value="Đồng Nai" className="bg-[#141624]">Đồng Nai</option>
                    <option value="Nghệ An" className="bg-[#141624]">Nghệ An</option>
                    <option value="Thanh Hóa" className="bg-[#141624]">Thanh Hóa</option>
                    <option value="Thừa Thiên Huế" className="bg-[#141624]">Thừa Thiên Huế</option>
                    <option value="Tỉnh/Thành khác" className="bg-[#141624]">Tỉnh/Thành khác...</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Địa chỉ chi tiết (Số nhà, tên đường, phường/xã) {selectedPackage === "usb" && <span className="text-red-400">*</span>}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Ví dụ: 124 Nguyễn Huệ, Phường Bến Nghé, Quận 1"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={`w-full bg-black/40 border ${
                        errors.address ? "border-red-500" : "border-white/10"
                      } text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#ff6b00] transition-colors`}
                    />
                  </div>
                  {errors.address && <p className="text-xs text-red-400 mt-1">{errors.address}</p>}
                </div>
              </div>

              {/* Note input */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                  Ghi chú đơn hàng (Tùy chọn)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao, hỗ trợ cài FL Studio 21..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#ff6b00]"
                  />
                </div>
              </div>

              {/* Order calculation preview strip */}
              <div className="bg-black/30 rounded-2xl p-4 border border-white/5 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>Giá niêm yết:</span>
                  <span className="line-through font-mono">{originalPrice}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Ưu đãi giảm giá độc quyền:</span>
                  <span className="font-mono font-bold">-79%</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Phí ship toàn quốc:</span>
                  <span className="text-emerald-400 font-bold">0đ (Freeship)</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline text-white">
                  <span className="font-bold text-sm sm:text-base">Tổng tiền thanh toán khi nhận:</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#ffb800] font-mono">
                    {currentPrice}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#ff6b00] via-[#ff7a1a] to-[#ff9900] hover:from-[#ff7b1a] hover:to-[#ffa61a] text-white font-black text-base sm:text-lg shadow-xl shadow-[#ff6b00]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer glow-accent"
              >
                {isSubmitting ? (
                  <span>Đang xử lý đơn hàng...</span>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>Xác Nhận Đặt Mua USB - {currentPrice} (Thanh toán khi nhận hàng)</span>
                  </>
                )}
              </button>

              {/* Trust markers */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 pt-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Cam kết bảo mật thông tin 100%</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#ff6b00]" />
                  <span>Kiểm tra hàng trước khi thanh toán</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#ffb800]" />
                  <span>Bảo hành 12 tháng 1 đổi 1</span>
                </div>
              </div>
            </form>
          </div>
        </ScrollReveal>
      )}
    </div>
  </section>
);
};
