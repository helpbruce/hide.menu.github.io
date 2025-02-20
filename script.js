function toggleSelection(event) {
  const menuItems = event.currentTarget.parentElement.getElementsByClassName('menu-item');
  for (let item of menuItems) {
      item.classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

function showOrderSummary() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  let orderSummary = document.querySelector('.order-summary-modal');
  let overlay = document.querySelector('.modal-overlay');
  let summaryHTML = '<h2>Ваш заказ</h2>';
  selectedItems.forEach(item => {
      summaryHTML += '<div>' + item.getElementsByTagName('h4')[0].innerText + '</div>';
  });
  summaryHTML += '<button onclick="proceedToPayment()">Оплатить</button>';
  orderSummary.innerHTML = summary
