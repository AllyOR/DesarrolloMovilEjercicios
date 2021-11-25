import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  constructor(public menuController: MenuController) { }

  ngOnInit() {
  }

  readonly toggleMenu = async () => {
    await this.menuController.toggle();
  };

}
