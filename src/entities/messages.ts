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

export class MessagesContainer {
  private _messages_from_users: {
    [key: UserId]: {
      [key: UserId]: Message[]
    }
  }

  constructor() {
    this._messages_from_users = {}
  }

  get(firstMemberId: UserId, secondMemberId: UserId): Message[] {
    if (firstMemberId < secondMemberId) {
      ;[firstMemberId, secondMemberId] = [secondMemberId, firstMemberId]
    }

    return this._messages_from_users[firstMemberId]
      ? this._messages_from_users[firstMemberId][secondMemberId]
      : []
  }

  add(message: Message) {
    const firstMemberId = message.receiver > message.sender ? message.receiver : message.sender
    const secondMemberId = message.receiver < message.sender ? message.receiver : message.sender

    if (!this._messages_from_users[firstMemberId]) {
      this._messages_from_users[firstMemberId] = {}
    }
    if (!this._messages_from_users[firstMemberId][secondMemberId]) {
      this._messages_from_users[firstMemberId][secondMemberId] = []
    }

    this._messages_from_users[firstMemberId][secondMemberId].push(message)
  }
}
