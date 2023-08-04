import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

const defaultValues = {
  cart: [],
  recentSearches: [],
};

const SettingsContext = createContext(defaultValues);

export const SettingsProvider = ({ children, ...props }) => {
  const [settings, setSettings] = useState({
    cart: [],
  });

  const changeSettings = (stgs) => {
    setSettings((s) => ({
      ...s,
      ...stgs,
    }));
  };

  const addItemToCart = async (item) => {
    let index =
      settings.cart && settings.cart.length > 0
        ? settings.cart.find((e) => e._id === item._id)
        : null;
    if (index) {
      const tmpCard = settings.cart.map((e) =>
        e._id === item._id ? { ...e, quantity: e.quantity + 1 } : e
      );
      localStorage.setItem("settings", JSON.stringify(tmpCard));
      setSettings((s) => ({
        ...s,
        cart: tmpCard,
      }));
    } else {
      const tmpCard =
        settings.cart && settings.cart.length > 0
          ? [...settings.cart, { ...item, quantity: 1 }]
          : [{ ...item, quantity: 1 }];
      localStorage.setItem("settings", JSON.stringify(tmpCard));
      setSettings((s) => ({
        ...s,
        cart: tmpCard,
      }));
    }
  };

  const removeItemFromCart = async (itemId) => {
    setSettings((s) => ({
      cart: s.cart.filter((e) => e._id !== itemId),
    }));
  };

  useEffect(() => {
    let tmp = localStorage.getItem("settings");
    if (tmp && tmp.length > 0) {
      setSettings(JSON.parse(tmp)); // Parse the data before setting the state
    } else {
      setSettings(defaultValues);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        removeItemFromCart,
        addItemToCart,
        changeSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
