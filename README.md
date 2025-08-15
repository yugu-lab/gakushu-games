# 学習ゲーム集

- GitHub Pagesで公開するための、シンプルな学習ゲーム一覧サイト。
- 科目フィルタ（国語/算数/社会/理科/外国語）と、学年帯フィルタ（1–3年/4–6年/中学生）、検索に対応。
- 100日チャレンジは **2025-08-15 を Day1** としてカウントします。変更は `script.js` の開始日を書き換えてください。

## 公開手順
1. このフォルダをそのまま新規リポジトリ（例: `gakushu-games`）にプッシュ
2. GitHubの Settings → Pages → Branch: `main` / `/ (root)` を選択
3. 表示されたURLにアクセス

## 新しいゲームの追加
1. `/games/game-template.html` を複製して編集（タイトル、説明、`<iframe src="...">`を差し替え）
2. `/assets/thumbs/` にサムネイル（1280×720）を追加
3. `index.html` のカードを1件コピペして `href`, `data-*`, `img src` を設定

## GitHubリンクの差し替え
- ヘッダー右上の GitHub ボタンは `index.html` の URL を `https://github.com/USERNAME/gakushu-games` からあなたのユーザー名へ差し替えてください。
