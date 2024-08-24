# Chat App (Redux)

A chat app simulator similar to whats app(web version), buld with react and redux. It has the left nav to show the contacts. Right side view will show the chat window. Can add contacts and send messages(just a simulation).

[Live app](https://chat-app-fawn-seven.vercel.app/)

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Interface:

  - Contacts Nav: A side nav is shown with previous and current contacts.
  - Search Box: Search box is used to filter the available contacts by name.
  - Add Contacts: Above the search box, there is a plus icon. By clicking it it will open a pop-up with new contacts. You can click any of the contacts to add them in your chat.
  - Chat Window: By clicking on any contact from the left side nav, you can open the chat window at thr right side. It will display the previous messages if any. You can send a message by using the input at the bottom of this chat window. Each message included with the timestamp of the message.
  - Group Chat: Couple of group chats are included. When opened, in the header you can see the members names. Each conversation has the sender's name and avatar.

- State Management:

  - Global State: Redux-toolkit is used to manage global states such as contacts and conversations, ensuring that state changes are efficiently handled across the app.

## Folder Structure

    chat-app/
    ├── node_modules/
    ├── public/
    | ├── favicon.ico
    | ├── logo192.png
    | ├── logo512.png
    | ├── manifest.json
    │ └── robots.txt
    ├── src/
    │ ├── components/
    │ │ ├── Contact/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── ContactList/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── LeftSideBar/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── MessageCard/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── MessageInput/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── NewContacts/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── NewContactTile/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── RightContainer/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ └── SearchBox/
    │ │   ├── index.jsx
    │ │   └── index.module.css
    │ ├── pages/
    │ │ ├── Chat/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ ├── ErrorPage/
    │ │ │ ├── index.jsx
    │ │ │ └── index.module.css
    │ │ └── Home/
    │ │   ├── index.jsx
    │ │   └── index.module.css
    │ ├── redux/
    │ │ ├── reducers/
    │ │ │ └── chatSlice.js
    │ │ │ └── dummyJson.json
    │ │ │ └── newContacts.json
    │ │ └── store.js
    │ ├── App.css
    │ ├── App.jsx
    │ ├── index.css
    │ └── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kirankumar-Matham96/chat-app.git

   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the app: ([see React Docs for more scripts](#react-readme-file))

```bash
  npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- ReactJS
- react-dom
- react-router-dom
- react-scripts
- react-redux
- redux-toolkit
- react-icons

## React Reference

- [ReadMe.md](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
