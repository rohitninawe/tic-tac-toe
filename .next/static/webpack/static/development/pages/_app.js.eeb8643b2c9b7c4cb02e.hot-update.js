webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app; });
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







var _jsxFileName = "C:\\Users\\asgard\\OneDrive\\Desktop\\JS\\airlines\\pages\\_app.js";




var _app =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_app, _PureComponent);

  function _app(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _app);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_app).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "endGame", function () {
      _this.setState({
        mainbox: 'none',
        dev: true
      }, function () {
        return Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
          return location.reload();
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

    _this.state = {
      tictoc: true,
      msg: 'block',
      mainbox: 'none',
      player: 'none',
      p1: '',
      p2: '',
      won: false,
      dev: false
    };

    _this.playAudio = function (val) {
      switch (val) {
        case 'x':
          _this.x.play();

          break;

        case 'o':
          _this.o.play();

          break;

        case 'start':
          _this.start.play();

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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_app, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(timers__WEBPACK_IMPORTED_MODULE_9__["setTimeout"])(function () {
        _this2.setState({
          msg: 'none',
          player: 'block'
        });
      }, 2000);
      this.playAudio('start');
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "music"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'className="k-icon k-i-edit k-i-pencil k-icon-24"',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "kk"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        loop: true,
        autoPlay: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }))))), this.state.dev == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'TYMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Thank You For Playing"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, "Developed by Rohit Ninawe!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        onChange: this.p2nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1656559310", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1656559310",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:160px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:140px;margin-top:0px;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4YVcsQUFHMkIsQUFVRSxBQUdRLEFBR1IsQUFHQyxBQU9BLEFBT3dCLEFBR3hCLEFBTUYsQUFTWSxBQU9WLEFBY0QsQUFVQyxBQVFELEFBSUEsQUFJeUIsQUFHeEIsQUFZVSxBQU1KLEFBS2tCLEFBS2xCLEFBS0EsQUFLQSxBQUtBLEFBS0wsQUFJRCxBQVNtRixBQU1sRSxBQU1BLEFBTUgsQUFLa0UsQUFjbkUsQUFHRSxBQU1TLEFBT0EsQUFNM0IsQUFXRyxBQU9ELEFBV1EsQUFLUCxBQWFBLEFBUUEsQUFTRCxBQUlBLEFBS0MsQUFRQSxVQTdTRyxBQTZOQyxDQW5MSixDQWhDZixBQU1BLEFBd0R3QixBQWtCUixBQUlBLEFBaUpRLEFBOENOLEFBSUEsQ0E1TEosQUFvREMsQUFzR0QsQUErQ0MsQ0F6SkEsS0E5Qk0sQUFVQSxBQUtBLEFBS0EsQUFLQSxDQW5JckIsQUE2T2lCLEdBdk1GLEVBbURFLEFBMEpBLENBL1BILEFBMEZkLEFBSUEsQ0ErSGMsQ0FnRWQsQUFJQSxNQXpOb0IsQUF1S0EsQ0FXcEIsQ0F2TWUsQ0FuQmYsQUFpRUUsQUEwQlksQUFvRkEsQUFPQSxDQXJOTyxBQXNIVSxBQVVBLEFBS1osQUFLWSxBQUtBLENBOEVWLENBeEhTLEFBMEpBLFNBcElkLEFBb0ZFLEFBT0gsR0E5SUEsQUF1S0EsR0F6R2YsRUFySWtCLENBNk5BLElBUGxCLENBM0ZBLEVBbkRjLEFBdUlRLEFBZ0NSLEVBekhkLEFBVUEsQUFVQSxBQUtBLE1BOUlvQixDQWVZLEFBT0EsQUFVUCxBQXNCQSxBQXdCRCxBQStJSixBQU9LLEFBb0NPLEFBUVIsQUFrQlEsR0ExTmxCLEFBdUtBLElBNUNaLElBNUo4QixBQXdLaEMsRUF6RGMsQUFnRFosQUFxR1ksQ0F6SmQsQ0F6RWtCLEFBdUtDLEVBL09KLENBNk5BLE9BdkVVLEFBcUpBLEtBMVNILEFBa0dBLEFBMEpBLENBcExBLEFBcUpBLENBa0JBLElBaE1HLEVBNERHLFlBMUc1QixDQXdFQSxBQXFKQSxDQWtCQSwwQkFuS2MsQUFrTUEsWUFqTUMsQUFrTUEsUUFwS3NCLENBN0VoQixBQXNCQSxBQThLQSxJQXBKVSxBQWtNQSxZQW5RVCxBQU9BLEFBa1BBLEFBMEJBLFNBM0lELEFBcUpBLEVBclFyQixTQXZCa0IsQUFPQSxBQTBCRyxBQXdOSCxBQTBCQSxDQTFMbEIsQUEwSkEsZUFsUGtCLEFBT0YsQUFrUEUsQUEwQkYsY0EzUWhCLEFBNFFBLEVBblJBLEFBeVBBLFNBN0ptQyxjQXNFRyxFQW5KdkIsQUFzQkQsQUE4S0EsT0F4RXlCLEtBckcxQixBQThLYixDQXBNQSxNQWlJdUMsQUFNRCxJQWhIWixFQStGVixBQXVCc0IsQUE4SHRCLFNBNU5LLEFBa01BLEVBak9yQixHQXVHQSxBQXFKQSxTQXBQNEIsVUFxRDVCLGdCQXNFRSxDQTFIcUIsVUFtR3JCLFVBWUEsRUE5R29CLEFBd0dwQixJQVlBLGlCQW5IZ0IsU0FxQmxCLEFBa01xQixtQkFDckIseURBdk5BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX2FwcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aWN0b2M6IHRydWUsXHJcbiAgICAgIG1zZzogJ2Jsb2NrJyxcclxuICAgICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgcDE6ICcnLFxyXG4gICAgICBwMjogJycsXHJcbiAgICAgIHdvbjogZmFsc2UsXHJcbiAgICAgIGRldjogZmFsc2UsXHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYXlBdWRpbyA9ICh2YWwpID0+IHtcclxuICAgICAgc3dpdGNoICh2YWwpIHtcclxuICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgIHRoaXMueC5wbGF5KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgIHRoaXMuby5wbGF5KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdGFydCc6XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0LnBsYXkoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3dpbic6XHJcbiAgICAgICAgICB0aGlzLndpbi5wbGF5KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHNvdW5kJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1zZzogJ25vbmUnLFxyXG4gICAgICAgIHBsYXllcjogJ2Jsb2NrJyxcclxuICAgICAgfSlcclxuICAgIH0sIDIwMDApXHJcbiAgICB0aGlzLnBsYXlBdWRpbygnc3RhcnQnKVxyXG4gIH1cclxuXHJcbiAgZW5kR2FtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIGRldjogdHJ1ZVxyXG4gICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSwgMzUwMCkpXHJcbiAgfVxyXG5cclxuICBzZXRLZXkgPSAoZSkgPT4ge1xyXG4gICAgdmFyIGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICB2YXIgY2xzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgdmFyIHZhbDtcclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHRpY3RvYzogIXRoaXMuc3RhdGUudGljdG9jXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWN0b2MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFsID0gJ1gnXHJcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygneCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdmFsID0gJ08nXHJcbiAgICAgICAgICB0aGlzLnBsYXlBdWRpbygnbycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IHZhbCkgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gKHZhbCA9PSAnWCcgPyAnNnB4IDZweCAyMXB4ICNkMmQyODInIDogJzZweCA2cHggMjFweCAjOTJiYWUyJykpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jYWxsV2lubmVyKGNscylcclxuICAgICAgICB9LCA1MDBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAvLyB0aGlzLmNhbGxXaW5uZXIoKVxyXG4gIH1cclxuXHJcbiAgY2FsbFdpbm5lciA9IChjbHMpID0+IHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxyXG4gICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUxID09PSB1MikgJiYgKHUxID09IHUzKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgobTEgPT0gbTIpICYmIChtMSA9PSBtMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKG0xID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKGwxID09IGwyKSAmJiAobDEgPT0gbDMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmIChsMSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTEgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MiAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDIgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MiA9PSBtMikgJiYgKHUyID09IGwyKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTIgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUzICE9ICcnKSAmJiAobDMgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUzID09IG0zKSAmJiAodTMgPT0gbDMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MyA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MSA9PSBtMikgJiYgKHUxID09IGwzKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTMgPT0gbTIpICYmICh1MyA9PSBsMSkpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpICYmIChtMSAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobTMgIT0gJycpICYmIChsMSAhPSAnJykgJiYgKGwyICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB3b246IGZhbHNlXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS53b24gPT0gZmFsc2UgJiYgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwMW5tID0gKGUpID0+IHtcclxuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMTogdmFsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcDJubSA9IChlKSA9PiB7XHJcbiAgICB2YXIgdmFsID0gKGUudGFyZ2V0LnZhbHVlKS50cmltKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcDI6IHZhbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgbWFpbmJveDogJ2Jsb2NrJyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IHRydWUpIHtcclxuICAgICAgdGhpcy5wbGF5QXVkaW8oJ3dpbicpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPSdtYWluJyBjbGFzc05hbWU9J2JvZHknPlxyXG4gICAgICAgIDxzcGFuPm11c2ljPC9zcGFuPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nY2xhc3NOYW1lPVwiay1pY29uIGstaS1lZGl0IGstaS1wZW5jaWwgay1pY29uLTI0XCInPmtrPC9hPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXNnJz5XZWxjb21lIHRvIFRpYy1Ub2MtVG9lPC9zcGFuPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyh4KSA9PiB7IHRoaXMueCA9IHg7IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9TT1VORDE0LldBVlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyhvKSA9PiB7IHRoaXMubyA9IG87IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9Tb3VuZDIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIHJlZj17KHdpbikgPT4geyB0aGlzLndpbiA9IHdpbjsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL0RydW1yb2xsLTIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIGxvb3A9e3RydWV9IGF1dG9QbGF5PXt0cnVlfSByZWY9eyhzdGFydCkgPT4geyB0aGlzLnN0YXJ0ID0gc3RhcnQ7IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9UaGVtZS1JbnRyb3Nob3J0LndhdlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQm94Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYW1lRGlzcGxheSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbEhlYWRpbmcnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsTmFtZSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAyfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsdSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UxJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MicgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnUgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MycgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTEnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20yJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsbCBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wxJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wyJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JsIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuZGV2ID09IHRydWUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXZNc2cnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1RZTXNnJz5UaGFuayBZb3UgRm9yIFBsYXlpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV2TmFtZSc+RGV2ZWxvcGVkIGJ5IFJvaGl0IE5pbmF3ZSE8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJEZXRhaWxzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGF5ZXJOYW1lcyc+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3BseTEnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1BsYXllciAxJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnAxbm19XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDJubX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZW50ZXJCdG4nIG9uQ2xpY2s9e3RoaXMuc3RhcnRHYW1lfT5FTlRFUjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLnBseTF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDElO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXVzaWN7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZ2FtZURpc3BsYXl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNjBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbTcuZXpnaWYuY29tL3RtcC9lemdpZi03LTEzMGJmMGI4Yzc2OS5naWZcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6ICAgICBjb3ZlcjsgICAgICAgICAgICAgICAgICAgICAgLyogPC0tLS0tLSAqL1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6ICAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5YT1NwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjZDJkMjgyOyAgZm9yIFhcclxuICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiA2cHggNnB4IDIxcHggIzkyYmFlMjsgIGZvciBPXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZNc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGV2TmFtZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWFpbkJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIC8vIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubHV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJ1e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm17XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubGx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAwcHggMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucm93Qm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VwQm94e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZsaXAge1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcclxuICAgICAgICAgICAgICAgICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgODAlIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgwLjk1LCAwLjk1LCAwLjk1KSB0cmFuc2xhdGUzZCgwLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgICAgIC8vICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAvLyAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAvLyAgICAgdG8ge1xyXG4gICAgICAgICAgICAgIC8vICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucGx5MXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmxpcDtcclxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgLy8gLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmRldk1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZOYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zZXBCb3h7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\asgard\\OneDrive\\Desktop\\JS\\airlines\\pages\\_app.js */")));
    }
  }]);

  return _app;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.eeb8643b2c9b7c4cb02e.hot-update.js.map