const registerForm = document.forms["register-form"];

if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(registerForm));
        console.log("formData", formData);

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            console.log("Registration successful");
            window.location.assign("/login");
        } else {
            const data = await res.json();
            alert(data.message);
        }
    });
}
