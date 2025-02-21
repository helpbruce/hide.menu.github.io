function toggleSelection(event) {
  const menuItems = event.currentTarget.parentElement.getElementsByClassName('menu-item');
  for (let item of menuItems) {
    item.classList.remove('selected');
    item.classList.add('dimmed'); // Добавляем полупрозрачность ко всем элементам
  }
  event.currentTarget.classList.remove('dimmed'); // Убираем полупрозрачность с выбранного элемента
  event.currentTarget.classList.add('selected');
  updateOrderButtonState();
}

function updateOrderButtonState() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  const orderButton = document.querySelector('.proceed-to-order-button'); // Обновляем селектор для кнопки "Перейти к оплате заказа"
  const requiredPositions = document.querySelectorAll('.menu-section').length;
  
  if (selectedItems.length === requiredPositions) {
    orderButton.disabled = false; // Включаем кнопку, если выбраны все позиции
  } else {
    orderButton.disabled = true; // Выключаем кнопку, если не выбраны все позиции
  }
}

function showOrderSummary() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  let orderSummary = document.querySelector('.order-summary-modal');
  let overlay = document.querySelector('.modal-overlay');
  let summaryHTML = '<h2>Your Order</h2>';
  
  selectedItems.forEach(item => {
    summaryHTML += '<div class="order-summary-item"><h4>' + item.getElementsByTagName('h4')[0].innerText + '</h4></div>';
  });

  if (selectedItems.length === document.querySelectorAll('.menu-section').length) {
    summaryHTML += '<p class="total-price">Total: $100</p>';
    summaryHTML += '<button class="button-52" role="button" onclick="proceedToPayment()">Pay</button>';
  } else {
    summaryHTML += '<button class="button-52" role="button" onclick="proceedToPayment()">Pay</button>';
  }
  
  orderSummary.innerHTML = summaryHTML;
  orderSummary.style.display = 'block';
  overlay.style.display = 'block';
}

function proceedToPayment() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  const requiredPositions = document.querySelectorAll('.menu-section').length;

  if (selectedItems.length === requiredPositions) {
    // Здесь вы можете добавить код для перенаправления на платежную систему
    alert('Redirecting to payment system...');
  } else {
    // Показать сообщение, если не выбраны все блюда
    alert('Choose a dish from each position');
  }
}

function closeOrderSummary(event) {
  let orderSummary = document.querySelector('.order-summary-modal');
  let overlay = document.querySelector('.modal-overlay');
  
  if (event.target === overlay) {
    orderSummary.style.display = 'none';
    overlay.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', toggleSelection);
  });
  
  document.querySelector('.modal-overlay').addEventListener('click', closeOrderSummary);
  updateOrderButtonState();
});
