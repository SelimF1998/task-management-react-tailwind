import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import SortDropdown from "../dropdowns/sort-dropdown/SortDropdown";

const HomeNavbar = () => {
  const options = [
    { title: "Most Recent Activity" },
    { title: "Oldest Activity" },
    { title: "In alphabetical order, A-Z" },
    { title: "In alphabetical order, Z-A" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="sort">
            <div className="dropdown-label text-customGray font-medium">Sort By:</div>
            <SortDropdown />
          </div>
          <h1>Dropdown 2</h1>
        </div>
        <h1>Search Bar</h1>
      </div>
    </>
  );
};

export default HomeNavbar;
