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
      setSettings((s) => ({
        ...s,
        cart: s.cart.map((e) =>
          e._id === item._id ? { ...e, quantity: e.quantity + 1 } : e
        ),
      }));
    } else {
      setSettings((s) => ({
        ...s,
        cart:
          s.cart && s.cart.length > 0
            ? [...s.cart, { ...item, quantity: 1 }]
            : [{ ...item, quantity: 1 }],
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
    if (tmp) setSettings(tmp);
    else setSettings(defaultValues);
  }, []);

  useEffect(() => {
    if (settings.cart)
      localStorage.setItem("settings", JSON.stringify(settings.cart));
  }, [settings]);

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
