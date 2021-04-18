(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/api/API.js":
/*!*********************************!*\
  !*** ./resources/js/api/API.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API = /*#__PURE__*/function () {
  function API() {
    _classCallCheck(this, API);

    this.server = 'http://localhost:8000/api'; // this.server = 'https://lit-sierra-16668.herokuapp.com/api';
  }

  _createClass(API, [{
    key: "getAllItems",
    value: function getAllItems(address) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "".concat(_this.server, "/").concat(address));
        xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var data = JSON.parse(xhr.responseText);
              return resolve(data.data);
            }
          }

          return reject(xhr.responseText);
        });
        xhr.send();
      });
    }
  }, {
    key: "lazyload",
    value: function lazyload(address, number) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "".concat(_this2.server, "/").concat(address, "/").concat(number));
        xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var data = JSON.parse(xhr.responseText);
              return resolve(data.data);
            }
          }

          return reject(xhr.responseText);
        });
        xhr.send();
      });
    } // sendOrder(name, phone, messenger) {
    //   return new Promise((resolve, reject) => {
    //     const params = new URLSearchParams();
    //     params.append('name', name);
    //     params.append('phone', phone);
    //     params.append('messenger', messenger);
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('POST', `${this.server}/test`);
    //     xhr.setRequestHeader('X-CSRF-TOKEN', window.csrfToken);
    //     xhr.addEventListener('load', () => {
    //       if (xhr.status === 200) {
    //         return resolve(xhr.responseText);
    //       }
    //       return reject(xhr.responseText);
    //     });
    //     xhr.send(params);
    //   });
    // }

  }]);

  return API;
}(); // const axios = window.axios;
// console.log(axios);
// const BASE_API_URL = 'http://localhost:8000/api';
// export default {
//   getAllPosts: (teset) =>
//   window.axios.get(`${BASE_API_URL}/${teset}`)
// }




/***/ }),

/***/ "./resources/js/components/BigImage.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/BigImage.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/sendActionGAandYM */ "./resources/js/api/sendActionGAandYM.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function BigImage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isError = _useState4[0],
      setIsError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      errorText = _useState6[0],
      setErrorText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showResult = _useState8[0],
      setShowResult = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      resultText = _useState10[0],
      setResultText = _useState10[1];

  var setter = props.setter,
      api = props.api,
      img = props.img;

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      messenger = _useState12[0],
      setMessenger = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    phone: ''
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      orderCall = _useState14[0],
      setOrderCall = _useState14[1];

  var handleRadio = function handleRadio(e) {
    setMessenger(e.target.value);
  };

  var handleFormClick = function handleFormClick() {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var clientName, clientPhone, order;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              clientName = orderCall.name;
              clientPhone = orderCall.phone;

              if (!(clientName.length === '')) {
                _context.next = 7;
                break;
              }

              setIsError(true);
              setErrorText('Поле с именем должно быть заполнено');
              return _context.abrupt("return");

            case 7:
              if (!(clientPhone.length === '')) {
                _context.next = 11;
                break;
              }

              setIsError(true);
              setErrorText('Поле с телефоном должно быть заполнено');
              return _context.abrupt("return");

            case 11:
              if (!(clientName.search(/^[A-ЯЁ\s][а-яё\s]+/) === -1)) {
                _context.next = 15;
                break;
              }

              setIsError(true);
              setErrorText('Для ввода имени допускаются только кириллические символы');
              return _context.abrupt("return");

            case 15:
              if (clientName.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) !== -1) {
                setIsError(true);
                setErrorText('Телефон должен быть введен в формате +7ХХХХХХХХ');
              }

              if (!(clientPhone.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) !== -1 && clientName.search(/^[A-ЯЁ][а-яё]+/) !== -1)) {
                _context.next = 23;
                break;
              }

              _context.next = 19;
              return api.sendOrder(clientName, clientPhone, messenger);

            case 19:
              order = _context.sent;

              if (order === 'Заявка принята') {
                setShowResult(true);
                handleFormClick();
                setResultText('Ваша зявка принята. Мы свяжемся с Вами в ближайшее время');
              } else {
                setShowResult(true);
                handleFormClick();
                setResultText('Произошла техническая ошибка. Попробуйте отправить заявку еще раз или свяжитесь другим способом');
              } // Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.


              _context.next = 25;
              break;

            case 23:
              setIsError(true);
              setErrorText('Ошибка в вводе данных. Имя должно сдержать только кириллические символы. Телефон в формате 8ХХХХХХХХХХ');

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    setIsError(false);
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    if (value.length > 30) {
      setIsError(true);
      setErrorText('Длина имени не может быть более 30 символов');
      return;
    }

    setIsError(false);
    setOrderCall(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };

  var clearImage = function clearImage() {
    setter(null);
  };

  return img !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "big_image_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bi_image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "big_image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    srcSet: "".concat(img.img640, " 1x, ").concat(img.img1280, " 2x"),
    media: "(max-width: 640px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    srcSet: "".concat(img.img1280, " 1x, ").concat(img.img1980, " 2x"),
    media: "(min-width: 641px)  and (max-width: 960px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    srcSet: img.img1980,
    media: "(min-width: 961px)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "big_image",
    src: img.img1980,
    srcSet: "".concat(img.img1280, " 1x, ").concat(img.img1980, " 2x"),
    alt: "\u041F\u0440\u0438\u043C\u0435\u0440"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "close_btn",
    role: "button",
    onClick: clearImage,
    tabIndex: 0,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') clearImage();
    }
  }, "\u2718")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bi_interface"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "order_form_desrc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "fat_font"
  }, "\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0437\u0430\u043A\u0430\u0437"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), ' ', "\u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0412\u0430\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "big_image_interface"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "messengers_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://wa.me/79521381601",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C Whatsapp",
    onClick: function onClick() {
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('Messenger', 'Переход WhatsApp', 'WhatsApp', 50, 'ymWhatsapp');
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
    },
    className: "header_menu_logo whatsapp_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "social_link_text"
  }, "WhatsApp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://t.me/RomanSuvorkov",
    target: "_blank",
    rel: "noreferrer",
    onClick: function onClick() {
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('Messenger', 'Переход Telegram', 'Telegram', 50, 'ymTelegram');
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
    },
    className: "header_menu_logo telegram_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "social_link_text"
  }, "Telegram")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "viber://add?number=79521381601",
    target: "_blank",
    rel: "noreferrer",
    onClick: function onClick() {
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('Messenger', 'Переход Viber', 'Viber', 50, 'ymViber');
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
    },
    className: "header_menu_logo viber_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "social_link_text"
  }, "Viber"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "order_mail_btn order_btn order_link",
    href: "mailto:centr_ug@mail.ru?subject=\u0417\u0430\u043A\u0430\u0437 \u043D\u0430 \u0448\u0430\u0440\u0438\u043A\u0438 &body=\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!%0A\u041F\u0440\u043E\u0448\u0443 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439.%0A%0A%0A\u0423\u041A\u0410\u0416\u0418\u0422\u0415 \u041F\u041E\u0416\u0410\u041B\u0423\u0419\u0421\u0422\u0410 \u0412\u0410\u0428\u0418 \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u042B\u0415 \u0414\u0410\u041D\u041D\u042B\u0415",
    target: "_blank",
    rel: "noreferrer",
    onClick: function onClick() {
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('Email', 'emailClick', 'emailClick', 50, 'ymEmail');
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "order_phone"
  }, "888888888"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "order_btn phone_link order_link",
    href: "tel:+79521381601",
    onClick: function onClick() {
      Object(_api_sendActionGAandYM__WEBPACK_IMPORTED_MODULE_3__["default"])('phoneCall', 'phoneCall', 'phoneCall', 50, 'ymPhoneLink');
    }
  }, "+79521381601"), showResult && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, resultText)), isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "order_form",
    method: "POST",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "input_label",
    htmlFor: "name"
  }, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "input_field",
    type: "text",
    required: true,
    name: "name",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "input_label",
    htmlFor: "phone"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "input_field",
    type: "number",
    placeholder: "8\u0425\u0425\u0425\u0425\u0425\u0425\u0425\u0425\u0425\u0425",
    required: true,
    name: "phone",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "radio_qestion"
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "radio_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "radio_label",
    htmlFor: "messengersChoice1"
  }, "Telegramm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "messengersChoice1",
    name: "messengers",
    value: "Telegramm",
    onClick: function onClick(e) {
      return handleRadio(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "radio_label",
    htmlFor: "messengersChoice2"
  }, "Whatsapp", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "messengersChoice2",
    name: "messengers",
    value: "Whatsapp",
    onClick: function onClick(e) {
      return handleRadio(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "radio_label",
    htmlFor: "messengersChoice3"
  }, "Viber", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "radio",
    id: "messengersChoice3",
    name: "messengers",
    value: "Viber",
    onClick: function onClick(e) {
      return handleRadio(e);
    }
  }))), isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, errorText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "order_btn",
    type: "button",
    onClick: handleFormClick
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"), !isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "order_btn",
    type: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))));
}

/* harmony default export */ __webpack_exports__["default"] = (BigImage);
BigImage.propTypes = {
  setter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  img: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    img640: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    img1280: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    img1980: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }),
  api: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    getAllItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    lazyload: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sendOrder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  })
};
BigImage.defaultProps = {
  setter: function setter() {},
  api: {},
  img: null
};

/***/ }),

/***/ "./resources/js/components/Catalog.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/Catalog.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CatalogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CatalogCard */ "./resources/js/components/CatalogCard.jsx");
/* harmony import */ var _BigImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BigImage */ "./resources/js/components/BigImage.jsx");
/* harmony import */ var _api_API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/API */ "./resources/js/api/API.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Catalog(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeImage = _useState2[0],
      setActiveImage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(5),
      _useState4 = _slicedToArray(_useState3, 2),
      lastItem = _useState4[0],
      setLastItem = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      items = _useState6[0],
      setItems = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      showButtonActive = _useState8[0],
      setShowButtonActive = _useState8[1];

  var category = props.category,
      header = props.header;
  var API = new _api_API__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var screenWidth = 0;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var loadedItems, _loadedItems;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setItems([]);
            setLastItem(5);
            screenWidth = window.screen.width;

            if (!(screenWidth <= 1024)) {
              _context.next = 11;
              break;
            }

            setShowButtonActive(true);
            _context.next = 7;
            return API.lazyload(category, 0);

          case 7:
            loadedItems = _context.sent;
            setItems(function (prevState) {
              return [].concat(_toConsumableArray(prevState), _toConsumableArray(loadedItems));
            });
            _context.next = 16;
            break;

          case 11:
            setShowButtonActive(false);
            _context.next = 14;
            return API.getAllItems(category);

          case 14:
            _loadedItems = _context.sent;
            setItems(_loadedItems);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [category]);

  var handleMoreClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var loadedItems, loadedNumb;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return API.lazyload(category, lastItem);

            case 2:
              loadedItems = _context2.sent;

              if (loadedItems.length < 5) {
                setShowButtonActive(false);
              }

              if (loadedItems.length > 0) {
                setItems(function (prevState) {
                  return [].concat(_toConsumableArray(prevState), _toConsumableArray(loadedItems));
                });
                loadedNumb = lastItem + 5;
                setLastItem(loadedNumb);
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleMoreClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "catalog_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "header2"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "catalog_list_wrapper"
  }, items.map(function (o) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CatalogCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: o.id,
      descr: o,
      setter: setActiveImage
    });
  }), activeImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BigImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setter: setActiveImage,
    img: activeImage,
    api: API
  })), showButtonActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "show_more_btn",
    onClick: handleMoreClick
  }, "\u0415\u0449\u0451"));
}

/* harmony default export */ __webpack_exports__["default"] = (Catalog);
Catalog.propTypes = {
  category: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Catalog.defaultProps = {
  category: null,
  header: null
};

/***/ }),

/***/ "./resources/js/components/CatalogCard.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/CatalogCard.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function CatalogCard(props) {
  var setter = props.setter,
      descr = props.descr;

  var handleClick = function handleClick() {
    setter(descr);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalog_card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalog_img_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    className: "catalog_card_img",
    onClick: handleClick,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') handleClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "".concat(descr.img640, " 1x, ").concat(descr.img1280, " 2x"),
    media: "(max-width: 640px)"
  }), descr.img1980 !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "".concat(descr.img1280, " 1x, ").concat(descr.img1980, " 2x"),
    media: "(min-width: 641px)  and (max-width: 960px)"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: descr.img1280,
    media: "(min-width: 641px)  and (max-width: 960px)"
  }), descr.img1280 !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: descr.img1280,
    media: "(min-width: 961px)"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: descr.img1280,
    media: "(min-width: 961px)"
  }), descr.img1980 !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "catalog_card_img",
    onClick: handleClick,
    src: descr.img1980,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') handleClick();
    },
    srcSet: "".concat(descr.img1280, " 1x, ").concat(descr.img1980, " 2x"),
    alt: "\u041F\u0440\u0438\u043C\u0435\u0440"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "catalog_card_img",
    onClick: handleClick,
    src: descr.img1280,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') handleClick();
    },
    srcSet: descr.img1280,
    alt: "\u041F\u0440\u0438\u043C\u0435\u0440"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "catalog_card_text_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "catalog_card_text"
  }, descr.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "catalog_card_price"
  }, "\u0426\u0435\u043D\u0430:", descr.price, ' ', "\u0440\u0443\u0431."));
}

/* harmony default export */ __webpack_exports__["default"] = (CatalogCard);
CatalogCard.propTypes = {
  setter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  descr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    img640: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    img1280: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    img1980: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
CatalogCard.defaultProps = {
  setter: function setter() {},
  descr: {}
};

/***/ })

}]);