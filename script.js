
"use strict";

// Replace this with the actual business owner's WhatsApp number.
// Use country code + number, without +, spaces or dashes.
const BUSINESS_WHATSAPP = "919876543210";

const form = document.getElementById("enquiry-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const student = document.getElementById("student").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;

  if (!student || !/^[0-9]{10}$/.test(phone) || !course) {
    alert("Please check all fields and enter a valid 10-digit number.");
    return;
  }

  if (!/^[0-9]{10,15}$/.test(BUSINESS_WHATSAPP)) {
    alert("Website owner: please configure the WhatsApp number first.");
    return;
  }

  const message = [
    "Hello, I would like to enquire about a course.",
    `Student name: ${student}`,
    `Contact number: ${phone}`,
    `Course: ${course}`
  ].join("\n");

  const url =
    "https://wa.me/" + BUSINESS_WHATSAPP +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
});
