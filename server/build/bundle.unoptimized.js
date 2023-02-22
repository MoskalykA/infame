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
    requiredIdentifier: "discord",
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
AddEventHandler("playerConnecting", (playerName, setKickReason, deferrals, source) => {
    if (env_1.default.character.enabled) {
        console.log(playerName);
        if (env_1.default.character.selectionBeforeConnection) {
            setKickReason("setKickReason");
        }
        else {
            setKickReason("test");
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1JhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNsQlk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEIsbUJBQU8sQ0FBQywyQkFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDaEJZO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7OztBQ1hhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvY2hhcmFjdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvZXZlbnRzL3BsYXllckNvbm5lY3RpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVySm9pbmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL3BlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mYW1lL3V0aWxzL2lkZW50aWZpZXJzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0ge1xyXG4gICAgcmVxdWlyZWRJZGVudGlmaWVyOiBcImRpc2NvcmRcIixcclxuICAgIGNoYXJhY3Rlcjoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgc2VsZWN0aW9uQmVmb3JlQ29ubmVjdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKlxyXG4gIGRpciAvcyAvYiAvbzpnblxyXG4qL1xyXG5SZWdpc3RlckNvbW1hbmQoXCJpbmZhbWVfc3Bhd25fdmVoaWNsZVwiLCAoc291cmNlLCBhcmdzLCByYXcpID0+IHtcclxuICAgIC8qY29uc3QgcGVkID0gbmV3IEluZmFtZVBlZChzb3VyY2UpO1xyXG4gICAgY29uc3QgdmVoaWNsZSA9IENyZWF0ZVZlaGljbGUoXHJcbiAgICAgIFwic3VsdGFuXCIsXHJcbiAgICAgIHBlZC5nZXRYKCksXHJcbiAgICAgIHBlZC5nZXRZKCksXHJcbiAgICAgIHBlZC5nZXRaKCksXHJcbiAgICAgIHBlZC5nZXRZYXcoKSxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgcGVkLnNldFZlaGljbGUodmVoaWNsZSk7Ki9cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdldFBsYXllcklkZW50aWZpZXJzKHNvdXJjZSkpKTtcclxufSwgZmFsc2UpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY2xhc3MgSW5mYW1lQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYXJtb3IgPSAwO1xyXG4gICAgICAgIHRoaXMubW9uZXkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5odW5nZXIgPSAxMDA7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZW52XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkAvZW52XCIpKTtcclxuQWRkRXZlbnRIYW5kbGVyKFwicGxheWVyQ29ubmVjdGluZ1wiLCAocGxheWVyTmFtZSwgc2V0S2lja1JlYXNvbiwgZGVmZXJyYWxzLCBzb3VyY2UpID0+IHtcclxuICAgIGlmIChlbnZfMS5kZWZhdWx0LmNoYXJhY3Rlci5lbmFibGVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyTmFtZSk7XHJcbiAgICAgICAgaWYgKGVudl8xLmRlZmF1bHQuY2hhcmFjdGVyLnNlbGVjdGlvbkJlZm9yZUNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgc2V0S2lja1JlYXNvbihcInNldEtpY2tSZWFzb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRLaWNrUmVhc29uKFwidGVzdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyppbXBvcnQgZW52IGZyb20gXCJAL2VudlwiO1xyXG5cclxuQWRkRXZlbnRIYW5kbGVyKFwicGxheWVySm9pbmluZ1wiLCAoc291cmNlOiBzdHJpbmcsIG9sZElEOiBzdHJpbmcpID0+IHtcclxuICBpZiAoIWhhdmVJZGVudGlmaWVyKGVudi5yZXF1aXJlZElkZW50aWZpZXIsIGdldFBsYXllcklkZW50aWZpZXJzKHNvdXJjZSkpKSB7XHJcbiAgICAvLyBFbnZveWVyIHVuZSBuZXQgcG91ciBkcmF3IHF1J2lsIGRvaXQgbGFuY2VyIGRpc2NvcmRcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIEVudm95ZXIgdW5lIG5ldCBwb3VyIGRyYXcgcXUnaWwgZG9pdCBjaG9pc2lyIHNvbiBwZXJzb1xyXG59KTtcclxuKi9cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNsYXNzIEluZmFtZVBlZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IEdldFBsYXllclBlZChzb3VyY2UudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBnZXRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gR2V0RW50aXR5Q29vcmRzKHRoaXMuc291cmNlKTtcclxuICAgIH1cclxuICAgIGdldFgoKSB7XHJcbiAgICAgICAgY29uc3QgW3gsIHksIHpdID0gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG4gICAgZ2V0WSgpIHtcclxuICAgICAgICBjb25zdCBbeCwgeSwgel0gPSB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9XHJcbiAgICBnZXRaKCkge1xyXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6XSA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICByZXR1cm4gejtcclxuICAgIH1cclxuICAgIGdldFlhdygpIHtcclxuICAgICAgICByZXR1cm4gR2V0RW50aXR5SGVhZGluZyh0aGlzLnNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBzZXRWZWhpY2xlKHZlaGljbGUsIHNlYXRJbmRleCA9IC0xKSB7XHJcbiAgICAgICAgU2V0UGVkSW50b1ZlaGljbGUodGhpcy5zb3VyY2UsIHZlaGljbGUsIC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY2xhc3MgSW5mYW1lUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMucGVkID0gbmV3IEluZmFtZVBlZChzb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEluZmFtZUNoYXJhY3Rlcihzb3VyY2UpO1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBoYXZlSWRlbnRpZmllcihpZGVudGlmaWVyLCBpZGVudGlmaWVycykge1xyXG4gICAgaWRlbnRpZmllcnMubWFwKChpZGVudGlmaWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIubWF0Y2goaWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9lbnYudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL2NoYXJhY3Rlci50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmZhbWUvcGVkLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9wbGF5ZXIudHNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5mYW1lL2V2ZW50cy9wbGF5ZXJDb25uZWN0aW5nLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS9ldmVudHMvcGxheWVySm9pbmluZy50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZmFtZS91dGlscy9pZGVudGlmaWVycy50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==