var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ri(ye) {
  return ye && ye.__esModule && Object.prototype.hasOwnProperty.call(ye, "default") ? ye.default : ye;
}
var gr = { exports: {} };
(function(ye, z) {
  (function(L, A) {
    ye.exports = A();
  })(vr, function() {
    var L = function(e, t) {
      return (L = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
        n.__proto__ = r;
      } || function(n, r) {
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
      })(e, t);
    }, A = function() {
      return (A = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
    };
    function ie(e, t, n) {
      for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
      return e.concat(r || Array.prototype.slice.call(t));
    }
    var N = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : vr, F = Object.keys, U = Array.isArray;
    function Z(e, t) {
      return typeof t != "object" || F(t).forEach(function(n) {
        e[n] = t[n];
      }), e;
    }
    typeof Promise > "u" || N.Promise || (N.Promise = Promise);
    var Be = Object.getPrototypeOf, br = {}.hasOwnProperty;
    function te(e, t) {
      return br.call(e, t);
    }
    function Re(e, t) {
      typeof t == "function" && (t = t(Be(e))), (typeof Reflect > "u" ? F : Reflect.ownKeys)(t).forEach(function(n) {
        ve(e, n, t[n]);
      });
    }
    var An = Object.defineProperty;
    function ve(e, t, n, r) {
      An(e, t, Z(n && te(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
    }
    function Me(e) {
      return { from: function(t) {
        return e.prototype = Object.create(t.prototype), ve(e.prototype, "constructor", e), { extend: Re.bind(null, e.prototype) };
      } };
    }
    var wr = Object.getOwnPropertyDescriptor, _r = [].slice;
    function ft(e, t, n) {
      return _r.call(e, t, n);
    }
    function jn(e, t) {
      return t(e);
    }
    function Qe(e) {
      if (!e) throw new Error("Assertion Failed");
    }
    function Cn(e) {
      N.setImmediate ? setImmediate(e) : setTimeout(e, 0);
    }
    function le(e, t) {
      if (typeof t == "string" && te(e, t)) return e[t];
      if (!t) return e;
      if (typeof t != "string") {
        for (var n = [], r = 0, i = t.length; r < i; ++r) {
          var o = le(e, t[r]);
          n.push(o);
        }
        return n;
      }
      var a = t.indexOf(".");
      if (a !== -1) {
        var u = e[t.substr(0, a)];
        return u == null ? void 0 : le(u, t.substr(a + 1));
      }
    }
    function ne(e, t, n) {
      if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
        Qe(typeof n != "string" && "length" in n);
        for (var r = 0, i = t.length; r < i; ++r) ne(e, t[r], n[r]);
      } else {
        var o, a, u = t.indexOf(".");
        u !== -1 ? (o = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? U(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : ne(u = !(u = e[o]) || !te(e, o) ? e[o] = {} : u, a, n)) : n === void 0 ? U(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
      }
    }
    function Dn(e) {
      var t, n = {};
      for (t in e) te(e, t) && (n[t] = e[t]);
      return n;
    }
    var xr = [].concat;
    function Tn(e) {
      return xr.apply([], e);
    }
    var de = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Tn([8, 16, 32, 64].map(function(e) {
      return ["Int", "Uint", "Float"].map(function(t) {
        return t + e + "Array";
      });
    }))).filter(function(e) {
      return N[e];
    }), In = new Set(de.map(function(e) {
      return N[e];
    })), Xe = null;
    function Oe(e) {
      return Xe = /* @__PURE__ */ new WeakMap(), e = function t(n) {
        if (!n || typeof n != "object") return n;
        var r = Xe.get(n);
        if (r) return r;
        if (U(n)) {
          r = [], Xe.set(n, r);
          for (var i = 0, o = n.length; i < o; ++i) r.push(t(n[i]));
        } else if (In.has(n.constructor)) r = n;
        else {
          var a, u = Be(n);
          for (a in r = u === Object.prototype ? {} : Object.create(u), Xe.set(n, r), n) te(n, a) && (r[a] = t(n[a]));
        }
        return r;
      }(e), Xe = null, e;
    }
    var kr = {}.toString;
    function Ft(e) {
      return kr.call(e).slice(8, -1);
    }
    var Ut = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Or = typeof Ut == "symbol" ? function(e) {
      var t;
      return e != null && (t = e[Ut]) && t.apply(e);
    } : function() {
      return null;
    };
    function Pe(e, t) {
      return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
    }
    var Ne = {};
    function fe(e) {
      var t, n, r, i;
      if (arguments.length === 1) {
        if (U(e)) return e.slice();
        if (this === Ne && typeof e == "string") return [e];
        if (i = Or(e)) {
          for (n = []; !(r = i.next()).done; ) n.push(r.value);
          return n;
        }
        if (e == null) return [e];
        if (typeof (t = e.length) != "number") return [e];
        for (n = new Array(t); t--; ) n[t] = e[t];
        return n;
      }
      for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
      return n;
    }
    var Lt = typeof Symbol < "u" ? function(e) {
      return e[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, Ze = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], oe = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ze), Pr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Fe(e, t) {
      this.name = e, this.message = t;
    }
    function qn(e, t) {
      return e + ". Errors: " + Object.keys(t).map(function(n) {
        return t[n].toString();
      }).filter(function(n, r, i) {
        return i.indexOf(n) === r;
      }).join(`
`);
    }
    function ht(e, t, n, r) {
      this.failures = t, this.failedKeys = r, this.successCount = n, this.message = qn(e, t);
    }
    function Ue(e, t) {
      this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
        return t[n];
      }), this.failuresByPos = t, this.message = qn(e, this.failures);
    }
    Me(Fe).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), Me(ht).from(Fe), Me(Ue).from(Fe);
    var Wt = oe.reduce(function(e, t) {
      return e[t] = t + "Error", e;
    }, {}), Kr = Fe, C = oe.reduce(function(e, t) {
      var n = t + "Error";
      function r(i, o) {
        this.name = n, i ? typeof i == "string" ? (this.message = "".concat(i).concat(o ? `
 ` + o : ""), this.inner = o || null) : typeof i == "object" && (this.message = "".concat(i.name, " ").concat(i.message), this.inner = i) : (this.message = Pr[t] || n, this.inner = null);
      }
      return Me(r).from(Kr), e[t] = r, e;
    }, {});
    C.Syntax = SyntaxError, C.Type = TypeError, C.Range = RangeError;
    var Bn = Ze.reduce(function(e, t) {
      return e[t + "Error"] = C[t], e;
    }, {}), dt = oe.reduce(function(e, t) {
      return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = C[t]), e;
    }, {});
    function M() {
    }
    function He(e) {
      return e;
    }
    function Er(e, t) {
      return e == null || e === He ? t : function(n) {
        return t(e(n));
      };
    }
    function Ke(e, t) {
      return function() {
        e.apply(this, arguments), t.apply(this, arguments);
      };
    }
    function Sr(e, t) {
      return e === M ? t : function() {
        var n = e.apply(this, arguments);
        n !== void 0 && (arguments[0] = n);
        var r = this.onsuccess, i = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var o = t.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? Ke(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? Ke(i, this.onerror) : i), o !== void 0 ? o : n;
      };
    }
    function Ar(e, t) {
      return e === M ? t : function() {
        e.apply(this, arguments);
        var n = this.onsuccess, r = this.onerror;
        this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ke(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ke(r, this.onerror) : r);
      };
    }
    function jr(e, t) {
      return e === M ? t : function(n) {
        var r = e.apply(this, arguments);
        Z(n, r);
        var i = this.onsuccess, o = this.onerror;
        return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Ke(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? Ke(o, this.onerror) : o), r === void 0 ? n === void 0 ? void 0 : n : Z(r, n);
      };
    }
    function Cr(e, t) {
      return e === M ? t : function() {
        return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
      };
    }
    function zt(e, t) {
      return e === M ? t : function() {
        var n = e.apply(this, arguments);
        if (n && typeof n.then == "function") {
          for (var r = this, i = arguments.length, o = new Array(i); i--; ) o[i] = arguments[i];
          return n.then(function() {
            return t.apply(r, o);
          });
        }
        return t.apply(this, arguments);
      };
    }
    dt.ModifyError = ht, dt.DexieError = Fe, dt.BulkError = Ue;
    var ue = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function Rn(e) {
      ue = e;
    }
    var Je = {}, Mn = 100, de = typeof Promise > "u" ? [] : function() {
      var e = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [e, Be(e), e];
      var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [t, Be(t), e];
    }(), Ze = de[0], oe = de[1], de = de[2], oe = oe && oe.then, Ee = Ze && Ze.constructor, Vt = !!de, et = function(e, t) {
      tt.push([e, t]), pt && (queueMicrotask(Tr), pt = !1);
    }, $t = !0, pt = !0, Se = [], yt = [], Yt = He, me = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: M, pgp: !1, env: {}, finalize: M }, j = me, tt = [], Ae = 0, vt = [];
    function E(e) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var t = this._PSD = j;
      if (typeof e != "function") {
        if (e !== Je) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Qt(this, this._value));
      }
      this._state = null, this._value = null, ++t.ref, function n(r, i) {
        try {
          i(function(o) {
            if (r._state === null) {
              if (o === r) throw new TypeError("A promise cannot be resolved with itself.");
              var a = r._lib && Le();
              o && typeof o.then == "function" ? n(r, function(u, c) {
                o instanceof E ? o._then(u, c) : o.then(u, c);
              }) : (r._state = !0, r._value = o, Fn(r)), a && We();
            }
          }, Qt.bind(null, r));
        } catch (o) {
          Qt(r, o);
        }
      }(this, e);
    }
    var Gt = { get: function() {
      var e = j, t = wt;
      function n(r, i) {
        var o = this, a = !e.global && (e !== j || t !== wt), u = a && !be(), c = new E(function(f, p) {
          Xt(o, new Nn(Ln(r, e, a, u), Ln(i, e, a, u), f, p, e));
        });
        return this._consoleTask && (c._consoleTask = this._consoleTask), c;
      }
      return n.prototype = Je, n;
    }, set: function(e) {
      ve(this, "then", e && e.prototype === Je ? Gt : { get: function() {
        return e;
      }, set: Gt.set });
    } };
    function Nn(e, t, n, r, i) {
      this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = i;
    }
    function Qt(e, t) {
      var n, r;
      yt.push(t), e._state === null && (n = e._lib && Le(), t = Yt(t), e._state = !1, e._value = t, r = e, Se.some(function(i) {
        return i._value === r._value;
      }) || Se.push(r), Fn(e), n && We());
    }
    function Fn(e) {
      var t = e._listeners;
      e._listeners = [];
      for (var n = 0, r = t.length; n < r; ++n) Xt(e, t[n]);
      var i = e._PSD;
      --i.ref || i.finalize(), Ae === 0 && (++Ae, et(function() {
        --Ae == 0 && Ht();
      }, []));
    }
    function Xt(e, t) {
      if (e._state !== null) {
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++Ae, et(Dr, [n, e, t]);
      } else e._listeners.push(t);
    }
    function Dr(e, t, n) {
      try {
        var r, i = t._value;
        !t._state && yt.length && (yt = []), r = ue && t._consoleTask ? t._consoleTask.run(function() {
          return e(i);
        }) : e(i), t._state || yt.indexOf(i) !== -1 || function(o) {
          for (var a = Se.length; a; ) if (Se[--a]._value === o._value) return Se.splice(a, 1);
        }(t), n.resolve(r);
      } catch (o) {
        n.reject(o);
      } finally {
        --Ae == 0 && Ht(), --n.psd.ref || n.psd.finalize();
      }
    }
    function Tr() {
      je(me, function() {
        Le() && We();
      });
    }
    function Le() {
      var e = $t;
      return pt = $t = !1, e;
    }
    function We() {
      var e, t, n;
      do
        for (; 0 < tt.length; ) for (e = tt, tt = [], n = e.length, t = 0; t < n; ++t) {
          var r = e[t];
          r[0].apply(null, r[1]);
        }
      while (0 < tt.length);
      pt = $t = !0;
    }
    function Ht() {
      var e = Se;
      Se = [], e.forEach(function(r) {
        r._PSD.onunhandled.call(null, r._value, r);
      });
      for (var t = vt.slice(0), n = t.length; n; ) t[--n]();
    }
    function mt(e) {
      return new E(Je, !1, e);
    }
    function V(e, t) {
      var n = j;
      return function() {
        var r = Le(), i = j;
        try {
          return we(n, !0), e.apply(this, arguments);
        } catch (o) {
          t && t(o);
        } finally {
          we(i, !1), r && We();
        }
      };
    }
    Re(E.prototype, { then: Gt, _then: function(e, t) {
      Xt(this, new Nn(null, null, e, t, j));
    }, catch: function(e) {
      if (arguments.length === 1) return this.then(null, e);
      var t = e, n = arguments[1];
      return typeof t == "function" ? this.then(null, function(r) {
        return (r instanceof t ? n : mt)(r);
      }) : this.then(null, function(r) {
        return (r && r.name === t ? n : mt)(r);
      });
    }, finally: function(e) {
      return this.then(function(t) {
        return E.resolve(e()).then(function() {
          return t;
        });
      }, function(t) {
        return E.resolve(e()).then(function() {
          return mt(t);
        });
      });
    }, timeout: function(e, t) {
      var n = this;
      return e < 1 / 0 ? new E(function(r, i) {
        var o = setTimeout(function() {
          return i(new C.Timeout(t));
        }, e);
        n.then(r, i).finally(clearTimeout.bind(null, o));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && ve(E.prototype, Symbol.toStringTag, "Dexie.Promise"), me.env = Un(), Re(E, { all: function() {
      var e = fe.apply(null, arguments).map(_t);
      return new E(function(t, n) {
        e.length === 0 && t([]);
        var r = e.length;
        e.forEach(function(i, o) {
          return E.resolve(i).then(function(a) {
            e[o] = a, --r || t(e);
          }, n);
        });
      });
    }, resolve: function(e) {
      return e instanceof E ? e : e && typeof e.then == "function" ? new E(function(t, n) {
        e.then(t, n);
      }) : new E(Je, !0, e);
    }, reject: mt, race: function() {
      var e = fe.apply(null, arguments).map(_t);
      return new E(function(t, n) {
        e.map(function(r) {
          return E.resolve(r).then(t, n);
        });
      });
    }, PSD: { get: function() {
      return j;
    }, set: function(e) {
      return j = e;
    } }, totalEchoes: { get: function() {
      return wt;
    } }, newPSD: ge, usePSD: je, scheduler: { get: function() {
      return et;
    }, set: function(e) {
      et = e;
    } }, rejectionMapper: { get: function() {
      return Yt;
    }, set: function(e) {
      Yt = e;
    } }, follow: function(e, t) {
      return new E(function(n, r) {
        return ge(function(i, o) {
          var a = j;
          a.unhandleds = [], a.onunhandled = o, a.finalize = Ke(function() {
            var u, c = this;
            u = function() {
              c.unhandleds.length === 0 ? i() : o(c.unhandleds[0]);
            }, vt.push(function f() {
              u(), vt.splice(vt.indexOf(f), 1);
            }), ++Ae, et(function() {
              --Ae == 0 && Ht();
            }, []);
          }, a.finalize), e();
        }, t, n, r);
      });
    } }), Ee && (Ee.allSettled && ve(E, "allSettled", function() {
      var e = fe.apply(null, arguments).map(_t);
      return new E(function(t) {
        e.length === 0 && t([]);
        var n = e.length, r = new Array(n);
        e.forEach(function(i, o) {
          return E.resolve(i).then(function(a) {
            return r[o] = { status: "fulfilled", value: a };
          }, function(a) {
            return r[o] = { status: "rejected", reason: a };
          }).then(function() {
            return --n || t(r);
          });
        });
      });
    }), Ee.any && typeof AggregateError < "u" && ve(E, "any", function() {
      var e = fe.apply(null, arguments).map(_t);
      return new E(function(t, n) {
        e.length === 0 && n(new AggregateError([]));
        var r = e.length, i = new Array(r);
        e.forEach(function(o, a) {
          return E.resolve(o).then(function(u) {
            return t(u);
          }, function(u) {
            i[a] = u, --r || n(new AggregateError(i));
          });
        });
      });
    }), Ee.withResolvers && (E.withResolvers = Ee.withResolvers));
    var G = { awaits: 0, echoes: 0, id: 0 }, Ir = 0, gt = [], bt = 0, wt = 0, qr = 0;
    function ge(e, t, n, r) {
      var i = j, o = Object.create(i);
      return o.parent = i, o.ref = 0, o.global = !1, o.id = ++qr, me.env, o.env = Vt ? { Promise: E, PromiseProp: { value: E, configurable: !0, writable: !0 }, all: E.all, race: E.race, allSettled: E.allSettled, any: E.any, resolve: E.resolve, reject: E.reject } : {}, t && Z(o, t), ++i.ref, o.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, r = je(o, e, n, r), o.ref === 0 && o.finalize(), r;
    }
    function ze() {
      return G.id || (G.id = ++Ir), ++G.awaits, G.echoes += Mn, G.id;
    }
    function be() {
      return !!G.awaits && (--G.awaits == 0 && (G.id = 0), G.echoes = G.awaits * Mn, !0);
    }
    function _t(e) {
      return G.echoes && e && e.constructor === Ee ? (ze(), e.then(function(t) {
        return be(), t;
      }, function(t) {
        return be(), $(t);
      })) : e;
    }
    function Br() {
      var e = gt[gt.length - 1];
      gt.pop(), we(e, !1);
    }
    function we(e, t) {
      var n, r = j;
      (t ? !G.echoes || bt++ && e === j : !bt || --bt && e === j) || queueMicrotask(t ? (function(i) {
        ++wt, G.echoes && --G.echoes != 0 || (G.echoes = G.awaits = G.id = 0), gt.push(j), we(i, !0);
      }).bind(null, e) : Br), e !== j && (j = e, r === me && (me.env = Un()), Vt && (n = me.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(N, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
    }
    function Un() {
      var e = N.Promise;
      return Vt ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(N, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
    }
    function je(e, t, n, r, i) {
      var o = j;
      try {
        return we(e, !0), t(n, r, i);
      } finally {
        we(o, !1);
      }
    }
    function Ln(e, t, n, r) {
      return typeof e != "function" ? e : function() {
        var i = j;
        n && ze(), we(t, !0);
        try {
          return e.apply(this, arguments);
        } finally {
          we(i, !1), r && queueMicrotask(be);
        }
      };
    }
    function Jt(e) {
      Promise === Ee && G.echoes === 0 ? bt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
    }
    ("" + oe).indexOf("[native code]") === -1 && (ze = be = M);
    var $ = E.reject, Ce = "￿", he = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Wn = "String expected.", Ve = [], xt = "__dbnames", Zt = "readonly", en = "readwrite";
    function De(e, t) {
      return e ? t ? function() {
        return e.apply(this, arguments) && t.apply(this, arguments);
      } : e : t;
    }
    var zn = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function kt(e) {
      return typeof e != "string" || /\./.test(e) ? function(t) {
        return t;
      } : function(t) {
        return t[e] === void 0 && e in t && delete (t = Oe(t))[e], t;
      };
    }
    function Vn() {
      throw C.Type();
    }
    function B(e, t) {
      try {
        var n = $n(e), r = $n(t);
        if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
        switch (n) {
          case "number":
          case "Date":
          case "string":
            return t < e ? 1 : e < t ? -1 : 0;
          case "binary":
            return function(i, o) {
              for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) if (i[f] !== o[f]) return i[f] < o[f] ? -1 : 1;
              return a === u ? 0 : a < u ? -1 : 1;
            }(Yn(e), Yn(t));
          case "Array":
            return function(i, o) {
              for (var a = i.length, u = o.length, c = a < u ? a : u, f = 0; f < c; ++f) {
                var p = B(i[f], o[f]);
                if (p !== 0) return p;
              }
              return a === u ? 0 : a < u ? -1 : 1;
            }(e, t);
        }
      } catch {
      }
      return NaN;
    }
    function $n(e) {
      var t = typeof e;
      return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Ft(e), e === "ArrayBuffer" ? "binary" : e);
    }
    function Yn(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
    }
    var Gn = (W.prototype._trans = function(e, t, n) {
      var r = this._tx || j.trans, i = this.name, o = ue && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
      function a(f, p, s) {
        if (!s.schema[i]) throw new C.NotFound("Table " + i + " not part of transaction");
        return t(s.idbtrans, s);
      }
      var u = Le();
      try {
        var c = r && r.db._novip === this.db._novip ? r === j.trans ? r._promise(e, a, n) : ge(function() {
          return r._promise(e, a, n);
        }, { trans: r, transless: j.transless || j }) : function f(p, s, v, l) {
          if (p.idbdb && (p._state.openComplete || j.letThrough || p._vip)) {
            var d = p._createTransaction(s, v, p._dbSchema);
            try {
              d.create(), p._state.PR1398_maxLoop = 3;
            } catch (y) {
              return y.name === Wt.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return f(p, s, v, l);
              })) : $(y);
            }
            return d._promise(s, function(y, h) {
              return ge(function() {
                return j.trans = d, l(y, h, d);
              });
            }).then(function(y) {
              if (s === "readwrite") try {
                d.idbtrans.commit();
              } catch {
              }
              return s === "readonly" ? y : d._completion.then(function() {
                return y;
              });
            });
          }
          if (p._state.openComplete) return $(new C.DatabaseClosed(p._state.dbOpenError));
          if (!p._state.isBeingOpened) {
            if (!p._state.autoOpen) return $(new C.DatabaseClosed());
            p.open().catch(M);
          }
          return p._state.dbReadyPromise.then(function() {
            return f(p, s, v, l);
          });
        }(this.db, e, [this.name], a);
        return o && (c._consoleTask = o, c = c.catch(function(f) {
          return console.trace(f), $(f);
        })), c;
      } finally {
        u && We();
      }
    }, W.prototype.get = function(e, t) {
      var n = this;
      return e && e.constructor === Object ? this.where(e).first(t) : e == null ? $(new C.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
        return n.core.get({ trans: r, key: e }).then(function(i) {
          return n.hook.reading.fire(i);
        });
      }).then(t);
    }, W.prototype.where = function(e) {
      if (typeof e == "string") return new this.db.WhereClause(this, e);
      if (U(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
      var t = F(e);
      if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
      var n = this.schema.indexes.concat(this.schema.primKey).filter(function(u) {
        if (u.compound && t.every(function(f) {
          return 0 <= u.keyPath.indexOf(f);
        })) {
          for (var c = 0; c < t.length; ++c) if (t.indexOf(u.keyPath[c]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(u, c) {
        return u.keyPath.length - c.keyPath.length;
      })[0];
      if (n && this.db._maxKey !== Ce) {
        var o = n.keyPath.slice(0, t.length);
        return this.where(o).equals(o.map(function(c) {
          return e[c];
        }));
      }
      !n && ue && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
      var r = this.schema.idxByName;
      function i(u, c) {
        return B(u, c) === 0;
      }
      var a = t.reduce(function(s, c) {
        var f = s[0], p = s[1], s = r[c], v = e[c];
        return [f || s, f || !s ? De(p, s && s.multi ? function(l) {
          return l = le(l, c), U(l) && l.some(function(d) {
            return i(v, d);
          });
        } : function(l) {
          return i(v, le(l, c));
        }) : p];
      }, [null, null]), o = a[0], a = a[1];
      return o ? this.where(o.name).equals(e[o.keyPath]).filter(a) : n ? this.filter(a) : this.where(t).equals("");
    }, W.prototype.filter = function(e) {
      return this.toCollection().and(e);
    }, W.prototype.count = function(e) {
      return this.toCollection().count(e);
    }, W.prototype.offset = function(e) {
      return this.toCollection().offset(e);
    }, W.prototype.limit = function(e) {
      return this.toCollection().limit(e);
    }, W.prototype.each = function(e) {
      return this.toCollection().each(e);
    }, W.prototype.toArray = function(e) {
      return this.toCollection().toArray(e);
    }, W.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, W.prototype.orderBy = function(e) {
      return new this.db.Collection(new this.db.WhereClause(this, U(e) ? "[".concat(e.join("+"), "]") : e));
    }, W.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, W.prototype.mapToClass = function(e) {
      var t, n = this.db, r = this.name;
      function i() {
        return t !== null && t.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = e).prototype instanceof Vn && (function(c, f) {
        if (typeof f != "function" && f !== null) throw new TypeError("Class extends value " + String(f) + " is not a constructor or null");
        function p() {
          this.constructor = c;
        }
        L(c, f), c.prototype = f === null ? Object.create(f) : (p.prototype = f.prototype, new p());
      }(i, t = e), Object.defineProperty(i.prototype, "db", { get: function() {
        return n;
      }, enumerable: !1, configurable: !0 }), i.prototype.table = function() {
        return r;
      }, e = i);
      for (var o = /* @__PURE__ */ new Set(), a = e.prototype; a; a = Be(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
        return o.add(c);
      });
      function u(c) {
        if (!c) return c;
        var f, p = Object.create(e.prototype);
        for (f in c) if (!o.has(f)) try {
          p[f] = c[f];
        } catch {
        }
        return p;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
    }, W.prototype.defineClass = function() {
      return this.mapToClass(function(e) {
        Z(this, e);
      });
    }, W.prototype.add = function(e, t) {
      var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = kt(o)(e)), this._trans("readwrite", function(u) {
        return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
      }).then(function(u) {
        return u.numFailures ? E.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          ne(e, o, u);
        } catch {
        }
        return u;
      });
    }, W.prototype.update = function(e, t) {
      return typeof e != "object" || U(e) ? this.where(":id").equals(e).modify(t) : (e = le(e, this.schema.primKey.keyPath), e === void 0 ? $(new C.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
    }, W.prototype.put = function(e, t) {
      var n = this, r = this.schema.primKey, i = r.auto, o = r.keyPath, a = e;
      return o && i && (a = kt(o)(e)), this._trans("readwrite", function(u) {
        return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
      }).then(function(u) {
        return u.numFailures ? E.reject(u.failures[0]) : u.lastResult;
      }).then(function(u) {
        if (o) try {
          ne(e, o, u);
        } catch {
        }
        return u;
      });
    }, W.prototype.delete = function(e) {
      var t = this;
      return this._trans("readwrite", function(n) {
        return t.core.mutate({ trans: n, type: "delete", keys: [e] });
      }).then(function(n) {
        return n.numFailures ? E.reject(n.failures[0]) : void 0;
      });
    }, W.prototype.clear = function() {
      var e = this;
      return this._trans("readwrite", function(t) {
        return e.core.mutate({ trans: t, type: "deleteRange", range: zn });
      }).then(function(t) {
        return t.numFailures ? E.reject(t.failures[0]) : void 0;
      });
    }, W.prototype.bulkGet = function(e) {
      var t = this;
      return this._trans("readonly", function(n) {
        return t.core.getMany({ keys: e, trans: n }).then(function(r) {
          return r.map(function(i) {
            return t.hook.reading.fire(i);
          });
        });
      });
    }, W.prototype.bulkAdd = function(e, t, n) {
      var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var f = r.schema.primKey, u = f.auto, f = f.keyPath;
        if (f && i) throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new C.InvalidArgument("Arguments objects and keys must have the same length");
        var c = e.length, f = f && u ? e.map(kt(f)) : e;
        return r.core.mutate({ trans: a, type: "add", keys: i, values: f, wantResults: o }).then(function(d) {
          var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? v : l;
          throw new Ue("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), d);
        });
      });
    }, W.prototype.bulkPut = function(e, t, n) {
      var r = this, i = Array.isArray(t) ? t : void 0, o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
      return this._trans("readwrite", function(a) {
        var f = r.schema.primKey, u = f.auto, f = f.keyPath;
        if (f && i) throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (i && i.length !== e.length) throw new C.InvalidArgument("Arguments objects and keys must have the same length");
        var c = e.length, f = f && u ? e.map(kt(f)) : e;
        return r.core.mutate({ trans: a, type: "put", keys: i, values: f, wantResults: o }).then(function(d) {
          var s = d.numFailures, v = d.results, l = d.lastResult, d = d.failures;
          if (s === 0) return o ? v : l;
          throw new Ue("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), d);
        });
      });
    }, W.prototype.bulkUpdate = function(e) {
      var t = this, n = this.core, r = e.map(function(a) {
        return a.key;
      }), i = e.map(function(a) {
        return a.changes;
      }), o = [];
      return this._trans("readwrite", function(a) {
        return n.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
          var c = [], f = [];
          e.forEach(function(s, v) {
            var l = s.key, d = s.changes, y = u[v];
            if (y) {
              for (var h = 0, m = Object.keys(d); h < m.length; h++) {
                var g = m[h], b = d[g];
                if (g === t.schema.primKey.keyPath) {
                  if (B(b, l) !== 0) throw new C.Constraint("Cannot update primary key in bulkUpdate()");
                } else ne(y, g, b);
              }
              o.push(v), c.push(l), f.push(y);
            }
          });
          var p = c.length;
          return n.mutate({ trans: a, type: "put", keys: c, values: f, updates: { keys: r, changeSpecs: i } }).then(function(s) {
            var v = s.numFailures, l = s.failures;
            if (v === 0) return p;
            for (var d = 0, y = Object.keys(l); d < y.length; d++) {
              var h, m = y[d], g = o[Number(m)];
              g != null && (h = l[m], delete l[m], l[g] = h);
            }
            throw new Ue("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(p, " operations failed"), l);
          });
        });
      });
    }, W.prototype.bulkDelete = function(e) {
      var t = this, n = e.length;
      return this._trans("readwrite", function(r) {
        return t.core.mutate({ trans: r, type: "delete", keys: e });
      }).then(function(a) {
        var i = a.numFailures, o = a.lastResult, a = a.failures;
        if (i === 0) return o;
        throw new Ue("".concat(t.name, ".bulkDelete(): ").concat(i, " of ").concat(n, " operations failed"), a);
      });
    }, W);
    function W() {
    }
    function nt(e) {
      function t(a, u) {
        if (u) {
          for (var c = arguments.length, f = new Array(c - 1); --c; ) f[c - 1] = arguments[c];
          return n[a].subscribe.apply(null, f), e;
        }
        if (typeof a == "string") return n[a];
      }
      var n = {};
      t.addEventType = o;
      for (var r = 1, i = arguments.length; r < i; ++r) o(arguments[r]);
      return t;
      function o(a, u, c) {
        if (typeof a != "object") {
          var f;
          u = u || Cr;
          var p = { subscribers: [], fire: c = c || M, subscribe: function(s) {
            p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
          }, unsubscribe: function(s) {
            p.subscribers = p.subscribers.filter(function(v) {
              return v !== s;
            }), p.fire = p.subscribers.reduce(u, c);
          } };
          return n[a] = t[a] = p;
        }
        F(f = a).forEach(function(s) {
          var v = f[s];
          if (U(v)) o(s, f[s][0], f[s][1]);
          else {
            if (v !== "asap") throw new C.InvalidArgument("Invalid event config");
            var l = o(s, He, function() {
              for (var d = arguments.length, y = new Array(d); d--; ) y[d] = arguments[d];
              l.subscribers.forEach(function(h) {
                Cn(function() {
                  h.apply(null, y);
                });
              });
            });
          }
        });
      }
    }
    function rt(e, t) {
      return Me(t).from({ prototype: e }), t;
    }
    function $e(e, t) {
      return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
    }
    function tn(e, t) {
      e.filter = De(e.filter, t);
    }
    function nn(e, t, n) {
      var r = e.replayFilter;
      e.replayFilter = r ? function() {
        return De(r(), t());
      } : t, e.justLimit = n && !r;
    }
    function Ot(e, t) {
      if (e.isPrimKey) return t.primaryKey;
      var n = t.getIndexByKeyPath(e.index);
      if (!n) throw new C.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
      return n;
    }
    function Qn(e, t, n) {
      var r = Ot(e, t.schema);
      return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
    }
    function Pt(e, t, n, r) {
      var i = e.replayFilter ? De(e.filter, e.replayFilter()) : e.filter;
      if (e.or) {
        var o = {}, a = function(u, c, f) {
          var p, s;
          i && !i(c, f, function(v) {
            return c.stop(v);
          }, function(v) {
            return c.fail(v);
          }) || ((s = "" + (p = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), te(o, s) || (o[s] = !0, t(u, c, f)));
        };
        return Promise.all([e.or._iterate(a, n), Xn(Qn(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
      }
      return Xn(Qn(e, r, n), De(e.algorithm, i), t, !e.keysOnly && e.valueMapper);
    }
    function Xn(e, t, n, r) {
      var i = V(r ? function(o, a, u) {
        return n(r(o), a, u);
      } : n);
      return e.then(function(o) {
        if (o) return o.start(function() {
          var a = function() {
            return o.continue();
          };
          t && !t(o, function(u) {
            return a = u;
          }, function(u) {
            o.stop(u), a = M;
          }, function(u) {
            o.fail(u), a = M;
          }) || i(o.value, o, function(u) {
            return a = u;
          }), a();
        });
      });
    }
    var de = Symbol(), it = (Hn.prototype.execute = function(e) {
      if (this.add !== void 0) {
        var t = this.add;
        if (U(t)) return ie(ie([], U(e) ? e : [], !0), t).sort();
        if (typeof t == "number") return (Number(e) || 0) + t;
        if (typeof t == "bigint") try {
          return BigInt(e) + t;
        } catch {
          return BigInt(0) + t;
        }
        throw new TypeError("Invalid term ".concat(t));
      }
      if (this.remove !== void 0) {
        var n = this.remove;
        if (U(n)) return U(e) ? e.filter(function(r) {
          return !n.includes(r);
        }).sort() : [];
        if (typeof n == "number") return Number(e) - n;
        if (typeof n == "bigint") try {
          return BigInt(e) - n;
        } catch {
          return BigInt(0) - n;
        }
        throw new TypeError("Invalid subtrahend ".concat(n));
      }
      return t = (t = this.replacePrefix) === null || t === void 0 ? void 0 : t[0], t && typeof e == "string" && e.startsWith(t) ? this.replacePrefix[1] + e.substring(t.length) : e;
    }, Hn);
    function Hn(e) {
      Object.assign(this, e);
    }
    var Rr = (R.prototype._read = function(e, t) {
      var n = this._ctx;
      return n.error ? n.table._trans(null, $.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
    }, R.prototype._write = function(e) {
      var t = this._ctx;
      return t.error ? t.table._trans(null, $.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
    }, R.prototype._addAlgorithm = function(e) {
      var t = this._ctx;
      t.algorithm = De(t.algorithm, e);
    }, R.prototype._iterate = function(e, t) {
      return Pt(this._ctx, e, t, this._ctx.table.core);
    }, R.prototype.clone = function(e) {
      var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
      return e && Z(n, e), t._ctx = n, t;
    }, R.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, R.prototype.each = function(e) {
      var t = this._ctx;
      return this._read(function(n) {
        return Pt(t, e, n, t.table.core);
      });
    }, R.prototype.count = function(e) {
      var t = this;
      return this._read(function(n) {
        var r = t._ctx, i = r.table.core;
        if ($e(r, !0)) return i.count({ trans: n, query: { index: Ot(r, i.schema), range: r.range } }).then(function(a) {
          return Math.min(a, r.limit);
        });
        var o = 0;
        return Pt(r, function() {
          return ++o, !1;
        }, n, i).then(function() {
          return o;
        });
      }).then(e);
    }, R.prototype.sortBy = function(e, t) {
      var n = e.split(".").reverse(), r = n[0], i = n.length - 1;
      function o(c, f) {
        return f ? o(c[n[f]], f - 1) : c[r];
      }
      var a = this._ctx.dir === "next" ? 1 : -1;
      function u(c, f) {
        return B(o(c, i), o(f, i)) * a;
      }
      return this.toArray(function(c) {
        return c.sort(u);
      }).then(t);
    }, R.prototype.toArray = function(e) {
      var t = this;
      return this._read(function(n) {
        var r = t._ctx;
        if (r.dir === "next" && $e(r, !0) && 0 < r.limit) {
          var i = r.valueMapper, o = Ot(r, r.table.core.schema);
          return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: o, range: r.range } }).then(function(u) {
            return u = u.result, i ? u.map(i) : u;
          });
        }
        var a = [];
        return Pt(r, function(u) {
          return a.push(u);
        }, n, r.table.core).then(function() {
          return a;
        });
      }, e);
    }, R.prototype.offset = function(e) {
      var t = this._ctx;
      return e <= 0 || (t.offset += e, $e(t) ? nn(t, function() {
        var n = e;
        return function(r, i) {
          return n === 0 || (n === 1 ? --n : i(function() {
            r.advance(n), n = 0;
          }), !1);
        };
      }) : nn(t, function() {
        var n = e;
        return function() {
          return --n < 0;
        };
      })), this;
    }, R.prototype.limit = function(e) {
      return this._ctx.limit = Math.min(this._ctx.limit, e), nn(this._ctx, function() {
        var t = e;
        return function(n, r, i) {
          return --t <= 0 && r(i), 0 <= t;
        };
      }, !0), this;
    }, R.prototype.until = function(e, t) {
      return tn(this._ctx, function(n, r, i) {
        return !e(n.value) || (r(i), t);
      }), this;
    }, R.prototype.first = function(e) {
      return this.limit(1).toArray(function(t) {
        return t[0];
      }).then(e);
    }, R.prototype.last = function(e) {
      return this.reverse().first(e);
    }, R.prototype.filter = function(e) {
      var t;
      return tn(this._ctx, function(n) {
        return e(n.value);
      }), (t = this._ctx).isMatch = De(t.isMatch, e), this;
    }, R.prototype.and = function(e) {
      return this.filter(e);
    }, R.prototype.or = function(e) {
      return new this.db.WhereClause(this._ctx.table, e, this);
    }, R.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, R.prototype.desc = function() {
      return this.reverse();
    }, R.prototype.eachKey = function(e) {
      var t = this._ctx;
      return t.keysOnly = !t.isMatch, this.each(function(n, r) {
        e(r.key, r);
      });
    }, R.prototype.eachUniqueKey = function(e) {
      return this._ctx.unique = "unique", this.eachKey(e);
    }, R.prototype.eachPrimaryKey = function(e) {
      var t = this._ctx;
      return t.keysOnly = !t.isMatch, this.each(function(n, r) {
        e(r.primaryKey, r);
      });
    }, R.prototype.keys = function(e) {
      var t = this._ctx;
      t.keysOnly = !t.isMatch;
      var n = [];
      return this.each(function(r, i) {
        n.push(i.key);
      }).then(function() {
        return n;
      }).then(e);
    }, R.prototype.primaryKeys = function(e) {
      var t = this._ctx;
      if (t.dir === "next" && $e(t, !0) && 0 < t.limit) return this._read(function(r) {
        var i = Ot(t, t.table.core.schema);
        return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: i, range: t.range } });
      }).then(function(r) {
        return r.result;
      }).then(e);
      t.keysOnly = !t.isMatch;
      var n = [];
      return this.each(function(r, i) {
        n.push(i.primaryKey);
      }).then(function() {
        return n;
      }).then(e);
    }, R.prototype.uniqueKeys = function(e) {
      return this._ctx.unique = "unique", this.keys(e);
    }, R.prototype.firstKey = function(e) {
      return this.limit(1).keys(function(t) {
        return t[0];
      }).then(e);
    }, R.prototype.lastKey = function(e) {
      return this.reverse().firstKey(e);
    }, R.prototype.distinct = function() {
      var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
      if (!e || !e.multi) return this;
      var t = {};
      return tn(this._ctx, function(i) {
        var r = i.primaryKey.toString(), i = te(t, r);
        return t[r] = !0, !i;
      }), this;
    }, R.prototype.modify = function(e) {
      var t = this, n = this._ctx;
      return this._write(function(r) {
        var i, o, a;
        a = typeof e == "function" ? e : (i = F(e), o = i.length, function(h) {
          for (var m = !1, g = 0; g < o; ++g) {
            var b = i[g], w = e[b], _ = le(h, b);
            w instanceof it ? (ne(h, b, w.execute(_)), m = !0) : _ !== w && (ne(h, b, w), m = !0);
          }
          return m;
        });
        function u(h, b) {
          var g = b.failures, b = b.numFailures;
          d += h - b;
          for (var w = 0, _ = F(g); w < _.length; w++) {
            var O = _[w];
            l.push(g[O]);
          }
        }
        var c = n.table.core, f = c.schema.primaryKey, p = f.outbound, s = f.extractKey, v = t.db._options.modifyChunkSize || 200, l = [], d = 0, y = [];
        return t.clone().primaryKeys().then(function(h) {
          function m(b) {
            var w = Math.min(v, h.length - b);
            return c.getMany({ trans: r, keys: h.slice(b, b + w), cache: "immutable" }).then(function(_) {
              for (var O = [], x = [], k = p ? [] : null, K = [], P = 0; P < w; ++P) {
                var S = _[P], D = { value: Oe(S), primKey: h[b + P] };
                a.call(D, D.value, D) !== !1 && (D.value == null ? K.push(h[b + P]) : p || B(s(S), s(D.value)) === 0 ? (x.push(D.value), p && k.push(h[b + P])) : (K.push(h[b + P]), O.push(D.value)));
              }
              return Promise.resolve(0 < O.length && c.mutate({ trans: r, type: "add", values: O }).then(function(q) {
                for (var T in q.failures) K.splice(parseInt(T), 1);
                u(O.length, q);
              })).then(function() {
                return (0 < x.length || g && typeof e == "object") && c.mutate({ trans: r, type: "put", keys: k, values: x, criteria: g, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < b }).then(function(q) {
                  return u(x.length, q);
                });
              }).then(function() {
                return (0 < K.length || g && e === rn) && c.mutate({ trans: r, type: "delete", keys: K, criteria: g, isAdditionalChunk: 0 < b }).then(function(q) {
                  return u(K.length, q);
                });
              }).then(function() {
                return h.length > b + w && m(b + v);
              });
            });
          }
          var g = $e(n) && n.limit === 1 / 0 && (typeof e != "function" || e === rn) && { index: n.index, range: n.range };
          return m(0).then(function() {
            if (0 < l.length) throw new ht("Error modifying one or more objects", l, d, y);
            return h.length;
          });
        });
      });
    }, R.prototype.delete = function() {
      var e = this._ctx, t = e.range;
      return $e(e) && (e.isPrimKey || t.type === 3) ? this._write(function(n) {
        var r = e.table.core.schema.primaryKey, i = t;
        return e.table.core.count({ trans: n, query: { index: r, range: i } }).then(function(o) {
          return e.table.core.mutate({ trans: n, type: "deleteRange", range: i }).then(function(a) {
            var u = a.failures;
            if (a.lastResult, a.results, a = a.numFailures, a) throw new ht("Could not delete some values", Object.keys(u).map(function(c) {
              return u[c];
            }), o - a);
            return o - a;
          });
        });
      }) : this.modify(rn);
    }, R);
    function R() {
    }
    var rn = function(e, t) {
      return t.value = null;
    };
    function Mr(e, t) {
      return e < t ? -1 : e === t ? 0 : 1;
    }
    function Nr(e, t) {
      return t < e ? -1 : e === t ? 0 : 1;
    }
    function re(e, t, n) {
      return e = e instanceof Zn ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
    }
    function Ye(e) {
      return new e.Collection(e, function() {
        return Jn("");
      }).limit(0);
    }
    function Kt(e, t, n, r) {
      var i, o, a, u, c, f, p, s = n.length;
      if (!n.every(function(d) {
        return typeof d == "string";
      })) return re(e, Wn);
      function v(d) {
        i = d === "next" ? function(h) {
          return h.toUpperCase();
        } : function(h) {
          return h.toLowerCase();
        }, o = d === "next" ? function(h) {
          return h.toLowerCase();
        } : function(h) {
          return h.toUpperCase();
        }, a = d === "next" ? Mr : Nr;
        var y = n.map(function(h) {
          return { lower: o(h), upper: i(h) };
        }).sort(function(h, m) {
          return a(h.lower, m.lower);
        });
        u = y.map(function(h) {
          return h.upper;
        }), c = y.map(function(h) {
          return h.lower;
        }), p = (f = d) === "next" ? "" : r;
      }
      v("next"), e = new e.Collection(e, function() {
        return _e(u[0], c[s - 1] + r);
      }), e._ondirectionchange = function(d) {
        v(d);
      };
      var l = 0;
      return e._addAlgorithm(function(d, y, h) {
        var m = d.key;
        if (typeof m != "string") return !1;
        var g = o(m);
        if (t(g, c, l)) return !0;
        for (var b = null, w = l; w < s; ++w) {
          var _ = function(O, x, k, K, P, S) {
            for (var D = Math.min(O.length, K.length), q = -1, T = 0; T < D; ++T) {
              var ae = x[T];
              if (ae !== K[T]) return P(O[T], k[T]) < 0 ? O.substr(0, T) + k[T] + k.substr(T + 1) : P(O[T], K[T]) < 0 ? O.substr(0, T) + K[T] + k.substr(T + 1) : 0 <= q ? O.substr(0, q) + x[q] + k.substr(q + 1) : null;
              P(O[T], ae) < 0 && (q = T);
            }
            return D < K.length && S === "next" ? O + k.substr(O.length) : D < O.length && S === "prev" ? O.substr(0, k.length) : q < 0 ? null : O.substr(0, q) + K[q] + k.substr(q + 1);
          }(m, g, u[w], c[w], a, f);
          _ === null && b === null ? l = w + 1 : (b === null || 0 < a(b, _)) && (b = _);
        }
        return y(b !== null ? function() {
          d.continue(b + p);
        } : h), !1;
      }), e;
    }
    function _e(e, t, n, r) {
      return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
    }
    function Jn(e) {
      return { type: 1, lower: e, upper: e };
    }
    var Zn = (Object.defineProperty(Q.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), Q.prototype.between = function(e, t, n, r) {
      n = n !== !1, r = r === !0;
      try {
        return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Ye(this) : new this.Collection(this, function() {
          return _e(e, t, !n, !r);
        });
      } catch {
        return re(this, he);
      }
    }, Q.prototype.equals = function(e) {
      return e == null ? re(this, he) : new this.Collection(this, function() {
        return Jn(e);
      });
    }, Q.prototype.above = function(e) {
      return e == null ? re(this, he) : new this.Collection(this, function() {
        return _e(e, void 0, !0);
      });
    }, Q.prototype.aboveOrEqual = function(e) {
      return e == null ? re(this, he) : new this.Collection(this, function() {
        return _e(e, void 0, !1);
      });
    }, Q.prototype.below = function(e) {
      return e == null ? re(this, he) : new this.Collection(this, function() {
        return _e(void 0, e, !1, !0);
      });
    }, Q.prototype.belowOrEqual = function(e) {
      return e == null ? re(this, he) : new this.Collection(this, function() {
        return _e(void 0, e);
      });
    }, Q.prototype.startsWith = function(e) {
      return typeof e != "string" ? re(this, Wn) : this.between(e, e + Ce, !0, !0);
    }, Q.prototype.startsWithIgnoreCase = function(e) {
      return e === "" ? this.startsWith(e) : Kt(this, function(t, n) {
        return t.indexOf(n[0]) === 0;
      }, [e], Ce);
    }, Q.prototype.equalsIgnoreCase = function(e) {
      return Kt(this, function(t, n) {
        return t === n[0];
      }, [e], "");
    }, Q.prototype.anyOfIgnoreCase = function() {
      var e = fe.apply(Ne, arguments);
      return e.length === 0 ? Ye(this) : Kt(this, function(t, n) {
        return n.indexOf(t) !== -1;
      }, e, "");
    }, Q.prototype.startsWithAnyOfIgnoreCase = function() {
      var e = fe.apply(Ne, arguments);
      return e.length === 0 ? Ye(this) : Kt(this, function(t, n) {
        return n.some(function(r) {
          return t.indexOf(r) === 0;
        });
      }, e, Ce);
    }, Q.prototype.anyOf = function() {
      var e = this, t = fe.apply(Ne, arguments), n = this._cmp;
      try {
        t.sort(n);
      } catch {
        return re(this, he);
      }
      if (t.length === 0) return Ye(this);
      var r = new this.Collection(this, function() {
        return _e(t[0], t[t.length - 1]);
      });
      r._ondirectionchange = function(o) {
        n = o === "next" ? e._ascending : e._descending, t.sort(n);
      };
      var i = 0;
      return r._addAlgorithm(function(o, a, u) {
        for (var c = o.key; 0 < n(c, t[i]); ) if (++i === t.length) return a(u), !1;
        return n(c, t[i]) === 0 || (a(function() {
          o.continue(t[i]);
        }), !1);
      }), r;
    }, Q.prototype.notEqual = function(e) {
      return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, Q.prototype.noneOf = function() {
      var e = fe.apply(Ne, arguments);
      if (e.length === 0) return new this.Collection(this);
      try {
        e.sort(this._ascending);
      } catch {
        return re(this, he);
      }
      var t = e.reduce(function(n, r) {
        return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
      }, null);
      return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
    }, Q.prototype.inAnyRange = function(m, t) {
      var n = this, r = this._cmp, i = this._ascending, o = this._descending, a = this._min, u = this._max;
      if (m.length === 0) return Ye(this);
      if (!m.every(function(g) {
        return g[0] !== void 0 && g[1] !== void 0 && i(g[0], g[1]) <= 0;
      })) return re(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", C.InvalidArgument);
      var c = !t || t.includeLowers !== !1, f = t && t.includeUppers === !0, p, s = i;
      function v(g, b) {
        return s(g[0], b[0]);
      }
      try {
        (p = m.reduce(function(g, b) {
          for (var w = 0, _ = g.length; w < _; ++w) {
            var O = g[w];
            if (r(b[0], O[1]) < 0 && 0 < r(b[1], O[0])) {
              O[0] = a(O[0], b[0]), O[1] = u(O[1], b[1]);
              break;
            }
          }
          return w === _ && g.push(b), g;
        }, [])).sort(v);
      } catch {
        return re(this, he);
      }
      var l = 0, d = f ? function(g) {
        return 0 < i(g, p[l][1]);
      } : function(g) {
        return 0 <= i(g, p[l][1]);
      }, y = c ? function(g) {
        return 0 < o(g, p[l][0]);
      } : function(g) {
        return 0 <= o(g, p[l][0]);
      }, h = d, m = new this.Collection(this, function() {
        return _e(p[0][0], p[p.length - 1][1], !c, !f);
      });
      return m._ondirectionchange = function(g) {
        s = g === "next" ? (h = d, i) : (h = y, o), p.sort(v);
      }, m._addAlgorithm(function(g, b, w) {
        for (var _, O = g.key; h(O); ) if (++l === p.length) return b(w), !1;
        return !d(_ = O) && !y(_) || (n._cmp(O, p[l][1]) === 0 || n._cmp(O, p[l][0]) === 0 || b(function() {
          s === i ? g.continue(p[l][0]) : g.continue(p[l][1]);
        }), !1);
      }), m;
    }, Q.prototype.startsWithAnyOf = function() {
      var e = fe.apply(Ne, arguments);
      return e.every(function(t) {
        return typeof t == "string";
      }) ? e.length === 0 ? Ye(this) : this.inAnyRange(e.map(function(t) {
        return [t, t + Ce];
      })) : re(this, "startsWithAnyOf() only works with strings");
    }, Q);
    function Q() {
    }
    function se(e) {
      return V(function(t) {
        return ot(t), e(t.target.error), !1;
      });
    }
    function ot(e) {
      e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
    }
    var at = "storagemutated", on = "x-storagemutated-1", xe = nt(null, at), Fr = (ce.prototype._lock = function() {
      return Qe(!j.global), ++this._reculock, this._reculock !== 1 || j.global || (j.lockOwnerFor = this), this;
    }, ce.prototype._unlock = function() {
      if (Qe(!j.global), --this._reculock == 0) for (j.global || (j.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var e = this._blockedFuncs.shift();
        try {
          je(e[1], e[0]);
        } catch {
        }
      }
      return this;
    }, ce.prototype._locked = function() {
      return this._reculock && j.lockOwnerFor !== this;
    }, ce.prototype.create = function(e) {
      var t = this;
      if (!this.mode) return this;
      var n = this.db.idbdb, r = this.db._state.dbOpenError;
      if (Qe(!this.idbtrans), !e && !n) switch (r && r.name) {
        case "DatabaseClosedError":
          throw new C.DatabaseClosed(r);
        case "MissingAPIError":
          throw new C.MissingAPI(r.message, r);
        default:
          throw new C.OpenFailed(r);
      }
      if (!this.active) throw new C.TransactionInactive();
      return Qe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = V(function(i) {
        ot(i), t._reject(e.error);
      }), e.onabort = V(function(i) {
        ot(i), t.active && t._reject(new C.Abort(e.error)), t.active = !1, t.on("abort").fire(i);
      }), e.oncomplete = V(function() {
        t.active = !1, t._resolve(), "mutatedParts" in e && xe.storagemutated.fire(e.mutatedParts);
      }), this;
    }, ce.prototype._promise = function(e, t, n) {
      var r = this;
      if (e === "readwrite" && this.mode !== "readwrite") return $(new C.ReadOnly("Transaction is readonly"));
      if (!this.active) return $(new C.TransactionInactive());
      if (this._locked()) return new E(function(o, a) {
        r._blockedFuncs.push([function() {
          r._promise(e, t, n).then(o, a);
        }, j]);
      });
      if (n) return ge(function() {
        var o = new E(function(a, u) {
          r._lock();
          var c = t(a, u, r);
          c && c.then && c.then(a, u);
        });
        return o.finally(function() {
          return r._unlock();
        }), o._lib = !0, o;
      });
      var i = new E(function(o, a) {
        var u = t(o, a, r);
        u && u.then && u.then(o, a);
      });
      return i._lib = !0, i;
    }, ce.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, ce.prototype.waitFor = function(e) {
      var t, n = this._root(), r = E.resolve(e);
      n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
        return r;
      }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function o() {
        for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
        n._waitingFor && (t.get(-1 / 0).onsuccess = o);
      }());
      var i = n._waitingFor;
      return new E(function(o, a) {
        r.then(function(u) {
          return n._waitingQueue.push(V(o.bind(null, u)));
        }, function(u) {
          return n._waitingQueue.push(V(a.bind(null, u)));
        }).finally(function() {
          n._waitingFor === i && (n._waitingFor = null);
        });
      });
    }, ce.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new C.Abort()));
    }, ce.prototype.table = function(e) {
      var t = this._memoizedTables || (this._memoizedTables = {});
      if (te(t, e)) return t[e];
      var n = this.schema[e];
      if (!n) throw new C.NotFound("Table " + e + " not part of transaction");
      return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
    }, ce);
    function ce() {
    }
    function an(e, t, n, r, i, o, a) {
      return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + er(t) };
    }
    function er(e) {
      return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
    }
    function un(e, t, n) {
      return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(i) {
        return [i.name, i];
      }, n.reduce(function(i, o, a) {
        return a = r(o, a), a && (i[a[0]] = a[1]), i;
      }, {})) };
      var r;
    }
    var ut = function(e) {
      try {
        return e.only([[]]), ut = function() {
          return [[]];
        }, [[]];
      } catch {
        return ut = function() {
          return Ce;
        }, Ce;
      }
    };
    function sn(e) {
      return e == null ? function() {
      } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
        return n[t];
      } : function(n) {
        return le(n, t);
      } : function(n) {
        return le(n, e);
      };
      var t;
    }
    function tr(e) {
      return [].slice.call(e);
    }
    var Ur = 0;
    function st(e) {
      return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
    }
    function Lr(e, t, c) {
      function r(h) {
        if (h.type === 3) return null;
        if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var l = h.lower, d = h.upper, y = h.lowerOpen, h = h.upperOpen;
        return l === void 0 ? d === void 0 ? null : t.upperBound(d, !!h) : d === void 0 ? t.lowerBound(l, !!y) : t.bound(l, d, !!y, !!h);
      }
      function i(v) {
        var l, d = v.name;
        return { name: d, schema: v, mutate: function(y) {
          var h = y.trans, m = y.type, g = y.keys, b = y.values, w = y.range;
          return new Promise(function(_, O) {
            _ = V(_);
            var x = h.objectStore(d), k = x.keyPath == null, K = m === "put" || m === "add";
            if (!K && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
            var P, S = (g || b || { length: 1 }).length;
            if (g && b && g.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
            if (S === 0) return _({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function D(ee) {
              ++ae, ot(ee);
            }
            var q = [], T = [], ae = 0;
            if (m === "deleteRange") {
              if (w.type === 4) return _({ numFailures: ae, failures: T, results: [], lastResult: void 0 });
              w.type === 3 ? q.push(P = x.clear()) : q.push(P = x.delete(r(w)));
            } else {
              var k = K ? k ? [b, g] : [b, null] : [g, null], I = k[0], H = k[1];
              if (K) for (var J = 0; J < S; ++J) q.push(P = H && H[J] !== void 0 ? x[m](I[J], H[J]) : x[m](I[J])), P.onerror = D;
              else for (J = 0; J < S; ++J) q.push(P = x[m](I[J])), P.onerror = D;
            }
            function Nt(ee) {
              ee = ee.target.result, q.forEach(function(qe, Kn) {
                return qe.error != null && (T[Kn] = qe.error);
              }), _({ numFailures: ae, failures: T, results: m === "delete" ? g : q.map(function(qe) {
                return qe.result;
              }), lastResult: ee });
            }
            P.onerror = function(ee) {
              D(ee), Nt(ee);
            }, P.onsuccess = Nt;
          });
        }, getMany: function(y) {
          var h = y.trans, m = y.keys;
          return new Promise(function(g, b) {
            g = V(g);
            for (var w, _ = h.objectStore(d), O = m.length, x = new Array(O), k = 0, K = 0, P = function(q) {
              q = q.target, x[q._pos] = q.result, ++K === k && g(x);
            }, S = se(b), D = 0; D < O; ++D) m[D] != null && ((w = _.get(m[D]))._pos = D, w.onsuccess = P, w.onerror = S, ++k);
            k === 0 && g(x);
          });
        }, get: function(y) {
          var h = y.trans, m = y.key;
          return new Promise(function(g, b) {
            g = V(g);
            var w = h.objectStore(d).get(m);
            w.onsuccess = function(_) {
              return g(_.target.result);
            }, w.onerror = se(b);
          });
        }, query: (l = f, function(y) {
          return new Promise(function(h, m) {
            h = V(h);
            var g, b, w, k = y.trans, _ = y.values, O = y.limit, P = y.query, x = O === 1 / 0 ? void 0 : O, K = P.index, P = P.range, k = k.objectStore(d), K = K.isPrimaryKey ? k : k.index(K.name), P = r(P);
            if (O === 0) return h({ result: [] });
            l ? ((x = _ ? K.getAll(P, x) : K.getAllKeys(P, x)).onsuccess = function(S) {
              return h({ result: S.target.result });
            }, x.onerror = se(m)) : (g = 0, b = !_ && "openKeyCursor" in K ? K.openKeyCursor(P) : K.openCursor(P), w = [], b.onsuccess = function(S) {
              var D = b.result;
              return D ? (w.push(_ ? D.value : D.primaryKey), ++g === O ? h({ result: w }) : void D.continue()) : h({ result: w });
            }, b.onerror = se(m));
          });
        }), openCursor: function(y) {
          var h = y.trans, m = y.values, g = y.query, b = y.reverse, w = y.unique;
          return new Promise(function(_, O) {
            _ = V(_);
            var K = g.index, x = g.range, k = h.objectStore(d), k = K.isPrimaryKey ? k : k.index(K.name), K = b ? w ? "prevunique" : "prev" : w ? "nextunique" : "next", P = !m && "openKeyCursor" in k ? k.openKeyCursor(r(x), K) : k.openCursor(r(x), K);
            P.onerror = se(O), P.onsuccess = V(function(S) {
              var D, q, T, ae, I = P.result;
              I ? (I.___id = ++Ur, I.done = !1, D = I.continue.bind(I), q = (q = I.continuePrimaryKey) && q.bind(I), T = I.advance.bind(I), ae = function() {
                throw new Error("Cursor not stopped");
              }, I.trans = h, I.stop = I.continue = I.continuePrimaryKey = I.advance = function() {
                throw new Error("Cursor not started");
              }, I.fail = V(O), I.next = function() {
                var H = this, J = 1;
                return this.start(function() {
                  return J-- ? H.continue() : H.stop();
                }).then(function() {
                  return H;
                });
              }, I.start = function(H) {
                function J() {
                  if (P.result) try {
                    H();
                  } catch (ee) {
                    I.fail(ee);
                  }
                  else I.done = !0, I.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, I.stop();
                }
                var Nt = new Promise(function(ee, qe) {
                  ee = V(ee), P.onerror = se(qe), I.fail = qe, I.stop = function(Kn) {
                    I.stop = I.continue = I.continuePrimaryKey = I.advance = ae, ee(Kn);
                  };
                });
                return P.onsuccess = V(function(ee) {
                  P.onsuccess = J, J();
                }), I.continue = D, I.continuePrimaryKey = q, I.advance = T, J(), Nt;
              }, _(I)) : _(null);
            }, O);
          });
        }, count: function(y) {
          var h = y.query, m = y.trans, g = h.index, b = h.range;
          return new Promise(function(w, _) {
            var O = m.objectStore(d), x = g.isPrimaryKey ? O : O.index(g.name), O = r(b), x = O ? x.count(O) : x.count();
            x.onsuccess = V(function(k) {
              return w(k.target.result);
            }), x.onerror = se(_);
          });
        } };
      }
      var o, a, u, p = (a = c, u = tr((o = e).objectStoreNames), { schema: { name: o.name, tables: u.map(function(v) {
        return a.objectStore(v);
      }).map(function(v) {
        var l = v.keyPath, h = v.autoIncrement, d = U(l), y = {}, h = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: l == null, compound: d, keyPath: l, autoIncrement: h, unique: !0, extractKey: sn(l) }, indexes: tr(v.indexNames).map(function(m) {
          return v.index(m);
        }).map(function(w) {
          var g = w.name, b = w.unique, _ = w.multiEntry, w = w.keyPath, _ = { name: g, compound: U(w), keyPath: w, unique: b, multiEntry: _, extractKey: sn(w) };
          return y[st(w)] = _;
        }), getIndexByKeyPath: function(m) {
          return y[st(m)];
        } };
        return y[":id"] = h.primaryKey, l != null && (y[st(l)] = h.primaryKey), h;
      }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = p.schema, f = p.hasGetAll, p = c.tables.map(i), s = {};
      return p.forEach(function(v) {
        return s[v.name] = v;
      }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
        if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
        return s[v];
      }, MIN_KEY: -1 / 0, MAX_KEY: ut(t), schema: c };
    }
    function Wr(e, t, n, r) {
      var i = n.IDBKeyRange;
      return n.indexedDB, { dbcore: (r = Lr(t, i, r), e.dbcore.reduce(function(o, a) {
        return a = a.create, A(A({}, o), a(o));
      }, r)) };
    }
    function Et(e, r) {
      var n = r.db, r = Wr(e._middlewares, n, e._deps, r);
      e.core = r.dbcore, e.tables.forEach(function(i) {
        var o = i.name;
        e.core.schema.tables.some(function(a) {
          return a.name === o;
        }) && (i.core = e.core.table(o), e[o] instanceof e.Table && (e[o].core = i.core));
      });
    }
    function St(e, t, n, r) {
      n.forEach(function(i) {
        var o = r[i];
        t.forEach(function(a) {
          var u = function c(f, p) {
            return wr(f, p) || (f = Be(f)) && c(f, p);
          }(a, i);
          (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? ve(a, i, { get: function() {
            return this.table(i);
          }, set: function(c) {
            An(this, i, { value: c, writable: !0, configurable: !0, enumerable: !0 });
          } }) : a[i] = new e.Table(i, o));
        });
      });
    }
    function cn(e, t) {
      t.forEach(function(n) {
        for (var r in n) n[r] instanceof e.Table && delete n[r];
      });
    }
    function zr(e, t) {
      return e._cfg.version - t._cfg.version;
    }
    function Vr(e, t, n, r) {
      var i = e._dbSchema;
      n.objectStoreNames.contains("$meta") && !i.$meta && (i.$meta = un("$meta", rr("")[0], []), e._storeNames.push("$meta"));
      var o = e._createTransaction("readwrite", e._storeNames, i);
      o.create(n), o._completion.catch(r);
      var a = o._reject.bind(o), u = j.transless || j;
      ge(function() {
        return j.trans = o, j.transless = u, t !== 0 ? (Et(e, n), f = t, ((c = o).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(p) {
          return p ?? f;
        }) : E.resolve(f)).then(function(p) {
          return v = p, l = o, d = n, y = [], p = (s = e)._versions, h = s._dbSchema = jt(0, s.idbdb, d), (p = p.filter(function(m) {
            return m._cfg.version >= v;
          })).length !== 0 ? (p.forEach(function(m) {
            y.push(function() {
              var g = h, b = m._cfg.dbschema;
              Ct(s, g, d), Ct(s, b, d), h = s._dbSchema = b;
              var w = ln(g, b);
              w.add.forEach(function(K) {
                fn(d, K[0], K[1].primKey, K[1].indexes);
              }), w.change.forEach(function(K) {
                if (K.recreate) throw new C.Upgrade("Not yet support for changing primary key");
                var P = d.objectStore(K.name);
                K.add.forEach(function(S) {
                  return At(P, S);
                }), K.change.forEach(function(S) {
                  P.deleteIndex(S.name), At(P, S);
                }), K.del.forEach(function(S) {
                  return P.deleteIndex(S);
                });
              });
              var _ = m._cfg.contentUpgrade;
              if (_ && m._cfg.version > v) {
                Et(s, d), l._memoizedTables = {};
                var O = Dn(b);
                w.del.forEach(function(K) {
                  O[K] = g[K];
                }), cn(s, [s.Transaction.prototype]), St(s, [s.Transaction.prototype], F(O), O), l.schema = O;
                var x, k = Lt(_);
                return k && ze(), w = E.follow(function() {
                  var K;
                  (x = _(l)) && k && (K = be.bind(null, null), x.then(K, K));
                }), x && typeof x.then == "function" ? E.resolve(x) : w.then(function() {
                  return x;
                });
              }
            }), y.push(function(g) {
              var b, w, _ = m._cfg.dbschema;
              b = _, w = g, [].slice.call(w.db.objectStoreNames).forEach(function(O) {
                return b[O] == null && w.db.deleteObjectStore(O);
              }), cn(s, [s.Transaction.prototype]), St(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema;
            }), y.push(function(g) {
              s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(b) {
                return b !== "$meta";
              })) : g.objectStore("$meta").put(m._cfg.version, "version"));
            });
          }), function m() {
            return y.length ? E.resolve(y.shift()(l.idbtrans)).then(m) : E.resolve();
          }().then(function() {
            nr(h, d);
          })) : E.resolve();
          var s, v, l, d, y, h;
        }).catch(a)) : (F(i).forEach(function(p) {
          fn(n, p, i[p].primKey, i[p].indexes);
        }), Et(e, n), void E.follow(function() {
          return e.on.populate.fire(o);
        }).catch(a));
        var c, f;
      });
    }
    function $r(e, t) {
      nr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
      var n = jt(0, e.idbdb, t);
      Ct(e, e._dbSchema, t);
      for (var r = 0, i = ln(n, e._dbSchema).change; r < i.length; r++) {
        var o = function(a) {
          if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var u = t.objectStore(a.name);
          a.add.forEach(function(c) {
            ue && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), At(u, c);
          });
        }(i[r]);
        if (typeof o == "object") return o.value;
      }
    }
    function ln(e, t) {
      var n, r = { del: [], add: [], change: [] };
      for (n in e) t[n] || r.del.push(n);
      for (n in t) {
        var i = e[n], o = t[n];
        if (i) {
          var a = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
          if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto) a.recreate = !0, r.change.push(a);
          else {
            var u = i.idxByName, c = o.idxByName, f = void 0;
            for (f in u) c[f] || a.del.push(f);
            for (f in c) {
              var p = u[f], s = c[f];
              p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
            }
            (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
          }
        } else r.add.push([n, o]);
      }
      return r;
    }
    function fn(e, t, n, r) {
      var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
      return r.forEach(function(o) {
        return At(i, o);
      }), i;
    }
    function nr(e, t) {
      F(e).forEach(function(n) {
        t.db.objectStoreNames.contains(n) || (ue && console.debug("Dexie: Creating missing table", n), fn(t, n, e[n].primKey, e[n].indexes));
      });
    }
    function At(e, t) {
      e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
    }
    function jt(e, t, n) {
      var r = {};
      return ft(t.objectStoreNames, 0).forEach(function(i) {
        for (var o = n.objectStore(i), a = an(er(f = o.keyPath), f || "", !0, !1, !!o.autoIncrement, f && typeof f != "string", !0), u = [], c = 0; c < o.indexNames.length; ++c) {
          var p = o.index(o.indexNames[c]), f = p.keyPath, p = an(p.name, f, !!p.unique, !!p.multiEntry, !1, f && typeof f != "string", !1);
          u.push(p);
        }
        r[i] = un(i, a, u);
      }), r;
    }
    function Ct(e, t, n) {
      for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var o = r[i], a = n.objectStore(o);
        e._hasGetAll = "getAll" in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
          var c = a.indexNames[u], f = a.index(c).keyPath, p = typeof f == "string" ? f : "[" + ft(f).join("+") + "]";
          !t[o] || (f = t[o].idxByName[p]) && (f.name = c, delete t[o].idxByName[p], t[o].idxByName[c] = f);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && N.WorkerGlobalScope && N instanceof N.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
    }
    function rr(e) {
      return e.split(",").map(function(t, n) {
        var r = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
        return an(r, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), U(i), n === 0);
      });
    }
    var Yr = (Dt.prototype._parseStoresSpec = function(e, t) {
      F(e).forEach(function(n) {
        if (e[n] !== null) {
          var r = rr(e[n]), i = r.shift();
          if (i.unique = !0, i.multi) throw new C.Schema("Primary key cannot be multi-valued");
          r.forEach(function(o) {
            if (o.auto) throw new C.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!o.keyPath) throw new C.Schema("Index must have a name and cannot be an empty string");
          }), t[n] = un(n, i, r);
        }
      });
    }, Dt.prototype.stores = function(n) {
      var t = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? Z(this._cfg.storesSource, n) : n;
      var n = t._versions, r = {}, i = {};
      return n.forEach(function(o) {
        Z(r, o._cfg.storesSource), i = o._cfg.dbschema = {}, o._parseStoresSpec(r, i);
      }), t._dbSchema = i, cn(t, [t._allTables, t, t.Transaction.prototype]), St(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], F(i), i), t._storeNames = F(i), this;
    }, Dt.prototype.upgrade = function(e) {
      return this._cfg.contentUpgrade = zt(this._cfg.contentUpgrade || M, e), this;
    }, Dt);
    function Dt() {
    }
    function hn(e, t) {
      var n = e._dbNamesDB;
      return n || (n = e._dbNamesDB = new pe(xt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
    }
    function dn(e) {
      return e && typeof e.databases == "function";
    }
    function pn(e) {
      return ge(function() {
        return j.letThrough = !0, e();
      });
    }
    function yn(e) {
      return !("from" in e);
    }
    var X = function(e, t) {
      if (!this) {
        var n = new X();
        return e && "d" in e && Z(n, e), n;
      }
      Z(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
    };
    function ct(e, t, n) {
      var r = B(t, n);
      if (!isNaN(r)) {
        if (0 < r) throw RangeError();
        if (yn(e)) return Z(e, { from: t, to: n, d: 1 });
        var i = e.l, r = e.r;
        if (B(n, e.from) < 0) return i ? ct(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, or(e);
        if (0 < B(t, e.to)) return r ? ct(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, or(e);
        B(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < B(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, i && !e.l && lt(e, i), r && n && lt(e, r);
      }
    }
    function lt(e, t) {
      yn(t) || function n(r, c) {
        var o = c.from, a = c.to, u = c.l, c = c.r;
        ct(r, o, a), u && n(r, u), c && n(r, c);
      }(e, t);
    }
    function ir(e, t) {
      var n = Tt(t), r = n.next();
      if (r.done) return !1;
      for (var i = r.value, o = Tt(e), a = o.next(i.from), u = a.value; !r.done && !a.done; ) {
        if (B(u.from, i.to) <= 0 && 0 <= B(u.to, i.from)) return !0;
        B(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
      }
      return !1;
    }
    function Tt(e) {
      var t = yn(e) ? null : { s: 0, n: e };
      return { next: function(n) {
        for (var r = 0 < arguments.length; t; ) switch (t.s) {
          case 0:
            if (t.s = 1, r) for (; t.n.l && B(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
            else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
          case 1:
            if (t.s = 2, !r || B(n, t.n.to) <= 0) return { value: t.n, done: !1 };
          case 2:
            if (t.n.r) {
              t.s = 3, t = { up: t, n: t.n.r, s: 0 };
              continue;
            }
          case 3:
            t = t.up;
        }
        return { done: !0 };
      } };
    }
    function or(e) {
      var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : "";
      i && (t = i == "r" ? "l" : "r", n = A({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = ar(n)), e.d = ar(e);
    }
    function ar(n) {
      var t = n.r, n = n.l;
      return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
    }
    function It(e, t) {
      return F(t).forEach(function(n) {
        e[n] ? lt(e[n], t[n]) : e[n] = function r(i) {
          var o, a, u = {};
          for (o in i) te(i, o) && (a = i[o], u[o] = !a || typeof a != "object" || In.has(a.constructor) ? a : r(a));
          return u;
        }(t[n]);
      }), e;
    }
    function vn(e, t) {
      return e.all || t.all || Object.keys(e).some(function(n) {
        return t[n] && ir(t[n], e[n]);
      });
    }
    Re(X.prototype, ((oe = { add: function(e) {
      return lt(this, e), this;
    }, addKey: function(e) {
      return ct(this, e, e), this;
    }, addKeys: function(e) {
      var t = this;
      return e.forEach(function(n) {
        return ct(t, n, n);
      }), this;
    }, hasKey: function(e) {
      var t = Tt(this).next(e).value;
      return t && B(t.from, e) <= 0 && 0 <= B(t.to, e);
    } })[Ut] = function() {
      return Tt(this);
    }, oe));
    var Te = {}, mn = {}, gn = !1;
    function qt(e) {
      It(mn, e), gn || (gn = !0, setTimeout(function() {
        gn = !1, bn(mn, !(mn = {}));
      }, 0));
    }
    function bn(e, t) {
      t === void 0 && (t = !1);
      var n = /* @__PURE__ */ new Set();
      if (e.all) for (var r = 0, i = Object.values(Te); r < i.length; r++) ur(a = i[r], e, n, t);
      else for (var o in e) {
        var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
        u && (o = u[1], u = u[2], (a = Te["idb://".concat(o, "/").concat(u)]) && ur(a, e, n, t));
      }
      n.forEach(function(c) {
        return c();
      });
    }
    function ur(e, t, n, r) {
      for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
        for (var u = a[o], c = u[0], f = [], p = 0, s = u[1]; p < s.length; p++) {
          var v = s[p];
          vn(t, v.obsSet) ? v.subscribers.forEach(function(h) {
            return n.add(h);
          }) : r && f.push(v);
        }
        r && i.push([c, f]);
      }
      if (r) for (var l = 0, d = i; l < d.length; l++) {
        var y = d[l], c = y[0], f = y[1];
        e.queries.query[c] = f;
      }
    }
    function Gr(e) {
      var t = e._state, n = e._deps.indexedDB;
      if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
        return t.dbOpenError ? $(t.dbOpenError) : e;
      });
      t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
      var r = t.openCanceller, i = Math.round(10 * e.verno), o = !1;
      function a() {
        if (t.openCanceller !== r) throw new C.DatabaseClosed("db.open() was cancelled");
      }
      function u() {
        return new E(function(v, l) {
          if (a(), !n) throw new C.MissingAPI();
          var d = e.name, y = t.autoSchema || !i ? n.open(d) : n.open(d, i);
          if (!y) throw new C.MissingAPI();
          y.onerror = se(l), y.onblocked = V(e._fireOnBlocked), y.onupgradeneeded = V(function(h) {
            var m;
            p = y.transaction, t.autoSchema && !e._options.allowEmptyDB ? (y.onerror = ot, p.abort(), y.result.close(), (m = n.deleteDatabase(d)).onsuccess = m.onerror = V(function() {
              l(new C.NoSuchDatabase("Database ".concat(d, " doesnt exist")));
            })) : (p.onerror = se(l), h = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion, s = h < 1, e.idbdb = y.result, o && $r(e, p), Vr(e, h / 10, p, l));
          }, l), y.onsuccess = V(function() {
            p = null;
            var h, m, g, b, w, _ = e.idbdb = y.result, O = ft(_.objectStoreNames);
            if (0 < O.length) try {
              var x = _.transaction((b = O).length === 1 ? b[0] : b, "readonly");
              if (t.autoSchema) m = _, g = x, (h = e).verno = m.version / 10, g = h._dbSchema = jt(0, m, g), h._storeNames = ft(m.objectStoreNames, 0), St(h, [h._allTables], F(g), g);
              else if (Ct(e, e._dbSchema, x), ((w = ln(jt(0, (w = e).idbdb, x), w._dbSchema)).add.length || w.change.some(function(k) {
                return k.add.length || k.change.length;
              })) && !o) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), _.close(), i = _.version + 1, o = !0, v(u());
              Et(e, x);
            } catch {
            }
            Ve.push(e), _.onversionchange = V(function(k) {
              t.vcFired = !0, e.on("versionchange").fire(k);
            }), _.onclose = V(function(k) {
              e.on("close").fire(k);
            }), s && (w = e._deps, x = d, _ = w.indexedDB, w = w.IDBKeyRange, dn(_) || x === xt || hn(_, w).put({ name: x }).catch(M)), v();
          }, l);
        }).catch(function(v) {
          switch (v == null ? void 0 : v.name) {
            case "UnknownError":
              if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
              break;
            case "VersionError":
              if (0 < i) return i = 0, u();
          }
          return E.reject(v);
        });
      }
      var c, f = t.dbReadyResolve, p = null, s = !1;
      return E.race([r, (typeof navigator > "u" ? E.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(v) {
        function l() {
          return indexedDB.databases().finally(v);
        }
        c = setInterval(l, 100), l();
      }).finally(function() {
        return clearInterval(c);
      }) : Promise.resolve()).then(u)]).then(function() {
        return a(), t.onReadyBeingFired = [], E.resolve(pn(function() {
          return e.on.ready.fire(e.vip);
        })).then(function v() {
          if (0 < t.onReadyBeingFired.length) {
            var l = t.onReadyBeingFired.reduce(zt, M);
            return t.onReadyBeingFired = [], E.resolve(pn(function() {
              return l(e.vip);
            })).then(v);
          }
        });
      }).finally(function() {
        t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
      }).catch(function(v) {
        t.dbOpenError = v;
        try {
          p && p.abort();
        } catch {
        }
        return r === t.openCanceller && e._close(), $(v);
      }).finally(function() {
        t.openComplete = !0, f();
      }).then(function() {
        var v;
        return s && (v = {}, e.tables.forEach(function(l) {
          l.schema.indexes.forEach(function(d) {
            d.name && (v["idb://".concat(e.name, "/").concat(l.name, "/").concat(d.name)] = new X(-1 / 0, [[[]]]));
          }), v["idb://".concat(e.name, "/").concat(l.name, "/")] = v["idb://".concat(e.name, "/").concat(l.name, "/:dels")] = new X(-1 / 0, [[[]]]);
        }), xe(at).fire(v), bn(v, !0)), e;
      });
    }
    function wn(e) {
      function t(o) {
        return e.next(o);
      }
      var n = i(t), r = i(function(o) {
        return e.throw(o);
      });
      function i(o) {
        return function(c) {
          var u = o(c), c = u.value;
          return u.done ? c : c && typeof c.then == "function" ? c.then(n, r) : U(c) ? Promise.all(c).then(n, r) : n(c);
        };
      }
      return i(t)();
    }
    function Bt(e, t, n) {
      for (var r = U(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
      return r;
    }
    var Qr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
      return A(A({}, e), { table: function(t) {
        var n = e.table(t), r = n.schema, i = {}, o = [];
        function a(s, v, l) {
          var d = st(s), y = i[d] = i[d] || [], h = s == null ? 0 : typeof s == "string" ? 1 : s.length, m = 0 < v, m = A(A({}, l), { name: m ? "".concat(d, "(virtual-from:").concat(l.name, ")") : l.name, lowLevelIndex: l, isVirtual: m, keyTail: v, keyLength: h, extractKey: sn(s), unique: !m && l.unique });
          return y.push(m), m.isPrimaryKey || o.push(m), 1 < h && a(h === 2 ? s[0] : s.slice(0, h - 1), v + 1, l), y.sort(function(g, b) {
            return g.keyTail - b.keyTail;
          }), m;
        }
        t = a(r.primaryKey.keyPath, 0, r.primaryKey), i[":id"] = [t];
        for (var u = 0, c = r.indexes; u < c.length; u++) {
          var f = c[u];
          a(f.keyPath, 0, f);
        }
        function p(s) {
          var v, l = s.query.index;
          return l.isVirtual ? A(A({}, s), { query: { index: l.lowLevelIndex, range: (v = s.query.range, l = l.keyTail, { type: v.type === 1 ? 2 : v.type, lower: Bt(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, l), lowerOpen: !0, upper: Bt(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, l), upperOpen: !0 }) } }) : s;
        }
        return A(A({}, n), { schema: A(A({}, r), { primaryKey: t, indexes: o, getIndexByKeyPath: function(s) {
          return (s = i[st(s)]) && s[0];
        } }), count: function(s) {
          return n.count(p(s));
        }, query: function(s) {
          return n.query(p(s));
        }, openCursor: function(s) {
          var v = s.query.index, l = v.keyTail, d = v.isVirtual, y = v.keyLength;
          return d ? n.openCursor(p(s)).then(function(m) {
            return m && h(m);
          }) : n.openCursor(s);
          function h(m) {
            return Object.create(m, { continue: { value: function(g) {
              g != null ? m.continue(Bt(g, s.reverse ? e.MAX_KEY : e.MIN_KEY, l)) : s.unique ? m.continue(m.key.slice(0, y).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, l)) : m.continue();
            } }, continuePrimaryKey: { value: function(g, b) {
              m.continuePrimaryKey(Bt(g, e.MAX_KEY, l), b);
            } }, primaryKey: { get: function() {
              return m.primaryKey;
            } }, key: { get: function() {
              var g = m.key;
              return y === 1 ? g[0] : g.slice(0, y);
            } }, value: { get: function() {
              return m.value;
            } } });
          }
        } });
      } });
    } };
    function _n(e, t, n, r) {
      return n = n || {}, r = r || "", F(e).forEach(function(i) {
        var o, a, u;
        te(t, i) ? (o = e[i], a = t[i], typeof o == "object" && typeof a == "object" && o && a ? (u = Ft(o)) !== Ft(a) ? n[r + i] = t[i] : u === "Object" ? _n(o, a, n, r + i + ".") : o !== a && (n[r + i] = t[i]) : o !== a && (n[r + i] = t[i])) : n[r + i] = void 0;
      }), F(t).forEach(function(i) {
        te(e, i) || (n[r + i] = t[i]);
      }), n;
    }
    function xn(e, t) {
      return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
    }
    var Xr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
      return A(A({}, e), { table: function(t) {
        var n = e.table(t), r = n.schema.primaryKey;
        return A(A({}, n), { mutate: function(i) {
          var o = j.trans, a = o.table(t).hook, u = a.deleting, c = a.creating, f = a.updating;
          switch (i.type) {
            case "add":
              if (c.fire === M) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "put":
              if (c.fire === M && f.fire === M) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "delete":
              if (u.fire === M) break;
              return o._promise("readwrite", function() {
                return p(i);
              }, !0);
            case "deleteRange":
              if (u.fire === M) break;
              return o._promise("readwrite", function() {
                return function s(v, l, d) {
                  return n.query({ trans: v, values: !1, query: { index: r, range: l }, limit: d }).then(function(y) {
                    var h = y.result;
                    return p({ type: "delete", keys: h, trans: v }).then(function(m) {
                      return 0 < m.numFailures ? Promise.reject(m.failures[0]) : h.length < d ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, A(A({}, l), { lower: h[h.length - 1], lowerOpen: !0 }), d);
                    });
                  });
                }(i.trans, i.range, 1e4);
              }, !0);
          }
          return n.mutate(i);
          function p(s) {
            var v, l, d, y = j.trans, h = s.keys || xn(r, s);
            if (!h) throw new Error("Keys missing");
            return (s = s.type === "add" || s.type === "put" ? A(A({}, s), { keys: h }) : A({}, s)).type !== "delete" && (s.values = ie([], s.values)), s.keys && (s.keys = ie([], s.keys)), v = n, d = h, ((l = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: l.trans, keys: d, cache: "immutable" })).then(function(m) {
              var g = h.map(function(b, w) {
                var _, O, x, k = m[w], K = { onerror: null, onsuccess: null };
                return s.type === "delete" ? u.fire.call(K, b, k, y) : s.type === "add" || k === void 0 ? (_ = c.fire.call(K, b, s.values[w], y), b == null && _ != null && (s.keys[w] = b = _, r.outbound || ne(s.values[w], r.keyPath, b))) : (_ = _n(k, s.values[w]), (O = f.fire.call(K, _, b, k, y)) && (x = s.values[w], Object.keys(O).forEach(function(P) {
                  te(x, P) ? x[P] = O[P] : ne(x, P, O[P]);
                }))), K;
              });
              return n.mutate(s).then(function(b) {
                for (var w = b.failures, _ = b.results, O = b.numFailures, b = b.lastResult, x = 0; x < h.length; ++x) {
                  var k = (_ || h)[x], K = g[x];
                  k == null ? K.onerror && K.onerror(w[x]) : K.onsuccess && K.onsuccess(s.type === "put" && m[x] ? s.values[x] : k);
                }
                return { failures: w, results: _, numFailures: O, lastResult: b };
              }).catch(function(b) {
                return g.forEach(function(w) {
                  return w.onerror && w.onerror(b);
                }), Promise.reject(b);
              });
            });
          }
        } });
      } });
    } };
    function sr(e, t, n) {
      try {
        if (!t || t.keys.length < e.length) return null;
        for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i) B(t.keys[i], e[o]) === 0 && (r.push(n ? Oe(t.values[i]) : t.values[i]), ++o);
        return r.length === e.length ? r : null;
      } catch {
        return null;
      }
    }
    var Hr = { stack: "dbcore", level: -1, create: function(e) {
      return { table: function(t) {
        var n = e.table(t);
        return A(A({}, n), { getMany: function(r) {
          if (!r.cache) return n.getMany(r);
          var i = sr(r.keys, r.trans._cache, r.cache === "clone");
          return i ? E.resolve(i) : n.getMany(r).then(function(o) {
            return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Oe(o) : o }, o;
          });
        }, mutate: function(r) {
          return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
        } });
      } };
    } };
    function cr(e, t) {
      return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
    }
    function lr(e, t) {
      switch (e) {
        case "query":
          return t.values && !t.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var Jr = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
      var t = e.schema.name, n = new X(e.MIN_KEY, e.MAX_KEY);
      return A(A({}, e), { transaction: function(r, i, o) {
        if (j.subscr && i !== "readonly") throw new C.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(j.querier));
        return e.transaction(r, i, o);
      }, table: function(r) {
        var i = e.table(r), o = i.schema, a = o.primaryKey, s = o.indexes, u = a.extractKey, c = a.outbound, f = a.autoIncrement && s.filter(function(l) {
          return l.compound && l.keyPath.includes(a.keyPath);
        }), p = A(A({}, i), { mutate: function(l) {
          function d(P) {
            return P = "idb://".concat(t, "/").concat(r, "/").concat(P), b[P] || (b[P] = new X());
          }
          var y, h, m, g = l.trans, b = l.mutatedParts || (l.mutatedParts = {}), w = d(""), _ = d(":dels"), O = l.type, K = l.type === "deleteRange" ? [l.range] : l.type === "delete" ? [l.keys] : l.values.length < 50 ? [xn(a, l).filter(function(P) {
            return P;
          }), l.values] : [], x = K[0], k = K[1], K = l.trans._cache;
          return U(x) ? (w.addKeys(x), (K = O === "delete" || x.length === k.length ? sr(x, K) : null) || _.addKeys(x), (K || k) && (y = d, h = K, m = k, o.indexes.forEach(function(P) {
            var S = y(P.name || "");
            function D(T) {
              return T != null ? P.extractKey(T) : null;
            }
            function q(T) {
              return P.multiEntry && U(T) ? T.forEach(function(ae) {
                return S.addKey(ae);
              }) : S.addKey(T);
            }
            (h || m).forEach(function(T, H) {
              var I = h && D(h[H]), H = m && D(m[H]);
              B(I, H) !== 0 && (I != null && q(I), H != null && q(H));
            });
          }))) : x ? (k = { from: (k = x.lower) !== null && k !== void 0 ? k : e.MIN_KEY, to: (k = x.upper) !== null && k !== void 0 ? k : e.MAX_KEY }, _.add(k), w.add(k)) : (w.add(n), _.add(n), o.indexes.forEach(function(P) {
            return d(P.name).add(n);
          })), i.mutate(l).then(function(P) {
            return !x || l.type !== "add" && l.type !== "put" || (w.addKeys(P.results), f && f.forEach(function(S) {
              var D = l.values.map(function(T) {
                return S.extractKey(T);
              }), q = S.keyPath.findIndex(function(T) {
                return T === a.keyPath;
              });
              P.results.forEach(function(T) {
                return D[q] = T;
              }), d(S.name).addKeys(D);
            })), g.mutatedParts = It(g.mutatedParts || {}, b), P;
          });
        } }), s = function(d) {
          var y = d.query, d = y.index, y = y.range;
          return [d, new X((d = y.lower) !== null && d !== void 0 ? d : e.MIN_KEY, (y = y.upper) !== null && y !== void 0 ? y : e.MAX_KEY)];
        }, v = { get: function(l) {
          return [a, new X(l.key)];
        }, getMany: function(l) {
          return [a, new X().addKeys(l.keys)];
        }, count: s, query: s, openCursor: s };
        return F(v).forEach(function(l) {
          p[l] = function(d) {
            var y = j.subscr, h = !!y, m = cr(j, i) && lr(l, d) ? d.obsSet = {} : y;
            if (h) {
              var g = function(k) {
                return k = "idb://".concat(t, "/").concat(r, "/").concat(k), m[k] || (m[k] = new X());
              }, b = g(""), w = g(":dels"), y = v[l](d), h = y[0], y = y[1];
              if ((l === "query" && h.isPrimaryKey && !d.values ? w : g(h.name || "")).add(y), !h.isPrimaryKey) {
                if (l !== "count") {
                  var _ = l === "query" && c && d.values && i.query(A(A({}, d), { values: !1 }));
                  return i[l].apply(this, arguments).then(function(k) {
                    if (l === "query") {
                      if (c && d.values) return _.then(function(D) {
                        return D = D.result, b.addKeys(D), k;
                      });
                      var K = d.values ? k.result.map(u) : k.result;
                      (d.values ? b : w).addKeys(K);
                    } else if (l === "openCursor") {
                      var P = k, S = d.values;
                      return P && Object.create(P, { key: { get: function() {
                        return w.addKey(P.primaryKey), P.key;
                      } }, primaryKey: { get: function() {
                        var D = P.primaryKey;
                        return w.addKey(D), D;
                      } }, value: { get: function() {
                        return S && b.addKey(P.primaryKey), P.value;
                      } } });
                    }
                    return k;
                  });
                }
                w.add(n);
              }
            }
            return i[l].apply(this, arguments);
          };
        }), p;
      } });
    } };
    function fr(e, t, n) {
      if (n.numFailures === 0) return t;
      if (t.type === "deleteRange") return null;
      var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
      return n.numFailures === r ? null : (t = A({}, t), U(t.keys) && (t.keys = t.keys.filter(function(i, o) {
        return !(o in n.failures);
      })), "values" in t && U(t.values) && (t.values = t.values.filter(function(i, o) {
        return !(o in n.failures);
      })), t);
    }
    function kn(e, t) {
      return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < B(n, r.lower) : 0 <= B(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? B(e, t.upper) < 0 : B(e, t.upper) <= 0));
      var n, r;
    }
    function hr(e, t, v, r, i, o) {
      if (!v || v.length === 0) return e;
      var a = t.query.index, u = a.multiEntry, c = t.query.range, f = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(l, d) {
        var y = l, h = [];
        if (d.type === "add" || d.type === "put") for (var m = new X(), g = d.values.length - 1; 0 <= g; --g) {
          var b, w = d.values[g], _ = f(w);
          m.hasKey(_) || (b = p(w), (u && U(b) ? b.some(function(P) {
            return kn(P, c);
          }) : kn(b, c)) && (m.addKey(_), h.push(w)));
        }
        switch (d.type) {
          case "add":
            var O = new X().addKeys(t.values ? l.map(function(S) {
              return f(S);
            }) : l), y = l.concat(t.values ? h.filter(function(S) {
              return S = f(S), !O.hasKey(S) && (O.addKey(S), !0);
            }) : h.map(function(S) {
              return f(S);
            }).filter(function(S) {
              return !O.hasKey(S) && (O.addKey(S), !0);
            }));
            break;
          case "put":
            var x = new X().addKeys(d.values.map(function(S) {
              return f(S);
            }));
            y = l.filter(function(S) {
              return !x.hasKey(t.values ? f(S) : S);
            }).concat(t.values ? h : h.map(function(S) {
              return f(S);
            }));
            break;
          case "delete":
            var k = new X().addKeys(d.keys);
            y = l.filter(function(S) {
              return !k.hasKey(t.values ? f(S) : S);
            });
            break;
          case "deleteRange":
            var K = d.range;
            y = l.filter(function(S) {
              return !kn(f(S), K);
            });
        }
        return y;
      }, e);
      return v === e ? e : (v.sort(function(l, d) {
        return B(s(l), s(d)) || B(f(l), f(d));
      }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (i.dirty = !0)), o ? Object.freeze(v) : v);
    }
    function dr(e, t) {
      return B(e.lower, t.lower) === 0 && B(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
    }
    function Zr(e, t) {
      return function(n, r, i, o) {
        if (n === void 0) return r !== void 0 ? -1 : 0;
        if (r === void 0) return 1;
        if ((r = B(n, r)) === 0) {
          if (i && o) return 0;
          if (i) return 1;
          if (o) return -1;
        }
        return r;
      }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, r, i, o) {
        if (n === void 0) return r !== void 0 ? 1 : 0;
        if (r === void 0) return -1;
        if ((r = B(n, r)) === 0) {
          if (i && o) return 0;
          if (i) return -1;
          if (o) return 1;
        }
        return r;
      }(e.upper, t.upper, e.upperOpen, t.upperOpen);
    }
    function ei(e, t, n, r) {
      e.subscribers.add(n), r.addEventListener("abort", function() {
        var i, o;
        e.subscribers.delete(n), e.subscribers.size === 0 && (i = e, o = t, setTimeout(function() {
          i.subscribers.size === 0 && Pe(o, i);
        }, 3e3));
      });
    }
    var ti = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
      var t = e.schema.name;
      return A(A({}, e), { transaction: function(n, r, i) {
        var o, a, u = e.transaction(n, r, i);
        return r === "readwrite" && (a = (o = new AbortController()).signal, i = function(c) {
          return function() {
            if (o.abort(), r === "readwrite") {
              for (var f = /* @__PURE__ */ new Set(), p = 0, s = n; p < s.length; p++) {
                var v = s[p], l = Te["idb://".concat(t, "/").concat(v)];
                if (l) {
                  var d = e.table(v), y = l.optimisticOps.filter(function(S) {
                    return S.trans === u;
                  });
                  if (u._explicit && c && u.mutatedParts) for (var h = 0, m = Object.values(l.queries.query); h < m.length; h++) for (var g = 0, b = (O = m[h]).slice(); g < b.length; g++) vn((x = b[g]).obsSet, u.mutatedParts) && (Pe(O, x), x.subscribers.forEach(function(S) {
                    return f.add(S);
                  }));
                  else if (0 < y.length) {
                    l.optimisticOps = l.optimisticOps.filter(function(S) {
                      return S.trans !== u;
                    });
                    for (var w = 0, _ = Object.values(l.queries.query); w < _.length; w++) for (var O, x, k, K = 0, P = (O = _[w]).slice(); K < P.length; K++) (x = P[K]).res != null && u.mutatedParts && (c && !x.dirty ? (k = Object.isFrozen(x.res), k = hr(x.res, x.req, y, d, x, k), x.dirty ? (Pe(O, x), x.subscribers.forEach(function(S) {
                      return f.add(S);
                    })) : k !== x.res && (x.res = k, x.promise = E.resolve({ result: k }))) : (x.dirty && Pe(O, x), x.subscribers.forEach(function(S) {
                      return f.add(S);
                    })));
                  }
                }
              }
              f.forEach(function(S) {
                return S();
              });
            }
          };
        }, u.addEventListener("abort", i(!1), { signal: a }), u.addEventListener("error", i(!1), { signal: a }), u.addEventListener("complete", i(!0), { signal: a })), u;
      }, table: function(n) {
        var r = e.table(n), i = r.schema.primaryKey;
        return A(A({}, r), { mutate: function(o) {
          var a = j.trans;
          if (i.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(o);
          var u = Te["idb://".concat(t, "/").concat(n)];
          return u ? (a = r.mutate(o), o.type !== "add" && o.type !== "put" || !(50 <= o.values.length || xn(i, o).some(function(c) {
            return c == null;
          })) ? (u.optimisticOps.push(o), o.mutatedParts && qt(o.mutatedParts), a.then(function(c) {
            0 < c.numFailures && (Pe(u.optimisticOps, o), (c = fr(0, o, c)) && u.optimisticOps.push(c), o.mutatedParts && qt(o.mutatedParts));
          }), a.catch(function() {
            Pe(u.optimisticOps, o), o.mutatedParts && qt(o.mutatedParts);
          })) : a.then(function(c) {
            var f = fr(0, A(A({}, o), { values: o.values.map(function(p, s) {
              var v;
              return c.failures[s] ? p : (p = (v = i.keyPath) !== null && v !== void 0 && v.includes(".") ? Oe(p) : A({}, p), ne(p, i.keyPath, c.results[s]), p);
            }) }), c);
            u.optimisticOps.push(f), queueMicrotask(function() {
              return o.mutatedParts && qt(o.mutatedParts);
            });
          }), a) : r.mutate(o);
        }, query: function(o) {
          if (!cr(j, r) || !lr("query", o)) return r.query(o);
          var a = ((f = j.trans) === null || f === void 0 ? void 0 : f.db._options.cache) === "immutable", s = j, u = s.requery, c = s.signal, f = function(d, y, h, m) {
            var g = Te["idb://".concat(d, "/").concat(y)];
            if (!g) return [];
            if (!(y = g.queries[h])) return [null, !1, g, null];
            var b = y[(m.query ? m.query.index.name : null) || ""];
            if (!b) return [null, !1, g, null];
            switch (h) {
              case "query":
                var w = b.find(function(_) {
                  return _.req.limit === m.limit && _.req.values === m.values && dr(_.req.query.range, m.query.range);
                });
                return w ? [w, !0, g, b] : [b.find(function(_) {
                  return ("limit" in _.req ? _.req.limit : 1 / 0) >= m.limit && (!m.values || _.req.values) && Zr(_.req.query.range, m.query.range);
                }), !1, g, b];
              case "count":
                return w = b.find(function(_) {
                  return dr(_.req.query.range, m.query.range);
                }), [w, !!w, g, b];
            }
          }(t, n, "query", o), p = f[0], s = f[1], v = f[2], l = f[3];
          return p && s ? p.obsSet = o.obsSet : (s = r.query(o).then(function(d) {
            var y = d.result;
            if (p && (p.res = y), a) {
              for (var h = 0, m = y.length; h < m; ++h) Object.freeze(y[h]);
              Object.freeze(y);
            } else d.result = Oe(y);
            return d;
          }).catch(function(d) {
            return l && p && Pe(l, p), Promise.reject(d);
          }), p = { obsSet: o.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: o, dirty: !1 }, l ? l.push(p) : (l = [p], (v = v || (Te["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[o.query.index.name || ""] = l)), ei(p, l, u, c), p.promise.then(function(d) {
            return { result: hr(d.result, o, v == null ? void 0 : v.optimisticOps, r, p, a) };
          });
        } });
      } });
    } };
    function Rt(e, t) {
      return new Proxy(e, { get: function(n, r, i) {
        return r === "db" ? t : Reflect.get(n, r, i);
      } });
    }
    var pe = (Y.prototype.version = function(e) {
      if (isNaN(e) || e < 0.1) throw new C.Type("Given version is not a positive number");
      if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new C.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, e);
      var t = this._versions, n = t.filter(function(r) {
        return r._cfg.version === e;
      })[0];
      return n || (n = new this.Version(e), t.push(n), t.sort(zr), n.stores({}), this._state.autoSchema = !1, n);
    }, Y.prototype._whenReady = function(e) {
      var t = this;
      return this.idbdb && (this._state.openComplete || j.letThrough || this._vip) ? e() : new E(function(n, r) {
        if (t._state.openComplete) return r(new C.DatabaseClosed(t._state.dbOpenError));
        if (!t._state.isBeingOpened) {
          if (!t._state.autoOpen) return void r(new C.DatabaseClosed());
          t.open().catch(M);
        }
        t._state.dbReadyPromise.then(n, r);
      }).then(e);
    }, Y.prototype.use = function(e) {
      var t = e.stack, n = e.create, r = e.level, i = e.name;
      return i && this.unuse({ stack: t, name: i }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: i }), e.sort(function(o, a) {
        return o.level - a.level;
      }), this;
    }, Y.prototype.unuse = function(e) {
      var t = e.stack, n = e.name, r = e.create;
      return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(i) {
        return r ? i.create !== r : !!n && i.name !== n;
      })), this;
    }, Y.prototype.open = function() {
      var e = this;
      return je(me, function() {
        return Gr(e);
      });
    }, Y.prototype._close = function() {
      var e = this._state, t = Ve.indexOf(this);
      if (0 <= t && Ve.splice(t, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      e.isBeingOpened || (e.dbReadyPromise = new E(function(n) {
        e.dbReadyResolve = n;
      }), e.openCanceller = new E(function(n, r) {
        e.cancelOpen = r;
      }));
    }, Y.prototype.close = function(n) {
      var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
      t ? (n.isBeingOpened && n.cancelOpen(new C.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new C.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
    }, Y.prototype.delete = function(e) {
      var t = this;
      e === void 0 && (e = { disableAutoOpen: !0 });
      var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
      return new E(function(i, o) {
        function a() {
          t.close(e);
          var u = t._deps.indexedDB.deleteDatabase(t.name);
          u.onsuccess = V(function() {
            var c, f, p;
            c = t._deps, f = t.name, p = c.indexedDB, c = c.IDBKeyRange, dn(p) || f === xt || hn(p, c).delete(f).catch(M), i();
          }), u.onerror = se(o), u.onblocked = t._fireOnBlocked;
        }
        if (n) throw new C.InvalidArgument("Invalid closeOptions argument to db.delete()");
        r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
      });
    }, Y.prototype.backendDB = function() {
      return this.idbdb;
    }, Y.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Y.prototype.hasBeenClosed = function() {
      var e = this._state.dbOpenError;
      return e && e.name === "DatabaseClosed";
    }, Y.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Y.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Y.prototype, "tables", { get: function() {
      var e = this;
      return F(this._allTables).map(function(t) {
        return e._allTables[t];
      });
    }, enumerable: !1, configurable: !0 }), Y.prototype.transaction = function() {
      var e = (function(t, n, r) {
        var i = arguments.length;
        if (i < 2) throw new C.InvalidArgument("Too few arguments");
        for (var o = new Array(i - 1); --i; ) o[i - 1] = arguments[i];
        return r = o.pop(), [t, Tn(o), r];
      }).apply(this, arguments);
      return this._transaction.apply(this, e);
    }, Y.prototype._transaction = function(e, t, n) {
      var r = this, i = j.trans;
      i && i.db === this && e.indexOf("!") === -1 || (i = null);
      var o, a, u = e.indexOf("?") !== -1;
      e = e.replace("!", "").replace("?", "");
      try {
        if (a = t.map(function(f) {
          if (f = f instanceof r.Table ? f.name : f, typeof f != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return f;
        }), e == "r" || e === Zt) o = Zt;
        else {
          if (e != "rw" && e != en) throw new C.InvalidArgument("Invalid transaction mode: " + e);
          o = en;
        }
        if (i) {
          if (i.mode === Zt && o === en) {
            if (!u) throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            i = null;
          }
          i && a.forEach(function(f) {
            if (i && i.storeNames.indexOf(f) === -1) {
              if (!u) throw new C.SubTransaction("Table " + f + " not included in parent transaction.");
              i = null;
            }
          }), u && i && !i.active && (i = null);
        }
      } catch (f) {
        return i ? i._promise(null, function(p, s) {
          s(f);
        }) : $(f);
      }
      var c = (function f(p, s, v, l, d) {
        return E.resolve().then(function() {
          var y = j.transless || j, h = p._createTransaction(s, v, p._dbSchema, l);
          if (h.explicit = !0, y = { trans: h, transless: y }, l) h.idbtrans = l.idbtrans;
          else try {
            h.create(), h.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
          } catch (b) {
            return b.name === Wt.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
              return f(p, s, v, null, d);
            })) : $(b);
          }
          var m, g = Lt(d);
          return g && ze(), y = E.follow(function() {
            var b;
            (m = d.call(h, h)) && (g ? (b = be.bind(null, null), m.then(b, b)) : typeof m.next == "function" && typeof m.throw == "function" && (m = wn(m)));
          }, y), (m && typeof m.then == "function" ? E.resolve(m).then(function(b) {
            return h.active ? b : $(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : y.then(function() {
            return m;
          })).then(function(b) {
            return l && h._resolve(), h._completion.then(function() {
              return b;
            });
          }).catch(function(b) {
            return h._reject(b), $(b);
          });
        });
      }).bind(null, this, o, a, i, n);
      return i ? i._promise(o, c, "lock") : j.trans ? je(j.transless, function() {
        return r._whenReady(c);
      }) : this._whenReady(c);
    }, Y.prototype.table = function(e) {
      if (!te(this._allTables, e)) throw new C.InvalidTable("Table ".concat(e, " does not exist"));
      return this._allTables[e];
    }, Y);
    function Y(e, t) {
      var n = this;
      this._middlewares = {}, this.verno = 0;
      var r = Y.dependencies;
      this._options = t = A({ addons: Y.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var i, o, a, u, c, f = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: M, dbReadyPromise: null, cancelOpen: M, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
      f.dbReadyPromise = new E(function(s) {
        f.dbReadyResolve = s;
      }), f.openCanceller = new E(function(s, v) {
        f.cancelOpen = v;
      }), this._state = f, this.name = e, this.on = nt(this, "populate", "blocked", "versionchange", "close", { ready: [zt, M] }), this.on.ready.subscribe = jn(this.on.ready.subscribe, function(s) {
        return function(v, l) {
          Y.vip(function() {
            var d, y = n._state;
            y.openComplete ? (y.dbOpenError || E.resolve().then(v), l && s(v)) : y.onReadyBeingFired ? (y.onReadyBeingFired.push(v), l && s(v)) : (s(v), d = n, l || s(function h() {
              d.on.ready.unsubscribe(v), d.on.ready.unsubscribe(h);
            }));
          });
        };
      }), this.Collection = (i = this, rt(Rr.prototype, function(m, h) {
        this.db = i;
        var l = zn, d = null;
        if (h) try {
          l = h();
        } catch (g) {
          d = g;
        }
        var y = m._ctx, h = y.table, m = h.hook.reading.fire;
        this._ctx = { table: h, index: y.index, isPrimKey: !y.index || h.schema.primKey.keyPath && y.index === h.schema.primKey.name, range: l, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: d, or: y.or, valueMapper: m !== He ? m : null };
      })), this.Table = (o = this, rt(Gn.prototype, function(s, v, l) {
        this.db = o, this._tx = l, this.name = s, this.schema = v, this.hook = o._allTables[s] ? o._allTables[s].hook : nt(null, { creating: [Sr, M], reading: [Er, He], updating: [jr, M], deleting: [Ar, M] });
      })), this.Transaction = (a = this, rt(Fr.prototype, function(s, v, l, d, y) {
        var h = this;
        this.db = a, this.mode = s, this.storeNames = v, this.schema = l, this.chromeTransactionDurability = d, this.idbtrans = null, this.on = nt(this, "complete", "error", "abort"), this.parent = y || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new E(function(m, g) {
          h._resolve = m, h._reject = g;
        }), this._completion.then(function() {
          h.active = !1, h.on.complete.fire();
        }, function(m) {
          var g = h.active;
          return h.active = !1, h.on.error.fire(m), h.parent ? h.parent._reject(m) : g && h.idbtrans && h.idbtrans.abort(), $(m);
        });
      })), this.Version = (u = this, rt(Yr.prototype, function(s) {
        this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (c = this, rt(Zn.prototype, function(s, v, l) {
        if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: l }, this._cmp = this._ascending = B, this._descending = function(d, y) {
          return B(y, d);
        }, this._max = function(d, y) {
          return 0 < B(d, y) ? d : y;
        }, this._min = function(d, y) {
          return B(d, y) < 0 ? d : y;
        }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new C.MissingAPI();
      })), this.on("versionchange", function(s) {
        0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(s) {
        !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
      }), this._maxKey = ut(t.IDBKeyRange), this._createTransaction = function(s, v, l, d) {
        return new n.Transaction(s, v, l, n._options.chromeTransactionDurability, d);
      }, this._fireOnBlocked = function(s) {
        n.on("blocked").fire(s), Ve.filter(function(v) {
          return v.name === n.name && v !== n && !v._state.vcFired;
        }).map(function(v) {
          return v.on("versionchange").fire(s);
        });
      }, this.use(Hr), this.use(ti), this.use(Jr), this.use(Qr), this.use(Xr);
      var p = new Proxy(this, { get: function(s, v, l) {
        if (v === "_vip") return !0;
        if (v === "table") return function(y) {
          return Rt(n.table(y), p);
        };
        var d = Reflect.get(s, v, l);
        return d instanceof Gn ? Rt(d, p) : v === "tables" ? d.map(function(y) {
          return Rt(y, p);
        }) : v === "_createTransaction" ? function() {
          return Rt(d.apply(this, arguments), p);
        } : d;
      } });
      this.vip = p, r.forEach(function(s) {
        return s(n);
      });
    }
    var Mt, oe = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ni = (On.prototype.subscribe = function(e, t, n) {
      return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
    }, On.prototype[oe] = function() {
      return this;
    }, On);
    function On(e) {
      this._subscribe = e;
    }
    try {
      Mt = { indexedDB: N.indexedDB || N.mozIndexedDB || N.webkitIndexedDB || N.msIndexedDB, IDBKeyRange: N.IDBKeyRange || N.webkitIDBKeyRange };
    } catch {
      Mt = { indexedDB: null, IDBKeyRange: null };
    }
    function pr(e) {
      var t, n = !1, r = new ni(function(i) {
        var o = Lt(e), a, u = !1, c = {}, f = {}, p = { get closed() {
          return u;
        }, unsubscribe: function() {
          u || (u = !0, a && a.abort(), s && xe.storagemutated.unsubscribe(l));
        } };
        i.start && i.start(p);
        var s = !1, v = function() {
          return Jt(d);
        }, l = function(y) {
          It(c, y), vn(f, c) && v();
        }, d = function() {
          var y, h, m;
          !u && Mt.indexedDB && (c = {}, y = {}, a && a.abort(), a = new AbortController(), m = function(g) {
            var b = Le();
            try {
              o && ze();
              var w = ge(e, g);
              return w = o ? w.finally(be) : w;
            } finally {
              b && We();
            }
          }(h = { subscr: y, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(m).then(function(g) {
            n = !0, t = g, u || h.signal.aborted || (c = {}, function(b) {
              for (var w in b) if (te(b, w)) return;
              return 1;
            }(f = y) || s || (xe(at, l), s = !0), Jt(function() {
              return !u && i.next && i.next(g);
            }));
          }, function(g) {
            n = !1, ["DatabaseClosedError", "AbortError"].includes(g == null ? void 0 : g.name) || u || Jt(function() {
              u || i.error && i.error(g);
            });
          }));
        };
        return setTimeout(v, 0), p;
      });
      return r.hasValue = function() {
        return n;
      }, r.getValue = function() {
        return t;
      }, r;
    }
    var Ie = pe;
    function Pn(e) {
      var t = ke;
      try {
        ke = !0, xe.storagemutated.fire(e), bn(e, !0);
      } finally {
        ke = t;
      }
    }
    Re(Ie, A(A({}, dt), { delete: function(e) {
      return new Ie(e, { addons: [] }).delete();
    }, exists: function(e) {
      return new Ie(e, { addons: [] }).open().then(function(t) {
        return t.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(e) {
      try {
        return t = Ie.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (dn(n) ? Promise.resolve(n.databases()).then(function(r) {
          return r.map(function(i) {
            return i.name;
          }).filter(function(i) {
            return i !== xt;
          });
        }) : hn(n, t).toCollection().primaryKeys()).then(e);
      } catch {
        return $(new C.MissingAPI());
      }
      var t, n;
    }, defineClass: function() {
      return function(e) {
        Z(this, e);
      };
    }, ignoreTransaction: function(e) {
      return j.trans ? je(j.transless, e) : e();
    }, vip: pn, async: function(e) {
      return function() {
        try {
          var t = wn(e.apply(this, arguments));
          return t && typeof t.then == "function" ? t : E.resolve(t);
        } catch (n) {
          return $(n);
        }
      };
    }, spawn: function(e, t, n) {
      try {
        var r = wn(e.apply(n, t || []));
        return r && typeof r.then == "function" ? r : E.resolve(r);
      } catch (i) {
        return $(i);
      }
    }, currentTransaction: { get: function() {
      return j.trans || null;
    } }, waitFor: function(e, t) {
      return t = E.resolve(typeof e == "function" ? Ie.ignoreTransaction(e) : e).timeout(t || 6e4), j.trans ? j.trans.waitFor(t) : t;
    }, Promise: E, debug: { get: function() {
      return ue;
    }, set: function(e) {
      Rn(e);
    } }, derive: Me, extend: Z, props: Re, override: jn, Events: nt, on: xe, liveQuery: pr, extendObservabilitySet: It, getByKeyPath: le, setByKeyPath: ne, delByKeyPath: function(e, t) {
      typeof t == "string" ? ne(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
        ne(e, n, void 0);
      });
    }, shallowClone: Dn, deepClone: Oe, getObjectDiff: _n, cmp: B, asap: Cn, minKey: -1 / 0, addons: [], connections: Ve, errnames: Wt, dependencies: Mt, cache: Te, semVer: "4.0.9", version: "4.0.9".split(".").map(function(e) {
      return parseInt(e);
    }).reduce(function(e, t, n) {
      return e + t / Math.pow(10, 2 * n);
    }) })), Ie.maxKey = ut(Ie.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(at, function(e) {
      ke || (e = new CustomEvent(on, { detail: e }), ke = !0, dispatchEvent(e), ke = !1);
    }), addEventListener(on, function(e) {
      e = e.detail, ke || Pn(e);
    }));
    var Ge, ke = !1, yr = function() {
    };
    return typeof BroadcastChannel < "u" && ((yr = function() {
      (Ge = new BroadcastChannel(on)).onmessage = function(e) {
        return e.data && Pn(e.data);
      };
    })(), typeof Ge.unref == "function" && Ge.unref(), xe(at, function(e) {
      ke || Ge.postMessage(e);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
      if (!pe.disableBfCache && e.persisted) {
        ue && console.debug("Dexie: handling persisted pagehide"), Ge != null && Ge.close();
        for (var t = 0, n = Ve; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(e) {
      !pe.disableBfCache && e.persisted && (ue && console.debug("Dexie: handling persisted pageshow"), yr(), Pn({ all: new X(-1 / 0, [[]]) }));
    })), E.rejectionMapper = function(e, t) {
      return !e || e instanceof Fe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Bn[e.name] ? e : (t = new Bn[e.name](t || e.message, e), "stack" in e && ve(t, "stack", { get: function() {
        return this.inner.stack;
      } }), t);
    }, Rn(ue), A(pe, Object.freeze({ __proto__: null, Dexie: pe, liveQuery: pr, Entity: Vn, cmp: B, PropModSymbol: de, PropModification: it, replacePrefix: function(e, t) {
      return new it({ replacePrefix: [e, t] });
    }, add: function(e) {
      return new it({ add: e });
    }, remove: function(e) {
      return new it({ remove: e });
    }, default: pe, RangeSet: X, mergeRanges: lt, rangesOverlap: ir }), { default: pe }), pe;
  });
})(gr);
var ii = gr.exports;
const En = /* @__PURE__ */ ri(ii), mr = Symbol.for("Dexie"), Sn = globalThis[mr] || (globalThis[mr] = En);
if (En.semVer !== Sn.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${En.semVer} and ${Sn.semVer}`);
class oi {
  constructor(z) {
    this.search_id = z.search_id || "default_search", this.update_interval = z.update_interval || 36e5, this.data_url = z.data_url || "", this.date_url = z.date_url || "", this.last_update = null, this.auto_update = z.auto_update !== void 0 ? z.auto_update : !1, this.incrementalUpdate = z.incrementalUpdate !== void 0 ? z.incrementalUpdate : !1, this.db = new Sn("svelter_search");
    const L = {};
    L[this.search_id] = "&id, updated_at, search_value, *searchWords", this.db.version(1).stores(L), this.db[this.search_id].hook("creating", (N, F) => {
      typeof F.search_value == "string" ? F.searchWords = this.getAllWords(F.search_value) : F.searchWords = [];
    }), this.db[this.search_id].hook("updating", (N, F, U) => {
      if (N.hasOwnProperty("search_value"))
        return typeof N.search_value == "string" ? { searchWords: this.getAllWords(N.search_value) } : { searchWords: [] };
    });
    const A = `svelter_search_${this.search_id}_last_update`, ie = localStorage.getItem(A);
    ie ? this.last_update = new Date(ie) : this.last_update = /* @__PURE__ */ new Date(0);
  }
  getAllWords(z) {
    const A = z.normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/\b\w+\b/g);
    if (A) {
      const ie = new Set(A.map((N) => N.toLowerCase()));
      return Array.from(ie);
    }
    return [];
  }
  async update(z = this.data_url) {
    if (console.log(await this.isUpdateNeeded()), !!await this.isUpdateNeeded()) {
      this.incrementalUpdate || await this.clear();
      try {
        const A = await (await fetch(z)).json();
        await this.processData(A), this.last_update = /* @__PURE__ */ new Date(), localStorage.setItem(`svelter_search_${this.search_id}_last_update`, this.last_update.toISOString());
      } catch (L) {
        throw console.error("Error during update:", L), L;
      }
    }
  }
  async isUpdateNeeded() {
    return Date.now() - this.last_update.getTime() >= this.update_interval ? !0 : await this.isRemoteChanged();
  }
  async isRemoteChanged() {
    if (!this.date_url) return !1;
    try {
      const z = await fetch(this.date_url), { updated_at: L } = await z.json();
      return new Date(L) > this.last_update;
    } catch (z) {
      return console.error("Error fetching remote update date:", z), !0;
    }
  }
  async processData(z) {
    if (!Array.isArray(z)) throw new Error("Data must be an array of items.");
    await this.db.transaction("rw", this.db[this.search_id], async () => {
      for (const L of z)
        if (L.id)
          if (L.is_deleted)
            await this.db[this.search_id].delete(L.id);
          else {
            const A = await this.db[this.search_id].get(L.id);
            (!A || new Date(L.updated_at) > new Date(A.updated_at)) && await this.db[this.search_id].put({
              id: L.id,
              updated_at: L.updated_at,
              search_value: L.search_value,
              data: L.data
            });
          }
    });
  }
  async clear() {
    await this.db[this.search_id].clear(), localStorage.removeItem(`svelter_search_${this.search_id}_last_update`), console.log("Database purged for search_id:", this.search_id);
  }
  async search(z) {
    if (!z) return [];
    this.auto_update && await this.update();
    const A = z.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().match(/\b\w+\b/g);
    if (!A || A.length === 0) return [];
    try {
      return await this.db[this.search_id].filter((N) => {
        const F = N.searchWords || [];
        return A.every(
          (U) => F.some((Z) => Z.includes(U))
        );
      }).toArray();
    } catch (ie) {
      return console.error("Error searching data :", ie), [];
    }
  }
}
export {
  oi as default
};
