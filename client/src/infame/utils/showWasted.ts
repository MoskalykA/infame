import { env } from "@/env";
import global from "@/infame/types/global";

const loadScaleform = (scaleform: string) => {
  return new Promise((resolve) => {
    const scaleformHandle: number = RequestScaleformMovie(scaleform);

    const load = setInterval(() => {
      if (HasScaleformMovieLoaded(scaleformHandle)) {
        clearInterval(load);
        resolve(scaleformHandle);
      }
    }, 100);
  });
};

export const showWasted = () => {
  RequestScriptAudioBank("MP_WASTED", false);
  SetAudioFlag("LoadMPData", true);

  PlaySoundFrontend(-1, "MP_Flash", "WastedSounds", false);
  ShakeGameplayCam("DEATH_FAIL_IN_EFFECT_SHAKE", 1);

  loadScaleform("mp_big_message_freemode").then((scaleform: any) => {
    BeginScaleformMovieMethod(scaleform, "SHOW_SHARD_WASTED_MP_MESSAGE");
    PushScaleformMovieFunctionParameterString("~r~Wasted");
    EndScaleformMovieMethod();

    setTick(() => {
      DrawScaleformMovieFullscreen(scaleform, 255, 255, 255, 255, 0);
    });

    setTimeout(() => {
      SetScaleformMovieAsNoLongerNeeded(scaleform);
      StopScreenEffect("DeathFailOut");

      global.exports.spawnmanager.spawnPlayer(
        {
          x: 0,
          y: 0,
          z: 0,
          model: "a_m_m_skater_01",
        },
        () => {
          emitNet("infame.nets.playerConnected");
        }
      );
    }, env.death.timeForRespawn);
  });

  PlaySoundFrontend(-1, "MP_Impact", "WastedSounds", false);
  StartScreenEffect("DeathFailOut", 0, true);
};
