const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const createFormFields = () => {
  form.style.maxWidth = "400px";
  form.style.margin = "0 auto";
  form.style.padding = "20px";

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.style.display = "flex";
  emailLabel.style.flexDirection = "column";
  emailLabel.style.marginBottom = "10px";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.autofocus = true;
  emailInput.style.width = "100%";
  emailInput.style.padding = "8px";
  emailLabel.appendChild(emailInput);

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.style.display = "flex";
  messageLabel.style.flexDirection = "column";
  messageLabel.style.marginBottom = "10px";

  const messageTextarea = document.createElement("textarea");
  messageTextarea.name = "message";
  messageTextarea.rows = 8;
  messageTextarea.style.width = "100%";
  messageTextarea.style.padding = "8px";
  messageLabel.appendChild(messageTextarea);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.style.display = "block";
  submitButton.style.width = "100%";
  submitButton.style.padding = "10px";

  form.append(emailLabel, messageLabel, submitButton);
};

const loadFormData = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email || "";
    form.message.value = message || "";
  }
};

form.addEventListener("input", (event) => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  console.log("Form Gönderildi:", formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  createFormFields();
  loadFormData();
});