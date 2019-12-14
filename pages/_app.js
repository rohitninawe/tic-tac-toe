
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
      won: false,
      dev: false,
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

  endGame = () => {
    this.setState({
      mainbox: 'none',
      dev: true
    }, () => setTimeout(() => location.reload(), 3500))
  }

  resetValues = () => {
    location.reload()
  }

  setKey = (e) => {
    var id = e.target.id;
    var cls = e.target.className;
    var val;
    // document.getElementById(id).cl
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
      ((document.getElementById(id).innerHTML = val) && (document.getElementById(id).style.textShadow = (val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2')))
      setTimeout(() => {
        this.callWinner(cls)
      }, 500
      )
    }
    console.log(document.getElementById(id).innerHTML)
    console.log(val)
    // this.callWinner()
  }

  callWinner = (cls) => {
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

    if ((u1 != '') && (u2 != '') && (u3 != '')) {
      if ((u1 === u2) && (u1 == u3)) {

        (document.getElementById('u1').className = (cls + ' spinner'));
        (document.getElementById('u2').className = (cls + ' spinner'));
        (document.getElementById('u3').className = (cls + ' spinner'));

        if (u1 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }

    if ((m1 != '') && (m2 != '') && (m3 != '')) {
      if ((m1 == m2) && (m1 == m3)) {

        (document.getElementById('m1').className = (cls + ' spinner'));
        (document.getElementById('m2').className = (cls + ' spinner'));
        (document.getElementById('m3').className = (cls + ' spinner'));

        if (m1 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }

    if ((l1 != '') && (l2 != '') && (l3 != '')) {
      if ((l1 == l2) && (l1 == l3)) {

        (document.getElementById('l1').className = (cls + ' spinner'));
        (document.getElementById('l2').className = (cls + ' spinner'));
        (document.getElementById('l3').className = (cls + ' spinner'));

        if (l1 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }


    if ((u1 != '') && (m1 != '') && (l1 != '')) {
      if ((u1 == l1) && (u1 == m1)) {

        (document.getElementById('u1').className = (cls + ' spinner'));
        (document.getElementById('l1').className = (cls + ' spinner'));
        (document.getElementById('m1').className = (cls + ' spinner'));

        if (u1 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }


    if ((u2 != '') && (m2 != '') && (l2 != '')) {
      if ((u2 == m2) && (u2 == l2)) {

        (document.getElementById('u2').className = (cls + ' spinner'));
        (document.getElementById('m2').className = (cls + ' spinner'));
        (document.getElementById('l2').className = (cls + ' spinner'));

        if (u2 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }


    if ((u3 != '') && (l3 != '') && (m3 != '')) {
      if ((u3 == m3) && (u3 == l3)) {

        (document.getElementById('u3').className = (cls + ' spinner'));
        (document.getElementById('m3').className = (cls + ' spinner'));
        (document.getElementById('l3').className = (cls + ' spinner'));

        if (u3 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }

    if ((u1 != '') && (m2 != '') && (l3 != '')) {
      if ((u1 == m2) && (u1 == l3)) {

        (document.getElementById('u1').className = (cls + ' spinner'));
        (document.getElementById('m2').className = (cls + ' spinner'));
        (document.getElementById('l3').className = (cls + ' spinner'));

        if (u1 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }

    if ((u3 != '') && (m2 != '') && (l1 != '')) {
      if ((u3 == m2) && (u3 == l1)) {

        (document.getElementById('u3').className = (cls + ' spinner'));
        (document.getElementById('m2').className = (cls + ' spinner'));
        (document.getElementById('l1').className = (cls + ' spinner'));

        if (u3 == 'X') {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')
        }
        else {
          this.setState({
            won: true
          }, () => setTimeout(() => this.endGame(), 6000))
          alert(this.state.p2 != '' ? this.state.p2 + ' won' : 'Player 2 won')
        }
      }
    }

    if ((u1 != '') && (u2 != '') && (u3 != '') && (m1 != '') && (m2 != '') && (m3 != '') && (l1 != '') && (l2 != '') && (l3 != '')) {
      this.state.won == false && alert('Game Over!')
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

  playAudio(url) {
    var a = new Audio(url);
    a.play();
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
              <div className='lu sepBox'>
                <span className='XOSpan' onClick={(e) => this.setKey(e)} id='u1' ></span>
              </div>
              <div className=' sepBox'>
                <span className='XOSpan' onClick={(e) => this.setKey(e)} id='u2' ></span>
              </div>
              <div className='ru sepBox'>
                <span className='XOSpan' onClick={(e) => this.setKey(e)} id='u3' ></span>
              </div>
            </div>

            <div className='rowBox'>
              <div className=' sepBox'>
                <span id='m1' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
              <div className='m sepBox'>
                <span id='m2' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
              <div className='sepBox'>
                <span id='m3' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
            </div>
            <div className='rowBox'>
              <div className='ll sepBox'>
                <span id='l1' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
              <div className=' sepBox'>
                <span id='l2' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
              <div className='rl sepBox'>
                <span id='l3' className='XOSpan' onClick={(e) => this.setKey(e)}></span>
              </div>
            </div>
          </div>
        </div>

        {this.state.dev == true &&
          <div>
            <h1>Thank You For Playing</h1>
            <h3>Developed by Rohit Ninawe!</h3>
          </div>
        }

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
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .XOSpan{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
              }
              //text-shadow: 6px 6px 21px #d2d282;  for X
              //text-shadow: 6px 6px 21px #92bae2;  for O
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
              h1{
                color: white;
              }
              h3{
                color: white;
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
              .spinner{
                animation-name: spinner;
                animation-duration: 1500ms;
                animation-iteration-count: infinite;
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
              @keyframes spinner {
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
