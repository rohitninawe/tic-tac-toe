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
        dev: false,
        finalmsg: ''
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'body',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, this.state.music == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn Off Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,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",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }), this.state.music == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        title: "Turn On Music",
        onClick: this.handleMusic,
        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////t7e2Pj4/s7OyMjIzw8PD19fWenp77+/tKSkqJiYmzs7OXl5fMzMxqamrm5ubb29sICAh4eHjPz8/GxsYhISFkZGSrq6ujo6MmJiaEhIRwcHBFRUW/v7+3t7c6OjoXFxcvLy9TU1NcXFwjIyMTExM2NjZ8fHxAQEBSUlJJSUlrzj/iAAAH80lEQVR4nO2d63rquA6GCaEcCoGkkHIs0Ja2tL3/+9tdJVYSIttSsJvMfvT+mpllZ+nDiS1LsqfTEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB8MvmNN8OJ/vpIkni7mDQjeNkke4P63D++ti0bbfxcgonSTwKjPSSQ3j6Dwr9utsnFmkl+mn03bTNdGarhKGtwLxpyyl8rWuq+8dH09ZbuZ/068sLgm7T9tvY9YhKRiP8Cz00rcDGwCQqWayi7fLr8/jy9tzpPLw/bj6/T/NoXZyP2v4Z3uPS4v1w/mnuqdq2fckYVtQlq7NF2y/LrHnPu4k3Up5D49WS2lH9NHuf1rmgIG8xfmN0nGa9xt5Mc8MJ3s0ts6eaob682OUO9a6l3I6P6qfxYZVLFpmdd9oW79/L2XwcrVeTH1araDxffj/kc3DrJxrlzRwrf/JxClfTROftxHH2D1PT09eDd7opUbBhGk/hTa1/xf94nK/THnWHsTY8fchx6cIgGHhYWmdqnrn868NrtI+NgioYJqjfb7z/QLMk/NfYg8Qos3P1s+89H5jiftFPpdkk1iVJDC+NB8/OpGWkmZ3plLPvLfKiezQ4S32CHaFq7FxinVErMdI9Ocrb2EcxzBv3HUu8VWAwsAu0j2JYeiLxw6XxYZcw6i3Sw/puez7vlsvdeTuOJtNClCohCLSNYlhu7HQUl4GBOF3PXzWf2eMka4T7QtH1s0yLRnjdmDr9Uhjj2nrpcGdZfQ9ZU3RnURFoGsW7auM+w0+wsKoO3D68p/RUk/AK+TNEoH4UEYE/Ep15N2nxsb19+EruqSbhEPkzVKFmukEFOlSo7Oyn0Yn3fSt/FXVpKl/W5RdEWmoEuvsQu9kj+T3V7hAPQ+ESqy8qLtBleDJ7pG5R0/OurNEE2mijqBHocCp9rv2jbZQ5M00DyihqXtEaQrQ8ZQ+N2T3BVTjpWthH0f8Idjq77KnGXSwKRFn1WwubRHwtdjqCnc42eyw/IAgBLMPiaZaIC3SdA1EL14TdU41+8GRoZJL4JyOYuzSYY2JGjX5gzI/qpxtcoPuo1j57csTuCbabM8C6UdS8ok4nmV9U2FofSrSabokH4xLxAJ6PPKTKWXDD3QXXU7taZOBLAj6yHlBuKT8DCEEYayIHH0VkXGspsKHelh275zogd6WNoqfQuQpG6FwvPaCQMPwUib5qAeorhK3zmdDYLtFb8kP9BeSsKAAKSZOUJljifQTzLdANCmlLqVmiv/QVpABvUGhKzBQwvage83Mv9RXCTEMtptGPos8E5FH9JTfMpeRtiW4UvWZY1Qa4hkJY8enZ8T2u0L0vWuC+vkLw2jRR/SqNjCEo5Ps0EddA/VTjs/APFPL90jzfR2tvWi48jiIo5O8twGJt/hBv/scSQSF/fzgH8yiZ98Z8GlDI3+NDJCogFPk155eCQqJjgnUlFH01uLcAM/mRKHAW7PNwk/tDWPH50URw+ND0WhFqGMPLKH6qp/MjwrAtCYbmhvQ4jQ+JkHxgFyYWqsPN469JvvyVREggkV2vHDByYWrVdLz0WT2an3vKS41Mvw435u1+FPMflY0KJpuigDXyFq5HUUWiasQqD2CVtkkbck9KIc25LJEfYtC1aEX+ECZEfp3VGWw64g3akQOG6YJfvpLXi+Hb55bk8eE0iSnPifMGFqEx4bbUYsCEyA+25XWb2MakNfU0UPTF3wJDsREWT2xPTZQqobS6zwjwhlddPryuDR8Zz3VtMOXzN4j5r1N1alpUmwhLkm1z8b5bp8ngh16yH14+WngTkbmPVV+KvNLu6ksh2mIsGfoYXte7x+tjvn3Gom2tqREGKw3u8xI/5L3IF0TMXWhLnTckn7RRzy/CIXb0sHpbavXhsZo/1+QayuCxqMLpW/v65u+8Bexj0U/7hXZMXxMxb8eZGZhCMLcNP+VdRbeYqnNPJEvUuSfXR7vAqUEKf54wNRjaWFQbzq4ZSireyUe99GngFpw/hBLD6jgsTKJKGGJRa87EGI08nCGF9EMlJjg3aSpTI1Lni6ftZBr3B4N4ka53v3MWLIgV95lx20mNSJ0XdunVh9U9nPI4xrWVjCGsE+Vxz3P1gNM/enO1B76eEKZoew2NSCqD6zNZyRHYvMIZZd4vz9NHe4cClJtQfDKxm/hD+dTazN6hQI0oj0uI61p5yedMNHWKVVxCXbjLETPeGPILjhxysNt3oex6fdo7FKCfy3TPzm5exlUcg6WwGW0XTPd4lbla8jn30zXptVVvudJy5ZjQ0+916o3cwbnr4mpvzejZjLZfWDPi1TE7+vBbijG8QlvrM66nfOrmgn+G2CGsi0uuU0jUKA3pfgJfsG60rFR+2QoKL9TIWjmEvlYEWCyCMp82fB0dawyR1MXZ2qnpay9Z3yFWvfXUNXbpNb1tosXkFfj7Zlo0mlwmMrYG8yoc8Wdo4h8/M5O7O2RugCHQEDC7qzqp7GskfcF4TY0mP54ncKvuKJmcnV+qVht6uIWSH9ocnz583Gx4E4Qg24VGt+k3QbzJuvUXVuvZkDZQLco88KF8im1JPNRkY/ZLgjq307SN1CyQfySofcwMLnhybNo6N4w1G6mk4YC8S3bVd3UwaXR/7oHZKv8fGvSnw/83eYrj1+l0r70ZVxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQfg7/gdvDVZ9t9smBAAAAABJRU5ErkJggg==",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offMusic',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }), this.state.audio == true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: false
          });
        },
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9ZqRq5OS9IqXUWphKGZHWxesl8-bZeImID4Oju-EK5YzfmzX&s",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'onSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }), this.state.audio == false && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        onClick: function onClick() {
          return _this3.setState({
            audio: true
          });
        },
        src: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/mute-icon-18-256.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'offSound',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'msg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "Welcome to Tic-Toc-Toe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'footerDev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }, "Developed By Rohit Ninawe"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(x) {
          _this3.x = x;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND14.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(o) {
          _this3.o = o;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Sound2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(win) {
          _this3.win = win;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Drumroll-2.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        ref: function ref(gover) {
          _this3.gover = gover;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/SOUND42.WAV",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("audio", {
        loop: true,
        ref: function ref(start) {
          _this3.start = start;
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("source", {
        src: "http://sprott.physics.wisc.edu/wop/sounds/Theme-Introshort.wav",
        type: "audio/wav",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'mainBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'gameDisplay',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plHeading',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Player 1"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "Player 2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'plName',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, " ", this.state.p1, " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          marginRight: '10px'
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, " ", this.state.p2, " "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'finalMsg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, this.state.won == true ? this.state.finalmsg == 'x' ? this.state.p1 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, "Player 1 won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      }, this.state.p1 + ' won') : this.state.finalmsg == 'o' ? this.state.p2 == '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, "Player 2 won") : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, " ", this.state.p2 + ' won', " ") : null : this.state.finalmsg == 'g' && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 464
        },
        __self: this
      }, "Game Over")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'box',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'lu sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u1",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u2",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ru sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        id: "u3",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'm sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "m3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rowBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'll sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l1",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + ' sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l2",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'rl sepBox',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "l3",
        onClick: function onClick(e) {
          return _this3.setKey(e);
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'XOSpan',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerDetails',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'playerNames',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 1",
        value: this.state.p1,
        onChange: this.p1nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        placeholder: "Player 2",
        value: this.state.p2,
        onChange: this.p2nm,
        maxLength: "10",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'ply1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtnDiv',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.startGame,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["961198279", [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player]]]) + " " + 'enterBtn',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, "ENTER"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "961198279",
        dynamic: [this.state.player, this.state.mainbox, this.state.msg, this.state.msg, this.state.player],
        __self: this
      }, ".ply1.__jsx-style-dynamic-selector{width:41%;font-size:1.6em;height:70px;border-radius:40px;font-weight:700;padding-left:40px;outline:none;font-family:cursive;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:50px;right:40px;height:40px;cursor:pointer;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:100px;right:40px;height:40px;cursor:pointer;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:100px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:35px;right:20px;height:70px;cursor:pointer;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:98px;right:26px;height:43px;cursor:pointer;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:medium;}.music.__jsx-style-dynamic-selector{color:white;}.gameDisplay.__jsx-style-dynamic-selector{height:100px;}span.__jsx-style-dynamic-selector{color:white;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1.6em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:700;font-size:1em;}.playerDetails.__jsx-style-dynamic-selector{display:".concat(this.state.player, ";}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:200px;}.playerNames.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.text-flicker-out-glow.__jsx-style-dynamic-selector{-webkit-animation:text-flicker-out-glow 1s linear 5 both;-webkit-animation:text-flicker-out-glow-__jsx-style-dynamic-selector 1s linear 5 both;animation:text-flicker-out-glow-__jsx-style-dynamic-selector 1s linear 5 both;}.body.__jsx-style-dynamic-selector{background-color:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.XOSpan.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:100%;-webkit-user-select:none;-webkit-touch-callout:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.enterBtn.__jsx-style-dynamic-selector{height:50px;background-color:aqua;border-radius:8px;outline:none;width:175px;padding:4px;font-size:1.1em;font-family:cursive;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:500px;height:200px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:3em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:2em;}.mainBox.__jsx-style-dynamic-selector{display:").concat(this.state.mainbox, ";}.box.__jsx-style-dynamic-selector{height:400px;width:450px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.spinner.__jsx-style-dynamic-selector{-webkit-animation-name:spinner-__jsx-style-dynamic-selector;animation-name:spinner-__jsx-style-dynamic-selector;-webkit-animation-duration:1500ms;animation-duration:1500ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}.lu.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 1px 1px 0px;}.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:4em;}.ru.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:0px 0px 1px 1px;}.m.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px;}.ll.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 1px 0px 0px;}.rl.__jsx-style-dynamic-selector{border-color:white;border-style:solid;border-width:1px 0px 0px 1px;}.rowBox.__jsx-style-dynamic-selector{height:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:7em;}@-webkit-keyframes text-flicker-out-glow{0%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}14.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}15%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}24.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}25%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}39.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}40%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}44.9%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}45%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}69.5%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.4%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}79.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.8%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}89.9%.__jsx-style-dynamic-selector{opacity:1;text-shadow:none;}90%.__jsx-style-dynamic-selector{opacity:0;text-shadow:none;}100%.__jsx-style-dynamic-selector{opacity:0;}}@-webkit-keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@keyframes text-flicker-out-glow-__jsx-style-dynamic-selector{0%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}13.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.6),0 0 60px rgba(255,255,255,0.45),0 0 110px rgba(255,255,255,0.25),0 0 100px rgba(255,255,255,0.1);}14%{opacity:0;text-shadow:none;}14.9%{opacity:0;text-shadow:none;}15%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}22.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.4),0 0 110px rgba(255,255,255,0.2),0 0 100px rgba(255,255,255,0.1);}23%{opacity:0;text-shadow:none;}24.9%{opacity:0;text-shadow:none;}25%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}34.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35),0 0 100px rgba(255,255,255,0.1);}35%{opacity:0;text-shadow:none;}39.9%{opacity:0;text-shadow:none;}40%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}42.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.55),0 0 60px rgba(255,255,255,0.35);}43%{opacity:0;text-shadow:none;}44.9%{opacity:0;text-shadow:none;}45%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}54.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}55%{opacity:0;text-shadow:none;}69.4%{opacity:0;text-shadow:none;}69.5%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}69.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.45),0 0 60px rgba(255,255,255,0.25);}70%{opacity:0;text-shadow:none;}79.4%{opacity:0;text-shadow:none;}79.9%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,0.25);}80%{opacity:0;text-shadow:none;}89.8%{opacity:0;text-shadow:none;}89.9%{opacity:1;text-shadow:none;}90%{opacity:0;text-shadow:none;}100%{opacity:0;}}@-webkit-keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@keyframes flip-__jsx-style-dynamic-selector{from{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}40%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}50%{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}80%{-webkit-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}to{-webkit-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-ms-transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}@-webkit-keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@-webkit-keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spinner-__jsx-style-dynamic-selector{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@media screen and (max-width:479px){.msg.__jsx-style-dynamic-selector{display:").concat(this.state.msg, ";color:white;font-size:1.5em;margin-bottom:100px;}.footerDev.__jsx-style-dynamic-selector{position:absolute;bottom:20px;font-size:x-small;}.onMusic.__jsx-style-dynamic-selector{position:absolute;top:29px;cursor:pointer;right:28px;height:25px;}.onSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:27px;height:25px;}.offMusic.__jsx-style-dynamic-selector{position:absolute;top:15px;cursor:pointer;right:13px;height:47px;}.offSound.__jsx-style-dynamic-selector{position:absolute;top:61px;cursor:pointer;right:23px;height:29px;}.playerDetails.__jsx-style-dynamic-selector{display:").concat(this.state.player, ";width:280px;height:180px;}.ply1.__jsx-style-dynamic-selector{width:35%;font-size:0.75em;height:40px;border-radius:40px;font-weight:700;padding-left:30px;outline:none;font-family:cursive;}.enterBtnDiv.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:90px;}.enterBtn.__jsx-style-dynamic-selector{height:30px;background-color:aqua;border-radius:8px;outline:none;width:100px;padding:4px;font-size:0.75em;font-family:cursive;}.gameDisplay.__jsx-style-dynamic-selector{height:80px;}.finalMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:x-large;height:70px;font-size:medium;}.box.__jsx-style-dynamic-selector{height:280px;width:280px;cursor:pointer;-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip-__jsx-style-dynamic-selector;animation-name:flip-__jsx-style-dynamic-selector;-webkit-animation-duration:1000ms;animation-duration:1000ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-tap-highlight-color:transparent;}.plHeading.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:600;font-size:1.2em;}.devMsg.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:250px;height:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:75px;}.TYMsg.__jsx-style-dynamic-selector{color:white;font-size:1.2em;}.devName.__jsx-style-dynamic-selector{color:white;font-size:0.8em;}.plName.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-family:cursive;font-weight:500;font-size:1em;}.sepBox.__jsx-style-dynamic-selector{width:33.33%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxKU1xcYWlybGluZXNcXHBhZ2VzXFx0aWN0YWN0b2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWhCVyxBQUcyQixBQVVRLEFBT0EsQUFPTCxBQU1LLEFBT0EsQUFPQSxBQUtOLEFBR0MsQUFHRCxBQUdDLEFBT0EsQUFPd0IsQUFHeEIsQUFNRixBQUs4QyxBQVFsQyxBQVFWLEFBZ0JELEFBVUMsQUFRRCxBQUlBLEFBSXlCLEFBR3hCLEFBWVUsQUFNSixBQUtrQixBQUtsQixBQUtBLEFBS0EsQUFLQSxBQUtMLEFBSUQsQUFTRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUtBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTW9GLEFBTWxFLEFBTUEsQUFNSCxBQUtrRSxBQU1oRSxBQUdFLEFBS0wsQUFHRSxBQU1TLEFBT25CLEFBTUEsQUFRQSxBQVFBLEFBUUEsQUFPbUIsQUFLM0IsQUFVRyxBQU1ELEFBV0EsQUFJQyxBQVFBLEFBYUEsQUFRQSxBQVNELEFBSUEsQUFLQyxBQU9BLFVBOW5CRyxBQWdONkksQUFJQSxBQUkxSSxBQUlBLEFBSXlJLEFBSUEsQUFJekksQUFJQSxBQUlzRyxBQUlBLEFBSXRHLEFBSUEsQUFJa0UsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJQSxBQUlsRSxBQUlBLEFBSWtFLEFBSUEsQUFJbEUsQUFJQSxBQUk4QixBQUk5QixBQUlBLEFBSUEsQUFJQSxB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TUFSNUIsSUErREEsVUFSbUMsQUE4YkMsTUFySGxDLENBdlhxQixVQWdXckIsVUFZQSxFQTNXb0IsQUFxV3BCLElBWUEsaUJBaFhnQixTQXVCbEIsQUFzZXFCLGVBaGRxQixBQThiQyxJQW1CM0Msb0NBaGRBLEFBOGJBLHFCQTNlQSIsImZpbGUiOiJDOlxcSlNcXGFpcmxpbmVzXFxwYWdlc1xcdGljdGFjdG9lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gJ3RpbWVycydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aWN0b2M6IHRydWUsXHJcbiAgICAgIG1zZzogJ2Jsb2NrJyxcclxuICAgICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgICBwbGF5ZXI6ICdub25lJyxcclxuICAgICAgZmluYWxtc2c6ICcnLFxyXG4gICAgICBwMTogJycsXHJcbiAgICAgIHAyOiAnJyxcclxuICAgICAgd29uOiBmYWxzZSxcclxuICAgICAgLy8gZGV2OiBmYWxzZSxcclxuICAgICAgbXVzaWM6IGZhbHNlLFxyXG4gICAgICBhdWRpbzogdHJ1ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5wbGF5QXVkaW8gPSAodmFsKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmF1ZGlvKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcclxuICAgICAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgICAgICB0aGlzLngucGxheSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgICAgICB0aGlzLm8ucGxheSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3dpbic6XHJcbiAgICAgICAgICAgIHRoaXMud2luLnBsYXkoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdnb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMuZ292ZXIucGxheSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzb3VuZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtc2c6ICdub25lJyxcclxuICAgICAgICBwbGF5ZXI6ICdibG9jaycsXHJcbiAgICAgIH0pXHJcbiAgICB9LCAyMDAwKVxyXG4gIH1cclxuXHJcbiAgcmVzdGFydEdhbWUoKSB7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20zJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgIHRpY3RvYzogdHJ1ZSxcclxuICAgIC8vICAgbXNnOiAnbm9uZScsXHJcbiAgICAvLyAgIHBsYXllcjogJ2Jsb2NrJyxcclxuICAgIC8vICAgbWFpbmJveDogJ25vbmUnLFxyXG4gICAgLy8gICBwMTogJycsXHJcbiAgICAvLyAgIHAyOiAnJyxcclxuICAgIC8vICAgd29uOiBmYWxzZSxcclxuICAgIC8vICAgZGV2OiBmYWxzZSxcclxuICAgIC8vIH0pXHJcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKVxyXG4gICAgd2luZG93Lm9wZW4oJycsICdfc2VsZicsICcnKTsgd2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBlbmRHYW1lID0gKCkgPT4ge1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UyJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTMnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGljdG9jOiB0cnVlLFxyXG4gICAgICBtc2c6ICdub25lJyxcclxuICAgICAgcGxheWVyOiAnYmxvY2snLFxyXG4gICAgICBtYWluYm94OiAnbm9uZScsXHJcbiAgICAgIHAxOiAnJyxcclxuICAgICAgcDI6ICcnLFxyXG4gICAgICB3b246IGZhbHNlLFxyXG4gICAgICBkZXY6IGZhbHNlLFxyXG4gICAgICBmaW5hbG1zZzogJycsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2V0S2V5ID0gKGUpID0+IHtcclxuICAgIHZhciBpZCA9IGUudGFyZ2V0LmlkO1xyXG4gICAgdmFyIGNscyA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcclxuICAgIHZhciB2YWw7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB0aWN0b2M6ICF0aGlzLnN0YXRlLnRpY3RvY1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudGljdG9jID09IHRydWUpIHtcclxuICAgICAgICAgIHZhbCA9ICdYJ1xyXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ3gnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHZhbCA9ICdPJ1xyXG4gICAgICAgICAgdGhpcy5wbGF5QXVkaW8oJ28nKVxyXG4gICAgICAgIH1cclxuICAgICAgICAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSB2YWwpICYmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUudGV4dFNoYWRvdyA9ICh2YWwgPT0gJ1gnID8gJzZweCA2cHggMjFweCAjZDJkMjgyJyA6ICc2cHggNnB4IDIxcHggIzkyYmFlMicpKSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcihjbHMpXHJcbiAgICAgICAgfSwgNTAwXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MKVxyXG4gICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgLy8gdGhpcy5jYWxsV2lubmVyKClcclxuICB9XHJcblxyXG4gIGNhbGxXaW5uZXIgPSAoY2xzKSA9PiB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcclxuICAgIHZhciB1MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmlubmVySFRNTDtcclxuICAgIHZhciB1MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MicpLmlubmVySFRNTDtcclxuICAgIHZhciB1MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmlubmVySFRNTDtcclxuICAgIHZhciBtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMScpLmlubmVySFRNTDtcclxuICAgIHZhciBtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmlubmVySFRNTDtcclxuICAgIHZhciBtMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmlubmVySFRNTDtcclxuICAgIHZhciBsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmlubmVySFRNTDtcclxuICAgIHZhciBsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmlubmVySFRNTDtcclxuICAgIHZhciBsMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmlubmVySFRNTDtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKHUyICE9ICcnKSAmJiAodTMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MSA9PT0gdTIpICYmICh1MSA9PSB1MykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUxID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgobTEgPT0gbTIpICYmIChtMSA9PSBtMykpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKG0xID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKChsMSAhPSAnJykgJiYgKGwyICE9ICcnKSAmJiAobDMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKChsMSA9PSBsMikgJiYgKGwxID09IGwzKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAobDEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MSAhPSAnJykgJiYgKG0xICE9ICcnKSAmJiAobDEgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MSA9PSBsMSkgJiYgKHUxID09IG0xKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTEnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTEgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MiAhPSAnJykgJiYgKG0yICE9ICcnKSAmJiAobDIgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MiA9PSBtMikgJiYgKHUyID09IGwyKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMicpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wyJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTIgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS53b24gPT0gZmFsc2UpIHtcclxuICAgICAgaWYgKCh1MyAhPSAnJykgJiYgKGwzICE9ICcnKSAmJiAobTMgIT0gJycpKSB7XHJcbiAgICAgICAgaWYgKCh1MyA9PSBtMykgJiYgKHUzID09IGwzKSkge1xyXG5cclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuXHJcbiAgICAgICAgICBpZiAodTMgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ3gnXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHdvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICBmaW5hbG1zZzogJ28nXHJcbiAgICAgICAgICAgIH0sICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbmRHYW1lKCksIDQwMDApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSBmYWxzZSkge1xyXG4gICAgICBpZiAoKHUxICE9ICcnKSAmJiAobTIgIT0gJycpICYmIChsMyAhPSAnJykpIHtcclxuICAgICAgICBpZiAoKHUxID09IG0yKSAmJiAodTEgPT0gbDMpKSB7XHJcblxyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20yJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDMnKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG5cclxuICAgICAgICAgIGlmICh1MSA9PSAnWCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAneCdcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgd29uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZpbmFsbXNnOiAnbydcclxuICAgICAgICAgICAgfSwgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTMgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKGwxICE9ICcnKSkge1xyXG4gICAgICAgIGlmICgodTMgPT0gbTIpICYmICh1MyA9PSBsMSkpIHtcclxuXHJcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UzJykuY2xhc3NOYW1lID0gKGNscyArICcgc3Bpbm5lcicpKTtcclxuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyBzcGlubmVyJykpO1xyXG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMScpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHNwaW5uZXInKSk7XHJcblxyXG4gICAgICAgICAgaWYgKHUzID09ICdYJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICd4J1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICB3b246IHRydWUsXHJcbiAgICAgICAgICAgICAgZmluYWxtc2c6ICdvJ1xyXG4gICAgICAgICAgICB9LCAoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW5kR2FtZSgpLCA0MDAwKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUud29uID09IGZhbHNlKSB7XHJcbiAgICAgIGlmICgodTEgIT0gJycpICYmICh1MiAhPSAnJykgJiYgKHUzICE9ICcnKSAmJiAobTEgIT0gJycpICYmIChtMiAhPSAnJykgJiYgKG0zICE9ICcnKSAmJiAobDEgIT0gJycpICYmIChsMiAhPSAnJykgJiYgKGwzICE9ICcnKSkge1xyXG5cclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3UxJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1MycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2wxJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbDInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20xJykuY2xhc3NOYW1lID0gKGNscyArICcgdGV4dC1mbGlja2VyLW91dC1nbG93JykpO1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbTInKS5jbGFzc05hbWUgPSAoY2xzICsgJyB0ZXh0LWZsaWNrZXItb3V0LWdsb3cnKSk7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtMycpLmNsYXNzTmFtZSA9IChjbHMgKyAnIHRleHQtZmxpY2tlci1vdXQtZ2xvdycpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB3b246IGZhbHNlLFxyXG4gICAgICAgICAgZmluYWxtc2c6ICdnJ1xyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGxheUF1ZGlvKCdnb3ZlcicpXHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVuZEdhbWUoKSwgNDAwMClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHAxbm0gPSAoZSkgPT4ge1xyXG4gICAgdmFyIHZhbCA9IChlLnRhcmdldC52YWx1ZSkudHJpbSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHAxOiB2YWxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwMm5tID0gKGUpID0+IHtcclxuICAgIHZhciB2YWwgPSAoZS50YXJnZXQudmFsdWUpLnRyaW0oKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwMjogdmFsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBsYXllcjogJ25vbmUnLFxyXG4gICAgICBtYWluYm94OiAnYmxvY2snLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZU11c2ljID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG11c2ljOiAhdGhpcy5zdGF0ZS5tdXNpY1xyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5tdXNpYykge1xyXG4gICAgICAgIHRoaXMuc3RhcnQucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXRlLm11c2ljKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydC5wYXVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLndvbiA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMucGxheUF1ZGlvKCd3aW4nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD0nbWFpbicgY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tdXNpYyA9PSB0cnVlICYmXHJcbiAgICAgICAgICA8aW1nIHRpdGxlPSdUdXJuIE9mZiBNdXNpYycgY2xhc3NOYW1lPSdvbk11c2ljJyBvbkNsaWNrPXt0aGlzLmhhbmRsZU11c2ljfSBzcmM9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFlRkJNVkVVQUFBRC8vLy9Cd2NGcWFtb3pNek83dTdzckt5c2lJaUk5UFQwMk5qYkx5OHZFeE1TMXRiWFQwOVA0K1BqdzhQQmRYVjNhMnRwRVJFUjhmSHdYRnhlSGg0Zmo0K1BxNnVxdXJxNXhjWEZMUzB0WVdGaGpZMk5SVVZFTkRRM2k0dUtTa3BLaG9hRWZIeCtKaVltUmtaR2NuSngvZjM4VEV4TjlKSmZlQUFBSUlVbEVRVlI0bk8yZDJYYXFTaEJBSTdNZ2pVQ1lSVURGL1A4ZjNtaVNrNWhHN2FGNklKZjltclVPdlEvWVkzWFZ5OHZNMmJ1MW1hWlpsbFpiejkycmJnMDRUbDJWeGVvZnhkQWNWRGNKa3ZYdXVNbFh0MFJscTdwWlVIanBFQlNyQ2VKS2RkTWc4STUyR0UzcFhWOWpxcnA1dkhnbnYwUDM5SzZLdGVvbTh1RDFZZlJRNzBLb3VwV3N1TTN3dTJPNXc2aTZxUXk0ZGJXWjdGZ202UkxWN2FYRTJtV2JwNS9tVDlDc1hxSlhqUWI1Mi9za21NM0E3NTNMa0Zydm5iaFIzWElpdktNUjN4MzFIaE9kVlRmK09VNGZGMVMvdlZzMC95SHVrNUhsMC96Sm9OcmhQb2YxcmlRYzllWm82RFJwMmZIcnZWUHF1Rkowek40R2VIdTZHanBWT2IwWVlqVjhVMjEwZzVOdW1FYTlSNGF2cXFXK2NWS2pZQnoxNW1Eb1pDSEhvS2U1NGQ2cHVVZTkrMnhVVDB3UGRUWEFEQXYzREYyVmVtNlRsYkZJUGJXRzdxNjNIMit6ek52UUxQMWN2SjRxdzcyNTZlQ0hCWDBNVFp0bk1VU043Y2lVZTExWHZrUTUyWVpXay9reVg1NXN3L2FrUWsrZTRYWVFQZXlwTlZ5TG5iV29ONnhpTmQrbk5NTkJwWjhFUTFmNjhDRFpzRmJXdzBneWJKUUxDalpzUTlWK3E1VmhDUlJjQjZyMVZtSU4zemFxN1M2SU5FeFZ5MTBSYU9pcWR2dEFvS0g2YnZTS09NT3phclZQaEJsYW1yeENjWWFqMnRub042SU1IUTNHK2c5RUdaNmw3YVU5UTVEaG02MWE3QitDRExjS0YvVy9FR1I0VXUzMWpSakRRNm5hNnhzeGhxNFdjKzRQRnNQRmNER1VCWXE2T0o0OGtQd0xobEh1ajgwMTRpS1oyRGFadldFZWx1a1BCM3c2UEcvRHpoak0yeVBlTGZhaHp0Y1F4V1cyeFU2d1g3RXQ5cGthb25BMDY2bFFvUDBneDlBUnU3UUlUNjF6SjZaeVA4N2ZNRTRmQlZmcysxa2Jvc0kvUDR0U3cxWTE4ekdNWXZ0TTBOampUQTBMLzJiVWUwQTJSOFBJR0tzMTZhT3hiVnJ0RFNQanVLTnA0OHdNSTZOS0tBODRzZU1nalEwalk4Y1EzanNYUTVSdmRteVBub1ZoRVc5MnpOZEE5RGZNZzlMa2lhNnY5RGJNN2Q3a0RKM1EyVERmWkExL1pJaTJobEZaSlNEaHlub2FJbnQ3Z0xwaHBwOGg2bUJ6a09obGlJcTQzQUkvV2lmRDNCKzR4b1ZwVEYwTUMzdmNDYmtJb1lkaFlaL0U2TDFJTTdTTSszcVJjVzRGQmtSS01yd2ZsQmltYTdIM0FSVWJ4dEE5SjQ1U1ExUkt1R1NsMGhDTk1tN0dLelJFdllnbllTZzBMRVU4Q0VlZFlTZnBvcU02UThadEYycVVHVzVrM2Z0WFppZ3RsNUV5dzB6RVk2WllESUZZREFXeUdBS3hHQXJrZnpnZWlybGhpUnRLeStpN0dBTHg5dzA5TEg1dU1RUmpNUVJpTVJUSVlnZ0ViaWl0VE1GaUNNUmlLSkRGRUlqRlVDQ0xJUkNMb1VEK2g0Wmk4cGN1aGdKWkRJSDQrNFlKZGgzMzd4dWFJaDR6eFdJSWhIRER2ZXVzdmFSdTM2azl6M0pmLzRWYi9RVkRxelhUMGY1UjZBTjFRWG1xdHNrMTZISHVob2MySFkzcEVqUW9MSS9iMTVrYnRpZjdjVXJpems2eE82VHpNZHluQmtFbGhRaDd3WE14UFBTc2hkZm1ZYmcvc1ZkcGtXU0llQUwzM0l3bnZaMllTanFRaG9jZFg0SkM3UTNia2pQRnBCaERMSXMzcStGYnlwMGtWRzlEWitCUE1LbTFvUU5SRWtOblF4ZWtrSmZHaGp1WUZLajZHbFpBT1Y3RjFEL2tOOXhYVUxYbXhOU3diSDhuYUkxb3IzU1ptbGZwYkgrM2o5YXdoY3VWcmFlaEM1aEpXazlEeUhSdldocGlPeEYvemRBQ3pRVXVwcVp6ODd1cnB6SjhjRTFhSDhQZmI0SEdFR3FvMTliUUFTNU9vNThoZEVaK0xzTWtIZno0bmU2TE9EZ2xsei9zZnE5NnlBMWQ2SFI5ekliV09aaGV2T1c5ZzJlQ0pUYzBvV3Nmanl4MlRqcytyQXdRWXUraGFBai82YmNCV0pEQjBHMU85SE1xWWtOOHAxVzJvWk51V0Q0allrUFE2Y3lWbnNydmNPL0g5d3hTUXp4SkxpL29TQ05ZQmF3OU9hbWhDMTZwTGFLSU1FOXM5cEdLMUhBTlhwNG1KOTlkT1BFOG5OU3dCalA3d2lmTjdicm1LeHlURTJZczJ3RjVmVU9ZanNNOWMyN05raHBpdWNoNEtjZ0NlVHplMHhGaVEvQmliU0ZSN0dYRDM4R1JHbUs1cWpsQlJPUDlGbURmaTlRUWl6UGdwQ0RwWjdEMU9nc2RvU0YwMlV1U2hVVUNVZ012cnNrTWdTZHRpT0RNb29ZWmdra05nY2ZEL3ZrVHNVMHpSa2dOUGRDcWlmbnpCeVpRbSt1a2hnNWtGVytDNDZBMTJMNGVxU0hvMm1KNCtpdDhoYXUwR1Naa2hwQmRqZTg5ZnhyY1JKL1lFRzZObno4UHc0S3NCa3RzK0FMMW1aS3NmQWVnWjEwSW4zOHhud0RWbXllWnJua2dUL3FFNERjQit4OUxzbWdDUFI4SmlHdU00REVBTEpBSXRnRFArWVltMGMrUnZ3Y25XdmJDYnE3VFhKSGI4NTRBbzRFa3dNU0QzVnluQ21PMStFYU00a2dVSTlURGx0VXVxZElqYysyNHhZVFZQeURuaHl2cTBLdWEvUXNLQ0g4UFVHdUtMMmdQRDFnN1ZQTDkzeE53N2ZlZTB2QWxNUmhhRU5ua2d4SncvVUpFbjVET0dtaS9WT1JUYk9BZmdJOFBJcGJyaHhWZEk0S00vQVhDbitMRnBJZHJONnhQNUwxQmtOTDR3UjgxRzR4MzR1dWV5REVxcVVxelhVaUJqNENZenRLdk9PbXp6d241bFVVZjJKWEJkcVVkMDBmNmhYdU0wWFI3RUNwc3htc09BSlBmbjlnOGdoZXMxSTY3dklnaTlFRVVGWGtYYnpMaWRUVUdWc3lUaXdna1cvbkJhOHcwTy9YdkhOT3E4ZmdDMUdIamtnSUlRV0JBKzFMRTlTc1VSTU4zNG5zTDk2OVFCR3ZJcFlYQXNqa2NBSzd3cGVWSXBnTnVBZXlMTFEzRXpCWnFmWmpyMk0xYzJBUDlFQm1XVGJLQW1iZWhRVkx0RlFZY2tNL1VGcElQSFFpSWladXY1MER4QmY5TGpJWGMvSU9EZTFzL1ZtM3dsSkxMRHhteXFnT3h3M1cxSTlLNEYvMm1adCtQeXMvNnY4RUxEYXRpb090TUJvTnRWeEVkOVI0bGJtQzVvME54M3FzRmxCdUxLSlNXbVEyTWhPSUtRaFJLcXljRFNrcm9tTnVwakRxY0luRFR6ZE01WEJTTXNrb2NDdUd3N1IrOXlOenV6Wm4xTHhOWWJUcUVFNnZHd3VpcmVrYkR3MFAyQjhmYm5iTWZtTFhsYXI2QytNRi84Snl5QlJiNWl6b0FBQUFBU1VWT1JLNUNZSUk9JyAvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5tdXNpYyA9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgPGltZyB0aXRsZT0nVHVybiBPbiBNdXNpYycgY2xhc3NOYW1lPSdvZmZNdXNpYycgb25DbGljaz17dGhpcy5oYW5kbGVNdXNpY30gc3JjPSdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQU1BQUFBSmJTSklBQUFBaEZCTVZFVUFBQUQvLy8vdDdlMlBqNC9zN095TWpJenc4UEQxOWZXZW5wNzcrL3RLU2txSmlZbXpzN09YbDVmTXpNeHFhbXJtNXViYjI5c0lDQWg0ZUhqUHo4L0d4c1loSVNGa1pHU3JxNnVqbzZNbUppYUVoSVJ3Y0hCRlJVVy92NyszdDdjNk9qb1hGeGN2THk5VFUxTmNYRndqSXlNVEV4TTJOalo4Zkh4QVFFQlNVbEpKU1VscnpqL2lBQUFIODBsRVFWUjRuTzJkNjNycXVBNkdDYUVjQ29Ha2tISXMwSmEydEwzLys5dGRKVllTSXR0U3NKdk1mdlQrbXBsbForbkRpUzFMc3FmVEVRUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCRUFSQkVBUkJFQVJCOE12bU5OOE9KL3ZwSWtuaTdtRFFqZU5ra2U0UDYzRCsrdGkwYmJmeGNnb25TVHdLalBTU1EzajZEd3I5dXRzbkZta2wrbW4wM2JUTmRHYXJoS0d0d0x4cHl5bDhyV3VxKzhkSDA5WmJ1Wi8wNjhzTGdtN1Q5dHZZOVloS1JpUDhDejAwcmNER3dDUXFXYXlpN2ZMcjgvank5dHpwUEx3L2JqNi9UL05vWFp5UDJ2NFozdVBTNHYxdy9tbnVxZHEyZmNrWVZ0UWxxN05GMnkvTHJIblB1NGszVXA1RDQ5V1MybEg5Tkh1ZjFybWdJRzh4Zm1OMG5HYTl4dDVNYzhNSjNzMHRzNmVhb2I2ODJPVU85YTZsM0k2UDZxZnhZWlZMRnBtZGQ5b1c3OS9MMlh3Y3JWZVRIMWFyYUR4ZmZqL2tjM0RySnhybHpSd3JmL0p4Q2xmVFJPZnR4SEgyRDFQVDA5ZURkN29wVWJCaEdrL2hUYTEveGY5NG5LL1RIbldIc1RZOGZjaHg2Y0lnR0hoWVdtZHFucm44NjhOcnRJK05naW9ZSnFqZmI3ei9RTE1rL05mWWc4UW9zM1Axcys4OUg1amlmdEZQcGRrazFpVkpEQytOQjgvT3BHV2ttWjNwbExQdkxmS2llelE0UzMyQ0hhRnE3RnhpblZFck1kSTlPY3JiMkVjeHpCdjNIVXU4VldBd3NBdTBqMkpZZWlMeHc2WHhZWmN3NmkzU3cvcHVlejd2bHN2ZGVUdU9KdE5DbENvaENMU05ZbGh1N0hRVWw0R0JPRjNQWHpXZjJlTWthNFQ3UXRIMXMweUxSbmpkbURyOVVoamoybnJwY0dkWmZROVpVM1JuVVJGb0dzVzdhdU0rdzArd3NLb08zRDY4cC9SVWsvQUsrVE5Fb0g0VUVZRS9FcDE1TjJueHNiMTkrRXJ1cVNiaEVQa3pWS0ZtdWtFRk9sU283T3luMFluM2ZTdC9GWFZwS2wvVzVSZEVXbW9FdXZzUXU5a2orVDNWN2hBUFErRVNxeThxTHRCbGVESjdwRzVSMC9PdXJORUUybWlqcUJIb2NDcDlydjJqYlpRNU0wMER5aWhxWHRFYVFyUThaUStOMlQzQlZUanBXdGhIMGY4SWRqcTc3S25HWFN3S1JGbjFXd3ViUkh3dGRqcUNuYzQyZXl3L0lBZ0JMTVBpYVphSUMzU2RBMUVMMTRUZFU0MSs4R1JvWkpMNEp5T1l1elNZWTJKR2pYNWd6SS9xcHh0Y29QdW8xajU3Y3NUdUNiYWJNOEM2VWRTOG9rNG5tVjlVMkZvZlNyU2Fib2tINHhMeEFKNlBQS1RLV1hERDNRWFhVN3RhWk9CTEFqNnlIbEJ1S1Q4RENFRVlheUlISDBWa1hHc3BzS0hlbGgyNzV6b2dkNldOb3FmUXVRcEc2Rnd2UGFDUU1Qd1VpYjVxQWVvcmhLM3ptZERZTHRGYjhrUDlCZVNzS0FBS1NaT1VKbGppZlFUekxkQU5DbWxMcVZtaXYvUVZwQUJ2VUdoS3pCUXd2YWdlODNNdjlSWENURU10cHRHUG9zOEU1Rkg5SlRmTXBlUnRpVzRVdldaWTFRYTRoa0pZOGVuWjhUMnUwTDB2V3VDK3ZrTHcyalJSL1NxTmpDRW81UHMwRWRkQS9WVGpzL0FQRlBMOTBqemZSMnR2V2k0OGppSW81Tzh0d0dKdC9oQnYvc2NTUVNGL2Z6Z0g4eWlaOThaOEdsREkzK05ESkNvZ0ZQazE1NWVDUXFKamduVWxGSDAxdUxjQU0vbVJLSEFXN1BOd2svdERXUEg1MFVSdytORDBXaEZxR01QTEtINnFwL01qd3JBdENZYm1odlE0alErSmtIeGdGeVlXcXNQTjQ2OUp2dnlWUkVnZ2tWMnZIREJ5WVdyVmRMejBXVDJhbjN2S1M0MU12dzQzNXUxK0ZQTWZsWTBLSnB1aWdEWHlGcTVIVVVXaWFzUXFEMkNWdGtrYmNrOUtJYzI1TEpFZll0QzFhRVgrRUNaRWZwM1ZHV3c2NGczYWtRT0c2WUpmdnBMWGkrSGI1NWJrOGVFMGlTblBpZk1HRnFFeDRiYlVZc0NFeUErMjVYV2IyTWFrTmZVMFVQVEYzd0pEc1JFV1QyeFBUWlFxb2JTNnp3andobGRkUHJ5dURSOFp6M1Z0TU9Yek40ajVyMU4xYWxwVW13aExrbTF6OGI1YnA4bmdoMTZ5SDE0K1duZ1RrYm1QVlYrS3ZOTHU2a3NoMm1Jc0dmb1lYdGU3eCt0anZuM0dvbTJ0cVJFR0t3M3U4eEkvNUwzSUYwVE1YV2hMblRja243UlJ6eS9DSVhiMHNIcGJhdlhoc1pvLzErUWF5dUN4cU1McFcvdjY1dSs4QmV4ajBVLzdoWFpNWHhNeGI4ZVpHWmhDTUxjTlArVmRSYmVZcW5OUEpFdlV1U2ZYUjd2QXFVRUtmNTR3TlJqYVdGUWJ6cTRaU2lyZXlVZTk5R25nRnB3L2hCTEQ2amdzVEtKS0dHSlJhODdFR0kwOG5DR0Y5RU1sSmpnM2FTcFRJMUxuaTZmdFpCcjNCNE40a2E1M3YzTVdMSWdWOTVseDIwbU5TSjBYZHVuVmg5VTluUEk0eHJXVmpDR3NFK1Z4ejNQMWdOTS9lbk8xQjc2ZUVLWm9ldzJOU0NxRDZ6Tlp5UkhZdk1JWlpkNHZ6OU5IZTRjQ2xKdFFmREt4bS9oRCtkVGF6TjZoUUkwb2owdUk2MXA1eWVkTU5IV0tWVnhDWGJqTEVUUGVHUElMamh4eXNOdDNvZXg2ZmRvN0ZLQ2Z5M1RQem01ZXhsVWNnNld3R1cwWFRQZDRsYmxhOGpuMzB6WHB0VlZ2dWRKeTVaalEwKzkxNm8zY3dibnI0bXB2emVqWmpMWmZXRFBpMVRFNyt2QmJpakc4UWx2ck02Nm5mT3JtZ24rRzJDR3NpMHV1VTBqVUtBM3BmZ0pmc0c2MHJGUisyUW9LTDlUSVdqbUV2bFlFV0N5Q01wODJmQjBkYXd5UjFNWFoycW5wYXk5WjN5Rld2ZlhVTlhicE5iMXRvc1hrRmZqN1psbzBtbHdtTXJZRzh5b2M4V2RvNGg4L001TzdPMlJ1Z0NIUUVEQzdxenFwN0dza2ZjRjRUWTBtUDU0bmNLdnVLSm1jblYrcVZodDZ1SVdTSDlvY256NTgzR3g0RTRRZzI0Vkd0K2szUWJ6SnV2VVhWdXZaa0RaUUxjbzg4S0Y4aW0xSlBOUmtZL1pMZ2pxMzA3U04xQ3lRZnlTb2Zjd01Mbmh5Yk5vNk40dzFHNm1rNFlDOFMzYlZkM1V3YVhSLzdvSFpLdjhmR3ZTbncvODNlWXJqMStsMHI3MFpWeEFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRUkFFUVJBRVFSQUVRZmc3L2dkdkRWWjl0OXNtQkFBQUFBQkpSVTVFcmtKZ2dnPT0nIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmF1ZGlvID09IHRydWUgJiZcclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvblNvdW5kJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYXVkaW86IGZhbHNlIH0pfSBzcmM9J2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1NWOVpxUnE1T1M5SXFYVVdwaEtHWkhXeGVzbDgtYlplSW1JRDRPanUtRUs1WXpmbXpYJnMnIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmF1ZGlvID09IGZhbHNlICYmXHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nb2ZmU291bmQnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBhdWRpbzogdHJ1ZSB9KX0gc3JjPSdodHRwczovL2ljb25zcGxhY2UuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9faWNvbnMvZmZmZmZmLzI1Ni9wbmcvbXV0ZS1pY29uLTE4LTI1Ni5wbmcnIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbXNnJz5XZWxjb21lIHRvIFRpYy1Ub2MtVG9lPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9vdGVyRGV2Jz5EZXZlbG9wZWQgQnkgUm9oaXQgTmluYXdlPC9zcGFuPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyh4KSA9PiB7IHRoaXMueCA9IHg7IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9TT1VORDE0LldBVlwiIHR5cGU9XCJhdWRpby93YXZcIiA+XHJcbiAgICAgICAgICA8L3NvdXJjZT5cclxuICAgICAgICA8L2F1ZGlvPlxyXG4gICAgICAgIDxhdWRpbyByZWY9eyhvKSA9PiB7IHRoaXMubyA9IG87IH19PlxyXG4gICAgICAgICAgPHNvdXJjZSBzcmM9XCJodHRwOi8vc3Byb3R0LnBoeXNpY3Mud2lzYy5lZHUvd29wL3NvdW5kcy9Tb3VuZDIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIHJlZj17KHdpbikgPT4geyB0aGlzLndpbiA9IHdpbjsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL0RydW1yb2xsLTIud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIHJlZj17KGdvdmVyKSA9PiB7IHRoaXMuZ292ZXIgPSBnb3ZlcjsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1NPVU5ENDIuV0FWXCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGF1ZGlvIGxvb3A9e3RydWV9IHJlZj17KHN0YXJ0KSA9PiB7IHRoaXMuc3RhcnQgPSBzdGFydDsgfX0+XHJcbiAgICAgICAgICA8c291cmNlIHNyYz1cImh0dHA6Ly9zcHJvdHQucGh5c2ljcy53aXNjLmVkdS93b3Avc291bmRzL1RoZW1lLUludHJvc2hvcnQud2F2XCIgdHlwZT1cImF1ZGlvL3dhdlwiID5cclxuICAgICAgICAgIDwvc291cmNlPlxyXG4gICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Cb3gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbWVEaXNwbGF5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsSGVhZGluZyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UGxheWVyIDI8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGxOYW1lJz5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+IHt0aGlzLnN0YXRlLnAxfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT4ge3RoaXMuc3RhdGUucDJ9IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaW5hbE1zZyc+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndvbiA9PSB0cnVlID9cclxuICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAneCdcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnAxID09ICcnID8gPHNwYW4+UGxheWVyIDEgd29uPC9zcGFuPiA6IDxzcGFuPnt0aGlzLnN0YXRlLnAxICsgJyB3b24nfTwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAnbycgP1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wMiA9PSAnJyA/IDxzcGFuPlBsYXllciAyIHdvbjwvc3Bhbj4gOiA8c3Bhbj4ge3RoaXMuc3RhdGUucDIgKyAnIHdvbid9IDwvc3Bhbj4pXHJcbiAgICAgICAgICAgICAgICAgIDogbnVsbCkpXHJcbiAgICAgICAgICAgICAgOiAodGhpcy5zdGF0ZS5maW5hbG1zZyA9PSAnZycgJiYgPHNwYW4+R2FtZSBPdmVyPC9zcGFuPilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JveCc+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbHUgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nWE9TcGFuJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zZXRLZXkoZSl9IGlkPSd1MScgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nIHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTInID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3J1IHNlcEJveCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfSBpZD0ndTMnID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvd0JveCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20xJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20gc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdtMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J20zJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Qm94Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGwgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMScgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgc2VwQm94Jz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPSdsMicgY2xhc3NOYW1lPSdYT1NwYW4nIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNldEtleShlKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdybCBzZXBCb3gnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9J2wzJyBjbGFzc05hbWU9J1hPU3Bhbicgb25DbGljaz17KGUpID0+IHRoaXMuc2V0S2V5KGUpfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIFxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRldiA9PSB0cnVlICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV2TXNnJz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdUWU1zZyc+VGhhbmsgWW91IEZvciBQbGF5aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rldk5hbWUnPkRldmVsb3BlZCBieSBSb2hpdCBOaW5hd2UhPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllckRldGFpbHMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllck5hbWVzJz5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncGx5MSdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGxheWVyIDEnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucDF9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucDFubX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIxMFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdwbHkxJ1xyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMidcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wMn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wMm5tfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEwXCIgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbnRlckJ0bkRpdic+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlbnRlckJ0bicgb25DbGljaz17dGhpcy5zdGFydEdhbWV9PkVOVEVSPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgICAucGx5MXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5vbk11c2lje1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5vblNvdW5ke1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmluYWxNc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm9mZlNvdW5ke1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA5OHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5mb290ZXJEZXZ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm11c2lje1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmdhbWVEaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBsYXllckRldGFpbHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUucGxheWVyfTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wbGF5ZXJOYW1lc3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRleHQtZmxpY2tlci1vdXQtZ2xvdyB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDFzIGxpbmVhciA1IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mbGlja2VyLW91dC1nbG93IDFzIGxpbmVhciA1IGJvdGg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ib2R5IHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW03LmV6Z2lmLmNvbS90bXAvZXpnaWYtNy0xMzBiZjBiOGM3NjkuZ2lmXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgICAgICAgICAgIC8qIDwtLS0tLS0gKi9cclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuWE9TcGFue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOyBcclxuICAgICAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6bm9uZTsgXHJcbiAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6bm9uZTsgXHJcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDpub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy90ZXh0LXNoYWRvdzogNnB4IDZweCAyMXB4ICNkMmQyODI7ICBmb3IgWFxyXG4gICAgICAgICAgICAgIC8vdGV4dC1zaGFkb3c6IDZweCA2cHggMjFweCAjOTJiYWUyOyAgZm9yIE9cclxuXHJcbiAgICAgICAgICAgICAgLmVudGVyQnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZNc2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGV2TmFtZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubWFpbkJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUubWFpbmJveH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwO1xyXG4gICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uLW5hbWU6IHNwaW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3Bpbm5lcntcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzcGlubmVyO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwbXM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmx1e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDBweCAxcHggMXB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ydXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDFweCAxcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5te1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmxse1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJse1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMHB4IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnJvd0JveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzMuMzMlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNlcEJveHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3ZW07XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMy45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTQlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxNC45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTUlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDIyLjklIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDIzJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMjQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMzQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDM1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMzkuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNDIuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQzJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNDQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA1NC45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNTUlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA2OS40JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNjkuNSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDY5LjklIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA3MCUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDc5LjQlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA3OS45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgODAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA4OS44JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgODkuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDkwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLW91dC1nbG93IHtcclxuICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxMy45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTQlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAxNC45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTUlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDIyLjklIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDIzJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMjQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMzQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDM1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMzkuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNDIuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQzJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNDQuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA1NC45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNTUlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA2OS40JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgNjkuNSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDY5LjklIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA3MCUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDc5LjQlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA3OS45JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgODAlIHtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA4OS44JSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgODkuOSUge1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDkwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmxpcCB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAtMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA0MCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA4MCUge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLm1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5tc2d9O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZm9vdGVyRGV2e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub25NdXNpY3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMjlweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub25Tb3VuZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub2ZmTXVzaWN7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDdweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5vZmZTb3VuZHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNjFweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAucGxheWVyRGV0YWlsc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5wbGF5ZXJ9O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBseTF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRuRGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmVudGVyQnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZ2FtZURpc3BsYXl7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5maW5hbE1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmJveHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsaXA7XHJcbiAgICAgICAgICAgICAgICAvLyAgYW5pbWF0aW9uLW5hbWU6IHNwaW47XHJcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XHJcbiAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbEhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmRldk1zZ3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5UWU1zZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZXZOYW1le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsTmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNlcEJveHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\JS\\airlines\\pages\\tictactoe.js */")));
    }
  }]);

  return TicTacToe;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=index.js.800d5090d3a1f3f56943.hot-update.js.map