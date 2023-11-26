import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import Avatar from "../../ui/avatars/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 items-center justify-center ml-4 mr-4">
      <input
        type="text"
        placeholder="Search"
        className="input w-full max-w-xs bg-slate-800"
      />
      <div className="flex gap-4">
        <div className="text-gray-300 cursor-pointer">
          <ChatIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="text-gray-300 cursor-pointer">
          <NotificationsIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="text-gray-300 cursor-pointer">
          <HelpIcon sx={{ fontSize: 25 }} />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
