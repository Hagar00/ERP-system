import { NavLink, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import IconEmployees from "./iconsComponents/IconEmployees";
import IconDashboard from "./iconsComponents/IconDashboard";
import IconSettings from "./iconsComponents/IconSettings";
import IconTeams from "./iconsComponents/IconTeams";
import logo from "../assets/Group 2000004145.svg";

function ReusableSidebar({ setShowSidebar }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const [toggledSubMenu, setToggledSubMenu] = useState(false);

  const renderingItems = [
    {
      path: `/Dashboard`,
      name: "Dashboard",
      icon: <IconDashboard />,
    },
    {
      path: `/Teams`,
      name: "Teams",
      icon: <IconTeams />,
    },
    {
      path: `/Employees`,
      name: "Employees",
      icon: <IconEmployees />,
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: <IconSettings />,
      children: [
        {
          label: "My Settings",
          path: "/",
          icon: <i className="pi pi-cog text-xs"></i>,
        },
        {
          label: "My Settings",
          path: "/",
          icon: <i className="pi pi-dollar text-xs"></i>,
        },
        {
          label: "My Settings",
          path: "/",
          icon: <i className="pi pi-folder text-xs"></i>,
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-semi-Petroleum w-[15.4rem] md:reusable-sidebar sticky top-0 overflow-y-auto overflow-x-hidden text-light-white transition-all duration-500 ease-in-out lg:block lg:bg-light-text lg:p-2 ">
        <div className="flex flex-col gap-8 items-center mt-5 ">
          <div className="">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col gap-3 w-full items-center ">
            {renderingItems.map((item, index) => {
              const isActive = location.pathname
                .toLowerCase()
                .includes(item?.path?.toLowerCase());

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIcon(item.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`flex flex-col w-full items-center cursor-pointer rounded-lg py-2 transition-all duration-500 hover:bg-white hover:text-semi-Petroleum ${
                    isActive && "bg-white text-semi-Petroleum"
                  }`}
                >
                  <div
                    onClick={() => {
                      !item.children && navigate(item.path);
                      if (item.children) setToggledSubMenu(!toggledSubMenu);
                      if (!setShowSidebar) return;
                      if (!item.children) setShowSidebar(false);
                    }}
                    className="flex w-[50%]"
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="transition-colors duration-300 ">
                          {React.cloneElement(item.icon, {
                            fill:
                              hoveredIcon === item.name || isActive
                                ? "#026980"
                                : "white",
                          })}
                        </div>
                        <div className="text-p font-Poppins">{item.name}</div>
                      </div>
                      {item.children && (
                        <i
                          className={`pi ${
                            toggledSubMenu ? "pi-angle-up" : "pi-angle-down"
                          } ease transition-opacity duration-300`}
                        ></i>
                      )}
                    </div>
                  </div>

                  {item?.children && (
                    <div
                      className={`transform ${
                        toggledSubMenu ? "max-h-screen" : "max-h-0"
                      } overflow-hidden transition-all duration-300`}
                    >
                      <div className="pl-4 pt-2">
                        <div
                          className={`flex flex-col gap-2 border-l border-gray-500 pl-1`}
                        >
                          {item.children.map((child, index) => {
                            const isActiveChild = location.pathname
                              .toLowerCase()
                              .includes(child.path.toLowerCase());

                            return (
                              <NavLink
                                to={child.path}
                                key={index}
                                onClick={() => {
                                  if (!setShowSidebar) return;
                                  setShowSidebar(false);
                                }}
                                className={`side-bar-item flex items-center gap-2 rounded-lg p-2 text-sm transition-all duration-500 hover:bg-[#3B4FC426] ${
                                  isActiveChild ? "bg-[#3B4FC426]" : ""
                                }`}
                              >
                                {child?.icon}
                                {child?.label}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReusableSidebar;
