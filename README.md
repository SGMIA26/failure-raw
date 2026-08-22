# FAILURE/RAW — The Business Failure Project

**"Nobody talks about the failure."**

FAILURE/RAW là một dự án truyền thông thực chiến, tập trung vào việc mổ xẻ những thất bại trong kinh doanh mà ít ai dám nói ra. Chúng tôi không tôn vinh sự thành công hào nhoáng trên LinkedIn, chúng tôi học từ những vấp ngã thực tế.

## 🔗 Truy cập WebApp
👉 **https://failure-raw.pages.dev/**

Source code: https://github.com/SGMIA26/failure-raw

## 📁 Cấu trúc dự án
```
index.html               # WebApp chính (mở file này để chạy)
assets/css/style.css     # Toàn bộ style
assets/js/app.js         # Logic: i18n VI/EN, quiz chấm điểm, form 3 bước, gọi API
functions/api/stories.js # Cloudflare Pages Function (POST/GET /api/stories) — backend thật, lưu vào D1
interviews.html          # Bản nháp gốc (song ngữ, dark/mono)
raw.html                 # Bản nháp gốc (quiz chấm điểm, story archive)
```
`index.html` hợp nhất ưu điểm của cả hai bản nháp: song ngữ VI/EN, bài Business Autopsy chấm điểm thực, bộ câu hỏi phỏng vấn, archive câu chuyện và form gửi câu chuyện 3 bước.

## 🗄️ Backend (Cloudflare D1)
Form "Gửi câu chuyện" lưu thật vào D1 database `failure-raw-db`, bảng `stories`, qua Pages Function tại `functions/api/stories.js`:
- **POST /api/stories** — lưu câu chuyện mới với `status='pending'` (chưa công khai).
- **GET /api/stories** — chỉ trả về câu chuyện có `status='published'`, dùng để hiển thị trong mục Câu chuyện.

Điều này khớp với cam kết trên site ("nếu câu chuyện đủ thật, chúng tôi sẽ liên hệ phỏng vấn") — câu chuyện gửi lên **không tự động hiển thị công khai**, bạn cần duyệt trước.

Nếu API không phản hồi được (ví dụ mở `index.html` trực tiếp bằng file://, không qua Cloudflare), form sẽ tự fallback lưu vào `localStorage` để demo không bị vỡ.

## 🔐 Trang quản trị — duyệt câu chuyện
👉 **https://failure-raw.pages.dev/admin**

Đăng nhập bằng mật khẩu quản trị (biến `ADMIN_PASSWORD`, đã lưu dưới dạng secret trong Cloudflare Pages). Tại đây bạn có thể xem tất cả câu chuyện đã gửi (Chờ duyệt / Đã đăng / Đã từ chối / Tất cả) và bấm **Duyệt & đăng** hoặc **Từ chối** trực tiếp, không cần chạy SQL thủ công.

- **Đổi mật khẩu admin:** Cloudflare Dashboard → Workers & Pages → failure-raw → Settings → Variables and secrets (làm ở cả Production và Preview) → sửa giá trị `ADMIN_PASSWORD`.
- Phiên đăng nhập admin hết hạn sau 8 giờ (cookie `HttpOnly`, `Secure`, ký bằng HMAC — không lưu session ở server).
- Nếu cần xem/sửa dữ liệu thô, vẫn có thể vào Cloudflare Dashboard → D1 → `failure-raw-db` → chạy SQL trực tiếp trên bảng `stories`.

## 🎯 Mục tiêu dự án
Dự án này được xây dựng với tư duy "giải phẫu" thay vì "tư vấn":
* **Business Autopsy:** Bộ công cụ khảo sát giúp các founder tự chẩn đoán "vết thương" của doanh nghiệp.
* **The Archive:** Lưu trữ những bài học đắt giá từ các doanh nghiệp đã đóng cửa, xoay trục (pivot) hoặc thất bại.
* **Raw Transparency:** Nơi các chủ doanh nghiệp được phép chia sẻ câu chuyện của họ một cách ẩn danh, không chỉnh sửa, không tô vẽ.

## 🛠 Tech Stack
Dự án được xây dựng với tinh thần **Minimalist & Performance**:
* **Frontend:** HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript.
* **Design:** Dark-mode centric, mobile-first responsive.
* **Deployment:** GitHub (source) + Cloudflare Pages (hosting), đã kết nối Git integration — chỉ cần `git push` lên nhánh `main`, Cloudflare tự động build & deploy lại, không cần chạy lệnh thủ công.

## 🚀 Tính năng chính
- **Responsive Design:** Trải nghiệm hoàn hảo từ màn hình điện thoại đến desktop.
- **Interactive Diagnosis:** Hệ thống tính điểm để đánh giá mức độ "nguy kịch" của doanh nghiệp.
- **Anonymous Submission:** Form thu thập dữ liệu ẩn danh, bảo mật cao.

## 🤝 Hợp tác & Nội dung
Dự án này là nguồn tài nguyên mở cho cộng đồng. Chúng tôi luôn tìm kiếm:
1. Những câu chuyện thực tế về sự thất bại.
2. Các founder muốn chia sẻ bài học để giúp người khác không đi vào vết xe đổ.

Nếu bạn muốn đóng góp hoặc có ý tưởng cho dự án, hãy gửi **Pull Request** hoặc liên hệ trực tiếp qua kênh Social của chúng tôi:

[Facebook] | [Instagram] | [YouTube] | [TikTok]

---
*Built around the stories nobody posts. © 2026 FAILURE/RAW.*
