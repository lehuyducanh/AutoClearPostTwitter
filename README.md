# 🧹 Twitter Bulk Cleaner (Delete & Un-Retweet)

This script allows you to automatically delete your tweets or undo retweets directly from your Twitter timeline using the Chrome Console.

> ⚠️ **Use responsibly!** This script is intended for personal use only. Once deleted or un-retweeted, actions cannot be undone.

---

## 🚀 How It Works

- Visits your Twitter profile page.
- Loops through each post:
  - If the post can be deleted, it deletes it.
  - If it's a retweet, it clicks **Unretweet** → **Undo repost**.
- Scrolls automatically and repeats until all visible posts are processed.

---

## 🛠 Setup Guide

### 1. Open Twitter
Go to your Twitter profile page in **Google Chrome**.

### 2. Open Developer Tools
Press `F12` or `Ctrl + Shift + I` (Windows) / `Cmd + Option + I` (Mac) to open the Developer Console.

### 3. Paste the Script
Copy everything inside [`code.js`](./code.js) and paste it into the **Console tab**, then press **Enter**.

### 4. Let It Run
The script will begin clicking delete / unretweet on your behalf. Just watch it work.

---

## 🛑 How to Stop the Script

At any time, paste this in the Console and press **Enter**:

```js
clearInterval(deleteInterval);
