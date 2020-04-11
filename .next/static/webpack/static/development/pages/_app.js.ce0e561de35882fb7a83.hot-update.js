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
        player: 'block',
        mainbox: 'none',
        p1: '',
        p2: 'Computer',
        won: false,
        dev: false,
        finalmsg: ''
      });
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
      } // this.setState({
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
      usersFromFB: []
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'body',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playedCounter',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 9
        }
      }, "Played ", this.state.usersFromFB.length, " times"), this.state.music == true && __jsx("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 11
        }
      }), this.state.music == false && __jsx("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////t7e2Pj4/s7OyMjIzw8PD19fWenp77+/tKSkqJiYmzs7OXl5fMzMxqamrm5ubb29sICAh4eHjPz8/GxsYhISFkZGSrq6ujo6MmJiaEhIRwcHBFRUW/v7+3t7c6OjoXFxcvLy9TU1NcXFwjIyMTExM2NjZ8fHxAQEBSUlJJSUlrzj/iAAAH80lEQVR4nO2d63rquA6GCaEcCoGkkHIs0Ja2tL3/+9tdJVYSIttSsJvMfvT+mpllZ+nDiS1LsqfTEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB8MvmNN8OJ/vpIkni7mDQjeNkke4P63D++ti0bbfxcgonSTwKjPSSQ3j6Dwr9utsnFmkl+mn03bTNdGarhKGtwLxpyyl8rWuq+8dH09ZbuZ/068sLgm7T9tvY9YhKRiP8Cz00rcDGwCQqWayi7fLr8/jy9tzpPLw/bj6/T/NoXZyP2v4Z3uPS4v1w/mnuqdq2fckYVtQlq7NF2y/LrHnPu4k3Up5D49WS2lH9NHuf1rmgIG8xfmN0nGa9xt5Mc8MJ3s0ts6eaob682OUO9a6l3I6P6qfxYZVLFpmdd9oW79/L2XwcrVeTH1araDxffj/kc3DrJxrlzRwrf/JxClfTROftxHH2D1PT09eDd7opUbBhGk/hTa1/xf94nK/THnWHsTY8fchx6cIgGHhYWmdqnrn868NrtI+NgioYJqjfb7z/QLMk/NfYg8Qos3P1s+89H5jiftFPpdkk1iVJDC+NB8/OpGWkmZ3plLPvLfKiezQ4S32CHaFq7FxinVErMdI9Ocrb2EcxzBv3HUu8VWAwsAu0j2JYeiLxw6XxYZcw6i3Sw/puez7vlsvdeTuOJtNClCohCLSNYlhu7HQUl4GBOF3PXzWf2eMka4T7QtH1s0yLRnjdmDr9Uhjj2nrpcGdZfQ9ZU3RnURFoGsW7auM+w0+wsKoO3D68p/RUk/AK+TNEoH4UEYE/Ep15N2nxsb19+EruqSbhEPkzVKFmukEFOlSo7Oyn0Yn3fSt/FXVpKl/W5RdEWmoEuvsQu9kj+T3V7hAPQ+ESqy8qLtBleDJ7pG5R0/OurNEE2mijqBHocCp9rv2jbZQ5M00DyihqXtEaQrQ8ZQ+N2T3BVTjpWthH0f8Idjq77KnGXSwKRFn1WwubRHwtdjqCnc42eyw/IAgBLMPiaZaIC3SdA1EL14TdU41+8GRoZJL4JyOYuzSYY2JGjX5gzI/qpxtcoPuo1j57csTuCbabM8C6UdS8ok4nmV9U2FofSrSabokH4xLxAJ6PPKTKWXDD3QXXU7taZOBLAj6yHlBuKT8DCEEYayIHH0VkXGspsKHelh275zogd6WNoqfQuQpG6FwvPaCQMPwUib5qAeorhK3zmdDYLtFb8kP9BeSsKAAKSZOUJljifQTzLdANCmlLqVmiv/QVpABvUGhKzBQwvage83Mv9RXCTEMtptGPos8E5FH9JTfMpeRtiW4UvWZY1Qa4hkJY8enZ8T2u0L0vWuC+vkLw2jRR/SqNjCEo5Ps0EddA/VTjs/APFPL90jzfR2tvWi48jiIo5O8twGJt/hBv/scSQSF/fzgH8yiZ98Z8GlDI3+NDJCogFPk155eCQqJjgnUlFH01uLcAM/mRKHAW7PNwk/tDWPH50URw+ND0WhFqGMPLKH6qp/MjwrAtCYbmhvQ4jQ+JkHxgFyYWqsPN469JvvyVREggkV2vHDByYWrVdLz0WT2an3vKS41Mvw435u1+FPMflY0KJpuigDXyFq5HUUWiasQqD2CVtkkbck9KIc25LJEfYtC1aEX+ECZEfp3VGWw64g3akQOG6YJfvpLXi+Hb55bk8eE0iSnPifMGFqEx4bbUYsCEyA+25XWb2MakNfU0UPTF3wJDsREWT2xPTZQqobS6zwjwhlddPryuDR8Zz3VtMOXzN4j5r1N1alpUmwhLkm1z8b5bp8ngh16yH14+WngTkbmPVV+KvNLu6ksh2mIsGfoYXte7x+tjvn3Gom2tqREGKw3u8xI/5L3IF0TMXWhLnTckn7RRzy/CIXb0sHpbavXhsZo/1+QayuCxqMLpW/v65u+8Bexj0U/7hXZMXxMxb8eZGZhCMLcNP+VdRbeYqnNPJEvUuSfXR7vAqUEKf54wNRjaWFQbzq4ZSireyUe99GngFpw/hBLD6jgsTKJKGGJRa87EGI08nCGF9EMlJjg3aSpTI1Lni6ftZBr3B4N4ka53v3MWLIgV95lx20mNSJ0XdunVh9U9nPI4xrWVjCGsE+Vxz3P1gNM/enO1B76eEKZoew2NSCqD6zNZyRHYvMIZZd4vz9NHe4cClJtQfDKxm/hD+dTazN6hQI0oj0uI61p5yedMNHWKVVxCXbjLETPeGPILjhxysNt3oex6fdo7FKCfy3TPzm5exlUcg6WwGW0XTPd4lbla8jn30zXptVVvudJy5ZjQ0+916o3cwbnr4mpvzejZjLZfWDPi1TE7+vBbijG8QlvrM66nfOrmgn+G2CGsi0uuU0jUKA3pfgJfsG60rFR+2QoKL9TIWjmEvlYEWCyCMp82fB0dawyR1MXZ2qnpay9Z3yFWvfXUNXbpNb1tosXkFfj7Zlo0mlwmMrYG8yoc8Wdo4h8/M5O7O2RugCHQEDC7qzqp7GskfcF4TY0mP54ncKvuKJmcnV+qVht6uIWSH9ocnz583Gx4E4Qg24VGt+k3QbzJuvUXVuvZkDZQLco88KF8im1JPNRkY/ZLgjq307SN1CyQfySofcwMLnhybNo6N4w1G6mk4YC8S3bVd3UwaXR/7oHZKv8fGvSnw/83eYrj1+l0r70ZVxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfg7/gdvDVZ9t9smBAAAAABJRU5ErkJggg==",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 11
        }
      }), this.state.audio == true && __jsx("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: false
          });
        },
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9ZqRq5OS9IqXUWphKGZHWxesl8-bZeImID4Oju-EK5YzfmzX&s",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'onSound',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651,
          columnNumber: 11
        }
      }), this.state.audio == false && __jsx("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: true
          });
        },
        src: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/mute-icon-18-256.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'offSound',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'msg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 9
        }
      }, "Welcome to Tic-Toc-Toe"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'footerDev',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 9
        }
      }, "Developed By Rohit Ninawe"), __jsx("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 11
        }
      })), __jsx("audio", {
        ref: function ref(gover) {
          _this3.gover = gover;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND42.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 11
        }
      })), __jsx("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 15
        }
      }, "Player 1"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 15
        }
      }, "Player 2")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'plName',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684,
          columnNumber: 13
        }
      }, __jsx("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 685,
          columnNumber: 15
        }
      }, " ", this.state.p1, " "), __jsx("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686,
          columnNumber: 15
        }
      }, " ", this.state.p2, " "))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 11
        }
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 40
        }
      }, "Player 1 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 68
        }
      }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 42
        }
      }, "Player 2 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 70
        }
      }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698,
          columnNumber: 48
        }
      }, "Game Over")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'box',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713,
          columnNumber: 15
        }
      }, __jsx("span", {
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 728,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 742,
          columnNumber: 15
        }
      }, __jsx("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.state.p2 == 'Computer' ? _this3.state.tictoc ? _this3.setKey(e) : {} : _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playModeMainDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode computerPlay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
          columnNumber: 15
        }
      }), __jsx("span", {
        style: {
          color: this.state.p2 == 'Computer' ? 'black' : 'white',
          fontWeight: '600',
          marginTop: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 758,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playMode friendPlay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
          columnNumber: 13
        }
      }, __jsx("img", {
        style: {
          width: '50px',
          borderRadius: '25px'
        },
        src: "static/images/single_user.png",
        title: "Friend",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 765,
          columnNumber: 15
        }
      }), __jsx("span", {
        style: {
          color: this.state.p2 == '' ? 'black' : 'white',
          fontWeight: '600',
          marginTop: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 766,
          columnNumber: 15
        }
      }, "Friend"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 769,
          columnNumber: 11
        }
      }, __jsx("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        autoFocus: true,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770,
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786,
          columnNumber: 11
        }
      }, __jsx("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["436022536", [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787,
          columnNumber: 13
        }
      }, "ENTER"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "436022536",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', this.state.p2 == '' ? '#01fdff' : 'transparent', this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 0.2s linear 20 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}.playedCounter.__jsx-style-dynamic-selector{position:absolute;top:10px;left:10px;}.playModeMainDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;cursor:pointer;-webkit-tap-highlight-color:transparent;margin-bottom:40px;}.playMode.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid white;padding:20px;background:linear-gradient(90deg,rgb(0,0,0) 1%,rgba(69,197,236,1) 10%,rgb(25,116,125) 95%);border-radius:5px;position:relative;}.computerPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:").concat(this.state.p2 == 'Computer' ? '#01fdff' : 'transparent', ";border-radius:2px;}.friendPlay.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;height:5px;bottom:-15px;background-color:").concat(this.state.p2 == '' ? '#01fdff' : 'transparent', ";border-radius:2px;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}.playedCounter.__jsx-style-dynamic-selector{font-size:small;top:20px;left:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzeEJXLEFBRzJCLEFBVVEsQUFPQSxBQU9MLEFBTUssQUFPQSxBQU9BLEFBS04sQUFHQyxBQUdELEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU1GLEFBS2lELEFBUXJDLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVFNLEFBS04sQUFRRSxBQVVKLEFBU0EsQUFVQyxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUtBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTW9GLEFBTWxFLEFBTUEsQUFNSCxBQUtrRSxBQU1oRSxBQUdFLEFBS0wsQUFHRSxBQU1TLEFBT25CLEFBTUEsQUFRQSxBQVFBLEFBUUEsQUFPbUIsQUFLM0IsQUFVRyxBQU1ELEFBV0EsQUFJQyxBQVFBLEFBYUEsQUFRQSxBQVNELEFBSUEsQUFLQyxBQU9BLEFBUUcsVUEvcUJBLEFBeVA2SSxBQUlBLEFBSTFJLEFBSUEsQUFJeUksQUFJQSxBQUl6SSxBQUlBLEFBSXNHLEFBSUEsQUFJdEcsQUFJQSxBQUlrRSxBQUlBLEFBSWxFLEFBSUEsQUFJa0UsQUFJQSxBQUlBLEFBSWxFLEFBSUEsQUFJa0Us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MEMsRUExSnhCLEFBT0YsQUFza0JFLEFBMEJGLEtBN2tCaEIsU0FsQkEsQUFnbUJBLEVBdm1CQSxBQTZrQkEsSUE3YTJCLEtBN0RRLGFBdURkLENBbVRpQixFQTlidkIsQUEyQkQsQUF1ZkEsRUFoWUcsRUF0RWEsQUF1ZUMsR0E1SVEsS0EzWTFCLEFBdWZiLENBbGhCQSxFQWtKc0csQ0FQdEcsR0FpU3VDLEFBTUQsSUF0WlosRUFpR1YsQUEyVHNCLEFBc0t0QixTQXhpQkssQUErZ0JBLEVBampCRCxHQTBHcEIsQUFpZUEsU0Fsa0I0QixNQVI1QixJQStEQSxVQVJtQyxBQXVlQyxNQXJIbEMsQ0FoYXFCLFVBeVlyQixVQVlBLEVBcFpvQixBQThZcEIsSUFZQSxLQXRTb0IsWUFuSEosTUFvSEksR0E3RnRCLEFBK2dCcUIsZUF6ZnFCLEFBd0UxQyxBQStaMkMsSUFtQjNDLG9DQXpmQSxBQXVlQSxxQkFwaEJBIiwiZmlsZSI6Ii9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvRmlyZWJhc2UnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMucmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gbnVsbDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aWN0b2M6IHRydWUsXG4gICAgICBtc2c6ICdibG9jaycsXG4gICAgICBtYWluYm94OiAnbm9uZScsXG4gICAgICBwbGF5ZXI6ICdub25lJyxcbiAgICAgIGZpbmFsbXNnOiAnJyxcbiAgICAgIHAxOiAnJyxcbiAgICAgIHAyOiAnQ29tcHV0ZXInLFxuICAgICAgd29uOiBmYWxzZSxcbiAgICAgIG11c2ljOiBmYWxzZSxcbiAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgdXNlcnNGcm9tRkI6IFtdXG4gICAgfVxuICAgIHRoaXMucGxheUF1ZGlvID0gKHZhbCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICAgIHRoaXMueC5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgICAgIHRoaXMuby5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd3aW4nOlxuICAgICAgICAgICAgdGhpcy53aW4ucGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZ292ZXInOlxuICAgICAgICAgICAgdGhpcy5nb3Zlci5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHNvdW5kJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucmVmLm9uU25hcHNob3QodGhpcy5vbkNvbGxlY3Rpb25VcGRhdGUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbXNnOiAnbm9uZScsXG4gICAgICAgIHBsYXllcjogJ2Jsb2NrJyxcbiAgICAgIH0pXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIG9uQ29sbGVjdGlvblVwZGF0ZSA9IChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgY29uc3QgYm9hcmRzID0gW107XG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgIGNvbnN0IHsgcGxheWVyMSwgcGxheWVyMiwgdGltZVN0YW1wLCBwbGF0Zm9ybSwgYnJvd3NlciB9ID0gZG9jLmRhdGEoKTtcbiAgICAgIGJvYXJkcy5wdXNoKHtcbiAgICAgICAga2V5OiBkb2MuaWQsXG4gICAgICAgIGRvYywgLy8gRG9jdW1lbnRTbmFwc2hvdFxuICAgICAgICBwbGF5ZXIxLCBwbGF5ZXIyLCB0aW1lU3RhbXAsIHBsYXRmb3JtLCBicm93c2VyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJzRnJvbUZCOiBib2FyZHNcbiAgICB9LCAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJzRnJvbUZCKSk7XG4gIH1cblxuICBlbmRHYW1lID0gKCkgPT4ge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRpY3RvYzogdHJ1ZSxcbiAgICAgIG1zZzogJ25vbmUnLFxuICAgICAgcGxheWVyOiAnYmxvY2snLFxuICAgICAgbWFpbmJveDogJ25vbmUnLFxuICAgICAgcDE6ICcnLFxuICAgICAgcDI6ICdDb21wdXRlcicsXG4gICAgICB3b246IGZhbHNlLFxuICAgICAgZGV2OiBmYWxzZSxcbiAgICAgIGZpbmFsbXNnOiAnJyxcbiAgICB9KVxuICB9XG5cbiAgc2V0S2V5ID0gKGUpID0+IHtcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcbiAgICB2YXIgY2xzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xuICAgIHZhciB2YWw7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInICYmIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5ib3RNb3ZlKGNscyksIDY1MCkpXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGljdG9jKSB7XG4gICAgICAgICAgdmFsID0gJ1gnXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ3gnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhbCA9ICdPJ1xuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdvJylcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSB2YWw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gKHZhbCA9PSAnWCcgPyAnNnB4IDZweCAyMXB4ICNkMmQyODInIDogJzZweCA2cHggMjFweCAjOTJiYWUyJyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYWxsV2lubmVyKGNscylcbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MKVxuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgfVxuXG4gIHJhbmRvbU5vRnVuYygpIHtcbiAgICB2YXIgYyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIHJldHVybiBjID09IDAgPyBjICsgNSA6IGMgPiA5ID8gYyAtIDUgOiBjXG4gIH1cblxuICBib3RNb3ZlID0gKGNscykgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgY29uc29sZS5sb2coJ2JvdCBwbGF5ZWQnKVxuICAgICAgdmFyIHJhbmRvbU5vID0gdGhpcy5yYW5kb21Ob0Z1bmMoKVxuICAgICAgY29uc29sZS5sb2cocmFuZG9tTm8pXG5cbiAgICAgIHZhciB1MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTDtcbiAgICAgIHZhciB1MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTDtcbiAgICAgIHZhciB1MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTDtcbiAgICAgIHZhciBtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTDtcbiAgICAgIHZhciBsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTDtcblxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCB1MiA9PSAnJyB8fCB1MyA9PSAnJykpIHsgICAvL1VIXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIHUyID09ICdPJykgfHwgKHUyID09ICdPJyAmJiB1MyA9PSAnTycpIHx8ICh1MyA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IHUyID09ICcnID8gJ3UyJyA6ICd1Myc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChtMSA9PSAnJyB8fCBtMiA9PSAnJyB8fCBtMyA9PSAnJykpIHsgICAgLy9NSFxuICAgICAgICBpZiAoKG0xID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbTMgPT0gJ08nKSB8fCAobTMgPT0gJ08nICYmIG0xID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBtMSA9PSAnJyA/ICdtMScgOiBtMiA9PSAnJyA/ICdtMicgOiAnbTMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAobDEgPT0gJycgfHwgbDIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vTEhcbiAgICAgICAgaWYgKChsMSA9PSAnTycgJiYgbDIgPT0gJ08nKSB8fCAobDIgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiBsMSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gbDEgPT0gJycgPyAnbDEnIDogbDIgPT0gJycgPyAnbDInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IG0xID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xWXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIG0xID09ICdPJykgfHwgKG0xID09ICdPJyAmJiBsMSA9PSAnTycpIHx8IChsMSA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IG0xID09ICcnID8gJ20xJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MiA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMiA9PSAnJykpIHsgICAgLy9NVlxuICAgICAgICBpZiAoKHUyID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbDIgPT0gJ08nKSB8fCAobDIgPT0gJ08nICYmIHUyID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MiA9PSAnJyA/ICd1MicgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDInO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTMgPT0gJycgfHwgbTMgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUlZcbiAgICAgICAgaWYgKCh1MyA9PSAnTycgJiYgbTMgPT0gJ08nKSB8fCAobTMgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiB1MyA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTMgPT0gJycgPyAndTMnIDogbTMgPT0gJycgPyAnbTMnIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IG0yID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL1JEXG4gICAgICAgIGlmICgodTEgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMyA9PSAnTycpIHx8IChsMyA9PSAnTycgJiYgdTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUxID09ICcnID8gJ3UxJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMSA9PSAnJykpIHsgICAgLy9MRFxuICAgICAgICBpZiAoKHUzID09ICdPJyAmJiBtMiA9PSAnTycpIHx8IChtMiA9PSAnTycgJiYgbDEgPT0gJ08nKSB8fCAobDEgPT0gJ08nICYmIHUzID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDEnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh1MSA9PSAnJyB8fCB1MiA9PSAnJyB8fCB1MyA9PSAnJykgeyAgIC8vVUhcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgdTIgPT0gJ1gnKSB8fCAodTIgPT0gJ1gnICYmIHUzID09ICdYJykgfHwgKHUzID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogdTIgPT0gJycgPyAndTInIDogJ3UzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKG0xID09ICcnIHx8IG0yID09ICcnIHx8IG0zID09ICcnKSkgeyAgICAvL01IXG4gICAgICAgIGlmICgobTEgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBtMyA9PSAnWCcpIHx8IChtMyA9PSAnWCcgJiYgbTEgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IG0xID09ICcnID8gJ20xJyA6IG0yID09ICcnID8gJ20yJyA6ICdtMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChsMSA9PSAnJyB8fCBsMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9MSFxuICAgICAgICBpZiAoKGwxID09ICdYJyAmJiBsMiA9PSAnWCcpIHx8IChsMiA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIGwxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBsMSA9PSAnJyA/ICdsMScgOiBsMiA9PSAnJyA/ICdsMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTEgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTFZcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgbTEgPT0gJ1gnKSB8fCAobTEgPT0gJ1gnICYmIGwxID09ICdYJykgfHwgKGwxID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTEgPT0gJycgPyAnbTEnIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUyID09ICcnIHx8IG0yID09ICcnIHx8IGwyID09ICcnKSkgeyAgICAvL01WXG4gICAgICAgIGlmICgodTIgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBsMiA9PSAnWCcpIHx8IChsMiA9PSAnWCcgJiYgdTIgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUyID09ICcnID8gJ3UyJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMic7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMyA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SVlxuICAgICAgICBpZiAoKHUzID09ICdYJyAmJiBtMyA9PSAnWCcpIHx8IChtMyA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIHUzID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMyA9PSAnJyA/ICdtMycgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUkRcbiAgICAgICAgaWYgKCh1MSA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwzID09ICdYJykgfHwgKGwzID09ICdYJyAmJiB1MSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTIgPT0gJycgPyAnbTInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0yID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xEXG4gICAgICAgIGlmICgodTMgPT0gJ1gnICYmIG0yID09ICdYJykgfHwgKG0yID09ICdYJyAmJiBsMSA9PSAnWCcpIHx8IChsMSA9PSAnWCcgJiYgdTMgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnRpY3RvYykge1xuICAgICAgICB2YXIgb2RkTm9zID0gW107IC8vJ3UxJywgJ3UzJywgJ20yJywgJ2wxJywgJ2wzJ1xuICAgICAgICB2YXIgZXZlbk5vcyA9IFtdOyAvL3UyLCBtMSwgbTMsIGwyXG4gICAgICAgIHUxID09ICcnICYmIG9kZE5vcy5wdXNoKCd1MScpO1xuICAgICAgICB1MyA9PSAnJyAmJiBvZGROb3MucHVzaCgndTMnKTtcbiAgICAgICAgbTIgPT0gJycgJiYgb2RkTm9zLnB1c2goJ20yJyk7XG4gICAgICAgIGwxID09ICcnICYmIG9kZE5vcy5wdXNoKCdsMScpO1xuICAgICAgICBsMyA9PSAnJyAmJiBvZGROb3MucHVzaCgnbDMnKTtcbiAgICAgICAgdTIgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCd1MicpO1xuICAgICAgICBtMSA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ20xJyk7XG4gICAgICAgIG0zID09ICcnICYmIGV2ZW5Ob3MucHVzaCgnbTMnKTtcbiAgICAgICAgbDIgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCdsMicpO1xuXG4gICAgICAgIGlmIChvZGROb3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBpZCA9IG9kZE5vc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvZGROb3MubGVuZ3RoKV07XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVuTm9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgaWQgPSBldmVuTm9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGV2ZW5Ob3MubGVuZ3RoKV07XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpICYmIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgdGljdG9jOiB0cnVlXG4gICAgLy8gfSlcbiAgfVxuXG4gIGNhbGxXaW5uZXIgPSAoY2xzKSA9PiB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXG4gICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xuICAgIHZhciB1MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTDtcbiAgICB2YXIgdTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUw7XG4gICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xuICAgIHZhciBtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTDtcbiAgICB2YXIgbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUw7XG4gICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xuICAgIHZhciBsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTDtcbiAgICB2YXIgbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUw7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUxID09PSB1MikgJiYgKHUxID09IHUzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpKSB7XG4gICAgICAgIGlmICgobTEgPT0gbTIpICYmIChtMSA9PSBtMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKG0xID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKChsMSA9PSBsMikgJiYgKGwxID09IGwzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAobDEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTIgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwyICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUyID09IG0yKSAmJiAodTIgPT0gbDIpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MiA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobDMgIT0gJycpICYmIChtMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MyA9PSBtMykgJiYgKHUzID09IGwzKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUxID09IG0yKSAmJiAodTEgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MyAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTMgPT0gbTIpICYmICh1MyA9PSBsMSkpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSAmJiAobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSAmJiAobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgd29uOiBmYWxzZSxcbiAgICAgICAgICBmaW5hbG1zZzogJ2cnXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygnZ292ZXInKVxuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMClcbiAgICAgICAgfSlcblxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcDFubSA9IChlKSA9PiB7XG4gICAgdmFyIHZhbCA9IChlLnRhcmdldC52YWx1ZSkudHJpbSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcDE6IHZhbFxuICAgIH0pXG4gIH1cblxuICBwMm5tID0gKGUpID0+IHtcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwMjogdmFsXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcblxuICAgIGxldCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuICAgIGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykuYWRkKFxuICAgICAge1xuICAgICAgICBwbGF5ZXIxOiB0aGlzLnN0YXRlLnAxLFxuICAgICAgICBwbGF5ZXIyOiB0aGlzLnN0YXRlLnAyLFxuICAgICAgICB0aW1lU3RhbXA6IG5ldyBEYXRlKCksXG4gICAgICAgIHBsYXRmb3JtOiB3aW5kb3cubmF2aWdhdG9yLmFwcFZlcnNpb24sXG4gICAgICAgIGJyb3dzZXI6IHdpbmRvdy5uYXZpZ2F0b3IudmVuZG9yXG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGxheWVyOiAnbm9uZScsXG4gICAgICBtYWluYm94OiAnYmxvY2snLFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVNdXNpYyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG11c2ljOiAhdGhpcy5zdGF0ZS5tdXNpY1xuICAgIH0sICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLm11c2ljKSB7XG4gICAgICAgIHRoaXMuc3RhcnQucGxheSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhdGUubXVzaWMpIHtcbiAgICAgICAgdGhpcy5zdGFydC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRQbGF5TW9kZSA9ICh2YWwpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHAyOiB2YWxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnBsYXlBdWRpbygnd2luJylcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50aWN0b2MpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9J21haW4nIGNsYXNzTmFtZT0nYm9keSc+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGxheWVkQ291bnRlcic+UGxheWVkIHt0aGlzLnN0YXRlLnVzZXJzRnJvbUZCLmxlbmd0aH0gdGltZXM8L3NwYW4+XG4gICAgICAgIHt0aGlzLnN0YXRlLm11c2ljID09IHRydWUgJiZcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9mZiBNdXNpYycgY2xhc3NOYW1lPSdvbk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFlRkJNVkVVQUFBRC8vLy9Cd2NGcWFtb3pNek83dTdzckt5c2lJaUk5UFQwMk5qYkx5OHZFeE1TMXRiWFQwOVA0K1BqdzhQQmRYVjNhMnRwRVJFUjhmSHdYRnhlSGg0Zmo0K1BxNnVxdXJxNXhjWEZMUzB0WVdGaGpZMk5SVVZFTkRRM2k0dUtTa3BLaG9hRWZIeCtKaVltUmtaR2NuSngvZjM4VEV4TjlKSmZlQUFBSUlVbEVRVlI0bk8yZDJYYXFTaEJBSTdNZ2pVQ1lSVURGL1A4ZjNtaVNrNWhHN2FGNklKZjltclVPdlEvWVkzWFZ5OHZNMmJ1MW1hWlpsbFpiejkycmJnMDRUbDJWeGVvZnhkQWNWRGNKa3ZYdXVNbFh0MFJscTdwWlVIanBFQlNyQ2VKS2RkTWc4STUyR0UzcFhWOWpxcnA1dkhnbnYwUDM5SzZLdGVvbTh1RDFZZlJRNzBLb3VwV3N1TTN3dTJPNXc2aTZxUXk0ZGJXWjdGZ202UkxWN2FYRTJtV2JwNS9tVDlDc1hxSlhqUWI1Mi9za21NM0E3NTNMa0Zydm5iaFIzWElpdktNUjN4MzFIaE9kVlRmK09VNGZGMVMvdlZzMC95SHVrNUhsMC96Sm9OcmhQb2YxcmlRYzllWm82RFJwMmZIcnZWUHF1Rkowek40R2VIdTZHanBWT2IwWVlqVjhVMjEwZzVOdW1FYTlSNGF2cXFXK2NWS2pZQnoxNW1Eb1pDSEhvS2U1NGQ2cHVVZTkrMnhVVDB3UGRUWEFEQXYzREYyVmVtNlRsYkZJUGJXRzdxNjNIMit6ek52UUxQMWN2SjRxdzcyNTZlQ0hCWDBNVFp0bk1VU043Y2lVZTExWHZrUTUyWVpXay9reVg1NXN3L2FrUWsrZTRYWVFQZXlwTlZ5TG5iV29ONnhpTmQrbk5NTkJwWjhFUTFmNjhDRFpzRmJXdzBneWJKUUxDalpzUTlWK3E1VmhDUlJjQjZyMVZtSU4zemFxN1M2SU5FeFZ5MTBSYU9pcWR2dEFvS0g2YnZTS09NT3phclZQaEJsYW1yeENjWWFqMnRub042SU1IUTNHK2c5RUdaNmw3YVU5UTVEaG02MWE3QitDRExjS0YvVy9FR1I0VXUzMWpSakRRNm5hNnhzeGhxNFdjKzRQRnNQRmNER1VCWXE2T0o0OGtQd0xobEh1ajgwMTRpS1oyRGFadldFZWx1a1BCM3c2UEcvRHpoak0yeVBlTGZhaHp0Y1F4V1cyeFU2d1g3RXQ5cGthb25BMDY2bFFvUDBneDlBUnU3UUlUNjF6SjZaeVA4N2ZNRTRmQlZmcysxa2Jvc0kvUDR0U3cxWTE4ekdNWXZ0TTBOampUQTBMLzJiVWUwQTJSOFBJR0tzMTZhT3hiVnJ0RFNQanVLTnA0OHdNSTZOS0tBODRzZU1nalEwalk4Y1EzanNYUTVSdmRteVBub1ZoRVc5MnpOZEE5RGZNZzlMa2lhNnY5RGJNN2Q3a0RKM1EyVERmWkExL1pJaTJobEZaSlNEaHlub2FJbnQ3Z0xwaHBwOGg2bUJ6a09obGlJcTQzQUkvV2lmRDNCKzR4b1ZwVEYwTUMzdmNDYmtJb1lkaFlaL0U2TDFJTTdTTSszcVJjVzRGQmtSS01yd2ZsQmltYTdIM0FSVWJ4dEE5SjQ1U1ExUkt1R1NsMGhDTk1tN0dLelJFdllnbllTZzBMRVU4Q0VlZFlTZnBvcU02UThadEYycVVHVzVrM2Z0WFppZ3RsNUV5dzB6RVk2WllESUZZREFXeUdBS3hHQXJrZnpnZWlybGhpUnRLeStpN0dBTHg5dzA5TEg1dU1RUmpNUVJpTVJUSVlnZ0ViaWl0VE1GaUNNUmlLSkRGRUlqRlVDQ0xJUkNMb1VEK2g0Wmk4cGN1aGdKWkRJSDQrNFlKZGgzMzd4dWFJaDR6eFdJSWhIRER2ZXVzdmFSdTM2azl6M0pmLzRWYi9RVkRxelhUMGY1UjZBTjFRWG1xdHNrMTZISHVob2MySFkzcEVqUW9MSS9iMTVrYnRpZjdjVXJpems2eE82VHpNZHluQmtFbGhRaDd3WE14UFBTc2hkZm1ZYmcvc1ZkcGtXU0llQUwzM0l3bnZaMllTanFRaG9jZFg0SkM3UTNia2pQRnBCaERMSXMzcStGYnlwMGtWRzlEWitCUE1LbTFvUU5SRWtOblF4ZWtrSmZHaGp1WUZLajZHbFpBT1Y3RjFEL2tOOXhYVUxYbXhOU3diSDhuYUkxb3IzU1ptbGZwYkgrM2o5YXdoY3VWcmFlaEM1aEpXazlEeUhSdldocGlPeEYvemRBQ3pRVXVwcVp6ODd1cnB6SjhjRTFhSDhQZmI0SEdFR3FvMTliUUFTNU9vNThoZEVaK0xzTWtIZno0bmU2TE9EZ2xsei9zZnE5NnlBMWQ2SFI5ekliV09aaGV2T1c5ZzJlQ0pUYzBvV3Nmanl4MlRqcytyQXdRWXUraGFBai82YmNCV0pEQjBHMU85SE1xWWtOOHAxVzJvWk51V0Q0allrUFE2Y3lWbnNydmNPL0g5d3hTUXp4SkxpL29TQ05ZQmF3OU9hbWhDMTZwTGFLSU1FOXM5cEdLMUhBTlhwNG1KOTlkT1BFOG5OU3dCalA3d2lmTjdicm1LeHlURTJZczJ3RjVmVU9ZanNNOWMyN05raHBpdWNoNEtjZ0NlVHplMHhGaVEvQmliU0ZSN0dYRDM4R1JHbUs1cWpsQlJPUDlGbURmaTlRUWl6UGdwQ0RwWjdEMU9nc2RvU0YwMlV1U2hVVUNVZ012cnNrTWdTZHRpT0RNb29ZWmdra05nY2ZEL3ZrVHNVMHpSa2dOUGRDcWlmbnpCeVpRbSt1a2hnNWtGVytDNDZBMTJMNGVxU0hvMm1KNCtpdDhoYXUwR1Naa2hwQmRqZTg5ZnhyY1JKL1lFRzZObno4UHc0S3NCa3RzK0FMMW1aS3NmQWVnWjEwSW4zOHhud0RWbXllWnJua2dUL3FFNERjQit4OUxzbWdDUFI4SmlHdU00REVBTEpBSXRnRFArWVltMGMrUnZ3Y25XdmJDYnE3VFhKSGI4NTRBbzRFa3dNU0QzVnluQ21PMStFYU00a2dVSTlURGx0VXVxZElqYysyNHhZVFZQeURuaHl2cTBLdWEvUXNLQ0g4UFVHdUtMMmdQRDFnN1ZQTDkzeE53N2ZlZTB2QWxNUmhhRU5ua2d4SncvVUpFbjVET0dtaS9WT1JUYk9BZmdJOFBJcGJyaHhWZEk0S00vQVhDbitMRnBJZHJONnhQNUwxQmtOTDR3UjgxRzR4MzR1dWV5REVxcVVxelhVaUJqNENZenRLdk9PbXp6d241bFVVZjJKWEJkcVVkMDBmNmhYdU0wWFI3RUNwc3htc09BSlBmbjlnOGdoZXMxSTY3dklnaTlFRVVGWGtYYnpMaWRUVUdWc3lUaXdna1cvbkJhOHcwTy9YdkhOT3E4ZmdDMUdIamtnSUlRV0JBKzFMRTlTc1VSTU4zNG5zTDk2OVFCR3ZJcFlYQXNqa2NBSzd3cGVWSXBnTnVBZXlMTFEzRXpCWnFmWmpyMk0xYzJBUDlFQm1XVGJLQW1iZWhRVkx0RlFZY2tNL1VGcElQSFFpSWladXY1MER4QmY5TGpJWGMvSU9EZTFzL1ZtM3dsSkxMRHhteXFnT3h3M1cxSTlLNEYvMm1adCtQeXMvNnY4RUxEYXRpb090TUJvTnRWeEVkOVI0bGJtQzVvME54M3FzRmxCdUxLSlNXbVEyTWhPSUtRaFJLcXljRFNrcm9tTnVwakRxY0luRFR6ZE01WEJTTXNrb2NDdUd3N1IrOXlOenV6Wm4xTHhOWWJUcUVFNnZHd3VpcmVrYkR3MFAyQjhmYm5iTWZtTFhsYXI2QytNRi84Snl5QlJiNWl6b0FBQUFBU1VWT1JLNUNZSUk9JyAvPlxuICAgICAgICB9XG4gICAgICAgIHt0aGlzLnN0YXRlLm11c2ljID09IGZhbHNlICYmXG4gICAgICAgICAgPGltZyB0aXRsZT0nVHVybiBPbiBNdXNpYycgY2xhc3NOYW1lPSdvZmZNdXNpYycgb25DbGljaz17dGhpcy5oYW5kbGVNdXNpY30gc3JjPSdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBaEZCTVZFVUFBQUQvLy8vdDdlMlBqNC9zN095TWpJenc4UEQxOWZXZW5wNzcrL3RLU2txSmlZbXpzN09YbDVmTXpNeHFhbXJtNXViYjI5c0lDQWg0ZUhqUHo4L0d4c1loSVNGa1pHU3JxNnVqbzZNbUppYUVoSVJ3Y0hCRlJVVy92NyszdDdjNk9qb1hGeGN2THk5VFUxTmNYRndqSXlNVEV4TTJOalo4Zkh4QVFFQlNVbEpKU1VscnpqL2lBQUFIODBsRVFWUjRuTzJkNjNycXVBNkdDYUVjQ29Ha2tISXMwSmEydEwzLys5dGRKVllTSXR0U3NKdk1mdlQrbXBsbForbkRpUzFMc3FmVEVRUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCOE12bU5OOE9KL3ZwSWtuaTdtRFFqZU5ra2U0UDYzRCsrdGkwYmJmeGNnb25TVHdLalBTU1EzajZEd3I5dXRzbkZta2wrbW4wM2JUTmRHYXJoS0d0d0x4cHl5bDhyV3VxKzhkSDA5WmJ1Wi8wNjhzTGdtN1Q5dHZZOVloS1JpUDhDejAwcmNER3dDUXFXYXlpN2ZMcjgvank5dHpwUEx3L2JqNi9UL05vWFp5UDJ2NFozdVBTNHYxdy9tbnVxZHEyZmNrWVZ0UWxxN05GMnkvTHJIblB1NGszVXA1RDQ5V1MybEg5Tkh1ZjFybWdJRzh4Zm1OMG5HYTl4dDVNYzhNSjNzMHRzNmVhb2I2ODJPVU85YTZsM0k2UDZxZnhZWlZMRnBtZGQ5b1c3OS9MMlh3Y3JWZVRIMWFyYUR4ZmZqL2tjM0RySnhybHpSd3JmL0p4Q2xmVFJPZnR4SEgyRDFQVDA5ZURkN29wVWJCaEdrL2hUYTEveGY5NG5LL1RIbldIc1RZOGZjaHg2Y0lnR0hoWVdtZHFucm44NjhOcnRJK05naW9ZSnFqZmI3ei9RTE1rL05mWWc4UW9zM1Axcys4OUg1amlmdEZQcGRrazFpVkpEQytOQjgvT3BHV2ttWjNwbExQdkxmS2llelE0UzMyQ0hhRnE3RnhpblZFck1kSTlPY3JiMkVjeHpCdjNIVXU4VldBd3NBdTBqMkpZZWlMeHc2WHhZWmN3NmkzU3cvcHVlejd2bHN2ZGVUdU9KdE5DbENvaENMU05ZbGh1N0hRVWw0R0JPRjNQWHpXZjJlTWthNFQ3UXRIMXMweUxSbmpkbURyOVVoamoybnJwY0dkWmZROVpVM1JuVVJGb0dzVzdhdU0rdzArd3NLb08zRDY4cC9SVWsvQUsrVE5Fb0g0VUVZRS9FcDE1TjJueHNiMTkrRXJ1cVNiaEVQa3pWS0ZtdWtFRk9sU283T3luMFluM2ZTdC9GWFZwS2wvVzVSZEVXbW9FdXZzUXU5a2orVDNWN2hBUFErRVNxeThxTHRCbGVESjdwRzVSMC9PdXJORUUybWlqcUJIb2NDcDlydjJqYlpRNU0wMER5aWhxWHRFYVFyUThaUStOMlQzQlZUanBXdGhIMGY4SWRqcTc3S25HWFN3S1JGbjFXd3ViUkh3dGRqcUNuYzQyZXl3L0lBZ0JMTVBpYVphSUMzU2RBMUVMMTRUZFU0MSs4R1JvWkpMNEp5T1l1elNZWTJKR2pYNWd6SS9xcHh0Y29QdW8xajU3Y3NUdUNiYWJNOEM2VWRTOG9rNG5tVjlVMkZvZlNyU2Fib2tINHhMeEFKNlBQS1RLV1hERDNRWFhVN3RhWk9CTEFqNnlIbEJ1S1Q4RENFRVlheUlISDBWa1hHc3BzS0hlbGgyNzV6b2dkNldOb3FmUXVRcEc2Rnd2UGFDUU1Qd1VpYjVxQWVvcmhLM3ptZERZTHRGYjhrUDlCZVNzS0FBS1NaT1VKbGppZlFUekxkQU5DbWxMcVZtaXYvUVZwQUJ2VUdoS3pCUXd2YWdlODNNdjlSWENURU10cHRHUG9zOEU1Rkg5SlRmTXBlUnRpVzRVdldaWTFRYTRoa0pZOGVuWjhUMnUwTDB2V3VDK3ZrTHcyalJSL1NxTmpDRW81UHMwRWRkQS9WVGpzL0FQRlBMOTBqemZSMnR2V2k0OGppSW81Tzh0d0dKdC9oQnYvc2NTUVNGL2Z6Z0g4eWlaOThaOEdsREkzK05ESkNvZ0ZQazE1NWVDUXFKamduVWxGSDAxdUxjQU0vbVJLSEFXN1BOd2svdERXUEg1MFVSdytORDBXaEZxR01QTEtINnFwL01qd3JBdENZYm1odlE0alErSmtIeGdGeVlXcXNQTjQ2OUp2dnlWUkVnZ2tWMnZIREJ5WVdyVmRMejBXVDJhbjN2S1M0MU12dzQzNXUxK0ZQTWZsWTBLSnB1aWdEWHlGcTVIVVVXaWFzUXFEMkNWdGtrYmNrOUtJYzI1TEpFZll0QzFhRVgrRUNaRWZwM1ZHV3c2NGczYWtRT0c2WUpmdnBMWGkrSGI1NWJrOGVFMGlTblBpZk1HRnFFeDRiYlVZc0NFeUErMjVYV2IyTWFrTmZVMFVQVEYzd0pEc1JFV1QyeFBUWlFxb2JTNnp3andobGRkUHJ5dURSOFp6M1Z0TU9Yek40ajVyMU4xYWxwVW13aExrbTF6OGI1YnA4bmdoMTZ5SDE0K1duZ1RrYm1QVlYrS3ZOTHU2a3NoMm1Jc0dmb1lYdGU3eCt0anZuM0dvbTJ0cVJFR0t3M3U4eEkvNUwzSUYwVE1YV2hMblRja243UlJ6eS9DSVhiMHNIcGJhdlhoc1pvLzErUWF5dUN4cU1McFcvdjY1dSs4QmV4ajBVLzdoWFpNWHhNeGI4ZVpHWmhDTUxjTlArVmRSYmVZcW5OUEpFdlV1U2ZYUjd2QXFVRUtmNTR3TlJqYVdGUWJ6cTRaU2lyZXlVZTk5R25nRnB3L2hCTEQ2amdzVEtKS0dHSlJhODdFR0kwOG5DR0Y5RU1sSmpnM2FTcFRJMUxuaTZmdFpCcjNCNE40a2E1M3YzTVdMSWdWOTVseDIwbU5TSjBYZHVuVmg5VTluUEk0eHJXVmpDR3NFK1Z4ejNQMWdOTS9lbk8xQjc2ZUVLWm9ldzJOU0NxRDZ6Tlp5UkhZdk1JWlpkNHZ6OU5IZTRjQ2xKdFFmREt4bS9oRCtkVGF6TjZoUUkwb2owdUk2MXA1eWVkTU5IV0tWVnhDWGJqTEVUUGVHUElMamh4eXNOdDNvZXg2ZmRvN0ZLQ2Z5M1RQem01ZXhsVWNnNld3R1cwWFRQZDRsYmxhOGpuMzB6WHB0VlZ2dWRKeTVaalEwKzkxNm8zY3dibnI0bXB2emVqWmpMWmZXRFBpMVRFNyt2QmJpakc4UWx2ck02Nm5mT3JtZ24rRzJDR3NpMHV1VTBqVUtBM3BmZ0pmc0c2MHJGUisyUW9LTDlUSVdqbUV2bFlFV0N5Q01wODJmQjBkYXd5UjFNWFoycW5wYXk5WjN5Rld2ZlhVTlhicE5iMXRvc1hrRmZqN1psbzBtbHdtTXJZRzh5b2M4V2RvNGg4L001TzdPMlJ1Z0NIUUVEQzdxenFwN0dza2ZjRjRUWTBtUDU0bmNLdnVLSm1jblYrcVZodDZ1SVdTSDlvY256NTgzR3g0RTRRZzI0Vkd0K2szUWJ6SnV2VVhWdXZaa0RaUUxjbzg4S0Y4aW0xSlBOUmtZL1pMZ2pxMzA3U04xQ3lRZnlTb2Zjd01Mbmh5Yk5vNk40dzFHNm1rNFlDOFMzYlZkM1V3YVhSLzdvSFpLdjhmR3ZTbncvODNlWXJqMStsMHI3MFpWeEFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRZmc3L2dkdkRWWjl0OXNtQkFBQUFBQkpSVTVFcmtKZ2dnPT0nIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuYXVkaW8gPT0gdHJ1ZSAmJlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvblNvdW5kJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYXVkaW86IGZhbHNlIH0pfSBzcmM9J2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NWOVpxUnE1T1M5SXFYVVdwaEtHWkhXeGVzbDgtYlplSW1JRDRPanUtRUs1WXpmbXpYJnMnIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUuYXVkaW8gPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2ZmU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogdHJ1ZSB9KX0gc3JjPSdodHRwczovL2ljb25zcGxhY2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9faWNvbnMvZmZmZmZmLzI1Ni9wbmcvbXV0ZS1pY29uLTE4LTI1Ni5wbmcnIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtc2cnPldlbGNvbWUgdG8gVGljLVRvYy1Ub2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyRGV2Jz5EZXZlbG9wZWQgQnkgUm9oaXQgTmluYXdlPC9zcGFuPlxuICAgICAgICA8YXVkaW8gcmVmPXsoeCkgPT4geyB0aGlzLnggPSB4OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1NPVU5EMTQuV0FWXCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cbiAgICAgICAgICA8L3NvdXJjZT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgPGF1ZGlvIHJlZj17KG8pID0+IHsgdGhpcy5vID0gbzsgfX0+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9Tb3VuZDIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cbiAgICAgICAgICA8L3NvdXJjZT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgPGF1ZGlvIHJlZj17KHdpbikgPT4geyB0aGlzLndpbiA9IHdpbjsgfX0+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9EcnVtcm9sbC0yLndhdlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XG4gICAgICAgICAgPC9zb3VyY2U+XG4gICAgICAgIDwvYXVkaW8+XG4gICAgICAgIDxhdWRpbyByZWY9eyhnb3ZlcikgPT4geyB0aGlzLmdvdmVyID0gZ292ZXI7IH19PlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvU09VTkQ0Mi5XQVZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gbG9vcD17dHJ1ZX0gcmVmPXsoc3RhcnQpID0+IHsgdGhpcy5zdGFydCA9IHN0YXJ0OyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1RoZW1lLUludHJvc2hvcnQud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cbiAgICAgICAgICA8L3NvdXJjZT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Cb3gnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYW1lRGlzcGxheSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxIZWFkaW5nJz5cbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMn0gPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbmFsTXNnJz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndvbiA9PSB0cnVlID9cbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ3gnXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAxID09ICcnID8gPHNwYW4+UGxheWVyIDEgd29uPC9zcGFuPiA6IDxzcGFuPnt0aGlzLnN0YXRlLnAxICsgJyB3b24nfTwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdvJyA/XG4gICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wMiA9PSAnJyA/IDxzcGFuPlBsYXllciAyIHdvbjwvc3Bhbj4gOiA8c3Bhbj4ge3RoaXMuc3RhdGUucDIgKyAnIHdvbid9IDwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICA6IG51bGwpKVxuICAgICAgICAgICAgICA6ICh0aGlzLnN0YXRlLmZpbmFsbXNnID09ICdnJyAmJiA8c3Bhbj5HYW1lIE92ZXI8L3NwYW4+KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHUgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfSBpZD0ndTEnID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UyJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J1IHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0gaWQ9J3UzJyA+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20gc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gdGhpcy5zdGF0ZS50aWN0b2MgPyB0aGlzLnNldEtleShlKSA6IHt9IDogdGhpcy5zZXRLZXkoZSlcbiAgICAgICAgICAgICAgICB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsbCBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JsIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wzJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJEZXRhaWxzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheU1vZGVNYWluRGl2Jz5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRQbGF5TW9kZSgnQ29tcHV0ZXInKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBjb21wdXRlclBsYXknXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDAsIDAsIDApIDElLCByZ2JhKDY5LDE5NywyMzYsMSkgMTAlLCByZ2IoMjUsIDExNiwgMTI1KSA5NSUpJyA6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJzEnIDogJzAuNidcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcsIGhlaWdodDogJzcwcHgnIH19IHNyYz0nc3RhdGljL2ltYWdlcy9ib3QucG5nJyB0aXRsZT0nQm90JyAvPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJ2JsYWNrJyA6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICc2MDAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5Db21wdXRlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFBsYXlNb2RlKCcnKX0gY2xhc3NOYW1lPSdwbGF5TW9kZSBmcmllbmRQbGF5J1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUucDIgPT0gJycgPyAnbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMCwgMCkgMSUsIHJnYmEoNjksMTk3LDIzNiwxKSAxMCUsIHJnYigyNSwgMTE2LCAxMjUpIDk1JSknIDogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnAyID09ICcnID8gJzEnIDogJzAuNidcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcgfX0gc3JjPSdzdGF0aWMvaW1hZ2VzL3NpbmdsZV91c2VyLnBuZycgdGl0bGU9J0ZyaWVuZCcgLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJycgPyAnYmxhY2snIDogJ3doaXRlJywgZm9udFdlaWdodDogJzYwMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PkZyaWVuZDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAxfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMW5tfVxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/ICdibGFjaycgOiAnJyB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInfVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2VudGVyQnRuJyBvbkNsaWNrPXt0aGlzLnN0YXJ0R2FtZX0+RU5URVI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgICAgLnBseTF7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9uTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vblNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZpbmFsTXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9mZk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub2ZmU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogOThweDtcbiAgICAgICAgICAgICAgICByaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mb290ZXJEZXZ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubXVzaWN7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZ2FtZURpc3BsYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsSGVhZGluZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsTmFtZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbGF5ZXJEZXRhaWxze1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5wbGF5ZXJ9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyTmFtZXN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRleHQtZmxpY2tlci1vdXQtZ2xvdyB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRleHQtZmxpY2tlci1vdXQtZ2xvdyAwLjJzIGxpbmVhciAyMCBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LWZsaWNrZXItb3V0LWdsb3cgMC4ycyBsaW5lYXIgMjAgYm90aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbTcuZXpnaWYuY29tL3RtcC9lemdpZi03LTEzMGJmMGI4Yzc2OS5naWZcIik7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlhPU3BhbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsgXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7IFxuICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6bm9uZTsgXG4gICAgICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0Om5vbmU7IFxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiA2cHggNnB4IDIxcHggI2QyZDI4MjsgIGZvciBYXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjOTJiYWUyOyAgZm9yIE9cblxuICAgICAgICAgICAgICAuZW50ZXJCdG57XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3NXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZNc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlRZTXNne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGV2TmFtZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1haW5Cb3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tYWluYm94fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3h7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNwaW5uZXJ7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXI7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sdXtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubXNnfTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJ1e1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubXtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmxse1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmx7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAwcHggMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yb3dCb3h7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMyU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VwQm94e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdlbTtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgLnBsYXllZENvdW50ZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheU1vZGVNYWluRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheU1vZGV7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigwLCAwLCAwKSAxJSwgcmdiYSg2OSwxOTcsMjM2LDEpIDEwJSwgcmdiKDI1LCAxMTYsIDEyNSkgOTUlKTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29tcHV0ZXJQbGF5OjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gJyMwMWZkZmYnIDogJ3RyYW5zcGFyZW50J307XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mcmllbmRQbGF5OjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5wMiA9PSAnJyA/ICcjMDFmZGZmJyA6ICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEzLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0Mi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGtleWZyYW1lcyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cge1xuICAgICAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTMuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzOS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDcwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS44JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBmbGlwIHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5tc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5mb290ZXJEZXZ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI5cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm9uU291bmR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjlweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGx5MXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVudGVyQnRue1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xuICAgICAgICAgICAgICAgIC8vICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZGV2TXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlRZTXNne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kZXZOYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucGxOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcEJveHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIC5wbGF5ZWRDb3VudGVye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.ce0e561de35882fb7a83.hot-update.js.map