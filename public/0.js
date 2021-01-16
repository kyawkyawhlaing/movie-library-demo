(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color */ "./resources/js/color.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item: "",
      genres: [],
      color: _color__WEBPACK_IMPORTED_MODULE_0__["default"],
      movieId: this.$route.params.id,
      lazyloading: true
    };
  },
  created: function created() {
    this.movieDetail();
  },
  methods: {
    movieDetail: function movieDetail() {
      var _this = this;

      var firstOne = axios.get("/api/getAllmovies");
      var secondOne = axios.get("/api/getAllmovies/".concat(this.movieId));
      axios.all([firstOne, secondOne]).then(axios.spread(function () {
        var firstResponse = arguments.length <= 0 ? undefined : arguments[0];
        var secondResponse = arguments.length <= 1 ? undefined : arguments[1]; //first api response

        firstResponse.data.movies.map(function (movie) {
          if (movie.id == _this.movieId) {
            _this.item = movie;
          }

          _this.lazyloading = false;
        }); //second api response

        secondResponse.data.genres.map(function (genre) {
          return _this.genres.push(genre);
        });
      }))["catch"](function (errors) {
        return console.error(errors);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.transparent[data-v-1ff216de] {\r\n  background: transparent;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "3", md: "4" } },
            [
              _vm.lazyloading
                ? _c("v-skeleton-loader", {
                    attrs: { type: "image,list-item" }
                  })
                : _c(
                    "v-card",
                    { attrs: { height: "auto", tile: "", hover: "" } },
                    [
                      _c("v-img", {
                        key: _vm.item.id,
                        attrs: {
                          src: "../../storage/" + _vm.item.image,
                          alt: _vm.item.movie,
                          width: "300",
                          height: "400",
                          contain: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("p", { staticClass: "text--primary mb-0" }, [
                          _c(
                            "span",
                            { staticClass: "font-weight-bold black--text" },
                            [_vm._v("Rating")]
                          ),
                          _vm._v(
                            " -\n            " +
                              _vm._s(_vm.item.rating) +
                              "\n          "
                          )
                        ])
                      ])
                    ],
                    1
                  )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "9", md: "8" } },
            [
              _vm.lazyloading
                ? _c("v-skeleton-loader", {
                    attrs: { type: "card-heading,article" }
                  })
                : _c(
                    "v-card",
                    {
                      attrs: {
                        color: "light-blue darken-2 white--text",
                        elevation: "20"
                      }
                    },
                    [
                      _c("v-card-title", { staticClass: "display-3" }, [
                        _vm._v(" " + _vm._s(_vm.item.movie) + " ")
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "white--text" },
                        [
                          _c(
                            "v-row",
                            { staticClass: "ml-2", attrs: { align: "center" } },
                            [
                              _c("div", { staticClass: "font-weight-bold" }, [
                                _vm._v("\n              Release - "),
                                _c("span", [
                                  _vm._v(_vm._s(_vm.item.releaseDate))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mr-3 font-weight-bold" },
                                [
                                  _vm._v("\n              Duration - "),
                                  _c("span", {}, [
                                    _vm._v(_vm._s(_vm.item.duration))
                                  ])
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "v-chip-group",
                            {
                              attrs: {
                                "active-class": "teal accent-4 white--text",
                                column: ""
                              }
                            },
                            _vm._l(_vm.genres, function(genre) {
                              return _c(
                                "v-chip",
                                {
                                  key: genre.id,
                                  staticClass: "white--text",
                                  attrs: {
                                    color:
                                      _vm.color[
                                        Math.floor(
                                          Math.random() * (_vm.color.length + 1)
                                        )
                                      ]
                                  }
                                },
                                [_vm._v(_vm._s(genre.genre))]
                              )
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _c("br"),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.item.summary) +
                                "\n          "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "white--text" },
                        [
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c("div", { staticClass: "ml-3" }, [
                                _vm._v("Director")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("div", { staticClass: "mr-3" }, [
                                _vm._v(
                                  _vm._s(_vm.item.director || _vm.N / _vm.A)
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { attrs: { justify: "center" } },
                            [
                              _c("div", { staticClass: "ml-3" }, [
                                _vm._v("Starring")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("div", { staticClass: "mr-3" }, [
                                _vm._v(_vm._s(_vm.item.cast))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { flat: "" } },
        [
          _c(
            "v-sheet",
            [
              _c(
                "h1",
                { staticClass: "text--secondary text-left display-2 mb-10" },
                [_vm._v("Teaser...")]
              ),
              _vm._v(" "),
              _vm.lazyloading
                ? _c("v-skeleton-loader", { attrs: { type: "card-avatar" } })
                : _c("v-responsive", { attrs: { "aspect-ratio": 16 / 9 } }, [
                    _c("iframe", {
                      attrs: {
                        width: "100%",
                        height: "500",
                        src: "https://www.youtube.com/embed/" + _vm.item.link,
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",
                        allowfullscreen: ""
                      }
                    })
                  ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/color.js":
/*!*******************************!*\
  !*** ./resources/js/color.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["red", "red lighten-1", "red darken-1", "red darken-2", "red darken-3", "red darken-4", "red darken-5", "cyan", "cyan lighten-1", "cyan darken-1", "cyan darken-2", "cyan darken-3", "cyan darken-4", "cyan darken-5", "pink", "pink lighten-1", "pink darken-1", "pink darken-2", "pink darken-3", "pink darken-4", "pink darken-5", "yellow", "yellow darken-1", "yellow darken-2", "yellow darken-3", "yellow darken-4", "yellow darken-5", "purple", "purple lighten-1", "purple darken-1", "purple darken-2", "purple darken-3", "purple darken-4", "purple darken-5", "indigo", "indigo lighten-1", "indigo darken-1", "indigo darken-2", "indigo darken-3", "indigo darken-4", "indigo darken-5", "blue", "blue lighten-1", "blue darken-1", "blue darken-2", "blue darken-3", "blue darken-4", "blue darken-5", "teal", "teal lighten-1", "teal darken-1", "teal darken-2", "teal darken-3", "teal darken-4", "teal darken-5", "cyan", "cyan lighten-1", "cyan darken-1", "cyan darken-2", "cyan darken-3", "cyan darken-4", "cyan darken-5", "green", "green lighten-1", "green darken-1", "green darken-2", "green darken-3", "green darken-4", "green darken-5", "lime", "lime lighten-1", "lime darken-1", "lime darken-2", "lime darken-3", "lime darken-4", "lime darken-5", "amber", "amber lighten-1", "amber darken-1", "amber darken-2", "amber darken-3", "amber darken-4", "amber darken-5", "orange", "orange lighten-1", "orange darken-1", "orange darken-2", "orange darken-3", "orange darken-4", "orange darken-5", "blue-grey", "blue-grey lighten-1", "blue-grey darken-1", "blue-grey darken-2", "blue-grey darken-3", "blue-grey darken-4", "blue-grey darken-5", "brown", "brown lighten-1", "brown darken-1", "brown darken-2", "brown darken-3", "brown darken-4", "brown darken-5", "grey", "grey lighten-1", "grey darken-1", "grey darken-2", "grey darken-3", "grey darken-4", "grey darken-5"]);

/***/ }),

/***/ "./resources/js/views/MovieDetails.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/MovieDetails.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true& */ "./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true&");
/* harmony import */ var _MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& */ "./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChipGroup */ "./node_modules/vuetify/lib/components/VChipGroup/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");
/* harmony import */ var vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSkeletonLoader */ "./node_modules/vuetify/lib/components/VSkeletonLoader/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ff216de",
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VChipGroup: vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_7__["VChipGroup"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_11__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_12__["VSheet"],VSkeletonLoader: vuetify_lib_components_VSkeletonLoader__WEBPACK_IMPORTED_MODULE_13__["VSkeletonLoader"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MovieDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/MovieDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=style&index=0&id=1ff216de&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_style_index_0_id_1ff216de_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);