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
        deferrals.done();
    }
    else {
        deferrals.done(`You do not have an open ${env_1.default.identifier.name} so you are not able to join the server.`);
        CancelEvent();
    }
});


/***/ }),

/***/ "./src/infame/events/playerJoining.ts":
/*!********************************************!*\
  !*** ./src/infame/events/playerJoining.ts ***!
  \********************************************/
/***/ (() => {


AddEventHandler("playerJoining", (source) => {
    emitNet("infame.nets.playerJoining", source);
});


/***/ }),

/***/ "./src/infame/nets/characters/selectCharacter.ts":
/*!*******************************************************!*\
  !*** ./src/infame/nets/characters/selectCharacter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const selectCharacter_1 = __webpack_require__(/*! @/infame/utils/characters/selectCharacter */ "./src/infame/utils/characters/selectCharacter.ts");
onNet("infame.nets.characters.selectCharacter", (characterId) => {
    (0, selectCharacter_1.selectCharacter)(source.toString(), characterId);
});


/***/ }),

/***/ "./src/infame/utils/characters/characterData.ts":
/*!******************************************************!*\
  !*** ./src/infame/utils/characters/characterData.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/infame/utils/characters/selectCharacter.ts":
/*!********************************************************!*\
  !*** ./src/infame/utils/characters/selectCharacter.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


/*
    For the moment, I don't include any form of backup or data loading, I want to make the system functional and then do it.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectCharacter = void 0;
const CHARACTER_DATA = {
    health: 200,
    armor: 100,
    model: 0x94562dd7,
    weapons: [0x5ef9fec4, 0x624fe830],
    position: {
        x: 0,
        y: 0,
        z: 0,
    },
};
const selectCharacter = (source, characterId) => {
    SetPlayerModel(source, CHARACTER_DATA.model);
    setTimeout(() => {
        /*
            I consider this code to be heresy but fivem leaves me no choice
        */
        emitNet("infame.nets.characters.setHealth", source, CHARACTER_DATA.health);
        const playerPed = GetPlayerPed(source);
        SetPedArmour(playerPed, CHARACTER_DATA.armor);
        SetEntityCoords(playerPed, CHARACTER_DATA.position.x, CHARACTER_DATA.position.y, CHARACTER_DATA.position.z, true, false, false, true);
        RemoveAllPedWeapons(playerPed, false);
        CHARACTER_DATA.weapons.map((weapon) => {
            GiveWeaponToPed(playerPed, weapon, 100, false, false);
        });
    }, 500);
};
exports.selectCharacter = selectCharacter;


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
/******/ 	__webpack_require__("./src/infame/events/playerConnecting.ts");
/******/ 	__webpack_require__("./src/infame/events/playerJoining.ts");
/******/ 	__webpack_require__("./src/infame/nets/characters/selectCharacter.ts");
/******/ 	__webpack_require__("./src/infame/utils/characters/selectCharacter.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/utils/characters/characterData.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLDJCQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELCtCQUErQjtBQUNqRjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNoQlk7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNIWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsbUJBQU8sQ0FBQyxtR0FBMkM7QUFDN0U7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDTFk7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSx1QkFBdUI7Ozs7Ozs7VUNqQ3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL2V2ZW50cy9wbGF5ZXJDb25uZWN0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckpvaW5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9uZXRzL2NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvY2hhcmFjdGVycy9zZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBpZGVudGlmaWVyOiB7XHJcbiAgICAgICAgbmFtZTogXCJkaXNjb3JkXCIsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVudl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAL2VudlwiKSk7XHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckNvbm5lY3RpbmdcIiwgKHBsYXllck5hbWUsIHNldEtpY2tSZWFzb24sIGRlZmVycmFscykgPT4ge1xyXG4gICAgZGVmZXJyYWxzLmRlZmVyKCk7XHJcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IGdldFBsYXllcklkZW50aWZpZXJzKHNvdXJjZSk7XHJcbiAgICBpZiAoaWRlbnRpZmllcnMuZmluZEluZGV4KChpZGVudGlmaWVyKSA9PiBpZGVudGlmaWVyLnN0YXJ0c1dpdGgoZW52XzEuZGVmYXVsdC5pZGVudGlmaWVyLm5hbWUpKSA+IC0xKSB7XHJcbiAgICAgICAgZGVmZXJyYWxzLmRvbmUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRlZmVycmFscy5kb25lKGBZb3UgZG8gbm90IGhhdmUgYW4gb3BlbiAke2Vudl8xLmRlZmF1bHQuaWRlbnRpZmllci5uYW1lfSBzbyB5b3UgYXJlIG5vdCBhYmxlIHRvIGpvaW4gdGhlIHNlcnZlci5gKTtcclxuICAgICAgICBDYW5jZWxFdmVudCgpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckpvaW5pbmdcIiwgKHNvdXJjZSkgPT4ge1xyXG4gICAgZW1pdE5ldChcImluZmFtZS5uZXRzLnBsYXllckpvaW5pbmdcIiwgc291cmNlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNlbGVjdENoYXJhY3Rlcl8xID0gcmVxdWlyZShcIkAvaW5mYW1lL3V0aWxzL2NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyXCIpO1xyXG5vbk5ldChcImluZmFtZS5uZXRzLmNoYXJhY3RlcnMuc2VsZWN0Q2hhcmFjdGVyXCIsIChjaGFyYWN0ZXJJZCkgPT4ge1xyXG4gICAgKDAsIHNlbGVjdENoYXJhY3Rlcl8xLnNlbGVjdENoYXJhY3Rlcikoc291cmNlLnRvU3RyaW5nKCksIGNoYXJhY3RlcklkKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKlxyXG4gICAgRm9yIHRoZSBtb21lbnQsIEkgZG9uJ3QgaW5jbHVkZSBhbnkgZm9ybSBvZiBiYWNrdXAgb3IgZGF0YSBsb2FkaW5nLCBJIHdhbnQgdG8gbWFrZSB0aGUgc3lzdGVtIGZ1bmN0aW9uYWwgYW5kIHRoZW4gZG8gaXQuXHJcbiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZWxlY3RDaGFyYWN0ZXIgPSB2b2lkIDA7XHJcbmNvbnN0IENIQVJBQ1RFUl9EQVRBID0ge1xyXG4gICAgaGVhbHRoOiAyMDAsXHJcbiAgICBhcm1vcjogMTAwLFxyXG4gICAgbW9kZWw6IDB4OTQ1NjJkZDcsXHJcbiAgICB3ZWFwb25zOiBbMHg1ZWY5ZmVjNCwgMHg2MjRmZTgzMF0sXHJcbiAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB6OiAwLFxyXG4gICAgfSxcclxufTtcclxuY29uc3Qgc2VsZWN0Q2hhcmFjdGVyID0gKHNvdXJjZSwgY2hhcmFjdGVySWQpID0+IHtcclxuICAgIFNldFBsYXllck1vZGVsKHNvdXJjZSwgQ0hBUkFDVEVSX0RBVEEubW9kZWwpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgSSBjb25zaWRlciB0aGlzIGNvZGUgdG8gYmUgaGVyZXN5IGJ1dCBmaXZlbSBsZWF2ZXMgbWUgbm8gY2hvaWNlXHJcbiAgICAgICAgKi9cclxuICAgICAgICBlbWl0TmV0KFwiaW5mYW1lLm5ldHMuY2hhcmFjdGVycy5zZXRIZWFsdGhcIiwgc291cmNlLCBDSEFSQUNURVJfREFUQS5oZWFsdGgpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllclBlZCA9IEdldFBsYXllclBlZChzb3VyY2UpO1xyXG4gICAgICAgIFNldFBlZEFybW91cihwbGF5ZXJQZWQsIENIQVJBQ1RFUl9EQVRBLmFybW9yKTtcclxuICAgICAgICBTZXRFbnRpdHlDb29yZHMocGxheWVyUGVkLCBDSEFSQUNURVJfREFUQS5wb3NpdGlvbi54LCBDSEFSQUNURVJfREFUQS5wb3NpdGlvbi55LCBDSEFSQUNURVJfREFUQS5wb3NpdGlvbi56LCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIFJlbW92ZUFsbFBlZFdlYXBvbnMocGxheWVyUGVkLCBmYWxzZSk7XHJcbiAgICAgICAgQ0hBUkFDVEVSX0RBVEEud2VhcG9ucy5tYXAoKHdlYXBvbikgPT4ge1xyXG4gICAgICAgICAgICBHaXZlV2VhcG9uVG9QZWQocGxheWVyUGVkLCB3ZWFwb24sIDEwMCwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDUwMCk7XHJcbn07XHJcbmV4cG9ydHMuc2VsZWN0Q2hhcmFjdGVyID0gc2VsZWN0Q2hhcmFjdGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Vudi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckNvbm5lY3RpbmcudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL2V2ZW50cy9wbGF5ZXJKb2luaW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9uZXRzL2NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS91dGlscy9jaGFyYWN0ZXJzL3NlbGVjdENoYXJhY3Rlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS91dGlscy9jaGFyYWN0ZXJzL2NoYXJhY3RlckRhdGEudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=