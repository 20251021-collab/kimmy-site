// 1. 首頁耳機模式切換互動
const modeData = {
    anc: {
        title: "🔇 深度降噪模式已啟動",
        desc: "最高可消除 99% 環境低頻噪音，瞬間進入專注心流。"
    },
    trans: {
        title: "🌬️ 通透模式已啟動",
        desc: "無需摘下耳機，也能清晰聽見周遭環境音與人聲對話。"
    },
    bass: {
        title: "🔊 重低音強化已啟動",
        desc: "AI 動態低頻補償，帶來如臨演唱會現場的震撼節奏。"
    }
};

function changeMode(modeKey, clickedBtn) {
    // 更新畫面文字
    const screen = document.getElementById("mode-display");
    if (screen && modeData[modeKey]) {
        screen.innerHTML = `
            <h3>${modeData[modeKey].title}</h3>
            <p>${modeData[modeKey].desc}</p>
        `;
    }

    // 切換按鈕高亮狀態
    const allBtns = document.querySelectorAll(".mode-btn");
    allBtns.forEach(btn => btn.classList.remove("active"));
    clickedBtn.classList.add("active");
}

// 2. 優惠彈窗控制
function showDiscount() {
    const modal = document.getElementById("discount-modal");
    if (modal) modal.style.display = "flex";
}

function closeDiscount() {
    const modal = document.getElementById("discount-modal");
    if (modal) modal.style.display = "none";
}

function copyDiscount() {
    navigator.clipboard.writeText("AERO500");
    alert("✅ 折扣碼 AERO500 已複製！結帳時即可折抵 $500。");
    closeDiscount();
}

// 3. 產品預購提示
function buyProduct(modelName) {
    alert(`🎧 已為您保留「${modelName}」預購資格！\n請前往結帳並輸入早鳥碼 AERO500。`);
}

// 4. 聯絡表單送出
function sendTechForm(event) {
    event.preventDefault();
    const name = document.getElementById("userName").value;
    const issue = document.getElementById("issueType").value;
    
    alert(`📩 訊息已送出！\n${name} 您好，關於「${issue}」的申請已建立，專員將盡快與您聯繫。`);
    document.getElementById("tech-form").reset();
}