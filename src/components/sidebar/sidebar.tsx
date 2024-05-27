"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Nav, NavItem } from "reactstrap";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleSubMenu = (index: any) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const pathname = usePathname();

  const renderSubMenu = (subMenuItems: any) => {
    return (
      <Nav vertical className="subMenu pl-5">
        {subMenuItems.map((subNavItem: any, subIndex: any) => (
          <NavItem key={subIndex} className="sidenav-bg p-2">
            <Link href={subNavItem.href}>
              <div className="flex items-center w-full">
                <span>
                  <i
                    className={subNavItem.icon || "bi bi-three-dots-vertical"}
                  ></i>
                </span>
                <span className="ms-3 d-inline-block text-md">
                  {subNavItem.title}
                </span>
              </div>
            </Link>
            {subNavItem.subMenu && renderSubMenu(subNavItem.subMenu)}
          </NavItem>
        ))}
      </Nav>
    );
  };

  const navigation = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "bi bi-columns-gap",
    },
    {
      title: "Generate Lead",
      href: "/generatelead",
      icon: "bi bi-file-earmark-plus",
      subMenu: [],
    },
    {
      title: "Cases",
      href: "/cases",
      icon: "bi bi-file-earmark",
      subMenu: [],
    },
    // {
    //   title: "Refer & Earn",
    //   href: "/partner/referearn/dashboard",
    //   icon: "bi bi-bar-chart",
    //   subMenu: [
    //     {
    //       title: "Dashboard",
    //       href: "/partner/referearn/dashboard",
    //     },
    //     {
    //       title: "Referrals",
    //       href: "/partner/referearn/referrals",
    //     },
    //     {
    //       title: "Invites",
    //       href: "/partner/referearn/invites",
    //     },
    //   ],
    // },
    {
      title: "Transaction",
      href: "/transaction",
      icon: "bi bi-hourglass",
      subMenu: [],
    },
  ];

  return (
    <>
      <div className="px-3 h-full flex flex-col bg-white overflow-hidden">
        <div className="pt-4 text-m-secondary-text">
          <Nav vertical className="sidebarNav">
            {navigation.map((navItem, index) => (
              <div key={index} className="pb-3">
                <NavItem
                  key={index}
                  className={`sidenav-bg py-2 px-3 outline-1 hover:outline-blue-300 rounded-r-lg hover:text-white hover:bg-m-orange ${
                    pathname == navItem.href ? "text-white bg-m-orange" : ""
                  }`}
                  onClick={() => {
                    toggleSubMenu(index);
                  }}
                >
                  <Link href={navItem.href}>
                    <div className="flex items-center w-full text-sm">
                      <span>
                        <i className={navItem.icon}></i>
                      </span>
                      <span className="ms-3 d-inline-block ">
                        {navItem.title}
                      </span>
                      <span className="ml-auto">
                        <i
                          className={`bi bi-chevron-${
                            openSubMenuIndex === index && navItem?.subMenu
                              ? "down"
                              : "right"
                          } text-xs`}
                        ></i>
                      </span>
                    </div>
                  </Link>
                </NavItem>
                {openSubMenuIndex === index &&
                  navItem?.subMenu &&
                  renderSubMenu(navItem?.subMenu)}
              </div>
            ))}
          </Nav>
        </div>
        <div className="sm:mt-auto flex justify-center items-center pb-5">
          <button className="bg-m-orange py-2 px-4 text-white text-sm rounded-sm">
            <i className="bi bi-box-arrow-right px-2"></i>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
