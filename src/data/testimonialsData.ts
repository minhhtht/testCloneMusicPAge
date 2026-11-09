export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarText: string;
  role: string;
  rating: number;
  highlightCourse: string;
  comment: string;
  verified: boolean;
  date: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "review-1",
    name: "Trung Nguyên",
    location: "TP. Hồ Chí Minh",
    avatarText: "TN",
    role: "Producer tự do & DJ",
    rating: 5,
    highlightCourse: "Beat Remix & Vinahouse",
    comment: "Mình trước đây mày mò xem trên mạng rất lung tung, học mãi không ra được bài. Mua USB của thầy Hồ Thiện Quân học đến khóa thứ 3 là tự làm được con beat Vinahouse quẩy tưng bừng. Thầy dạy cực kỳ chi tiết, không giấu nghề!",
    verified: true,
    date: "12 ngày trước"
  },
  {
    id: "review-2",
    name: "Minh Hoàng",
    location: "Hà Nội",
    avatarText: "MH",
    role: "Nhạc công Keyboard & Studio Owner",
    rating: 5,
    highlightCourse: "Pop Ballad & Mixing Cubase",
    comment: "Đầu tư 899k cho cả 7 khóa học là quá hời. Đáng giá nhất là khóa Pop Ballad và Thu âm Cubase. USB cắm vào máy là học ngay không cần mạng, đi công tác mở laptop lên học rất tiện.",
    verified: true,
    date: "2 tuần trước"
  },
  {
    id: "review-3",
    name: "Lan Anh",
    location: "Đà Nẵng",
    avatarText: "LA",
    role: "Singer - Songwriter",
    rating: 5,
    highlightCourse: "Sáng tác Nhạc Pop & FL Studio",
    comment: "Em là nữ, không rành kỹ thuật máy tính nhưng video hướng dẫn từ khâu cài đặt FL Studio đến cách bấm từng nốt nhạc. Giờ em đã tự sáng tác và phối được 2 bài hát tặng bạn bè và đăng lên TikTok.",
    verified: true,
    date: "3 tuần trước"
  },
  {
    id: "review-4",
    name: "Phước Tài",
    location: "Cần Thơ",
    avatarText: "PT",
    role: "Nhạc công Bolero phòng trà",
    rating: 5,
    highlightCourse: "Beat Bolero Trữ Tình",
    comment: "Thích nhất là khóa Bolero trữ tình, thầy chỉ cách gảy guitar và đi bass cực kỳ có hồn mà không ở đâu chỉ. Email hỏi bài thầy trả lời rất nhiệt tình trong ngày, chỉ bảo tận tâm.",
    verified: true,
    date: "1 tháng trước"
  },
  {
    id: "review-5",
    name: "Quang Đức",
    location: "Hải Phòng",
    avatarText: "QĐ",
    role: "Beatmaker / Rapper Underground",
    rating: 5,
    highlightCourse: "Beat R&B - Hiphop Trap",
    comment: "Dân làm beat Hiphop như mình mê nhất khóa 808 Glide với Layer Kick. Âm thanh đập căng đét. Có sẵn bộ sample tặng kèm trong USB xài luôn không cần tìm kiếm đâu xa.",
    verified: true,
    date: "1 tháng trước"
  },
  {
    id: "review-6",
    name: "Hải Trung",
    location: "Đắk Lắk",
    avatarText: "HT",
    role: "Audio Editor & Content Creator",
    rating: 5,
    highlightCourse: "Suno A.I & Hòa Âm Phối Khí",
    comment: "Khóa Suno A.I mở rộng tầm mắt thật sự. Kết hợp giữa trí tuệ nhân tạo và FL Studio giúp mình rút ngắn thời gian làm nhạc gấp 5 lần. Rất khuyến khích anh em mua bản USB kim loại cầm rất đầm tay!",
    verified: true,
    date: "2 tháng trước"
  }
];
