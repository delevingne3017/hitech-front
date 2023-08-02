import SettingsContext, { defaultValues } from "@/context/SettingsContext";
import { useContext } from "react";

export default function useSettings() {
  const context = useContext(SettingsContext);
  return context || defaultValues;
}
