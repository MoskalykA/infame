/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./src/infame/nets/playerJoining.ts ***!
  \******************************************/

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

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************************!*\
  !*** ./src/infame/nets/characters/setData.ts ***!
  \***********************************************/

/*
  I consider this code to be heresy but fivem leaves me no choice
*/
onNet("infame.nets.characters.setData", (health, armor) => {
    const playerPed = PlayerPedId();
    SetEntityHealth(playerPed, health);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnVub3B0aW1pemVkLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7Ozs7OztBQ1BZO0FBQ2I7QUFDQTtBQUNBLElBQUkscUJBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7O0FDYlk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvbmV0cy9wbGF5ZXJKb2luaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZhbWUvbmV0cy9jaGFyYWN0ZXJzL3NldERhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbm9uTmV0KFwiaW5mYW1lLm5ldHMucGxheWVySm9pbmluZ1wiLCAoKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBnbG9iYWwuZXhwb3J0cy5zcGF3bm1hbmFnZXIuc3Bhd25QbGF5ZXIoe1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB6OiAwLFxyXG4gICAgICAgIG1vZGVsOiBcImFfbV9tX3NrYXRlcl8wMVwiLFxyXG4gICAgfSwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFRPRE86IERpc3BsYXkgYSBtZW51IGZvciBjaGFyYWN0ZXIgc2VsZWN0aW9uXHJcbiAgICAgICAgZW1pdE5ldChcImluZmFtZS5uZXRzLmNoYXJhY3RlcnMuc2VsZWN0Q2hhcmFjdGVyXCIsIDApO1xyXG4gICAgfSk7XHJcbiAgICAvLyBUT0RPOiBNYW5hZ2luZyBwbGF5ZXIgZGVhdGhcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKlxyXG4gIEkgY29uc2lkZXIgdGhpcyBjb2RlIHRvIGJlIGhlcmVzeSBidXQgZml2ZW0gbGVhdmVzIG1lIG5vIGNob2ljZVxyXG4qL1xyXG5vbk5ldChcImluZmFtZS5uZXRzLmNoYXJhY3RlcnMuc2V0RGF0YVwiLCAoaGVhbHRoLCBhcm1vcikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyUGVkID0gUGxheWVyUGVkSWQoKTtcclxuICAgIFNldEVudGl0eUhlYWx0aChwbGF5ZXJQZWQsIGhlYWx0aCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=