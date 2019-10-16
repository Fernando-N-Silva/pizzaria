import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {
  private info: string;
  private info2: number;
  private info3: number;

  constructor() { }

  public setInfo(i: any): void {
    this.info = i;
  }

  public getInfo(): any {
    return this.info;
  }
  public setInfo2(i2: any): void {
    this.info2 = i2;
  }

  public getInfo2(): any {
    return this.info2;
  }
  public setInfo3(i3: any): void {
    this.info3 = i3;
  }

  public getInfo3(): any {
    return this.info3;
  }
}
