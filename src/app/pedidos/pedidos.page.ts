import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  q1: number = 0;
  q2: number = 0;
  q3: number = 0;
  q4: number = 0;
  q5: number = 0;
  q6: number = 0;
  q7: number = 0;
  q8: number = 0;
  v1: number = 19.90;
  v2: number = 21.90;
  v3: number = 24.90;
  v4: number = 23.90;
  v5: number = 12.00;
  v6: number = 5.00;
  v7: number = 4.50;
  v8: number = 6.00;
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  r5: number;
  r6: number;
  r7: number;
  r8: number;
  resultado:number;  //number = 0
  atendente: string;
  mesa: number;
  public somar() {
    this.resultado = (this.r1 = (this.q1 * this.v1)) + (this.r2 = (this.q2 * this. v2)) + (this.r3 = (this.q3 * this. v3)) + (this.r4 = (this.q4 * this. v4)) + (this.r5 = (this.q5 * this. v5)) + (this.r6 = (this.q6 * this. v6)) + (this.r7 = (this.q7 * this. v7)) + (this.r8 = (this.q8 * this. v8));
  }
  constructor() { }

  ngOnInit() {
  }

}
