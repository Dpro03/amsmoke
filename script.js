document.addEventListener('DOMContentLoaded', function () {
  // Toggle dropdown menu
  const dropdownButton = document.querySelector('.dropdown-button');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownButton && dropdownContent) {
    document.addEventListener('click', function (event) {
      if (!dropdownButton.contains(event.target)) {
        dropdownContent.classList.add('hidden');
      }
    });

    dropdownButton.addEventListener('click', function () {
      dropdownContent.classList.toggle('hidden');
    });
  }

  // Add event listener for form submission
  const form = document.getElementById('reservation-form');
  const modal = document.getElementById('reservation-modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close-button');
  const reservationInfo = document.getElementById('reservation-info');

  if (form && modal && modalContent && closeBtn) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const date = form.querySelector('#date').value;
      const time = form.querySelector('#time').value;
      const partySize = form.querySelector('#party-size').value;

      // Set reservation info in modal
      // reservationInfo.textContent = `Name: ${name}\nEmail: ${email} Time: ${time} Date: ${date} Party Size: ${partySize}`;

      // Set reservation info in modal
      reservationInfo.innerHTML =
    `<p><strong>Reservation Confirmed!</strong></p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Party Size:</strong> ${partySize}</p>
    `;

      // Display modal
      modal.style.display = 'block';

      // Close modal when close button is clicked
      closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      // Close modal when clicking outside the modal content
      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });

      form.reset();
    });
  }

  console.log('Hello world!');
});
