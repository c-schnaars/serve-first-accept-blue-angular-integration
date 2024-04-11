import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenizationResult } from './_models/tokenizationResult';

declare function listenForToken(): TokenizationResult;
declare function initializeAcceptBlue(): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  tokenizationResult: TokenizationResult = {} as TokenizationResult;

  ngOnInit(): void {
    initializeAcceptBlue();
  }

  async submitCharge() {
    const result = await listenForToken() as TokenizationResult;
    this.tokenizationResult = result;
    console.log(this.tokenizationResult);
  }
}
