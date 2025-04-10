## 🐈 Meow Mastery 貓奴檢定

想養貓，光有對貓咪的愛還不夠！想跟喵星人相處融洽，他們的心情與行為、豢養所需物品、身心保健等知識皆不可或缺。透過測驗小遊戲「貓奴檢定」，測試自己是不是稱職的貓奴吧！ 🐾

<br>

### 📷 遊戲簡介

掃描 QR-code 遊玩
👉 <img src="https://github.com/user-attachments/assets/63c8440a-89e8-44b0-8e4b-fdc3903b55b8" alt="qrcode" width="100" />

你自認是專業的貓奴嗎？貓奴檢定等你來挑戰！


<br>

### 🔧 重新優化的既有專案

「Meow Mastery」是一個互動式測驗應用程式，針對既有專案進行了重新撰寫與優化，以提供更流暢的用戶體驗。

[Github 專案連結](https://github.com/VOxOVb/catquizoxo/tree/master)


<br>

### 🚀 更新亮點

- **性能優化**: 縮小圖片尺寸以降低讀取時間。
- **行動裝置友善**: 重新設計響應式布局，改善手機用戶體驗。
- **動畫效果**: 增加測驗期間的互動動畫。
- **可讀性提升**: 重構程式碼，使用更語意化的命名和模組化的 CSS。


<br>

### 🌟 功能介紹

- 互動式測驗
- 測驗期間的動態動畫展示
- 隨測驗結果變化的成果輸出頁面


<br>

### 📐 UIUX 介紹

![uiux-00](https://github.com/user-attachments/assets/e723b94f-7687-4bc4-bd3b-88bf277b47af)
![uiux-01](https://github.com/user-attachments/assets/a7d1812e-8e52-478d-b0d1-7943a3129ba7)
![uiux-02](https://github.com/user-attachments/assets/b5bd4324-ea0a-4b30-a019-b5cc06e24128)
![uiux-03](https://github.com/user-attachments/assets/bb72e29a-8d25-432f-813c-442df3e2cfb6)
![uiux-04](https://github.com/user-attachments/assets/2713066a-3244-4d4f-9626-09f6142c72a8)
![uiux-05](https://github.com/user-attachments/assets/a949ff01-63cc-4ae7-9fe8-0cf5cc00dff0)




<br>

### 💻 安裝與啟動

#### 線上

```bash
https://meowmastery.netlify.app/
```

#### 本地

1. clone 此專案：

```bash
git clone https://github.com/VOxOVb/meowmastery.git
```

2. 安裝依賴:

```bash
 npm install
```

3. 啟動開發伺服器：

```bash
npm run dev
```

4. 開啟瀏覽器並訪問：

```bash
http://localhost:5173
(or "o + Enter")
```


<br>

### 🛠技術棧

- **前端框架**: React 19 + Vite
- **狀態管理**: Context API + Reducer
- **樣式**: Modular CSS


<br>

### 🔄優化過程

- **挑戰**: 測驗題目推進期間，動畫撥放尚未撥放完全即重新渲染元件。。
  - **解決方案**: 理解 React 重新渲染時機，優化元件邏輯。
- **挑戰**: 初版頁面對行動裝置的支援不足。
  - **解決方案**: 優化網頁布局。
- **挑戰**: 圖片切換時出現短暫空白。
  - **解決方案**: 合併圖片並使用 CSS 改變呈現範圍，減少圖片讀取延遲。


<br>

### 🔮未來計劃

- 增加測驗圖下載、分享好友功能
- 增加題目解析頁面
- 增加總題庫頁面並增加題目數量
