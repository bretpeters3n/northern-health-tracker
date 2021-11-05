const contact = async () => {
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (email && message) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  } else
    alert("Missing information.");

};

document.querySelector(".contact-button").addEventListener("click", contact);