module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Firebase.js":
/*!********************************!*\
  !*** ./components/Firebase.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);


const firebaseConfig = {
  apiKey: "AIzaSyAKaQByeBh_fmftC138OLjJWTWSGiO1-K0",
  authDomain: "digital-pagoda-235707.firebaseapp.com",
  databaseURL: "https://digital-pagoda-235707.firebaseio.com",
  projectId: "digital-pagoda-235707",
  storageBucket: "digital-pagoda-235707.appspot.com",
  messagingSenderId: "842933783599",
  appId: "1:842933783599:web:debb068cf829a2f9fb8ada",
  measurementId: "G-95G4N0WZP5"
}; // firebase.initializeApp(firebaseConfig);
// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

/* harmony default export */ __webpack_exports__["default"] = (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app()); // export default firebase;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TicTacToe; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timers */ "timers");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");
var _jsxFileName = "/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2002.wav , http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2003.wav , robot sound (wav)



class TicTacToe extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onCollectionUpdate", querySnapshot => {
      const boards = [];
      querySnapshot.forEach(doc => {
        const {
          player1,
          player2,
          timeStamp,
          platform,
          browser
        } = doc.data();
        boards.push({
          key: doc.id,
          doc,
          // DocumentSnapshot
          player1,
          player2,
          timeStamp,
          platform,
          browser
        });
      });
      this.setState({
        usersFromFB: boards
      }, () => console.log(this.state.usersFromFB));
    });

    _defineProperty(this, "endGame", () => {
      let db = _components_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
      db.collection('users').add({
        player1: this.state.p1,
        player2: this.state.p2,
        timeStamp: new Date(),
        platform: window.navigator.appVersion,
        browser: window.navigator.vendor,
        status: this.state.finalmsg == 'x' ? 'Player 1 Won' : this.state.finalmsg == 'o' ? 'Player 2 Won' : this.state.finalmsg == 'g' ? 'Game Over' : ''
      });
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
        player: 'none',
        //block
        mainbox: 'none',
        //none
        p1: '',
        p2: 'Computer',
        won: false,
        dev: false,
        // finalmsg: '',
        xScore: this.state.finalmsg == 'x' ? this.state.xScore + 1 : this.state.xScore,
        yScore: this.state.finalmsg == 'o' ? this.state.yScore + 1 : this.state.yScore
      }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.setState({
        mainbox: 'block',
        finalmsg: ''
      }), 200)); //no callback on exit
    });

    _defineProperty(this, "setPlayers", () => {
      this.setState({
        player: 'block',
        mainbox: 'none',
        finalmsg: '',
        xScore: 0,
        yScore: 0,
        p1: '',
        p2: 'Computer'
      });
    });

    _defineProperty(this, "setKey", e => {
      var id = e.target.id;
      var cls = e.target.className;
      var val;

      if (this.state.won == false) {
        if (document.getElementById(id).innerHTML === '') {
          this.setState({
            tictoc: !this.state.tictoc
          }, () => this.state.p2 == 'Computer' && Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.botMove(cls), 650));

          if (this.state.tictoc) {
            val = 'X';
            this.playAudio('x');
          } else {
            val = 'O';
            this.playAudio('o');
          }

          document.getElementById(id).innerHTML = val;
          document.getElementById(id).style.textShadow = val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2';
          Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
            this.callWinner(cls);
          }, 500);
        }
      }

      console.log(document.getElementById(id).innerHTML);
      console.log(val);
    });

    _defineProperty(this, "botMove", cls => {
      if (this.state.won == false) {
        console.log('bot played');
        var randomNo = this.randomNoFunc();
        console.log(randomNo);
        var u1 = document.getElementById('u1').innerHTML;
        var u2 = document.getElementById('u2').innerHTML;
        var u3 = document.getElementById('u3').innerHTML;
        var m1 = document.getElementById('m1').innerHTML;
        var m2 = document.getElementById('m2').innerHTML;
        var m3 = document.getElementById('m3').innerHTML;
        var l1 = document.getElementById('l1').innerHTML;
        var l2 = document.getElementById('l2').innerHTML;
        var l3 = document.getElementById('l3').innerHTML;

        if (!this.state.tictoc && (u1 == '' || u2 == '' || u3 == '')) {
          //UH
          if (u1 == 'O' && u2 == 'O' || u2 == 'O' && u3 == 'O' || u3 == 'O' && u1 == 'O') {
            let id = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (m1 == '' || m2 == '' || m3 == '')) {
          //MH
          if (m1 == 'O' && m2 == 'O' || m2 == 'O' && m3 == 'O' || m3 == 'O' && m1 == 'O') {
            let id = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (l1 == '' || l2 == '' || l3 == '')) {
          //LH
          if (l1 == 'O' && l2 == 'O' || l2 == 'O' && l3 == 'O' || l3 == 'O' && l1 == 'O') {
            let id = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u1 == '' || m1 == '' || l1 == '')) {
          //LV
          if (u1 == 'O' && m1 == 'O' || m1 == 'O' && l1 == 'O' || l1 == 'O' && u1 == 'O') {
            let id = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u2 == '' || m2 == '' || l2 == '')) {
          //MV
          if (u2 == 'O' && m2 == 'O' || m2 == 'O' && l2 == 'O' || l2 == 'O' && u2 == 'O') {
            let id = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u3 == '' || m3 == '' || l3 == '')) {
          //RV
          if (u3 == 'O' && m3 == 'O' || m3 == 'O' && l3 == 'O' || l3 == 'O' && u3 == 'O') {
            let id = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u1 == '' || m2 == '' || l3 == '')) {
          //RD
          if (u1 == 'O' && m2 == 'O' || m2 == 'O' && l3 == 'O' || l3 == 'O' && u1 == 'O') {
            let id = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u3 == '' || m2 == '' || l1 == '')) {
          //LD
          if (u3 == 'O' && m2 == 'O' || m2 == 'O' && l1 == 'O' || l1 == 'O' && u3 == 'O') {
            let id = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (u1 == '' || u2 == '' || u3 == '') {
          //UH
          if (u1 == 'X' && u2 == 'X' || u2 == 'X' && u3 == 'X' || u3 == 'X' && u1 == 'X') {
            let id = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (m1 == '' || m2 == '' || m3 == '')) {
          //MH
          if (m1 == 'X' && m2 == 'X' || m2 == 'X' && m3 == 'X' || m3 == 'X' && m1 == 'X') {
            let id = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (l1 == '' || l2 == '' || l3 == '')) {
          //LH
          if (l1 == 'X' && l2 == 'X' || l2 == 'X' && l3 == 'X' || l3 == 'X' && l1 == 'X') {
            let id = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u1 == '' || m1 == '' || l1 == '')) {
          //LV
          if (u1 == 'X' && m1 == 'X' || m1 == 'X' && l1 == 'X' || l1 == 'X' && u1 == 'X') {
            let id = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u2 == '' || m2 == '' || l2 == '')) {
          //MV
          if (u2 == 'X' && m2 == 'X' || m2 == 'X' && l2 == 'X' || l2 == 'X' && u2 == 'X') {
            let id = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u3 == '' || m3 == '' || l3 == '')) {
          //RV
          if (u3 == 'X' && m3 == 'X' || m3 == 'X' && l3 == 'X' || l3 == 'X' && u3 == 'X') {
            let id = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u1 == '' || m2 == '' || l3 == '')) {
          //RD
          if (u1 == 'X' && m2 == 'X' || m2 == 'X' && l3 == 'X' || l3 == 'X' && u1 == 'X') {
            let id = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
          }
        }

        if (!this.state.tictoc && (u3 == '' || m2 == '' || l1 == '')) {
          //LD
          if (u3 == 'X' && m2 == 'X' || m2 == 'X' && l1 == 'X' || l1 == 'X' && u3 == 'X') {
            let id = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
              this.callWinner(cls);
            }, 500);
            this.setState({
              tictoc: true
            });
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
            });
          } else if (evenNos.length > 0) {
            let id = evenNos[Math.floor(Math.random() * evenNos.length)];
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2') && this.setState({
              tictoc: true
            });
          }
        }
      }

      this.state.tictoc && this.playAudio('o'); // this.setState({
      //   tictoc: true
      // })
    });

    _defineProperty(this, "callWinner", cls => {
      var div = document.getElementById;
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
        if (u1 != '' && u2 != '' && u3 != '') {
          if (u1 === u2 && u1 == u3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('u3').className = cls + ' spinner';

            if (u1 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (m1 != '' && m2 != '' && m3 != '') {
          if (m1 == m2 && m1 == m3) {
            document.getElementById('m1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';

            if (m1 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (l1 != '' && l2 != '' && l3 != '') {
          if (l1 == l2 && l1 == l3) {
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (l1 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u1 != '' && m1 != '' && l1 != '') {
          if (u1 == l1 && u1 == m1) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('m1').className = cls + ' spinner';

            if (u1 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u2 != '' && m2 != '' && l2 != '') {
          if (u2 == m2 && u2 == l2) {
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';

            if (u2 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u3 != '' && l3 != '' && m3 != '') {
          if (u3 == m3 && u3 == l3) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u3 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u1 != '' && m2 != '' && l3 != '') {
          if (u1 == m2 && u1 == l3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u1 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u3 != '' && m2 != '' && l1 != '') {
          if (u3 == m2 && u3 == l1) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';

            if (u3 == 'X') {
              this.setState({
                won: true,
                finalmsg: 'x'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            } else {
              this.setState({
                won: true,
                finalmsg: 'o'
              }, () => Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000));
            }
          }
        }
      }

      if (this.state.won == false) {
        if (u1 != '' && u2 != '' && u3 != '' && m1 != '' && m2 != '' && m3 != '' && l1 != '' && l2 != '' && l3 != '') {
          document.getElementById('u1').className = cls + ' text-flicker-out-glow';
          document.getElementById('u2').className = cls + ' text-flicker-out-glow';
          document.getElementById('u3').className = cls + ' text-flicker-out-glow';
          document.getElementById('l1').className = cls + ' text-flicker-out-glow';
          document.getElementById('l2').className = cls + ' text-flicker-out-glow';
          document.getElementById('l3').className = cls + ' text-flicker-out-glow';
          document.getElementById('m1').className = cls + ' text-flicker-out-glow';
          document.getElementById('m2').className = cls + ' text-flicker-out-glow';
          document.getElementById('m3').className = cls + ' text-flicker-out-glow';
          this.setState({
            won: false,
            finalmsg: 'g'
          }, () => {
            this.playAudio('gover');
            Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => this.endGame(), 2000);
          });
        }
      }
    });

    _defineProperty(this, "p1nm", e => {
      var val = e.target.value.trim();
      this.setState({
        p1: val
      });
    });

    _defineProperty(this, "p2nm", e => {
      var val = e.target.value.trim();
      this.setState({
        p2: val
      });
    });

    _defineProperty(this, "startGame", () => {
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
        mainbox: 'block'
      });
    });

    _defineProperty(this, "handleMusic", () => {
      this.setState({
        music: !this.state.music
      }, () => {
        if (this.state.music) {
          this.start.play();
        } else if (!this.state.music) {
          this.start.pause();
        }
      });
    });

    _defineProperty(this, "setPlayMode", val => {
      this.setState({
        p2: val
      });
    });

    this.ref = _components_Firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('users');
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
      yScore: 0
    };

    this.playAudio = val => {
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
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(() => {
      this.setState({
        msg: 'none',
        player: 'block'
      });
    }, 2000);
  }

  randomNoFunc() {
    var c = Math.round(Math.random() * 10);
    return c == 0 ? c + 5 : c > 9 ? c - 5 : c;
  }

  render() {
    if (this.state.won == true) {
      this.playAudio('win');
    }

    console.log(this.state.tictoc);
    return __jsx("div", {
      id: "main",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'body',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playedCounter',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 9
      }
    }, "Played ", this.state.usersFromFB.length, " times"), this.state.mainbox == 'block' && __jsx("span", {
      title: "Exit",
      onClick: this.setPlayers,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'exit',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 43
      }
    }, "EXIT"), this.state.music == true && __jsx("img", {
      title: "Turn Off Music",
      onClick: this.handleMusic,
      src: "static/images/music-on.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onMusic',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 11
      }
    }), this.state.music == false && __jsx("img", {
      title: "Turn On Music",
      onClick: this.handleMusic,
      src: "static/images/music-off.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offMusic',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 11
      }
    }), this.state.audio == true && __jsx("img", {
      onClick: () => this.setState({
        audio: false
      }),
      src: "static/images/sound-on.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onSound',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 11
      }
    }), this.state.audio == false && __jsx("img", {
      onClick: () => this.setState({
        audio: true
      }),
      src: "static/images/sound-off.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offSound',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 11
      }
    }), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'msg',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 9
      }
    }, "Welcome to Tic-Toc-Toe"), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'footerDev',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 9
      }
    }, "Developed By Rohit Ninawe"), __jsx("audio", {
      ref: x => {
        this.x = x;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "https://docs.google.com/uc?export=download&id=1vAeUlZ_u9b2AYUuP8s97gddOOq_GAD6a",
      type: "audio/ogg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 692,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: o => {
        this.o = o;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "https://docs.google.com/uc?export=download&id=1Mt9oBPe83VTq1AcoHcLnnHEnilSTwhkJ",
      type: "audio/ogg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: win => {
        this.win = win;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "https://docs.google.com/uc?export=download&id=1HRQJ_yFme5GBuXWDhaZ6sEpYinSRhdR2",
      type: "audio/ogg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: gover => {
        this.gover = gover;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "https://docs.google.com/uc?export=download&id=1hLHQK9mgeoj3NbAZ8EmAkwNVJcLLf0KJ",
      type: "audio/ogg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 11
      }
    })), __jsx("audio", {
      loop: true,
      ref: start => {
        this.start = start;
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "https://docs.google.com/uc?export=download&id=1M9EbakeoX-uQhlbxI_zGT2QNuXBf0D7X",
      type: "audio/ogg",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'mainBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'scoreboardDiv',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'scoreSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 15
      }
    }, this.state.xScore, " - ", this.state.yScore)), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plHeading',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 15
      }
    }, "Player 1"), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 15
      }
    }, "Player 2")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plName',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        marginLeft: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 15
      }
    }, " ", this.state.p1, " "), __jsx("span", {
      style: {
        marginRight: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 15
      }
    }, " ", this.state.p2, " "))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'finalMsg',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 11
      }
    }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 40
      }
    }, "Player 1 won") : __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 68
      }
    }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 42
      }
    }, "Player 2 won") : __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 70
      }
    }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 48
      }
    }, "Game Over")), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'box',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741,
        columnNumber: 15
      }
    }, __jsx("span", {
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      id: "u1",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 745,
        columnNumber: 15
      }
    }, __jsx("span", {
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      id: "u2",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 746,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 15
      }
    }, __jsx("span", {
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      id: "u3",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "m1",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'm sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "m2",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "m3",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 17
      }
    }))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'll sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "l1",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "l2",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778,
        columnNumber: 15
      }
    }, __jsx("span", {
      id: "l3",
      onClick: e => this.state.p2 == 'Computer' ? this.state.tictoc ? this.setKey(e) : {} : this.setKey(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779,
        columnNumber: 17
      }
    }))))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerDetails',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playModeMainDiv',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787,
        columnNumber: 11
      }
    }, __jsx("div", {
      onClick: () => this.setPlayMode('Computer'),
      style: {
        background: this.state.p2 == 'Computer' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
        opacity: this.state.p2 == 'Computer' ? '1' : '0.6'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode computerPlay',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788,
        columnNumber: 13
      }
    }, __jsx("img", {
      style: {
        width: '50px',
        borderRadius: '25px',
        height: '70px'
      },
      src: "static/images/bot.png",
      title: "Bot",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 15
      }
    }), __jsx("span", {
      style: {
        color: this.state.p2 == 'Computer' ? 'black' : 'white',
        fontWeight: '600',
        marginTop: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794,
        columnNumber: 15
      }
    }, "Computer")), __jsx("div", {
      onClick: () => this.setPlayMode(''),
      style: {
        width: '70px',
        background: this.state.p2 != 'Computer' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
        opacity: this.state.p2 != 'Computer' ? '1' : '0.6'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode friendPlay',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 13
      }
    }, __jsx("img", {
      style: {
        width: '50px',
        borderRadius: '25px'
      },
      src: "static/images/single_user.png",
      title: "Friend",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801,
        columnNumber: 15
      }
    }), __jsx("span", {
      style: {
        color: this.state.p2 != 'Computer' ? 'black' : 'white',
        fontWeight: '600',
        marginTop: '10px'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802,
        columnNumber: 15
      }
    }, "Friend"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerNames',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 11
      }
    }, __jsx("input", {
      placeholder: "Player 1",
      value: this.state.p1,
      onChange: this.p1nm,
      autoFocus: true,
      maxLength: "10",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806,
        columnNumber: 13
      }
    }), __jsx("input", {
      style: {
        color: this.state.p2 == 'Computer' ? 'black' : ''
      },
      placeholder: "Player 2",
      value: this.state.p2,
      onChange: this.p2nm,
      disabled: this.state.p2 == 'Computer',
      maxLength: "10",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 813,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 11
      }
    }, this.state.p1 != '' && this.state.p1 === this.state.p2 && __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'nameErrorSpan',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 78
      }
    }, "Same names are not allowed."), __jsx("button", {
      onClick: () => this.state.p1 != '' && this.state.p1 === this.state.p2 ? {} : this.startGame(),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4178261647", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtn',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 824,
        columnNumber: 13
      }
    }, "ENTER"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4178261647",
      dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 != 'Computer' ? '#01fdff' : 'transparent', this.state.msg, this.state.player],
      __self: this
    }, `.ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:${this.state.player};}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;position:relative;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 0.2s linear 20 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:${this.state.mainbox};}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:${this.state.msg};color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}.playedCounter.__jsx-style-dynamic-selector{position:absolute;top:10px;left:10px;}.playModeMainDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-bottom:40px;}.playMode.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid white;padding:20px;background:linear-gradient(90deg,rgb(0,0,0) 1%,rgba(69,197,236,1) 10%,rgb(25,116,125) 95%);border-radius:5px;position:relative;}.computerPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:${this.state.p2 == 'Computer' ? '#01fdff' : 'transparent'};border-radius:2px;}.friendPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:${this.state.p2 != 'Computer' ? '#01fdff' : 'transparent'};border-radius:2px;}.nameErrorSpan.__jsx-style-dynamic-selector{color:red;font-size:larger;position:absolute;top:20px;}.scoreboardDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.scoreSpan.__jsx-style-dynamic-selector{font-size:-webkit-xxx-large;}.exit.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;top:15px;font-size:larger;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:${this.state.msg};color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:${this.state.player};width:280px;height:333px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}.playedCounter.__jsx-style-dynamic-selector{font-size:small;top:20px;left:15px;}.nameErrorSpan.__jsx-style-dynamic-selector{font-size:small;top:6px;}.scoreSpan.__jsx-style-dynamic-selector{font-size:xx-large;}.exit.__jsx-style-dynamic-selector{font-size:medium;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyekJXLEFBRzJCLEFBVVEsQUFPQSxBQU9MLEFBTUssQUFPQSxBQU9BLEFBS04sQUFHQyxBQUdELEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU9GLEFBS2lELEFBUXJDLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVFNLEFBS04sQUFRRSxBQVVKLEFBU0EsQUFTRCxBQU1HLEFBSWUsQUFHYixBQU9ILEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBS0EsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFNb0YsQUFNbEUsQUFNQSxBQU1ILEFBS2tFLEFBTWhFLEFBR0UsQUFLTCxBQUdFLEFBTVMsQUFPbkIsQUFNQSxBQVFBLEFBUUEsQUFRQSxBQU9tQixBQUszQixBQVVHLEFBTUQsQUFXQSxBQUlDLEFBUUEsQUFhQSxBQVFBLEFBU0QsQUFJQSxBQUtDLEFBT0EsQUFRRyxBQUtBLEFBSUcsQUFHRixVQS9zQkQsQUF5UEMsQUFvQjRJLEFBSUEsQUFJMUksQUFJQSxBQUl5SSxBQUlBLEFBSXpJLEFBSUEsQUFJc0csQUFJQSxBQUl0RyxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUlrRSxBQUlBLEFBSUEsQUFJbEUsQUFJQSxBQUlrRSxBQUlBLEFBSWxFLEFBSUEsQUFJOEIsQUFJOUIsQUFJQSxBQUlBLEFBSUEsQUFJbkIsQUFLNkosQUFJQSxBQUkxSSxBQUlBLEFBSXlJLEFBSUEsQUFJekksQUFJQSxBQUlzRyxBQUlBLEFBSXRHLEFBSUEsQUFJa0UsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUk4QixBQUk5QixBQUlBLEFBSUEsQUFJQSxBQUluQixBQXFHaUIsQ0FyaEJKLEFBcUpLLEFBU0EsQ0EvTHBCLEFBTUEsQUFnRXdCLEFBa0JSLEFBSUEsQUEwZVEsQUFXeEIsQUEwQ2tCLEFBSUEsQ0E1bkJsQixBQWdHYyxBQW9EQyxBQXNjRCxBQThDQyxDQXhmQSxDQWtFSyxDQThiVCxBQUtELENBT1YsQ0F0c0JXLEFBT0MsQUFhRCxBQU9BLEFBT0csQUFvS0gsQUE2V0csQUFNSCxBQVFBLEFBUUEsQUFRQSxDQXJiVSxBQVVBLEFBS0EsQUFLQSxBQUtBLEFBOGdCckIsSUE5bUJlLENBMm1CZixDQXJqQmlCLEFBMGZBLEFBc0RMLENBcHNCRSxBQXlJZCxBQUlBLENBbklhLEFBb0JBLEFBT0EsQUEyS0QsQUF5Q1EsQUE0QmxCLEFBSUEsQUFZQSxBQUlBLEFBWUEsQUFJQSxBQVlBLEFBSUEsQUFnQkEsQUFJQSxBQVlBLEFBSUEsQUFRQSxBQUlBLEFBSUEsQUFJQSxBQWlCQSxBQUlBLEFBWUEsQUFJQSxBQVlBLEFBSUEsQUFZQSxBQUlBLEFBZ0JBLEFBSUEsQUFZQSxBQUlBLEFBUUEsQUFJQSxBQUlBLEFBSUEsQUFxRWUsQUFRQSxBQVFBLEFBUUEsQUFZSCxDQXRsQkQsQUFpUGIsQUEwYUEsQUFJQSxDQXpjYSxBQVNBLENBcE1NLEFBaWhCQyxHQXZUVCxDQS9JUyxBQWdnQkEsQ0E4RXBCLENBdG1CZSxDQXhCZixBQXlFRSxBQTBCWSxBQXVDZCxBQW9XYyxBQTRDQSxDQWhtQk8sQUFVUCxBQW9CQSxBQU9BLEFBZ0lpQixBQVVBLEFBS1osQUFLWSxBQUtBLENBN0tqQixBQXNsQk8sQ0FuZFEsQUFtRmhCLEFBU0EsQUE4WmlCLEVBeFlYLEFBNlROLEFBUUEsQUFRQSxBQVFBLEdBbFdGLEVBN01YLENBaWhCQSxDQW5aZ0IsQUEyWUUsQUE0Q0gsQ0F0bEJFLEFBb0JBLEFBT0EsQ0FwQkEsQUFzTkYsQUFTQSxDQTFIQSxBQWdnQkEsQ0FuREQsQUFRQSxBQVFBLEFBUUEsQ0FsV2QsQUFzSEUsQUE2SEEsQ0F4VEYsRUFwTGtCLENBdW1CQSxDQWpXbEIsQ0FsTDhELEVBNmdCOUQsQ0F2YkEsQ0E4RGdELEFBU0EsQ0F0T2hELEFBb0JBLEFBT0EsQUFpRmMsQUE4YlEsQUFldEIsQUFRQSxBQVFBLEFBUUEsQUEyQmMsQ0FybUJkLENBbUpBLEFBVUEsQUFVQSxBQUtBLE1BN0xvQixDQW9CSyxBQWtDTyxBQU9BLEFBVVAsQUE0QkEsQUEwQkQsQUFvRk8sQUFRTCxBQWtDRCxBQTRXTCxBQU1LLEFBcUJBLEFBcUJPLEFBUVIsQUFrQlEsR0ExakJsQixBQWdnQkEsSUF0RlYsQUFRRixJQTFkOEIsQUFzZWhDLENBM1BFLEFBSUEsQUFZQSxBQUlBLEFBSUEsQUFZQSxBQUlBLEFBcUZBLEFBSUEsQUFZQSxBQUlBLEFBSUEsQUFZQSxBQUlBLENBMVJZLEFBK1ZULEFBUUgsQUE2SVksQ0F4ZmQsQ0F6RWtCLEFBZ2dCQyxFQXZuQkosQ0F1bUJBLE9BbGFVLEFBb2ZBLEtBeHJCSCxBQWlKRCxBQTBmQyxDQXBoQkEsQUFnZkEsQ0FnQkEsSUE1aEJHLEFBMklMLEFBU0EsRUFyRlEsTUE4STFCLEFBSUEsQUF5SEEsQUFJQSxNQXhhRixDQXVIQSxBQWdmQSxDQWdCQSxFQWpaQSxBQVNBLHFCQXdDRSxBQUlBLEFBeUhBLEFBSUEsQ0FqSkEsQUFJQSxBQXlIQSxBQUlBLEVBN1FZLEFBNEZTLEFBc2NULFlBamlCQyxBQWtpQkEsUUFwZ0JzQixDQXhJakIsQUFtREMsQUE0QkEsQUF3SnJCLEFBa1hxQixBQXFCRCxJQW5nQlcsQUFraUJBLFlBM21CVCxBQU9BLEFBMGxCQSxBQTBCQSxFQTVwQlAsQUE4bUJELE1BbGJELENBWFEsQUFvZkEsRUEzbUJyQixHQXFqQm1CLENBOW1CbkIsSUE0TGlCLENBM0pDLEFBT0EsQUErQkcsQUEyakJILEFBMEJBLENBOWhCVSxBQTBmQyxVQVQ3QixHQWxiMEMsRUEzSnhCLEFBT0YsQUEwbEJFLEFBMEJGLEtBaG1CaEIsU0FuQkEsQUFvbkJBLEVBM25CQSxBQWltQkEsSUFoYzJCLEtBN0RRLGFBdURkLENBc1VpQixFQWxkdkIsQUE0QkQsQUEwZ0JBLEVBblpHLEVBdEVhLEFBMGZDLEdBNUlRLEtBOVoxQixBQTBnQmIsQ0F0aUJvQixFQW1Ka0YsQ0FQdEcsR0FvVHVDLEFBTUQsSUF6YVosRUFpR1YsQUE4VXNCLEFBc0t0QixNQWpuQmhCLEdBc0RxQixBQWtpQkEsRUFwa0JELEdBMEdwQixBQW9mQSxTQXJsQjRCLE1BUjVCLElBK0RBLFVBUm1DLEFBMGZDLE1BckhsQyxDQW5icUIsVUE0WnJCLFVBWUEsRUF2YW9CLEFBaWFwQixJQVlBLEtBelRvQixZQW5ISixNQW9ISSxHQTdGdEIsQUFraUJxQixlQTVnQnFCLEFBd0UxQyxBQWtiMkMsSUFtQjNDLG9DQTVnQkEsQUEwZkEscUJBdmlCQSIsImZpbGUiOiIvVXNlcnMvbXdsZGV2ZWxvcGVyL1JlcG9zL3RpYy10YWMtdG9lL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vZm90by50ZW90ZWF0ZXIuZWUvbXV1c2lrYS8xMDAxJTIwU291bmQlMjBFZmZlY3RzL1NjaSUyMEZpL0xpdHRsZSUyMERyb2lkJTIwMDIud2F2ICwgaHR0cDovL2ZvdG8udGVvdGVhdGVyLmVlL211dXNpa2EvMTAwMSUyMFNvdW5kJTIwRWZmZWN0cy9TY2klMjBGaS9MaXR0bGUlMjBEcm9pZCUyMDAzLndhdiAsIHJvYm90IHNvdW5kICh3YXYpXG5cblxuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycydcbmltcG9ydCBmaXJlYmFzZSBmcm9tICcuLi9jb21wb25lbnRzL0ZpcmViYXNlJztcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnJlZiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGljdG9jOiB0cnVlLFxuICAgICAgbXNnOiAnYmxvY2snLFxuICAgICAgbWFpbmJveDogJ25vbmUnLFxuICAgICAgcGxheWVyOiAnbm9uZScsXG4gICAgICBmaW5hbG1zZzogJycsXG4gICAgICBwMTogJycsXG4gICAgICBwMjogJ0NvbXB1dGVyJyxcbiAgICAgIHdvbjogZmFsc2UsXG4gICAgICBtdXNpYzogZmFsc2UsXG4gICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgIHVzZXJzRnJvbUZCOiBbXSxcbiAgICAgIHhTY29yZTogMCxcbiAgICAgIHlTY29yZTogMCxcbiAgICB9XG4gICAgdGhpcy5wbGF5QXVkaW8gPSAodmFsKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbykge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgdGhpcy54LnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgdGhpcy5vLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dpbic6XG4gICAgICAgICAgICB0aGlzLndpbi5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdnb3Zlcic6XG4gICAgICAgICAgICB0aGlzLmdvdmVyLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc291bmQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5yZWYub25TbmFwc2hvdCh0aGlzLm9uQ29sbGVjdGlvblVwZGF0ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtc2c6ICdub25lJyxcbiAgICAgICAgcGxheWVyOiAnYmxvY2snLFxuICAgICAgfSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgb25Db2xsZWN0aW9uVXBkYXRlID0gKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICBjb25zdCBib2FyZHMgPSBbXTtcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyLCB0aW1lU3RhbXAsIHBsYXRmb3JtLCBicm93c2VyIH0gPSBkb2MuZGF0YSgpO1xuICAgICAgYm9hcmRzLnB1c2goe1xuICAgICAgICBrZXk6IGRvYy5pZCxcbiAgICAgICAgZG9jLCAvLyBEb2N1bWVudFNuYXBzaG90XG4gICAgICAgIHBsYXllcjEsIHBsYXllcjIsIHRpbWVTdGFtcCwgcGxhdGZvcm0sIGJyb3dzZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcnNGcm9tRkI6IGJvYXJkc1xuICAgIH0sICgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcnNGcm9tRkIpKTtcbiAgfVxuXG4gIGVuZEdhbWUgPSAoKSA9PiB7XG5cbiAgICBsZXQgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmFkZChcbiAgICAgIHtcbiAgICAgICAgcGxheWVyMTogdGhpcy5zdGF0ZS5wMSxcbiAgICAgICAgcGxheWVyMjogdGhpcy5zdGF0ZS5wMixcbiAgICAgICAgdGltZVN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgICAgICBwbGF0Zm9ybTogd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLFxuICAgICAgICBicm93c2VyOiB3aW5kb3cubmF2aWdhdG9yLnZlbmRvcixcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXRlLmZpbmFsbXNnID09ICd4JyA/ICdQbGF5ZXIgMSBXb24nIDogdGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAnbycgPyAnUGxheWVyIDIgV29uJyA6IHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ2cnID8gJ0dhbWUgT3ZlcicgOiAnJ1xuICAgICAgfVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGljdG9jOiB0cnVlLFxuICAgICAgbXNnOiAnbm9uZScsXG4gICAgICBwbGF5ZXI6ICdub25lJywgLy9ibG9ja1xuICAgICAgbWFpbmJveDogJ25vbmUnLCAgLy9ub25lXG4gICAgICBwMTogJycsXG4gICAgICBwMjogJ0NvbXB1dGVyJyxcbiAgICAgIHdvbjogZmFsc2UsXG4gICAgICBkZXY6IGZhbHNlLFxuICAgICAgLy8gZmluYWxtc2c6ICcnLFxuICAgICAgeFNjb3JlOiB0aGlzLnN0YXRlLmZpbmFsbXNnID09ICd4JyA/IHRoaXMuc3RhdGUueFNjb3JlICsgMSA6IHRoaXMuc3RhdGUueFNjb3JlLFxuICAgICAgeVNjb3JlOiB0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdvJyA/IHRoaXMuc3RhdGUueVNjb3JlICsgMSA6IHRoaXMuc3RhdGUueVNjb3JlLFxuICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1haW5ib3g6ICdibG9jaycsIGZpbmFsbXNnOiAnJyB9KSwgMjAwKSkgIC8vbm8gY2FsbGJhY2sgb24gZXhpdFxuICB9XG5cbiAgc2V0UGxheWVycyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsYXllcjogJ2Jsb2NrJyxcbiAgICAgIG1haW5ib3g6ICdub25lJyxcbiAgICAgIGZpbmFsbXNnOiAnJyxcbiAgICAgIHhTY29yZTogMCxcbiAgICAgIHlTY29yZTogMCxcbiAgICAgIHAxOiAnJyxcbiAgICAgIHAyOiAnQ29tcHV0ZXInLFxuICAgIH0pXG4gIH1cblxuICBzZXRLZXkgPSAoZSkgPT4ge1xuICAgIHZhciBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIHZhciBjbHMgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgdmFyIHZhbDtcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0aWN0b2M6ICF0aGlzLnN0YXRlLnRpY3RvY1xuICAgICAgICB9LCAoKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgJiYgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJvdE1vdmUoY2xzKSwgNjUwKSlcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWN0b2MpIHtcbiAgICAgICAgICB2YWwgPSAnWCdcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygneCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFsID0gJ08nXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ28nKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IHZhbDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAodmFsID09ICdYJyA/ICc2cHggNnB4IDIxcHggI2QyZDI4MicgOiAnNnB4IDZweCAyMXB4ICM5MmJhZTInKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoY2xzKVxuICAgICAgICB9LCA1MDApXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpXG4gICAgY29uc29sZS5sb2codmFsKVxuICB9XG5cbiAgcmFuZG9tTm9GdW5jKCkge1xuICAgIHZhciBjID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApXG4gICAgcmV0dXJuIGMgPT0gMCA/IGMgKyA1IDogYyA+IDkgPyBjIC0gNSA6IGNcbiAgfVxuXG4gIGJvdE1vdmUgPSAoY2xzKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnYm90IHBsYXllZCcpXG4gICAgICB2YXIgcmFuZG9tTm8gPSB0aGlzLnJhbmRvbU5vRnVuYygpXG4gICAgICBjb25zb2xlLmxvZyhyYW5kb21ObylcblxuICAgICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xuXG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IHUyID09ICcnIHx8IHUzID09ICcnKSkgeyAgIC8vVUhcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgdTIgPT0gJ08nKSB8fCAodTIgPT0gJ08nICYmIHUzID09ICdPJykgfHwgKHUzID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogdTIgPT0gJycgPyAndTInIDogJ3UzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKG0xID09ICcnIHx8IG0yID09ICcnIHx8IG0zID09ICcnKSkgeyAgICAvL01IXG4gICAgICAgIGlmICgobTEgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBtMyA9PSAnTycpIHx8IChtMyA9PSAnTycgJiYgbTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IG0xID09ICcnID8gJ20xJyA6IG0yID09ICcnID8gJ20yJyA6ICdtMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChsMSA9PSAnJyB8fCBsMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9MSFxuICAgICAgICBpZiAoKGwxID09ICdPJyAmJiBsMiA9PSAnTycpIHx8IChsMiA9PSAnTycgJiYgbDMgPT0gJ08nKSB8fCAobDMgPT0gJ08nICYmIGwxID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBsMSA9PSAnJyA/ICdsMScgOiBsMiA9PSAnJyA/ICdsMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTEgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTFZcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgbTEgPT0gJ08nKSB8fCAobTEgPT0gJ08nICYmIGwxID09ICdPJykgfHwgKGwxID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTEgPT0gJycgPyAnbTEnIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUyID09ICcnIHx8IG0yID09ICcnIHx8IGwyID09ICcnKSkgeyAgICAvL01WXG4gICAgICAgIGlmICgodTIgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMiA9PSAnTycpIHx8IChsMiA9PSAnTycgJiYgdTIgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUyID09ICcnID8gJ3UyJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMic7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMyA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SVlxuICAgICAgICBpZiAoKHUzID09ICdPJyAmJiBtMyA9PSAnTycpIHx8IChtMyA9PSAnTycgJiYgbDMgPT0gJ08nKSB8fCAobDMgPT0gJ08nICYmIHUzID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMyA9PSAnJyA/ICdtMycgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUkRcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgbTIgPT0gJ08nKSB8fCAobTIgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTIgPT0gJycgPyAnbTInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0yID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xEXG4gICAgICAgIGlmICgodTMgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMSA9PSAnTycpIHx8IChsMSA9PSAnTycgJiYgdTMgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHUxID09ICcnIHx8IHUyID09ICcnIHx8IHUzID09ICcnKSB7ICAgLy9VSFxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiB1MiA9PSAnWCcpIHx8ICh1MiA9PSAnWCcgJiYgdTMgPT0gJ1gnKSB8fCAodTMgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiB1MiA9PSAnJyA/ICd1MicgOiAndTMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAobTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbTMgPT0gJycpKSB7ICAgIC8vTUhcbiAgICAgICAgaWYgKChtMSA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIG0zID09ICdYJykgfHwgKG0zID09ICdYJyAmJiBtMSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gbTEgPT0gJycgPyAnbTEnIDogbTIgPT0gJycgPyAnbTInIDogJ20zJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKGwxID09ICcnIHx8IGwyID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL0xIXG4gICAgICAgIGlmICgobDEgPT0gJ1gnICYmIGwyID09ICdYJykgfHwgKGwyID09ICdYJyAmJiBsMyA9PSAnWCcpIHx8IChsMyA9PSAnWCcgJiYgbDEgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IGwxID09ICcnID8gJ2wxJyA6IGwyID09ICcnID8gJ2wyJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCBtMSA9PSAnJyB8fCBsMSA9PSAnJykpIHsgICAgLy9MVlxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiBtMSA9PSAnWCcpIHx8IChtMSA9PSAnWCcgJiYgbDEgPT0gJ1gnKSB8fCAobDEgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiBtMSA9PSAnJyA/ICdtMScgOiAnbDEnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTIgPT0gJycgfHwgbTIgPT0gJycgfHwgbDIgPT0gJycpKSB7ICAgIC8vTVZcbiAgICAgICAgaWYgKCh1MiA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwyID09ICdYJykgfHwgKGwyID09ICdYJyAmJiB1MiA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTIgPT0gJycgPyAndTInIDogbTIgPT0gJycgPyAnbTInIDogJ2wyJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0zID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL1JWXG4gICAgICAgIGlmICgodTMgPT0gJ1gnICYmIG0zID09ICdYJykgfHwgKG0zID09ICdYJyAmJiBsMyA9PSAnWCcpIHx8IChsMyA9PSAnWCcgJiYgdTMgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0zID09ICcnID8gJ20zJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SRFxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiBtMiA9PSAnWCcpIHx8IChtMiA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTMgPT0gJycgfHwgbTIgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTERcbiAgICAgICAgaWYgKCh1MyA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwxID09ICdYJykgfHwgKGwxID09ICdYJyAmJiB1MyA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTMgPT0gJycgPyAndTMnIDogbTIgPT0gJycgPyAnbTInIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc3RhdGUudGljdG9jKSB7XG4gICAgICAgIHZhciBvZGROb3MgPSBbXTsgLy8ndTEnLCAndTMnLCAnbTInLCAnbDEnLCAnbDMnXG4gICAgICAgIHZhciBldmVuTm9zID0gW107IC8vdTIsIG0xLCBtMywgbDJcbiAgICAgICAgdTEgPT0gJycgJiYgb2RkTm9zLnB1c2goJ3UxJyk7XG4gICAgICAgIHUzID09ICcnICYmIG9kZE5vcy5wdXNoKCd1MycpO1xuICAgICAgICBtMiA9PSAnJyAmJiBvZGROb3MucHVzaCgnbTInKTtcbiAgICAgICAgbDEgPT0gJycgJiYgb2RkTm9zLnB1c2goJ2wxJyk7XG4gICAgICAgIGwzID09ICcnICYmIG9kZE5vcy5wdXNoKCdsMycpO1xuICAgICAgICB1MiA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ3UyJyk7XG4gICAgICAgIG0xID09ICcnICYmIGV2ZW5Ob3MucHVzaCgnbTEnKTtcbiAgICAgICAgbTMgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCdtMycpO1xuICAgICAgICBsMiA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ2wyJyk7XG5cbiAgICAgICAgaWYgKG9kZE5vcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGlkID0gb2RkTm9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9kZE5vcy5sZW5ndGgpXTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW5Ob3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBpZCA9IGV2ZW5Ob3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXZlbk5vcy5sZW5ndGgpXTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUudGljdG9jICYmIHRoaXMucGxheUF1ZGlvKCdvJylcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgIHRpY3RvYzogdHJ1ZVxuICAgIC8vIH0pXG4gIH1cblxuICBjYWxsV2lubmVyID0gKGNscykgPT4ge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxuICAgIHZhciB1MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTDtcbiAgICB2YXIgdTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUw7XG4gICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xuICAgIHZhciBtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTDtcbiAgICB2YXIgbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUw7XG4gICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xuICAgIHZhciBsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTDtcbiAgICB2YXIgbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUw7XG4gICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MSA9PT0gdTIpICYmICh1MSA9PSB1MykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgMjAwMClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCAyMDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xuICAgICAgICBpZiAoKG0xID09IG0yKSAmJiAobTEgPT0gbTMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmIChtMSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKChsMSAhPSAnJykgJiYgKGwyICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XG4gICAgICAgIGlmICgobDEgPT0gbDIpICYmIChsMSA9PSBsMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKGwxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgMjAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgMjAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUxID09IGwxKSAmJiAodTEgPT0gbTEpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUyICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMiAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MiA9PSBtMikgJiYgKHUyID09IGwyKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTIgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCAyMDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCAyMDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MyAhPSAnJykgJiYgKGwzICE9ICcnKSAmJiAobTMgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTMgPT0gbTMpICYmICh1MyA9PSBsMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgMjAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgMjAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MSA9PSBtMikgJiYgKHUxID09IGwzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCAyMDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCAyMDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUzID09IG0yKSAmJiAodTMgPT0gbDEpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MyA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykgJiYgKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcblxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHdvbjogZmFsc2UsXG4gICAgICAgICAgZmluYWxtc2c6ICdnJ1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ2dvdmVyJylcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDIwMDApXG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHAxbm0gPSAoZSkgPT4ge1xuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHAxOiB2YWxcbiAgICB9KVxuICB9XG5cbiAgcDJubSA9IChlKSA9PiB7XG4gICAgdmFyIHZhbCA9IChlLnRhcmdldC52YWx1ZSkudHJpbSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcDI6IHZhbFxuICAgIH0pXG4gIH1cblxuICBzdGFydEdhbWUgPSAoKSA9PiB7XG5cbiAgICAvLyBsZXQgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbiAgICAvLyBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmFkZChcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcGxheWVyMTogdGhpcy5zdGF0ZS5wMSxcbiAgICAvLyAgICAgcGxheWVyMjogdGhpcy5zdGF0ZS5wMixcbiAgICAvLyAgICAgdGltZVN0YW1wOiBuZXcgRGF0ZSgpLFxuICAgIC8vICAgICBwbGF0Zm9ybTogd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLFxuICAgIC8vICAgICBicm93c2VyOiB3aW5kb3cubmF2aWdhdG9yLnZlbmRvclxuICAgIC8vICAgfVxuICAgIC8vICk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsYXllcjogJ25vbmUnLFxuICAgICAgbWFpbmJveDogJ2Jsb2NrJyxcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTXVzaWMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtdXNpYzogIXRoaXMuc3RhdGUubXVzaWNcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5tdXNpYykge1xuICAgICAgICB0aGlzLnN0YXJ0LnBsYXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLm11c2ljKSB7XG4gICAgICAgIHRoaXMuc3RhcnQucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0UGxheU1vZGUgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwMjogdmFsXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5wbGF5QXVkaW8oJ3dpbicpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGljdG9jKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdtYWluJyBjbGFzc05hbWU9J2JvZHknPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsYXllZENvdW50ZXInPlBsYXllZCB7dGhpcy5zdGF0ZS51c2Vyc0Zyb21GQi5sZW5ndGh9IHRpbWVzPC9zcGFuPlxuICAgICAgICB7dGhpcy5zdGF0ZS5tYWluYm94ID09ICdibG9jaycgJiYgPHNwYW4gY2xhc3NOYW1lPSdleGl0JyB0aXRsZT0nRXhpdCcgb25DbGljaz17dGhpcy5zZXRQbGF5ZXJzfT5FWElUPC9zcGFuPn1cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gdHJ1ZSAmJlxuICAgICAgICAgIDxpbWcgdGl0bGU9J1R1cm4gT2ZmIE11c2ljJyBjbGFzc05hbWU9J29uTXVzaWMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTXVzaWN9IHNyYz0nc3RhdGljL2ltYWdlcy9tdXNpYy1vbi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9uIE11c2ljJyBjbGFzc05hbWU9J29mZk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J3N0YXRpYy9pbWFnZXMvbXVzaWMtb2ZmLnBuZycgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSB0cnVlICYmXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29uU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogZmFsc2UgfSl9IHNyYz0nc3RhdGljL2ltYWdlcy9zb3VuZC1vbi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuYXVkaW8gPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2ZmU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogdHJ1ZSB9KX0gc3JjPSdzdGF0aWMvaW1hZ2VzL3NvdW5kLW9mZi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtc2cnPldlbGNvbWUgdG8gVGljLVRvYy1Ub2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyRGV2Jz5EZXZlbG9wZWQgQnkgUm9oaXQgTmluYXdlPC9zcGFuPlxuICAgICAgICA8YXVkaW8gcmVmPXsoeCkgPT4geyB0aGlzLnggPSB4OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xdkFlVWxaX3U5YjJBWVV1UDhzOTdnZGRPT3FfR0FENmFcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsobykgPT4geyB0aGlzLm8gPSBvOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xTXQ5b0JQZTgzVlRxMUFjb0hjTG5uSEVuaWxTVHdoa0pcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsod2luKSA9PiB7IHRoaXMud2luID0gd2luOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xSFJRSl95Rm1lNUdCdVhXRGhhWjZzRXBZaW5TUmhkUjJcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsoZ292ZXIpID0+IHsgdGhpcy5nb3ZlciA9IGdvdmVyOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xaExIUUs5bWdlb2ozTmJBWjhFbUFrd05WSmNMTGYwS0pcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gbG9vcD17dHJ1ZX0gcmVmPXsoc3RhcnQpID0+IHsgdGhpcy5zdGFydCA9IHN0YXJ0OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xTTlFYmFrZW9YLXVRaGxieElfekdUMlFOdVhCZjBEN1hcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkJveCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZWJvYXJkRGl2Jz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzY29yZVNwYW4nPnt0aGlzLnN0YXRlLnhTY29yZX0gLSB7dGhpcy5zdGF0ZS55U2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxIZWFkaW5nJz5cbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMn0gPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmFsTXNnJz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndvbiA9PSB0cnVlID9cbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ3gnXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAxID09ICcnID8gPHNwYW4+UGxheWVyIDEgd29uPC9zcGFuPiA6IDxzcGFuPnt0aGlzLnN0YXRlLnAxICsgJyB3b24nfTwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdvJyA/XG4gICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wMiA9PSAnJyA/IDxzcGFuPlBsYXllciAyIHdvbjwvc3Bhbj4gOiA8c3Bhbj4ge3RoaXMuc3RhdGUucDIgKyAnIHdvbid9IDwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICA6IG51bGwpKVxuICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdnJyAmJiA8c3Bhbj5HYW1lIE92ZXI8L3NwYW4+KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHUgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfSBpZD0ndTEnID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UyJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J1IHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UzJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20gc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gdGhpcy5zdGF0ZS50aWN0b2MgPyB0aGlzLnNldEtleShlKSA6IHt9IDogdGhpcy5zZXRLZXkoZSlcbiAgICAgICAgICAgICAgICB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsbCBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JsIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wzJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJEZXRhaWxzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheU1vZGVNYWluRGl2Jz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQbGF5TW9kZSgnQ29tcHV0ZXInKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBjb21wdXRlclBsYXknXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDAsIDApIDElLCByZ2JhKDY5LDE5NywyMzYsMSkgMTAlLCByZ2IoMjUsIDExNiwgMTI1KSA5NSUpJyA6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJzEnIDogJzAuNidcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcsIGhlaWdodDogJzcwcHgnIH19IHNyYz0nc3RhdGljL2ltYWdlcy9ib3QucG5nJyB0aXRsZT0nQm90JyAvPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2JsYWNrJyA6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICc2MDAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5Db21wdXRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBsYXlNb2RlKCcnKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBmcmllbmRQbGF5J1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUucDIgIT0gJ0NvbXB1dGVyJyA/ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigwLCAwLCAwKSAxJSwgcmdiYSg2OSwxOTcsMjM2LDEpIDEwJSwgcmdiKDI1LCAxMTYsIDEyNSkgOTUlKScgOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMuc3RhdGUucDIgIT0gJ0NvbXB1dGVyJyA/ICcxJyA6ICcwLjYnXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGJvcmRlclJhZGl1czogJzI1cHgnIH19IHNyYz0nc3RhdGljL2ltYWdlcy9zaW5nbGVfdXNlci5wbmcnIHRpdGxlPSdGcmllbmQnIC8+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiB0aGlzLnN0YXRlLnAyICE9ICdDb21wdXRlcicgPyAnYmxhY2snIDogJ3doaXRlJywgZm9udFdlaWdodDogJzYwMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PkZyaWVuZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAxfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMW5tfVxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/ICdibGFjaycgOiAnJyB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxuICAgICAgICAgICAgeygodGhpcy5zdGF0ZS5wMSAhPSAnJykgJiYgKHRoaXMuc3RhdGUucDEgPT09IHRoaXMuc3RhdGUucDIpKSAmJiA8c3BhbiBjbGFzc05hbWU9J25hbWVFcnJvclNwYW4nID5TYW1lIG5hbWVzIGFyZSBub3QgYWxsb3dlZC48L3NwYW4+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2VudGVyQnRuJyBvbkNsaWNrPXsoKSA9PiAoKHRoaXMuc3RhdGUucDEgIT0gJycpICYmICh0aGlzLnN0YXRlLnAxID09PSB0aGlzLnN0YXRlLnAyKSkgPyB7fSA6IHRoaXMuc3RhcnRHYW1lKCl9PkVOVEVSPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wbHkxe1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub25Tb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vZmZNdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDk4cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm11c2lje1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbE5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW50ZXJCdG5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDAuMnMgbGluZWFyIDIwIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZmxpY2tlci1vdXQtZ2xvdyAwLjJzIGxpbmVhciAyMCBib3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltNy5lemdpZi5jb20vdG1wL2V6Z2lmLTctMTMwYmYwYjhjNzY5LmdpZlwiKTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuWE9TcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTsgXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6bm9uZTsgXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjZDJkMjgyOyAgZm9yIFhcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICM5MmJhZTI7ICBmb3IgT1xuXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRldk1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuVFlNc2d7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWFpbkJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1haW5ib3h9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Bpbm5lcntcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmx1e1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucnV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5te1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGx7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ybHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDBweCAxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJvd0JveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXBCb3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN2VtO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAucGxheWVkQ291bnRlcntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogIGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5TW9kZU1haW5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5TW9kZXtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDAsIDApIDElLCByZ2JhKDY5LDE5NywyMzYsMSkgMTAlLCByZ2IoMjUsIDExNiwgMTI1KSA5NSUpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb21wdXRlclBsYXk6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyAnIzAxZmRmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZyaWVuZFBsYXk6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLnAyICE9ICdDb21wdXRlcicgPyAnIzAxZmRmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5hbWVFcnJvclNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZWJvYXJkRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNjb3JlU3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC13ZWJraXQteHh4LWxhcmdlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leGl0e1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTMuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzOS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS44JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHRleHQtZmxpY2tlci1vdXQtZ2xvdyB7XG4gICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMy45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE0JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS41JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjglIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA5MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZsaXAge1xuICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBzcGlubmVyIHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubXNnfTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmZvb3RlckRldntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm9uTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMjlweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAub25Tb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA2MXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICByaWdodDogMjdweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5vZmZNdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICByaWdodDogMTNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAub2ZmU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5ZXJEZXRhaWxze1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5wbGF5ZXJ9O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzM3B4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbHkxe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW50ZXJCdG5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW50ZXJCdG57XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmZpbmFsTXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG4gICAgICAgICAgICAgICAgLy8gIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnBsSGVhZGluZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5kZXZNc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuVFlNc2d7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRldk5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5wbE5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VwQm94e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDVlbTtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgLnBsYXllZENvdW50ZXJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubmFtZUVycm9yU3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZVNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhpdHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIHsvKiA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */
/*@ sourceURL=/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js */`));
  }

}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map