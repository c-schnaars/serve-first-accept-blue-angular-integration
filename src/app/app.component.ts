import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare function HostedTokenization(any: any): void;
declare function getNonceToken(): void;
declare function listenForToken(event: Event): void;
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

  ngOnInit(): void {
    OnInit();
  }

  submitCharge(event: Event) {
    listenForToken(event);
  }
}
