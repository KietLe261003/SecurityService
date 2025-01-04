import React, { SetStateAction } from "react";
import { IconComment, IconHistory, IconOrder, IconPayment, IconProfile, IconSignOut } from "../../../Commom/Icon";
interface SlideBarProps{
    setContent: React.Dispatch<SetStateAction<string>>
}
const SlideBar:React.FC<SlideBarProps> = ({setContent}) => {
    const ListOption=[
        {
            name: "Trang cá nhân",
            icon: <IconProfile/>
        },
        {
            name: "Đơn hàng",
            icon: <IconOrder/>
        },
        {
            name: "Thanh toán",
            icon: <IconPayment/>
        },
        {
            name: "Đánh giá",
            icon: <IconComment/>
        },
        {
            name: "Lịch sử",
            icon: <IconHistory/>
        },
        {
            name: "Đăng xuất",
            icon: <IconSignOut/>
        }
    ]
    return (
        <aside
        id="default-sidebar"
        className=" w-64 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {
                ListOption.map((item,index)=>{
                    return <li key={index}>
                    <a
                      onClick={()=>{setContent(item.name)}}
                      className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      {item.icon}
                      <span className="ms-3">{item.name}</span>
                    </a>
                  </li>
                })
            }
          </ul>
        </div>
      </aside>
    );
};

export default SlideBar;