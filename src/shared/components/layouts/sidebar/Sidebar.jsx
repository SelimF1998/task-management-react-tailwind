import React from "react";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const items = {
    home: {
      title: "Home",
      path: "/",
      icon: <HomeIcon sx={{ fontSize: 25 }} />,
    },
    profile: {
      title: "Profile",
      path: "/profile",
      icon: <PersonIcon sx={{ fontSize: 25 }} />,
    },
    boards: {
      title: "Boards",
      path: "/boards",
      icon: <LeaderboardIcon sx={{ fontSize: 25 }} />,
    },
    settings: {
      title: "Settings",
      path: "/settings",
      icon: <SettingsIcon sx={{ fontSize: 25 }} />,
    },
  };

  return (
    <>
      <div className="w-56">
        <div className="text-green-600 font-bold ml-2 mt-4 text-4xl text-center">Solar</div>
        <div className="text-red-500 font-bold ml-2 mt-7 text-xl text-center">Workspace Name</div>
        <div className="grid gap-6 mt-10 items-center justify-center" >
          <SidebarItem {...items.home} />
          <SidebarItem {...items.profile} />
          <SidebarItem {...items.boards} />
          <SidebarItem {...items.settings} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
