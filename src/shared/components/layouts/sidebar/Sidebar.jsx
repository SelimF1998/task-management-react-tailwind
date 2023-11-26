import React from "react";
import SidebarItem from "./SidebarItem";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
  const items = {
    home: {
      title: "Home",
      path: "/",
      icon: <HomeOutlinedIcon sx={{ fontSize: 17 }} />,
    },
    profile: {
      title: "Profile",
      path: "/profile",
      icon: <PermIdentityOutlinedIcon sx={{ fontSize: 17 }} />,
    },
    boards: {
      title: "Boards",
      path: "/boards",
      icon: <LeaderboardOutlinedIcon sx={{ fontSize: 15 }} />,
    },
    settings: {
      title: "Settings",
      path: "/settings",
      icon: <SettingsOutlinedIcon sx={{ fontSize: 18 }} />,
    },
  };

  return (
    <>
      <div className="w-60 bg-sidebarColor">
        <div className="text-customGray font-medium ml-2 mt-4 text-4xl text-center">Solar</div>
        <div className="border-t mt-3 border-borderColor w-full"></div>
        <div className="text-customGray font-medium ml-2 mt-3 mb-3 text-base text-center">Selim's Workspace</div>
        <div className="border-t border-borderColor w-full"></div>
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
