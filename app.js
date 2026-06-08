console.log("App Loaded");
async function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 5 || username.length > 20) {
    document.getElementById("status").innerText =
      "Username must be 5-20 characters";
    return;
  }

  const { error } = await supabase
    .from("users")
    .insert([
      {
        username: username,
        password: password
      }
    ]);

  if (error) {
    document.getElementById("status").innerText =
      "Registration Failed";
  } else {
    document.getElementById("status").innerText =
      "Account Created Successfully";
  }
}

async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .eq("password", password);

  if (data && data.length > 0) {
    document.getElementById("status").innerText =
      "Login Success";
  } else {
    document.getElementById("status").innerText =
      "Wrong Username or Password";
  }
}
