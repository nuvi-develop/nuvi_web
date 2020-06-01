import { useState, useEffect } from "react";

export const useTabs = () => {
  const [tab, setTab] = useState();

  return [tab, setTab];
};
