/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/env.ts":
/*!********************!*\
  !*** ./src/env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    identifier: {
        name: "discord",
    },
    character: {
        enabled: true,
        selectionBeforeConnection: true,
    },
};


/***/ }),

/***/ "./src/infame/events/playerConnecting.ts":
/*!***********************************************!*\
  !*** ./src/infame/events/playerConnecting.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const env_1 = __importDefault(__webpack_require__(/*! @/env */ "./src/env.ts"));
AddEventHandler("playerConnecting", (playerName, setKickReason, deferrals) => {
    deferrals.defer();
    const identifiers = getPlayerIdentifiers(source);
    if (identifiers.findIndex((identifier) => identifier.startsWith(env_1.default.identifier.name)) > -1) {
        console.log("perfect");
    }
    else {
        deferrals.presentCard({
            type: "AdaptiveCard",
            body: [
                {
                    type: "TextBlock",
                    size: "Medium",
                    weight: "Bolder",
                    text: "Error during connection",
                },
                {
                    type: "TextBlock",
                    text: `You do not have an open ${env_1.default.identifier.name} so you are not able to join the server.`,
                    wrap: true,
                },
            ],
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            version: "1.5",
        });
    }
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/env.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/events/playerConnecting.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCLG1CQUFPLENBQUMsMkJBQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxREFBcUQsK0JBQStCO0FBQ3BGO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7VUNoQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL2V2ZW50cy9wbGF5ZXJDb25uZWN0aW5nLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgaWRlbnRpZmllcjoge1xyXG4gICAgICAgIG5hbWU6IFwiZGlzY29yZFwiLFxyXG4gICAgfSxcclxuICAgIGNoYXJhY3Rlcjoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2VsZWN0aW9uQmVmb3JlQ29ubmVjdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVudl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAL2VudlwiKSk7XHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckNvbm5lY3RpbmdcIiwgKHBsYXllck5hbWUsIHNldEtpY2tSZWFzb24sIGRlZmVycmFscykgPT4ge1xyXG4gICAgZGVmZXJyYWxzLmRlZmVyKCk7XHJcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IGdldFBsYXllcklkZW50aWZpZXJzKHNvdXJjZSk7XHJcbiAgICBpZiAoaWRlbnRpZmllcnMuZmluZEluZGV4KChpZGVudGlmaWVyKSA9PiBpZGVudGlmaWVyLnN0YXJ0c1dpdGgoZW52XzEuZGVmYXVsdC5pZGVudGlmaWVyLm5hbWUpKSA+IC0xKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwZXJmZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGVmZXJyYWxzLnByZXNlbnRDYXJkKHtcclxuICAgICAgICAgICAgdHlwZTogXCJBZGFwdGl2ZUNhcmRcIixcclxuICAgICAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVGV4dEJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJNZWRpdW1cIixcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwiQm9sZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJFcnJvciBkdXJpbmcgY29ubmVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGBZb3UgZG8gbm90IGhhdmUgYW4gb3BlbiAke2Vudl8xLmRlZmF1bHQuaWRlbnRpZmllci5uYW1lfSBzbyB5b3UgYXJlIG5vdCBhYmxlIHRvIGpvaW4gdGhlIHNlcnZlci5gLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAkc2NoZW1hOiBcImh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS41XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Vudi50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVyQ29ubmVjdGluZy50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==