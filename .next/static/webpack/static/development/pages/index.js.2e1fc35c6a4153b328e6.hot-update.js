webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/tictactoe.js":
/*!****************************!*\
  !*** ./pages/tictactoe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TicTacToe; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\JS\\airlines\\pages\\tictactoe.js";




var TicTacToe =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TicTacToe, _PureComponent);

  function TicTacToe(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TicTacToe);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TicTacToe).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "endGame", function () {
      _this.setState({
        mainbox: 'none',
        won: false,
        dev: true
      }, function () {
        return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
          return _this.restartGame();
        }, 3500);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setKey", function (e) {
      var id = e.target.id;
      var cls = e.target.className;
      var val;

      if (_this.state.won == false) {
        if (document.getElementById(id).innerHTML === '') {
          _this.setState({
            tictoc: !_this.state.tictoc
          });

          if (_this.state.tictoc == true) {
            val = 'X';

            _this.playAudio('x');
          } else {
            val = 'O';

            _this.playAudio('o');
          }

          (document.getElementById(id).innerHTML = val) && (document.getElementById(id).style.textShadow = val == 'X' ? '6px 6px 21px #d2d282' : '6px 6px 21px #92bae2');
          Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
            _this.callWinner(cls);
          }, 500);
        }
      }

      console.log(document.getElementById(id).innerHTML);
      console.log(val); // this.callWinner()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "callWinner", function (cls) {
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
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
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p2 != '' ? _this.state.p2 + ' won' : 'Player 2 won');
            }
          }
        }
      }

      if (_this.state.won == false) {
        if (u1 != '' && u2 != '' && u3 != '' && m1 != '' && m2 != '' && m3 != '' && l1 != '' && l2 != '' && l3 != '') {
          _this.setState({
            won: false
          }, function () {
            _this.state.won == false && alert('Game Over!');
            Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
              return _this.endGame();
            }, 4000);
          });
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p1nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p1: val
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p2nm", function (e) {
      var val = e.target.value.trim();

      _this.setState({
        p2: val
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "startGame", function () {
      _this.setState({
        player: 'none',
        mainbox: 'block'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMusic", function () {
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

    _this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      p1: '',
      p2: '',
      won: false,
      dev: false,
      music: false
    };

    _this.playAudio = function (val) {
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

        default:
          console.log('no sound');
          break;
      }
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TicTacToe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
        _this2.setState({
          msg: 'none',
          player: 'block'
        });
      }, 2000);
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
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
        msg: 'none',
        player: 'block',
        mainbox: 'none',
        p1: '',
        p2: '',
        won: false,
        dev: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.won == true) {
        this.playAudio('win');
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, this.state.music == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), this.state.music == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }))))), this.state.dev == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'TYMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Thank You For Playing"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Developed by Rohit Ninawe!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        onChange: this.p2nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3389315020", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3389315020",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:160px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:40px;cursor:pointer;right:22px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:27px;cursor:pointer;right:13px;height:47px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:140px;margin-top:0px;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxKU1xcYWlybGluZXNcXHBhZ2VzXFx0aWN0YWN0b2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa2RXLEFBRzJCLEFBVVEsQUFPQSxBQU9OLEFBR1EsQUFHUixBQUdDLEFBT0EsQUFPd0IsQUFHeEIsQUFNRixBQVNZLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVNtRixBQU1sRSxBQU1BLEFBTUgsQUFLa0UsQUFNaEUsQUFHRSxBQUtMLEFBR0UsQUFNUyxBQU9uQixBQVFBLEFBT21CLEFBSzNCLEFBVUcsQUFNRCxBQVdRLEFBS1AsQUFhQSxBQVFBLEFBU0QsQUFJQSxBQUtDLEFBT0EsVUF6VUcsQUE0UEMsQ0FwTUosQ0FoQ2YsQUFNQSxBQTJEd0IsQUFrQlIsQUFJQSxBQTZKUSxBQThDTixBQUlBLENBeE1KLEFBb0RDLEFBa0hELEFBOENDLENBcEtBLElBNUpKLEFBT0EsQUF1TkEsQUFRQSxDQXhHVSxBQVVBLEFBS0EsQUFLQSxBQUtBLENBdElyQixBQTRQaUIsR0F0TkYsRUFzREUsQUFzS0EsQ0E1UkgsQUEyR2QsQUFJQSxDQXJHYSxBQU9BLEFBdU5JLEFBUUEsQUFZSCxDQThEZCxBQUlBLE1Bck9vQixBQW1MQSxDQVdwQixDQXROZSxDQW5CZixBQW9FRSxBQTBCWSxBQW9GQSxBQXNCQSxDQXJQTyxBQVVQLEFBT0EsQUFzSGlCLEFBVUEsQUFLWixBQUtZLEFBS0EsQ0E0RlYsQ0F0SVEsQUFzS0MsRUFwRGpCLEFBUUEsT0FwR0csQUFvRkUsQUFzQkgsQ0EzT0UsQUFPQSxFQXVFRixBQW1MQSxDQW5DRCxBQVFBLEVBMUZkLEVBdEprQixDQTRQQSxJQU5sQixDQTFHQSxFQWpJQSxBQU9BLEFBdUVjLEFBdUlRLEFBU3RCLEFBUUEsQUEyQmMsRUFySWQsQUFVQSxBQVVBLEFBS0EsTUEvSm9CLENBNkJZLEFBT0EsQUFVUCxBQXVCQSxBQTBCRCxBQTZKSixBQU1LLEFBbUNPLEFBUVIsQUFrQlEsR0F0T2xCLEFBbUxBLElBaEVWLEFBUUYsSUEvSjhCLEFBMktoQyxFQXpEYyxBQXdDVCxBQVFILEFBZ0hZLENBcEtkLENBekVrQixBQW1MQyxFQTVRSixDQTRQQSxPQXJGVSxBQWdLQSxLQXRVSCxBQW1IRCxBQXNLQyxDQWhNQSxBQW1LQSxDQWdCQSxJQS9NRyxFQStERyxZQTNINUIsQ0F5RkEsQUFtS0EsQ0FnQkEsMEJBL0tjLEFBOE1BLFlBN01DLEFBOE1BLFFBaExzQixDQWhGaEIsQUF1QkEsQUE2TEEsSUFqS1UsQUE4TUEsWUFsUlQsQUFPQSxBQWlRQSxBQTBCQSxTQXZKRCxBQWdLQSxFQW5SckIsU0F2QmtCLEFBT0EsQUEwQkcsQUF1T0gsQUEwQkEsQ0ExTVUsQUFzS0MsZUE3UFgsQUFPRixBQWlRRSxBQTBCRixjQTFSaEIsQUEyUkEsRUFsU0EsQUF3UUEsU0F6S21DLGNBc0VHLEVBdEp2QixBQXVCRCxBQTZMQSxJQTVJZ0IsQUFzS0MsR0EvR1EsS0F2RzFCLEFBNkxiLENBcE5BLE1Bb0l1QyxBQU1ELElBbEhaLEVBaUdWLEFBdUJzQixBQXlJdEIsU0F2T0ssQUE4TUEsRUFoUEQsR0EwR3BCLEFBZ0tBLFNBalE0QixNQVI1QixJQStEQSxVQVJtQyxBQXNLQyxNQXhGbEMsQ0E1SHFCLFVBcUdyQixVQVlBLEVBaEhvQixBQTBHcEIsSUFZQSxpQkFySGdCLFNBdUJsQixBQThNcUIsZUF4THFCLEFBc0tDLElBbUIzQyxvQ0F4TEEsQUFzS0EscUJBbk5BIiwiZmlsZSI6IkM6XFxKU1xcYWlybGluZXNcXHBhZ2VzXFx0aWN0YWN0b2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpY3RvYzogdHJ1ZSxcclxuICAgICAgbXNnOiAnYmxvY2snLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHBsYXllcjogJ25vbmUnLFxyXG4gICAgICBwMTogJycsXHJcbiAgICAgIHAyOiAnJyxcclxuICAgICAgd29uOiBmYWxzZSxcclxuICAgICAgZGV2OiBmYWxzZSxcclxuICAgICAgbXVzaWM6IGZhbHNlLFxyXG4gICAgfVxyXG4gICAgdGhpcy5wbGF5QXVkaW8gPSAodmFsKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodmFsKSB7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICB0aGlzLngucGxheSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICB0aGlzLm8ucGxheSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnd2luJzpcclxuICAgICAgICAgIHRoaXMud2luLnBsYXkoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc291bmQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbXNnOiAnbm9uZScsXHJcbiAgICAgICAgcGxheWVyOiAnYmxvY2snLFxyXG4gICAgICB9KVxyXG4gICAgfSwgMjAwMClcclxuICB9XHJcblxyXG4gIHJlc3RhcnRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtc2c6ICdub25lJyxcclxuICAgICAgcGxheWVyOiAnYmxvY2snLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHAxOiAnJyxcclxuICAgICAgcDI6ICcnLFxyXG4gICAgICB3b246IGZhbHNlLFxyXG4gICAgICBkZXY6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGVuZEdhbWUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgICB3b246IGZhbHNlLFxyXG4gICAgICBkZXY6IHRydWVcclxuICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXN0YXJ0R2FtZSgpLCAzNTAwKSlcclxuICB9XHJcblxyXG4gIHNldEtleSA9IChlKSA9PiB7XHJcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgIHZhciBjbHMgPSBlLnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICB2YXIgdmFsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRpY3RvYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB2YWwgPSAnWCdcclxuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCd4JylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YWwgPSAnTydcclxuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdvJylcclxuICAgICAgICB9XHJcbiAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gdmFsKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAodmFsID09ICdYJyA/ICc2cHggNnB4IDIxcHggI2QyZDI4MicgOiAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoY2xzKVxyXG4gICAgICAgIH0sIDUwMFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTClcclxuICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgIC8vIHRoaXMuY2FsbFdpbm5lcigpXHJcbiAgfVxyXG5cclxuICBjYWxsV2lubmVyID0gKGNscykgPT4ge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXHJcbiAgICB2YXIgdTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgdTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgdTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUw7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTEgPT09IHUyKSAmJiAodTEgPT0gdTMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKChtMSA9PSBtMikgJiYgKG0xID09IG0zKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAobTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgobDEgPT0gbDIpICYmIChsMSA9PSBsMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKGwxID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MSA9PSBsMSkgJiYgKHUxID09IG0xKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUyICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMiAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUyID09IG0yKSAmJiAodTIgPT0gbDIpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MiA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChsMyAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTMgPT0gbTMpICYmICh1MyA9PSBsMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUxID09IG0yKSAmJiAodTEgPT0gbDMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MyAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MyA9PSBtMikgJiYgKHUzID09IGwxKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykgJiYgKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHdvbjogZmFsc2VcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSAmJiBhbGVydCgnR2FtZSBPdmVyIScpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHAxbm0gPSAoZSkgPT4ge1xyXG4gICAgdmFyIHZhbCA9IChlLnRhcmdldC52YWx1ZSkudHJpbSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHAxOiB2YWxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwMm5tID0gKGUpID0+IHtcclxuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMjogdmFsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBsYXllcjogJ25vbmUnLFxyXG4gICAgICBtYWluYm94OiAnYmxvY2snLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZU11c2ljID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG11c2ljOiAhdGhpcy5zdGF0ZS5tdXNpY1xyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5tdXNpYykge1xyXG4gICAgICAgIHRoaXMuc3RhcnQucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLm11c2ljKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydC5wYXVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMucGxheUF1ZGlvKCd3aW4nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tdXNpYyA9PSB0cnVlICYmXHJcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9mZiBNdXNpYycgY2xhc3NOYW1lPSdvbk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFlRkJNVkVVQUFBRC8vLy9Cd2NGcWFtb3pNek83dTdzckt5c2lJaUk5UFQwMk5qYkx5OHZFeE1TMXRiWFQwOVA0K1BqdzhQQmRYVjNhMnRwRVJFUjhmSHdYRnhlSGg0Zmo0K1BxNnVxdXJxNXhjWEZMUzB0WVdGaGpZMk5SVVZFTkRRM2k0dUtTa3BLaG9hRWZIeCtKaVltUmtaR2NuSngvZjM4VEV4TjlKSmZlQUFBSUlVbEVRVlI0bk8yZDJYYXFTaEJBSTdNZ2pVQ1lSVURGL1A4ZjNtaVNrNWhHN2FGNklKZjltclVPdlEvWVkzWFZ5OHZNMmJ1MW1hWlpsbFpiejkycmJnMDRUbDJWeGVvZnhkQWNWRGNKa3ZYdXVNbFh0MFJscTdwWlVIanBFQlNyQ2VKS2RkTWc4STUyR0UzcFhWOWpxcnA1dkhnbnYwUDM5SzZLdGVvbTh1RDFZZlJRNzBLb3VwV3N1TTN3dTJPNXc2aTZxUXk0ZGJXWjdGZ202UkxWN2FYRTJtV2JwNS9tVDlDc1hxSlhqUWI1Mi9za21NM0E3NTNMa0Zydm5iaFIzWElpdktNUjN4MzFIaE9kVlRmK09VNGZGMVMvdlZzMC95SHVrNUhsMC96Sm9OcmhQb2YxcmlRYzllWm82RFJwMmZIcnZWUHF1Rkowek40R2VIdTZHanBWT2IwWVlqVjhVMjEwZzVOdW1FYTlSNGF2cXFXK2NWS2pZQnoxNW1Eb1pDSEhvS2U1NGQ2cHVVZTkrMnhVVDB3UGRUWEFEQXYzREYyVmVtNlRsYkZJUGJXRzdxNjNIMit6ek52UUxQMWN2SjRxdzcyNTZlQ0hCWDBNVFp0bk1VU043Y2lVZTExWHZrUTUyWVpXay9reVg1NXN3L2FrUWsrZTRYWVFQZXlwTlZ5TG5iV29ONnhpTmQrbk5NTkJwWjhFUTFmNjhDRFpzRmJXdzBneWJKUUxDalpzUTlWK3E1VmhDUlJjQjZyMVZtSU4zemFxN1M2SU5FeFZ5MTBSYU9pcWR2dEFvS0g2YnZTS09NT3phclZQaEJsYW1yeENjWWFqMnRub042SU1IUTNHK2c5RUdaNmw3YVU5UTVEaG02MWE3QitDRExjS0YvVy9FR1I0VXUzMWpSakRRNm5hNnhzeGhxNFdjKzRQRnNQRmNER1VCWXE2T0o0OGtQd0xobEh1ajgwMTRpS1oyRGFadldFZWx1a1BCM3c2UEcvRHpoak0yeVBlTGZhaHp0Y1F4V1cyeFU2d1g3RXQ5cGthb25BMDY2bFFvUDBneDlBUnU3UUlUNjF6SjZaeVA4N2ZNRTRmQlZmcysxa2Jvc0kvUDR0U3cxWTE4ekdNWXZ0TTBOampUQTBMLzJiVWUwQTJSOFBJR0tzMTZhT3hiVnJ0RFNQanVLTnA0OHdNSTZOS0tBODRzZU1nalEwalk4Y1EzanNYUTVSdmRteVBub1ZoRVc5MnpOZEE5RGZNZzlMa2lhNnY5RGJNN2Q3a0RKM1EyVERmWkExL1pJaTJobEZaSlNEaHlub2FJbnQ3Z0xwaHBwOGg2bUJ6a09obGlJcTQzQUkvV2lmRDNCKzR4b1ZwVEYwTUMzdmNDYmtJb1lkaFlaL0U2TDFJTTdTTSszcVJjVzRGQmtSS01yd2ZsQmltYTdIM0FSVWJ4dEE5SjQ1U1ExUkt1R1NsMGhDTk1tN0dLelJFdllnbllTZzBMRVU4Q0VlZFlTZnBvcU02UThadEYycVVHVzVrM2Z0WFppZ3RsNUV5dzB6RVk2WllESUZZREFXeUdBS3hHQXJrZnpnZWlybGhpUnRLeStpN0dBTHg5dzA5TEg1dU1RUmpNUVJpTVJUSVlnZ0ViaWl0VE1GaUNNUmlLSkRGRUlqRlVDQ0xJUkNMb1VEK2g0Wmk4cGN1aGdKWkRJSDQrNFlKZGgzMzd4dWFJaDR6eFdJSWhIRER2ZXVzdmFSdTM2azl6M0pmLzRWYi9RVkRxelhUMGY1UjZBTjFRWG1xdHNrMTZISHVob2MySFkzcEVqUW9MSS9iMTVrYnRpZjdjVXJpems2eE82VHpNZHluQmtFbGhRaDd3WE14UFBTc2hkZm1ZYmcvc1ZkcGtXU0llQUwzM0l3bnZaMllTanFRaG9jZFg0SkM3UTNia2pQRnBCaERMSXMzcStGYnlwMGtWRzlEWitCUE1LbTFvUU5SRWtOblF4ZWtrSmZHaGp1WUZLajZHbFpBT1Y3RjFEL2tOOXhYVUxYbXhOU3diSDhuYUkxb3IzU1ptbGZwYkgrM2o5YXdoY3VWcmFlaEM1aEpXazlEeUhSdldocGlPeEYvemRBQ3pRVXVwcVp6ODd1cnB6SjhjRTFhSDhQZmI0SEdFR3FvMTliUUFTNU9vNThoZEVaK0xzTWtIZno0bmU2TE9EZ2xsei9zZnE5NnlBMWQ2SFI5ekliV09aaGV2T1c5ZzJlQ0pUYzBvV3Nmanl4MlRqcytyQXdRWXUraGFBai82YmNCV0pEQjBHMU85SE1xWWtOOHAxVzJvWk51V0Q0allrUFE2Y3lWbnNydmNPL0g5d3hTUXp4SkxpL29TQ05ZQmF3OU9hbWhDMTZwTGFLSU1FOXM5cEdLMUhBTlhwNG1KOTlkT1BFOG5OU3dCalA3d2lmTjdicm1LeHlURTJZczJ3RjVmVU9ZanNNOWMyN05raHBpdWNoNEtjZ0NlVHplMHhGaVEvQmliU0ZSN0dYRDM4R1JHbUs1cWpsQlJPUDlGbURmaTlRUWl6UGdwQ0RwWjdEMU9nc2RvU0YwMlV1U2hVVUNVZ012cnNrTWdTZHRpT0RNb29ZWmdra05nY2ZEL3ZrVHNVMHpSa2dOUGRDcWlmbnpCeVpRbSt1a2hnNWtGVytDNDZBMTJMNGVxU0hvMm1KNCtpdDhoYXUwR1Naa2hwQmRqZTg5ZnhyY1JKL1lFRzZObno4UHc0S3NCa3RzK0FMMW1aS3NmQWVnWjEwSW4zOHhud0RWbXllWnJua2dUL3FFNERjQit4OUxzbWdDUFI4SmlHdU00REVBTEpBSXRnRFArWVltMGMrUnZ3Y25XdmJDYnE3VFhKSGI4NTRBbzRFa3dNU0QzVnluQ21PMStFYU00a2dVSTlURGx0VXVxZElqYysyNHhZVFZQeURuaHl2cTBLdWEvUXNLQ0g4UFVHdUtMMmdQRDFnN1ZQTDkzeE53N2ZlZTB2QWxNUmhhRU5ua2d4SncvVUpFbjVET0dtaS9WT1JUYk9BZmdJOFBJcGJyaHhWZEk0S00vQVhDbitMRnBJZHJONnhQNUwxQmtOTDR3UjgxRzR4MzR1dWV5REVxcVVxelhVaUJqNENZenRLdk9PbXp6d241bFVVZjJKWEJkcVVkMDBmNmhYdU0wWFI3RUNwc3htc09BSlBmbjlnOGdoZXMxSTY3dklnaTlFRVVGWGtYYnpMaWRUVUdWc3lUaXdna1cvbkJhOHcwTy9YdkhOT3E4ZmdDMUdIamtnSUlRV0JBKzFMRTlTc1VSTU4zNG5zTDk2OVFCR3ZJcFlYQXNqa2NBSzd3cGVWSXBnTnVBZXlMTFEzRXpCWnFmWmpyMk0xYzJBUDlFQm1XVGJLQW1iZWhRVkx0RlFZY2tNL1VGcElQSFFpSWladXY1MER4QmY5TGpJWGMvSU9EZTFzL1ZtM3dsSkxMRHhteXFnT3h3M1cxSTlLNEYvMm1adCtQeXMvNnY4RUxEYXRpb090TUJvTnRWeEVkOVI0bGJtQzVvME54M3FzRmxCdUxLSlNXbVEyTWhPSUtRaFJLcXljRFNrcm9tTnVwakRxY0luRFR6ZE01WEJTTXNrb2NDdUd3N1IrOXlOenV6Wm4xTHhOWWJUcUVFNnZHd3VpcmVrYkR3MFAyQjhmYm5iTWZtTFhsYXI2QytNRi84Snl5QlJiNWl6b0FBQUFBU1VWT1JLNUNZSUk9JyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tdXNpYyA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgPGltZyB0aXRsZT0nVHVybiBPbiBNdXNpYycgY2xhc3NOYW1lPSdvZmZNdXNpYycgb25DbGljaz17dGhpcy5oYW5kbGVNdXNpY30gc3JjPSdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBaEZCTVZFVUFBQUQvLy8vdDdlMlBqNC9zN095TWpJenc4UEQxOWZXZW5wNzcrL3RLU2txSmlZbXpzN09YbDVmTXpNeHFhbXJtNXViYjI5c0lDQWg0ZUhqUHo4L0d4c1loSVNGa1pHU3JxNnVqbzZNbUppYUVoSVJ3Y0hCRlJVVy92NyszdDdjNk9qb1hGeGN2THk5VFUxTmNYRndqSXlNVEV4TTJOalo4Zkh4QVFFQlNVbEpKU1VscnpqL2lBQUFIODBsRVFWUjRuTzJkNjNycXVBNkdDYUVjQ29Ha2tISXMwSmEydEwzLys5dGRKVllTSXR0U3NKdk1mdlQrbXBsbForbkRpUzFMc3FmVEVRUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCOE12bU5OOE9KL3ZwSWtuaTdtRFFqZU5ra2U0UDYzRCsrdGkwYmJmeGNnb25TVHdLalBTU1EzajZEd3I5dXRzbkZta2wrbW4wM2JUTmRHYXJoS0d0d0x4cHl5bDhyV3VxKzhkSDA5WmJ1Wi8wNjhzTGdtN1Q5dHZZOVloS1JpUDhDejAwcmNER3dDUXFXYXlpN2ZMcjgvank5dHpwUEx3L2JqNi9UL05vWFp5UDJ2NFozdVBTNHYxdy9tbnVxZHEyZmNrWVZ0UWxxN05GMnkvTHJIblB1NGszVXA1RDQ5V1MybEg5Tkh1ZjFybWdJRzh4Zm1OMG5HYTl4dDVNYzhNSjNzMHRzNmVhb2I2ODJPVU85YTZsM0k2UDZxZnhZWlZMRnBtZGQ5b1c3OS9MMlh3Y3JWZVRIMWFyYUR4ZmZqL2tjM0RySnhybHpSd3JmL0p4Q2xmVFJPZnR4SEgyRDFQVDA5ZURkN29wVWJCaEdrL2hUYTEveGY5NG5LL1RIbldIc1RZOGZjaHg2Y0lnR0hoWVdtZHFucm44NjhOcnRJK05naW9ZSnFqZmI3ei9RTE1rL05mWWc4UW9zM1Axcys4OUg1amlmdEZQcGRrazFpVkpEQytOQjgvT3BHV2ttWjNwbExQdkxmS2llelE0UzMyQ0hhRnE3RnhpblZFck1kSTlPY3JiMkVjeHpCdjNIVXU4VldBd3NBdTBqMkpZZWlMeHc2WHhZWmN3NmkzU3cvcHVlejd2bHN2ZGVUdU9KdE5DbENvaENMU05ZbGh1N0hRVWw0R0JPRjNQWHpXZjJlTWthNFQ3UXRIMXMweUxSbmpkbURyOVVoamoybnJwY0dkWmZROVpVM1JuVVJGb0dzVzdhdU0rdzArd3NLb08zRDY4cC9SVWsvQUsrVE5Fb0g0VUVZRS9FcDE1TjJueHNiMTkrRXJ1cVNiaEVQa3pWS0ZtdWtFRk9sU283T3luMFluM2ZTdC9GWFZwS2wvVzVSZEVXbW9FdXZzUXU5a2orVDNWN2hBUFErRVNxeThxTHRCbGVESjdwRzVSMC9PdXJORUUybWlqcUJIb2NDcDlydjJqYlpRNU0wMER5aWhxWHRFYVFyUThaUStOMlQzQlZUanBXdGhIMGY4SWRqcTc3S25HWFN3S1JGbjFXd3ViUkh3dGRqcUNuYzQyZXl3L0lBZ0JMTVBpYVphSUMzU2RBMUVMMTRUZFU0MSs4R1JvWkpMNEp5T1l1elNZWTJKR2pYNWd6SS9xcHh0Y29QdW8xajU3Y3NUdUNiYWJNOEM2VWRTOG9rNG5tVjlVMkZvZlNyU2Fib2tINHhMeEFKNlBQS1RLV1hERDNRWFhVN3RhWk9CTEFqNnlIbEJ1S1Q4RENFRVlheUlISDBWa1hHc3BzS0hlbGgyNzV6b2dkNldOb3FmUXVRcEc2Rnd2UGFDUU1Qd1VpYjVxQWVvcmhLM3ptZERZTHRGYjhrUDlCZVNzS0FBS1NaT1VKbGppZlFUekxkQU5DbWxMcVZtaXYvUVZwQUJ2VUdoS3pCUXd2YWdlODNNdjlSWENURU10cHRHUG9zOEU1Rkg5SlRmTXBlUnRpVzRVdldaWTFRYTRoa0pZOGVuWjhUMnUwTDB2V3VDK3ZrTHcyalJSL1NxTmpDRW81UHMwRWRkQS9WVGpzL0FQRlBMOTBqemZSMnR2V2k0OGppSW81Tzh0d0dKdC9oQnYvc2NTUVNGL2Z6Z0g4eWlaOThaOEdsREkzK05ESkNvZ0ZQazE1NWVDUXFKamduVWxGSDAxdUxjQU0vbVJLSEFXN1BOd2svdERXUEg1MFVSdytORDBXaEZxR01QTEtINnFwL01qd3JBdENZYm1odlE0alErSmtIeGdGeVlXcXNQTjQ2OUp2dnlWUkVnZ2tWMnZIREJ5WVdyVmRMejBXVDJhbjN2S1M0MU12dzQzNXUxK0ZQTWZsWTBLSnB1aWdEWHlGcTVIVVVXaWFzUXFEMkNWdGtrYmNrOUtJYzI1TEpFZll0QzFhRVgrRUNaRWZwM1ZHV3c2NGczYWtRT0c2WUpmdnBMWGkrSGI1NWJrOGVFMGlTblBpZk1HRnFFeDRiYlVZc0NFeUErMjVYV2IyTWFrTmZVMFVQVEYzd0pEc1JFV1QyeFBUWlFxb2JTNnp3andobGRkUHJ5dURSOFp6M1Z0TU9Yek40ajVyMU4xYWxwVW13aExrbTF6OGI1YnA4bmdoMTZ5SDE0K1duZ1RrYm1QVlYrS3ZOTHU2a3NoMm1Jc0dmb1lYdGU3eCt0anZuM0dvbTJ0cVJFR0t3M3U4eEkvNUwzSUYwVE1YV2hMblRja243UlJ6eS9DSVhiMHNIcGJhdlhoc1pvLzErUWF5dUN4cU1McFcvdjY1dSs4QmV4ajBVLzdoWFpNWHhNeGI4ZVpHWmhDTUxjTlArVmRSYmVZcW5OUEpFdlV1U2ZYUjd2QXFVRUtmNTR3TlJqYVdGUWJ6cTRaU2lyZXlVZTk5R25nRnB3L2hCTEQ2amdzVEtKS0dHSlJhODdFR0kwOG5DR0Y5RU1sSmpnM2FTcFRJMUxuaTZmdFpCcjNCNE40a2E1M3YzTVdMSWdWOTVseDIwbU5TSjBYZHVuVmg5VTluUEk0eHJXVmpDR3NFK1Z4ejNQMWdOTS9lbk8xQjc2ZUVLWm9ldzJOU0NxRDZ6Tlp5UkhZdk1JWlpkNHZ6OU5IZTRjQ2xKdFFmREt4bS9oRCtkVGF6TjZoUUkwb2owdUk2MXA1eWVkTU5IV0tWVnhDWGJqTEVUUGVHUElMamh4eXNOdDNvZXg2ZmRvN0ZLQ2Z5M1RQem01ZXhsVWNnNld3R1cwWFRQZDRsYmxhOGpuMzB6WHB0VlZ2dWRKeTVaalEwKzkxNm8zY3dibnI0bXB2emVqWmpMWmZXRFBpMVRFNyt2QmJpakc4UWx2ck02Nm5mT3JtZ24rRzJDR3NpMHV1VTBqVUtBM3BmZ0pmc0c2MHJGUisyUW9LTDlUSVdqbUV2bFlFV0N5Q01wODJmQjBkYXd5UjFNWFoycW5wYXk5WjN5Rld2ZlhVTlhicE5iMXRvc1hrRmZqN1psbzBtbHdtTXJZRzh5b2M4V2RvNGg4L001TzdPMlJ1Z0NIUUVEQzdxenFwN0dza2ZjRjRUWTBtUDU0bmNLdnVLSm1jblYrcVZodDZ1SVdTSDlvY256NTgzR3g0RTRRZzI0Vkd0K2szUWJ6SnV2VVhWdXZaa0RaUUxjbzg4S0Y4aW0xSlBOUmtZL1pMZ2pxMzA3U04xQ3lRZnlTb2Zjd01Mbmh5Yk5vNk40dzFHNm1rNFlDOFMzYlZkM1V3YVhSLzdvSFpLdjhmR3ZTbncvODNlWXJqMStsMHI3MFpWeEFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRZmc3L2dkdkRWWjl0OXNtQkFBQUFBQkpSVTVFcmtKZ2dnPT0nIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXNnJz5XZWxjb21lIHRvIFRpYy1Ub2MtVG9lPC9zcGFuPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyh4KSA9PiB7IHRoaXMueCA9IHg7IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9TT1VORDE0LldBVlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyhvKSA9PiB7IHRoaXMubyA9IG87IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9Tb3VuZDIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIHJlZj17KHdpbikgPT4geyB0aGlzLndpbiA9IHdpbjsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL0RydW1yb2xsLTIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIGxvb3A9e3RydWV9IHJlZj17KHN0YXJ0KSA9PiB7IHRoaXMuc3RhcnQgPSBzdGFydDsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1RoZW1lLUludHJvc2hvcnQud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Cb3gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsSGVhZGluZyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAxfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT4ge3RoaXMuc3RhdGUucDJ9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x1IHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTEnID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UyJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UzJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xsIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDEnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmwgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXYgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rldk1zZyc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVFlNc2cnPlRoYW5rIFlvdSBGb3IgUGxheWluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXZOYW1lJz5EZXZlbG9wZWQgYnkgUm9oaXQgTmluYXdlITwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllckRldGFpbHMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllck5hbWVzJz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDFubX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMidcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRlckJ0bkRpdic+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlbnRlckJ0bicgb25DbGljaz17dGhpcy5zdGFydEdhbWV9PkVOVEVSPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgICAucGx5MXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5vbk11c2lje1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5vZmZNdXNpY3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXVzaWN7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZ2FtZURpc3BsYXl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbTcuZXpnaWYuY29tL3RtcC9lemdpZi03LTEzMGJmMGI4Yzc2OS5naWZcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5YT1NwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiA2cHggNnB4IDIxcHggI2QyZDI4MjsgIGZvciBYXHJcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICM5MmJhZTI7ICBmb3IgT1xyXG5cclxuICAgICAgICAgICAgICAuZW50ZXJCdG57XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRldk1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLlRZTXNne1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZOYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tYWluQm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tYWluYm94fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubHV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJ1e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm17XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubGx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAwcHggMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucm93Qm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VwQm94e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgODAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgwLjk1LCAwLjk1LCAwLjk1KSB0cmFuc2xhdGUzZCgwLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub25NdXNpY3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbHkxe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmxpcDtcclxuICAgICAgICAgICAgICAgIC8vICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsSGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZGV2TXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLlRZTXNne1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRldk5hbWV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAucGxOYW1le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VwQm94e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDVlbTtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iXX0= */\n/*@ sourceURL=C:\\JS\\airlines\\pages\\tictactoe.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=index.js.2e1fc35c6a4153b328e6.hot-update.js.map