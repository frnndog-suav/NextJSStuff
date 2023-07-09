"use client";

import { FC } from "react";

interface MenuItemProps {
  handleOnClick: () => void;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ handleOnClick, label }) => {
  return (
    <div
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={handleOnClick}>
      {label}
    </div>
  );
};

export default MenuItem;
