import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css"
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../componets/chatList/chatList";

const DashboardLayout = () => {
    const {userId, isLoaded} = useAuth();
    //navigate hook
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoaded && !userId) {
            //重定向到登陆界面
            navigate("/login");
        }
    },[isLoaded, userId, navigate])

    if(!isLoaded) return "Loading...";

    return (
        <div className="dashboardLayout">
          <div className="menu"><ChatList/></div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      );
};

export default DashboardLayout;