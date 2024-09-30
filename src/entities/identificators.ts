export class Counter {
  private _count: number

  constructor() {
    this._count = 0
  }

  get count(): number {
    return ++this._count
  }
}
