const contact = async () => {
  const message = document.querySelector('#message').value.trim();

  if (message) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ message: message }),
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