export function contact() {
    emailjs.init("LUYmOmbK140vHArqe");

    const from = document.querySelector(".contact_form");
    from.addEventListener("submit", (e) => {
        e.preventDefault();
        sendMail(from);
    });
}

function sendMail(from) {
    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_o858b1r", "template_l1a6qrk", params)
        .then((res) => {
            alert("메일이 성공적으로 전송되었습니다.");
            from.reset();
        })
        .catch((err) => {
            alert("메일을 전송하는 데 실패했습니다.\n 다시 시도해 주세요.");
        })
}