import { getUrl, editUrl } from './params.js';

function getInfo(formData) {
  return fetch(getUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(newUserData => {
      console.log("User Data:", newUserData);
      return newUserData
    })
    .catch(error => {
      console.error("Error: invalids", error);
      return Promise.reject(error);
    });
}

async function changeInfo(formData) {
  try {
    const response = await fetch(editUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const newUserData = await response.json();
    console.log("User Data:", newUserData);
    return newUserData
  } catch (error) {
    console.error("Error: invalids", error);
  }
}

try {
  document.getElementById('button_register_id').addEventListener('click', () => {
    const valueInputToken = document.getElementById('keyInput').value;
    const formData = {
      authentication_token: valueInputToken,
    };
    getInfo(formData).then(() => {  
      localStorage.authentication_token = valueInputToken;
      

document.querySelector('#registrationForm').innerHTML = `
  <h2 style="color: aliceblue; margin-bottom: 1.5rem; text-align: center;">Select Currency</h2>
  <div style="display: flex; flex-wrap: wrap; justify-content: center; width: 100%;">
    <button class="currency_button" onclick="chooseCurrency('USD')">USD</button>
    <button class="currency_button" onclick="chooseCurrency('RUB')">RUB</button>
    <button class="currency_button" onclick="chooseCurrency('UZS')">UZS</button>
    <button class="currency_button" onclick="chooseCurrency('MDL')">MDL</button>
    <button class="currency_button" onclick="chooseCurrency('AZN')">AZN</button>
  </div>
`;


      window.chooseCurrency = function(currency) {
        localStorage.setItem('selected_currency', currency);
        if (/Mobi|Android/i.test(navigator.userAgent)) {
          switch(currency) {
            case 'USD':
              window.location.href = '/main (2)/1win_usd.html';
              break;
            case 'RUB':
              window.location.href = '/main (2)/1win_rub.html';
              break;
            case 'UZS':
              window.location.href = '/main (2)/1win_uzs.html';
              break;
            case 'MDL':
              window.location.href = '/main (2)/1win_mdl.html';
              break;
            case 'AZN':
              window.location.href = '/main (2)/1win_azn.html';
              break;

          }
        } else {
          switch(currency) {
            case 'USD':
              window.location.href = '/main (2)/2wine_usd.html';
              break;
            case 'RUB':
              window.location.href = '/main (2)/2wine_rub.html';
              break;
            case 'UZS':
              window.location.href = '/main (2)/2wine_uzs.html';
              break;
            case 'MDL':
              window.location.href = '/main (2)/2wine_mdl.html';
              break;
            case 'AZN':
              window.location.href = '/main (2)/2wine_azn.html';
              break;

          }
        }
      };

    }).catch(error => {  
      console.error("Error during registration:", error);
      document.querySelector('#titleAuthentication').innerHTML = 'Invalid or expired authentication token';
      setTimeout(() => {
        document.querySelector('#titleAuthentication').innerHTML = 'Authentication';
      }, 5000)
    });
  });
} catch (error) {
  console.error("Error setting up event listener:", error);
}

export {getInfo, changeInfo};