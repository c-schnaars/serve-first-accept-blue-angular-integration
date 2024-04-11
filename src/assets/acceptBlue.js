let cardForm = null;

function initializeAcceptBlue() {
  const your_tokenization_key = 'YOUR_TOKENIZATIOIN_KEY';
  const hostedTokenization = new window.HostedTokenization(your_tokenization_key);
  cardForm = hostedTokenization.create('card-form');
  cardForm.mount('#iframe-container');
}

async function listenForToken() {
  try {
    const result = await cardForm.getNonceToken();
    if (result) {
      return result;
    }
  }
  catch(err) {
    console.log('Error: ' + err);
  }
}
