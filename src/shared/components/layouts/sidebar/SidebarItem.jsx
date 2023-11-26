import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({title, path, icon}) => {
  return (
    <Link
    to={path}
    >
      <div className="flex gap-3 ml-5 ">
        <div className="text-customGray -mt-0.5 w-5 h-3">
          {icon}
        </div>
        <div className="text-customGray font-medium text-base">{title}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
