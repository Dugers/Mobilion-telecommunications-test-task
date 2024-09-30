# What is here?

Here is a chat for two users. There isn't server part.
Were user:

- [VueJS](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia (State Manager)](https://pinia.vuejs.org/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

# Approach

Base concept:

![Base concept]("https://github.com/antirek/vue-chat-test-task/raw/main/images/screenshot.jpg")

## Storage

### Users

1. Let's create a user type (based on concept only name required) (which can then simply be expanded) and create a storage for it
2. We will identify users by ID, create a simple counter (imitation of issuing indexes in the database) 

### Messages

1. Let's create a message type (based on the concept, only text is required) (which can then simply be expanded) and create a storage for it
2. We will identify messages by two user IDs receiver and sender
3. We will store messages in a hash table for quick delivery (the user key with the lowest ID comes first)

## Components

- **App** — contains ChatComponents, creates users and handle errors
- **ChatComponent** — contains three components (based on concept) and :
  - **ChatHeader** — contains the name of the interlocutor (recipient)
  - **ChatMessages** — contains messages
  - **ChatUI** — ontains UI for creating new messages

# Opportunities for expansion

- Add theme switching (add class `.dark` and value for dark variables)
- Add nicer font sizes
- Add a picture to the user
- Add reactions to messages
- ...
- Connect to the backend
- ...
