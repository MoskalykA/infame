var u={language:{type:1}};var m={youAlreadyHaveCharacter:"You already have a character",yourCharacterCreatedWithSuccess:"Your character was created with success",characterLimit:"The character limit is $$, you cannot have a new character",newCharacter:"$$ has just created a character ($$$)",playerCharacter:"$$ has just chosen a character ($$$)",selectedCharacter:"You have successfully selected a character",invalidCharacter:"This character does not exist",reselectCharacter:"You will have to choose your character again",charactersSaved:"All the characters were saved",newPlayer:"$$ has just joined",playerDisconnected:"$$ has just disconnected",noOpenSession:"You do not have an open $$ so you are not able to join the server.",impossibleAction:"It is impossible to do this",infameGameModeReloaded:"The infame game mode was reloaded",unbannedBeCareful:"You have been unbanned, please be careful.",banDetails:"You were banned for $$ by $$$ and you will be unbanned on $$$$",hospitalNotification:"You have been transported to the hospital"};var f={youAlreadyHaveCharacter:"Vous avez d\xE9j\xE0 un personnage",yourCharacterCreatedWithSuccess:"Votre personnage a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s",characterLimit:"La limite de personnages est de $$, vous ne pouvez pas en cr\xE9er un nouveau",newCharacter:"$$ vient de cr\xE9er un personnage ($$$)",playerCharacter:"$$ vient de choisir un personnage ($$$)",selectedCharacter:"Vous avez s\xE9lectionn\xE9 un personnage avec succ\xE8s",invalidCharacter:"Ce personnage n'existe pas",reselectCharacter:"Vous devrez choisir votre personnage \xE0 nouveau",charactersSaved:"Tous les personnages ont \xE9t\xE9 sauvegard\xE9s",newPlayer:"$$ vient de rejoindre",playerDisconnected:"$$ vient de se d\xE9connecter",noOpenSession:"Vous n'avez pas de session $$ ouverte, vous ne pouvez pas rejoindre le serveur.",impossibleAction:"Il est impossible de faire cela",infameGameModeReloaded:"Le mode de jeu inf\xE2me a \xE9t\xE9 recharg\xE9",unbannedBeCareful:"Vous avez \xE9t\xE9 d\xE9banni, veuillez faire attention.",banDetails:"Vous avez \xE9t\xE9 banni pour $$ par $$$, et vous serez d\xE9banni le $$$$",hospitalNotification:"Vous avez \xE9t\xE9 transport\xE9 \xE0 l'h\xF4pital"};var h=(e,t=[])=>{let a="$$",n=(u.language.type===0?m:f)[e];return t.map(v=>{n=n.replace(a,v),a=a+"$"}),n};var r={richpresence:{enabled:!0,appId:"1005150058884382721",asset:"r",assetText:"This is a lage icon with text",assetSmall:"r",assetSmallText:"This is a lsmall icon with text",firstButton:{name:"Connect me",url:"fivem://connect/localhost:30120"},secondButton:{name:"Source code",url:"https://github.com/MoskalykA/infame"},refreshInterval:6e4},death:{timeForRespawn:1e4,hospitalPosition:{x:100,y:100,z:50}}};var i=(e,t,a)=>{SendNUIMessage({moduleName:e,functionName:t,argsList:a})},s=(e,t,a)=>{RegisterNuiCallback(`${e}::${t}`,n=>{a(n)})};s("characterCreate","onDisableCursor",()=>{SetNuiFocus(!1,!1)});s("characterCreate","onEnableCursor",()=>{SetNuiFocus(!0,!0)});s("characterCreate","create",e=>{emitNet("infame.nets.characters.createCharacter",{firstName:e.firstName,lastName:e.lastName})});s("characterIndex","onDisableCursor",()=>{SetNuiFocus(!1,!1)});s("characterIndex","onEnableCursor",()=>{SetNuiFocus(!0,!0)});s("characterList","onDisableCursor",()=>{SetNuiFocus(!1,!1)});s("characterList","onEnableCursor",()=>{SetNuiFocus(!0,!0)});s("characterList","select",e=>{emitNet("infame.nets.characters.selectCharacter",e.id)});var S=e=>new Promise(t=>{let a=RequestScaleformMovie(e),n=setInterval(()=>{HasScaleformMovieLoaded(a)&&(clearInterval(n),t(a))},100)}),o=()=>{RequestScriptAudioBank("MP_WASTED",!1),SetAudioFlag("LoadMPData",!0),PlaySoundFrontend(-1,"MP_Flash","WastedSounds",!1),ShakeGameplayCam("DEATH_FAIL_IN_EFFECT_SHAKE",1),S("mp_big_message_freemode").then(e=>{BeginScaleformMovieMethod(e,"SHOW_SHARD_WASTED_MP_MESSAGE"),PushScaleformMovieFunctionParameterString("~r~Wasted"),EndScaleformMovieMethod(),setTick(()=>{DrawScaleformMovieFullscreen(e,255,255,255,255,0)}),setTimeout(()=>{SetScaleformMovieAsNoLongerNeeded(e),StopScreenEffect("DeathFailOut")},r.death.timeForRespawn)}),PlaySoundFrontend(-1,"MP_Impact","WastedSounds",!1),StartScreenEffect("DeathFailOut",0,!0)};on("baseevents:onPlayerKilled",o);on("baseevents:onPlayerDied",o);on("baseevents:onPlayerWasted",o);var d=global;var c=(e,t=()=>{})=>{d.exports.spawnmanager.spawnPlayer({x:e.x?e.x:0,y:e.y?e.y:0,z:e.z?e.z:0,model:"a_m_m_skater_01"},t)};var g=setInterval(()=>{NetworkIsPlayerActive(PlayerId())&&(clearInterval(g),c({},()=>{emitNet("infame.nets.playerConnected")}),r.richpresence.enabled&&setInterval(()=>{SetDiscordAppId(r.richpresence.appId),r.richpresence.asset&&SetDiscordRichPresenceAsset(r.richpresence.asset),r.richpresence.assetText&&SetDiscordRichPresenceAssetText(r.richpresence.assetText),r.richpresence.assetSmall&&SetDiscordRichPresenceAssetSmall(r.richpresence.assetSmall),r.richpresence.assetSmallText&&SetDiscordRichPresenceAssetSmallText(r.richpresence.assetSmallText),r.richpresence.firstButton&&SetDiscordRichPresenceAction(0,r.richpresence.firstButton.name,r.richpresence.firstButton.url),r.richpresence.secondButton&&SetDiscordRichPresenceAction(1,r.richpresence.secondButton.name,r.richpresence.secondButton.url)},r.richpresence.refreshInterval))},100);onNet("infame.nets.characters.openMenu",e=>{i("characterIndex","setVisible",{visible:!0,characters:e.characters})});var l=(e,t,a)=>{i("notification","addNotification",{type:e,text:t,time:a})};onNet("infame.nets.notifications.notification",(e,t,a)=>{l(e,t,a)});onNet("infame.nets.players.setData",e=>{let t=PlayerPedId();SetEntityHealth(t,e)});onNet("infame.nets.playerRespawned",()=>{c(r.death.hospitalPosition,()=>{l(0,h("hospitalNotification"),5e3)})});
