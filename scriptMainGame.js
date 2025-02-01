// if (/Mobi|Android/i.test(navigator.userAgent)) {
// 	document.querySelector('.webp').outerHTML = `
// 	        <iframe id="IframeMobile" src="/1win.html" width="100%" height="100%" frameborder="0"></iframe>
// `;


// } else {}
// const iframe = document.getElementById('IframeMobile');

// const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
// iframeDocument.querySelector('.app-wrapper').style.display = 'grid';

let bal = 0;
import { getInfo, changeInfo } from './Authorization/api/scriptAPI.js';

function updateBalance() {
  return getInfo({ authentication_token: localStorage.authentication_token })
    .then((response) => {
      bal = response.balance;
      return bal; 
    })
    .catch((error) => {
      console.error("Error during the request:", error);
      throw error; 
    });
}
function updateBalanceFunction() {
	updateBalance().then((updatedBal) => {
	  document.querySelector(".HeaderBalanceInfo_balance_Gw9TU").innerHTML =
		updatedBal.toLocaleString('ru-RU', { useGrouping: true });

		var iframe = document.getElementById('myIframe');
		var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
		iframeDocument.getElementById('walletValue').innerHTML = `${updatedBal.toFixed(2)} ₽`


	});


}
updateBalanceFunction();

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