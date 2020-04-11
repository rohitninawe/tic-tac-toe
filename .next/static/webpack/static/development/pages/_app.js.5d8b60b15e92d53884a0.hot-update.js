webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TicTacToe; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Firebase */ "./components/Firebase.js");







var _jsxFileName = "/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2002.wav , http://foto.teoteater.ee/muusika/1001%20Sound%20Effects/Sci%20Fi/Little%20Droid%2003.wav , robot sound (wav)




var TicTacToe = /*#__PURE__*/function (_PureComponent) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TicTacToe, _PureComponent);

  var _super = _createSuper(TicTacToe);

  function TicTacToe(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TicTacToe);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onCollectionUpdate", function (querySnapshot) {
      var boards = [];
      querySnapshot.forEach(function (doc) {
        var _doc$data = doc.data(),
            player1 = _doc$data.player1,
            player2 = _doc$data.player2,
            timeStamp = _doc$data.timeStamp,
            platform = _doc$data.platform,
            browser = _doc$data.browser;

        boards.push({
          key: doc.id,
          doc: doc,
          // DocumentSnapshot
          player1: player1,
          player2: player2,
          timeStamp: timeStamp,
          platform: platform,
          browser: browser
        });
      });

      _this.setState({
        usersFromFB: boards
      }, function () {
        return console.log(_this.state.usersFromFB);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "endGame", function () {
      document.getElementById('u1').innerHTML = '';
      document.getElementById('u2').innerHTML = '';
      document.getElementById('u3').innerHTML = '';
      document.getElementById('m1').innerHTML = '';
      document.getElementById('m2').innerHTML = '';
      document.getElementById('m3').innerHTML = '';
      document.getElementById('l1').innerHTML = '';
      document.getElementById('l2').innerHTML = '';
      document.getElementById('l3').innerHTML = '';

      _this.setState({
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
        xScore: _this.state.finalmsg == 'x' ? _this.state.xScore + 1 : _this.state.xScore,
        yScore: _this.state.finalmsg == 'o' ? _this.state.yScore + 1 : _this.state.yScore
      }, function () {
        return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
          return _this.setState({
            mainbox: 'block'
          });
        }, 200);
      }); //no callback on exit

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setKey", function (e) {
      var id = e.target.id;
      var cls = e.target.className;
      var val;

      if (_this.state.won == false) {
        if (document.getElementById(id).innerHTML === '') {
          _this.setState({
            tictoc: !_this.state.tictoc
          }, function () {
            return _this.state.p2 == 'Computer' && Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              return _this.botMove(cls);
            }, 650);
          });

          if (_this.state.tictoc) {
            val = 'X';

            _this.playAudio('x');
          } else {
            val = 'O';

            _this.playAudio('o');
          }

          document.getElementById(id).innerHTML = val;
          document.getElementById(id).style.textShadow = val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2';
          Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
            _this.callWinner(cls);
          }, 500);
        }
      }

      console.log(document.getElementById(id).innerHTML);
      console.log(val);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "botMove", function (cls) {
      if (_this.state.won == false) {
        console.log('bot played');

        var randomNo = _this.randomNoFunc();

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

        if (!_this.state.tictoc && (u1 == '' || u2 == '' || u3 == '')) {
          //UH
          if (u1 == 'O' && u2 == 'O' || u2 == 'O' && u3 == 'O' || u3 == 'O' && u1 == 'O') {
            var id = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';
            (document.getElementById(id).innerHTML = 'O') && (document.getElementById(id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (m1 == '' || m2 == '' || m3 == '')) {
          //MH
          if (m1 == 'O' && m2 == 'O' || m2 == 'O' && m3 == 'O' || m3 == 'O' && m1 == 'O') {
            var _id = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';

            (document.getElementById(_id).innerHTML = 'O') && (document.getElementById(_id).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (l1 == '' || l2 == '' || l3 == '')) {
          //LH
          if (l1 == 'O' && l2 == 'O' || l2 == 'O' && l3 == 'O' || l3 == 'O' && l1 == 'O') {
            var _id2 = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';

            (document.getElementById(_id2).innerHTML = 'O') && (document.getElementById(_id2).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u1 == '' || m1 == '' || l1 == '')) {
          //LV
          if (u1 == 'O' && m1 == 'O' || m1 == 'O' && l1 == 'O' || l1 == 'O' && u1 == 'O') {
            var _id3 = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';

            (document.getElementById(_id3).innerHTML = 'O') && (document.getElementById(_id3).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u2 == '' || m2 == '' || l2 == '')) {
          //MV
          if (u2 == 'O' && m2 == 'O' || m2 == 'O' && l2 == 'O' || l2 == 'O' && u2 == 'O') {
            var _id4 = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';

            (document.getElementById(_id4).innerHTML = 'O') && (document.getElementById(_id4).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u3 == '' || m3 == '' || l3 == '')) {
          //RV
          if (u3 == 'O' && m3 == 'O' || m3 == 'O' && l3 == 'O' || l3 == 'O' && u3 == 'O') {
            var _id5 = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';

            (document.getElementById(_id5).innerHTML = 'O') && (document.getElementById(_id5).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u1 == '' || m2 == '' || l3 == '')) {
          //RD
          if (u1 == 'O' && m2 == 'O' || m2 == 'O' && l3 == 'O' || l3 == 'O' && u1 == 'O') {
            var _id6 = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';

            (document.getElementById(_id6).innerHTML = 'O') && (document.getElementById(_id6).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u3 == '' || m2 == '' || l1 == '')) {
          //LD
          if (u3 == 'O' && m2 == 'O' || m2 == 'O' && l1 == 'O' || l1 == 'O' && u3 == 'O') {
            var _id7 = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';

            (document.getElementById(_id7).innerHTML = 'O') && (document.getElementById(_id7).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (u1 == '' || u2 == '' || u3 == '') {
          //UH
          if (u1 == 'X' && u2 == 'X' || u2 == 'X' && u3 == 'X' || u3 == 'X' && u1 == 'X') {
            var _id8 = u1 == '' ? 'u1' : u2 == '' ? 'u2' : 'u3';

            (document.getElementById(_id8).innerHTML = 'O') && (document.getElementById(_id8).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (m1 == '' || m2 == '' || m3 == '')) {
          //MH
          if (m1 == 'X' && m2 == 'X' || m2 == 'X' && m3 == 'X' || m3 == 'X' && m1 == 'X') {
            var _id9 = m1 == '' ? 'm1' : m2 == '' ? 'm2' : 'm3';

            (document.getElementById(_id9).innerHTML = 'O') && (document.getElementById(_id9).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (l1 == '' || l2 == '' || l3 == '')) {
          //LH
          if (l1 == 'X' && l2 == 'X' || l2 == 'X' && l3 == 'X' || l3 == 'X' && l1 == 'X') {
            var _id10 = l1 == '' ? 'l1' : l2 == '' ? 'l2' : 'l3';

            (document.getElementById(_id10).innerHTML = 'O') && (document.getElementById(_id10).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u1 == '' || m1 == '' || l1 == '')) {
          //LV
          if (u1 == 'X' && m1 == 'X' || m1 == 'X' && l1 == 'X' || l1 == 'X' && u1 == 'X') {
            var _id11 = u1 == '' ? 'u1' : m1 == '' ? 'm1' : 'l1';

            (document.getElementById(_id11).innerHTML = 'O') && (document.getElementById(_id11).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u2 == '' || m2 == '' || l2 == '')) {
          //MV
          if (u2 == 'X' && m2 == 'X' || m2 == 'X' && l2 == 'X' || l2 == 'X' && u2 == 'X') {
            var _id12 = u2 == '' ? 'u2' : m2 == '' ? 'm2' : 'l2';

            (document.getElementById(_id12).innerHTML = 'O') && (document.getElementById(_id12).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u3 == '' || m3 == '' || l3 == '')) {
          //RV
          if (u3 == 'X' && m3 == 'X' || m3 == 'X' && l3 == 'X' || l3 == 'X' && u3 == 'X') {
            var _id13 = u3 == '' ? 'u3' : m3 == '' ? 'm3' : 'l3';

            (document.getElementById(_id13).innerHTML = 'O') && (document.getElementById(_id13).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u1 == '' || m2 == '' || l3 == '')) {
          //RD
          if (u1 == 'X' && m2 == 'X' || m2 == 'X' && l3 == 'X' || l3 == 'X' && u1 == 'X') {
            var _id14 = u1 == '' ? 'u1' : m2 == '' ? 'm2' : 'l3';

            (document.getElementById(_id14).innerHTML = 'O') && (document.getElementById(_id14).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc && (u3 == '' || m2 == '' || l1 == '')) {
          //LD
          if (u3 == 'X' && m2 == 'X' || m2 == 'X' && l1 == 'X' || l1 == 'X' && u3 == 'X') {
            var _id15 = u3 == '' ? 'u3' : m2 == '' ? 'm2' : 'l1';

            (document.getElementById(_id15).innerHTML = 'O') && (document.getElementById(_id15).style.textShadow = '6px 6px 21px #92bae2');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              _this.callWinner(cls);
            }, 500);

            _this.setState({
              tictoc: true
            });
          }
        }

        if (!_this.state.tictoc) {
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
            var _id16 = oddNos[Math.floor(Math.random() * oddNos.length)];
            (document.getElementById(_id16).innerHTML = 'O') && (document.getElementById(_id16).style.textShadow = '6px 6px 21px #92bae2') && _this.setState({
              tictoc: true
            });
          } else if (evenNos.length > 0) {
            var _id17 = evenNos[Math.floor(Math.random() * evenNos.length)];
            (document.getElementById(_id17).innerHTML = 'O') && (document.getElementById(_id17).style.textShadow = '6px 6px 21px #92bae2') && _this.setState({
              tictoc: true
            });
          }
        }
      }

      _this.state.tictoc && _this.playAudio('o'); // this.setState({
      //   tictoc: true
      // })
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "callWinner", function (cls) {
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

      if (_this.state.won == false) {
        if (u1 != '' && u2 != '' && u3 != '') {
          if (u1 === u2 && u1 == u3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('u3').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (m1 != '' && m2 != '' && m3 != '') {
          if (m1 == m2 && m1 == m3) {
            document.getElementById('m1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';

            if (m1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (l1 != '' && l2 != '' && l3 != '') {
          if (l1 == l2 && l1 == l3) {
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (l1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && m1 != '' && l1 != '') {
          if (u1 == l1 && u1 == m1) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';
            document.getElementById('m1').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u2 != '' && m2 != '' && l2 != '') {
          if (u2 == m2 && u2 == l2) {
            document.getElementById('u2').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l2').className = cls + ' spinner';

            if (u2 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u3 != '' && l3 != '' && m3 != '') {
          if (u3 == m3 && u3 == l3) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m3').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u3 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && m2 != '' && l3 != '') {
          if (u1 == m2 && u1 == l3) {
            document.getElementById('u1').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l3').className = cls + ' spinner';

            if (u1 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u3 != '' && m2 != '' && l1 != '') {
          if (u3 == m2 && u3 == l1) {
            document.getElementById('u3').className = cls + ' spinner';
            document.getElementById('m2').className = cls + ' spinner';
            document.getElementById('l1').className = cls + ' spinner';

            if (u3 == 'X') {
              _this.setState({
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 4000);
              });
            }
          }
        }
      }

      if (_this.state.won == false) {
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

          _this.setState({
            won: false,
            finalmsg: 'g'
          }, function () {
            _this.playAudio('gover');

            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              return _this.endGame();
            }, 4000);
          });
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "p1nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p1: val
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "p2nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p2: val
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "startGame", function () {
      var db = _components_Firebase__WEBPACK_IMPORTED_MODULE_10__["default"].firestore();
      db.collection('users').add({
        player1: _this.state.p1,
        player2: _this.state.p2,
        timeStamp: new Date(),
        platform: window.navigator.appVersion,
        browser: window.navigator.vendor
      });

      _this.setState({
        player: 'none',
        mainbox: 'block'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleMusic", function () {
      _this.setState({
        music: !_this.state.music
      }, function () {
        if (_this.state.music) {
          _this.start.play();
        } else if (!_this.state.music) {
          _this.start.pause();
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setPlayMode", function (val) {
      _this.setState({
        p2: val
      });
    });

    _this.ref = _components_Firebase__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection('users');
    _this.unsubscribe = null;
    _this.state = {
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

    _this.playAudio = function (val) {
      if (_this.state.audio) {
        switch (val) {
          case 'x':
            _this.x.play();

            break;

          case 'o':
            _this.o.play();

            break;

          case 'win':
            _this.win.play();

            break;

          case 'gover':
            _this.gover.play();

            break;

          default:
            console.log('no sound');
            break;
        }
      }
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TicTacToe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
        _this2.setState({
          msg: 'none',
          player: 'block'
        });
      }, 2000);
    }
  }, {
    key: "randomNoFunc",
    value: function randomNoFunc() {
      var c = Math.round(Math.random() * 10);
      return c == 0 ? c + 5 : c > 9 ? c - 5 : c;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.won == true) {
        this.playAudio('win');
      }

      console.log(this.state.tictoc);
      return __jsx("div", {
        id: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'body',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playedCounter',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 9
        }
      }, "Played ", this.state.usersFromFB.length, " times"), this.state.music == true && __jsx("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "static/images/music-on.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653,
          columnNumber: 11
        }
      }), this.state.music == false && __jsx("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "static/images/music-off.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 11
        }
      }), this.state.audio == true && __jsx("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: false
          });
        },
        src: "static/images/sound-on.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onSound',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 11
        }
      }), this.state.audio == false && __jsx("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: true
          });
        },
        src: "static/images/sound-off.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offSound',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'msg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 9
        }
      }, "Welcome to Tic-Toc-Toe"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'footerDev',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 9
        }
      }, "Developed By Rohit Ninawe"), __jsx("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "https://docs.google.com/uc?export=download&id=1vAeUlZ_u9b2AYUuP8s97gddOOq_GAD6a",
        type: "audio/ogg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "https://docs.google.com/uc?export=download&id=1Mt9oBPe83VTq1AcoHcLnnHEnilSTwhkJ",
        type: "audio/ogg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "https://docs.google.com/uc?export=download&id=1HRQJ_yFme5GBuXWDhaZ6sEpYinSRhdR2",
        type: "audio/ogg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(gover) {
          _this3.gover = gover;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "https://docs.google.com/uc?export=download&id=1hLHQK9mgeoj3NbAZ8EmAkwNVJcLLf0KJ",
        type: "audio/ogg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 11
        }
      })), __jsx("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "https://docs.google.com/uc?export=download&id=1M9EbakeoX-uQhlbxI_zGT2QNuXBf0D7X",
        type: "audio/ogg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 687,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'scoreboardDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 688,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'scoreSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 15
        }
      }, this.state.xScore, " - ", this.state.yScore)), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692,
          columnNumber: 15
        }
      }, "Player 1"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 15
        }
      }, "Player 2")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plName',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 695,
          columnNumber: 13
        }
      }, __jsx("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 15
        }
      }, " ", this.state.p1, " "), __jsx("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697,
          columnNumber: 15
        }
      }, " ", this.state.p2, " "))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700,
          columnNumber: 11
        }
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 40
        }
      }, "Player 1 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 68
        }
      }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707,
          columnNumber: 42
        }
      }, "Player 2 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707,
          columnNumber: 70
        }
      }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 48
        }
      }, "Game Over")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'box',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 716,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 717,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 732,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 740,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playModeMainDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 762,
          columnNumber: 11
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this3.setPlayMode('Computer');
        },
        style: {
          background: this.state.p2 == 'Computer' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
          opacity: this.state.p2 == 'Computer' ? '1' : '0.6'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode computerPlay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 763,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 768,
          columnNumber: 15
        }
      }), __jsx("span", {
        style: {
          color: this.state.p2 == 'Computer' ? 'black' : 'white',
          fontWeight: '600',
          marginTop: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
          columnNumber: 15
        }
      }, "Computer")), __jsx("div", {
        onClick: function onClick() {
          return _this3.setPlayMode('');
        },
        style: {
          width: '70px',
          background: this.state.p2 == '' ? 'linear-gradient(90deg, rgb(0, 0, 0) 1%, rgba(69,197,236,1) 10%, rgb(25, 116, 125) 95%)' : 'black',
          opacity: this.state.p2 == '' ? '1' : '0.6'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode friendPlay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771,
          columnNumber: 13
        }
      }, __jsx("img", {
        style: {
          width: '50px',
          borderRadius: '25px'
        },
        src: "static/images/single_user.png",
        title: "Friend",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776,
          columnNumber: 15
        }
      }), __jsx("span", {
        style: {
          color: this.state.p2 == '' ? 'black' : 'white',
          fontWeight: '600',
          marginTop: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777,
          columnNumber: 15
        }
      }, "Friend"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 780,
          columnNumber: 11
        }
      }, __jsx("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        autoFocus: true,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797,
          columnNumber: 11
        }
      }, this.state.p1 != '' && this.state.p1 === this.state.p2 && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'nameErrorSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798,
          columnNumber: 78
        }
      }, "Same names are not allowed."), __jsx("button", {
        onClick: function onClick() {
          return _this3.state.p1 != '' && _this3.state.p1 === _this3.state.p2 ? {} : _this3.startGame();
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1008873352", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799,
          columnNumber: 13
        }
      }, "ENTER"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1008873352",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;position:relative;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 0.2s linear 20 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}.playedCounter.__jsx-style-dynamic-selector{position:absolute;top:10px;left:10px;}.playModeMainDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-bottom:40px;}.playMode.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid white;padding:20px;background:linear-gradient(90deg,rgb(0,0,0) 1%,rgba(69,197,236,1) 10%,rgb(25,116,125) 95%);border-radius:5px;position:relative;}.computerPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:").concat(this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', ";border-radius:2px;}.friendPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:").concat(this.state.p2 == '' ? '#01fdff' : 'transparent', ";border-radius:2px;}.nameErrorSpan.__jsx-style-dynamic-selector{color:red;font-size:larger;position:absolute;top:20px;}.scoreboardDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.scoreSpan.__jsx-style-dynamic-selector{font-size:-webkit-xxx-large;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:333px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}.playedCounter.__jsx-style-dynamic-selector{font-size:small;top:20px;left:15px;}.nameErrorSpan.__jsx-style-dynamic-selector{font-size:small;top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFreUJXLEFBRzJCLEFBVVEsQUFPQSxBQU9MLEFBTUssQUFPQSxBQU9BLEFBS04sQUFHQyxBQUdELEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU9GLEFBS2lELEFBUXJDLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVFNLEFBS04sQUFRRSxBQVVKLEFBU0EsQUFTRCxBQU1HLEFBSWUsQUFJaEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFLQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQU1vRixBQU1sRSxBQU1BLEFBTUgsQUFLa0UsQUFNaEUsQUFHRSxBQUtMLEFBR0UsQUFNUyxBQU9uQixBQU1BLEFBUUEsQUFRQSxBQVFBLEFBT21CLEFBSzNCLEFBVUcsQUFNRCxBQVdBLEFBSUMsQUFRQSxBQWFBLEFBUUEsQUFTRCxBQUlBLEFBS0MsQUFPQSxBQVFHLEFBS0EsVUFsc0JBLEFBeVBDLEFBYzRJLEFBSUEsQUFJMUksQUFJQSxBQUl5SSxBQUlBLEFBSXpJLEFBSUEsQUFJc0csQUFJQSxBQUl0RyxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUlrRSxBQUlBLEFBSUEsQUFJbEUsQUFJQSxBQUlrRSxBQUlBLEFBSWxFLEFBSUEsQUFJOEIsQUFJOUIsQUFJQSxBQUlBLEFBSUEsQUFJbkIsQUFLNkosQUFJQSxBQUkxSSxBQUlBLEFBSXlJLEFBSUEsQUFJekksQUFJQSxBQUlzRyxBQUlBLEFBSXRHLEFBSUEsQUFJa0UsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUk4QixBQUk5QixBQUlBLEFBSUEsQUFJQSxBQUluQixBQXFHaUIsQ0EvZ0JKLEFBcUpLLEFBU0EsQ0EvTHBCLEFBTUEsQUFnRXdCLEFBa0JSLEFBSUEsQUFvZVEsQUFXeEIsQUEwQ2tCLEFBSUEsQ0F0bkJsQixBQWdHYyxBQW9EQyxBQWdjRCxBQThDQyxDQWxmQSxFQTBmSixBQUtELEVBenJCQyxBQU9DLEFBYUQsQUFPQSxBQU9HLEFBb0tILEFBdVdHLEFBTUgsQUFRQSxBQVFBLEFBUUEsQ0EvYVUsQUFVQSxBQUtBLEFBS0EsQUFLQSxJQWhHTixDQXFtQmYsQ0EvaUJpQixBQW9mQSxBQXNETCxDQTlyQkUsQUF5SWQsQUFJQSxDQW5JYSxBQW9CQSxBQU9BLEFBMktELEFBeUNRLEFBc0JsQixBQUlBLEFBWUEsQUFJQSxBQVlBLEFBSUEsQUFZQSxBQUlBLEFBZ0JBLEFBSUEsQUFZQSxBQUlBLEFBUUEsQUFJQSxBQUlBLEFBSUEsQUFpQkEsQUFJQSxBQVlBLEFBSUEsQUFZQSxBQUlBLEFBWUEsQUFJQSxBQWdCQSxBQUlBLEFBWUEsQUFJQSxBQVFBLEFBSUEsQUFJQSxBQUlBLEFBcUVlLEFBUUEsQUFRQSxBQVFBLEFBWUgsQ0FobEJELEFBaVBiLEFBb2FBLEFBSUEsQ0FuY2EsQUFTQSxDQXBNTSxBQTJnQkMsSUFoY0EsQUEwZkEsQ0E4RXBCLENBaG1CZSxDQXhCZixBQXlFRSxBQTBCWSxBQXVDZCxBQThWYyxBQTRDQSxDQTFsQk8sQUFVUCxBQW9CQSxBQU9BLEFBZ0lpQixBQVVBLEFBS1osQUFLWSxBQUtBLENBN0tqQixBQWdsQk8sQ0E3Y1EsQUFtRmhCLEFBU0EsQUF3WmlCLEVBM0VqQixBQVFBLEFBUUEsQUFRQSxHQTVWRixFQTdNWCxDQTJnQkEsQ0E3WWdCLEFBcVlFLEFBNENILENBaGxCRSxBQW9CQSxBQU9BLENBcEJBLEFBc05GLEFBU0EsQ0ExSEEsQUEwZkEsQ0FuREQsQUFRQSxBQVFBLEFBUUEsQ0E1VmQsQUFnSEUsQUE2SEEsQ0FsVEYsRUFwTGtCLENBaW1CQSxFQTdnQjRDLEVBdWdCOUQsQ0FqYkEsQ0E4RGdELEFBU0EsQ0F0T2hELEFBb0JBLEFBT0EsQUFpRmMsQUF3YlEsQUFldEIsQUFRQSxBQVFBLEFBUUEsQUEyQmMsQ0EvbEJkLENBbUpBLEFBVUEsQUFVQSxBQUtBLE1BN0xvQixDQW9CSyxBQWtDTyxBQU9BLEFBVVAsQUE0QkEsQUEwQkQsQUFvRk8sQUFRTCxBQWtDRCxBQXNXTCxBQU1LLEFBcUJBLEFBcUJPLEFBUVIsQUFrQlEsR0FwakJsQixBQTBmQSxJQXRGVixBQVFGLElBcGQ4QixBQWdlaEMsQ0EzUEUsQUFJQSxBQVlBLEFBSUEsQUFJQSxBQVlBLEFBSUEsQUFxRkEsQUFJQSxBQVlBLEFBSUEsQUFJQSxBQVlBLEFBSUEsQ0FwUlksQUF5VlQsQUFRSCxBQTZJWSxDQWxmZCxDQXpFa0IsQUEwZkMsRUFqbkJKLENBaW1CQSxPQTVaVSxBQThlQSxLQWxyQkgsQUFpSkQsQUFvZkMsQ0E5Z0JBLEFBMGVBLENBZ0JBLElBdGhCRyxBQTJJTCxBQVNBLEVBckZRLE1Bd0kxQixBQUlBLEFBeUhBLEFBSUEsTUFsYUYsQ0F1SEEsQUEwZUEsQ0FnQkEsRUEzWUEsQUFTQSxxQkFrQ0UsQUFJQSxBQXlIQSxBQUlBLENBakpBLEFBSUEsQUF5SEEsQUFJQSxFQXZRWSxBQTRGUyxBQWdjVCxZQTNoQkMsQUE0aEJBLFFBOWZzQixDQXhJakIsQUFtREMsQUE0QkEsQUF3SnJCLEFBNFdxQixBQXFCRCxJQTdmVyxBQTRoQkEsWUFybUJULEFBT0EsQUFvbEJBLEFBMEJBLEVBdHBCUCxBQXdtQkQsTUE1YUQsQ0FYUSxBQThlQSxFQXJtQnJCLEdBK2lCbUIsQ0F4bUJuQixJQTRMaUIsQ0EzSkMsQUFPQSxBQStCRyxBQXFqQkgsQUEwQkEsQ0F4aEJVLEFBb2ZDLFVBVDdCLEdBNWEwQyxFQTNKeEIsQUFPRixBQW9sQkUsQUEwQkYsS0ExbEJoQixTQW5CQSxBQThtQkEsRUFybkJBLEFBMmxCQSxJQTFiMkIsS0E3RFEsYUF1RGQsQ0FnVWlCLEVBNWN2QixBQTRCRCxBQW9nQkEsRUE3WUcsRUF0RWEsQUFvZkMsR0E1SVEsS0F4WjFCLEFBb2dCYixDQWhpQm9CLEVBbUprRixDQVB0RyxHQThTdUMsQUFNRCxJQW5hWixFQWlHVixBQXdVc0IsQUFzS3RCLE1BM21CaEIsR0FzRHFCLEFBNGhCQSxFQTlqQkQsR0EwR3BCLEFBOGVBLFNBL2tCNEIsTUFSNUIsSUErREEsVUFSbUMsQUFvZkMsTUFySGxDLENBN2FxQixVQXNackIsVUFZQSxFQWphb0IsQUEyWnBCLElBWUEsS0FuVG9CLFlBbkhKLE1Bb0hJLEdBN0Z0QixBQTRoQnFCLGVBdGdCcUIsQUF3RTFDLEFBNGEyQyxJQW1CM0Msb0NBdGdCQSxBQW9mQSxxQkFqaUJBIiwiZmlsZSI6Ii9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHA6Ly9mb3RvLnRlb3RlYXRlci5lZS9tdXVzaWthLzEwMDElMjBTb3VuZCUyMEVmZmVjdHMvU2NpJTIwRmkvTGl0dGxlJTIwRHJvaWQlMjAwMi53YXYgLCBodHRwOi8vZm90by50ZW90ZWF0ZXIuZWUvbXV1c2lrYS8xMDAxJTIwU291bmQlMjBFZmZlY3RzL1NjaSUyMEZpL0xpdHRsZSUyMERyb2lkJTIwMDMud2F2ICwgcm9ib3Qgc291bmQgKHdhdilcblxuXG5cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2UnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMucmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aWN0b2M6IHRydWUsXG4gICAgICBtc2c6ICdibG9jaycsXG4gICAgICBtYWluYm94OiAnbm9uZScsXG4gICAgICBwbGF5ZXI6ICdub25lJyxcbiAgICAgIGZpbmFsbXNnOiAnJyxcbiAgICAgIHAxOiAnJyxcbiAgICAgIHAyOiAnQ29tcHV0ZXInLFxuICAgICAgd29uOiBmYWxzZSxcbiAgICAgIG11c2ljOiBmYWxzZSxcbiAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgdXNlcnNGcm9tRkI6IFtdLFxuICAgICAgeFNjb3JlOiAwLFxuICAgICAgeVNjb3JlOiAwLFxuICAgIH1cbiAgICB0aGlzLnBsYXlBdWRpbyA9ICh2YWwpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvKSB7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICB0aGlzLngucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICB0aGlzLm8ucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnd2luJzpcbiAgICAgICAgICAgIHRoaXMud2luLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2dvdmVyJzpcbiAgICAgICAgICAgIHRoaXMuZ292ZXIucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzb3VuZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnJlZi5vblNuYXBzaG90KHRoaXMub25Db2xsZWN0aW9uVXBkYXRlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1zZzogJ25vbmUnLFxuICAgICAgICBwbGF5ZXI6ICdibG9jaycsXG4gICAgICB9KVxuICAgIH0sIDIwMDApXG4gIH1cblxuICBvbkNvbGxlY3Rpb25VcGRhdGUgPSAocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkcyA9IFtdO1xuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBjb25zdCB7IHBsYXllcjEsIHBsYXllcjIsIHRpbWVTdGFtcCwgcGxhdGZvcm0sIGJyb3dzZXIgfSA9IGRvYy5kYXRhKCk7XG4gICAgICBib2FyZHMucHVzaCh7XG4gICAgICAgIGtleTogZG9jLmlkLFxuICAgICAgICBkb2MsIC8vIERvY3VtZW50U25hcHNob3RcbiAgICAgICAgcGxheWVyMSwgcGxheWVyMiwgdGltZVN0YW1wLCBwbGF0Zm9ybSwgYnJvd3NlclxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2Vyc0Zyb21GQjogYm9hcmRzXG4gICAgfSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5zdGF0ZS51c2Vyc0Zyb21GQikpO1xuICB9XG5cbiAgZW5kR2FtZSA9ICgpID0+IHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTCA9ICcnO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aWN0b2M6IHRydWUsXG4gICAgICBtc2c6ICdub25lJyxcbiAgICAgIHBsYXllcjogJ25vbmUnLCAvL2Jsb2NrXG4gICAgICBtYWluYm94OiAnbm9uZScsICAvL25vbmVcbiAgICAgIHAxOiAnJyxcbiAgICAgIHAyOiAnQ29tcHV0ZXInLFxuICAgICAgd29uOiBmYWxzZSxcbiAgICAgIGRldjogZmFsc2UsXG4gICAgICAvLyBmaW5hbG1zZzogJycsXG4gICAgICB4U2NvcmU6IHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ3gnID8gdGhpcy5zdGF0ZS54U2NvcmUgKyAxIDogdGhpcy5zdGF0ZS54U2NvcmUsXG4gICAgICB5U2NvcmU6IHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ28nID8gdGhpcy5zdGF0ZS55U2NvcmUgKyAxIDogdGhpcy5zdGF0ZS55U2NvcmUsXG4gICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWFpbmJveDogJ2Jsb2NrJyB9KSwgMjAwKSkgIC8vbm8gY2FsbGJhY2sgb24gZXhpdFxuICB9XG5cbiAgc2V0S2V5ID0gKGUpID0+IHtcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcbiAgICB2YXIgY2xzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIHZhciB2YWw7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInICYmIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ib3RNb3ZlKGNscyksIDY1MCkpXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGljdG9jKSB7XG4gICAgICAgICAgdmFsID0gJ1gnXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ3gnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhbCA9ICdPJ1xuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdvJylcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSB2YWw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gKHZhbCA9PSAnWCcgPyAnNnB4IDZweCAyMXB4ICNkMmQyODInIDogJzZweCA2cHggMjFweCAjOTJiYWUyJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxsV2lubmVyKGNscylcbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MKVxuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgfVxuXG4gIHJhbmRvbU5vRnVuYygpIHtcbiAgICB2YXIgYyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIHJldHVybiBjID09IDAgPyBjICsgNSA6IGMgPiA5ID8gYyAtIDUgOiBjXG4gIH1cblxuICBib3RNb3ZlID0gKGNscykgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coJ2JvdCBwbGF5ZWQnKVxuICAgICAgdmFyIHJhbmRvbU5vID0gdGhpcy5yYW5kb21Ob0Z1bmMoKVxuICAgICAgY29uc29sZS5sb2cocmFuZG9tTm8pXG5cbiAgICAgIHZhciB1MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTDtcbiAgICAgIHZhciB1MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTDtcbiAgICAgIHZhciB1MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTDtcblxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCB1MiA9PSAnJyB8fCB1MyA9PSAnJykpIHsgICAvL1VIXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIHUyID09ICdPJykgfHwgKHUyID09ICdPJyAmJiB1MyA9PSAnTycpIHx8ICh1MyA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IHUyID09ICcnID8gJ3UyJyA6ICd1Myc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChtMSA9PSAnJyB8fCBtMiA9PSAnJyB8fCBtMyA9PSAnJykpIHsgICAgLy9NSFxuICAgICAgICBpZiAoKG0xID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbTMgPT0gJ08nKSB8fCAobTMgPT0gJ08nICYmIG0xID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBtMSA9PSAnJyA/ICdtMScgOiBtMiA9PSAnJyA/ICdtMicgOiAnbTMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAobDEgPT0gJycgfHwgbDIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vTEhcbiAgICAgICAgaWYgKChsMSA9PSAnTycgJiYgbDIgPT0gJ08nKSB8fCAobDIgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiBsMSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gbDEgPT0gJycgPyAnbDEnIDogbDIgPT0gJycgPyAnbDInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IG0xID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xWXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIG0xID09ICdPJykgfHwgKG0xID09ICdPJyAmJiBsMSA9PSAnTycpIHx8IChsMSA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IG0xID09ICcnID8gJ20xJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MiA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMiA9PSAnJykpIHsgICAgLy9NVlxuICAgICAgICBpZiAoKHUyID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbDIgPT0gJ08nKSB8fCAobDIgPT0gJ08nICYmIHUyID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MiA9PSAnJyA/ICd1MicgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDInO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTMgPT0gJycgfHwgbTMgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUlZcbiAgICAgICAgaWYgKCh1MyA9PSAnTycgJiYgbTMgPT0gJ08nKSB8fCAobTMgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiB1MyA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTMgPT0gJycgPyAndTMnIDogbTMgPT0gJycgPyAnbTMnIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IG0yID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL1JEXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMyA9PSAnTycpIHx8IChsMyA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMSA9PSAnJykpIHsgICAgLy9MRFxuICAgICAgICBpZiAoKHUzID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbDEgPT0gJ08nKSB8fCAobDEgPT0gJ08nICYmIHUzID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDEnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1MSA9PSAnJyB8fCB1MiA9PSAnJyB8fCB1MyA9PSAnJykgeyAgIC8vVUhcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgdTIgPT0gJ1gnKSB8fCAodTIgPT0gJ1gnICYmIHUzID09ICdYJykgfHwgKHUzID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogdTIgPT0gJycgPyAndTInIDogJ3UzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKG0xID09ICcnIHx8IG0yID09ICcnIHx8IG0zID09ICcnKSkgeyAgICAvL01IXG4gICAgICAgIGlmICgobTEgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBtMyA9PSAnWCcpIHx8IChtMyA9PSAnWCcgJiYgbTEgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IG0xID09ICcnID8gJ20xJyA6IG0yID09ICcnID8gJ20yJyA6ICdtMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChsMSA9PSAnJyB8fCBsMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9MSFxuICAgICAgICBpZiAoKGwxID09ICdYJyAmJiBsMiA9PSAnWCcpIHx8IChsMiA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIGwxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBsMSA9PSAnJyA/ICdsMScgOiBsMiA9PSAnJyA/ICdsMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTEgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTFZcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgbTEgPT0gJ1gnKSB8fCAobTEgPT0gJ1gnICYmIGwxID09ICdYJykgfHwgKGwxID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTEgPT0gJycgPyAnbTEnIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUyID09ICcnIHx8IG0yID09ICcnIHx8IGwyID09ICcnKSkgeyAgICAvL01WXG4gICAgICAgIGlmICgodTIgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBsMiA9PSAnWCcpIHx8IChsMiA9PSAnWCcgJiYgdTIgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUyID09ICcnID8gJ3UyJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMic7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMyA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SVlxuICAgICAgICBpZiAoKHUzID09ICdYJyAmJiBtMyA9PSAnWCcpIHx8IChtMyA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIHUzID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMyA9PSAnJyA/ICdtMycgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUkRcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwzID09ICdYJykgfHwgKGwzID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTIgPT0gJycgPyAnbTInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0yID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xEXG4gICAgICAgIGlmICgodTMgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBsMSA9PSAnWCcpIHx8IChsMSA9PSAnWCcgJiYgdTMgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpY3RvYykge1xuICAgICAgICB2YXIgb2RkTm9zID0gW107IC8vJ3UxJywgJ3UzJywgJ20yJywgJ2wxJywgJ2wzJ1xuICAgICAgICB2YXIgZXZlbk5vcyA9IFtdOyAvL3UyLCBtMSwgbTMsIGwyXG4gICAgICAgIHUxID09ICcnICYmIG9kZE5vcy5wdXNoKCd1MScpO1xuICAgICAgICB1MyA9PSAnJyAmJiBvZGROb3MucHVzaCgndTMnKTtcbiAgICAgICAgbTIgPT0gJycgJiYgb2RkTm9zLnB1c2goJ20yJyk7XG4gICAgICAgIGwxID09ICcnICYmIG9kZE5vcy5wdXNoKCdsMScpO1xuICAgICAgICBsMyA9PSAnJyAmJiBvZGROb3MucHVzaCgnbDMnKTtcbiAgICAgICAgdTIgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCd1MicpO1xuICAgICAgICBtMSA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ20xJyk7XG4gICAgICAgIG0zID09ICcnICYmIGV2ZW5Ob3MucHVzaCgnbTMnKTtcbiAgICAgICAgbDIgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCdsMicpO1xuXG4gICAgICAgIGlmIChvZGROb3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBpZCA9IG9kZE5vc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvZGROb3MubGVuZ3RoKV07XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVuTm9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgaWQgPSBldmVuTm9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGV2ZW5Ob3MubGVuZ3RoKV07XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlLnRpY3RvYyAmJiB0aGlzLnBsYXlBdWRpbygnbycpXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICB0aWN0b2M6IHRydWVcbiAgICAvLyB9KVxuICB9XG5cbiAgY2FsbFdpbm5lciA9IChjbHMpID0+IHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICB2YXIgdTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUw7XG4gICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xuICAgIHZhciB1MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTDtcbiAgICB2YXIgbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUw7XG4gICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xuICAgIHZhciBtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTDtcbiAgICB2YXIgbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUw7XG4gICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xuICAgIHZhciBsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTDtcblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT09IHUyKSAmJiAodTEgPT0gdTMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKChtMSA9PSBtMikgJiYgKG0xID09IG0zKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAobTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuICAgICAgICBpZiAoKGwxID09IGwyKSAmJiAobDEgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmIChsMSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAobTEgIT0gJycpICYmIChsMSAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MSA9PSBsMSkgJiYgKHUxID09IG0xKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MiAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDIgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTIgPT0gbTIpICYmICh1MiA9PSBsMikpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUyID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChsMyAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUzID09IG0zKSAmJiAodTMgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MyA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT0gbTIpICYmICh1MSA9PSBsMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMSAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MyA9PSBtMikgJiYgKHUzID09IGwxKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpICYmIChsMSAhPSAnJykgJiYgKGwyICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XG5cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB3b246IGZhbHNlLFxuICAgICAgICAgIGZpbmFsbXNnOiAnZydcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdnb3ZlcicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwMW5tID0gKGUpID0+IHtcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwMTogdmFsXG4gICAgfSlcbiAgfVxuXG4gIHAybm0gPSAoZSkgPT4ge1xuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHAyOiB2YWxcbiAgICB9KVxuICB9XG5cbiAgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG4gICAgbGV0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5hZGQoXG4gICAgICB7XG4gICAgICAgIHBsYXllcjE6IHRoaXMuc3RhdGUucDEsXG4gICAgICAgIHBsYXllcjI6IHRoaXMuc3RhdGUucDIsXG4gICAgICAgIHRpbWVTdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgcGxhdGZvcm06IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbixcbiAgICAgICAgYnJvd3Nlcjogd2luZG93Lm5hdmlnYXRvci52ZW5kb3JcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGF5ZXI6ICdub25lJyxcbiAgICAgIG1haW5ib3g6ICdibG9jaycsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU11c2ljID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbXVzaWM6ICF0aGlzLnN0YXRlLm11c2ljXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubXVzaWMpIHtcbiAgICAgICAgdGhpcy5zdGFydC5wbGF5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5tdXNpYykge1xuICAgICAgICB0aGlzLnN0YXJ0LnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFBsYXlNb2RlID0gKHZhbCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcDI6IHZhbFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IHRydWUpIHtcbiAgICAgIHRoaXMucGxheUF1ZGlvKCd3aW4nKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpY3RvYylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGF5ZWRDb3VudGVyJz5QbGF5ZWQge3RoaXMuc3RhdGUudXNlcnNGcm9tRkIubGVuZ3RofSB0aW1lczwvc3Bhbj5cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gdHJ1ZSAmJlxuICAgICAgICAgIDxpbWcgdGl0bGU9J1R1cm4gT2ZmIE11c2ljJyBjbGFzc05hbWU9J29uTXVzaWMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTXVzaWN9IHNyYz0nc3RhdGljL2ltYWdlcy9tdXNpYy1vbi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9uIE11c2ljJyBjbGFzc05hbWU9J29mZk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J3N0YXRpYy9pbWFnZXMvbXVzaWMtb2ZmLnBuZycgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSB0cnVlICYmXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29uU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogZmFsc2UgfSl9IHNyYz0nc3RhdGljL2ltYWdlcy9zb3VuZC1vbi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuYXVkaW8gPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2ZmU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogdHJ1ZSB9KX0gc3JjPSdzdGF0aWMvaW1hZ2VzL3NvdW5kLW9mZi5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtc2cnPldlbGNvbWUgdG8gVGljLVRvYy1Ub2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyRGV2Jz5EZXZlbG9wZWQgQnkgUm9oaXQgTmluYXdlPC9zcGFuPlxuICAgICAgICA8YXVkaW8gcmVmPXsoeCkgPT4geyB0aGlzLnggPSB4OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xdkFlVWxaX3U5YjJBWVV1UDhzOTdnZGRPT3FfR0FENmFcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsobykgPT4geyB0aGlzLm8gPSBvOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xTXQ5b0JQZTgzVlRxMUFjb0hjTG5uSEVuaWxTVHdoa0pcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsod2luKSA9PiB7IHRoaXMud2luID0gd2luOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xSFJRSl95Rm1lNUdCdVhXRGhhWjZzRXBZaW5TUmhkUjJcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsoZ292ZXIpID0+IHsgdGhpcy5nb3ZlciA9IGdvdmVyOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xaExIUUs5bWdlb2ozTmJBWjhFbUFrd05WSmNMTGYwS0pcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gbG9vcD17dHJ1ZX0gcmVmPXsoc3RhcnQpID0+IHsgdGhpcy5zdGFydCA9IHN0YXJ0OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3VjP2V4cG9ydD1kb3dubG9hZCZpZD0xTTlFYmFrZW9YLXVRaGxieElfekdUMlFOdVhCZjBEN1hcIiB0eXBlPVwiYXVkaW8vb2dnXCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkJveCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZWJvYXJkRGl2Jz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzY29yZVNwYW4nPnt0aGlzLnN0YXRlLnhTY29yZX0gLSB7dGhpcy5zdGF0ZS55U2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxIZWFkaW5nJz5cbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMn0gPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmFsTXNnJz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndvbiA9PSB0cnVlID9cbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ3gnXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAxID09ICcnID8gPHNwYW4+UGxheWVyIDEgd29uPC9zcGFuPiA6IDxzcGFuPnt0aGlzLnN0YXRlLnAxICsgJyB3b24nfTwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdvJyA/XG4gICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wMiA9PSAnJyA/IDxzcGFuPlBsYXllciAyIHdvbjwvc3Bhbj4gOiA8c3Bhbj4ge3RoaXMuc3RhdGUucDIgKyAnIHdvbid9IDwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICA6IG51bGwpKVxuICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdnJyAmJiA8c3Bhbj5HYW1lIE92ZXI8L3NwYW4+KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHUgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfSBpZD0ndTEnID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UyJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J1IHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UzJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20gc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gdGhpcy5zdGF0ZS50aWN0b2MgPyB0aGlzLnNldEtleShlKSA6IHt9IDogdGhpcy5zZXRLZXkoZSlcbiAgICAgICAgICAgICAgICB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsbCBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JsIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wzJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJEZXRhaWxzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheU1vZGVNYWluRGl2Jz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQbGF5TW9kZSgnQ29tcHV0ZXInKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBjb21wdXRlclBsYXknXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDAsIDApIDElLCByZ2JhKDY5LDE5NywyMzYsMSkgMTAlLCByZ2IoMjUsIDExNiwgMTI1KSA5NSUpJyA6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJzEnIDogJzAuNidcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcsIGhlaWdodDogJzcwcHgnIH19IHNyYz0nc3RhdGljL2ltYWdlcy9ib3QucG5nJyB0aXRsZT0nQm90JyAvPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2JsYWNrJyA6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICc2MDAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5Db21wdXRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBsYXlNb2RlKCcnKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBmcmllbmRQbGF5J1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUucDIgPT0gJycgPyAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMCwgMCkgMSUsIHJnYmEoNjksMTk3LDIzNiwxKSAxMCUsIHJnYigyNSwgMTE2LCAxMjUpIDk1JSknIDogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnAyID09ICcnID8gJzEnIDogJzAuNidcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcgfX0gc3JjPSdzdGF0aWMvaW1hZ2VzL3NpbmdsZV91c2VyLnBuZycgdGl0bGU9J0ZyaWVuZCcgLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJycgPyAnYmxhY2snIDogJ3doaXRlJywgZm9udFdlaWdodDogJzYwMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PkZyaWVuZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAxfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMW5tfVxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/ICdibGFjaycgOiAnJyB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxuICAgICAgICAgICAgeygodGhpcy5zdGF0ZS5wMSAhPSAnJykgJiYgKHRoaXMuc3RhdGUucDEgPT09IHRoaXMuc3RhdGUucDIpKSAmJiA8c3BhbiBjbGFzc05hbWU9J25hbWVFcnJvclNwYW4nID5TYW1lIG5hbWVzIGFyZSBub3QgYWxsb3dlZC48L3NwYW4+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2VudGVyQnRuJyBvbkNsaWNrPXsoKSA9PiAoKHRoaXMuc3RhdGUucDEgIT0gJycpICYmICh0aGlzLnN0YXRlLnAxID09PSB0aGlzLnN0YXRlLnAyKSkgPyB7fSA6IHRoaXMuc3RhcnRHYW1lKCl9PkVOVEVSPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wbHkxe1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub25Tb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vZmZNdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDk4cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm11c2lje1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbE5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW50ZXJCdG5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDAuMnMgbGluZWFyIDIwIGJvdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRleHQtZmxpY2tlci1vdXQtZ2xvdyAwLjJzIGxpbmVhciAyMCBib3RoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltNy5lemdpZi5jb20vdG1wL2V6Z2lmLTctMTMwYmYwYjhjNzY5LmdpZlwiKTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuWE9TcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTsgXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6bm9uZTsgXG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjZDJkMjgyOyAgZm9yIFhcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICM5MmJhZTI7ICBmb3IgT1xuXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRldk1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuVFlNc2d7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWFpbkJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1haW5ib3h9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Bpbm5lcntcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmx1e1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucnV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5te1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGx7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ybHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDBweCAxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJvd0JveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXBCb3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN2VtO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAucGxheWVkQ291bnRlcntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogIGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5TW9kZU1haW5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5TW9kZXtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDAsIDApIDElLCByZ2JhKDY5LDE5NywyMzYsMSkgMTAlLCByZ2IoMjUsIDExNiwgMTI1KSA5NSUpO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb21wdXRlclBsYXk6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyAnIzAxZmRmZicgOiAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZyaWVuZFBsYXk6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLnAyID09ICcnID8gJyMwMWZkZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5uYW1lRXJyb3JTcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2NvcmVib2FyZERpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zY29yZVNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEzLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0Mi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTMuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzOS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS44JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBmbGlwIHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5tc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5mb290ZXJEZXZ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI5cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm9uU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjlweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMzNweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGx5MXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRue1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xuICAgICAgICAgICAgICAgIC8vICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZGV2TXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlRZTXNne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucGxOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcEJveHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIC5wbGF5ZWRDb3VudGVye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm5hbWVFcnJvclNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.5d8b60b15e92d53884a0.hot-update.js.map