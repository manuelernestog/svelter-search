"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dexie = _interopRequireDefault(require("dexie"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // src/svelterSearch.js
var svelterSearch = /*#__PURE__*/function () {
  function svelterSearch(options) {
    var _this = this;
    _classCallCheck(this, svelterSearch);
    // Initialize properties with defaults
    this.db_id = options.db_id || 'svelterSearchDB';
    this.update_interval = options.update_interval || 3600000; // 1 hour in milliseconds
    this.updated_method = options.updated_method || 'INCREMENTAL'; // 'INCREMENTAL' or 'TOTAL'
    this.data_url = options.data_url || '';
    this.date_url = options.date_url || '';
    this.last_update = null;

    // Initialize IndexedDB using Dexie
    this.db = new _dexie["default"](this.db_id);

    // Define database schema with multi-entry index for searchWords
    this.db.version(1).stores({
      items: '&id, updated_at, search_value, *searchWords'
    });

    // Add hooks to process search_value and generate searchWords
    this.db.items.hook('creating', function (primKey, obj) {
      if (typeof obj.search_value === 'string') {
        obj.searchWords = _this.getAllWords(obj.search_value);
      } else {
        obj.searchWords = [];
      }
    });
    this.db.items.hook('updating', function (mods, primKey, obj) {
      if (mods.hasOwnProperty('search_value')) {
        if (typeof mods.search_value === 'string') {
          // Re-index searchWords
          return {
            searchWords: _this.getAllWords(mods.search_value)
          };
        } else {
          // Remove searchWords index
          return {
            searchWords: []
          };
        }
      }
    });

    // Load last_update from localStorage
    var lastUpdateKey = "".concat(this.db_id, "_last_update");
    var storedLastUpdate = localStorage.getItem(lastUpdateKey);
    if (storedLastUpdate) {
      this.last_update = new Date(storedLastUpdate);
    } else {
      this.last_update = new Date(0); // If no stored date, set to epoch
    }
  }

  // Helper method to extract words from text
  return _createClass(svelterSearch, [{
    key: "getAllWords",
    value: function getAllWords(text) {
      var words = text.match(/\b\w+\b/g);
      if (words) {
        // Convert to lowercase and remove duplicates
        var wordSet = new Set(words.map(function (word) {
          return word.toLowerCase();
        }));
        return Array.from(wordSet);
      }
      return [];
    }

    // Method to check if an update is needed based on update_interval
  }, {
    key: "isUpdateNeeded",
    value: function isUpdateNeeded() {
      var now = Date.now();
      var timeSinceLastUpdate = now - this.last_update.getTime();
      return timeSinceLastUpdate >= this.update_interval;
    }

    // Public method to manually trigger an update if needed
  }, {
    key: "updateDataIfNeeded",
    value: function () {
      var _updateDataIfNeeded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.isUpdateNeeded()) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return this.updateData();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function updateDataIfNeeded() {
        return _updateDataIfNeeded.apply(this, arguments);
      }
      return updateDataIfNeeded;
    }()
  }, {
    key: "updateData",
    value: function () {
      var _updateData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.updated_method === 'INCREMENTAL')) {
                _context2.next = 5;
                break;
              }
              _context2.next = 3;
              return this.pullIncremental();
            case 3:
              _context2.next = 11;
              break;
            case 5:
              if (!(this.updated_method === 'TOTAL')) {
                _context2.next = 10;
                break;
              }
              _context2.next = 8;
              return this.pullTotal();
            case 8:
              _context2.next = 11;
              break;
            case 10:
              throw new Error("Invalid updated_method: ".concat(this.updated_method));
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateData() {
        return _updateData.apply(this, arguments);
      }
      return updateData;
    }()
  }, {
    key: "pull",
    value: function () {
      var _pull = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data_url,
          response,
          data,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              data_url = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : this.data_url;
              if (data_url) {
                _context3.next = 3;
                break;
              }
              throw new Error('Data URL is not specified.');
            case 3:
              _context3.prev = 3;
              _context3.next = 6;
              return fetch(data_url);
            case 6:
              response = _context3.sent;
              if (response.ok) {
                _context3.next = 9;
                break;
              }
              throw new Error("Network response was not ok: ".concat(response.statusText));
            case 9:
              _context3.next = 11;
              return response.json();
            case 11:
              data = _context3.sent;
              _context3.next = 14;
              return this.processData(data);
            case 14:
              // Update last_update
              this.last_update = new Date();
              localStorage.setItem("".concat(this.db_id, "_last_update"), this.last_update.toISOString());
              _context3.next = 22;
              break;
            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](3);
              console.error('Error in pull method:', _context3.t0);
              throw _context3.t0;
            case 22:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[3, 18]]);
      }));
      function pull() {
        return _pull.apply(this, arguments);
      }
      return pull;
    }()
  }, {
    key: "pullIncremental",
    value: function () {
      var _pullIncremental = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var lastUpdateParam, incrementalUrl;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              lastUpdateParam = encodeURIComponent(this.last_update.toISOString());
              incrementalUrl = "".concat(this.data_url, "?since=").concat(lastUpdateParam);
              _context4.next = 4;
              return this.pull(incrementalUrl);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function pullIncremental() {
        return _pullIncremental.apply(this, arguments);
      }
      return pullIncremental;
    }()
  }, {
    key: "pullTotal",
    value: function () {
      var _pullTotal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var response, _yield$response$json, updated_at, updatedAtDate;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (this.date_url) {
                _context5.next = 5;
                break;
              }
              console.warn('Date URL is not specified. Proceeding to pull all data.');
              _context5.next = 4;
              return this.pull();
            case 4:
              return _context5.abrupt("return");
            case 5:
              _context5.prev = 5;
              _context5.next = 8;
              return fetch(this.date_url);
            case 8:
              response = _context5.sent;
              if (response.ok) {
                _context5.next = 11;
                break;
              }
              throw new Error("Network response was not ok: ".concat(response.statusText));
            case 11:
              _context5.next = 13;
              return response.json();
            case 13:
              _yield$response$json = _context5.sent;
              updated_at = _yield$response$json.updated_at;
              updatedAtDate = new Date(updated_at);
              if (!(updatedAtDate > this.last_update)) {
                _context5.next = 21;
                break;
              }
              _context5.next = 19;
              return this.pull();
            case 19:
              _context5.next = 22;
              break;
            case 21:
              // No update needed
              console.log('Data is up to date. No need to pull.');
            case 22:
              _context5.next = 28;
              break;
            case 24:
              _context5.prev = 24;
              _context5.t0 = _context5["catch"](5);
              console.error('Error in pullTotal method:', _context5.t0);
              throw _context5.t0;
            case 28:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[5, 24]]);
      }));
      function pullTotal() {
        return _pullTotal.apply(this, arguments);
      }
      return pullTotal;
    }()
  }, {
    key: "processData",
    value: function () {
      var _processData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (Array.isArray(data)) {
                _context7.next = 2;
                break;
              }
              throw new Error('Data must be an array of items.');
            case 2:
              _context7.next = 4;
              return this.db.transaction('rw', this.db.items, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var _iterator, _step, item, existingItem;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _iterator = _createForOfIteratorHelper(data);
                      _context6.prev = 1;
                      _iterator.s();
                    case 3:
                      if ((_step = _iterator.n()).done) {
                        _context6.next = 16;
                        break;
                      }
                      item = _step.value;
                      if (item.id) {
                        _context6.next = 8;
                        break;
                      }
                      console.warn('Item without id:', item);
                      return _context6.abrupt("continue", 14);
                    case 8:
                      _context6.next = 10;
                      return _this2.db.items.get(item.id);
                    case 10:
                      existingItem = _context6.sent;
                      if (!(!existingItem || new Date(item.updated_at) > new Date(existingItem.updated_at))) {
                        _context6.next = 14;
                        break;
                      }
                      _context6.next = 14;
                      return _this2.db.items.put({
                        id: item.id,
                        updated_at: item.updated_at,
                        search_value: item.search_value,
                        data: item.data
                        // searchWords will be automatically handled by hooks
                      });
                    case 14:
                      _context6.next = 3;
                      break;
                    case 16:
                      _context6.next = 21;
                      break;
                    case 18:
                      _context6.prev = 18;
                      _context6.t0 = _context6["catch"](1);
                      _iterator.e(_context6.t0);
                    case 21:
                      _context6.prev = 21;
                      _iterator.f();
                      return _context6.finish(21);
                    case 24:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, null, [[1, 18, 21, 24]]);
              })));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function processData(_x) {
        return _processData.apply(this, arguments);
      }
      return processData;
    }()
  }, {
    key: "purge",
    value: function () {
      var _purge = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.db.items.clear();
            case 2:
              localStorage.removeItem("".concat(this.db_id, "_last_update"));
              console.log('Database purged.');
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function purge() {
        return _purge.apply(this, arguments);
      }
      return purge;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(text) {
        var searchWords, collection, results;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (text) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return", []);
            case 2:
              _context9.next = 4;
              return this.updateDataIfNeeded();
            case 4:
              // Extract words from the search text
              searchWords = this.getAllWords(text.toLowerCase());
              if (!(searchWords.length === 0)) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return", []);
            case 7:
              _context9.prev = 7;
              // Perform a query using the multi-entry index
              collection = this.db.items.where('searchWords').anyOf(searchWords); // Optionally, you can filter further to match all words
              collection = collection.filter(function (item) {
                var itemWords = item.searchWords || [];
                return searchWords.every(function (word) {
                  return itemWords.includes(word);
                });
              });
              _context9.next = 12;
              return collection.toArray();
            case 12:
              results = _context9.sent;
              return _context9.abrupt("return", results);
            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](7);
              console.error('Error during search:', _context9.t0);
              return _context9.abrupt("return", []);
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[7, 16]]);
      }));
      function search(_x2) {
        return _search.apply(this, arguments);
      }
      return search;
    }() // Optional: method to manually trigger an update
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.updateData();
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }]);
}();
var _default = exports["default"] = svelterSearch;