import React from "react";
import { IoMdStar } from "react-icons/io";

import { LuPencil } from "react-icons/lu";
import { TbSend2 } from "react-icons/tb";
import {
  MdInbox,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineWatchLater,
} from "react-icons/md";

const sidebarItems = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"20px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"20px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"20px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"20px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center gap-3 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-sm">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      <div className="text-gray-600">
        {sidebarItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center pl-6 py-1 rounded-r-full gap-4 hover:cursor-pointer hover:bg-gray-200 text-md"
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
