import React from "react";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Avatar from "../../ui/avatars/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between h-16 items-center ml-4 mr-4">
      <input
        type="text"
        placeholder="Search"
        className="input w-full max-w-xs bg-inputsInside text-white"
      />
      <div className="flex gap-4">
        <div className="text-gray-300 cursor-pointer">
          <ChatOutlinedIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="text-gray-300 cursor-pointer">
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="text-gray-300 cursor-pointer">
          <HelpOutlineOutlinedIcon sx={{ fontSize: 25 }} />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
