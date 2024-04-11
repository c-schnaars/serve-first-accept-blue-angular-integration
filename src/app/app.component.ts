import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function HostedTokenization(any: any): void;
declare function getNonceToken(): void;
declare function zListenForToken(event: Event): void;
declare function OnInit(): void;

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
    //this.acceptBlueScriptElement = document.createElement("script");
    //this.acceptBlueScriptElement.src = "https://tokenization.sandbox.mysfsgateway.com/tokenization/v0.1";
    //document.body.appendChild(this.acceptBlueScriptElement);
  }
  ngOnInit(): void {
    OnInit();
  }

  xListenForToken(event: Event) {
    zListenForToken(event);
  }
}
