import type { CharacterData } from "@/types/characterData";
import receiveNuiEvent from "@/providers/receiveNuiEvent";
import switchToComponent from "@/providers/switchToComponent";
import { useState } from "react";

const CURRENT_COMPONENT = "characterIndex";
function Character() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  receiveNuiEvent(
    CURRENT_COMPONENT,
    "isReady",
    (data: { characters: CharacterData[] }) => {
      setCharacters(data.characters);
    }
  );

  const create = () =>
    switchToComponent(
      CURRENT_COMPONENT,
      "characterCreate",
      {
        characters,
      },
      {
        disableCursor: true,
        enableCursor: true,
      }
    );

  const select = () =>
    switchToComponent(
      CURRENT_COMPONENT,
      "characterList",
      {
        characters,
      },
      {
        disableCursor: true,
        enableCursor: true,
      }
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-zinc-900 rounded-lg w-1/2 h-1/6 p-2 border border-zinc-700">
        <h1 className="text-center text-white font-primary mb-2">
          Character system
        </h1>

        <div className="space-y-2">
          <button
            onClick={create}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-primary rounded-lg p-2"
          >
            Create a new character
          </button>

          <button
            onClick={select}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-primary rounded-lg p-2"
          >
            Select a character
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;
