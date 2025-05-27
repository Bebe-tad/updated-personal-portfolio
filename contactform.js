document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

 
  const namePattern = /^[A-Za-z\s]+$/;

 
  if (!namePattern.test(name.value.trim())) {
    alert("Name must contain only letters and spaces.");
    name.focus();
    e.preventDefault(); 
    return;
  }

 
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(email.value.trim())) {
    alert("Please enter a valid email address.");
    email.focus();
    e.preventDefault();
    return;
  }

 
  if (message.value.trim().length < 10) {
    alert("Message should be at least 10 characters.");
    message.focus();
    e.preventDefault();
    return;
  }
});document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // always prevent default for custom handling

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^\S+@\S+\.\S+$/;

    // Validation checks
    if (!namePattern.test(name.value.trim())) {
      alert("Name must contain only letters and spaces.");
      name.focus();
      return; // stop submission
    }

    if (!emailPattern.test(email.value.trim())) {
      alert("Please enter a valid email address.");
      email.focus();
      return; // stop submission
    }

    if (message.value.trim().length < 10) {
      alert("Message should be at least 10 characters.");
      message.focus();
      return; // stop submission
    }

    // If all validation passed — submit form via fetch
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          showThankYouMessage();
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Oops! Something went wrong."));
  });

  function showThankYouMessage() {
     const existingMessage = document.querySelector(".thank-you-message");
  if (existingMessage) {
    existingMessage.remove();
  }
    const svg = `
      <div class="thank-you-message" style="text-align:center; margin-top: 30px;">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#2563eb" />
          <path d="M30 50 L45 65 L70 35" fill="none" stroke="#f8fafc" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h3 style="color:#2563eb;">Thank you for your message!</h3>
      </div>
    `;
    form.insertAdjacentHTML("afterend", svg);
  }
});
