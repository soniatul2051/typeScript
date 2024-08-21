import  { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const menuItems = [
    "Branchwise MCQs",
    "School MCQs",
    "DSA",
    "Test",
    "Job",
    "Internship",
    "Training",
    "Videos",
    "Books",
    "Contact",
  ];

  return (
    <div className="bg-black w-64 h-screen p-4 text-white">
      <button
        className="text-white absolute right-4 top-4"
        onClick={() => alert("Close Sidebar")}
      >
        X
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleMenu(item)}
            >
              <span>{item}</span>
              <FaChevronDown
                className={`transform ${
                  openMenus[item] ? "rotate-180" : ""
                } transition-transform`}
              />
            </div>
            {openMenus[item] && (
              <ul className="pl-4 mt-2">
                <li className="py-1">Sub-item 1</li>
                <li className="py-1">Sub-item 2</li>
                <li className="py-1">Sub-item 3</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
