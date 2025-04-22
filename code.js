let deleteInterval = setInterval(async () => {
  const moreBtns = Array.from(document.querySelectorAll('button[aria-label="More"][aria-haspopup="menu"]'));
  if (moreBtns.length === 0) {
    window.scrollBy(0, 1000);
    console.log("⏳ Đang cuộn để tải thêm tweet...");
    return;
  }

  const moreBtn = moreBtns[0];
  moreBtn.click();
  console.log("📂 Mở menu tweet...");

  await new Promise(r => setTimeout(r, 800));

  // Tìm nút Delete trong menu
  const menuItems = Array.from(document.querySelectorAll('div[role="menuitem"] span'));
  const deleteItem = menuItems.find(el =>
    el.textContent.toLowerCase().includes("delete") || el.textContent.toLowerCase().includes("xoá")
  );

  if (deleteItem) {
    deleteItem.click();
    console.log("🗑️ Đã nhấn Delete trong menu...");

    await new Promise(r => setTimeout(r, 1000));
    const confirmBtn = document.querySelector('button[data-testid="confirmationSheetConfirm"]');
    if (confirmBtn) {
      confirmBtn.click();
      console.log("✅ Đã xác nhận xoá tweet");
    } else {
      console.log("⚠️ Không tìm thấy nút xác nhận xoá");
    }
  } else {
    console.log("❌ Không thấy Delete — kiểm tra Unretweet...");

    // Đóng menu
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", keyCode: 27 }));
    await new Promise(r => setTimeout(r, 500));

    // Tìm nút unretweet
    const unretweetBtn = document.querySelector('button[data-testid="unretweet"]');
    if (unretweetBtn) {
      unretweetBtn.click();
      console.log("↩️ Đã nhấn nút 'Unretweet'");

      await new Promise(r => setTimeout(r, 800));

      // Tìm nút xác nhận "Undo repost"
      const undoConfirmBtn = document.querySelector('div[data-testid="unretweetConfirm"]');
      if (undoConfirmBtn) {
        undoConfirmBtn.click();
        console.log("✅ Đã gỡ retweet");
      } else {
        console.log("⚠️ Không tìm thấy nút 'Undo repost'");
      }
    } else {
      console.log("⚠️ Không tìm thấy nút 'unretweet'");
    }
  }

  await new Promise(r => setTimeout(r, 3000));
}, 5000);
