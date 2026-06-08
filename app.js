async function register() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const status = document.getElementById("status");

    if (username.length < 5 || username.length > 20) {
        status.innerText = "Username must be 5-20 characters";
        return;
    }

    try {
        const { data, error } = await supabase
            .from("users")
            .insert([
                {
                    username: username,
                    password: password
                }
            ]);

        if (error) {
            status.innerText = "Error: " + error.message;
        } else {
            status.innerText = "✅ Account Created Successfully";
        }

    } catch (e) {
        status.innerText = "Error: " + e.message;
    }
}

async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const status = document.getElementById("status");

    try {
        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("username", username)
            .eq("password", password);

        if (error) {
            status.innerText = "Error: " + error.message;
            return;
        }

        if (data && data.length > 0) {
            status.innerText = "✅ Login Success";
        } else {
            status.innerText = "❌ Wrong Username or Password";
        }

    } catch (e) {
        status.innerText = "Error: " + e.message;
    }
}
