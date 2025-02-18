let cart = {};
let totalAmount = 0;

// Функция для обновления счетчика
function updateCounter(dishName) {
  const counter = document.querySelector(`#${dishName} .counter`);
  const addButton = document.querySelector(`#${dishName} .add-btn`);
  
  if (!cart[dishName]) {
    cart[dishName] = 1;
  } else {
    cart[dishName]++;
  }
  
  // Обновить текст счетчика
  counter.innerText = `x ${cart[dishName]}`;
  
  // Изменить цвет кнопки Add
  addButton.classList.add('active');
  
  // Обновить общую сумму
  updateTotal(dishName);
}

// Функция для обновления общей суммы
function updateTotal(dishName) {
  const price = 10;  // Стоимость одного блюда, например
  totalAmount += price;
  
  document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
  
  // Показать кнопку "Подтвердить заказ", если есть хотя бы один элемент
  if (totalAmount > 0) {
    document.querySelector('.confirm-order').style.display = 'inline-block';
  }
}

// Слушатель событий для кнопки "Add"
document.querySelectorAll('.add-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const dishName = e.target.parentElement.querySelector('.dish-name').innerText;
    updateCounter(dishName);
  });
});

function showPopup(dish) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popupDescription = document.getElementById('popup-description');
  
  let imageSrc = '';
  let description = '';

  switch (dish) {
    case 'pizza':
      imageSrc = 'https://cdn.leonardo.ai/...';
      description = 'Classic pizza with fresh mozzarella, basil, and tomato sauce.';
      break;
    case 'burger':
      imageSrc = 'https://cdn.leonardo.ai/...';
      description = 'Juicy beef patty with lettuce, tomato, and special sauce.';
      break;
    // Добавьте остальные блюда аналогично
  }

  popupImg.src = imageSrc;
  popupDescription.innerText = description;
  popup.style.display = 'flex';
}

