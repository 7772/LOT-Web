import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

// import _ from 'lodash';

class Requestion extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    // ws.on('message', function incoming(data) {
    //   console.log(data);
    // });
    // this.callApi()
    //   .then(res => console.log('res', res))
    //   .catch(err => console.log(err));

    // var ws = new WebSocket('ws://localhost:8080');
    // console.log('location', location);
    var ws = new WebSocket('ws://172.30.1.13:8080?shopId=1234');
    
    ws.onopen = () => {
        console.log('websocket is connected ...')
        // ws.send('connected')
    }

    ws.onmessage = event => {
        console.log('event.data', typeof event.data, event.data);
        // alert(event.data);
        try {
          const data = JSON.parse(event.data);
          console.log('data', typeof data, data);
          // const newData = JSON.parse(data);
          // console.log('newData', typeof newData, newData);
          // const parseData = JSON.parse(newData);

          // let newDataArr = [];
          // newDataArr.push(newData);
          // console.log('newDataArr', typeof newDataArr, newDataArr);


          this.setState({
            messages: [data].concat(this.state.messages),
          });

        } catch (error) {
          console.log('Error!', error);
        }
    }
  }

  render() {

    const userInfo = this.props.userInfo;

    let messages = this.state.messages;

    console.log('userInfo', userInfo);
    console.log('userInfo.token', userInfo.token);
    console.log('userInfo.name', userInfo.name);
    console.log('userInfo.id', userInfo.id);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{userInfo.name} 님 안녕하세요.</h1>
          <h1 className="App-title">페이스북 공유 완료 리스트 입니다.</h1>
        </header>
 
        {
          messages.map((val,key) => {
            console.log('val', val);
            return <p key={key} style={{margin: 10}}>{val.userName} 님이 {val.tableNum}번 테이블 에서 방금 페이스북 공유를 완료했습니다. </p>
          })
        }
        
      </div>
    );
  }
}

export default Requestion;
