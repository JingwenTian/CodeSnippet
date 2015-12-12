//Loader 加载静态文件

"use strict";
!function(n, e) {
	function t(n) {
		return "complete" === n.readyState || "loaded" === n.readyState
	}
	function o(n, t, o) {
		var c = e.createElement("link");
		c.rel = "stylesheet", r(c, o, "css"), c.async = !0, c.href = n, d.appendChild(c)
	}
	function c(n, t, o) {
		var c = e.createElement("script");
		c.charset = "utf-8", r(c, o, "js"), c.async = !t.sync, c.src = n, d.appendChild(c)
	}
	function a(n, e) {
		var t;
		n.sheet && (t = !0), setTimeout(function() {
			t ? e() : a(n, e)
		}, 20)
	}
	function r(e, o, c) {
		function r() {
			e.onload = e.onreadystatechange = null, e = null, o()
		}
		var i = "onload" in e,
			u = "css" === c;
		return !u || !f && i ? void(i ? (e.onload = r, e.onerror = function() {
			e.onerror = null, n._cdnFallback(e)
		}) : e.onreadystatechange = function() {
			t(e) && r()
		}) : void setTimeout(function() {
			a(e, o)
		}, 1)
	}
	function i(n, e, t, a) {
		function r() {
			var t = e.indexOf(n);
			t > -1 && e.splice(t, 1), 0 === e.length && a()
		}
		s.test(n) ? o(n, t, r) : c(n, t, r)
	}
	function u(n, e, t) {
		var o = function() {
				t && t()
			};
		if (n = Array.prototype.slice.call(n || []), 0 === n.length) return void o();
		for (var c = 0, a = n.length; a > c; c++) i(n[c], n, e, o)
	}
	function l(e, o) {
		t(e) ? o() : n.addEventListener("load", o)
	}
	var s = new RegExp("\\.css"),
		d = e.head || e.getElementsByTagName("head")[0],
		f = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536,
		y = {
			async: function(n, t) {
				l(e, function() {
					u(n, {}, t)
				})
			},
			sync: function(n, t) {
				l(e, function() {
					u(n, {
						sync: !0
					}, t)
				})
			}
		};
	return n.Loader = y, y
}(window, document); 


window.Loader.sync([
			"http:\/\/cdn.bootcss.com\/jquery\/1.10.1\/jquery.min.js",
			"http:\/\/www.website.com\/script.js"
		]);
