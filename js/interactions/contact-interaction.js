export default function contactInteractions() {
    const from = document.querySelector(".contact-form");
    from.addEventListener("submit", function(e) {
        e.preventDefault();
    
        emailjs.sendForm("service_o858b1r", "template_l1a6qrk", this, "LUYmOmbK140vHArqe")
        .then(() => {
            alert("메일이 성공적으로 전송되었습니다.");
            from.reset();
        })
        .catch(() => {
            alert("메일을 전송하는 데 실패했습니다.\n 다시 시도해 주세요.");
        })
    });
}