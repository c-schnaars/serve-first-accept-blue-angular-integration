let cardForm = null;

function OnInit() {
  const your_tokenization_key = 'pk_kEGLdMcAUw0TAOr38cCUtsuxZFg8h';
  const hostedTokenization = new window.HostedTokenization(your_tokenization_key);
  cardForm = hostedTokenization.create('card-form');
  cardForm.mount('#iframe-container');
}

async function listenForToken(event) {
  try {
    const result = await cardForm.getNonceToken();
    if (result.nonce) {
      const token = result.nonce;
      console.log('Token: ' + token);
    }
  }
  catch(err) {
    console.log('Error: ' + err);
  }
}
