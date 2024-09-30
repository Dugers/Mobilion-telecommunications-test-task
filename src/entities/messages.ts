import type { UserId } from './users'

export class Message {
  private _sender: UserId
  private _receiver: UserId
  private _text: string

  constructor(sender: UserId, receiver: UserId, text: string) {
    this._sender = sender
    this._receiver = receiver
    this._text = text.trim()
    this.validate()
  }

  protected validate() {
    this.validateText()
  }
  protected validateText() {
    if (this._text.length == 0) {
      throw new Error("A message can't be empty")
    }
    if (this._text.length > 2048) {
      throw new Error('Message is too long')
    }
  }

  get sender(): UserId {
    return this._sender
  }

  get receiver(): UserId {
    return this._receiver
  }

  get text(): string {
    return this._text
  }
}
