"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type WeaponId = "calibrum" | "severum" | "gravitum" | "infernum" | "crescendum";

interface WeaponContextProps {
  currentWeapon: WeaponId;
  setCurrentWeapon: (weapon: WeaponId) => void;
}

const WeaponContext = createContext<WeaponContextProps | undefined>(undefined);

export function WeaponProvider({ children }: { children: React.ReactNode }) {
  const [currentWeapon, setCurrentWeapon] = useState<WeaponId>("calibrum");

  useEffect(() => {
    // Update the data-weapon-theme attribute on the html element
    document.documentElement.setAttribute("data-weapon-theme", currentWeapon);
  }, [currentWeapon]);

  return (
    <WeaponContext.Provider value={{ currentWeapon, setCurrentWeapon }}>
      {children}
    </WeaponContext.Provider>
  );
}

export function useWeapon() {
  const context = useContext(WeaponContext);
  if (context === undefined) {
    throw new Error("useWeapon must be used within a WeaponProvider");
  }
  return context;
}
