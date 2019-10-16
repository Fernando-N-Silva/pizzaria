import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValoresService } from '../valores.service';

@Component({
  selector: 'app-pedidofinal',
  templateUrl: './pedidofinal.page.html',
  styleUrls: ['./pedidofinal.page.scss'],
})
export class PedidofinalPage implements OnInit {
  public atendente: string;
  public mesa: number;
  public resultado: number;

  constructor(
    public route: ActivatedRoute,
    public valores: ValoresService) {
      this.atendente = this.valores.getInfo();
      this.mesa = this.valores.getInfo2();
      this.resultado = this.valores.getInfo3();
     }

  ngOnInit() {
  }

}
