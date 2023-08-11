      // Toggle dropdown menu
      document.addEventListener('click', function (event) {
        const dropdown = document.querySelector('.dropdown');
        if (!dropdown.contains(event.target)) {
          const dropdownContent = document.querySelector('.dropdown-content');
          dropdownContent.classList.add('hidden');
        }
      });
      document
        .querySelector('.dropdown-button')
        .addEventListener('click', function () {
          const dropdownContent = document.querySelector('.dropdown-content');
          dropdownContent.classList.toggle('hidden');
        });

        console.log("Hello World!");