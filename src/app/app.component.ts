import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function HostedTokenization(any: any): void;
declare function getNonceToken(): void;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  acceptBlueScriptElement: HTMLScriptElement = {} as HTMLScriptElement;
  acceptBlueFormScriptElement: HTMLScriptElement = {} as HTMLScriptElement;
  cardForm: any = {};

  constructor() {
    this.acceptBlueScriptElement = document.createElement("script");
    this.acceptBlueScriptElement.src = "https://tokenization.sandbox.mysfsgateway.com/tokenization/v0.1";
    document.body.appendChild(this.acceptBlueScriptElement);
  }
  ngOnInit(): void {

    this.acceptBlueFormScriptElement = document.createElement("script");
    //this.acceptBlueFormScriptElement.src = "lti";
    //this.acceptBlueFormScriptElement.defer; // MDN docs say to not use this attribute if src attribute absent; console.log shows defer does not work without src
    this.acceptBlueFormScriptElement.textContent = `const chargeButton = document.querySelector('#charge');
        console.log('Hello');
        const iframeContainerEl = document.querySelector('#iframe-container');
        const errorMessageEl = document.querySelector('#error-message');
        <!--chargeButton.addEventListener('click', onChargeClick);-->
        chargeButton.addEventListener('click', listenForToken());
        const ltiKey = 'pk_kEGLdMcAUw0TAOr38cCUtsuxZFg8h';
        console.log('Made it here');
        const hostedTokenization = new window.HostedTokenization(ltiKey);
        console.log('Made it here too');
        const cardForm = hostedTokenization.create('card-form');
        cardForm.mount('#iframe-container');
            <!--.on('input', listenForToken)-->
            <!--.on('change', listenForToken);-->
        console.log('Card Form');
        console.log(cardForm);

        function _onEvent(event) {
                _handleError(event.error);
                <!--maskedCardEl.innerText = (event.result && event.result.maskedCard) || '';-->
                <!--maskedCvv2El.innerText = (event.result && event.result.maskedCvv2) || '';-->
        }

        async function listenForToken() {
          
          }`;
    document.body.appendChild(this.acceptBlueFormScriptElement);
    }

  async zListenForToken(event: Event): Promise<string> {
    console.log('listenForToken');
    console.log(event);
    const result = await this.cardForm.getNonceToken();
    console.log(result);
    return '';
  }
}
