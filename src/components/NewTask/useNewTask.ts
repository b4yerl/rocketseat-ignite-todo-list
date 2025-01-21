import { useContext, useState } from "react";
import { useAppContext } from "../../../AppContext";

export function useNewTask() {
  const [isFocused, setIsFocused] = useState<boolean>();
  const [textInput, setTextInput] = useState<string>("");

  const { taskList, addTask } = useAppContext()

  const handleChanges = (text: string): void => {
    setTextInput(text);
  }

  const submitData = ():void {
    if(textInput.trim() === "") {
      return;
    }

    if( taskList.find(i => i.description == textInput) ) {
      return;
    }

    addTask(textInput);
  }

  return {
    isFocused,
    setIsFocused
  }
}