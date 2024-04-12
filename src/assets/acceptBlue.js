let cardForm = null;

function initializeAcceptBlue() {
  // Initialize cardForm element
  const your_tokenization_key = 'YOUR_TOKENIZATIOIN_KEY';
  const hostedTokenization = new window.HostedTokenization(your_tokenization_key);
  cardForm = hostedTokenization.create('card-form');

  // Mount cardForm element
  cardForm.mount('#iframe-container');

  // Style cardForm element
  cardForm.setStyles({
    card: 'border: 1px solid black'
  })
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
