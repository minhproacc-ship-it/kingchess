KingChess — prototype chơi cờ vua online

Hướng dẫn nhanh (chạy local với server):

- Cài dependency:

```bash
cd /workspaces/kingchess
npm install
```

- Chạy server:

```bash
npm start
```

- Mở trình duyệt tới `http://localhost:3000`, tạo hoặc gia nhập một phòng bằng mã phòng và chia mã phòng với đối thủ.

GitHub Pages (host client tĩnh):

- Client tĩnh đã được copy vào thư mục `docs/`. Bạn có 2 cách để publish:
	- Kích hoạt GitHub Pages cho branch `main` và chọn thư mục `docs/` làm source.
	- Hoặc dùng GitHub Actions: workflow `.github/workflows/deploy-docs.yml` tự deploy `docs/` lên nhánh `gh-pages` khi push `main`.

Lưu ý:
- GitHub Pages chỉ host phần client tĩnh (chơi offline hoặc local multiplayer). Tính năng online (Socket.IO) cần server riêng — chạy `npm start` trên server hoặc deploy server tới một host VPS/Heroku/Vercel và chỉnh URL kết nối nếu cần.
- Dự án là prototype: server chỉ chuyển tiếp sự kiện `move` và `reset` giữa các client trong cùng phòng.
- Luật hợp lệ được xử lý bằng `chess.js`, giao diện bởi `chessboard.js`.
