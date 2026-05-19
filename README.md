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

- Client tĩnh đã được copy vào thư mục `docs/`, bao gồm cả thư viện `chessboard.js` và `chess.js` local trong `docs/vendor/`.
- Bạn có 2 cách để publish:
  - Kích hoạt GitHub Pages cho branch `main` và chọn thư mục `docs/` làm source.
  - Hoặc dùng GitHub Actions: workflow `.github/workflows/deploy-docs.yml` tự deploy `docs/` lên nhánh `gh-pages` khi push `main`.

Cách bật GitHub Pages từ thư mục `docs/`:

1. Vào repo trên GitHub.
2. Chọn `Settings` → `Pages`.
3. Chọn branch `main` và thư mục `docs/`.
4. Lưu và chờ GitHub tạo site.

Sau khi publish xong, trang sẽ nằm tại `https://<your-username>.github.io/<repo-name>/`.

Lưu ý:
- GitHub Pages chỉ host phần client tĩnh (có thể chơi local hoặc AI). Tính năng online (Socket.IO) cần server riêng — chạy `npm start` trên server hoặc deploy server tới một host VPS/Heroku/Vercel và chỉnh URL kết nối nếu cần.
- Dự án là prototype: server chỉ chuyển tiếp sự kiện `move` và `reset` giữa các client trong cùng phòng.
- Luật hợp lệ được xử lý bằng `chess.js`, giao diện bởi `chessboard.js`.
