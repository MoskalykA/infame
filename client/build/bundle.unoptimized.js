/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/infame/nets/characters/setData.ts":
/*!***********************************************!*\
  !*** ./src/infame/nets/characters/setData.ts ***!
  \***********************************************/
/***/ (() => {


/*
  I consider this code to be heresy but fivem leaves me no choice
*/
onNet("infame.nets.characters.setData", (health, armor) => {
    const playerPed = PlayerPedId();
    SetEntityHealth(playerPed, health);
});


/***/ }),

/***/ "./src/infame/nets/playerJoining.ts":
/*!******************************************!*\
  !*** ./src/infame/nets/playerJoining.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


onNet("infame.nets.playerJoining", () => {
    // @ts-ignore
    __webpack_require__.g.exports.spawnmanager.spawnPlayer({
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01",
    }, () => {
        // TODO: Display a menu for character selection
        emitNet("infame.nets.characters.selectCharacter", 0);
    });
    // TODO: Managing player death
});


/***/ }),

/***/ "./src/infame/try.ts":
/*!***************************!*\
  !*** ./src/infame/try.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
RegisterCommand("test", () => {
    console.log("aa");
    (0, interface_1.sendAction)("test", "setVisible", {
        visible: true,
    });
}, false);
(0, interface_1.registerAction)("test", "print", (data) => {
    console.log(data.message);
});
(0, interface_1.registerAction)("test", "onDisableCursor", () => {
    SetNuiFocus(false, false);
});
(0, interface_1.registerAction)("test", "onEnableCursor", () => {
    SetNuiFocus(true, true);
});


/***/ }),

/***/ "./src/infame/utils/interface.ts":
/*!***************************************!*\
  !*** ./src/infame/utils/interface.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerAction = exports.sendAction = void 0;
const sendAction = (moduleName, functionName, argsList) => {
    SendNUIMessage({
        moduleName,
        functionName,
        argsList,
    });
};
exports.sendAction = sendAction;
const registerAction = (moduleName, functionName, callback) => {
    RegisterNuiCallback(`${moduleName}::${functionName}`, (data) => {
        callback(data);
    });
};
exports.registerAction = registerAction;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/infame/nets/playerJoining.ts");
/******/ 	__webpack_require__("./src/infame/nets/characters/setData.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/infame/utils/interface.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/try.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDUFk7QUFDYjtBQUNBO0FBQ0EsSUFBSSxxQkFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLGlFQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2pCWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsR0FBRyxrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLDJCQUEyQixXQUFXLElBQUksYUFBYTtBQUN2RDtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjs7Ozs7OztVQ2hCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1VFUEQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL25ldHMvY2hhcmFjdGVycy9zZXREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvbmV0cy9wbGF5ZXJKb2luaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qXHJcbiAgSSBjb25zaWRlciB0aGlzIGNvZGUgdG8gYmUgaGVyZXN5IGJ1dCBmaXZlbSBsZWF2ZXMgbWUgbm8gY2hvaWNlXHJcbiovXHJcbm9uTmV0KFwiaW5mYW1lLm5ldHMuY2hhcmFjdGVycy5zZXREYXRhXCIsIChoZWFsdGgsIGFybW9yKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJQZWQgPSBQbGF5ZXJQZWRJZCgpO1xyXG4gICAgU2V0RW50aXR5SGVhbHRoKHBsYXllclBlZCwgaGVhbHRoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5vbk5ldChcImluZmFtZS5uZXRzLnBsYXllckpvaW5pbmdcIiwgKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgZ2xvYmFsLmV4cG9ydHMuc3Bhd25tYW5hZ2VyLnNwYXduUGxheWVyKHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgejogMCxcclxuICAgICAgICBtb2RlbDogXCJhX21fbV9za2F0ZXJfMDFcIixcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgICAvLyBUT0RPOiBEaXNwbGF5IGEgbWVudSBmb3IgY2hhcmFjdGVyIHNlbGVjdGlvblxyXG4gICAgICAgIGVtaXROZXQoXCJpbmZhbWUubmV0cy5jaGFyYWN0ZXJzLnNlbGVjdENoYXJhY3RlclwiLCAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8gVE9ETzogTWFuYWdpbmcgcGxheWVyIGRlYXRoXHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcmZhY2VfMSA9IHJlcXVpcmUoXCJAL2luZmFtZS91dGlscy9pbnRlcmZhY2VcIik7XHJcblJlZ2lzdGVyQ29tbWFuZChcInRlc3RcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJhYVwiKTtcclxuICAgICgwLCBpbnRlcmZhY2VfMS5zZW5kQWN0aW9uKShcInRlc3RcIiwgXCJzZXRWaXNpYmxlXCIsIHtcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbn0sIGZhbHNlKTtcclxuKDAsIGludGVyZmFjZV8xLnJlZ2lzdGVyQWN0aW9uKShcInRlc3RcIiwgXCJwcmludFwiLCAoZGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcclxufSk7XHJcbigwLCBpbnRlcmZhY2VfMS5yZWdpc3RlckFjdGlvbikoXCJ0ZXN0XCIsIFwib25EaXNhYmxlQ3Vyc29yXCIsICgpID0+IHtcclxuICAgIFNldE51aUZvY3VzKGZhbHNlLCBmYWxzZSk7XHJcbn0pO1xyXG4oMCwgaW50ZXJmYWNlXzEucmVnaXN0ZXJBY3Rpb24pKFwidGVzdFwiLCBcIm9uRW5hYmxlQ3Vyc29yXCIsICgpID0+IHtcclxuICAgIFNldE51aUZvY3VzKHRydWUsIHRydWUpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZWdpc3RlckFjdGlvbiA9IGV4cG9ydHMuc2VuZEFjdGlvbiA9IHZvaWQgMDtcclxuY29uc3Qgc2VuZEFjdGlvbiA9IChtb2R1bGVOYW1lLCBmdW5jdGlvbk5hbWUsIGFyZ3NMaXN0KSA9PiB7XHJcbiAgICBTZW5kTlVJTWVzc2FnZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZSxcclxuICAgICAgICBmdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgYXJnc0xpc3QsXHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy5zZW5kQWN0aW9uID0gc2VuZEFjdGlvbjtcclxuY29uc3QgcmVnaXN0ZXJBY3Rpb24gPSAobW9kdWxlTmFtZSwgZnVuY3Rpb25OYW1lLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgUmVnaXN0ZXJOdWlDYWxsYmFjayhgJHttb2R1bGVOYW1lfTo6JHtmdW5jdGlvbk5hbWV9YCwgKGRhdGEpID0+IHtcclxuICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnJlZ2lzdGVyQWN0aW9uID0gcmVnaXN0ZXJBY3Rpb247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9uZXRzL3BsYXllckpvaW5pbmcudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL25ldHMvY2hhcmFjdGVycy9zZXREYXRhLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL3RyeS50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==