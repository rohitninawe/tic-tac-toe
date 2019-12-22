
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
    this.playAudio = (val) => {
      switch (val) {
        case 'x':
          this.x.play();
          break;
        case 'o':
          this.o.play();
          break;
        case 'start':
          this.start.play();
          break;
        case 'win':
          this.win.play();
          break;
        default:
          console.log('no sound');
          break;
      }
    }
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        msg: 'none',
        player: 'block',
      })
    }, 2000)
    this.playAudio('start')
  }

  endGame = () => {
    this.setState({
      mainbox: 'none',
      dev: true
    }, () => setTimeout(() => location.reload(), 3500))
  }

  setKey = (e) => {
    var id = e.target.id;
    var cls = e.target.className;
    var val;
    if (this.state.won == false) {
      if (document.getElementById(id).innerHTML === '') {
        this.setState({
          tictoc: !this.state.tictoc
        })
        if (this.state.tictoc == true) {
          val = 'X'
          this.playAudio('x')
        }
        else {
          val = 'O'
          this.playAudio('o')
        }
        ((document.getElementById(id).innerHTML = val) && (document.getElementById(id).style.textShadow = (val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2')))
        setTimeout(() => {
          this.callWinner(cls)
        }, 500
        )
      }
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

    if (this.state.won == false) {
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
    }

    if (this.state.won == false) {
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
    }

    if (this.state.won == false) {
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
    }


    if (this.state.won == false) {
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
    }


    if (this.state.won == false) {
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
    }


    if (this.state.won == false) {
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
    }

    if (this.state.won == false) {
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
    }

    if (this.state.won == false) {
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
    }


    if (this.state.won == false) {
      if ((u1 != '') && (u2 != '') && (u3 != '') && (m1 != '') && (m2 != '') && (m3 != '') && (l1 != '') && (l2 != '') && (l3 != '')) {
        this.setState({
          won: false
        }, () => {
          this.state.won == false && alert('Game Over!');
          setTimeout(() => this.endGame(), 4000)
        })

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
    if(this.state.won == true){
      this.playAudio('win')
    }
    return (
      <div id='main' className='body'>
        <span className='msg'>Welcome to Tic-Toc-Toe</span>
        <audio ref={(x) => { this.x = x; }}>
          <source src="http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV" type="audio/wav" >
          </source>
        </audio>
        <audio ref={(o) => { this.o = o; }}>
          <source src="http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav" type="audio/wav" >
          </source>
        </audio>
        <audio ref={(win) => { this.win = win; }}>
          <source src="http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav" type="audio/wav" >
          </source>
        </audio>
        <audio loop={true} autoPlay={true} ref={(start) => { this.start = start; }}>
          <source src="http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav" type="audio/wav" >
          </source>
        </audio>
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
          <div className='devMsg'>
            <span className='TYMsg'>Thank You For Playing</span>
            <span className='devName'>Developed by Rohit Ninawe!</span>
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
          <div className='enterBtnDiv'>
            <button className='enterBtn' onClick={this.startGame}>ENTER</button>
          </div>
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
                font-size: 1em;
              }
              .playerDetails{
                display: ${this.state.player};
              }
              .enterBtnDiv{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 200px;
              }
              .playerNames{
                width: 100%;
                display: flex;
                justify-content: space-between;
              }
              .body {
                // background-image: url("https://im7.ezgif.com/tmp/ezgif-7-130bf0b8c769.gif");
                // background-size:     cover;                      /* <------ */
                // background-repeat:   no-repeat;
                // background-position: center center;
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
                -webkit-user-select:none; 
                -webkit-touch-callout:none; 
                -moz-user-select:none; 
                -ms-user-select:none; 
                user-select:none;
              }
              //text-shadow: 6px 6px 21px #d2d282;  for X
              //text-shadow: 6px 6px 21px #92bae2;  for O
              .enterBtn{
                height: 50px;
                background-color: aqua;
                border-radius: 8px;
                outline: none;
                width: 175px;
                padding: 4px;
                font-size: 1.1em;
                font-family: cursive;
              }
              .devMsg{
                display: flex;
                flex-direction: column;
                width: 500px;
                height: 200px;
                justify-content: space-around;
                align-items: center;
              }
              .TYMsg{
                color: white;
                font-size: 3em;
              }
              .devName{
                color: white;
                font-size: 2em;
              }
              .mainBox {
                display: ${this.state.mainbox};
                }
              .box{
                height: 400px;
                width: 450px;
                cursor: pointer;
                animation-name: spin;
                animation-duration: 1000ms;
                animation-iteration-count: 1;
                animation-timing-function: linear;
                -webkit-tap-highlight-color: transparent;
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
                font-size: 7em;
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
              @media screen and (max-width: 479px) {
               
              .msg{
                display: ${this.state.msg};
                color: white;
                font-size: 1.5em;
                margin-bottom: 100px;
              }

              .playerDetails{
                display: ${this.state.player};
                width: 280px;
                height: 180px;
              }

              .ply1{
                width: 35%;
                font-size: 0.75em;
                height: 40px;
                border-radius: 40px;
                font-weight: 700;
                padding-left: 30px;
                outline: none;
                font-family: cursive;
              }

              .enterBtnDiv{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 90px;
              }

              .enterBtn{
                height: 30px;
                background-color: aqua;
                border-radius: 8px;
                outline: none;
                width: 100px;
                padding: 4px;
                font-size: 0.75em;
                font-family: cursive;
              }
              
              .gameDisplay{
                margin-bottom: 140px;
                margin-top: 0px;
              }
               
              .box{
                height: 280px;
                width: 280px;
                cursor: pointer;
                animation-name: spin;
                animation-duration: 1000ms;
                animation-iteration-count: 1;
                animation-timing-function: linear;
                -webkit-tap-highlight-color: transparent;
              } 
              
              .plHeading{
                display: flex;
                justify-content: space-between;
                font-family: cursive;
                font-weight: 600;
                font-size: 1.2em;
              }
              
              .devMsg{
                display: flex;
                flex-direction: column;
                width: 250px;
                height: 100px;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 75px;
              }
              .TYMsg{
                color: white;
                font-size: 1.2em;
              }
              .devName{
                color: white;
                font-size: 0.8em;
              }
              
              .plName{
                display: flex;
                justify-content: space-between;
                font-family: cursive;
                font-weight: 500;
                font-size: 1em;
              }

              .sepBox{
                width: 33.33%;
                display: flex;
                color: white;
                justify-content: center;
                align-items: center;
                font-size: 5em;
              } 
                }
          `}
        </style>
      </div>
    )
  }
}
