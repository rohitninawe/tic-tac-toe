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
          }, function () {
            return _this.playAudio();
          });

          if (_this.state.tictoc == true) {
            val = 'X';
          } else {
            val = 'O';
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
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p1nm", function (e) {
      _this.setState({
        p1: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "p2nm", function (e) {
      _this.setState({
        p2: e.target.value
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

    _this.playAudio = function () {
      _this.yellow.play();
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(yellow) {
          _this3.yellow = yellow;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "\r\nhttp://li.sten.to/7vGY0iH",
        type: "audio/mpeg",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }))))), this.state.dev == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'TYMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Thank You For Playing"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'devName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "Developed by Rohit Ninawe!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        onChange: this.p1nm,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        onChange: this.p2nm,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2927059267", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2927059267",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:160px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-animation-name:spin-__jsx-style-dynamic-selector;animation-name:spin-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:140px;margin-top:0px;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-animation-name:spin-__jsx-style-dynamic-selector;animation-name:spin-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrWFcsQUFHMkIsQUFVVSxBQUdSLEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU1GLEFBS1ksQUFPVixBQWNELEFBVUMsQUFRRCxBQUlBLEFBSXlCLEFBR3hCLEFBVVUsQUFNSixBQUtrQixBQUtsQixBQUtBLEFBS0EsQUFLQSxBQUtMLEFBSUQsQUFTZSxBQUdFLEFBS0osQUFHRSxBQU1TLEFBT0EsQUFNM0IsQUFXRyxBQU9ELEFBV1EsQUFLUCxBQVdBLEFBUUEsQUFTRCxBQUlBLEFBS0MsQUFRQSxVQXJRRyxBQXVMQyxDQWhKSixDQTFCZixBQW9Ed0IsQUFrQlIsQUFJQSxBQWtIUSxBQTRDTixBQUlBLENBM0pKLEFBa0RDLEFBeUVELEFBNkNDLENBMUhBLEtBOUJNLEFBVUEsQUFLQSxBQUtBLEFBS0EsQ0E3SHJCLEFBME1pQixHQXhLRixFQW1ERSxBQTJIQSxDQXpOSCxBQW1GZCxBQUlBLENBZ0djLENBOERkLEFBSUEsTUF4TG9CLEFBd0lBLENBV3BCLENBeEtlLENBZmYsQUE2REUsQUF3QlksQUF1REEsQUFPQSxDQS9LTyxBQTZHVSxBQVVBLEFBS1osQUFLWSxBQUtBLENBaURWLENBekZDLEFBMkhBLFNBdkdOLEFBdURFLEFBT0gsR0EvR0EsQUF3SUEsR0E1RWYsRUE1SGtCLENBdUxBLElBUGxCLENBOURBLEVBakRjLEFBd0dRLEFBZ0NSLEVBNUZkLEFBVUEsQUFVQSxBQUtBLE1BcklvQixDQVlZLEFBT0EsQUFVUCxBQWtCQSxBQXdCRCxBQWdISixBQU9LLEFBa0NPLEFBUVIsQUFrQlEsR0F6TGxCLEFBd0lBLElBcERWLEFBUUYsSUF6SDhCLEFBcUloQyxFQTVCYyxBQVdWLEFBUUYsQUFtR1ksQ0ExSGQsQ0F2RWtCLEFBd0lDLEVBek1KLENBdUxBLE9BMUNVLEFBc0hBLEtBbFFILENBaUVBLEFBc0hBLENBa0JBLElBaktHLEVBMERHLFlBakc1QixDQWlFQSxBQXNIQSxDQWtCQSxvQkEvRzRCLEFBMkhBLE1BaEpkLEFBaUtBLFlBaEtDLEFBaUtBLFFBcklzQixDQXZFaEIsQUFrQkEsQUErSUEsSUFySFUsQUFpS0EsWUE5TlQsQUFPQSxBQTZNQSxBQTBCQSxTQTVHRCxBQXNIQSxFQWhPckIsTUF5RDhCLEFBMkhBLEdBM01aLEFBT0EsQUFzQkcsQUF1TEgsQUEwQkEsZ0JBN09BLEFBT0YsQUE2TUUsQUEwQkYsY0F0T2hCLEFBdU9BLEVBOU9BLEFBb05BLFNBOUhtQyxnQkF2RXBCLEFBa0JELEFBK0lBLElBakdxQixBQTJIQSxRQXhLdEIsQUErSWIsQ0FqS0EsVUFtQjBCLEVBNkZWLEFBc0hBLFNBM0xLLEFBaUtBLEVBaE1yQixHQXFHQSxBQXNIQSxTQW5ONEIsVUFtRDVCLGlCQWxEdUIsR0EyQ21CLEFBMkhBLG1CQXJLcEIscUJBQ0osQUEwQ2xCLEFBMkhBLFNBaEpBLEFBaUtxQixtQkFDckIseURBdExBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX2FwcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aWN0b2M6IHRydWUsXHJcbiAgICAgIG1zZzogJ2Jsb2NrJyxcclxuICAgICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgcDE6ICcnLFxyXG4gICAgICBwMjogJycsXHJcbiAgICAgIHdvbjogZmFsc2UsXHJcbiAgICAgIGRldjogZmFsc2UsXHJcbiAgICB9XHJcbiAgICB0aGlzLnBsYXlBdWRpbyA9ICgpID0+IHsgXHJcbiAgICAgIHRoaXMueWVsbG93LnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtc2c6ICdub25lJyxcclxuICAgICAgICBwbGF5ZXI6ICdibG9jaycsXHJcbiAgICAgIH0pXHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgZW5kR2FtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIGRldjogdHJ1ZVxyXG4gICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSwgMzUwMCkpXHJcbiAgfVxyXG5cclxuICBzZXRLZXkgPSAoZSkgPT4ge1xyXG4gICAgdmFyIGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICB2YXIgY2xzID0gZS50YXJnZXQuY2xhc3NOYW1lO1xyXG4gICAgdmFyIHZhbDtcclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHRpY3RvYzogIXRoaXMuc3RhdGUudGljdG9jXHJcbiAgICAgICAgfSwgKCkgPT4gdGhpcy5wbGF5QXVkaW8oKSlcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aWN0b2MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFsID0gJ1gnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdmFsID0gJ08nXHJcbiAgICAgICAgfVxyXG4gICAgICAgICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9IHZhbCkgJiYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS50ZXh0U2hhZG93ID0gKHZhbCA9PSAnWCcgPyAnNnB4IDZweCAyMXB4ICNkMmQyODInIDogJzZweCA2cHggMjFweCAjOTJiYWUyJykpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jYWxsV2lubmVyKGNscylcclxuICAgICAgICB9LCA1MDBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAvLyB0aGlzLmNhbGxXaW5uZXIoKVxyXG4gIH1cclxuXHJcbiAgY2FsbFdpbm5lciA9IChjbHMpID0+IHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxyXG4gICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xyXG5cclxuICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xyXG4gICAgICBpZiAoKHUxID09PSB1MikgJiYgKHUxID09IHUzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgaWYgKChtMSA9PSBtMikgJiYgKG0xID09IG0zKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKG0xID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgaWYgKChsMSA9PSBsMikgJiYgKGwxID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKGwxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XHJcbiAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICgodTIgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwyICE9ICcnKSkge1xyXG4gICAgICBpZiAoKHUyID09IG0yKSAmJiAodTIgPT0gbDIpKSB7XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICBpZiAodTIgPT0gJ1gnKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoKHUzICE9ICcnKSAmJiAobDMgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MyA9PSBtMykgJiYgKHUzID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUxICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MSA9PSBtMikgJiYgKHUxID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUzICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMSAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MyA9PSBtMikgJiYgKHUzID09IGwxKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykgJiYgKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgd29uOiBmYWxzZVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS53b24gPT0gZmFsc2UgJiYgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwMW5tID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwMm5tID0gKGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMjogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGxheWVyOiAnbm9uZScsXHJcbiAgICAgIG1haW5ib3g6ICdibG9jaycsXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21zZyc+V2VsY29tZSB0byBUaWMtVG9jLVRvZTwvc3Bhbj5cclxuICAgICAgICA8YXVkaW8gcmVmPXsoeWVsbG93KSA9PiB7IHRoaXMueWVsbG93ID0geWVsbG93OyB9fT5cclxuICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiXHJcbmh0dHA6Ly9saS5zdGVuLnRvLzd2R1kwaUhcIiB0eXBlPVwiYXVkaW8vbXBlZ1wiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Cb3gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsSGVhZGluZyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAxfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT4ge3RoaXMuc3RhdGUucDJ9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2x1IHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTEnID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UyJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdydSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UzJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xsIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDEnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDInIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmwgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMycgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kZXYgPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rldk1zZyc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nVFlNc2cnPlRoYW5rIFlvdSBGb3IgUGxheWluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXZOYW1lJz5EZXZlbG9wZWQgYnkgUm9oaXQgTmluYXdlITwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllckRldGFpbHMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllck5hbWVzJz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDFubX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDInXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDJubX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VudGVyQnRuRGl2Jz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2VudGVyQnRuJyBvbkNsaWNrPXt0aGlzLnN0YXJ0R2FtZX0+RU5URVI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC5wbHkxe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxIZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbE5hbWV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJEZXRhaWxze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnBsYXllcn07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxheWVyTmFtZXN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5YT1NwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7IFxyXG4gICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjZDJkMjgyOyAgZm9yIFhcclxuICAgICAgICAgICAgICAvL3RleHQtc2hhZG93OiA2cHggNnB4IDIxcHggIzkyYmFlMjsgIGZvciBPXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZNc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGV2TmFtZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWFpbkJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNwaW5uZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDBtcztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubHV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDFweCAxcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXNne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLm1zZ307XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJ1e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm17XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubGx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDFweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucmx7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAwcHggMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucm93Qm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VwQm94e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucGx5MXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYm94e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmRldk1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZOYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zZXBCb3h7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\asgard\\OneDrive\\Desktop\\JS\\airlines\\pages\\_app.js */")));
    }
  }]);

  return _app;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.495256de33551a149f10.hot-update.js.map