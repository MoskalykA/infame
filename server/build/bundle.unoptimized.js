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
onNet("infame.nets.characters.selectCharacter", (data) => {
    (0, selectCharacter_1.selectCharacter)(source.toString(), data.id);
});


/***/ }),

/***/ "./src/infame/types/notificationType.ts":
/*!**********************************************!*\
  !*** ./src/infame/types/notificationType.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Success"] = 0] = "Success";
    NotificationType[NotificationType["Error"] = 1] = "Error";
})(NotificationType || (NotificationType = {}));
exports.NotificationType = NotificationType;


/***/ }),

/***/ "./src/infame/utils/addNotification.ts":
/*!*********************************************!*\
  !*** ./src/infame/utils/addNotification.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addNotification = void 0;
const addNotification = (type, text, time) => {
    emitNet("infame.nets.notifications.notification", source, type, text, time);
};
exports.addNotification = addNotification;


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*
    For the moment, I don't include any form of backup or data loading, I want to make the system functional and then do it.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectCharacter = void 0;
const notificationType_1 = __webpack_require__(/*! @/infame/types/notificationType */ "./src/infame/types/notificationType.ts");
const addNotification_1 = __webpack_require__(/*! @/infame/utils/addNotification */ "./src/infame/utils/addNotification.ts");
const characters = [
    {
        id: 0,
        health: 200,
        armor: 100,
        model: 0x94562dd7,
        weapons: [0x5ef9fec4, 0x624fe830],
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
    },
    {
        id: 1,
        health: 175,
        armor: 0,
        model: 0x94562dd7,
        weapons: [0x5ef9fec4, 0x624fe830],
        position: {
            x: 0,
            y: 0,
            z: 0,
        },
    },
];
const selectCharacter = (source, characterId) => {
    const player = Player(source);
    if (player.state.characterId) {
        (0, addNotification_1.addNotification)(notificationType_1.NotificationType.Error, "You already have a character", 5000);
        return;
    }
    const character = characters.find((character) => character.id == characterId);
    if (character) {
        (0, addNotification_1.addNotification)(notificationType_1.NotificationType.Success, "You have successfully selected a character", 5000);
        player.state.characterId = characterId;
        SetPlayerModel(source, character.model);
        setTimeout(() => {
            /*
                I consider this code to be heresy but fivem leaves me no choice
            */
            emitNet("infame.nets.characters.setData", source, character.health);
            const playerPed = GetPlayerPed(source);
            SetPedArmour(playerPed, character.armor);
            SetEntityCoords(playerPed, character.position.x, character.position.y, character.position.z, true, false, false, true);
            RemoveAllPedWeapons(playerPed, false);
            character.weapons.map((weapon) => {
                GiveWeaponToPed(playerPed, weapon, 100, false, false);
            });
        }, 500);
    }
    else {
        (0, addNotification_1.addNotification)(notificationType_1.NotificationType.Error, "This character does not exist", 5000);
    }
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
/******/ 	__webpack_require__("./src/infame/utils/characters/characterData.ts");
/******/ 	__webpack_require__("./src/infame/utils/addNotification.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/types/notificationType.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QixtQkFBTyxDQUFDLDJCQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELCtCQUErQjtBQUNqRjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNoQlk7QUFDYjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNIWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsbUJBQU8sQ0FBQyxtR0FBMkM7QUFDN0U7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDTFk7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0Q0FBNEM7QUFDN0Msd0JBQXdCOzs7Ozs7Ozs7OztBQ1JYO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7Ozs7Ozs7Ozs7O0FDTlY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QiwyQkFBMkIsbUJBQU8sQ0FBQywrRUFBaUM7QUFDcEUsMEJBQTBCLG1CQUFPLENBQUMsNkVBQWdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOzs7Ozs7O1VDL0R2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW52LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckNvbm5lY3RpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVySm9pbmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL25ldHMvY2hhcmFjdGVycy9zZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS90eXBlcy9ub3RpZmljYXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvYWRkTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvY2hhcmFjdGVycy9zZWxlY3RDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBpZGVudGlmaWVyOiB7XHJcbiAgICAgICAgbmFtZTogXCJkaXNjb3JkXCIsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGVudl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAL2VudlwiKSk7XHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckNvbm5lY3RpbmdcIiwgKHBsYXllck5hbWUsIHNldEtpY2tSZWFzb24sIGRlZmVycmFscykgPT4ge1xyXG4gICAgZGVmZXJyYWxzLmRlZmVyKCk7XHJcbiAgICBjb25zdCBpZGVudGlmaWVycyA9IGdldFBsYXllcklkZW50aWZpZXJzKHNvdXJjZSk7XHJcbiAgICBpZiAoaWRlbnRpZmllcnMuZmluZEluZGV4KChpZGVudGlmaWVyKSA9PiBpZGVudGlmaWVyLnN0YXJ0c1dpdGgoZW52XzEuZGVmYXVsdC5pZGVudGlmaWVyLm5hbWUpKSA+IC0xKSB7XHJcbiAgICAgICAgZGVmZXJyYWxzLmRvbmUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRlZmVycmFscy5kb25lKGBZb3UgZG8gbm90IGhhdmUgYW4gb3BlbiAke2Vudl8xLmRlZmF1bHQuaWRlbnRpZmllci5uYW1lfSBzbyB5b3UgYXJlIG5vdCBhYmxlIHRvIGpvaW4gdGhlIHNlcnZlci5gKTtcclxuICAgICAgICBDYW5jZWxFdmVudCgpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckpvaW5pbmdcIiwgKHNvdXJjZSkgPT4ge1xyXG4gICAgZW1pdE5ldChcImluZmFtZS5uZXRzLnBsYXllckpvaW5pbmdcIiwgc291cmNlKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNlbGVjdENoYXJhY3Rlcl8xID0gcmVxdWlyZShcIkAvaW5mYW1lL3V0aWxzL2NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyXCIpO1xyXG5vbk5ldChcImluZmFtZS5uZXRzLmNoYXJhY3RlcnMuc2VsZWN0Q2hhcmFjdGVyXCIsIChkYXRhKSA9PiB7XHJcbiAgICAoMCwgc2VsZWN0Q2hhcmFjdGVyXzEuc2VsZWN0Q2hhcmFjdGVyKShzb3VyY2UudG9TdHJpbmcoKSwgZGF0YS5pZCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk5vdGlmaWNhdGlvblR5cGUgPSB2b2lkIDA7XHJcbnZhciBOb3RpZmljYXRpb25UeXBlO1xyXG4oZnVuY3Rpb24gKE5vdGlmaWNhdGlvblR5cGUpIHtcclxuICAgIE5vdGlmaWNhdGlvblR5cGVbTm90aWZpY2F0aW9uVHlwZVtcIlN1Y2Nlc3NcIl0gPSAwXSA9IFwiU3VjY2Vzc1wiO1xyXG4gICAgTm90aWZpY2F0aW9uVHlwZVtOb3RpZmljYXRpb25UeXBlW1wiRXJyb3JcIl0gPSAxXSA9IFwiRXJyb3JcIjtcclxufSkoTm90aWZpY2F0aW9uVHlwZSB8fCAoTm90aWZpY2F0aW9uVHlwZSA9IHt9KSk7XHJcbmV4cG9ydHMuTm90aWZpY2F0aW9uVHlwZSA9IE5vdGlmaWNhdGlvblR5cGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYWRkTm90aWZpY2F0aW9uID0gdm9pZCAwO1xyXG5jb25zdCBhZGROb3RpZmljYXRpb24gPSAodHlwZSwgdGV4dCwgdGltZSkgPT4ge1xyXG4gICAgZW1pdE5ldChcImluZmFtZS5uZXRzLm5vdGlmaWNhdGlvbnMubm90aWZpY2F0aW9uXCIsIHNvdXJjZSwgdHlwZSwgdGV4dCwgdGltZSk7XHJcbn07XHJcbmV4cG9ydHMuYWRkTm90aWZpY2F0aW9uID0gYWRkTm90aWZpY2F0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLypcclxuICAgIEZvciB0aGUgbW9tZW50LCBJIGRvbid0IGluY2x1ZGUgYW55IGZvcm0gb2YgYmFja3VwIG9yIGRhdGEgbG9hZGluZywgSSB3YW50IHRvIG1ha2UgdGhlIHN5c3RlbSBmdW5jdGlvbmFsIGFuZCB0aGVuIGRvIGl0LlxyXG4qL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2VsZWN0Q2hhcmFjdGVyID0gdm9pZCAwO1xyXG5jb25zdCBub3RpZmljYXRpb25UeXBlXzEgPSByZXF1aXJlKFwiQC9pbmZhbWUvdHlwZXMvbm90aWZpY2F0aW9uVHlwZVwiKTtcclxuY29uc3QgYWRkTm90aWZpY2F0aW9uXzEgPSByZXF1aXJlKFwiQC9pbmZhbWUvdXRpbHMvYWRkTm90aWZpY2F0aW9uXCIpO1xyXG5jb25zdCBjaGFyYWN0ZXJzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIGhlYWx0aDogMjAwLFxyXG4gICAgICAgIGFybW9yOiAxMDAsXHJcbiAgICAgICAgbW9kZWw6IDB4OTQ1NjJkZDcsXHJcbiAgICAgICAgd2VhcG9uczogWzB4NWVmOWZlYzQsIDB4NjI0ZmU4MzBdLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHo6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaGVhbHRoOiAxNzUsXHJcbiAgICAgICAgYXJtb3I6IDAsXHJcbiAgICAgICAgbW9kZWw6IDB4OTQ1NjJkZDcsXHJcbiAgICAgICAgd2VhcG9uczogWzB4NWVmOWZlYzQsIDB4NjI0ZmU4MzBdLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIHo6IDAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbl07XHJcbmNvbnN0IHNlbGVjdENoYXJhY3RlciA9IChzb3VyY2UsIGNoYXJhY3RlcklkKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBQbGF5ZXIoc291cmNlKTtcclxuICAgIGlmIChwbGF5ZXIuc3RhdGUuY2hhcmFjdGVySWQpIHtcclxuICAgICAgICAoMCwgYWRkTm90aWZpY2F0aW9uXzEuYWRkTm90aWZpY2F0aW9uKShub3RpZmljYXRpb25UeXBlXzEuTm90aWZpY2F0aW9uVHlwZS5FcnJvciwgXCJZb3UgYWxyZWFkeSBoYXZlIGEgY2hhcmFjdGVyXCIsIDUwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYXJhY3RlciA9IGNoYXJhY3RlcnMuZmluZCgoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuaWQgPT0gY2hhcmFjdGVySWQpO1xyXG4gICAgaWYgKGNoYXJhY3Rlcikge1xyXG4gICAgICAgICgwLCBhZGROb3RpZmljYXRpb25fMS5hZGROb3RpZmljYXRpb24pKG5vdGlmaWNhdGlvblR5cGVfMS5Ob3RpZmljYXRpb25UeXBlLlN1Y2Nlc3MsIFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNlbGVjdGVkIGEgY2hhcmFjdGVyXCIsIDUwMDApO1xyXG4gICAgICAgIHBsYXllci5zdGF0ZS5jaGFyYWN0ZXJJZCA9IGNoYXJhY3RlcklkO1xyXG4gICAgICAgIFNldFBsYXllck1vZGVsKHNvdXJjZSwgY2hhcmFjdGVyLm1vZGVsKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIEkgY29uc2lkZXIgdGhpcyBjb2RlIHRvIGJlIGhlcmVzeSBidXQgZml2ZW0gbGVhdmVzIG1lIG5vIGNob2ljZVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBlbWl0TmV0KFwiaW5mYW1lLm5ldHMuY2hhcmFjdGVycy5zZXREYXRhXCIsIHNvdXJjZSwgY2hhcmFjdGVyLmhlYWx0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclBlZCA9IEdldFBsYXllclBlZChzb3VyY2UpO1xyXG4gICAgICAgICAgICBTZXRQZWRBcm1vdXIocGxheWVyUGVkLCBjaGFyYWN0ZXIuYXJtb3IpO1xyXG4gICAgICAgICAgICBTZXRFbnRpdHlDb29yZHMocGxheWVyUGVkLCBjaGFyYWN0ZXIucG9zaXRpb24ueCwgY2hhcmFjdGVyLnBvc2l0aW9uLnksIGNoYXJhY3Rlci5wb3NpdGlvbi56LCB0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICBSZW1vdmVBbGxQZWRXZWFwb25zKHBsYXllclBlZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIud2VhcG9ucy5tYXAoKHdlYXBvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgR2l2ZVdlYXBvblRvUGVkKHBsYXllclBlZCwgd2VhcG9uLCAxMDAsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAoMCwgYWRkTm90aWZpY2F0aW9uXzEuYWRkTm90aWZpY2F0aW9uKShub3RpZmljYXRpb25UeXBlXzEuTm90aWZpY2F0aW9uVHlwZS5FcnJvciwgXCJUaGlzIGNoYXJhY3RlciBkb2VzIG5vdCBleGlzdFwiLCA1MDAwKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zZWxlY3RDaGFyYWN0ZXIgPSBzZWxlY3RDaGFyYWN0ZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZW52LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVyQ29ubmVjdGluZy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckpvaW5pbmcudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL25ldHMvY2hhcmFjdGVycy9zZWxlY3RDaGFyYWN0ZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL3V0aWxzL2NoYXJhY3RlcnMvc2VsZWN0Q2hhcmFjdGVyLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS91dGlscy9jaGFyYWN0ZXJzL2NoYXJhY3RlckRhdGEudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL3V0aWxzL2FkZE5vdGlmaWNhdGlvbi50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS90eXBlcy9ub3RpZmljYXRpb25UeXBlLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9