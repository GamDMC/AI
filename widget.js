(function () {

    const CHAT_URL = "https://gamdmc.github.io/AI/sp";
    const isMobile = window.innerWidth < 480;

 
    /* Floating Button */
    const button = document.createElement("div");
    button.title = "Chat with Daisa";
    button.innerHTML = `
    <div style="position:relative;width:100%;height:100%;">
        <img src="https://gamdmc.github.io/AI/Daisa.png" style="width:100%;height:100%;border-radius:50%;">
        
        <div style="
            position:absolute;
            bottom:2px;
            right:2px;
            background:#007bff;
            color:#fff;
            width:18px;
            height:18px;
            border-radius:50%;
            font-size:11px;
            display:flex;
            align-items:center;
            justify-content:center;
            border:2px solid white;
        ">
            💬
        </div>
    </div>
    `;  
    const bubble = document.createElement("div");
bubble.innerText = "Hi there 👋 Ask me anything!";
Object.assign(bubble.style,{
    position:"fixed",
    bottom:"90px",
    right:"20px",
    background:"#111",
    color:"#fff",
    padding:"8px 12px",
    borderRadius:"12px",
    fontSize:"13px",
    boxShadow:"0 4px 12px rgba(0,0,0,0.25)",
    zIndex:"99999",
    maxWidth:"160px"
});

document.body.appendChild(bubble);
    Object.assign(button.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        overflow: "hidden",
        zIndex: "99999"
    });

    /* Popup */
    const popup = document.createElement("div");
    Object.assign(popup.style, {
        position: "fixed",
        bottom: isMobile ? "10px" : "90px",
        right: isMobile ? "10px" : "20px",
        width: isMobile ? "95%" : "380px",
        height: isMobile ? "85vh" : "500px",
        display: "none",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        zIndex: "99999"
    });

    /* Close Button */
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = "✕";
    Object.assign(closeBtn.style, {
        position: "absolute",
        top: "8px",
        right: "12px",
        fontSize: "18px",
        cursor: "pointer",
        zIndex: "100000",
        color: "#000",
        background: "#fff",
        borderRadius: "50%",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
    });

    /* Iframe */
    const iframe = document.createElement("iframe");
    iframe.src = CHAT_URL;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    popup.appendChild(closeBtn);
    popup.appendChild(iframe);
    document.body.appendChild(button);
    document.body.appendChild(popup);

    /* Toggle */
    button.onclick = () => {
        popup.style.display =
            popup.style.display === "none" ? "block" : "none";
    };

    closeBtn.onclick = () => {
        popup.style.display = "none";
    };

})();
