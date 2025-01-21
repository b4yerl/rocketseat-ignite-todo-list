import React, { createContext, ReactNode, useContext, useState } from "react";
import Task from "./src/interfaces/Task";

interface AppContextType {
  taskList: Array<Task>
  addTask: (value: string) => void
  removeTask: (value: string) => void
  updateTaskState: (value: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const addTask = (value: string): void => setTaskList((prevState) => [...prevState, { description: value, done: false }]);
  const removeTask = (value: string): void => setTaskList((prevState) => prevState.filter(i => i.description !== value));
  const updateTaskState = (value: string): void => setTaskList((prevState) => prevState.map(i => i.description === value ? { description: i.description, done: !i.done }: i));

  return(
    <AppContext.Provider value={{ taskList, addTask, removeTask, updateTaskState }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};