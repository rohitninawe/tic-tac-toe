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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playedCounter',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 11
        }
      }), this.state.music == false && __jsx("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offMusic',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onSound',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offSound',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 11
        }
      }), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 9
        }
      }, "Welcome to Tic-Toc-Toe"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'footerDev',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND42.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 9
        }
      }, __jsx("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681,
          columnNumber: 15
        }
      }, "Player 1"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 15
        }
      }, "Player 2")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 686,
          columnNumber: 15
        }
      }, " ", this.state.p2, " "))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 689,
          columnNumber: 11
        }
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 40
        }
      }, "Player 1 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693,
          columnNumber: 68
        }
      }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 42
        }
      }, "Player 2 won") : __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 696,
          columnNumber: 70
        }
      }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698,
          columnNumber: 48
        }
      }, "Game Over")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 702,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 706,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 719,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 739,
          columnNumber: 17
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743,
          columnNumber: 17
        }
      }))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '50px',
          cursor: 'pointer'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 752,
          columnNumber: 13
        }
      }, "Play with"), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          cursor: 'pointer'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753,
          columnNumber: 13
        }
      }, __jsx("img", {
        style: {
          width: '50px',
          borderRadius: '25px'
        },
        src: "static/images/single_user.png",
        title: "Friend",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754,
          columnNumber: 15
        }
      }), __jsx("img", {
        style: {
          width: '50px',
          borderRadius: '25px'
        },
        src: "static/images/bot.jpg",
        title: "Bot",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755,
          columnNumber: 15
        }
      }), __jsx("span", {
        onClick: function onClick() {
          return _this3.setPlayMode('');
        },
        style: {
          color: this.state.p2 == '' ? 'green' : 'white'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playMode',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756,
          columnNumber: 15
        }
      }, "Friend"), __jsx("span", {
        onClick: function onClick() {
          return _this3.setPlayMode('Computer');
        },
        style: {
          color: this.state.p2 == 'Computer' ? 'green' : 'white'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playMode',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757,
          columnNumber: 15
        }
      }, "Computer"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 760,
          columnNumber: 11
        }
      }, __jsx("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 761,
          columnNumber: 13
        }
      }), __jsx("input", {
        placeholder: "Player 2",
        value: this.state.p2,
        onChange: this.p2nm,
        disabled: this.state.p2 == 'Computer',
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 767,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775,
          columnNumber: 11
        }
      }, __jsx("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3119097088", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 776,
          columnNumber: 13
        }
      }, "ENTER"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3119097088",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 0.2s linear 20 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 0.2s linear 20 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}.playedCounter.__jsx-style-dynamic-selector{position:absolute;top:10px;left:10px;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}.playedCounter.__jsx-style-dynamic-selector{font-size:small;top:20px;left:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2xkZXZlbG9wZXIvUmVwb3MvdGljLXRhYy10b2UvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyd0JXLEFBRzJCLEFBVVEsQUFPQSxBQU9MLEFBTUssQUFPQSxBQU9BLEFBS04sQUFHQyxBQUdELEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU1GLEFBS2lELEFBUXJDLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVFNLEFBTVAsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFLQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQU1vRixBQU1sRSxBQU1BLEFBTUgsQUFLa0UsQUFNaEUsQUFHRSxBQUtMLEFBR0UsQUFNUyxBQU9uQixBQU1BLEFBUUEsQUFRQSxBQVFBLEFBT21CLEFBSzNCLEFBVUcsQUFNRCxBQVdBLEFBSUMsQUFRQSxBQWFBLEFBUUEsQUFTRCxBQUlBLEFBS0MsQUFPQSxBQVFHLFVBM29CQSxBQXFONkksQUFJQSxBQUkxSSxBQUlBLEFBSXlJLEFBSUEsQUFJekksQUFJQSxBQUlzRyxBQUlBLEFBSXRHLEFBSUEsQUFJa0UsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUk4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SUFsWFosRUFpR1YsQUF1UnNCLEFBc0t0QixTQXBnQkssQUEyZUEsRUE3Z0JELEdBMEdwQixBQTZiQSxTQTloQjRCLE1BUjVCLElBK0RBLFVBUm1DLEFBbWNDLE1BckhsQyxDQTVYcUIsVUFxV3JCLFVBWUEsRUFoWG9CLEFBMFdwQixJQVlBLGlCQXJYZ0IsU0F1QmxCLEFBMmVxQixlQXJkcUIsQUFtY0MsSUFtQjNDLG9DQXJkQSxBQW1jQSxxQkFoZkEiLCJmaWxlIjoiL1VzZXJzL213bGRldmVsb3Blci9SZXBvcy90aWMtdGFjLXRvZS9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tICd0aW1lcnMnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9GaXJlYmFzZSc7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5yZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCd1c2VycycpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpY3RvYzogdHJ1ZSxcbiAgICAgIG1zZzogJ2Jsb2NrJyxcbiAgICAgIG1haW5ib3g6ICdub25lJyxcbiAgICAgIHBsYXllcjogJ25vbmUnLFxuICAgICAgZmluYWxtc2c6ICcnLFxuICAgICAgcDE6ICcnLFxuICAgICAgcDI6ICdDb21wdXRlcicsXG4gICAgICB3b246IGZhbHNlLFxuICAgICAgbXVzaWM6IGZhbHNlLFxuICAgICAgYXVkaW86IHRydWUsXG4gICAgICB1c2Vyc0Zyb21GQjogW11cbiAgICB9XG4gICAgdGhpcy5wbGF5QXVkaW8gPSAodmFsKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5hdWRpbykge1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgJ3gnOlxuICAgICAgICAgICAgdGhpcy54LnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgdGhpcy5vLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3dpbic6XG4gICAgICAgICAgICB0aGlzLndpbi5wbGF5KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdnb3Zlcic6XG4gICAgICAgICAgICB0aGlzLmdvdmVyLnBsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc291bmQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5yZWYub25TbmFwc2hvdCh0aGlzLm9uQ29sbGVjdGlvblVwZGF0ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtc2c6ICdub25lJyxcbiAgICAgICAgcGxheWVyOiAnYmxvY2snLFxuICAgICAgfSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgb25Db2xsZWN0aW9uVXBkYXRlID0gKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICBjb25zdCBib2FyZHMgPSBbXTtcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgY29uc3QgeyBwbGF5ZXIxLCBwbGF5ZXIyLCB0aW1lU3RhbXAsIHBsYXRmb3JtLCBicm93c2VyIH0gPSBkb2MuZGF0YSgpO1xuICAgICAgYm9hcmRzLnB1c2goe1xuICAgICAgICBrZXk6IGRvYy5pZCxcbiAgICAgICAgZG9jLCAvLyBEb2N1bWVudFNuYXBzaG90XG4gICAgICAgIHBsYXllcjEsIHBsYXllcjIsIHRpbWVTdGFtcCwgcGxhdGZvcm0sIGJyb3dzZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcnNGcm9tRkI6IGJvYXJkc1xuICAgIH0sICgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcnNGcm9tRkIpKTtcbiAgfVxuXG4gIGVuZEdhbWUgPSAoKSA9PiB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUwgPSAnJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGljdG9jOiB0cnVlLFxuICAgICAgbXNnOiAnbm9uZScsXG4gICAgICBwbGF5ZXI6ICdibG9jaycsXG4gICAgICBtYWluYm94OiAnbm9uZScsXG4gICAgICBwMTogJycsXG4gICAgICBwMjogJ0NvbXB1dGVyJyxcbiAgICAgIHdvbjogZmFsc2UsXG4gICAgICBkZXY6IGZhbHNlLFxuICAgICAgZmluYWxtc2c6ICcnLFxuICAgIH0pXG4gIH1cblxuICBzZXRLZXkgPSAoZSkgPT4ge1xuICAgIHZhciBpZCA9IGUudGFyZ2V0LmlkO1xuICAgIHZhciBjbHMgPSBlLnRhcmdldC5jbGFzc05hbWU7XG4gICAgdmFyIHZhbDtcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID09PSAnJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0aWN0b2M6ICF0aGlzLnN0YXRlLnRpY3RvY1xuICAgICAgICB9LCAoKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgJiYgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJvdE1vdmUoY2xzKSwgNjUwKSlcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWN0b2MpIHtcbiAgICAgICAgICB2YWwgPSAnWCdcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygneCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFsID0gJ08nXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ28nKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IHZhbDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAodmFsID09ICdYJyA/ICc2cHggNnB4IDIxcHggI2QyZDI4MicgOiAnNnB4IDZweCAyMXB4ICM5MmJhZTInKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoY2xzKVxuICAgICAgICB9LCA1MDApXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpXG4gICAgY29uc29sZS5sb2codmFsKVxuICB9XG5cbiAgcmFuZG9tTm9GdW5jKCkge1xuICAgIHZhciBjID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTApXG4gICAgcmV0dXJuIGMgPT0gMCA/IGMgKyA1IDogYyA+IDkgPyBjIC0gNSA6IGNcbiAgfVxuXG4gIGJvdE1vdmUgPSAoY2xzKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnYm90IHBsYXllZCcpXG4gICAgICB2YXIgcmFuZG9tTm8gPSB0aGlzLnJhbmRvbU5vRnVuYygpXG4gICAgICBjb25zb2xlLmxvZyhyYW5kb21ObylcblxuICAgICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xuXG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUxID09ICcnIHx8IHUyID09ICcnIHx8IHUzID09ICcnKSkgeyAgIC8vVUhcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgdTIgPT0gJ08nKSB8fCAodTIgPT0gJ08nICYmIHUzID09ICdPJykgfHwgKHUzID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogdTIgPT0gJycgPyAndTInIDogJ3UzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKG0xID09ICcnIHx8IG0yID09ICcnIHx8IG0zID09ICcnKSkgeyAgICAvL01IXG4gICAgICAgIGlmICgobTEgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBtMyA9PSAnTycpIHx8IChtMyA9PSAnTycgJiYgbTEgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IG0xID09ICcnID8gJ20xJyA6IG0yID09ICcnID8gJ20yJyA6ICdtMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmIChsMSA9PSAnJyB8fCBsMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9MSFxuICAgICAgICBpZiAoKGwxID09ICdPJyAmJiBsMiA9PSAnTycpIHx8IChsMiA9PSAnTycgJiYgbDMgPT0gJ08nKSB8fCAobDMgPT0gJ08nICYmIGwxID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSBsMSA9PSAnJyA/ICdsMScgOiBsMiA9PSAnJyA/ICdsMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTEgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTFZcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgbTEgPT0gJ08nKSB8fCAobTEgPT0gJ08nICYmIGwxID09ICdPJykgfHwgKGwxID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTEgPT0gJycgPyAnbTEnIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUyID09ICcnIHx8IG0yID09ICcnIHx8IGwyID09ICcnKSkgeyAgICAvL01WXG4gICAgICAgIGlmICgodTIgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMiA9PSAnTycpIHx8IChsMiA9PSAnTycgJiYgdTIgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUyID09ICcnID8gJ3UyJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMic7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MyA9PSAnJyB8fCBtMyA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SVlxuICAgICAgICBpZiAoKHUzID09ICdPJyAmJiBtMyA9PSAnTycpIHx8IChtMyA9PSAnTycgJiYgbDMgPT0gJ08nKSB8fCAobDMgPT0gJ08nICYmIHUzID09ICdPJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MyA9PSAnJyA/ICd1MycgOiBtMyA9PSAnJyA/ICdtMycgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbDMgPT0gJycpKSB7ICAgIC8vUkRcbiAgICAgICAgaWYgKCh1MSA9PSAnTycgJiYgbTIgPT0gJ08nKSB8fCAobTIgPT0gJ08nICYmIGwzID09ICdPJykgfHwgKGwzID09ICdPJyAmJiB1MSA9PSAnTycpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTEgPT0gJycgPyAndTEnIDogbTIgPT0gJycgPyAnbTInIDogJ2wzJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0yID09ICcnIHx8IGwxID09ICcnKSkgeyAgICAvL0xEXG4gICAgICAgIGlmICgodTMgPT0gJ08nICYmIG0yID09ICdPJykgfHwgKG0yID09ICdPJyAmJiBsMSA9PSAnTycpIHx8IChsMSA9PSAnTycgJiYgdTMgPT0gJ08nKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0yID09ICcnID8gJ20yJyA6ICdsMSc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHUxID09ICcnIHx8IHUyID09ICcnIHx8IHUzID09ICcnKSB7ICAgLy9VSFxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiB1MiA9PSAnWCcpIHx8ICh1MiA9PSAnWCcgJiYgdTMgPT0gJ1gnKSB8fCAodTMgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiB1MiA9PSAnJyA/ICd1MicgOiAndTMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAobTEgPT0gJycgfHwgbTIgPT0gJycgfHwgbTMgPT0gJycpKSB7ICAgIC8vTUhcbiAgICAgICAgaWYgKChtMSA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIG0zID09ICdYJykgfHwgKG0zID09ICdYJyAmJiBtMSA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gbTEgPT0gJycgPyAnbTEnIDogbTIgPT0gJycgPyAnbTInIDogJ20zJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKGwxID09ICcnIHx8IGwyID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL0xIXG4gICAgICAgIGlmICgobDEgPT0gJ1gnICYmIGwyID09ICdYJykgfHwgKGwyID09ICdYJyAmJiBsMyA9PSAnWCcpIHx8IChsMyA9PSAnWCcgJiYgbDEgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IGwxID09ICcnID8gJ2wxJyA6IGwyID09ICcnID8gJ2wyJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCBtMSA9PSAnJyB8fCBsMSA9PSAnJykpIHsgICAgLy9MVlxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiBtMSA9PSAnWCcpIHx8IChtMSA9PSAnWCcgJiYgbDEgPT0gJ1gnKSB8fCAobDEgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiBtMSA9PSAnJyA/ICdtMScgOiAnbDEnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTIgPT0gJycgfHwgbTIgPT0gJycgfHwgbDIgPT0gJycpKSB7ICAgIC8vTVZcbiAgICAgICAgaWYgKCh1MiA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwyID09ICdYJykgfHwgKGwyID09ICdYJyAmJiB1MiA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTIgPT0gJycgPyAndTInIDogbTIgPT0gJycgPyAnbTInIDogJ2wyJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoISh0aGlzLnN0YXRlLnRpY3RvYykgJiYgKHUzID09ICcnIHx8IG0zID09ICcnIHx8IGwzID09ICcnKSkgeyAgICAvL1JWXG4gICAgICAgIGlmICgodTMgPT0gJ1gnICYmIG0zID09ICdYJykgfHwgKG0zID09ICdYJyAmJiBsMyA9PSAnWCcpIHx8IChsMyA9PSAnWCcgJiYgdTMgPT0gJ1gnKSkge1xuICAgICAgICAgIGxldCBpZCA9IHUzID09ICcnID8gJ3UzJyA6IG0zID09ICcnID8gJ20zJyA6ICdsMyc7XG4gICAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gJ08nKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSlcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYWxsV2lubmVyKGNscykgfSwgNTAwKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGljdG9jOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCEodGhpcy5zdGF0ZS50aWN0b2MpICYmICh1MSA9PSAnJyB8fCBtMiA9PSAnJyB8fCBsMyA9PSAnJykpIHsgICAgLy9SRFxuICAgICAgICBpZiAoKHUxID09ICdYJyAmJiBtMiA9PSAnWCcpIHx8IChtMiA9PSAnWCcgJiYgbDMgPT0gJ1gnKSB8fCAobDMgPT0gJ1gnICYmIHUxID09ICdYJykpIHtcbiAgICAgICAgICBsZXQgaWQgPSB1MSA9PSAnJyA/ICd1MScgOiBtMiA9PSAnJyA/ICdtMicgOiAnbDMnO1xuICAgICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY2FsbFdpbm5lcihjbHMpIH0sIDUwMClcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRpY3RvYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuc3RhdGUudGljdG9jKSAmJiAodTMgPT0gJycgfHwgbTIgPT0gJycgfHwgbDEgPT0gJycpKSB7ICAgIC8vTERcbiAgICAgICAgaWYgKCh1MyA9PSAnWCcgJiYgbTIgPT0gJ1gnKSB8fCAobTIgPT0gJ1gnICYmIGwxID09ICdYJykgfHwgKGwxID09ICdYJyAmJiB1MyA9PSAnWCcpKSB7XG4gICAgICAgICAgbGV0IGlkID0gdTMgPT0gJycgPyAndTMnIDogbTIgPT0gJycgPyAnbTInIDogJ2wxJztcbiAgICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSAnTycpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNhbGxXaW5uZXIoY2xzKSB9LCA1MDApXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc3RhdGUudGljdG9jKSB7XG4gICAgICAgIHZhciBvZGROb3MgPSBbXTsgLy8ndTEnLCAndTMnLCAnbTInLCAnbDEnLCAnbDMnXG4gICAgICAgIHZhciBldmVuTm9zID0gW107IC8vdTIsIG0xLCBtMywgbDJcbiAgICAgICAgdTEgPT0gJycgJiYgb2RkTm9zLnB1c2goJ3UxJyk7XG4gICAgICAgIHUzID09ICcnICYmIG9kZE5vcy5wdXNoKCd1MycpO1xuICAgICAgICBtMiA9PSAnJyAmJiBvZGROb3MucHVzaCgnbTInKTtcbiAgICAgICAgbDEgPT0gJycgJiYgb2RkTm9zLnB1c2goJ2wxJyk7XG4gICAgICAgIGwzID09ICcnICYmIG9kZE5vcy5wdXNoKCdsMycpO1xuICAgICAgICB1MiA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ3UyJyk7XG4gICAgICAgIG0xID09ICcnICYmIGV2ZW5Ob3MucHVzaCgnbTEnKTtcbiAgICAgICAgbTMgPT0gJycgJiYgZXZlbk5vcy5wdXNoKCdtMycpO1xuICAgICAgICBsMiA9PSAnJyAmJiBldmVuTm9zLnB1c2goJ2wyJyk7XG5cbiAgICAgICAgaWYgKG9kZE5vcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGlkID0gb2RkTm9zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9kZE5vcy5sZW5ndGgpXTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW5Ob3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBpZCA9IGV2ZW5Ob3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXZlbk5vcy5sZW5ndGgpXTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9ICdPJykgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gJzZweCA2cHggMjFweCAjOTJiYWUyJykgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0aWN0b2M6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICB0aWN0b2M6IHRydWVcbiAgICAvLyB9KVxuICB9XG5cbiAgY2FsbFdpbm5lciA9IChjbHMpID0+IHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICB2YXIgdTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUw7XG4gICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xuICAgIHZhciB1MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTDtcbiAgICB2YXIgbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUw7XG4gICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xuICAgIHZhciBtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTDtcbiAgICB2YXIgbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUw7XG4gICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xuICAgIHZhciBsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTDtcblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT09IHUyKSAmJiAodTEgPT0gdTMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykpIHtcbiAgICAgICAgaWYgKChtMSA9PSBtMikgJiYgKG0xID09IG0zKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAobTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xuICAgICAgICBpZiAoKGwxID09IGwyKSAmJiAobDEgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmIChsMSA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAobTEgIT0gJycpICYmIChsMSAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MSA9PSBsMSkgJiYgKHUxID09IG0xKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MiAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDIgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTIgPT0gbTIpICYmICh1MiA9PSBsMikpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUyID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChsMyAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xuICAgICAgICBpZiAoKHUzID09IG0zKSAmJiAodTMgPT0gbDMpKSB7XG5cbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcblxuICAgICAgICAgIGlmICh1MyA9PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3b246IHRydWUsXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XG4gICAgICAgIGlmICgodTEgPT0gbTIpICYmICh1MSA9PSBsMykpIHtcblxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xuXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMSAhPSAnJykpIHtcbiAgICAgICAgaWYgKCh1MyA9PSBtMikgJiYgKHUzID09IGwxKSkge1xuXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XG5cbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpICYmIChsMSAhPSAnJykgJiYgKGwyICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XG5cbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB3b246IGZhbHNlLFxuICAgICAgICAgIGZpbmFsbXNnOiAnZydcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdnb3ZlcicpXG5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwMW5tID0gKGUpID0+IHtcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwMTogdmFsXG4gICAgfSlcbiAgfVxuXG4gIHAybm0gPSAoZSkgPT4ge1xuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHAyOiB2YWxcbiAgICB9KVxuICB9XG5cbiAgc3RhcnRHYW1lID0gKCkgPT4ge1xuXG4gICAgbGV0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgZGIuY29sbGVjdGlvbigndXNlcnMnKS5hZGQoXG4gICAgICB7XG4gICAgICAgIHBsYXllcjE6IHRoaXMuc3RhdGUucDEsXG4gICAgICAgIHBsYXllcjI6IHRoaXMuc3RhdGUucDIsXG4gICAgICAgIHRpbWVTdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgcGxhdGZvcm06IHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbixcbiAgICAgICAgYnJvd3Nlcjogd2luZG93Lm5hdmlnYXRvci52ZW5kb3JcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGF5ZXI6ICdub25lJyxcbiAgICAgIG1haW5ib3g6ICdibG9jaycsXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU11c2ljID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbXVzaWM6ICF0aGlzLnN0YXRlLm11c2ljXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubXVzaWMpIHtcbiAgICAgICAgdGhpcy5zdGFydC5wbGF5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5tdXNpYykge1xuICAgICAgICB0aGlzLnN0YXJ0LnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldFBsYXlNb2RlID0gKHZhbCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcDI6IHZhbFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IHRydWUpIHtcbiAgICAgIHRoaXMucGxheUF1ZGlvKCd3aW4nKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpY3RvYylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbGF5ZWRDb3VudGVyJz5QbGF5ZWQge3RoaXMuc3RhdGUudXNlcnNGcm9tRkIubGVuZ3RofSB0aW1lczwvc3Bhbj5cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gdHJ1ZSAmJlxuICAgICAgICAgIDxpbWcgdGl0bGU9J1R1cm4gT2ZmIE11c2ljJyBjbGFzc05hbWU9J29uTXVzaWMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTXVzaWN9IHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWVGQk1WRVVBQUFELy8vL0J3Y0ZxYW1vek16Tzd1N3NyS3lzaUlpSTlQVDAyTmpiTHk4dkV4TVMxdGJYVDA5UDQrUGp3OFBCZFhWM2EydHBFUkVSOGZId1hGeGVIaDRmajQrUHE2dXF1cnE1eGNYRkxTMHRZV0ZoalkyTlJVVkVORFEzaTR1S1NrcEtob2FFZkh4K0ppWW1Sa1pHY25KeC9mMzhURXhOOUpKZmVBQUFJSVVsRVFWUjRuTzJkMlhhcVNoQkFJN01nalVDWVJVREYvUDhmM21pU2s1aEc3YUY2SUpmOW1yVU92US9ZWTNYVnk4dk0yYnUxbWFaWmxsWmJ6OTJyYmcwNFRsMlZ4ZW9meGRBY1ZEY0prdlh1dU1sWHQwUmxxN3BaVUhqcEVCU3JDZUpLZGRNZzhJNTJHRTNwWFY5anFycDV2SGdudjBQMzlLNkt0ZW9tOHVEMVlmUlE3MEtvdXBXc3VNM3d1Mk81dzZpNnFReTRkYldaN0ZnbTZSTFY3YVhFMm1XYnA1L21UOUNzWHFKWGpRYjUyL3NrbU0zQTc1M0xrRnJ2bmJoUjNYSWl2S01SM3gzMUhoT2RWVGYrT1U0ZkYxUy92VnMwL3lIdWs1SGwwL3pKb05yaFBvZjFyaVFjOWVabzZEUnAyZkhydlZQcXVGSjB6TjRHZUh1NkdqcFZPYjBZWWpWOFUyMTBnNU51bUVhOVI0YXZxcVcrY1ZLallCejE1bURvWkNISG9LZTU0ZDZwdVVlOSsyeFVUMHdQZFRYQURBdjNERjJWZW02VGxiRklQYldHN3E2M0gyK3p6TnZRTFAxY3ZKNHF3NzI1NmVDSEJYME1UWnRuTVVTTjdjaVVlMTFYdmtRNTJZWldrL2t5WDU1c3cvYWtRaytlNFhZUVBleXBOVnlMbmJXb042eGlOZCtuTk1OQnBaOEVRMWY2OENEWnNGYld3MGd5YkpRTENqWnNROVYrcTVWaENSUmNCNnIxVm1JTjN6YXE3UzZJTkV4VnkxMFJhT2lxZHZ0QW9LSDZidlNLT01PemFyVlBoQmxhbXJ4Q2NZYWoydG5vTjZJTUhRM0crZzlFR1o2bDdhVTlRNURobTYxYTdCK0NETGNLRi9XL0VHUjRVdTMxalJqRFE2bmE2eHN4aHE0V2MrNFBGc1BGY0RHVUJZcTZPSjQ4a1B3TGhsSHVqODAxNGlLWjJEYVp2V0VlbHVrUEIzdzZQRy9EemhqTTJ5UGVMZmFoenRjUXhXVzJ4VTZ3WDdFdDlwa2FvbkEwNjZsUW9QMGd4OUFSdTdRSVQ2MXpKNlp5UDg3Zk1FNGZCVmZzKzFrYm9zSS9QNHRTdzFZMTh6R01ZdnRNME5qalRBMEwvMmJVZTBBMlI4UElHS3MxNmFPeGJWcnREU1BqdUtOcDQ4d01JNk5LS0E4NHNlTWdqUTBqWThjUTNqc1hRNVJ2ZG15UG5vVmhFVzkyek5kQTlEZk1nOUxraWE2djlEYk03ZDdrREozUTJURGZaQTEvWklpMmhsRlpKU0RoeW5vYUludDdnTHBocHA4aDZtQnprT2hsaUlxNDNBSS9XaWZEM0IrNHhvVnBURjBNQzN2Y0Nia0lvWWRoWVovRTZMMUlNN1NNKzNxUmNXNEZCa1JLTXJ3ZmxCaW1hN0gzQVJVYnh0QTlKNDVTUTFSS3VHU2wwaENOTW03R0t6UkV2WWduWVNnMExFVThDRWVkWVNmcG9xTTZROFp0RjJxVUdXNWszZnRYWmlndGw1RXl3MHpFWTZaWURJRllEQVd5R0FLeEdBcmtmemdlaXJsaGlSdEt5K2k3R0FMeDl3MDlMSDV1TVFSak1RUmlNUlRJWWdnRWJpaXRUTUZpQ01SaUtKREZFSWpGVUNDTElSQ0xvVUQraDRaaThwY3VoZ0paRElINCs0WUpkaDMzN3h1YUloNHp4V0lJaEhERHZldXN2YVJ1MzZrOXozSmYvNFZiL1FWRHF6WFQwZjVSNkFOMVFYbXF0c2sxNkhIdWhvYzJIWTNwRWpRb0xJL2IxNWtidGlmN2NVcml6azZ4TzZUek1keW5Ca0VsaFFoN3dYTXhQUFNzaGRmbVliZy9zVmRwa1dTSWVBTDMzSXdudloyWVNqcVFob2NkWDRKQzdRM2JralBGcEJoRExJczNxK0ZieXAwa1ZHOURaK0JQTUttMW9RTlJFa05uUXhla2tKZkdoanVZRktqNkdsWkFPVjdGMUQva045eFhVTFhteE5Td2JIOG5hSTFvcjNTWm1sZnBiSCszajlhd2hjdVZyYWVoQzVoSldrOUR5SFJ2V2hwaU94Ri96ZEFDelFVdXBxWno4N3VycHpKOGNFMWFIOFBmYjRIR0VHcW8xOWJRQVM1T281OGhkRVorTHNNa0hmejRuZTZMT0RnbGx6L3NmcTk2eUExZDZIUjl6SWJXT1poZXZPVzlnMmVDSlRjMG9Xc2ZqeXgyVGpzK3JBd1FZdStoYUFqLzZiY0JXSkRCMEcxTzlITXFZa044cDFXMm9aTnVXRDRqWWtQUTZjeVZuc3J2Y08vSDl3eFNRenhKTGkvb1NDTllCYXc5T2FtaEMxNnBMYUtJTUU5czlwR0sxSEFOWHA0bUo5OWRPUEU4bk5Td0JqUDd3aWZON2JybUt4eVRFMllzMndGNWZVT1lqc005YzI3TmtocGl1Y2g0S2NnQ2VUemUweEZpUS9CaWJTRlI3R1hEMzhHUkdtSzVxamxCUk9QOUZtRGZpOVFRaXpQZ3BDRHBaN0QxT2dzZG9TRjAyVXVTaFVVQ1VnTXZyc2tNZ1NkdGlPRE1vb1laZ2trTmdjZkQvdmtUc1UwelJrZ05QZENxaWZuekJ5WlFtK3VraGc1a0ZXK0M0NkExMkw0ZXFTSG8ybUo0K2l0OGhhdTBHU1praHBCZGplODlmeHJjUkovWUVHNk5uejhQdzRLc0JrdHMrQUwxbVpLc2ZBZWdaMTBJbjM4eG53RFZteWVacm5rZ1QvcUU0RGNCK3g5THNtZ0NQUjhKaUd1TTRERUFMSkFJdGdEUCtZWW0wYytSdndjbld2YkNicTdUWEpIYjg1NEFvNEVrd01TRDNWeW5DbU8xK0VhTTRrZ1VJOVREbHRVdXFkSWpjKzI0eFlUVlB5RG5oeXZxMEt1YS9Rc0tDSDhQVUd1S0wyZ1BEMWc3VlBMOTN4Tnc3ZmVlMHZBbE1SaGFFTm5rZ3hKdy9VSkVuNURPR21pL1ZPUlRiT0FmZ0k4UElwYnJoeFZkSTRLTS9BWENuK0xGcElkck42eFA1TDFCa05MNHdSODFHNHgzNHV1ZXlERXFxVXF6WFVpQmo0Q1l6dEt2T09tenp3bjVsVVVmMkpYQmRxVWQwMGY2aFh1TTBYUjdFQ3BzeG1zT0FKUGZuOWc4Z2hlczFJNjd2SWdpOUVFVUZYa1hiekxpZFRVR1ZzeVRpd2drVy9uQmE4dzBPL1h2SE5PcThmZ0MxR0hqa2dJSVFXQkErMUxFOVNzVVJNTjM0bnNMOTY5UUJHdklwWVhBc2prY0FLN3dwZVZJcGdOdUFleUxMUTNFekJacWZaanIyTTFjMkFQOUVCbVdUYktBbWJlaFFWTHRGUVlja00vVUZwSVBIUWlJaVp1djUwRHhCZjlMaklYYy9JT0RlMXMvVm0zd2xKTExEeG15cWdPeHczVzFJOUs0Ri8ybVp0K1B5cy82djhFTERhdGlvT3RNQm9OdFZ4RWQ5UjRsYm1DNW8wTngzcXNGbEJ1TEtKU1dtUTJNaE9JS1FoUktxeWNEU2tyb21OdXBqRHFjSW5EVHpkTTVYQlNNc2tvY0N1R3c3Uis5eU56dXpabjFMeE5ZYlRxRUU2dkd3dWlyZWtiRHcwUDJCOGZibmJNZm1MWGxhcjZDK01GLzhKeXlCUmI1aXpvQUFBQUFTVVZPUks1Q1lJST0nIC8+XG4gICAgICAgIH1cbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gZmFsc2UgJiZcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9uIE11c2ljJyBjbGFzc05hbWU9J29mZk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFoRkJNVkVVQUFBRC8vLy90N2UyUGo0L3M3T3lNakl6dzhQRDE5ZldlbnA3NysvdEtTa3FKaVltenM3T1hsNWZNek14cWFtcm01dWJiMjlzSUNBaDRlSGpQejgvR3hzWWhJU0ZrWkdTcnE2dWpvNk1tSmlhRWhJUndjSEJGUlVXL3Y3KzN0N2M2T2pvWEZ4Y3ZMeTlUVTFOY1hGd2pJeU1URXhNMk5qWjhmSHhBUUVCU1VsSkpTVWxyemovaUFBQUg4MGxFUVZSNG5PMmQ2M3JxdUE2R0NhRWNDb0dra0hJczBKYTJ0TDMvKzl0ZEpWWVNJdHRTc0p2TWZ2VCttcGxsWituRGlTMUxzcWZURVFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkI4TXZtTk44T0ovdnBJa25pN21EUWplTmtrZTRQNjNEKyt0aTBiYmZ4Y2dvblNUd0tqUFNTUTNqNkR3cjl1dHNuRm1rbCttbjAzYlROZEdhcmhLR3R3THhweXlsOHJXdXErOGRIMDlaYnVaLzA2OHNMZ203VDl0dlk5WWhLUmlQOEN6MDByY0RHd0NRcVdheWk3ZkxyOC9qeTl0enBQTHcvYmo2L1QvTm9YWnlQMnY0WjN1UFM0djF3L21udXFkcTJmY2tZVnRRbHE3TkYyeS9MckhuUHU0azNVcDVENDlXUzJsSDlOSHVmMXJtZ0lHOHhmbU4wbkdhOXh0NU1jOE1KM3MwdHM2ZWFvYjY4Mk9VTzlhNmwzSTZQNnFmeFlaVkxGcG1kZDlvVzc5L0wyWHdjclZlVEgxYXJhRHhmZmova2MzRHJKeHJselJ3cmYvSnhDbGZUUk9mdHhISDJEMVBUMDllRGQ3b3BVYkJoR2svaFRhMS94Zjk0bksvVEhuV0hzVFk4ZmNoeDZjSWdHSGhZV21kcW5ybjg2OE5ydEkrTmdpb1lKcWpmYjd6L1FMTWsvTmZZZzhRb3MzUDFzKzg5SDVqaWZ0RlBwZGtrMWlWSkRDK05COC9PcEdXa21aM3BsTFB2TGZLaWV6UTRTMzJDSGFGcTdGeGluVkVyTWRJOU9jcmIyRWN4ekJ2M0hVdThWV0F3c0F1MGoySlllaUx4dzZYeFlaY3c2aTNTdy9wdWV6N3Zsc3ZkZVR1T0p0TkNsQ29oQ0xTTllsaHU3SFFVbDRHQk9GM1BYeldmMmVNa2E0VDdRdEgxczB5TFJuamRtRHI5VWhqajJucnBjR2RaZlE5WlUzUm5VUkZvR3NXN2F1TSt3MCt3c0tvTzNENjhwL1JVay9BSytUTkVvSDRVRVlFL0VwMTVOMm54c2IxOStFcnVxU2JoRVBrelZLRm11a0VGT2xTbzdPeW4wWW4zZlN0L0ZYVnBLbC9XNVJkRVdtb0V1dnNRdTlraitUM1Y3aEFQUStFU3F5OHFMdEJsZURKN3BHNVIwL091ck5FRTJtaWpxQkhvY0NwOXJ2MmpiWlE1TTAwRHlpaHFYdEVhUXJROFpRK04yVDNCVlRqcFd0aEgwZjhJZGpxNzdLbkdYU3dLUkZuMVd3dWJSSHd0ZGpxQ25jNDJleXcvSUFnQkxNUGlhWmFJQzNTZEExRUwxNFRkVTQxKzhHUm9aSkw0SnlPWXV6U1lZMkpHalg1Z3pJL3FweHRjb1B1bzFqNTdjc1R1Q2JhYk04QzZVZFM4b2s0bm1WOVUyRm9mU3JTYWJva0g0eEx4QUo2UFBLVEtXWEREM1FYWFU3dGFaT0JMQWo2eUhsQnVLVDhEQ0VFWWF5SUhIMFZrWEdzcHNLSGVsaDI3NXpvZ2Q2V05vcWZRdVFwRzZGd3ZQYUNRTVB3VWliNXFBZW9yaEszem1kRFlMdEZiOGtQOUJlU3NLQUFLU1pPVUpsamlmUVR6TGRBTkNtbExxVm1pdi9RVnBBQnZVR2hLekJRd3ZhZ2U4M012OVJYQ1RFTXRwdEdQb3M4RTVGSDlKVGZNcGVSdGlXNFV2V1pZMVFhNGhrSlk4ZW5aOFQydTBMMHZXdUMrdmtMdzJqUlIvU3FOakNFbzVQczBFZGRBL1ZUanMvQVBGUEw5MGp6ZlIydHZXaTQ4amlJbzVPOHR3R0p0L2hCdi9zY1NRU0YvZnpnSDh5aVo5OFo4R2xESTMrTkRKQ29nRlBrMTU1ZUNRcUpqZ25VbEZIMDF1TGNBTS9tUktIQVc3UE53ay90RFdQSDUwVVJ3K05EMFdoRnFHTVBMS0g2cXAvTWp3ckF0Q1libWh2UTRqUStKa0h4Z0Z5WVdxc1BONDY5SnZ2eVZSRWdna1YydkhEQnlZV3JWZEx6MFdUMmFuM3ZLUzQxTXZ3NDM1dTErRlBNZmxZMEtKcHVpZ0RYeUZxNUhVVVdpYXNRcUQyQ1Z0a2tiY2s5S0ljMjVMSkVmWXRDMWFFWCtFQ1pFZnAzVkdXdzY0ZzNha1FPRzZZSmZ2cExYaStIYjU1Yms4ZUUwaVNuUGlmTUdGcUV4NGJiVVlzQ0V5QSsyNVhXYjJNYWtOZlUwVVBURjN3SkRzUkVXVDJ4UFRaUXFvYlM2endqd2hsZGRQcnl1RFI4WnozVnRNT1h6TjRqNXIxTjFhbHBVbXdoTGttMXo4YjVicDhuZ2gxNnlIMTQrV25nVGtibVBWVitLdk5MdTZrc2gybUlzR2ZvWVh0ZTd4K3Rqdm4zR29tMnRxUkVHS3czdTh4SS81TDNJRjBUTVhXaExuVGNrbjdSUnp5L0NJWGIwc0hwYmF2WGhzWm8vMStRYXl1Q3hxTUxwVy92NjV1KzhCZXhqMFUvN2hYWk1YeE14YjhlWkdaaENNTGNOUCtWZFJiZVlxbk5QSkV2VXVTZlhSN3ZBcVVFS2Y1NHdOUmphV0ZRYnpxNFpTaXJleVVlOTlHbmdGcHcvaEJMRDZqZ3NUS0pLR0dKUmE4N0VHSTA4bkNHRjlFTWxKamczYVNwVEkxTG5pNmZ0WkJyM0I0TjRrYTUzdjNNV0xJZ1Y5NWx4MjBtTlNKMFhkdW5WaDlVOW5QSTR4cldWakNHc0UrVnh6M1AxZ05NL2VuTzFCNzZlRUtab2V3Mk5TQ3FENnpOWnlSSFl2TUlaWmQ0dno5TkhlNGNDbEp0UWZES3htL2hEK2RUYXpONmhRSTBvajB1STYxcDV5ZWRNTkhXS1ZWeENYYmpMRVRQZUdQSUxqaHh5c050M29leDZmZG83RktDZnkzVFB6bTVleGxVY2c2V3dHVzBYVFBkNGxibGE4am4zMHpYcHRWVnZ1ZEp5NVpqUTArOTE2bzNjd2JucjRtcHZ6ZWpaakxaZldEUGkxVEU3K3ZCYmlqRzhRbHZyTTY2bmZPcm1nbitHMkNHc2kwdXVVMGpVS0EzcGZnSmZzRzYwckZSKzJRb0tMOVRJV2ptRXZsWUVXQ3lDTXA4MmZCMGRhd3lSMU1YWjJxbnBheTlaM3lGV3ZmWFVOWGJwTmIxdG9zWGtGZmo3WmxvMG1sd21NcllHOHlvYzhXZG80aDgvTTVPN08yUnVnQ0hRRURDN3F6cXA3R3NrZmNGNFRZMG1QNTRuY0t2dUtKbWNuVitxVmh0NnVJV1NIOW9jbno1ODNHeDRFNFFnMjRWR3QrazNRYnpKdXZVWFZ1dlprRFpRTGNvODhLRjhpbTFKUE5Sa1kvWkxnanEzMDdTTjFDeVFmeVNvZmN3TUxuaHliTm82TjR3MUc2bWs0WUM4UzNiVmQzVXdhWFIvN29IWkt2OGZHdlNudy84M2VZcmoxK2wwcjcwWlZ4QUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFmZzcvZ2R2RFZaOXQ5c21CQUFBQUFCSlJVNUVya0pnZ2c9PScgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSB0cnVlICYmXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29uU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogZmFsc2UgfSl9IHNyYz0naHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjU1Y5WnFScTVPUzlJcVhVV3BoS0daSFd4ZXNsOC1iWmVJbUlENE9qdS1FSzVZemZtelgmcycgLz5cbiAgICAgICAgfVxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSBmYWxzZSAmJlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvZmZTb3VuZCcgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGF1ZGlvOiB0cnVlIH0pfSBzcmM9J2h0dHBzOi8vaWNvbnNwbGFjZS5jb20vd3AtY29udGVudC91cGxvYWRzL19pY29ucy9mZmZmZmYvMjU2L3BuZy9tdXRlLWljb24tMTgtMjU2LnBuZycgLz5cbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21zZyc+V2VsY29tZSB0byBUaWMtVG9jLVRvZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb290ZXJEZXYnPkRldmVsb3BlZCBCeSBSb2hpdCBOaW5hd2U8L3NwYW4+XG4gICAgICAgIDxhdWRpbyByZWY9eyh4KSA9PiB7IHRoaXMueCA9IHg7IH19PlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvU09VTkQxNC5XQVZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsobykgPT4geyB0aGlzLm8gPSBvOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1NvdW5kMi53YXZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8YXVkaW8gcmVmPXsod2luKSA9PiB7IHRoaXMud2luID0gd2luOyB9fT5cbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL0RydW1yb2xsLTIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cbiAgICAgICAgICA8L3NvdXJjZT5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgPGF1ZGlvIHJlZj17KGdvdmVyKSA9PiB7IHRoaXMuZ292ZXIgPSBnb3ZlcjsgfX0+XG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9TT1VORDQyLldBVlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XG4gICAgICAgICAgPC9zb3VyY2U+XG4gICAgICAgIDwvYXVkaW8+XG4gICAgICAgIDxhdWRpbyBsb29wPXt0cnVlfSByZWY9eyhzdGFydCkgPT4geyB0aGlzLnN0YXJ0ID0gc3RhcnQ7IH19PlxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvVGhlbWUtSW50cm9zaG9ydC53YXZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxuICAgICAgICAgIDwvc291cmNlPlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbkJveCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbEhlYWRpbmcnPlxuICAgICAgICAgICAgICA8c3Bhbj5QbGF5ZXIgMTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbE5hbWUnPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAxfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAyfSA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYWxNc2cnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud29uID09IHRydWUgP1xuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAneCdcbiAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucDEgPT0gJycgPyA8c3Bhbj5QbGF5ZXIgMSB3b248L3NwYW4+IDogPHNwYW4+e3RoaXMuc3RhdGUucDEgKyAnIHdvbid9PC9zcGFuPilcbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ28nID9cbiAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAyID09ICcnID8gPHNwYW4+UGxheWVyIDIgd29uPC9zcGFuPiA6IDxzcGFuPiB7dGhpcy5zdGF0ZS5wMiArICcgd29uJ30gPC9zcGFuPilcbiAgICAgICAgICAgICAgICAgIDogbnVsbCkpXG4gICAgICAgICAgICAgIDogKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ2cnICYmIDxzcGFuPkdhbWUgT3Zlcjwvc3Bhbj4pXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsdSBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gdGhpcy5zdGF0ZS50aWN0b2MgPyB0aGlzLnNldEtleShlKSA6IHt9IDogdGhpcy5zZXRLZXkoZSlcbiAgICAgICAgICAgICAgICB9IGlkPSd1MScgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfSBpZD0ndTInID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnUgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfSBpZD0ndTMnID48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20xJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbSBzZXBCb3gnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN0YXRlLnAyID09ICdDb21wdXRlcicgPyB0aGlzLnN0YXRlLnRpY3RvYyA/IHRoaXMuc2V0S2V5KGUpIDoge30gOiB0aGlzLnNldEtleShlKVxuICAgICAgICAgICAgICAgIH0+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20zJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xsIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wxJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wyJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/IHRoaXMuc3RhdGUudGljdG9jID8gdGhpcy5zZXRLZXkoZSkgOiB7fSA6IHRoaXMuc2V0S2V5KGUpXG4gICAgICAgICAgICAgICAgfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmwgc2VwQm94Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdGF0ZS5wMiA9PSAnQ29tcHV0ZXInID8gdGhpcy5zdGF0ZS50aWN0b2MgPyB0aGlzLnNldEtleShlKSA6IHt9IDogdGhpcy5zZXRLZXkoZSlcbiAgICAgICAgICAgICAgICB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllckRldGFpbHMnPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzUwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgIDxzcGFuPlBsYXkgd2l0aDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsIHdpZHRoOiAnMTAwJScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnNTBweCcsIGJvcmRlclJhZGl1czogJzI1cHgnIH19IHNyYz0nc3RhdGljL2ltYWdlcy9zaW5nbGVfdXNlci5wbmcnIHRpdGxlPSdGcmllbmQnIC8+XG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgYm9yZGVyUmFkaXVzOiAnMjVweCcgfX0gc3JjPSdzdGF0aWMvaW1hZ2VzL2JvdC5qcGcnIHRpdGxlPSdCb3QnIC8+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0UGxheU1vZGUoJycpfSBjbGFzc05hbWU9J3BsYXlNb2RlJyBzdHlsZT17eyBjb2xvcjogdGhpcy5zdGF0ZS5wMiA9PSAnJyA/ICdncmVlbicgOiAnd2hpdGUnIH19PkZyaWVuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gdGhpcy5zZXRQbGF5TW9kZSgnQ29tcHV0ZXInKX0gY2xhc3NOYW1lPSdwbGF5TW9kZScgc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJyA/ICdncmVlbicgOiAnd2hpdGUnIH19PkNvbXB1dGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllck5hbWVzJz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3BseTEnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMSdcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucDF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnAxbm19XG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cblxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1BsYXllciAyJ1xuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDJubX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucDIgPT0gJ0NvbXB1dGVyJ31cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIiAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudGVyQnRuRGl2Jz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlbnRlckJ0bicgb25DbGljaz17dGhpcy5zdGFydEdhbWV9PkVOVEVSPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIC5wbHkxe1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vbk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAub25Tb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5vZmZNdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDk4cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm11c2lje1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wbE5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW50ZXJCdG5EaXZ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsYXllck5hbWVze1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXh0LWZsaWNrZXItb3V0LWdsb3cge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0ZXh0LWZsaWNrZXItb3V0LWdsb3cgMC4ycyBsaW5lYXIgMjAgYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDAuMnMgbGluZWFyIDIwIGJvdGg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW03LmV6Z2lmLmNvbS90bXAvZXpnaWYtNy0xMzBiZjBiOGM3NjkuZ2lmXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogICAgIGNvdmVyOyAgICAgICAgICAgICAgICAgICAgICAvKiA8LS0tLS0tICovXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5YT1NwYW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IFxuICAgICAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOyBcbiAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0Om5vbmU7IFxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDpub25lOyBcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDpub25lO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICNkMmQyODI7ICBmb3IgWFxuICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiA2cHggNnB4IDIxcHggIzkyYmFlMjsgIGZvciBPXG5cbiAgICAgICAgICAgICAgLmVudGVyQnRue1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGV2TXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5UWU1zZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRldk5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tYWluQm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm94e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmxpcDtcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zcGlubmVye1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGlubmVyO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMG1zO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubHV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5tc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ydXtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAxcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm17XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5sbHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJse1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucm93Qm94e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzMuMzMlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcEJveHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3ZW07XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIC5wbGF5ZWRDb3VudGVye1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAgYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHRleHQtZmxpY2tlci1vdXQtZ2xvdyB7XG4gICAgICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMy45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE0JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDE0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjMlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMjQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAzNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDIuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0NC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDU0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS41JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNzkuNCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDg5LjglIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA5MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcbiAgICAgICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEzLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAxNSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDIyLjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLCAwIDAgMTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyMyUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAyNC45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDI1JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDM0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgMzkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA0Mi45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQzJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDQ0LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNDUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNTQuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA1NSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA2OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDY5LjUlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgNjkuOSUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA3OS40JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDc5LjklIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgODkuOCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA4OS45JSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDkwJSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmxpcCB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA4MCUge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgwLjk1LCAwLjk1LCAwLjk1KSB0cmFuc2xhdGUzZCgwLCAwLCAwKVxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAubXNne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAub25NdXNpY3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyOXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICByaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5vblNvdW5ke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLm9mZk11c2lje1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDdweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5vZmZTb3VuZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA2MXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICByaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnBsYXllcn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBseTF7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZ2FtZURpc3BsYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZmluYWxNc2d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmJveHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmxpcDtcbiAgICAgICAgICAgICAgICAvLyAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAucGxIZWFkaW5ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLmRldk1zZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5UWU1zZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGV2TmFtZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnBsTmFtZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXBCb3h7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAucGxheWVkQ291bnRlcntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=/Users/mwldeveloper/Repos/tic-tac-toe/pages/_app.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.d817f5c0a785d53b3999.hot-update.js.map