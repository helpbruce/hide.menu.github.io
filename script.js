function openModal(element) {
    const menuItem = element.parentElement;
    const name = menuItem.getAttribute('data-name');
    const description = menuItem.getAttribute('data-description');
    const image = menuItem.getAttribute('data-image');
  
    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = image;
  
    document.getElementById('modal').style.display = "block";
    document.getElementById('modal').style.opacity = 1; // Плавное появление
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = "none";
    document.getElementById('modal').style.opacity = 0; // Плавное исчезновение
  }
  
  // Закрытие модального окна при клике вне его области
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
      closeModal();
    }
  };
  