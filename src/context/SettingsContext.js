import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

export const defaultValues = {
  cart: [],
  recentSearches: [],
  save: [],
  order: {
    page: "personalInfo",
    values: {},
  },
};

const SettingsContext = createContext(defaultValues);

export const SettingsProvider = ({ children, ...props }) => {
  const [settings, setSettings] = useState(defaultValues);

  const changeOrderPage = (page) => {
    setSettings((s) => ({
      ...s,
      order: {
        ...s.order,
        page,
      },
    }));
  };

  const onChangeOrderValue = (name, value) => {
    setSettings((s) => ({
      ...s,
      order: {
        ...s.order,
        values: {
          [name]: value,
        },
      },
    }));
  };

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
    if (tmp) {
      setSettings(JSON.parse(tmp));
    } else {
      setSettings(defaultValues);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const storedRecentSearches = localStorage.getItem("recentSearches");
    if (storedRecentSearches) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        recentSearches: JSON.parse(storedRecentSearches),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recentSearches",
      JSON.stringify(settings.recentSearches)
    );
  }, [settings.recentSearches]);
  return (
    <SettingsContext.Provider
      value={{
        settings,
        removeItemFromCart,
        addItemToCart,
        changeSettings,
        changeOrderPage,
        onChangeOrderValue,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
