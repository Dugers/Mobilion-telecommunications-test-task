import { Counter } from './identificators'

export class User {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }
}

export type UserId = number
