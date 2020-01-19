webpackHotUpdate("static/development/pages/listening-exercises/ayer.js",{

/***/ "./pages/listening-exercises/ayer.js":
/*!*******************************************!*\
  !*** ./pages/listening-exercises/ayer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shards_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shards-react */ "./node_modules/shards-react/dist/shards-react.es.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _listening_components_ListeningLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../listening-components/ListeningLayout */ "./listening-components/ListeningLayout.js");
/* harmony import */ var _common_PDFFile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/PDFFile */ "./common/PDFFile.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-seo-component */ "./node_modules/react-seo-component/index.js");
/* harmony import */ var react_seo_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_seo_component__WEBPACK_IMPORTED_MODULE_10__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // Layout



var numberOfQuestions = 6;

var Ayer = function Ayer(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(react_seo_component__WEBPACK_IMPORTED_MODULE_10___default.a, {
    title: "Ayetr - Listening Exercise | CXC Spanish Online",
    description: "Learn about how Kelly spent her day yesterday with our listening exercise. Pass your CXC Spanish exam with our free online study guide.",
    twitterUsername: "_rxhem",
    author: "Raheem McDonald",
    article: true,
    publishedDate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()(),
    modifiedDate: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
  }), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], null, __jsx("a", {
    href: "/"
  }, "Home")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], null, __jsx("a", {
    href: "/listening"
  }, "Listening Exercises")), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    active: true
  }, "Ayer")), __jsx(_listening_components_ListeningLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, "Ayer"), __jsx("p", null, "Kelly and Ronaldo are talking about how they spent their day yesterday. Let's take a listen."), __jsx("br", null), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6
  }, __jsx("h6", null, "Normal Speed"), __jsx("div", {
    className: "audio"
  }, __jsx("audio", {
    controls: true
  }, __jsx("source", {
    src: "https://dl.dropbox.com/s/ylpreigadftgexv/ayer-normal.mp3?dl=0"
  })))), __jsx(shards_react__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    md: 6,
    lg: 6,
    xl: 6
  }, __jsx("h6", null, "Slow Speed"), __jsx("div", {
    className: "audio"
  }, __jsx("audio", {
    controls: true
  }, __jsx("source", {
    src: "https://dl.dropbox.com/s/5j92zjjrsex03wr/ayer-slow.mp3?dl=0"
  }))))), __jsx("br", null), __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "Read transcript")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx("b", null, "Ricardo:"), " \xA1Te ves exhausta! \xBFQu\xE9 pasa?"), __jsx("p", null, __jsx("b", null, "Kelly:"), " Ayer fue un d\xEDa s\xFAper largo para m\xED y todav\xEDa no me he recuperado. Me levant\xE9 a las cinco y media. Hice ejercicio por media hora. Desayun\xE9, me vest\xED y sal\xED para el trabajo a las siete y media. Tuve dos reuniones importantes por la ma\xF1ana y un proyecto que entregar por la tarde as\xED que no descans\xE9 ni diez minutos. Sal\xED del trabajo a las cinco, cen\xE9 y fui a la universidad donde ense\xF1o una clase de espa\xF1ol. Me qued\xE9 ah\xED con mis estudiantes hasta las nueve de la noche. Cuando regres\xE9 a casa, me relaj\xE9 un rato. Cuando por fin me dorm\xED, eran las diez y media. F\xEDjate que todos los martes son as\xED para m\xED. Es una pesadilla."), __jsx("p", null, __jsx("b", null, "Ricardo:"), " \xA1Con raz\xF3n! Pobrecita. Pues los martes para m\xED no son tan pesados. Ayer me levant\xE9 a las seis y media de la ma\xF1ana. me lav\xE9 la cara, los dientes y me vest\xED. Despu\xE9s desayun\xE9 pan tostado con mermelada y una taza de caf\xE9. Me gusta desayunar ligero. Antes de irme al trabajo mir\xE9 las noticias de la ma\xF1ana como por diez minutos. Solamente quer\xEDa saber el pron\xF3stico del tiempo, para estar preparado."), __jsx("p", null, __jsx("b", null, "Kelly:"), " \xBFA qu\xE9 hora llegaste a tu casa?"), __jsx("p", null, __jsx("b", null, "Ricardo: "), "Pues llegu\xE9 como a las seis de la tarde. Habr\xEDa podido llegar m\xE1s temprano si no hubiera pasado al gimnasio."), __jsx("p", null, __jsx("b", null, "Kelly:"), " \xBFY qu\xE9 hiciste entre las seis y antes de dormir?"), __jsx("p", null, __jsx("b", null, "Ricardo:"), " Pues primero cen\xE9. Luego me relaj\xE9 un poco leyendo las noticias en el Internet y despu\xE9s us\xE9 un programa de videoconferencia para hablar con mi familia. Finalmente me ba\xF1\xE9 y me fui a la cama como a las diez."), __jsx("p", null, __jsx("b", null, "Kelly:"), " \xA1Qu\xE9 envidia!"), __jsx("p", null, __jsx("b", null, "Ricardo:"), " Pues no te sientas mal porque mis lunes son horribles. Despu\xE9s del trabajo manejo una hora para ir a clases. Mi clase termina a las ocho de la noche y despu\xE9s tengo que manejar una hora de regreso. Es horrible."), __jsx("p", null, __jsx("b", null, "Kelly:"), " Estoy de acuerdo. Creo que despu\xE9s de este semestre nos habremos ganado unas muy merecidas vacaciones.")), __jsx("br", null), __jsx("br", null), __jsx("h6", null, "Questions"), __jsx("ul", {
    style: {
      marginLeft: "-20px"
    }
  }, __jsx("li", null, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "How does Rocardo dsecribes Kelly when he sees her?")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "He stated that she looked exhausted."))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What time does Kelly get up in the mornings?")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "She gets up at 5:30 am."))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What time does Kelly leave her home in the morning?")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "She leaves at 7:30 am."))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "Identify 2 things Kelly does before leaving in the mornings.")
  }, __jsx("ul", null, __jsx("li", null, "Exercises for 30 minutes"), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, "Has breakfast")))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What does Kelly do at the university?")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "She teaches a Spanish class."))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What time did Ricardo wake up?")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "He woke up at 6:30 am."))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What does he have for breakfast")
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }, "He has toast with jam and a cup of coffee"))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    }, "What does Ricardo do between 6pm and before he goes to sleep?")
  }, __jsx("ul", null, __jsx("li", null)))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  }))), __jsx("li", {
    style: {
      paddingTop: "10px"
    }
  }, __jsx(react_collapsible__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: __jsx("a", {
      href: ""
    })
  }, __jsx("p", {
    style: {
      paddingTop: "10px"
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Ayer);

/***/ })

})
//# sourceMappingURL=ayer.js.be032e737c7f08411dea.hot-update.js.map