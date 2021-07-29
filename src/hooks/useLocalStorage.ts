import { useState } from "react";
import { useToast } from "@chakra-ui/react";

type TReturn<Type> = [Type, (new_value: Type) => void];

function useLocalStorage<Type>(key: string, initialValue: Type): TReturn<Type> {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value == null) {
        throw new Error("Invalid value from local storage");
      }
      const parsedValue = JSON.parse(value);
      if (typeof parsedValue == typeof initialValue) {
        return parsedValue as Type;
      } else return initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const toast = useToast({
    title: "Ups! Try again later...",
    status: "error",
    isClosable: true,
    // duration: 5000 default
  });

  const setLocalStorage = (value: Type) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (err) {
      toast({ description: err.message });
    }
  };

  return [storedValue, setLocalStorage];
}

export default useLocalStorage;
