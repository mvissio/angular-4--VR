export class Empleado{
  private _nombre: string;
  private _edad: number;
  private _cargo: string;
  private _contrato: boolean;

  constructor() {
  }

  setConstructor(nombre: string, edad: number, cargo: string, contrato: boolean) {
    this._nombre = nombre;
    this._edad = edad;
    this._cargo = cargo;
    this._contrato = contrato;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(value: number) {
    this._edad = value;
  }

  get cargo(): string {
    return this._cargo;
  }

  set cargo(value: string) {
    this._cargo = value;
  }

  get contrato(): boolean {
    return this._contrato;
  }

  set contrato(value: boolean) {
    this._contrato = value;
  }
}
