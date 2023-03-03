import type { CharacterData } from "@/types/characterData";
import { useInput } from "@/utils/useInput";
import { useState } from "react";
import Input from "@/components/Input";
import receiveNuiEvent from "@/providers/receiveNuiEvent";
import sendNuiEvent from "@/providers/sendNuiEvent";
import switchToComponent from "@/providers/switchToComponent";
import toast from "react-hot-toast";

const CURRENT_COMPONENT = "characterCreate";
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

  const firstName = useInput("");
  const lastName = useInput("");
  const create = () => {
    if (firstName.value.length <= 0) {
      toast.error("You need to fill in a first name", {
        duration: 5000,
        position: "bottom-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      return;
    } else if (lastName.value.length <= 0) {
      toast.error("You need to fill in a last name", {
        duration: 5000,
        position: "bottom-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      return;
    }

    sendNuiEvent(
      "characterCreate",
      "create",
      {
        firstName: firstName.value,
        lastName: lastName.value,
      },
      true,
      true
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between bg-zinc-900 rounded-lg w-1/2 h-1/2 p-2 border border-zinc-700">
        <div className="flex flex-col space-y-2">
          <h1 className="text-center text-white font-primary">
            Creating a character
          </h1>

          <Input {...firstName} label="First Name" placeholder="Guillermo" />
          <Input {...lastName} label="Last Name" placeholder="Rauch" />
        </div>

        <div className="flex justify-center space-x-2">
          <button
            onClick={create}
            className="text-white font-primary bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg"
          >
            Creating the character
          </button>

          <button
            onClick={back}
            className="text-white font-primary bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Character;
