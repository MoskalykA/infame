/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/infame/events/character/create.ts":
/*!***********************************************!*\
  !*** ./src/infame/events/character/create.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
(0, interface_1.registerAction)("characterCreate", "onDisableCursor", () => {
    SetNuiFocus(false, false);
});
(0, interface_1.registerAction)("characterCreate", "onEnableCursor", () => {
    SetNuiFocus(true, true);
});
(0, interface_1.registerAction)("characterCreate", "create", (characterData) => {
    console.log(characterData.firstName, characterData.lastName);
});


/***/ }),

/***/ "./src/infame/events/character/index.ts":
/*!**********************************************!*\
  !*** ./src/infame/events/character/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
(0, interface_1.registerAction)("characterIndex", "onDisableCursor", () => {
    SetNuiFocus(false, false);
});
(0, interface_1.registerAction)("characterIndex", "onEnableCursor", () => {
    SetNuiFocus(true, true);
});


/***/ }),

/***/ "./src/infame/events/character/list.ts":
/*!*********************************************!*\
  !*** ./src/infame/events/character/list.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
(0, interface_1.registerAction)("characterList", "onDisableCursor", () => {
    SetNuiFocus(false, false);
});
(0, interface_1.registerAction)("characterList", "onEnableCursor", () => {
    SetNuiFocus(true, true);
});
(0, interface_1.registerAction)("characterList", "select", (id) => {
    emitNet("infame.nets.characters.selectCharacter", id);
});


/***/ }),

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

/***/ "./src/infame/nets/notifications/notification.ts":
/*!*******************************************************!*\
  !*** ./src/infame/nets/notifications/notification.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
onNet("infame.nets.notifications.notification", (type, text, time) => {
    (0, interface_1.sendAction)("notification", "addNotification", {
        type,
        text,
        time,
    });
});


/***/ }),

/***/ "./src/infame/nets/playerJoining.ts":
/*!******************************************!*\
  !*** ./src/infame/nets/playerJoining.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const global_1 = __importDefault(__webpack_require__(/*! @/infame/types/global */ "./src/infame/types/global.ts"));
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
onNet("infame.nets.playerJoining", () => {
    global_1.default.exports.spawnmanager.spawnPlayer({
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01",
    }, () => {
        (0, interface_1.sendAction)("characterIndex", "setVisible", {
            visible: true,
            characters: [
                {
                    id: 0,
                    firstName: "Arthur",
                    lastName: "Kriss",
                },
                {
                    id: 1,
                    firstName: "Victor",
                    lastName: "Kriss",
                },
            ],
        });
    });
    // TODO: Managing player death
});
RegisterCommand("open", () => {
    (0, interface_1.sendAction)("characterIndex", "setVisible", {
        visible: true,
        characters: [
            {
                id: 0,
                firstName: "Arthur",
                lastName: "Kriss",
            },
            {
                id: 1,
                firstName: "Victor",
                lastName: "Kriss",
            },
        ],
    });
}, false);


/***/ }),

/***/ "./src/infame/types/global.ts":
/*!************************************!*\
  !*** ./src/infame/types/global.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = __webpack_require__.g;


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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addNotification = void 0;
const interface_1 = __webpack_require__(/*! @/infame/utils/interface */ "./src/infame/utils/interface.ts");
const addNotification = (type, text, time) => {
    (0, interface_1.sendAction)("notification", "addNotification", {
        type,
        text,
        time,
    });
};
exports.addNotification = addNotification;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/infame/nets/playerJoining.ts");
/******/ 	__webpack_require__("./src/infame/nets/characters/setData.ts");
/******/ 	__webpack_require__("./src/infame/nets/notifications/notification.ts");
/******/ 	__webpack_require__("./src/infame/events/character/index.ts");
/******/ 	__webpack_require__("./src/infame/events/character/list.ts");
/******/ 	__webpack_require__("./src/infame/events/character/create.ts");
/******/ 	__webpack_require__("./src/infame/utils/interface.ts");
/******/ 	__webpack_require__("./src/infame/utils/addNotification.ts");
/******/ 	__webpack_require__("./src/infame/types/global.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/types/notificationType.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL2V2ZW50cy9jaGFyYWN0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9ldmVudHMvY2hhcmFjdGVyL2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9uZXRzL2NoYXJhY3RlcnMvc2V0RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL25ldHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9uZXRzL3BsYXllckpvaW5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS90eXBlcy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS90eXBlcy9ub3RpZmljYXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvYWRkTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiQC9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlXCIpO1xyXG4oMCwgaW50ZXJmYWNlXzEucmVnaXN0ZXJBY3Rpb24pKFwiY2hhcmFjdGVyQ3JlYXRlXCIsIFwib25EaXNhYmxlQ3Vyc29yXCIsICgpID0+IHtcclxuICAgIFNldE51aUZvY3VzKGZhbHNlLCBmYWxzZSk7XHJcbn0pO1xyXG4oMCwgaW50ZXJmYWNlXzEucmVnaXN0ZXJBY3Rpb24pKFwiY2hhcmFjdGVyQ3JlYXRlXCIsIFwib25FbmFibGVDdXJzb3JcIiwgKCkgPT4ge1xyXG4gICAgU2V0TnVpRm9jdXModHJ1ZSwgdHJ1ZSk7XHJcbn0pO1xyXG4oMCwgaW50ZXJmYWNlXzEucmVnaXN0ZXJBY3Rpb24pKFwiY2hhcmFjdGVyQ3JlYXRlXCIsIFwiY3JlYXRlXCIsIChjaGFyYWN0ZXJEYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJEYXRhLmZpcnN0TmFtZSwgY2hhcmFjdGVyRGF0YS5sYXN0TmFtZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcmZhY2VfMSA9IHJlcXVpcmUoXCJAL2luZmFtZS91dGlscy9pbnRlcmZhY2VcIik7XHJcbigwLCBpbnRlcmZhY2VfMS5yZWdpc3RlckFjdGlvbikoXCJjaGFyYWN0ZXJJbmRleFwiLCBcIm9uRGlzYWJsZUN1cnNvclwiLCAoKSA9PiB7XHJcbiAgICBTZXROdWlGb2N1cyhmYWxzZSwgZmFsc2UpO1xyXG59KTtcclxuKDAsIGludGVyZmFjZV8xLnJlZ2lzdGVyQWN0aW9uKShcImNoYXJhY3RlckluZGV4XCIsIFwib25FbmFibGVDdXJzb3JcIiwgKCkgPT4ge1xyXG4gICAgU2V0TnVpRm9jdXModHJ1ZSwgdHJ1ZSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbnRlcmZhY2VfMSA9IHJlcXVpcmUoXCJAL2luZmFtZS91dGlscy9pbnRlcmZhY2VcIik7XHJcbigwLCBpbnRlcmZhY2VfMS5yZWdpc3RlckFjdGlvbikoXCJjaGFyYWN0ZXJMaXN0XCIsIFwib25EaXNhYmxlQ3Vyc29yXCIsICgpID0+IHtcclxuICAgIFNldE51aUZvY3VzKGZhbHNlLCBmYWxzZSk7XHJcbn0pO1xyXG4oMCwgaW50ZXJmYWNlXzEucmVnaXN0ZXJBY3Rpb24pKFwiY2hhcmFjdGVyTGlzdFwiLCBcIm9uRW5hYmxlQ3Vyc29yXCIsICgpID0+IHtcclxuICAgIFNldE51aUZvY3VzKHRydWUsIHRydWUpO1xyXG59KTtcclxuKDAsIGludGVyZmFjZV8xLnJlZ2lzdGVyQWN0aW9uKShcImNoYXJhY3Rlckxpc3RcIiwgXCJzZWxlY3RcIiwgKGlkKSA9PiB7XHJcbiAgICBlbWl0TmV0KFwiaW5mYW1lLm5ldHMuY2hhcmFjdGVycy5zZWxlY3RDaGFyYWN0ZXJcIiwgaWQpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qXHJcbiAgSSBjb25zaWRlciB0aGlzIGNvZGUgdG8gYmUgaGVyZXN5IGJ1dCBmaXZlbSBsZWF2ZXMgbWUgbm8gY2hvaWNlXHJcbiovXHJcbm9uTmV0KFwiaW5mYW1lLm5ldHMuY2hhcmFjdGVycy5zZXREYXRhXCIsIChoZWFsdGgsIGFybW9yKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJQZWQgPSBQbGF5ZXJQZWRJZCgpO1xyXG4gICAgU2V0RW50aXR5SGVhbHRoKHBsYXllclBlZCwgaGVhbHRoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGludGVyZmFjZV8xID0gcmVxdWlyZShcIkAvaW5mYW1lL3V0aWxzL2ludGVyZmFjZVwiKTtcclxub25OZXQoXCJpbmZhbWUubmV0cy5ub3RpZmljYXRpb25zLm5vdGlmaWNhdGlvblwiLCAodHlwZSwgdGV4dCwgdGltZSkgPT4ge1xyXG4gICAgKDAsIGludGVyZmFjZV8xLnNlbmRBY3Rpb24pKFwibm90aWZpY2F0aW9uXCIsIFwiYWRkTm90aWZpY2F0aW9uXCIsIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdGltZSxcclxuICAgIH0pO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZ2xvYmFsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkAvaW5mYW1lL3R5cGVzL2dsb2JhbFwiKSk7XHJcbmNvbnN0IGludGVyZmFjZV8xID0gcmVxdWlyZShcIkAvaW5mYW1lL3V0aWxzL2ludGVyZmFjZVwiKTtcclxub25OZXQoXCJpbmZhbWUubmV0cy5wbGF5ZXJKb2luaW5nXCIsICgpID0+IHtcclxuICAgIGdsb2JhbF8xLmRlZmF1bHQuZXhwb3J0cy5zcGF3bm1hbmFnZXIuc3Bhd25QbGF5ZXIoe1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB6OiAwLFxyXG4gICAgICAgIG1vZGVsOiBcImFfbV9tX3NrYXRlcl8wMVwiLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICgwLCBpbnRlcmZhY2VfMS5zZW5kQWN0aW9uKShcImNoYXJhY3RlckluZGV4XCIsIFwic2V0VmlzaWJsZVwiLCB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiQXJ0aHVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IFwiS3Jpc3NcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlZpY3RvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIktyaXNzXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBUT0RPOiBNYW5hZ2luZyBwbGF5ZXIgZGVhdGhcclxufSk7XHJcblJlZ2lzdGVyQ29tbWFuZChcIm9wZW5cIiwgKCkgPT4ge1xyXG4gICAgKDAsIGludGVyZmFjZV8xLnNlbmRBY3Rpb24pKFwiY2hhcmFjdGVySW5kZXhcIiwgXCJzZXRWaXNpYmxlXCIsIHtcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoYXJhY3RlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiQXJ0aHVyXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJLcmlzc1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJWaWN0b3JcIixcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIktyaXNzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG59LCBmYWxzZSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Ob3RpZmljYXRpb25UeXBlID0gdm9pZCAwO1xyXG52YXIgTm90aWZpY2F0aW9uVHlwZTtcclxuKGZ1bmN0aW9uIChOb3RpZmljYXRpb25UeXBlKSB7XHJcbiAgICBOb3RpZmljYXRpb25UeXBlW05vdGlmaWNhdGlvblR5cGVbXCJTdWNjZXNzXCJdID0gMF0gPSBcIlN1Y2Nlc3NcIjtcclxuICAgIE5vdGlmaWNhdGlvblR5cGVbTm90aWZpY2F0aW9uVHlwZVtcIkVycm9yXCJdID0gMV0gPSBcIkVycm9yXCI7XHJcbn0pKE5vdGlmaWNhdGlvblR5cGUgfHwgKE5vdGlmaWNhdGlvblR5cGUgPSB7fSkpO1xyXG5leHBvcnRzLk5vdGlmaWNhdGlvblR5cGUgPSBOb3RpZmljYXRpb25UeXBlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmFkZE5vdGlmaWNhdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgaW50ZXJmYWNlXzEgPSByZXF1aXJlKFwiQC9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlXCIpO1xyXG5jb25zdCBhZGROb3RpZmljYXRpb24gPSAodHlwZSwgdGV4dCwgdGltZSkgPT4ge1xyXG4gICAgKDAsIGludGVyZmFjZV8xLnNlbmRBY3Rpb24pKFwibm90aWZpY2F0aW9uXCIsIFwiYWRkTm90aWZpY2F0aW9uXCIsIHtcclxuICAgICAgICB0eXBlLFxyXG4gICAgICAgIHRleHQsXHJcbiAgICAgICAgdGltZSxcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLmFkZE5vdGlmaWNhdGlvbiA9IGFkZE5vdGlmaWNhdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZWdpc3RlckFjdGlvbiA9IGV4cG9ydHMuc2VuZEFjdGlvbiA9IHZvaWQgMDtcclxuY29uc3Qgc2VuZEFjdGlvbiA9IChtb2R1bGVOYW1lLCBmdW5jdGlvbk5hbWUsIGFyZ3NMaXN0KSA9PiB7XHJcbiAgICBTZW5kTlVJTWVzc2FnZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZSxcclxuICAgICAgICBmdW5jdGlvbk5hbWUsXHJcbiAgICAgICAgYXJnc0xpc3QsXHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy5zZW5kQWN0aW9uID0gc2VuZEFjdGlvbjtcclxuY29uc3QgcmVnaXN0ZXJBY3Rpb24gPSAobW9kdWxlTmFtZSwgZnVuY3Rpb25OYW1lLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgUmVnaXN0ZXJOdWlDYWxsYmFjayhgJHttb2R1bGVOYW1lfTo6JHtmdW5jdGlvbk5hbWV9YCwgKGRhdGEpID0+IHtcclxuICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnJlZ2lzdGVyQWN0aW9uID0gcmVnaXN0ZXJBY3Rpb247XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvbmV0cy9wbGF5ZXJKb2luaW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9uZXRzL2NoYXJhY3RlcnMvc2V0RGF0YS50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvbmV0cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvZXZlbnRzL2NoYXJhY3Rlci9pbmRleC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvZXZlbnRzL2NoYXJhY3Rlci9saXN0LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9ldmVudHMvY2hhcmFjdGVyL2NyZWF0ZS50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvdXRpbHMvaW50ZXJmYWNlLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS91dGlscy9hZGROb3RpZmljYXRpb24udHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL3R5cGVzL2dsb2JhbC50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS90eXBlcy9ub3RpZmljYXRpb25UeXBlLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9