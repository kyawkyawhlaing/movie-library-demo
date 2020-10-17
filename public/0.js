(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      genres: null,
      releases: null,
      movie: "",
      cast: "",
      rating: "",
      duration: "",
      releaseDate: "",
      releaseYear: "",
      summary: "",
      selectedFile: null,
      movieGen: []
    };
  },
  methods: {
    insert: function insert() {
      var formData = new FormData();
      formData.append("movie", this.movie);
      formData.append("image", this.selectedFile);
      formData.append("rating", this.rating);
      formData.append("summary", this.summary);
      formData.append("duration", this.duration);
      formData.append("cast", this.cast);
      formData.append("releaseDate", this.releaseDate);
      formData.append("releaseYear", this.releaseYear);
      formData.append("genres", this.movieGen);
      axios.post("/api/insertMovie", formData)["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    selected: function selected() {
      this.selectedFile = this.$refs.image.files[0];
      console.log(this.selectedFile);
    }
  },
  created: function created() {
    var _this = this;

    axios.get("/api/insertMovie").then(function (response) {
      _this.genres = response.data.genres;
      _this.releases = response.data.releases;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "col-6 mx-auto",
        attrs: { enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.insert($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "form-group col-md-6" }, [
            _c("label", { attrs: { for: "Movie" } }, [_vm._v("Movie")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.movie,
                  expression: "movie"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "Movie" },
              domProps: { value: _vm.movie },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.movie = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-6" }, [
            _c("label", { attrs: { for: "Cast" } }, [_vm._v("Cast")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.cast,
                  expression: "cast"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "Cast" },
              domProps: { value: _vm.cast },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.cast = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "Rating" } }, [_vm._v("Rating")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.rating,
                  expression: "rating"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "number",
                id: "Rating",
                step: "any",
                min: "0",
                max: "10"
              },
              domProps: { value: _vm.rating },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.rating = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "Duration" } }, [_vm._v("Duration")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.duration,
                  expression: "duration"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "Duration" },
              domProps: { value: _vm.duration },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.duration = $event.target.value
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 my-2" },
          [
            _c("h3", [_vm._v("Movie Genre")]),
            _vm._v(" "),
            _vm._l(_vm.genres, function(genre, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "form-check form-check-inline col-2"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.movieGen,
                        expression: "movieGen"
                      }
                    ],
                    staticClass: "form-check-input",
                    attrs: { type: "checkbox", id: "checkbox" + genre.id },
                    domProps: {
                      value: genre.genre,
                      checked: Array.isArray(_vm.movieGen)
                        ? _vm._i(_vm.movieGen, genre.genre) > -1
                        : _vm.movieGen
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.movieGen,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = genre.genre,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.movieGen = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.movieGen = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.movieGen = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "form-check-label",
                      attrs: { for: "checkbox" + genre.id }
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(genre.genre) + "\n        "
                      )
                    ]
                  )
                ]
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "input-group" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.summary,
                expression: "summary"
              }
            ],
            staticClass: "form-control",
            domProps: { value: _vm.summary },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.summary = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "ReleaseDate" } }, [
              _vm._v("Release Date")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.releaseDate,
                  expression: "releaseDate"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "date", id: "ReleaseDate" },
              domProps: { value: _vm.releaseDate },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.releaseDate = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-md-4" }, [
            _c("label", { attrs: { for: "ReleaseYear" } }, [
              _vm._v("Release Year")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.releaseYear,
                    expression: "releaseYear"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "ReleaseYear" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.releaseYear = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "", selected: "" } }, [
                  _vm._v("Release Year")
                ]),
                _vm._v(" "),
                _vm._l(_vm.releases, function(release) {
                  return _c(
                    "option",
                    {
                      key: release.id,
                      domProps: { value: release.releaseYear }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(release.releaseYear) +
                          "\n          "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            ref: "image",
            staticClass: "form-control-file",
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.selected }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-danger my-3", attrs: { type: "submit" } },
          [_vm._v("Insert")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Summary")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Admin/InsertMovie.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Admin/InsertMovie.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertMovie.vue?vue&type=template&id=5fe8a688& */ "./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&");
/* harmony import */ var _InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsertMovie.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/InsertMovie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InsertMovie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InsertMovie.vue?vue&type=template&id=5fe8a688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);