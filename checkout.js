// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
// only allow one selection per menu option
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(function(category) {
        category.addEventListener('change', function(e) {
            if (e.target.type === 'checkbox') {
                const sameCategoryCheckboxes = category.querySelectorAll(`input[type="checkbox"]`);
                sameCategoryCheckboxes.forEach(function(checkbox) {
                    if (checkbox !== e.target) {
                        checkbox.checked = false;
                    }
                });
            }
        });
    });
});
// Existing JavaScript for checkbox selection
document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.category');
  categories.forEach(function(category) {
    category.addEventListener('change', function(e) {
      if (e.target.type === 'checkbox') {
        const sameCategoryCheckboxes = category.querySelectorAll(`input[type="checkbox"]`);
        sameCategoryCheckboxes.forEach(function(checkbox) {
          if (checkbox !== e.target) {
            checkbox.checked = false;
          }
        });
      }
    });
  });
});
