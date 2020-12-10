(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      movieId: this.$route.params.id
    };
  },
  created: function created() {
    this.movieDetail();
  },
  methods: {
    movieDetail: function movieDetail() {
      var _this = this;

      axios.get("/api/getAllmovies").then(function (res) {
        res.data.movies.map(function (movie) {
          if (movie.id == _this.movieId) {
            _this.item = movie;
          }

          ;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
              _c(
                "v-card",
                { attrs: { height: "auto" } },
                [
                  _c("v-img", {
                    key: _vm.item.id,
                    attrs: {
                      src: "../../storage/" + _vm.item.image,
                      alt: _vm.item.movie,
                      contain: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c("p", { staticClass: "text--primary mb-0" }, [
                      _c(
                        "span",
                        { staticClass: "font-weight-bold black--text" },
                        [_vm._v("IMDb")]
                      ),
                      _vm._v(" - " + _vm._s(_vm.item.rating) + "\n          ")
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
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "display-3" }, [
                    _vm._v(" " + _vm._s(_vm.item.movie) + " ")
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "ml-2", attrs: { align: "center" } },
                        [
                          _c("div", { staticClass: "font-weight-bold" }, [
                            _vm._v("Release - "),
                            _c("span", [_vm._v(_vm._s(_vm.item.releaseDate))])
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("div", { staticClass: "mr-3 font-weight-bold" }, [
                            _vm._v("\n              Duration - "),
                            _c("span", {}, [_vm._v(_vm._s(_vm.item.duration))])
                          ])
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
                        [
                          _c("v-chip", { attrs: { color: "error" } }, [
                            _vm._v("Action")
                          ]),
                          _vm._v(" "),
                          _c("v-chip", { attrs: { color: "warning" } }, [
                            _vm._v("Adventure")
                          ]),
                          _vm._v(" "),
                          _c("v-chip", { attrs: { color: "success" } }, [
                            _vm._v("Adult")
                          ]),
                          _vm._v(" "),
                          _c("v-chip", { attrs: { color: "primary" } }, [
                            _vm._v("Anime")
                          ])
                        ],
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
                          _c("div", { staticClass: "mr-3" }, [_vm._v("John")])
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
                            _vm._v("John Doe,Marry Jane")
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
              _c("v-responsive", { attrs: { "aspect-ratio": 16 / 9 } }, [
                _c("iframe", {
                  attrs: {
                    width: "100%",
                    height: "500",
                    src: "https://www.youtube.com/embed/ShZ978fBl6Y",
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

/***/ "./resources/js/views/MovieDetails.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/MovieDetails.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieDetails.vue?vue&type=template&id=1ff216de& */ "./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&");
/* harmony import */ var _MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/MovieDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChipGroup */ "./node_modules/vuetify/lib/components/VChipGroup/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSheet */ "./node_modules/vuetify/lib/components/VSheet/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MovieDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VChipGroup: vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_6__["VChipGroup"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_9__["VImg"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_10__["VResponsive"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSheet: vuetify_lib_components_VSheet__WEBPACK_IMPORTED_MODULE_11__["VSheet"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"]})


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

/***/ "./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MovieDetails.vue?vue&type=template&id=1ff216de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MovieDetails.vue?vue&type=template&id=1ff216de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovieDetails_vue_vue_type_template_id_1ff216de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);