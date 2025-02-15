import { create } from "zustand";

type DialogState = {
  text: string;
  guideline: string;
  options: string[];
  setText: (text: string) => void;
  setGuideline: (guideline: string) => void;
  setOptions: (options: string[]) => void;
};

export const useDialogStore = create<DialogState>()((set) => ({
  text: "",
  guideline: "",
  options: [],
  setText: (text) => set(() => ({ text })),
  setGuideline: (guideline) => set(() => ({ guideline })),
  setOptions: (options) => set(() => ({ options })),
}));
