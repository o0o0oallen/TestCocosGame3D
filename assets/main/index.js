System.register("chunks:///main.js",["cc"],(function(){"use strict";var t,e,r;return{setters:[function(o){t=o.cclegacy,e=o._decorator,r=o.Component}],execute:function(){function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var n;t._RF.push({},"468aaEg+/VKf6VNcWXKPsBk","TestingScript",void 0);var c=e.ccclass;e.property,c("TestingScript")(n=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,o(e,r);var c=n.prototype;return c.start=function(){window.smartad_sdk("click"),console.log("testing testing")},c.update=function(t){},n}(r));t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});