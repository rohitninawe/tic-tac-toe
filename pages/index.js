
import React, { PureComponent } from 'react'
import { setTimeout } from 'timers'

export default class _app extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      p1: '',
      p2: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'none',
        player: 'block',
      })
    }, 2000)
  }


  setKey = (e) => {
    var id = e.target.id;
    var val;
    if (document.getElementById(id).innerHTML === '') {
      this.setState({
        tictoc: !this.state.tictoc
      })
      if (this.state.tictoc == true) {
        val = 'X'
      }
      else {
        val = 'O'
      }
      (document.getElementById(id).innerHTML = val)
    }
    console.log(document.getElementById(id).innerHTML)
    console.log(val)
    this.callWinner()
  }

  callWinner = () => {
    var div = document.getElementById
    var u1 = document.getElementById('u1').innerHTML;
    var u2 = document.getElementById('u2').innerHTML;
    var u3 = document.getElementById('u3').innerHTML;
    var m1 = document.getElementById('m1').innerHTML;
    var m2 = document.getElementById('m2').innerHTML;
    var m3 = document.getElementById('m3').innerHTML;
    var l1 = document.getElementById('l1').innerHTML;
    var l2 = document.getElementById('l2').innerHTML;
    var l3 = document.getElementById('l3').innerHTML;
    if ((u1 != '') && (u2 != '') && (u3 != '') ) {
      if ((u1 === u2) && (u1 == u3)) {
        if (u1 == 'X') {
          alert('Player 1 won')
        }
        else alert('Player 2 won')
      }
    }
  }

  p1nm = (e) => {
    this.setState({
      p1: e.target.value
    })
  }

  p2nm = (e) => {
    this.setState({
      p2: e.target.value
    })
  }

  startGame = () => {
    this.setState({
      player: 'none',
      mainbox: 'block',
    })
  }

  render() {
    return (
      <div id='main' className='body'>
        <span className='msg'>Welcome to Tic-Toc-Toe</span>
        <div className='mainBox'>
          <div className='gameDisplay'>
            <div className='plHeading'>
              <span>Player 1</span>
              <span>Player 2</span>
            </div>
            <div className='plName'>
              <span style={{ marginLeft: '10px' }}> {this.state.p1} </span>
              <span style={{ marginRight: '10px' }}> {this.state.p2} </span>
            </div>
          </div>
          <div className='box'>
            <div className='rowBox'>
              <div
                id='u1' className='lu sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='u2' className=' sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='u3' className='ru sepBox'
                onClick={(e) => this.setKey(e)}></div>
            </div>
            <div className='rowBox'>
              <div
                id='m1' className=' sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='m2' className='m sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='m3' className='sepBox'
                onClick={(e) => this.setKey(e)}></div>
            </div>
            <div className='rowBox'>
              <div
                id='l1' className='ll sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='l2' className=' sepBox'
                onClick={(e) => this.setKey(e)}></div>
              <div
                id='l3' className='rl sepBox'
                onClick={(e) => this.setKey(e)}></div>
            </div>
          </div>

        </div>
        <div className='playerDetails'>
          <div className='playerNames'>
            <input className='ply1'
              placeholder='Player 1'
              onChange={this.p1nm} />
            <input className='ply1'
              placeholder='Player 2'
              onChange={this.p2nm} />
          </div>
          <button className='enterBtn' onClick={this.startGame}>ENTER</button>
        </div>
        <style jsx>
          {`
              .ply1{
                width: 41%;
                font-size: 1.6em;
                height: 70px;
                border-radius: 40px;
                font-weight: 700;
                padding-left: 40px;
                outline: none;
                font-family: cursive;
              }
              .gameDisplay{
                margin-bottom: 160px;
                margin-top: -150px;
              }
              span {
                color: white;
              }
              .plHeading{
                display: flex;
                justify-content: space-between;
                font-family: cursive;
                font-weight: 700;
                font-size: 1.6em;
              }
              .plName{
                display: flex;
                justify-content: space-between;
                font-family: cursive;
                font-weight: 700;
                font-size: 1.6em;
              }
              .playerDetails{
                display: ${this.state.player};
              }
              .playerNames{
                width: 100%;
                display: flex;
                justify-content: space-between;
              }
              .body {
                background-color: black;
                width: 100vh;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .enterBtn{
                margin-left: 304px;
                margin-top: 40px;
                height: 50px;
                background-color: aqua;
                border-radius: 8px;
                outline: none;
                width: 175px;
                padding: 4px;
                font-size: 1.1em;
                font-family: cursive;
              }
              .mainBox {
                display: ${this.state.mainbox};
                }
              .box{
                height: 600px;
                width: 600px;
                cursor: pointer;
                animation-name: spin;
                animation-duration: 1000ms;
                animation-iteration-count: 1;
                animation-timing-function: linear;
              }
              .lu{
                border-color: white;
                border-style: solid;
                border-width: 0px 1px 1px 0px;
              }
              .msg{
                display: ${this.state.msg};
                color: white;
                font-size: 4em;
              }
              .ru{
                border-color: white;
                border-style: solid;
                border-width: 0px 0px 1px 1px;
              }
              .m{
                border-color: white;
                border-style: solid;
                border-width: 1px;
              }
              .ll{
                border-color: white;
                border-style: solid;
                border-width: 1px 1px 0px 0px;
              }
              .rl{
                border-color: white;
                border-style: solid;
                border-width: 1px 0px 0px 1px;
              }
              .rowBox{
                height: 33.33%;
                display: flex;
              }
              .sepBox{
                width: 33.33%;
                display: flex;
                color: white;
                justify-content: center;
                align-items: center;
                font-size: 12em;
              }              
              @keyframes spin {
                  from {
                      transform:rotate(0deg);
                  }
                  to {
                      transform:rotate(360deg);
                  }
              }
          `}
        </style>
      </div>
    )
  }
}
