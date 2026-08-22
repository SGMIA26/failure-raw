# Quy trình Biên tập Nội dung Khoa học (Sử dụng với Claude Code)

Để tối ưu hóa việc biên tập nội dung, hãy áp dụng quy trình gồm 7 bước dưới đây. Bạn có thể dán toàn bộ nội dung này vào Claude Code làm tài liệu tham chiếu (system prompt/context).

---

### Bước 1: Khởi tạo cấu trúc
Khi bắt đầu, hãy gửi nội dung gốc với cấu trúc sau:
"Đây là văn bản gốc của mình: [Dán nội dung gốc vào đây]
Nơi đăng: [Ví dụ: Thông báo nội bộ công ty]
Độc giả mục tiêu: [Ví dụ: Toàn bộ nhân viên]
Các từ khóa và thuật ngữ bắt buộc phải giữ nguyên: [Liệt kê]
Các sự thật không được thay đổi: [Liệt kê]

Lưu ý: Cấm bịa đặt dữ liệu hoặc trích dẫn. Nếu cần cung cấp dữ liệu, hãy đánh dấu những chỗ đó để tôi bổ sung."

### Bước 2: Chuẩn hóa ngôn ngữ
"Bạn là một biên tập viên tiếng Việt kỳ cựu. Với điều kiện không thay đổi sự thật, hãy sửa lỗi ngữ pháp, lỗi chính tả, dấu câu; chỉnh lại những câu văn lủng củng; thống nhất thuật ngữ và đại từ xưng hô."

### Bước 3: Biên tập nội dung khoa học (Tối ưu hóa mật độ thông tin)
"Bạn là biên tập viên nội dung khoa học chuyên nghiệp. Mục tiêu là làm cho bài viết ngắn gọn, rõ ràng, mật độ thông tin cao hơn. Hãy xóa bỏ các từ ngữ lặp lại và sáo rỗng, chia câu dài thành câu ngắn, giữ lại các kết luận then chốt và tiền đề cần thiết.

Đầu ra gồm:
A. Bản chỉnh sửa;
B. Liệt kê tối đa 5 điểm bạn đã xóa hoặc gộp lại và giải thích lý do tại sao."

### Bước 4: Kiểm tra Logic
"Bạn là người hướng dẫn khoa học với tư duy logic chặt chẽ. Hãy kiểm tra:
1. Quan điểm - luận cứ - kết luận có tạo thành vòng lặp khép kín không?
2. Thứ tự các đoạn văn có hợp lý không?
3. Chỗ nào cần thêm câu chuyển tiếp?

Đầu ra gồm:
A. Dàn ý đề xuất;
B. Nội dung đã sắp xếp lại theo dàn ý mới."

### Bước 5: Phân hóa đối tượng độc giả
"Hãy chuyển bài viết thành hai phiên bản:
Một bản phổ thông dành cho người mới
Một bản chuyên nghiệp dành cho người trong ngành

Yêu cầu: Thuật ngữ thống nhất, sự thật không đổi, mỗi đầu đoạn dùng một câu để nêu bật chủ đề, không lạm dụng tính từ. Hãy sử dụng từ ngữ phù hợp với thói quen đọc của độc giả mục tiêu."

### Bước 6: Củng cố độ tin cậy
"Bạn là một tác giả khoa học nghiêm túc. Hãy làm cho bài viết thuyết phục hơn nhưng cấm bịa đặt:
1. Viết kết luận rõ ràng hơn.
2. Bổ sung loại bằng chứng cho mỗi kết luận then chốt (ví dụ: dữ liệu, nghiên cứu, suy luận logic hoặc ví dụ thực tế).
3. Nếu thiếu bằng chứng, hãy đánh dấu 'Cần bổ sung nguồn!' và đưa ra từ khóa cần tra cứu.

Đầu ra gồm:
A. Nội dung đã được củng cố
B. Danh sách bằng chứng."

### Bước 7: Kiểm thử cuối cùng (Độc giả người mới)
"Hãy đóng vai một độc giả không am hiểu về công nghệ AI và cho mình biết:
1. Đoạn nào bạn không hiểu?
2. Câu nào nghe như lời sáo rỗng?
3. Câu nào làm bạn ấn tượng nhất?
4. Sau khi đọc xong bạn có muốn hành động ngay không?
Tại sao?"
