"use client";

import { createContext, useContext, useState } from "react";

type BreadcrumbContextType = {
  title?: string;
  setTitle: (title?: string) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  setTitle: () => {},
});

export const useBreadcrumb = () => useContext(BreadcrumbContext);

export function BreadcrumbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [title, setTitle] = useState<string | undefined>(undefined);

  return (
    <BreadcrumbContext.Provider value={{ title, setTitle }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
