(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../color */ "./resources/js/color.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      picker: null,
      menu: false,
      message: null,
      error: null,
      colour: _color__WEBPACK_IMPORTED_MODULE_0__["default"],
      form: {
        movie: "",
        image: null,
        rating: "",
        summary: "",
        duration: "",
        cast: "",
        releaseDate: "",
        genres: []
      },
      rules: {
        required: function required(value) {
          return !!value || "required.";
        },
        counter: function counter(value) {
          return value.length <= 100 || "Max 100 characters.";
        },
        string: function string(value) {
          return value.length <= 255 || "Must be String.";
        },
        rating: function rating(number) {
          return number.valueOf() <= 10 || "Highest rating value is 10";
        },
        duration: function duration(value) {
          var pattern = /[0-9]{1||2}[a-zA-Z]{2}[0-9]{1||2}[a-zA-Z]{2}/g;
          return pattern.test(value);
        },
        picture: function picture(value) {
          return !value || value.size < 2000000 || "Avatar size should be less than 2 MB!";
        }
      }
    };
  },
  watch: {
    menu: function menu(val) {
      var _this = this;

      val && setTimeout(function () {
        return _this.$refs.picker.activePicker = "YEAR";
      });
    }
  },
  methods: {
    save: function save(date) {
      this.$refs.menu.save(date);
    },
    insertData: function insertData() {
      var _this2 = this;

      this.$refs.form.validate();
      var formData = new FormData();
      formData.append("movie", this.form.movie);
      formData.append("file", this.form.image);
      formData.append("director", this.form.director);
      formData.append("link", this.form.link);
      formData.append("rating", this.form.rating);
      formData.append("summary", this.form.summary);
      formData.append("duration", this.form.duration);
      formData.append("cast", this.form.cast);
      formData.append("releaseDate", this.form.releaseDate);
      formData.append("genres", this.form.genres);
      this.$store.dispatch("insertData", formData).then(function (_ref) {
        var data = _ref.data;
        return _this2.message = data.message;
      })["catch"](function () {
        return _this2.error = "Duplicated Error!";
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.$store.dispatch("getMovieData").then(function (response) {
      _this3.genres = response.data.genres;
      _this3.releases = response.data.releases;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "form",
      attrs: {
        id: "form",
        enctype: "multipart/form-data",
        "lazy-validation": ""
      }
    },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { lg: "4" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Movie",
                      rules: [_vm.rules.required, _vm.rules.counter],
                      "prepend-icon": "mdi-movie-roll",
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.movie,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "movie", $$v)
                      },
                      expression: "form.movie"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Cast",
                      rules: [_vm.rules.required, _vm.rules.string],
                      "prepend-icon": "mdi-movie-open",
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.cast,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "cast", $$v)
                      },
                      expression: "form.cast"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Duration",
                      rules: [_vm.rules.required, _vm.rules.duration],
                      "prepend-icon": "mdi-av-timer",
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.duration,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "duration", $$v)
                      },
                      expression: "form.duration"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Rating",
                      rules: [_vm.rules.required, _vm.rules.rating],
                      "prepend-icon": "mdi-star",
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.rating,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "rating", $$v)
                      },
                      expression: "form.rating"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Director",
                      rules: [_vm.rules.required],
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.director,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "director", $$v)
                      },
                      expression: "form.director"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Link",
                      rules: [_vm.rules.required],
                      "solo-inverted": ""
                    },
                    model: {
                      value: _vm.form.link,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "link", $$v)
                      },
                      expression: "form.link"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-file-input", {
                    attrs: {
                      accept: "image/*",
                      "prepend-icon": "mdi-camera",
                      rules: [_vm.rules.picture],
                      "show-size": "",
                      "truncate-length": "10"
                    },
                    model: {
                      value: _vm.form.image,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "image", $$v)
                      },
                      expression: "form.image"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "ml-9" },
            _vm._l(_vm.genres, function(genre) {
              return _c(
                "v-col",
                { key: genre.id, attrs: { cols: "2" } },
                [
                  _c("v-checkbox", {
                    key: genre.id,
                    attrs: {
                      value: genre.genre,
                      color:
                        _vm.colour[
                          Math.floor(Math.random() * (_vm.colour.length + 1))
                        ],
                      label: genre.genre
                    },
                    model: {
                      value: _vm.form.genres,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "genres", $$v)
                      },
                      expression: "form.genres"
                    }
                  })
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("v-textarea", {
                    attrs: {
                      "background-color": "light-blue lighten-4",
                      "prepend-icon": "mdi-comment",
                      rules: [_vm.rules.required],
                      filled: ""
                    },
                    model: {
                      value: _vm.form.summary,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "summary", $$v)
                      },
                      expression: "form.summary"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "5" } },
                [
                  _c(
                    "v-menu",
                    {
                      ref: "menu",
                      attrs: {
                        "close-on-content-click": false,
                        transition: "scale-transition",
                        "offset-y": "",
                        "max-width": "290px",
                        "min-width": "290px"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-text-field",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        rules: [_vm.rules.required],
                                        label: "Date",
                                        hint: "YYYY-MM-DD format",
                                        "persistent-hint": "",
                                        "prepend-icon": "mdi-calendar",
                                        autocomplete: "off"
                                      },
                                      model: {
                                        value: _vm.form.releaseDate,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "releaseDate", $$v)
                                        },
                                        expression: "form.releaseDate"
                                      }
                                    },
                                    "v-text-field",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              )
                            ]
                          }
                        }
                      ]),
                      model: {
                        value: _vm.menu,
                        callback: function($$v) {
                          _vm.menu = $$v
                        },
                        expression: "menu"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        ref: "picker",
                        attrs: {
                          max: new Date().toISOString().substr(0, 10),
                          "no-title": ""
                        },
                        on: { change: _vm.save },
                        model: {
                          value: _vm.form.releaseDate,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "releaseDate", $$v)
                          },
                          expression: "form.releaseDate"
                        }
                      })
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
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "blue--text ml-9",
                      attrs: {
                        color: "light-blue lighten-4",
                        form: "form",
                        depressed: ""
                      },
                      on: { click: _vm.insertData }
                    },
                    [_vm._v("SUBMIT")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c(
                    "v-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !!_vm.message,
                          expression: "!!message"
                        }
                      ],
                      staticClass: "ml-9",
                      attrs: { type: "success", dense: "", dismissible: "" }
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(_vm.message) + "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-alert",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !!_vm.error,
                          expression: "!!error"
                        }
                      ],
                      staticClass: "ml-9",
                      attrs: { type: "error", dense: "", dismissible: "" }
                    },
                    [_vm._v("\n          " + _vm._s(_vm.error) + "\n        ")]
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

/***/ "./resources/js/views/Admin/InsertMovie.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Admin/InsertMovie.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true& */ "./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true&");
/* harmony import */ var _InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsertMovie.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5fe8a688",
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__["VDatePicker"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_13__["VTextarea"]})


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InsertMovie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/InsertMovie.vue?vue&type=template&id=5fe8a688&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsertMovie_vue_vue_type_template_id_5fe8a688_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);