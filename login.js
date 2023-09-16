
        function toggleContainer() {
            var signupContainer = document.getElementById("signup-container");
            var signinContainer = document.getElementById("signin-container");

            if (signupContainer.style.display === "none") {
                signupContainer.style.display = "block";
                signinContainer.style.display = "none";
            } else {
                signinContainer.style.display = "block";
                signupContainer.style.display = "none";
            }
        }

        function signUp() {
            var email = document.getElementById("signup-email").value;
            var password = document.getElementById("signup-password").value;

            if (!email || !password) {
                alert("Email and Password are required.");
                return;
            }

            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            // Add slide-up animation
            document.body.style.animation = "slidePageUp 0.5s ease-in-out";
            setTimeout(function () {
                window.location.href = "home.html";
            }, 500);
        }

        function signIn() {
            var email = document.getElementById("signin-email").value;
            var password = document.getElementById("signin-password").value;

            if (!email || !password) {
                alert("Email and Password are required.");
                return;
            }

            var storedEmail = localStorage.getItem("email");
            var storedPassword = localStorage.getItem("password");

            if (email === storedEmail && password === storedPassword) {
                // Add slide-up animation
                document.body.style.animation = "slidePageUp 0.5s ease-in-out";
                setTimeout(function () {
                    window.location.href = "home.html";
                }, 500);
            } else {
                document.getElementById("popup-email").textContent = email;
                document.getElementById("popup-password").textContent = password;
                document.getElementById("popup").style.display = "block";
            }
        }

        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }