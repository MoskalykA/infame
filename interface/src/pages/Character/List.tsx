import type CharacterData from "@/types/characterData";
import { useState } from "react";
import receiveNuiEvent from "@/providers/receiveNuiEvent";
import switchToComponent from "@/providers/switchToComponent";
import sendNuiEvent from "@/providers/sendNuiEvent";

const CURRENT_COMPONENT = "characterList";
function Character() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  receiveNuiEvent(
    CURRENT_COMPONENT,
    "isReady",
    (data: { visible: boolean; characters: CharacterData[] }) => {
      setCharacters(data.characters);
    }
  );

  const back = () =>
    switchToComponent(
      CURRENT_COMPONENT,
      "characterIndex",
      {
        characters,
      },
      {
        disableCursor: true,
        enableCursor: true,
      }
    );

  const select = (id: number) => {
    sendNuiEvent(
      CURRENT_COMPONENT,
      "select",
      {
        id,
      },
      true,
      true
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between bg-zinc-900 rounded-lg w-1/2 h-1/2 p-2 border border-zinc-700">
        <div className="overflow-y-auto mb-2">
          <h1 className="text-center text-white font-primary mb-2">
            Selecting a character
          </h1>

          <div className="space-y-2">
            {characters.map((character: CharacterData) => {
              return (
                <button
                  key={character.id}
                  onClick={() => select(character.id)}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-primary rounded-lg p-2"
                >
                  {character.firstName} {character.lastName}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={back}
          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-primary rounded-lg p-2"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Character;
