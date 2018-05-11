# LOT-Web
---

#### What is LOT ?
> LOT (Likes Of Today) is a smartphone application that allows you to automatically perform Facebook Likes & Share functions via QR Code scan.

#### If you want to know background knowledge

- [WebSocket/ws](https://github.com/websockets/ws)
- [React](https://reactjs.org/)
- [React to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

#### LOT Architectures 

*0. What you should know*

We divided LOT into LOT App and LOT-Web. 

- LOT App ?

>LOT App is native mobile app made of react native. LOT App's code has AWS account information. So This repository is private. If you want to see LOT App's code, then you just send an email(sbshz85@gmail.com). We will show you LOT App's code except for AWS account information.

- LOT-Web ?

>LOT-Web is web application made of react. LOT-Web will show information of Normal user's Facebook Share to Authenticated User.



*1. Project Architecture*

<img src="/assets/architecture-lot.png" width=450 height=350>

This picture above is total project architecture of LOT(Likes Of Today). What you should concern about is that this program should be a real-time connection.

*2. How to work LOT-Web with LOT App*

<img src="/assets/architecture-lot-web.png" width=500 height=350>

The picture you see above is How to work LOT-Web with LOT App. What we want is simple, Just sending some data from LOT App to LOT-Web. But LOT App and LOT-Web can't directly send data. So we should have WebSocket Server with different port number. LOT App(Client 1) will send or recieve some data and LOT-Web's work is same with LOT App. So We named Web Client Server with Client 2.

#### Contribution
- If you want to contribute LOT App 
Please send an email(sbshz85@gmail.com).

- If you want to contribute LOT-Web
Just PR!

