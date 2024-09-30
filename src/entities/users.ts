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

export class UsersContainer {
  private _counter: Counter
  private _container: {
    [key: UserId]: User
  }

  constructor() {
    this._container = {}
    this._counter = new Counter()
  }

  add(user: User): UserId {
    const id: UserId = this._counter.count
    this._container[id] = user
    return id
  }

  get(id: UserId): User {
    return this._container[id]
  }
}
