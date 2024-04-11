
let cardForm = null;


function OnInit() {

  const chargeButton = document.querySelector('#charge');
  const iframeContainerEl = document.querySelector('#iframe-container');
  const errorMessageEl = document.querySelector('#error-message');
  const ltiKey = 'pk_kEGLdMcAUw0TAOr38cCUtsuxZFg8h';
  const hostedTokenization = new window.HostedTokenization(ltiKey);
  cardForm = hostedTokenization.create('card-form');
  cardForm.mount('#iframe-container')
    .on('input', listenForToken)
    .on('change', listenForToken);
}
function _onEvent(event) {
  _handleError(event.error);
                //< !--maskedCardEl.innerText = (event.result && event.result.maskedCard) || ''; -->
                //< !--maskedCvv2El.innerText = (event.result && event.result.maskedCvv2) || ''; -->
        }

async function listenForToken() { }



async function zListenForToken(event) {
  console.log(cardForm);
  try {
    const result = await cardForm.getNonceToken();
    console.log(result);

  }
  catch(err) {
    console.log(err);
  }
  return '';
}
