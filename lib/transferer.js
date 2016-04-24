'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transferer = function () {
  function Transferer(data) {
    _classCallCheck(this, Transferer);

    this._data = data;
  }

  _createClass(Transferer, [{
    key: 'transfer',
    value: function transfer(next) {
      if (!next || typeof next != 'function') {
        throw new Error("next receiver expect a function or a Transferer Object, not a " + (typeof next === 'undefined' ? 'undefined' : _typeof(next)));
      }

      var data = this._data;
      if (next.name === 'Transferer') {
        data = next.transfer(data);
      } else {
        data = next(data);
      }
      return new Transferer(data);
    }
  }, {
    key: 'get',
    value: function get() {
      return this._data;
    }
  }]);

  return Transferer;
}();

;

exports.default = Transferer;