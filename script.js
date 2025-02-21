function toggleSelection(event) {
  const menuItems = event.currentTarget.parentElement.getElementsByClassName('menu-item');
  for (let item of menuItems) {
    item.classList.remove('selected');
    item.classList.add('dimmed');
  }
  event.currentTarget.classList.remove('dimmed');
  event.currentTarget.classList.add('selected');
  updateOrderButtonState();
}

function updateOrderButtonState() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  const orderButton = document.querySelector('.proceed-to-order-button');
  const requiredPositions = document.querySelectorAll('.menu-section').length;

  if (selectedItems.length === requiredPositions) {
    orderButton.disabled = false;
  } else {
    orderButton.disabled = true;
  }
}

function showOrderSummary() {
  const selectedItems = document.querySelectorAll('.menu-item.selected');
  let orderSummary = document.querySelector('.order-summary-modal');
  let overlay = document.querySelector('.modal-overlay');

  let summaryHTML = `<div id="invoice-POS">
                      <center id="top">
                        <div class="logo"></div>
                        <div class="info"> 
                          <h2>Restaurant Name</h2>
                        </div>
                      </center>
                      <div id="mid">
                        <div class="info">
                          <h2>Contact Info</h2>
                          <p> 
                              Address: street city, state 0000</br>
                              Email: restaurant@example.com</br>
                              Phone: 123-456-7890</br>
                          </p>
                        </div>
                      </div>
                      <div id="bot">
                        <div id="table">
                          <table>
                            <tr class="tabletitle">
                              <td class="item"><h2>Item</h2></td>
                              <td class="Hours"><h2>Qty</h2></td>
                              <td class="Rate"><h2>Sub Total</h2></td>
                            </tr>`;
  
  selectedItems.forEach(item => {
    summaryHTML += `<tr class="service">
                      <td class="tableitem"><p class="itemtext">${item.getElementsByTagName('h4')[0].innerText}</p></td>
                      <td class="tableitem"><p class="itemtext">1</p></td>
                      <td class="tableitem"><p class="itemtext">$100.00</p></td>
                    </tr>`;
  });
  
  summaryHTML += `<tr class="tabletitle">
                    <td></td>
                    <td class="Rate"><h2>Total</h2></td>
                    <td class="payment"><h2>$100.00</h2></td>
                  </tr>
                </table>
              </div>
              <div id="legalcopy">
                <p class="legal"><strong>Thank you for your business!</strong> Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.</p>
              </div>
            </div>
          </div>`;

  orderSummary.innerHTML = summaryHTML;
  orderSummary.style.display = 'block';
  overlay.style.display = 'block';
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
