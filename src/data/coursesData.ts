export interface Lesson {
  id: number;
  title: string;
  duration?: string;
}

export interface Course {
  id: string;
  order: string;
  title: string;
  software: string;
  softwareIcon: string;
  videoCount: number;
  shortDesc: string;
  highlights: string[];
  lessons: Lesson[];
}

export const COURSES_DATA: Course[] = [
  {
    id: "pop-ballad",
    order: "KHÓA 01",
    title: "LÀM BEAT POP BALLAD",
    software: "FL Studio",
    softwareIcon: "🎹",
    videoCount: 16,
    shortDesc: "Làm chủ dòng nhạc quốc dân V-Pop. Hướng dẫn từ số 0 đến hoàn thiện bản phối da diết, chuẩn thương mại.",
    highlights: ["16 Video bài giảng chuẩn Full HD", "Nhạc lý thực chiến không cần biết đàn", "Đầy đủ Project mẫu FL Studio (.flp)"],
    lessons: [
      { id: 1, title: "Giới thiệu tổng quan giao diện & thiết lập FL Studio tối ưu" },
      { id: 2, title: "Nhạc lý cơ bản dành cho Producer không cần biết đàn" },
      { id: 3, title: "Cấu trúc bài hát Pop Ballad chuẩn V-Pop (Intro, Verse, Chorus, Bridge, Outro)" },
      { id: 4, title: "Xây dựng bộ trống Drum Ballad ấm và có chiều sâu" },
      { id: 5, title: "Soạn vòng hòa thanh Pop Ballad cảm xúc (I - V - vi - IV và các biến thể)" },
      { id: 6, title: "Kỹ thuật viết giai điệu (Melody Hook) bắt tai và dễ nhớ" },
      { id: 7, title: "Soạn Piano đệm hát Ballad tự nhiên, xử lý Velocity tạo hồn" },
      { id: 8, title: "Kỹ thuật rải Acoustic Guitar và tạo tiếng gảy mộc mạc" },
      { id: 9, title: "Sử dụng Bass & Sub-Bass tạo nền tảng vững chắc cho bản phối" },
      { id: 10, title: "Phối bè String & Pad tạo không gian da diết, cao trào" },
      { id: 11, title: "Sử dụng nhạc cụ bổ trợ: Flute, Cello, Pluck acoustic" },
      { id: 12, title: "Kỹ thuật chuyển đoạn (Transitions, Drum Fills, Risers, Cymbals)" },
      { id: 13, title: "Cân bằng âm lượng (Static Mix) từng nhạc cụ trong bản phối" },
      { id: 14, title: "EQ & Reverb tạo không gian 3D cho bản phối Pop Ballad" },
      { id: 15, title: "Hoàn thiện bản phối Beat Pop Ballad hoàn chỉnh từ A-Z" },
      { id: 16, title: "Export Audio chất lượng cao WAV/MP3 & xuất Trackout chia sẻ ca sĩ" }
    ]
  },
  {
    id: "bolero",
    order: "KHÓA 02",
    title: "LÀM BEAT BOLERO TRỮ TÌNH",
    software: "FL Studio & Cubase",
    softwareIcon: "🎸",
    videoCount: 16,
    shortDesc: "Đắm chìm trong giai điệu quê hương. Nắm vững bí quyết làm nhịp điệu Rumba, Bolero truyền thống mượt mà, ngọt ngào.",
    highlights: ["16 Video chuyên sâu nhạc trữ tình", "Kỹ thuật phối nhạc cụ dân tộc chân thực", "Tặng thư viện Sample gõ Bolero độc quyền"],
    lessons: [
      { id: 1, title: "Khái quát đặc trưng tiết tấu và nhạc cụ trong dòng nhạc Bolero Việt Nam" },
      { id: 2, title: "Thiết lập dự án và nhịp điệu 4/4 đặc trưng Bolero" },
      { id: 3, title: "Kỹ thuật soạn bộ gõ Bolero: Bongos, Congas, Shaker, Claves" },
      { id: 4, title: "Soạn Bass Bolero đi bộ (Walking Bass) mượt mà, tình cảm" },
      { id: 5, title: "Kỹ thuật đệm Acoustic & Nylon Guitar rải ngón đậm chất trữ tình" },
      { id: 6, title: "Soạn đàn Tranh, Bầu, Sáo tạo hồn dân tộc trong Bolero hiện đại" },
      { id: 7, title: "Phối dàn Dây (Strings) đệm bè nâng đỡ giọng hát Bolero" },
      { id: 8, title: "Xử lý đàn Piano và Electric Piano trong bản phối Bolero" },
      { id: 9, title: "Cấu trúc bài hát Bolero truyền thống và tân thời" },
      { id: 10, title: "Kỹ thuật xử lý nhịp giãn, dừng ngắt (Fermata) trong câu hát" },
      { id: 11, title: "Phối khí bài mẫu Bolero 1: Dòng nhạc trữ tình quê hương" },
      { id: 12, title: "Phối khí bài mẫu Bolero 2: Dòng nhạc Bolero tiết tấu Rumba sang trọng" },
      { id: 13, title: "Cách sử dụng Sample nhạc cụ dân tộc chân thực, không bị giả tiếng" },
      { id: 14, title: "Kỹ thuật Mix nhạc cụ acoustic trong Bolero" },
      { id: 15, title: "Tạo không gian Reverb phòng ấm áp chuẩn phòng thu Sài Gòn" },
      { id: 16, title: "Hoàn thiện bản Master Demo Bolero chuẩn thương mại" }
    ]
  },
  {
    id: "remix-edm",
    order: "KHÓA 03",
    title: "BEAT REMIX – HOUSE – EDM",
    software: "FL Studio",
    softwareIcon: "⚡",
    videoCount: 18,
    shortDesc: "Biến mọi bài hát thành bản hit sôi động. Tự tin sản xuất Vinahouse, Deep House, Slap House quẩy bar club cực sung.",
    highlights: ["18 Video bùng nổ năng lượng", "Bí quyết Kick & Bassline uy lực không đục tiếng", "Kỹ thuật lấy Acapella và xử lý Vocal mượt mà"],
    lessons: [
      { id: 1, title: "Tổng quan các dòng nhạc Vinahouse, Deep House, Slap House, EDM" },
      { id: 2, title: "Lấy Vocal Acapella và dò Tone, dò Nhịp (Detect Tempo & Key)" },
      { id: 3, title: "Kỹ thuật Warp/Stretch Vocal khớp lưới nhịp chặt chẽ" },
      { id: 4, title: "Thiết kế Kick và Bassline Vinahouse / Slap House uy lực" },
      { id: 5, title: "Kỹ thuật Sidechain Compression chuẩn xác không bị đục dải trầm" },
      { id: 6, title: "Soạn Lead Synth, Pluck sắc nét, sáng và dày tiếng" },
      { id: 7, title: "Kỹ thuật xếp Clap, Hi-hat, Percussion sôi động" },
      { id: 8, title: "Tạo Build-up căng thẳng: Snare Roll, White Noise, Pitch Riser" },
      { id: 9, title: "Kỹ thuật thiết kế Drop bùng nổ, cuốn hút người nghe" },
      { id: 10, title: "Sử dụng FX, Crash, Impact, Downlifter hiệu quả" },
      { id: 11, title: "Kỹ thuật làm đoạn nghỉ (Breakdown) bay bổng" },
      { id: 12, title: "Phối bài Remix thực chiến: Track Vinahouse Top Trending" },
      { id: 13, title: "Phối bài Remix thực chiến: Track Slap House Club bốc lửa" },
      { id: 14, title: "Kỹ thuật Layer âm thanh (Sound Layering) cho âm sắc dày dặn" },
      { id: 15, title: "Stereo Imaging & Xử lý độ rộng không gian bản phối EDM" },
      { id: 16, title: "Kỹ thuật Mixing dải Mid/Side và kiểm soát Low-end" },
      { id: 17, title: "Mastering cơ bản cho bản Remix đạt độ to LUFS chuẩn Bar/Club" },
      { id: 18, title: "Xuất Master và mẹo làm việc với DJ, nền tảng TikTok/YouTube" }
    ]
  },
  {
    id: "rnb-hiphop",
    order: "KHÓA 04",
    title: "BEAT R&B – HIPHOP",
    software: "FL Studio",
    softwareIcon: "🎧",
    videoCount: 20,
    shortDesc: "Làm chủ nhịp thở đường phố hiện đại. Từ Trap nảy lửa, 808 glide rúng động đến R&B Soul mượt mà sang trọng.",
    highlights: ["20 Video chuyên sâu Trap & R&B", "Bí kíp 808 Bass Slide uốn lượn đúng nốt", "Cách đóng gói và kinh doanh Type Beat kiếm thu nhập"],
    lessons: [
      { id: 1, title: "Bản chất và lịch sử dòng nhạc Hiphop/Trap, Lo-fi, R&B Soul" },
      { id: 2, title: "Kỹ thuật chọn Sound Drum Kit Hiphop/Trap hiện đại" },
      { id: 3, title: "Soạn 808 Bass trượt (808 Glide/Slide) đầy uy lực và chuẩn nốt" },
      { id: 4, title: "Lập trình Hi-hat Roll, Triplets và Micro-timing tạo độ nảy" },
      { id: 5, title: "Xây dựng hòa thanh R&B 9th, 11th, 13th chords sang trọng" },
      { id: 6, title: "Soạn Rhodes Piano, Vintage Keys và Synth Lead" },
      { id: 7, title: "Kỹ thuật xử lý Sample đào đĩa (Sample Chopping & Pitching)" },
      { id: 8, title: "Kỹ thuật đảo nhịp (Syncopation) và tạo Groove Hiphop cuốn hút" },
      { id: 9, title: "Viết Beat Trap hiện đại phong cách US/UK" },
      { id: 10, title: "Viết Beat Boom Bap cổ điển với tiếng vinyl crackle" },
      { id: 11, title: "Viết Beat R&B mượt mà phong cách nghệ sĩ trẻ V-Pop" },
      { id: 12, title: "Viết Beat Drill với nhịp trống lệch và slide 808 đặc trưng" },
      { id: 13, title: "Kỹ thuật phối bè Vocal Chops trong Beat Trap/R&B" },
      { id: 14, title: "Kỹ thuật Saturation & Distortion làm ấm và gắt cho 808" },
      { id: 15, title: "Thu xếp cấu trúc Beat bán lẻ (Type Beat) chuẩn Youtube" },
      { id: 16, title: "Cân bằng Mix dải Kick và 808 tách bạch, rõ tiếng" },
      { id: 17, title: "EQ, Phasing và Dynamic EQ xử lý bài toán đụng dải tần" },
      { id: 18, title: "Tạo Producer Tags âm thanh và bảo vệ bản quyền Beat" },
      { id: 19, title: "Đóng gói Stems (Trackout) giao dịch cho Rapper/Ca sĩ" },
      { id: 20, title: "Kinh nghiệm kinh doanh bán Type Beat trên BeatStars & YouTube" }
    ]
  },
  {
    id: "sang-tac-pop",
    order: "KHÓA 05",
    title: "SÁNG TÁC NHẠC POP",
    software: "FL Studio + Sibelius",
    softwareIcon: "🎼",
    videoCount: 21,
    shortDesc: "Tự viết giai điệu và ca từ của riêng bạn. Phương pháp sáng tác bài bản từ ý tưởng sơ khởi đến bản sheet chuyên nghiệp.",
    highlights: ["21 Video bài giảng độc quyền", "Sử dụng phần mềm ký âm chuyên nghiệp Sibelius", "Cách chào bài cho ca sĩ và quản lý bản quyền VCPMC"],
    lessons: [
      { id: 1, title: "Khái niệm sáng tác bài hát và tư duy phát triển ý tưởng từ cảm xúc" },
      { id: 2, title: "Giao diện và cách sử dụng phần mềm chép nhạc chuyên nghiệp Sibelius" },
      { id: 3, title: "Khởi tạo Sheet nhạc, ký hiệu âm nhạc, tempo và số chỉ nhịp" },
      { id: 4, title: "Nhạc lý ứng dụng trong sáng tác: Gam, Giọng, Quãng, Điệu thức" },
      { id: 5, title: "Cách tìm cảm hứng từ câu chuyện đời thực hoặc vòng hòa âm gợi mở" },
      { id: 6, title: "Kỹ thuật viết Lời bài hát (Lyrics): Vần điệu, dấu câu, thanh điệu tiếng Việt" },
      { id: 7, title: "Kỹ thuật phát triển Giai điệu (Motif Development) không bị trùng lặp" },
      { id: 8, title: "Cấu trúc bài hát Pop hiện đại chuẩn quốc tế và xu hướng Việt" },
      { id: 9, title: "Sáng tác đoạn Đoạn mở đầu (Intro) & Đoạn 1 (Verse 1)" },
      { id: 10, title: "Xây dựng Đoạn tiền điệp khúc (Pre-Chorus) đẩy cao trào cảm xúc" },
      { id: 11, title: "Sáng tác Đoạn Điệp khúc (Chorus/Hook) đỉnh cao, gây nghiện" },
      { id: 12, title: "Xây dựng Đoạn giằng xé (Bridge) bứt phá tone giọng" },
      { id: 13, title: "Kỹ thuật chuyển tông (Modulation) đẩy cao trào bài hát lên nấc mới" },
      { id: 14, title: "Kết hợp phần mềm Sibelius và FL Studio trong quy trình sáng tác" },
      { id: 15, title: "Nhập nốt từ MIDI Keyboard vào Sibelius chuẩn xác và nhanh chóng" },
      { id: 16, title: "Ký âm hợp âm, lời ca và xuất bản Sheet nhạc chuyên nghiệp cho ban nhạc" },
      { id: 17, title: "Sáng tác thực chiến 1 ca khúc Pop Ballad hoàn chỉnh từ con số 0" },
      { id: 18, title: "Sáng tác thực chiến 1 ca khúc Pop R&B trẻ trung bắt tai" },
      { id: 19, title: "Bản quyền tác giả: Đăng ký cục bản quyền, VCPMC và bảo hộ tác phẩm" },
      { id: 20, title: "Cách chào bán ca khúc cho Ca sĩ, Hãng thu âm và Đạo diễn phim" },
      { id: 21, title: "Tổng kết và định hướng phát triển sự nghiệp Nhạc sĩ độc lập" }
    ]
  },
  {
    id: "thu-am-mixing",
    order: "KHÓA 06",
    title: "THU ÂM & MIXING CUBASE",
    software: "Steinberg Cubase",
    softwareIcon: "🎙️",
    videoCount: 16,
    shortDesc: "Bí quyết phòng thu chuyên nghiệp. Thu âm chuẩn, chỉnh phô VariAudio mượt mà và Mixing giọng hát bay bổng trên nhạc nền.",
    highlights: ["16 Video kỹ thuật phòng thu chuyên nghiệp", "Bí kíp chỉnh phô Melodyne & VariAudio tự nhiên", "Xử lý hiệu ứng Reverb & Delay không bị đục"],
    lessons: [
      { id: 1, title: "Thiết lập Project Cubase chuẩn Studio: Sample Rate, Bit Depth, Buffer Size" },
      { id: 2, title: "Thiết lập Micro, Audio Interface và Headphone không bị trễ tiếng (Latency)" },
      { id: 3, title: "Kỹ thuật phòng thu: Hướng micro, Pop-filter và khoảng cách lấy hơi" },
      { id: 4, title: "Kỹ thuật thu âm Vocal nhiều Track (Multi-take) và ghép nối (Comping)" },
      { id: 5, title: "Cắt tỉa tạp âm, xử lý tiếng thở và dọn dẹp sạch sẽ Vocal Track" },
      { id: 6, title: "Kỹ thuật chỉnh phô nốt giọng hát bằng VariAudio trực tiếp trong Cubase" },
      { id: 7, title: "Căn chỉnh nhịp phách Vocal bằng AudioWarp chuẩn từng mili-giây" },
      { id: 8, title: "Sử dụng Melodyne nâng cao cho giọng ca mượt mà, tự nhiên" },
      { id: 9, title: "Chuỗi xử lý Vocal cơ bản: De-Esser, EQ lọc tần số rác" },
      { id: 10, title: "Kỹ thuật nén Vocal bằng Compressor (Serial Compression)" },
      { id: 11, title: "Xử lý bè Vocal: Bè chính, bè bè, Ad-libs và Stereo Panning" },
      { id: 12, title: "Kỹ thuật gửi tín hiệu FX Send: Reverb, Stereo Delay, Chorus" },
      { id: 13, title: "Kỹ thuật Sidechain Ducking giữa Delay/Reverb và Vocal chính" },
      { id: 14, title: "Cân bằng tổng thể giữa Giọng hát và Nhạc nền (Vocal in the Mix)" },
      { id: 15, title: "Thêm màu âm thanh (Coloring, Saturation, Exciter) cho Vocal ấm sáng" },
      { id: 16, title: "Mastering xuất file thành phẩm chuẩn phát hành Spotify, Apple Music" }
    ]
  },
  {
    id: "suno-ai",
    order: "KHÓA 07",
    title: "SUNO A.I SẢN XUẤT ÂM NHẠC",
    software: "Suno A.I & DAW",
    softwareIcon: "🤖",
    videoCount: 6,
    shortDesc: "Đón đầu làn sóng công nghệ âm nhạc A.I. Tạo ý tưởng thần tốc, bẻ khóa prompt và kết hợp A.I vào workflow chuyên nghiệp.",
    highlights: ["6 Video cập nhật công nghệ mới nhất", "Công thức Prompt viết nhạc đa thể loại", "Quy trình kết hợp A.I với DAW chuyên nghiệp"],
    lessons: [
      { id: 1, title: "Tổng quan cách mạng A.I trong âm nhạc và giới thiệu công cụ Suno A.I" },
      { id: 2, title: "Kỹ thuật viết Prompt mô tả thể loại, nhạc cụ, tiết tấu và phong cách ca sĩ" },
      { id: 3, title: "Kỹ thuật viết Metatags cấu trúc bài hát [Intro], [Verse], [Chorus], [Guitar Solo]" },
      { id: 4, title: "Kỹ thuật tách lời (Stem Separation) từ bài hát Suno để remix" },
      { id: 5, title: "Đưa âm thanh A.I vào FL Studio / Cubase để phối thêm nhạc cụ thật" },
      { id: 6, title: "Tối ưu quy trình sáng tạo: Dùng A.I làm ý tưởng phác thảo cho Producer" }
    ]
  }
];

export const TOTAL_LESSONS = COURSES_DATA.reduce((acc, c) => acc + c.videoCount, 0);
