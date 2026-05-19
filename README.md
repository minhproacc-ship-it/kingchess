KingChess — prototype chơi cờ vua online

Hướng dẫn nhanh:

- Cài dependency:

```bash
cd /workspaces/kingchess
npm install
```

- Chạy server:

```bash
npm start
```

- Mở trình duyệt tới http://localhost:3000, tạo hoặc gia nhập một phòng bằng mã phòng và chia URL với đối thủ.

Ghi chú:
- Dự án là prototype nhỏ: server chỉ chuyển tiếp sự kiện `move` và `reset` giữa các client trong cùng phòng.
- Luật hợp lệ được xử lý bằng `chess.js`, giao diện bởi `chessboard.js`.
