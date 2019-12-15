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
      var val; // document.getElementById(id).cl

      if (document.getElementById(id).innerHTML === '') {
        _this.setState({
          tictoc: !_this.state.tictoc
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
        _this.state.won == false && alert('Game Over!');
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
      msg: 'none',
      mainbox: 'none',
      player: 'none',
      p1: '',
      p2: '',
      won: false,
      dev: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_app, [{
    key: "componentDidMount",
    value: function componentDidMount() {// setTimeout(() => {
      //   this.setState({
      //     msg: 'none',
      //     player: 'block',
      //   })
      // }, 2000)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "main",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this2.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }))))), this.state.dev == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Thank You For Playing"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, "Developed by Rohit Ninawe!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        onChange: this.p1nm,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        onChange: this.p2nm,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1314361732", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1314361732",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:160px;margin-top:-150px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}h1.__jsx-style-dynamic-selector{color:white;}h3.__jsx-style-dynamic-selector{color:white;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:600px;width:600px;cursor:pointer;-webkit-animation-name:spin-__jsx-style-dynamic-selector;animation-name:spin-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12em;}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{margin-bottom:140px;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-animation-name:spin-__jsx-style-dynamic-selector;animation-name:spin-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrV1csQUFHMkIsQUFVVSxBQUlSLEFBR0MsQUFPQSxBQU93QixBQUd4QixBQU1GLEFBS1ksQUFPVixBQVNELEFBVUEsQUFHQSxBQUd5QixBQUd4QixBQVNVLEFBTUosQUFLa0IsQUFLbEIsQUFLQSxBQUtBLEFBS0EsQUFLTCxBQUlELEFBU2UsQUFHRSxBQUtKLEFBR0UsQUFNUyxBQU1BLEFBTTNCLEFBV0csQUFPRCxBQVdRLEFBSVAsQUFVQSxBQVFBLFVBek5HLEFBdUtDLENBL0hKLENBMUJmLEFBK0N3QixBQVV4QixBQUdBLEFBK0d3QixDQXpHVixBQWlEQyxBQXVFRCxBQWtCQyxDQTdGQSxLQTlCTSxBQVVBLEFBS0EsQUFLQSxBQUtBLENBOUdELEFBMExwQixHQXZKZSxFQW9DRSxBQXdIQSxDQXhNSCxDQXVLQSxPQTFHTSxBQTRIQSxFQTVJTCxDQWZmLEFBOENFLEFBdUJZLEFBdURBLEFBTUEsQ0EvSk8sQUFTckIsQUFxRitCLEFBVUEsQUFLWixBQUtZLEFBS0EsQ0FnRFYsQ0F2RkMsQUF3SEEsU0FyR04sQUF1REUsQUFNSCxHQW5HQSxBQTRIQSxHQTNFZixFQTdHa0IsQ0F1S0EsSUFQbEIsQ0E3REEsRUF0Q2MsQUE2RmQsQUErQmMsRUEzRmQsQUFVQSxBQVVBLEFBS0EsTUF0SG9CLENBYVksQUFPQSxBQVVQLEFBa0JBLEFBdUhMLEFBT0ssQUFnQ08sR0FqSmxCLEFBNEhBLElBbkRWLEFBUUYsSUF6RzhCLEVBeUZsQixBQVdWLEFBUUYsQUFzRVksQ0E3RmQsQ0E1RGtCLEFBNEhDLEVBekxKLENBdUtBLE9BekNVLEFBeUZBLEtBdE5ILENBNkRBLEFBMEdBLENBa0JBLElBaEpHLEVBMENHLFlBbEY1QixDQTZEQSxBQTBHQSxDQWtCQSxvQkE3RzRCLEFBd0hBLDBCQWpIUyxDQXZEaEIsQUFrQkEsQUE4SEEsZ0JBaktDLEFBT0EsQUEwTEEsU0EvRUQsQUF5RkEsRUFuTHJCLE1BMEM4QixBQXdIQSxHQXpMWixBQU9BLEFBc0JHLEFBb0tILGdCQWhNQSxBQU9BLEFBMExBLGdCQWhNbEIsQUFPQSxBQTBMQSxTQTNIbUMsZ0JBdkRwQixBQWtCRCxBQThIQSxJQS9GcUIsQUF3SEEsUUF0SnRCLEFBOEhiLENBaEpBLFVBbUJBLEVBNkVpQixBQXlGRCxXQTdLaEIsR0E4S0EsQ0F6RkEsa0JBMUNBLG9CQU5BLEFBd0hBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYXNnYXJkXFxPbmVEcml2ZVxcRGVza3RvcFxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXJzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX2FwcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aWN0b2M6IHRydWUsXHJcbiAgICAgIG1zZzogJ25vbmUnLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHBsYXllcjogJ25vbmUnLFxyXG4gICAgICBwMTogJycsXHJcbiAgICAgIHAyOiAnJyxcclxuICAgICAgd29uOiBmYWxzZSxcclxuICAgICAgZGV2OiB0cnVlLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICAgIG1zZzogJ25vbmUnLFxyXG4gICAgLy8gICAgIHBsYXllcjogJ2Jsb2NrJyxcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH0sIDIwMDApXHJcbiAgfVxyXG5cclxuICBlbmRHYW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1haW5ib3g6ICdub25lJyxcclxuICAgICAgZGV2OiB0cnVlXHJcbiAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpLCAzNTAwKSlcclxuICB9XHJcblxyXG4gIHNldEtleSA9IChlKSA9PiB7XHJcbiAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcclxuICAgIHZhciBjbHMgPSBlLnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICB2YXIgdmFsO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdGljdG9jOiAhdGhpcy5zdGF0ZS50aWN0b2NcclxuICAgICAgfSlcclxuICAgICAgaWYgKHRoaXMuc3RhdGUudGljdG9jID09IHRydWUpIHtcclxuICAgICAgICB2YWwgPSAnWCdcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB2YWwgPSAnTydcclxuICAgICAgfVxyXG4gICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSB2YWwpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICh2YWwgPT0gJ1gnID8gJzZweCA2cHggMjFweCAjZDJkMjgyJyA6ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWxsV2lubmVyKGNscylcclxuICAgICAgfSwgNTAwXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpXHJcbiAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAvLyB0aGlzLmNhbGxXaW5uZXIoKVxyXG4gIH1cclxuXHJcbiAgY2FsbFdpbm5lciA9IChjbHMpID0+IHtcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxyXG4gICAgdmFyIHUxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIHUzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIG0zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MO1xyXG4gICAgdmFyIGwzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MO1xyXG5cclxuICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSkge1xyXG4gICAgICBpZiAoKHUxID09PSB1MikgJiYgKHUxID09IHUzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgaWYgKChtMSA9PSBtMikgJiYgKG0xID09IG0zKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKG0xID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgaWYgKChsMSA9PSBsMikgJiYgKGwxID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKGwxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XHJcbiAgICAgIGlmICgodTEgPT0gbDEpICYmICh1MSA9PSBtMSkpIHtcclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMSAhPSAnJyA/IHRoaXMuc3RhdGUucDEgKyAnIHdvbicgOiAnUGxheWVyIDEgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDIgIT0gJycgPyB0aGlzLnN0YXRlLnAyICsgJyB3b24nIDogJ1BsYXllciAyIHdvbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICgodTIgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwyICE9ICcnKSkge1xyXG4gICAgICBpZiAoKHUyID09IG0yKSAmJiAodTIgPT0gbDIpKSB7XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICBpZiAodTIgPT0gJ1gnKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgd29uOiB0cnVlXHJcbiAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA2MDAwKSlcclxuICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUucDEgIT0gJycgPyB0aGlzLnN0YXRlLnAxICsgJyB3b24nIDogJ1BsYXllciAxIHdvbicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAyICE9ICcnID8gdGhpcy5zdGF0ZS5wMiArICcgd29uJyA6ICdQbGF5ZXIgMiB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoKHUzICE9ICcnKSAmJiAobDMgIT0gJycpICYmIChtMyAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MyA9PSBtMykgJiYgKHUzID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUxICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MSA9PSBtMikgJiYgKHUxID09IGwzKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUzICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMSAhPSAnJykpIHtcclxuICAgICAgaWYgKCh1MyA9PSBtMikgJiYgKHUzID09IGwxKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHdvbjogdHJ1ZVxyXG4gICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNjAwMCkpXHJcbiAgICAgICAgICBhbGVydCh0aGlzLnN0YXRlLnAxICE9ICcnID8gdGhpcy5zdGF0ZS5wMSArICcgd29uJyA6ICdQbGF5ZXIgMSB3b24nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB3b246IHRydWVcclxuICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDYwMDApKVxyXG4gICAgICAgICAgYWxlcnQodGhpcy5zdGF0ZS5wMiAhPSAnJyA/IHRoaXMuc3RhdGUucDIgKyAnIHdvbicgOiAnUGxheWVyIDIgd29uJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHUxICE9ICcnKSAmJiAodTIgIT0gJycpICYmICh1MyAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChtMyAhPSAnJykgJiYgKGwxICE9ICcnKSAmJiAobDIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgdGhpcy5zdGF0ZS53b24gPT0gZmFsc2UgJiYgYWxlcnQoJ0dhbWUgT3ZlciEnKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHAxbm0gPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHAxOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHAybm0gPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHAyOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgbWFpbmJveDogJ2Jsb2NrJyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPSdtYWluJyBjbGFzc05hbWU9J2JvZHknPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXNnJz5XZWxjb21lIHRvIFRpYy1Ub2MtVG9lPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluQm94Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYW1lRGlzcGxheSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbEhlYWRpbmcnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlBsYXllciAyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsTmFtZSc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PiB7dGhpcy5zdGF0ZS5wMX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAyfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94Jz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsdSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0gaWQ9J3UxJyA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MicgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnUgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MycgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTEnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbSBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20yJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbTMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3dCb3gnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsbCBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wxJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wyJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JsIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD0nbDMnIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuZGV2ID09IHRydWUgJiZcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5UaGFuayBZb3UgRm9yIFBsYXlpbmc8L2gxPlxyXG4gICAgICAgICAgICA8aDM+RGV2ZWxvcGVkIGJ5IFJvaGl0IE5pbmF3ZSE8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyRGV0YWlscyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxheWVyTmFtZXMnPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMW5tfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMidcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW50ZXJCdG5EaXYnPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2VudGVyQnRuJyBvbkNsaWNrPXt0aGlzLnN0YXJ0R2FtZX0+RU5URVI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC5wbHkxe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxIZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbE5hbWV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJvZHkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLlhPU3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICNkMmQyODI7ICBmb3IgWFxyXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjOTJiYWUyOyAgZm9yIE9cclxuICAgICAgICAgICAgICAuZW50ZXJCdG57XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWFpbkJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNwaW5uZXJ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3Bpbm5lcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMG1zO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sdXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDFweCAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubXNnfTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucnV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5sbHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ybHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDBweCAxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5yb3dCb3h7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMzLjMzJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zZXBCb3h7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJlbTtcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJEZXRhaWxze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnBsYXllcn07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBseTF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5lbnRlckJ0bkRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZW50ZXJCdG57XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5nYW1lRGlzcGxheXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnNlcEJveHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\asgard\\OneDrive\\Desktop\\JS\\airlines\\pages\\_app.js */")));
    }
  }]);

  return _app;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=_app.js.7e20c348017d2afe6ad1.hot-update.js.map