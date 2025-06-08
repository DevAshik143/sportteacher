document.addEventListener('keydown', function (e) {
  // RTL ভাষার জন্য (lang-ar)
  const shadowBox = document.querySelector('.lang-ar');

  if (!shadowBox) return; // যদি lang-ar না থাকে, কিছু করো না

  const arrows = shadowBox.querySelectorAll('.arrow-icon');

  // ধরে নিচ্ছি: arrows[0] = → (left link), arrows[1] = ← (right link)

  if (e.key === 'ArrowRight') {
    // এখন → চাপলে ← আইকনে ক্লিক হবে (উল্টো)
    if (arrows[1]) arrows[1].click();
  }

  if (e.key === 'ArrowLeft') {
    // এখন ← চাপলে → আইকনে ক্লিক হবে (উল্টো)
    if (arrows[0]) arrows[0].click();
  }
});


/*FAQ*/
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('active');

      // Close others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
    });
  });




  /*<!-- Keyboard Navigation Script -->
  */
    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        window.location.href = document.getElementById("prevPage").href;
      } else if (event.key === "ArrowRight") {
        window.location.href = document.getElementById("nextPage").href;
      }
    });


/*Dropdown Click*/
    // Click toggle submenu
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();

      const parent = toggle.parentElement;

      // Close all other submenus
      document.querySelectorAll('.dropdown-submenu').forEach(el => {
        if(el !== parent) el.classList.remove('show');
      });

      // Toggle current submenu
      parent.classList.toggle('show');
    });
  });

  // Prevent submenu item click from closing dropdown
  document.querySelectorAll('.dropdown-submenu .dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
    });
  });