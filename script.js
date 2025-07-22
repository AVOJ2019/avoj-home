
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting AVOJ Ministries College. We will get back to you soon.');
      form.reset();
    });
  }
});
