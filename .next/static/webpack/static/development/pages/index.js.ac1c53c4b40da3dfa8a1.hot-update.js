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
        p2: '',
        won: false,
        dev: false
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
                won: true,
                finalmsg: 'x' // , () => setTimeout(() => this.endGame(), 6000)

              }); // alert(this.state.p1 != '' ? this.state.p1 + ' won' : 'Player 1 won')

            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
                won: true,
                finalmsg: 'x'
              }, function () {
                return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
                  return _this.endGame();
                }, 6000);
              });

              alert(_this.state.p1 != '' ? _this.state.p1 + ' won' : 'Player 1 won');
            } else {
              _this.setState({
                won: true,
                finalmsg: 'o'
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
            won: false,
            finalmsg: 'g'
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
      finalmsg: '',
      p1: '',
      p2: '',
      won: false,
      // dev: false,
      music: false,
      audio: true
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

          default:
            console.log('no sound');
            break;
        }
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
      // document.getElementById('u1').innerHTML = '';
      // document.getElementById('u2').innerHTML = '';
      // document.getElementById('u3').innerHTML = '';
      // document.getElementById('m1').innerHTML = '';
      // document.getElementById('m2').innerHTML = '';
      // document.getElementById('m3').innerHTML = '';
      // document.getElementById('l1').innerHTML = '';
      // document.getElementById('l2').innerHTML = '';
      // document.getElementById('l3').innerHTML = '';
      // this.setState({
      //   tictoc: true,
      //   msg: 'none',
      //   player: 'block',
      //   mainbox: 'none',
      //   p1: '',
      //   p2: '',
      //   won: false,
      //   dev: false,
      // })
      console.log('close');
      window.open('', '_self', '');
      window.close();
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, this.state.music == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        },
        __self: this
      }), this.state.music == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }), this.state.audio == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: false
          });
        },
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9ZqRq5OS9IqXUWphKGZHWxesl8-bZeImID4Oju-EK5YzfmzX&s",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }), this.state.audio == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: true
          });
        },
        src: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/mute-icon-18-256.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'footerDev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "Developed By Rohit Ninawe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "Player 1 Won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, this.state.p1 + ' Won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Player 2 Won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, " ", this.state.p2 + ' Won', " ") : null : this.state.finalmsg == 'g' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, "Game Over")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        value: this.state.p2,
        onChange: this.p2nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1531483601", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1531483601",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:50px;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxKU1xcYWlybGluZXNcXHBhZ2VzXFx0aWN0YWN0b2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa2hCVyxBQUcyQixBQVVRLEFBT0EsQUFPTCxBQU1LLEFBT0EsQUFPQSxBQUtOLEFBR0MsQUFHRCxBQUdDLEFBT0EsQUFPd0IsQUFHeEIsQUFNRixBQVNZLEFBUVYsQUFnQkQsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVNtRixBQU1sRSxBQU1BLEFBTUgsQUFLa0UsQUFNaEUsQUFHRSxBQUtMLEFBR0UsQUFNUyxBQU9uQixBQU1BLEFBUUEsQUFRQSxBQVFBLEFBT21CLEFBSzNCLEFBVUcsQUFNRCxBQVdDLEFBSUEsQUFPQSxBQWFBLEFBUUEsQUFTRCxBQUlBLEFBS0MsQUFPQSxVQTlYRyxBQTJTQyxDQTFOSixDQWhDZixBQU1BLEFBMkR3QixBQWtCUixBQUlBLEFBbUxRLEFBb0ROLEFBSUEsQ0EvVGxCLEFBMkZjLEFBb0RDLEFBbUlmLEFBV2MsQUE4Q0MsQ0FoTUEsSUFyTEosQUFPQyxBQWFELEFBT0EsQUFPRyxBQXFOQSxBQU1ILEFBUUEsQUFRQSxBQVFBLENBOUhVLEFBVUEsQUFLQSxBQUtBLEFBS0EsSUFoR04sRUFzREUsQUFrTUEsQ0FqVkgsQUFvSWQsQUFJQSxDQTlIYSxBQW9CQSxBQU9BLEFBa09JLEFBUUEsQUFRQSxBQVFBLEFBWUgsQ0ExUkQsQUE4VmIsQUFJQSxFQXZVbUIsQUFxTkMsSUEvSUEsQUF5TUEsRUFqT0wsQ0FuQmYsQUFvRUUsQUEwQlksQUFvRkEsQUE0Q0EsQ0FwU08sQUFVUCxBQW9CQSxBQU9BLEFBMkhpQixBQVVBLEFBS1osQUFLWSxBQUtBLENBeEtqQixBQTBSTyxDQTVKUSxBQWtNQyxFQTFFakIsQUFRQSxBQVFBLEFBUUEsS0FuUGIsQ0FxTkEsQ0E1RmdCLEFBb0ZFLEFBNENILENBMVJFLEFBb0JBLEFBT0EsQ0FwQkEsQ0FnR0YsQUF5TUEsQ0FuREQsQUFRQSxBQVFBLEFBUUEsRUFoSGQsRUEvS2tCLENBMlNBLElBTmxCLENBaElBLEVBMUpBLEFBb0JBLEFBT0EsQUE0RWMsQUF1SVEsQUFldEIsQUFRQSxBQVFBLEFBUUEsQUEyQmMsQ0F6U2QsQ0E4SUEsQUFVQSxBQVVBLEFBS0EsTUF4TG9CLENBb0JLLEFBa0NPLEFBT0EsQUFVUCxBQXVCQSxBQTBCRCxBQW1MSixBQU1LLEFBcUJBLEFBb0JPLEFBUVIsQUFrQlEsR0FsUWxCLEFBeU1BLElBdEZWLEFBUUYsSUEvSjhCLEFBMktoQyxFQXpEYyxBQXdDVCxBQVFILEFBNElZLENBaE1kLENBekVrQixBQXlNQyxFQTNUSixDQTJTQSxPQTNHVSxBQTRMQSxLQTNYSCxBQTRJRCxBQWtNQyxDQTVOQSxBQXlMQSxDQWdCQSxJQXJPRyxFQStERyxZQXBKNUIsQ0FrSEEsQUF5TEEsQ0FnQkEsMEJBck1jLEFBME9BLFlBek9DLEFBME9BLFFBNU1zQixDQW5JakIsQUFtREMsQUF1QkEsQUFtTkEsQUFxQkQsSUE1TVcsQUEwT0EsWUE5U1QsQUFPQSxBQTZSQSxBQTBCQSxFQS9WUCxBQWtURCxPQXRJTyxBQTRMQSxFQS9TckIsR0EwUEEsQ0FsVEEsS0FpQ2tCLEFBT0EsQUEwQkcsQUFtUUgsQUEwQkEsQ0F0T1UsQUFrTUMsZUF6UlgsQUFPRixBQTZSRSxBQTBCRixjQXRUaEIsQUF1VEEsRUE5VEEsQUFvU0EsU0FyTW1DLGNBc0VHLEVBdEp2QixBQXVCRCxBQW1OQSxJQWxLZ0IsQUFrTUMsR0EzSVEsS0F2RzFCLEFBbU5iLENBMU9BLE1Bb0l1QyxBQU1ELElBbEhaLEVBaUdWLEFBdUJzQixBQXFLdEIsU0FuUUssQUEwT0EsRUE1UUQsR0EwR3BCLEFBNExBLFNBN1I0QixNQVI1QixJQStEQSxVQVJtQyxBQWtNQyxNQXBIbEMsQ0E1SHFCLFVBcUdyQixVQVlBLEVBaEhvQixBQTBHcEIsSUFZQSxpQkFySGdCLFNBdUJsQixBQTBPcUIsZUFwTnFCLEFBa01DLElBbUIzQyxvQ0FwTkEsQUFrTUEscUJBL09BIiwiZmlsZSI6IkM6XFxKU1xcYWlybGluZXNcXHBhZ2VzXFx0aWN0YWN0b2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRpY3RvYzogdHJ1ZSxcclxuICAgICAgbXNnOiAnYmxvY2snLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHBsYXllcjogJ25vbmUnLFxyXG4gICAgICBmaW5hbG1zZzogJycsXHJcbiAgICAgIHAxOiAnJyxcclxuICAgICAgcDI6ICcnLFxyXG4gICAgICB3b246IGZhbHNlLFxyXG4gICAgICAvLyBkZXY6IGZhbHNlLFxyXG4gICAgICBtdXNpYzogZmFsc2UsXHJcbiAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYXlBdWRpbyA9ICh2YWwpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuYXVkaW8pIHtcclxuICAgICAgICBzd2l0Y2ggKHZhbCkge1xyXG4gICAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHRoaXMueC5wbGF5KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgICAgIHRoaXMuby5wbGF5KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnd2luJzpcclxuICAgICAgICAgICAgdGhpcy53aW4ucGxheSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzb3VuZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtc2c6ICdub25lJyxcclxuICAgICAgICBwbGF5ZXI6ICdibG9jaycsXHJcbiAgICAgIH0pXHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgcmVzdGFydEdhbWUoKSB7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgIHRpY3RvYzogdHJ1ZSxcclxuICAgIC8vICAgbXNnOiAnbm9uZScsXHJcbiAgICAvLyAgIHBsYXllcjogJ2Jsb2NrJyxcclxuICAgIC8vICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgLy8gICBwMTogJycsXHJcbiAgICAvLyAgIHAyOiAnJyxcclxuICAgIC8vICAgd29uOiBmYWxzZSxcclxuICAgIC8vICAgZGV2OiBmYWxzZSxcclxuICAgIC8vIH0pXHJcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKVxyXG4gICAgd2luZG93Lm9wZW4oJycsICdfc2VsZicsICcnKTsgd2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBlbmRHYW1lID0gKCkgPT4ge1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGljdG9jOiB0cnVlLFxyXG4gICAgICBtc2c6ICdub25lJyxcclxuICAgICAgcGxheWVyOiAnYmxvY2snLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHAxOiAnJyxcclxuICAgICAgcDI6ICcnLFxyXG4gICAgICB3b246IGZhbHNlLFxyXG4gICAgICBkZXY6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNldEtleSA9IChlKSA9PiB7XHJcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgIHZhciBjbHMgPSBlLnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICB2YXIgdmFsO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID09PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRpY3RvYyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB2YWwgPSAnWCdcclxuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCd4JylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YWwgPSAnTydcclxuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdvJylcclxuICAgICAgICB9XHJcbiAgICAgICAgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gdmFsKSAmJiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLnRleHRTaGFkb3cgPSAodmFsID09ICdYJyA/ICc2cHggNnB4IDIxcHggI2QyZDI4MicgOiAnNnB4IDZweCAyMXB4ICM5MmJhZTInKSkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoY2xzKVxyXG4gICAgICAgIH0sIDUwMFxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTClcclxuICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgIC8vIHRoaXMuY2FsbFdpbm5lcigpXHJcbiAgfVxyXG5cclxuICBjYWxsV2lubmVyID0gKGNscykgPT4ge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXHJcbiAgICB2YXIgdTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgdTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgdTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5pbm5lckhUTUw7XHJcbiAgICB2YXIgbDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUw7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTEgPT09IHUyKSAmJiAodTEgPT0gdTMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vICwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAvLyBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKG0xID09IG0yKSAmJiAobTEgPT0gbTMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmIChtMSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgobDEgPT0gbDIpICYmIChsMSA9PSBsMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKGwxID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTEgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTIgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwyICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTIgPT0gbTIpICYmICh1MiA9PSBsMikpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUyID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChsMyAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTMgPT0gbTMpICYmICh1MyA9PSBsMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MSA9PSBtMikgJiYgKHUxID09IGwzKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMSAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUzID09IG0yKSAmJiAodTMgPT0gbDEpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MyA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykgJiYgKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHdvbjogZmFsc2UsXHJcbiAgICAgICAgICBmaW5hbG1zZzogJ2cnXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS53b24gPT0gZmFsc2UgJiYgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwMW5tID0gKGUpID0+IHtcclxuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMTogdmFsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcDJubSA9IChlKSA9PiB7XHJcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcDI6IHZhbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgbWFpbmJveDogJ2Jsb2NrJyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVNdXNpYyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtdXNpYzogIXRoaXMuc3RhdGUubXVzaWNcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUubXVzaWMpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0LnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5tdXNpYykge1xyXG4gICAgICAgIHRoaXMuc3RhcnQucGF1c2UoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnBsYXlBdWRpbygnd2luJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9J21haW4nIGNsYXNzTmFtZT0nYm9keSc+XHJcbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgPGltZyB0aXRsZT0nVHVybiBPZmYgTXVzaWMnIGNsYXNzTmFtZT0nb25NdXNpYycgb25DbGljaz17dGhpcy5oYW5kbGVNdXNpY30gc3JjPSdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBZUZCTVZFVUFBQUQvLy8vQndjRnFhbW96TXpPN3U3c3JLeXNpSWlJOVBUMDJOamJMeTh2RXhNUzF0YlhUMDlQNCtQanc4UEJkWFYzYTJ0cEVSRVI4Zkh3WEZ4ZUhoNGZqNCtQcTZ1cXVycTV4Y1hGTFMwdFlXRmhqWTJOUlVWRU5EUTNpNHVLU2twS2hvYUVmSHgrSmlZbVJrWkdjbkp4L2YzOFRFeE45SkpmZUFBQUlJVWxFUVZSNG5PMmQyWGFxU2hCQUk3TWdqVUNZUlVERi9QOGYzbWlTazVoRzdhRjZJSmY5bXJVT3ZRL1lZM1hWeTh2TTJidTFtYVpabGxaYno5MnJiZzA0VGwyVnhlb2Z4ZEFjVkRjSmt2WHV1TWxYdDBSbHE3cFpVSGpwRUJTckNlSktkZE1nOEk1MkdFM3BYVjlqcXJwNXZIZ252MFAzOUs2S3Rlb204dUQxWWZSUTcwS291cFdzdU0zd3UyTzV3Nmk2cVF5NGRiV1o3RmdtNlJMVjdhWEUybVdicDUvbVQ5Q3NYcUpYalFiNTIvc2ttTTNBNzUzTGtGcnZuYmhSM1hJaXZLTVIzeDMxSGhPZFZUZitPVTRmRjFTL3ZWczAveUh1azVIbDAvekpvTnJoUG9mMXJpUWM5ZVpvNkRScDJmSHJ2VlBxdUZKMHpONEdlSHU2R2pwVk9iMFlZalY4VTIxMGc1TnVtRWE5UjRhdnFxVytjVktqWUJ6MTVtRG9aQ0hIb0tlNTRkNnB1VWU5KzJ4VVQwd1BkVFhBREF2M0RGMlZlbTZUbGJGSVBiV0c3cTYzSDIrenpOdlFMUDFjdko0cXc3MjU2ZUNIQlgwTVRadG5NVVNON2NpVWUxMVh2a1E1MllaV2sva3lYNTVzdy9ha1FrK2U0WFlRUGV5cE5WeUxuYldvTjZ4aU5kK25OTU5CcFo4RVExZjY4Q0Rac0ZiV3cwZ3liSlFMQ2pac1E5VitxNVZoQ1JSY0I2cjFWbUlOM3phcTdTNklORXhWeTEwUmFPaXFkdnRBb0tINmJ2U0tPTU96YXJWUGhCbGFtcnhDY1lhajJ0bm9ONklNSFEzRytnOUVHWjZsN2FVOVE1RGhtNjFhN0IrQ0RMY0tGL1cvRUdSNFV1MzFqUmpEUTZuYTZ4c3hocTRXYys0UEZzUEZjREdVQllxNk9KNDhrUHdMaGxIdWo4MDE0aUtaMkRhWnZXRWVsdWtQQjN3NlBHL0R6aGpNMnlQZUxmYWh6dGNReFdXMnhVNndYN0V0OXBrYW9uQTA2NmxRb1AwZ3g5QVJ1N1FJVDYxeko2WnlQODdmTUU0ZkJWZnMrMWtib3NJL1A0dFN3MVkxOHpHTVl2dE0wTmpqVEEwTC8yYlVlMEEyUjhQSUdLczE2YU94YlZydERTUGp1S05wNDh3TUk2TktLQTg0c2VNZ2pRMGpZOGNRM2pzWFE1UnZkbXlQbm9WaEVXOTJ6TmRBOURmTWc5TGtpYTZ2OURiTTdkN2tESjNRMlREZlpBMS9aSWkyaGxGWkpTRGh5bm9hSW50N2dMcGhwcDhoNm1CemtPaGxpSXE0M0FJL1dpZkQzQis0eG9WcFRGME1DM3ZjQ2JrSW9ZZGhZWi9FNkwxSU03U00rM3FSY1c0RkJrUktNcndmbEJpbWE3SDNBUlVieHRBOUo0NVNRMVJLdUdTbDBoQ05NbTdHS3pSRXZZZ25ZU2cwTEVVOENFZWRZU2Zwb3FNNlE4WnRGMnFVR1c1azNmdFhaaWd0bDVFeXcwekVZNlpZRElGWURBV3lHQUt4R0Fya2Z6Z2VpcmxoaVJ0S3kraTdHQUx4OXcwOUxINXVNUVJqTVFSaU1SVElZZ2dFYmlpdFRNRmlDTVJpS0pERkVJakZVQ0NMSVJDTG9VRCtoNFppOHBjdWhnSlpESUg0KzRZSmRoMzM3eHVhSWg0enhXSUloSEREdmV1c3ZhUnUzNms5ejNKZi80VmIvUVZEcXpYVDBmNVI2QU4xUVhtcXRzazE2SEh1aG9jMkhZM3BFalFvTEkvYjE1a2J0aWY3Y1VyaXprNnhPNlR6TWR5bkJrRWxoUWg3d1hNeFBQU3NoZGZtWWJnL3NWZHBrV1NJZUFMMzNJd252WjJZU2pxUWhvY2RYNEpDN1EzYmtqUEZwQmhETElzM3ErRmJ5cDBrVkc5RForQlBNS20xb1FOUkVrTm5ReGVra0pmR2hqdVlGS2o2R2xaQU9WN0YxRC9rTjl4WFVMWG14TlN3Ykg4bmFJMW9yM1NabWxmcGJIKzNqOWF3aGN1VnJhZWhDNWhKV2s5RHlIUnZXaHBpT3hGL3pkQUN6UVV1cHFaejg3dXJweko4Y0UxYUg4UGZiNEhHRUdxbzE5YlFBUzVPbzU4aGRFWitMc01rSGZ6NG5lNkxPRGdsbHovc2ZxOTZ5QTFkNkhSOXpJYldPWmhldk9XOWcyZUNKVGMwb1dzZmp5eDJUanMrckF3UVl1K2hhQWovNmJjQldKREIwRzFPOUhNcVlrTjhwMVcyb1pOdVdENGpZa1BRNmN5Vm5zcnZjTy9IOXd4U1F6eEpMaS9vU0NOWUJhdzlPYW1oQzE2cExhS0lNRTlzOXBHSzFIQU5YcDRtSjk5ZE9QRThuTlN3QmpQN3dpZk43YnJtS3h5VEUyWXMyd0Y1ZlVPWWpzTTljMjdOa2hwaXVjaDRLY2dDZVR6ZTB4RmlRL0JpYlNGUjdHWEQzOEdSR21LNXFqbEJST1A5Rm1EZmk5UVFpelBncENEcFo3RDFPZ3Nkb1NGMDJVdVNoVVVDVWdNdnJza01nU2R0aU9ETW9vWVpna2tOZ2NmRC92a1RzVTB6UmtnTlBkQ3FpZm56QnlaUW0rdWtoZzVrRlcrQzQ2QTEyTDRlcVNIbzJtSjQraXQ4aGF1MEdTWmtocEJkamU4OWZ4cmNSSi9ZRUc2Tm56OFB3NEtzQmt0cytBTDFtWktzZkFlZ1oxMEluMzh4bndEVm15ZVpybmtnVC9xRTREY0IreDlMc21nQ1BSOEppR3VNNERFQUxKQUl0Z0RQK1lZbTBjK1J2d2NuV3ZiQ2JxN1RYSkhiODU0QW80RWt3TVNEM1Z5bkNtTzErRWFNNGtnVUk5VERsdFV1cWRJamMrMjR4WVRWUHlEbmh5dnEwS3VhL1FzS0NIOFBVR3VLTDJnUEQxZzdWUEw5M3hOdzdmZWUwdkFsTVJoYUVObmtneEp3L1VKRW41RE9HbWkvVk9SVGJPQWZnSThQSXBicmh4VmRJNEtNL0FYQ24rTEZwSWRyTjZ4UDVMMUJrTkw0d1I4MUc0eDM0dXVleURFcXFVcXpYVWlCajRDWXp0S3ZPT216enduNWxVVWYySlhCZHFVZDAwZjZoWHVNMFhSN0VDcHN4bXNPQUpQZm45ZzhnaGVzMUk2N3ZJZ2k5RUVVRlhrWGJ6TGlkVFVHVnN5VGl3Z2tXL25CYTh3ME8vWHZITk9xOGZnQzFHSGprZ0lJUVdCQSsxTEU5U3NVUk1OMzRuc0w5NjlRQkd2SXBZWEFzamtjQUs3d3BlVklwZ051QWV5TExRM0V6QlpxZlpqcjJNMWMyQVA5RUJtV1RiS0FtYmVoUVZMdEZRWWNrTS9VRnBJUEhRaUlpWnV2NTBEeEJmOUxqSVhjL0lPRGUxcy9WbTN3bEpMTER4bXlxZ094dzNXMUk5SzRGLzJtWnQrUHlzLzZ2OEVMRGF0aW9PdE1Cb050VnhFZDlSNGxibUM1bzBOeDNxc0ZsQnVMS0pTV21RMk1oT0lLUWhSS3F5Y0RTa3JvbU51cGpEcWNJbkRUemRNNVhCU01za29jQ3VHdzdSKzl5Tnp1elpuMUx4TlliVHFFRTZ2R3d1aXJla2JEdzBQMkI4ZmJuYk1mbUxYbGFyNkMrTUYvOEp5eUJSYjVpem9BQUFBQVNVVk9SSzVDWUlJPScgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAge3RoaXMuc3RhdGUubXVzaWMgPT0gZmFsc2UgJiZcclxuICAgICAgICAgIDxpbWcgdGl0bGU9J1R1cm4gT24gTXVzaWMnIGNsYXNzTmFtZT0nb2ZmTXVzaWMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTXVzaWN9IHNyYz0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQWhGQk1WRVVBQUFELy8vL3Q3ZTJQajQvczdPeU1qSXp3OFBEMTlmV2VucDc3Ky90S1NrcUppWW16czdPWGw1Zk16TXhxYW1ybTV1YmIyOXNJQ0FoNGVIalB6OC9HeHNZaElTRmtaR1NycTZ1am82TW1KaWFFaElSd2NIQkZSVVcvdjcrM3Q3YzZPam9YRnhjdkx5OVRVMU5jWEZ3akl5TVRFeE0yTmpaOGZIeEFRRUJTVWxKSlNVbHJ6ai9pQUFBSDgwbEVRVlI0bk8yZDYzcnF1QTZHQ2FFY0NvR2trSElzMEphMnRMMy8rOXRkSlZZU0l0dFNzSnZNZnZUK21wbGxaK25EaVMxTHNxZlRFUVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQjhNdm1OTjhPSi92cElrbmk3bURRamVOa2tlNFA2M0QrK3RpMGJiZnhjZ29uU1R3S2pQU1NRM2o2RHdyOXV0c25GbWtsK21uMDNiVE5kR2FyaEtHdHdMeHB5eWw4cld1cSs4ZEgwOVpidVovMDY4c0xnbTdUOXR2WTlZaEtSaVA4Q3owMHJjREd3Q1FxV2F5aTdmTHI4L2p5OXR6cFBMdy9iajYvVC9Ob1haeVAydjRaM3VQUzR2MXcvbW51cWRxMmZja1lWdFFscTdORjJ5L0xySG5QdTRrM1VwNUQ0OVdTMmxIOU5IdWYxcm1nSUc4eGZtTjBuR2E5eHQ1TWM4TUozczB0czZlYW9iNjgyT1VPOWE2bDNJNlA2cWZ4WVpWTEZwbWRkOW9XNzkvTDJYd2NyVmVUSDFhcmFEeGZmai9rYzNEckp4cmx6UndyZi9KeENsZlRST2Z0eEhIMkQxUFQwOWVEZDdvcFViQmhHay9oVGExL3hmOTRuSy9USG5XSHNUWThmY2h4NmNJZ0dIaFlXbWRxbnJuODY4TnJ0SStOZ2lvWUpxamZiN3ovUUxNay9OZllnOFFvczNQMXMrODlINWppZnRGUHBka2sxaVZKREMrTkI4L09wR1drbVozcGxMUHZMZktpZXpRNFMzMkNIYUZxN0Z4aW5WRXJNZEk5T2NyYjJFY3h6QnYzSFV1OFZXQXdzQXUwajJKWWVpTHh3Nlh4WVpjdzZpM1N3L3B1ZXo3dmxzdmRlVHVPSnROQ2xDb2hDTFNOWWxodTdIUVVsNEdCT0YzUFh6V2YyZU1rYTRUN1F0SDFzMHlMUm5qZG1EcjlVaGpqMm5ycGNHZFpmUTlaVTNSblVSRm9Hc1c3YXVNK3cwK3dzS29PM0Q2OHAvUlVrL0FLK1RORW9INFVFWUUvRXAxNU4ybnhzYjE5K0VydXFTYmhFUGt6VktGbXVrRUZPbFNvN095bjBZbjNmU3QvRlhWcEtsL1c1UmRFV21vRXV2c1F1OWtqK1QzVjdoQVBRK0VTcXk4cUx0QmxlREo3cEc1UjAvT3VyTkVFMm1panFCSG9jQ3A5cnYyamJaUTVNMDBEeWlocVh0RWFRclE4WlErTjJUM0JWVGpwV3RoSDBmOElkanE3N0tuR1hTd0tSRm4xV3d1YlJId3RkanFDbmM0MmV5dy9JQWdCTE1QaWFaYUlDM1NkQTFFTDE0VGRVNDErOEdSb1pKTDRKeU9ZdXpTWVkySkdqWDVnekkvcXB4dGNvUHVvMWo1N2NzVHVDYmFiTThDNlVkUzhvazRubVY5VTJGb2ZTclNhYm9rSDR4THhBSjZQUEtUS1dYREQzUVhYVTd0YVpPQkxBajZ5SGxCdUtUOERDRUVZYXlJSEgwVmtYR3Nwc0tIZWxoMjc1em9nZDZXTm9xZlF1UXBHNkZ3dlBhQ1FNUHdVaWI1cUFlb3JoSzN6bWREWUx0RmI4a1A5QmVTc0tBQUtTWk9VSmxqaWZRVHpMZEFOQ21sTHFWbWl2L1FWcEFCdlVHaEt6QlF3dmFnZTgzTXY5UlhDVEVNdHB0R1BvczhFNUZIOUpUZk1wZVJ0aVc0VXZXWlkxUWE0aGtKWThlblo4VDJ1MEwwdld1Qyt2a0x3MmpSUi9TcU5qQ0VvNVBzMEVkZEEvVlRqcy9BUEZQTDkwanpmUjJ0dldpNDhqaUlvNU84dHdHSnQvaEJ2L3NjU1FTRi9memdIOHlpWjk4WjhHbERJMytOREpDb2dGUGsxNTVlQ1FxSmpnblVsRkgwMXVMY0FNL21SS0hBVzdQTndrL3REV1BINTBVUncrTkQwV2hGcUdNUExLSDZxcC9NandyQXRDWWJtaHZRNGpRK0prSHhnRnlZV3FzUE40NjlKdnZ5VlJFZ2drVjJ2SERCeVlXclZkTHowV1QyYW4zdktTNDFNdnc0MzV1MStGUE1mbFkwS0pwdWlnRFh5RnE1SFVVV2lhc1FxRDJDVnRra2JjazlLSWMyNUxKRWZZdEMxYUVYK0VDWkVmcDNWR1d3NjRnM2FrUU9HNllKZnZwTFhpK0hiNTViazhlRTBpU25QaWZNR0ZxRXg0YmJVWXNDRXlBKzI1WFdiMk1ha05mVTBVUFRGM3dKRHNSRVdUMnhQVFpRcW9iUzZ6d2p3aGxkZFByeXVEUjhaejNWdE1PWHpONGo1cjFOMWFscFVtd2hMa20xejhiNWJwOG5naDE2eUgxNCtXbmdUa2JtUFZWK0t2Tkx1NmtzaDJtSXNHZm9ZWHRlN3grdGp2bjNHb20ydHFSRUdLdzN1OHhJLzVMM0lGMFRNWFdoTG5UY2tuN1JSenkvQ0lYYjBzSHBiYXZYaHNaby8xK1FheXVDeHFNTHBXL3Y2NXUrOEJleGowVS83aFhaTVh4TXhiOGVaR1poQ01MY05QK1ZkUmJlWXFuTlBKRXZVdVNmWFI3dkFxVUVLZjU0d05SamFXRlFienE0WlNpcmV5VWU5OUduZ0Zwdy9oQkxENmpnc1RLSktHR0pSYTg3RUdJMDhuQ0dGOUVNbEpqZzNhU3BUSTFMbmk2ZnRaQnIzQjRONGthNTN2M01XTElnVjk1bHgyMG1OU0owWGR1blZoOVU5blBJNHhyV1ZqQ0dzRStWeHozUDFnTk0vZW5PMUI3NmVFS1pvZXcyTlNDcUQ2ek5aeVJIWXZNSVpaZDR2ejlOSGU0Y0NsSnRRZkRLeG0vaEQrZFRhek42aFFJMG9qMHVJNjFwNXllZE1OSFdLVlZ4Q1hiakxFVFBlR1BJTGpoeHlzTnQzb2V4NmZkbzdGS0NmeTNUUHptNWV4bFVjZzZXd0dXMFhUUGQ0bGJsYThqbjMwelhwdFZWdnVkSnk1WmpRMCs5MTZvM2N3Ym5yNG1wdnplalpqTFpmV0RQaTFURTcrdkJiaWpHOFFsdnJNNjZuZk9ybWduK0cyQ0dzaTB1dVUwalVLQTNwZmdKZnNHNjByRlIrMlFvS0w5VElXam1FdmxZRVdDeUNNcDgyZkIwZGF3eVIxTVhaMnFucGF5OVozeUZXdmZYVU5YYnBOYjF0b3NYa0ZmajdabG8wbWx3bU1yWUc4eW9jOFdkbzRoOC9NNU83TzJSdWdDSFFFREM3cXpxcDdHc2tmY0Y0VFkwbVA1NG5jS3Z1S0ptY25WK3FWaHQ2dUlXU0g5b2NuejU4M0d4NEU0UWcyNFZHdCtrM1Fiekp1dlVYVnV2WmtEWlFMY284OEtGOGltMUpQTlJrWS9aTGdqcTMwN1NOMUN5UWZ5U29mY3dNTG5oeWJObzZONHcxRzZtazRZQzhTM2JWZDNVd2FYUi83b0haS3Y4Zkd2U253LzgzZVlyajErbDByNzBaVnhBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUWZnNy9nZHZEVlo5dDlzbUJBQUFBQUJKUlU1RXJrSmdnZz09JyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSB0cnVlICYmXHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb25Tb3VuZCcgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGF1ZGlvOiBmYWxzZSB9KX0gc3JjPSdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTVjlacVJxNU9TOUlxWFVXcGhLR1pIV3hlc2w4LWJaZUltSUQ0T2p1LUVLNVl6Zm16WCZzJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5hdWRpbyA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9J29mZlNvdW5kJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYXVkaW86IHRydWUgfSl9IHNyYz0naHR0cHM6Ly9pY29uc3BsYWNlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvX2ljb25zL2ZmZmZmZi8yNTYvcG5nL211dGUtaWNvbi0xOC0yNTYucG5nJyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21zZyc+V2VsY29tZSB0byBUaWMtVG9jLVRvZTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Zvb3RlckRldic+RGV2ZWxvcGVkIEJ5IFJvaGl0IE5pbmF3ZTwvc3Bhbj5cclxuICAgICAgICA8YXVkaW8gcmVmPXsoeCkgPT4geyB0aGlzLnggPSB4OyB9fT5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvU09VTkQxNC5XQVZcIiB0eXBlPVwiYXVkaW8vd2F2XCIgPlxyXG4gICAgICAgICAgPC9zb3VyY2U+XHJcbiAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICA8YXVkaW8gcmVmPXsobykgPT4geyB0aGlzLm8gPSBvOyB9fT5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiaHR0cDovL3Nwcm90dC5waHlzaWNzLndpc2MuZWR1L3dvcC9zb3VuZHMvU291bmQyLndhdlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyh3aW4pID0+IHsgdGhpcy53aW4gPSB3aW47IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9EcnVtcm9sbC0yLndhdlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxhdWRpbyBsb29wPXt0cnVlfSByZWY9eyhzdGFydCkgPT4geyB0aGlzLnN0YXJ0ID0gc3RhcnQ7IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9UaGVtZS1JbnRyb3Nob3J0LndhdlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQm94Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYW1lRGlzcGxheSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbEhlYWRpbmcnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsTmFtZSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAyfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmluYWxNc2cnPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS53b24gPT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ3gnXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wMSA9PSAnJyA/IDxzcGFuPlBsYXllciAxIFdvbjwvc3Bhbj4gOiA8c3Bhbj57dGhpcy5zdGF0ZS5wMSArICcgV29uJ308L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ28nID9cclxuICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucDIgPT0gJycgPyA8c3Bhbj5QbGF5ZXIgMiBXb248L3NwYW4+IDogPHNwYW4+IHt0aGlzLnN0YXRlLnAyICsgJyBXb24nfSA8L3NwYW4+KVxyXG4gICAgICAgICAgICAgICAgICA6IG51bGwpKVxyXG4gICAgICAgICAgICAgIDogKHRoaXMuc3RhdGUuZmluYWxtc2cgPT0gJ2cnICYmIDxzcGFuPkdhbWUgT3Zlcjwvc3Bhbj4pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x1IHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTEnID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UyJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UzJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xsIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDEnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmwgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBcclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXYgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rldk1zZyc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVFlNc2cnPlRoYW5rIFlvdSBGb3IgUGxheWluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXZOYW1lJz5EZXZlbG9wZWQgYnkgUm9oaXQgTmluYXdlITwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH0gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJEZXRhaWxzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3BseTEnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1BsYXllciAxJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnAxfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnAxbm19XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucDJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDJubX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZW50ZXJCdG4nIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfT5FTlRFUjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLnBseTF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDElO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAub25NdXNpY3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAub25Tb3VuZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpbmFsTXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm9mZk11c2lje1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5vZmZTb3VuZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogOThweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tdXNpY3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxIZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbE5hbWV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJEZXRhaWxze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnBsYXllcn07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxheWVyTmFtZXN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW03LmV6Z2lmLmNvbS90bXAvZXpnaWYtNy0xMzBiZjBiOGM3NjkuZ2lmXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuWE9TcGFue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOyBcclxuICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6bm9uZTsgXHJcbiAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6bm9uZTsgXHJcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDpub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICNkMmQyODI7ICBmb3IgWFxyXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjOTJiYWUyOyAgZm9yIE9cclxuXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZNc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGV2TmFtZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWFpbkJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLW5hbWU6IHNwaW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3Bpbm5lcntcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGlubmVyO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmx1e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ydXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5te1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxse1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJse1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJvd0JveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNlcEJveHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3ZW07XHJcbiAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBmbGlwIHtcclxuICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDgwJSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5tc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubXNnfTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmZvb3RlckRldntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm9uTXVzaWN7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI5cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm9uU291bmR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm9mZk11c2lje1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAub2ZmU291bmR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDYxcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbHkxe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmZpbmFsTXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XHJcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmRldk1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZOYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNlcEJveHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\JS\\airlines\\pages\\tictactoe.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=index.js.ac1c53c4b40da3dfa8a1.hot-update.js.map