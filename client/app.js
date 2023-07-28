document.querySelector(".register-button").addEventListener("click", async () => {
  const emailInp = document.querySelector(".email");
  const pwdInp = document.querySelector(".password");

  const obj = { email: emailInp.value, pwd: pwdInp.value };

  const response = await fetch(`http://localhost:3000/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  const json = await response.json();
  console.log(json);
});

document.querySelector(".login-button").addEventListener("click", async () => {
  const emailInp = document.querySelector(".email2");
  const pwdInp = document.querySelector(".password2");

  const obj = { email: emailInp.value, pwd: pwdInp.value };

  const response = await fetch(`http://localhost:3000/api/authorize`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  const json = await response.json();
  console.log(json);
});
