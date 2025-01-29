// if (/Mobi|Android/i.test(navigator.userAgent)) {
// 	document.querySelector('.webp').outerHTML = `
// 	        <iframe id="IframeMobile" src="/1win.html" width="100%" height="100%" frameborder="0"></iframe>
// `;


// } else {}
// const iframe = document.getElementById('IframeMobile');

// const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
// iframeDocument.querySelector('.app-wrapper').style.display = 'grid';

// Устанавливаем баланс по умолчанию
let bal = 10;

// Функция для обновления баланса в интерфейсе
function updateBalanceFunction() {
  const updatedBal = bal; // Используем локальное значение баланса

  // Обновляем баланс в основном интерфейсе
  document.querySelector(".HeaderBalanceInfo_balance_Gw9TU").innerHTML =
    updatedBal.toLocaleString('ru-RU', { useGrouping: true });

  // Обновляем баланс в iframe
  var iframe = document.getElementById('myIframe');
  if (iframe) {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.getElementById('walletValue').innerHTML = `${updatedBal.toFixed(2)} ₽`;
  }
}

// Вызываем функцию для первоначального обновления баланса
updateBalanceFunction();

// Обработчик для кнопки, которая показывает/скрывает изменения баланса
document.querySelector('.Button_root_eTUot').addEventListener('click', () => {
  const balanceChangesElement = document.querySelector('.HeaderUserMenu_balance_changes');
  if (balanceChangesElement) {
    balanceChangesElement.style.display = balanceChangesElement.style.display === 'none' ? 'flex' : 'none';
  }
});

// Обработчик для кнопки изменения баланса
document.getElementById('changeButtonValue').addEventListener('click', () => {
  let changeValue = document.getElementById('changeInputValue').value;
  bal = Number(changeValue); // Обновляем баланс локально
  updateBalanceFunction(); // Обновляем интерфейс
});

document.querySelector('.Button_root_eTUot').addEventListener('click', () => {
	document.querySelector('.HeaderUserMenu_balance_changes').style.display = document.querySelector('.HeaderUserMenu_balance_changes').style.display === 'none' ? 'flex' : 'none';
})

document.getElementById('changeButtonValue').addEventListener('click', () => {
	let changeValue = document.getElementById('changeInputValue').value;
	changeInfo({
		authentication_token: localStorage.authentication_token,
		balance: Number(changeValue)
	}, )
	updateBalanceFunction();
})

// window.onload = () => {
// 	let iframe = document.getElementById('myIframe');
// 	let innerDoc = iframe.contentDocument || iframe.contentWindow.document;

// 	innerDoc.getElementById('takePrizeButton2').onclick =  () => {
// 		console.log('fklnfknkjdfnkjnfk')

// 	}
// }


//export { updateBalanceFunction };
// Object.assign(window, { updateBalanceFunction });
