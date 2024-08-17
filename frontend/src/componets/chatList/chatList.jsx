import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div id="chatList">
      <span id="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Wisebot AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span id="title">RECENT CHATS</span>
      <div id="list">
          {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          :data.map(chat=>(
            <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
              {chat.title}
          </Link>
          ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
