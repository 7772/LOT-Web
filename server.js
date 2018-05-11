// Test Start

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 8080});

// events 모듈 사용
var events = require('events');

let param = {};

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// // EventHandler 함수 생성
// var connectHandler = function connected(){
//     // data_recevied 이벤트를 발생시키기
//     eventEmitter.emit("data_received");
// }

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
// eventEmitter.on('connection', connectHandler);

// // data_received 이벤트와 익명 함수와 연동
// // 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
// eventEmitter.on('data_received', function(){
//     console.log("Data Received 1");
// });

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
    param = message;

    // connection 이벤트 발생시키기
    eventEmitter.emit('data_received');
  })

  eventEmitter.on('data_received', function(){
    console.log("Data Received 2");
    ws.send(JSON.stringify({param}));
  });

  // console.log('param type', typeof param);

  // if(typeof param !== 'object') {
  //   console.log('Not Object');
  //   ws.send(JSON.stringify({param}));
  // }

  // setInterval(
  //   () => ws.send(JSON.stringify({param})),
  //   1000
  // )
})

