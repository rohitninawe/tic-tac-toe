import React, { PureComponent } from 'react'
import { setTimeout } from 'timers'
import firebase from '../components/Firebase';

export default class TicTacToe extends PureComponent {
  constructor(props) {
    super(props)

    // this.ref = firebase.firestore().collection('users');
    // this.unsubscribe = null;

    this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      finalmsg: '',
      p1: '',
      p2: '',
      won: false,
      music: false,
      audio: true,
      usersFromFB: []
    }

    this.playAudio = (val) => {
      if (this.state.audio) {
        switch (val) {
          case 'x':
            this.x.play();
            break;
          case 'o':
            this.o.play();
            break;
          case 'win':
            this.win.play();
            break;
          case 'gover':
            this.gover.play();
            break;
          default:
            console.log('no sound');
            break;
        }
      }
    }
  }

  componentDidMount() {

    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);


    console.log(firebase.database(), ' fdfd');

    setTimeout(() => {
      this.setState({
        msg: 'none',
        player: 'block',
      })
    }, 2000)
  }


  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { userName } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        userName
      });
    });
    this.setState({
      usersFromFB
    });
  }

  endGame = () => {

    document.getElementById('u1').innerHTML = '';
    document.getElementById('u2').innerHTML = '';
    document.getElementById('u3').innerHTML = '';
    document.getElementById('m1').innerHTML = '';
    document.getElementById('m2').innerHTML = '';
    document.getElementById('m3').innerHTML = '';
    document.getElementById('l1').innerHTML = '';
    document.getElementById('l2').innerHTML = '';
    document.getElementById('l3').innerHTML = '';

    this.setState({
      tictoc: true,
      msg: 'none',
      player: 'block',
      mainbox: 'none',
      p1: '',
      p2: '',
      won: false,
      dev: false,
      finalmsg: '',
    })
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000)
            )
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
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
              won: true,
              finalmsg: 'x'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 4000))
          }
        }
      }
    }


    if (this.state.won == false) {
      if ((u1 != '') && (u2 != '') && (u3 != '') && (m1 != '') && (m2 != '') && (m3 != '') && (l1 != '') && (l2 != '') && (l3 != '')) {

        (document.getElementById('u1').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('u2').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('u3').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('l1').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('l2').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('l3').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('m1').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('m2').className = (cls + ' text-flicker-out-glow'));
        (document.getElementById('m3').className = (cls + ' text-flicker-out-glow'));

        this.setState({
          won: false,
          finalmsg: 'g'
        }, () => {
          this.playAudio('gover')

          setTimeout(() => this.endGame(), 4000)
        })

      }
    }

  }

  p1nm = (e) => {
    var val = (e.target.value).trim();
    this.setState({
      p1: val
    })
  }

  p2nm = (e) => {
    var val = (e.target.value).trim();
    this.setState({
      p2: val
    })
  }

  startGame = () => {
    this.setState({
      player: 'none',
      mainbox: 'block',
    })
  }

  handleMusic = () => {
    this.setState({
      music: !this.state.music
    }, () => {
      if (this.state.music) {
        this.start.play();
      }
      else if (!this.state.music) {
        this.start.pause();
      }
    })
  }


  render() {
    if (this.state.won == true) {
      this.playAudio('win')
    }
    console.log(this.state.usersFromFB)
    console.log(firebase.database(), ' fdfd');

    return (
      <div id='main' className='body'>
        {this.state.music == true &&
          <img title='Turn Off Music' className='onMusic' onClick={this.handleMusic} src='data:image/png;base64,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' />
        }
        {this.state.music == false &&
          <img title='Turn On Music' className='offMusic' onClick={this.handleMusic} src='data:image/png;base64,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' />
        }
        {this.state.audio == true &&
          <img className='onSound' onClick={() => this.setState({ audio: false })} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9ZqRq5OS9IqXUWphKGZHWxesl8-bZeImID4Oju-EK5YzfmzX&s' />
        }
        {this.state.audio == false &&
          <img className='offSound' onClick={() => this.setState({ audio: true })} src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/mute-icon-18-256.png' />
        }
        <span className='msg'>Welcome to Tic-Toc-Toe</span>
        <span className='footerDev'>Developed By Rohit Ninawe</span>
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
        <audio ref={(gover) => { this.gover = gover; }}>
          <source src="http://sprott.physics.wisc.edu/wop/sounds/SOUND42.WAV" type="audio/wav" >
          </source>
        </audio>
        <audio loop={true} ref={(start) => { this.start = start; }}>
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
          <div className='finalMsg'>
            {this.state.won == true ?
              (this.state.finalmsg == 'x'
                ?
                (this.state.p1 == '' ? <span>Player 1 won</span> : <span>{this.state.p1 + ' won'}</span>)
                :
                (this.state.finalmsg == 'o' ?
                  (this.state.p2 == '' ? <span>Player 2 won</span> : <span> {this.state.p2 + ' won'} </span>)
                  : null))
              : (this.state.finalmsg == 'g' && <span>Game Over</span>)

            }
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

        <div className='playerDetails'>
          <div className='playerNames'>
            <input className='ply1'
              placeholder='Player 1'
              value={this.state.p1}
              onChange={this.p1nm}
              maxLength="10" />

            <input className='ply1'
              placeholder='Player 2'
              value={this.state.p2}
              onChange={this.p2nm}
              maxLength="10" />

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
              .onMusic{
                position: absolute;
                top: 50px;
                right: 40px;
                height: 40px;
                cursor: pointer;
              }
              .onSound{
                position: absolute;
                top: 100px;
                right: 40px;
                height: 40px;
                cursor: pointer;
              }
              .finalMsg{
                display: flex;
                justify-content: center;
                font-size: x-large;
                height: 100px;
              }
              .offMusic{
                position: absolute;
                top: 35px;
                right: 20px;
                height: 70px;
                cursor: pointer;
              }
              .offSound{
                position: absolute;
                top: 98px;
                right: 26px;
                height: 43px;
                cursor: pointer;
              }
              .footerDev{
                position: absolute;
                bottom: 20px;
                font-size: medium;
              }
              .music{
                color: white; 
              }
              .gameDisplay{
                height: 100px;
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
              .text-flicker-out-glow {
                -webkit-animation: text-flicker-out-glow 0.2s linear 20 both;
                        animation: text-flicker-out-glow 0.2s linear 20 both;
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
                position: relative;
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
               backface-visibility: visible;
               animation-name: flip;
                // animation-name: spin;
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
              @-webkit-keyframes text-flicker-out-glow {
                0% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                13.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                14% {
                  opacity: 0;
                  text-shadow: none;
                }
                14.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                15% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                22.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                23% {
                  opacity: 0;
                  text-shadow: none;
                }
                24.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                25% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                34.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                35% {
                  opacity: 0;
                  text-shadow: none;
                }
                39.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                40% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
                }
                42.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
                }
                43% {
                  opacity: 0;
                  text-shadow: none;
                }
                44.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                45% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                50% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                54.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                55% {
                  opacity: 0;
                  text-shadow: none;
                }
                69.4% {
                  opacity: 0;
                  text-shadow: none;
                }
                69.5% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                69.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                70% {
                  opacity: 0;
                  text-shadow: none;
                }
                79.4% {
                  opacity: 0;
                  text-shadow: none;
                }
                79.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
                }
                80% {
                  opacity: 0;
                  text-shadow: none;
                }
                89.8% {
                  opacity: 0;
                  text-shadow: none;
                }
                89.9% {
                  opacity: 1;
                  text-shadow: none;
                }
                90% {
                  opacity: 0;
                  text-shadow: none;
                }
                100% {
                  opacity: 0;
                }
              }
              @keyframes text-flicker-out-glow {
                0% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                13.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                14% {
                  opacity: 0;
                  text-shadow: none;
                }
                14.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                15% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                22.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                23% {
                  opacity: 0;
                  text-shadow: none;
                }
                24.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                25% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                34.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
                }
                35% {
                  opacity: 0;
                  text-shadow: none;
                }
                39.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                40% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
                }
                42.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
                }
                43% {
                  opacity: 0;
                  text-shadow: none;
                }
                44.9% {
                  opacity: 0;
                  text-shadow: none;
                }
                45% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                50% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                54.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                55% {
                  opacity: 0;
                  text-shadow: none;
                }
                69.4% {
                  opacity: 0;
                  text-shadow: none;
                }
                69.5% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                69.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
                }
                70% {
                  opacity: 0;
                  text-shadow: none;
                }
                79.4% {
                  opacity: 0;
                  text-shadow: none;
                }
                79.9% {
                  opacity: 1;
                  text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
                }
                80% {
                  opacity: 0;
                  text-shadow: none;
                }
                89.8% {
                  opacity: 0;
                  text-shadow: none;
                }
                89.9% {
                  opacity: 1;
                  text-shadow: none;
                }
                90% {
                  opacity: 0;
                  text-shadow: none;
                }
                100% {
                  opacity: 0;
                }
              }
              
              @keyframes flip {
                from {
                  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
                  animation-timing-function: ease-out;
                }
              
                40% {
                  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
                    rotate3d(0, 1, 0, -190deg);
                  animation-timing-function: ease-out;
                }
              
                50% {
                  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
                    rotate3d(0, 1, 0, -170deg);
                  animation-timing-function: ease-in;
                }
              
                80% {
                  transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
                    rotate3d(0, 1, 0, 0deg);
                  animation-timing-function: ease-in;
                }
              
                to {
                  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
                  animation-timing-function: ease-in;
                }
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
              
              .footerDev{
                position: absolute;
                bottom: 20px;
                font-size: x-small;
              }
              
              .onMusic{
                position: absolute;
                top: 29px;
                cursor: pointer;
                right: 28px;
                height: 25px;
              }
              
              .onSound{
                position: absolute;
                top: 61px;
                cursor: pointer;
                right: 27px;
                height: 25px;
              }
              
              .offMusic{
                position: absolute;
                top: 15px;
                cursor: pointer;
                right: 13px;
                height: 47px;
              }

              .offSound{
                position: absolute;
                top: 61px;
                cursor: pointer;
                right: 23px;
                height: 29px;
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
                height: 80px;
              }
              
              .finalMsg{
                display: flex;
                justify-content: center;
                font-size: x-large;
                height: 70px;
                font-size: medium;
              }
               
              .box{
                height: 280px;
                width: 280px;
                cursor: pointer;
                backface-visibility: visible;
                animation-name: flip;
                //  animation-name: spin;
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