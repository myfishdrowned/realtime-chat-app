import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore"; 
import { useEffect } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton"; 


const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
  } = useChatStore();



  useEffect(() => {
    if (!selectedUser?._id) return;

    getMessages(selectedUser._id);

    return () => {
      
    };
  }, [selectedUser, getMessages]); 

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center text-zinc-400">
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
