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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {


/*
  dir /s /b /o:gn
*/
RegisterCommand("infame_spawn_vehicle", (source, args, raw) => {
    /*const ped = new InfamePed(source);
    const vehicle = CreateVehicle(
      "sultan",
      ped.getX(),
      ped.getY(),
      ped.getZ(),
      ped.getYaw(),
      true,
      false
    );

    ped.setVehicle(vehicle);*/
    console.log(JSON.stringify(getPlayerIdentifiers(source)));
}, false);


/***/ }),

/***/ "./src/infame/character.ts":
/*!*********************************!*\
  !*** ./src/infame/character.ts ***!
  \*********************************/
/***/ (() => {


class InfameCharacter {
    constructor(source) {
        this.source = source;
        this.health = 100;
        this.armor = 0;
        this.money = 100;
        this.hunger = 100;
    }
}


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
    if (identifiers.includes(env_1.default.identifier.name)) {
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


/***/ }),

/***/ "./src/infame/events/playerJoining.ts":
/*!********************************************!*\
  !*** ./src/infame/events/playerJoining.ts ***!
  \********************************************/
/***/ (() => {


/*import env from "@/env";

AddEventHandler("playerJoining", (source: string, oldID: string) => {
  if (!haveIdentifier(env.requiredIdentifier, getPlayerIdentifiers(source))) {
    // Envoyer une net pour draw qu'il doit lancer discord
    return;
  }

  // Envoyer une net pour draw qu'il doit choisir son perso
});
*/


/***/ }),

/***/ "./src/infame/ped.ts":
/*!***************************!*\
  !*** ./src/infame/ped.ts ***!
  \***************************/
/***/ (() => {


class InfamePed {
    constructor(source) {
        this.source = GetPlayerPed(source.toString());
    }
    getPosition() {
        return GetEntityCoords(this.source);
    }
    getX() {
        const [x, y, z] = this.getPosition();
        return x;
    }
    getY() {
        const [x, y, z] = this.getPosition();
        return y;
    }
    getZ() {
        const [x, y, z] = this.getPosition();
        return z;
    }
    getYaw() {
        return GetEntityHeading(this.source);
    }
    setVehicle(vehicle, seatIndex = -1) {
        SetPedIntoVehicle(this.source, vehicle, -1);
    }
}


/***/ }),

/***/ "./src/infame/player.ts":
/*!******************************!*\
  !*** ./src/infame/player.ts ***!
  \******************************/
/***/ (() => {


class InfamePlayer {
    constructor(source) {
        this.source = source;
        this.ped = new InfamePed(source);
        this.character = new InfameCharacter(source);
    }
}


/***/ }),

/***/ "./src/infame/utils/identifiers.ts":
/*!*****************************************!*\
  !*** ./src/infame/utils/identifiers.ts ***!
  \*****************************************/
/***/ (() => {


function haveIdentifier(identifier, identifiers) {
    identifiers.map((identifier) => {
        if (identifier.match(identifier)) {
            return true;
        }
    });
    return false;
}


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
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	__webpack_require__("./src/infame/character.ts");
/******/ 	__webpack_require__("./src/infame/ped.ts");
/******/ 	__webpack_require__("./src/infame/player.ts");
/******/ 	__webpack_require__("./src/infame/events/playerConnecting.ts");
/******/ 	__webpack_require__("./src/infame/events/playerJoining.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infame/utils/identifiers.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNsQlk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQywyQkFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFEQUFxRCwrQkFBK0I7QUFDcEY7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNoQ1k7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7O0FDWGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Vudi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVyQ29ubmVjdGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL2V2ZW50cy9wbGF5ZXJKb2luaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvcGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvdXRpbHMvaWRlbnRpZmllcnMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7XHJcbiAgICBpZGVudGlmaWVyOiB7XHJcbiAgICAgICAgbmFtZTogXCJkaXNjb3JkXCIsXHJcbiAgICB9LFxyXG4gICAgY2hhcmFjdGVyOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBzZWxlY3Rpb25CZWZvcmVDb25uZWN0aW9uOiB0cnVlLFxyXG4gICAgfSxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qXHJcbiAgZGlyIC9zIC9iIC9vOmduXHJcbiovXHJcblJlZ2lzdGVyQ29tbWFuZChcImluZmFtZV9zcGF3bl92ZWhpY2xlXCIsIChzb3VyY2UsIGFyZ3MsIHJhdykgPT4ge1xyXG4gICAgLypjb25zdCBwZWQgPSBuZXcgSW5mYW1lUGVkKHNvdXJjZSk7XHJcbiAgICBjb25zdCB2ZWhpY2xlID0gQ3JlYXRlVmVoaWNsZShcclxuICAgICAgXCJzdWx0YW5cIixcclxuICAgICAgcGVkLmdldFgoKSxcclxuICAgICAgcGVkLmdldFkoKSxcclxuICAgICAgcGVkLmdldFooKSxcclxuICAgICAgcGVkLmdldFlhdygpLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBwZWQuc2V0VmVoaWNsZSh2ZWhpY2xlKTsqL1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZ2V0UGxheWVySWRlbnRpZmllcnMoc291cmNlKSkpO1xyXG59LCBmYWxzZSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jbGFzcyBJbmZhbWVDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hcm1vciA9IDA7XHJcbiAgICAgICAgdGhpcy5tb25leSA9IDEwMDtcclxuICAgICAgICB0aGlzLmh1bmdlciA9IDEwMDtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBlbnZfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQC9lbnZcIikpO1xyXG5BZGRFdmVudEhhbmRsZXIoXCJwbGF5ZXJDb25uZWN0aW5nXCIsIChwbGF5ZXJOYW1lLCBzZXRLaWNrUmVhc29uLCBkZWZlcnJhbHMpID0+IHtcclxuICAgIGRlZmVycmFscy5kZWZlcigpO1xyXG4gICAgY29uc3QgaWRlbnRpZmllcnMgPSBnZXRQbGF5ZXJJZGVudGlmaWVycyhzb3VyY2UpO1xyXG4gICAgaWYgKGlkZW50aWZpZXJzLmluY2x1ZGVzKGVudl8xLmRlZmF1bHQuaWRlbnRpZmllci5uYW1lKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVyZmVjdFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRlZmVycmFscy5wcmVzZW50Q2FyZCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQWRhcHRpdmVDYXJkXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRleHRCbG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiTWVkaXVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcIkJvbGRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRXJyb3IgZHVyaW5nIGNvbm5lY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUZXh0QmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgWW91IGRvIG5vdCBoYXZlIGFuIG9wZW4gJHtlbnZfMS5kZWZhdWx0LmlkZW50aWZpZXIubmFtZX0gc28geW91IGFyZSBub3QgYWJsZSB0byBqb2luIHRoZSBzZXJ2ZXIuYCxcclxuICAgICAgICAgICAgICAgICAgICB3cmFwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgJHNjaGVtYTogXCJodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuNVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qaW1wb3J0IGVudiBmcm9tIFwiQC9lbnZcIjtcclxuXHJcbkFkZEV2ZW50SGFuZGxlcihcInBsYXllckpvaW5pbmdcIiwgKHNvdXJjZTogc3RyaW5nLCBvbGRJRDogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKCFoYXZlSWRlbnRpZmllcihlbnYucmVxdWlyZWRJZGVudGlmaWVyLCBnZXRQbGF5ZXJJZGVudGlmaWVycyhzb3VyY2UpKSkge1xyXG4gICAgLy8gRW52b3llciB1bmUgbmV0IHBvdXIgZHJhdyBxdSdpbCBkb2l0IGxhbmNlciBkaXNjb3JkXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBFbnZveWVyIHVuZSBuZXQgcG91ciBkcmF3IHF1J2lsIGRvaXQgY2hvaXNpciBzb24gcGVyc29cclxufSk7XHJcbiovXHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5jbGFzcyBJbmZhbWVQZWQge1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBHZXRQbGF5ZXJQZWQoc291cmNlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIEdldEVudGl0eUNvb3Jkcyh0aGlzLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBnZXRYKCkge1xyXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6XSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuICAgIGdldFkoKSB7XHJcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfVxyXG4gICAgZ2V0WigpIHtcclxuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHo7XHJcbiAgICB9XHJcbiAgICBnZXRZYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdldEVudGl0eUhlYWRpbmcodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VmVoaWNsZSh2ZWhpY2xlLCBzZWF0SW5kZXggPSAtMSkge1xyXG4gICAgICAgIFNldFBlZEludG9WZWhpY2xlKHRoaXMuc291cmNlLCB2ZWhpY2xlLCAtMSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNsYXNzIEluZmFtZVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLnBlZCA9IG5ldyBJbmZhbWVQZWQoc291cmNlKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IG5ldyBJbmZhbWVDaGFyYWN0ZXIoc291cmNlKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gaGF2ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgaWRlbnRpZmllcnMpIHtcclxuICAgIGlkZW50aWZpZXJzLm1hcCgoaWRlbnRpZmllcikgPT4ge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyLm1hdGNoKGlkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZW52LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9jaGFyYWN0ZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL3BlZC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvcGxheWVyLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVyQ29ubmVjdGluZy50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckpvaW5pbmcudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvdXRpbHMvaWRlbnRpZmllcnMudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=