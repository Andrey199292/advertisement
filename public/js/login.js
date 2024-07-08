const loginForm = document.forms["login-form"];

if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        try {
            event.preventDefault();

            const formData = Object.fromEntries(new FormData(loginForm));

            console.log("formData", formData);

            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                window.location.href = "/";
            } else {
                alert("Где, корректный email  и пароль?");
            }
        } catch (error) {
            console.log("Снова ошибка", error);
        }
    });
}
