require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SingerDetail__ = __webpack_require__(108);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__SingerDetail__["a" /* default */]);

app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_SingerDetail_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e44add72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_SingerDetail_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e44add72"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_SingerDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e44add72_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_SingerDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/SingerDetail/SingerDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SingerDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e44add72", Component.options)
  } else {
    hotAPI.reload("data-v-e44add72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_singer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_song__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_MiniPlayer__ = __webpack_require__(115);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      songs: [],
      showMiniPlayer: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])(['singer'])),
  mounted: function mounted() {
    // this.singer = this.$root.$mp.query // 假如使用微信小程序传参方式传递歌手信息，用此方法获取歌手信息
    this._getSingerDetail();
    this.setNavigator();
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    _getSingerDetail: function _getSingerDetail() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__api_singer__["a" /* getSingerDetail */])(this.singer.id).then(function (res) {
        _this.songs = _this.normalizeSongs(res.list);
        // console.log(this.songs)
      });
    },

    // 抽取歌曲list中有用的数据
    normalizeSongs: function normalizeSongs(list) {
      var res = [];
      list.forEach(function (item) {
        var musicData = item.musicData;

        if (musicData.songid && musicData.albummid) {
          res.push(Object(__WEBPACK_IMPORTED_MODULE_2__common_song__["a" /* createSong */])(musicData));
        }
      });
      return res;
    },
    setNavigator: function setNavigator() {
      wx.setNavigationBarTitle({
        title: '歌手详情'
      });
    },
    selectSong: function selectSong(item, index) {
      // console.log(item)
      this.setCurrentSong(item);
      this.showMiniPlayer = true;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])({
    setCurrentSong: 'SET_CURRENTSONG'
  })),
  components: {
    VMiniPlayer: __WEBPACK_IMPORTED_MODULE_4__components_MiniPlayer__["a" /* default */]
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSong;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_song__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uid__ = __webpack_require__(47);


/**
 * Created by xiaoqiang on 22/12/2017.
 */


var urlMap = {};

var Song = function () {
  function Song(_ref) {
    var id = _ref.id,
        mid = _ref.mid,
        singer = _ref.singer,
        name = _ref.name,
        album = _ref.album,
        duration = _ref.duration,
        image = _ref.image,
        url = _ref.url;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Song);

    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.filename = 'C400' + this.mid + '.m4a';
    // 确保一首歌曲的 id 只对应一个 url
    if (urlMap[this.id]) {
      this.url = urlMap[this.id];
    } else {
      if (url) {
        this.url = url;
        urlMap[this.id] = url;
      } else {
        this._genUrl();
      }
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Song, [{
    key: '_genUrl',
    value: function _genUrl() {
      var _this = this;

      if (this.url) {
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__api_song__["a" /* getVKey */])(this.mid, this.filename).then(function (res) {
        var vkey = res.items[0].vkey;
        _this.url = 'http://dl.stream.qqmusic.qq.com/' + _this.filename + '?vkey=' + vkey + '&guid=' + Object(__WEBPACK_IMPORTED_MODULE_3__uid__["a" /* getUid */])() + '&uin=0&fromtag=66';
        urlMap[_this.id] = _this.url;
        // console.log(this.url)
      });
    }
  }]);

  return Song;
}();

/* unused harmony default export */ var _unused_webpack_default_export = (Song);


function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + musicData.albummid + '.jpg?max_age=2592000'
  });
}

function filterSinger(singer) {
  var ret = [];
  if (!singer) {
    return '';
  }
  singer.forEach(function (s) {
    ret.push(s.name);
  });
  return ret.join('/');
}

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getVKey;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_uid__ = __webpack_require__(47);

/**
 * Created by xiaoqiang on 08/01/2018.
 */



function getVKey(songmid, filename) {
  var url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg';

  var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* commonParams */], {
    cid: 205361747,
    format: 'json',
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    uin: 0,
    songmid: songmid,
    filename: filename,
    guid: Object(__WEBPACK_IMPORTED_MODULE_3__common_uid__["a" /* getUid */])()
  });
  return Object(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* request */])(url, 'GET', data);
}

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_MiniPlayer_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_097b91d8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_MiniPlayer_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_MiniPlayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_097b91d8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_MiniPlayer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/MiniPlayer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MiniPlayer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-097b91d8", Component.options)
  } else {
    hotAPI.reload("data-v-097b91d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      audioCtx: null
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['currentSong'])),
  mounted: function mounted() {
    this.createAudioContext();
  },

  methods: {
    createAudioContext: function createAudioContext() {
      this.audioCtx = wx.createAudioContext('currentSong');
      this.audioCtx.play();
    }
  },
  watch: {
    'currentSong': {
      handler: function handler(newVal) {
        this.audioCtx.play();
        console.log('dddd');
      },

      deep: true
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mini-player"
  }, [_c('audio', {
    attrs: {
      "poster": _vm.currentSong.image,
      "name": _vm.currentSong.name,
      "author": _vm.currentSong.singer,
      "src": _vm.currentSong.url,
      "id": "currentSong",
      "controls": ""
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-097b91d8", esExports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "singer-detail"
  }, [_c('div', {
    staticClass: "singer-info"
  }, [_c('h3', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.singer.name))]), _vm._v(" "), _c('div', {
    staticClass: "photo"
  }, [_c('img', {
    attrs: {
      "src": _vm.singer.img
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "blur"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "song-wrapper"
  }, _vm._l((_vm.songs), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "song",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.selectSong(item, index)
        }
      }
    }, [_c('h3', {
      staticClass: "song-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', {
      staticClass: "singer-name"
    }, [_vm._v(_vm._s(_vm.singer.name) + " ·专辑·《" + _vm._s(item.album) + "》")])], 1)
  })), _vm._v(" "), (_vm.showMiniPlayer) ? _c('div', {
    staticClass: "mini-player"
  }, [_c('v-mini-player', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e44add72", esExports)
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUid;
// 获取uid用于获取歌曲地址；保存下来，避免每次都获取

var _uid = 0;
var UID_KEY = '__uid__';

function getUid() {
  if (_uid) {
    return _uid;
  }
  _uid = wx.getStorage({
    key: UID_KEY
  });
  if (!_uid) {
    var t = new Date().getUTCMilliseconds();
    _uid = Math.round(2147483647 * Math.random()) * t % 1e10;
    wx.setStorage({
      key: UID_KEY,
      data: _uid
    });
  }
  return _uid;
}

/***/ })

},[107]);
//# sourceMappingURL=main.js.map