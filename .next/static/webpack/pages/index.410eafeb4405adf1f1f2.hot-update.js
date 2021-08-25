"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_srija_REact_usingnextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\srija\\REact\\usingnextjs\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_srija_REact_usingnextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function SpeakersList() {
  _s();

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_5__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_6__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_7__.SpeakerFilterContext),
      searchQuery = _useContext.searchQuery,
      eventYear = _useContext.eventYear;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_5__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_5__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: speakersData.filter(function (speaker) {
          return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);
        }).filter(function (speaker) {
          return speaker.sessions.find(function (session) {
            return session.eventYear === eventYear;
          });
        }).map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_3__.default, {
            speaker: speaker,
            onFavoriteToggle: function onFavoriteToggle(doneCallback) {
              updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
                favorite: !speaker.favorite
              }), doneCallback);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(SpeakersList, "8vgtUeJiG7dKWObsTpFVL5Kz078=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_5__.default];
});

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDEwZWFmZWI0NDA1YWRmMWYxZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNPLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSx5QkFNbEJKLCtEQUFlLENBQUMsSUFBRCxFQUFPRSw4Q0FBUCxDQU5HO0FBQUEsTUFFZEcsWUFGYyxvQkFFcEJILElBRm9CO0FBQUEsTUFHcEJJLGFBSG9CLG9CQUdwQkEsYUFIb0I7QUFBQSxNQUlwQkMsS0FKb0Isb0JBSXBCQSxLQUpvQjtBQUFBLE1BS3BCQyxZQUxvQixvQkFLcEJBLFlBTG9COztBQUFBLG9CQVFhWCxpREFBVSxDQUFDTSxnRkFBRCxDQVJ2QjtBQUFBLE1BUWRNLFdBUmMsZUFRZEEsV0FSYztBQUFBLE1BUURDLFNBUkMsZUFRREEsU0FSQzs7QUFVdEIsTUFBSUosYUFBYSxLQUFLTCwwRUFBdEIsRUFBOEM7QUFDNUMsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsbURBQWdDTSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtELEdBaEJxQixDQWtCdEI7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsZUFBUyxFQUFDLDBCQUhaO0FBSUUsV0FBSyxFQUFFRCxhQUFhLEtBQUtMLDBFQUozQjtBQUFBLDZCQU1FO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dJLFlBQVksQ0FDVlEsTUFERixDQUNTLFVBQVVDLE9BQVYsRUFBbUI7QUFDekIsaUJBQ0VBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxXQUFkLEdBQTRCQyxRQUE1QixDQUFxQ1IsV0FBckMsS0FDQUssT0FBTyxDQUFDSSxJQUFSLENBQWFGLFdBQWIsR0FBMkJDLFFBQTNCLENBQW9DUixXQUFwQyxDQUZGO0FBSUQsU0FORixFQU9FSSxNQVBGLENBT1MsVUFBVUMsT0FBVixFQUFtQjtBQUN6QixpQkFBT0EsT0FBTyxDQUFDSyxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxPQUFELEVBQWE7QUFDeEMsbUJBQU9BLE9BQU8sQ0FBQ1gsU0FBUixLQUFzQkEsU0FBN0I7QUFDRCxXQUZNLENBQVA7QUFHRCxTQVhGLEVBWUVZLEdBWkYsQ0FZTSxVQUFVUixPQUFWLEVBQW1CO0FBQ3RCLDhCQUNFLDhEQUFDLDZDQUFEO0FBRUUsbUJBQU8sRUFBRUEsT0FGWDtBQUdFLDRCQUFnQixFQUFFLDBCQUFDUyxZQUFELEVBQWtCO0FBQ2xDZixjQUFBQSxZQUFZLGlDQUVMTSxPQUZLO0FBR1JVLGdCQUFBQSxRQUFRLEVBQUUsQ0FBQ1YsT0FBTyxDQUFDVTtBQUhYLGtCQUtWRCxZQUxVLENBQVo7QUFPRDtBQVhILGFBQ09ULE9BQU8sQ0FBQ1csRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBZUQsU0E1QkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBDRDs7R0E5RFFyQjtVQU1ISjs7O0tBTkdJO0FBZ0VULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcbiAgY29uc3QgeyBzZWFyY2hRdWVyeSwgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MTV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7c3BlYWtlcnNEYXRhXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgc3BlYWtlci5sYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTcGVha2VyIiwiUmVhY3RQbGFjZUhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwic2VhcmNoUXVlcnkiLCJldmVudFllYXIiLCJGQUlMVVJFIiwiU1VDQ0VTUyIsImZpbHRlciIsInNwZWFrZXIiLCJmaXJzdCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJsYXN0Iiwic2Vzc2lvbnMiLCJmaW5kIiwic2Vzc2lvbiIsIm1hcCIsImRvbmVDYWxsYmFjayIsImZhdm9yaXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9