document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();


        if (name === "" || email === "") {

            alert("Vui lòng nhập đầy đủ thông tin.");

            return;
        }


        alert(
            "Đăng ký thành công!\n\n" +
            "Họ tên: " + name + "\n" +
            "Email: " + email
        );


        registerForm.reset();

    });

});
