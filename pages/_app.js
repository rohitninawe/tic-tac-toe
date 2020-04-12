// http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2002.wav , http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2003.wav , robot sound (wav)



import React, { PureComponent } from 'react'
import { setTimeout } from 'timers'
import firebase from '../components/Firebase';




export default class TicTacToe extends PureComponent {
  constructor(props) {
    super(props)

    this.ref = firebase.firestore().collection('users');
    this.unsubscribe = null;

    this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      finalmsg: '',
      p1: '',
      p2: 'Computer',
      won: false,
      music: false,
      audio: true,
      usersFromFB: [],
      xScore: 0,
      yScore: 0,
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

    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

    setTimeout(() => {
      this.setState({
        msg: 'none',
        player: 'block',
      })
    }, 2000)
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    console.log(querySnapshot.size)
    // querySnapshot.forEach((doc) => {
    //   const { player1, player2, timeStamp, platform, browser } = doc.data();
    //   boards.push({
    //     key: doc.id,
    //     doc, // DocumentSnapshot
    //     player1, player2, timeStamp, platform, browser
    //   });
    // });
    // this.setState({
    //   usersFromFB: boards
    // }, () => console.log(this.state.usersFromFB));
    this.setState({
      usersFromFB: querySnapshot.size
    }, () => console.log(this.state.usersFromFB));
  }

  endGame = () => {

    let db = firebase.firestore();
    db.collection('users').add(
      {
        player1: this.state.p1,
        player2: this.state.p2,
        timeStamp: new Date(),
        platform: window.navigator.appVersion,
        browser: window.navigator.vendor,
        status: this.state.finalmsg == 'x' ? 'Player 1 Won' : this.state.finalmsg == 'o' ? 'Player 2 Won' : this.state.finalmsg == 'g' ? 'Game Over' : ''
      }
    );

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
      player: 'none', //block
      mainbox: 'none',  //none
      p1: '',
      p2: 'Computer',
      won: false,
      dev: false,
      // finalmsg: '',
      xScore: this.state.finalmsg == 'x' ? this.state.xScore + 1 : this.state.xScore,
      yScore: this.state.finalmsg == 'o' ? this.state.yScore + 1 : this.state.yScore,
    }, () => setTimeout(() => this.setState({ mainbox: 'block', finalmsg: '' }), 200))  //no callback on exit
  }

  setPlayers = () => {
    this.setState({
      player: 'block',
      mainbox: 'none',
      finalmsg: '',
      xScore: 0,
      yScore: 0,
      p1: '',
      p2: 'Computer',
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
        }, () => this.state.p2 == 'Computer' && setTimeout(() => this.botMove(cls), 650))

        if (this.state.tictoc) {
          val = 'X'
          this.playAudio('x')
        }
        else {
          val = 'O'
          this.playAudio('o')
        }

        document.getElementById(id).innerHTML = val;
        document.getElementById(id).style.textShadow = (val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2');

        setTimeout(() => {
          this.callWinner(cls)
        }, 500)
      }
    }
    console.log(document.getElementById(id).innerHTML)
    console.log(val)
  }

  randomNoFunc() {
    var c = Math.round(Math.random() * 10)
    return c == 0 ? c + 5 : c > 9 ? c - 5 : c
  }

  botMove = (cls) => {
    if (this.state.won == false) {
      console.log('bot played')
      var randomNo = this.randomNoFunc()
      console.log(randomNo)

      var u1 = document.getElementById('u1').innerHTML;
      var u2 = document.getElementById('u2').innerHTML;
      var u3 = document.getElementById('u3').innerHTML;
      var m1 = document.getElementById('m1').innerHTML;
      var m2 = document.getElementById('m2').innerHTML;
      var m3 = document.getElementById('m3').innerHTML;
      var l1 = document.getElementById('l1').innerHTML;
      var l2 = document.getElementById('l2').innerHTML;
      var l3 = document.getElementById('l3').innerHTML;

      if (!(this.state.tictoc) && (u1 == '' || u2 == '' || u3 == '')) {   //UH
        if ((u1 == 'O' && u2 == 'O') || (u2 == 'O' && u3 == 'O') || (u3 == 'O' && u1 == 'O')) {
          let id = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (m1 == '' || m2 == '' || m3 == '')) {    //MH
        if ((m1 == 'O' && m2 == 'O') || (m2 == 'O' && m3 == 'O') || (m3 == 'O' && m1 == 'O')) {
          let id = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (l1 == '' || l2 == '' || l3 == '')) {    //LH
        if ((l1 == 'O' && l2 == 'O') || (l2 == 'O' && l3 == 'O') || (l3 == 'O' && l1 == 'O')) {
          let id = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u1 == '' || m1 == '' || l1 == '')) {    //LV
        if ((u1 == 'O' && m1 == 'O') || (m1 == 'O' && l1 == 'O') || (l1 == 'O' && u1 == 'O')) {
          let id = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u2 == '' || m2 == '' || l2 == '')) {    //MV
        if ((u2 == 'O' && m2 == 'O') || (m2 == 'O' && l2 == 'O') || (l2 == 'O' && u2 == 'O')) {
          let id = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u3 == '' || m3 == '' || l3 == '')) {    //RV
        if ((u3 == 'O' && m3 == 'O') || (m3 == 'O' && l3 == 'O') || (l3 == 'O' && u3 == 'O')) {
          let id = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u1 == '' || m2 == '' || l3 == '')) {    //RD
        if ((u1 == 'O' && m2 == 'O') || (m2 == 'O' && l3 == 'O') || (l3 == 'O' && u1 == 'O')) {
          let id = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u3 == '' || m2 == '' || l1 == '')) {    //LD
        if ((u3 == 'O' && m2 == 'O') || (m2 == 'O' && l1 == 'O') || (l1 == 'O' && u3 == 'O')) {
          let id = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (u1 == '' || u2 == '' || u3 == '') {   //UH
        if ((u1 == 'X' && u2 == 'X') || (u2 == 'X' && u3 == 'X') || (u3 == 'X' && u1 == 'X')) {
          let id = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (m1 == '' || m2 == '' || m3 == '')) {    //MH
        if ((m1 == 'X' && m2 == 'X') || (m2 == 'X' && m3 == 'X') || (m3 == 'X' && m1 == 'X')) {
          let id = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (l1 == '' || l2 == '' || l3 == '')) {    //LH
        if ((l1 == 'X' && l2 == 'X') || (l2 == 'X' && l3 == 'X') || (l3 == 'X' && l1 == 'X')) {
          let id = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u1 == '' || m1 == '' || l1 == '')) {    //LV
        if ((u1 == 'X' && m1 == 'X') || (m1 == 'X' && l1 == 'X') || (l1 == 'X' && u1 == 'X')) {
          let id = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u2 == '' || m2 == '' || l2 == '')) {    //MV
        if ((u2 == 'X' && m2 == 'X') || (m2 == 'X' && l2 == 'X') || (l2 == 'X' && u2 == 'X')) {
          let id = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u3 == '' || m3 == '' || l3 == '')) {    //RV
        if ((u3 == 'X' && m3 == 'X') || (m3 == 'X' && l3 == 'X') || (l3 == 'X' && u3 == 'X')) {
          let id = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u1 == '' || m2 == '' || l3 == '')) {    //RD
        if ((u1 == 'X' && m2 == 'X') || (m2 == 'X' && l3 == 'X') || (l3 == 'X' && u1 == 'X')) {
          let id = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!(this.state.tictoc) && (u3 == '' || m2 == '' || l1 == '')) {    //LD
        if ((u3 == 'X' && m2 == 'X') || (m2 == 'X' && l1 == 'X') || (l1 == 'X' && u3 == 'X')) {
          let id = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';
          ((document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2'))
          setTimeout(() => { this.callWinner(cls) }, 500)
          this.setState({
            tictoc: true
          })
        }
      }
      if (!this.state.tictoc) {
        var oddNos = []; //'u1', 'u3', 'm2', 'l1', 'l3'
        var evenNos = []; //u2, m1, m3, l2
        u1 == '' && oddNos.push('u1');
        u3 == '' && oddNos.push('u3');
        m2 == '' && oddNos.push('m2');
        l1 == '' && oddNos.push('l1');
        l3 == '' && oddNos.push('l3');
        u2 == '' && evenNos.push('u2');
        m1 == '' && evenNos.push('m1');
        m3 == '' && evenNos.push('m3');
        l2 == '' && evenNos.push('l2');

        if (oddNos.length > 0) {
          let id = oddNos[Math.floor(Math.random() * oddNos.length)];
          (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2') && this.setState({
            tictoc: true
          })
        }
        else if (evenNos.length > 0) {
          let id = evenNos[Math.floor(Math.random() * evenNos.length)];
          (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2') && this.setState({
            tictoc: true
          })
        }
      }
    }
    this.state.tictoc && this.playAudio('o')
    // this.setState({
    //   tictoc: true
    // })
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
            }, () => setTimeout(() => this.endGame(), 2000)
            )
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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
            }, () => setTimeout(() => this.endGame(), 2000))
          }
          else {
            this.setState({
              won: true,
              finalmsg: 'o'
            }, () => setTimeout(() => this.endGame(), 2000))
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

          setTimeout(() => this.endGame(), 2000)
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

    // let db = firebase.firestore();
    // db.collection('users').add(
    //   {
    //     player1: this.state.p1,
    //     player2: this.state.p2,
    //     timeStamp: new Date(),
    //     platform: window.navigator.appVersion,
    //     browser: window.navigator.vendor
    //   }
    // );

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

  setPlayMode = (val) => {
    this.setState({
      p2: val
    })
  }

  render() {
    if (this.state.won == true) {
      this.playAudio('win')
    }
    console.log(this.state.tictoc)
    return (
      <div id='main' className='body'>
        <span className='playedCounter'>Played {this.state.usersFromFB} times</span>
        {this.state.mainbox == 'block' && <span className='exit' title='Exit' onClick={this.setPlayers}>EXIT</span>}
        {this.state.music == true &&
          <img title='Turn Off Music' className='onMusic' onClick={this.handleMusic} src='static/images/music-on.png' />
        }
        {this.state.music == false &&
          <img title='Turn On Music' className='offMusic' onClick={this.handleMusic} src='static/images/music-off.png' />
        }
        {this.state.audio == true &&
          <img className='onSound' onClick={() => this.setState({ audio: false })} src='static/images/sound-on.png' />
        }
        {this.state.audio == false &&
          <img className='offSound' onClick={() => this.setState({ audio: true })} src='static/images/sound-off.png' />
        }
        <span className='msg'>Welcome to Tic-Toc-Toe</span>
        <span className='footerDev'>Developed By Rohit Ninawe</span>
        <audio ref={(x) => { this.x = x; }}>
          <source src="https://docs.google.com/uc?export=download&id=1vAeUlZ_u9b2AYUuP8s97gddOOq_GAD6a" type="audio/ogg" >
          </source>
        </audio>
        <audio ref={(o) => { this.o = o; }}>
          <source src="https://docs.google.com/uc?export=download&id=1Mt9oBPe83VTq1AcoHcLnnHEnilSTwhkJ" type="audio/ogg" >
          </source>
        </audio>
        <audio ref={(win) => { this.win = win; }}>
          <source src="https://docs.google.com/uc?export=download&id=1HRQJ_yFme5GBuXWDhaZ6sEpYinSRhdR2" type="audio/ogg" >
          </source>
        </audio>
        <audio ref={(gover) => { this.gover = gover; }}>
          <source src="https://docs.google.com/uc?export=download&id=1hLHQK9mgeoj3NbAZ8EmAkwNVJcLLf0KJ" type="audio/ogg" >
          </source>
        </audio>
        <audio loop={true} ref={(start) => { this.start = start; }}>
          <source src="https://docs.google.com/uc?export=download&id=1M9EbakeoX-uQhlbxI_zGT2QNuXBf0D7X" type="audio/ogg" >
          </source>
        </audio>
        <div className='mainBox'>
          <div className='gameDisplay'>
            <div className='scoreboardDiv'>
              <span className='scoreSpan'>{this.state.xScore} - {this.state.yScore}</span>
            </div>
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
                <span className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                } id='u1' ></span>
              </div>
              <div className=' sepBox'>
                <span className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                } id='u2' ></span>
              </div>
              <div className='ru sepBox'>
                <span className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                } id='u3' ></span>
              </div>
            </div>

            <div className='rowBox'>
              <div className='ml sepBox'>
                <span id='m1' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
              <div className='m sepBox'>
                <span id='m2' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
              <div className='mr sepBox'>
                <span id='m3' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
            </div>
            <div className='rowBox'>
              <div className='ll sepBox'>
                <span id='l1' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
              <div className=' sepBox'>
                <span id='l2' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
              <div className='rl sepBox'>
                <span id='l3' className='XOSpan' onClick={(e) => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e)
                }></span>
              </div>
            </div>
          </div>
        </div>

        <div className='playerDetails'>
          <div className='playModeMainDiv'>
            <div onClick={() => this.setPlayMode('Computer')} className='playMode computerPlay'
              style={{
                background: this.state.p2 == 'Computer' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
                opacity: this.state.p2 == 'Computer' ? '1' : '0.6'
              }}>
              <img style={{ width: '50px', borderRadius: '25px', height: '70px' }} src='static/images/bot.png' title='Bot' />
              <span style={{ color: this.state.p2 == 'Computer' ? 'black' : 'white', fontWeight: '600', marginTop: '10px' }}>Computer</span>
            </div>
            <div onClick={() => this.setPlayMode('')} className='playMode friendPlay'
              style={{
                width: '70px', background: this.state.p2 != 'Computer' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
                opacity: this.state.p2 != 'Computer' ? '1' : '0.6'
              }}>
              <img style={{ width: '50px', borderRadius: '25px' }} src='static/images/single_user.png' title='Friend' />
              <span style={{ color: this.state.p2 != 'Computer' ? 'black' : 'white', fontWeight: '600', marginTop: '10px' }}>Friend</span>
            </div>
          </div>
          <div className='playerNames'>
            <input className='ply1'
              placeholder='Player 1'
              value={this.state.p1}
              onChange={this.p1nm}
              autoFocus={true}
              maxLength="10" />

            <input className='ply1'
              style={{ color: this.state.p2 == 'Computer' ? 'black' : '' }}
              placeholder='Player 2'
              value={this.state.p2}
              onChange={this.p2nm}
              disabled={this.state.p2 == 'Computer'}
              maxLength="10" />

          </div>
          <div className='enterBtnDiv'>
            {((this.state.p1 != '') && (this.state.p1 === this.state.p2)) && <span className='nameErrorSpan' >Same names are not allowed.</span>}
            <button className='enterBtn' onClick={() => ((this.state.p1 != '') && (this.state.p1 === this.state.p2)) ? {} : this.startGame()}>ENTER</button>
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
                position: relative;
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
                animation-duration: 1000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
              }
              .lu{
                border-color: white;
                border-style: solid;
                border-width: 0px 1px 0px 0px;
              }
              .msg{
                display: ${this.state.msg};
                color: white;
                font-size: 4em;
              }
              .ru{
                border-color: white;
                border-style: solid;
                border-width: 0px 0px 0px 1px;
              }
              .ml{
                border-color: white;
                border-style: solid;
                border-width: 1px 0px 1px 0px;
              }
              .mr{
                border-color: white;
                border-style: solid;
                border-width: 1px 0px 1px 0px;
              }
              .m{
                border-color: white;
                border-style: solid;
                border-width: 1px;
              }
              .ll{
                border-color: white;
                border-style: solid;
                border-width: 0px 1px 0px 0px;
              }
              .rl{
                border-color: white;
                border-style: solid;
                border-width: 0px 0px 0px 1px;
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
              .playedCounter{
                position:  absolute;
                top: 10px;
                left: 10px;
              }
              .playModeMainDiv{
                display: flex;
                justify-content: space-around;
                width: 100%;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
                margin-bottom: 40px;
              }
              .playMode{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  border: 2px solid white;
                  padding: 20px;
                  background: linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%);
                  border-radius: 5px;
                  position: relative;
              }
              .computerPlay::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 5px;
                bottom: -15px;
                background-color: ${this.state.p2 == 'Computer' ? '#01fdff' : 'transparent'};
                border-radius: 2px;
              }
              .friendPlay::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 5px;
                bottom: -15px;
                background-color: ${this.state.p2 != 'Computer' ? '#01fdff' : 'transparent'};
                border-radius: 2px;
              }
              .nameErrorSpan{
                color: red;
                font-size: larger;
                position: absolute;
                top: 20px;
              }
              .scoreboardDiv{
                display: flex;
                justify-content: center;
              }
              .scoreSpan{
                font-size: -webkit-xxx-large;
              }
              .exit{
                cursor: pointer;
                position: absolute;
                top: 15px;
                font-size: larger;
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
                bottom: 60px;
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
                height: 333px;
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
              .playedCounter{
                font-size: small;
                top: 20px;
                left: 15px;
              }
              .nameErrorSpan{
                font-size: small;
                top: 6px;
              }
              .scoreSpan{
                font-size: xx-large;
              }
              .exit{
                font-size: medium;
              }
            }
          `}
        </style>
        <style jsx global>
            {`
              body{
                margin: 0;
              }
            `}
          </style>
      </div>
    )
  }
}