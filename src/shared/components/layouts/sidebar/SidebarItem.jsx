import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const SidebarItem = ({title, path, icon}) => {
  return (
    <Link
    to={path}
    >
      <div className="flex gap-3 ml-5 transition-transform transform hover:bg-gray-600 hover:p-3 hover:scale-105">
        <div className="text-gray-300 -mt-0.5">
          {icon}
        </div>
        <div className="text-gray-300 font-bold text-xl">{title}</div>
      </div>
    </Link>
  );
};

export default SidebarItem;
