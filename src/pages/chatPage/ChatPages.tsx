// src/pages/ChatPage.tsx
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sidebar } from "@/components/chat/Sidebar";
import { ChatList } from "@/components/chat/ChatList";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatInput } from "@/components/chat/ChatInput";
import { Message } from "@/components/chat/Message";

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  // Sample data
  const chats = [
    { id: "1", name: "John Doe", lastMessage: "Hey, how are you?", unread: 2 },
    { id: "2", name: "Jane Smith", lastMessage: "Meeting at 3pm", unread: 0 },
    { id: "3", name: "Team Group", lastMessage: "Alice: I'll be late", unread: 5 },
  ];

  const messages = selectedChat
    ? [
        { id: "1", text: "Hey there!", sender: "other", time: "10:30 AM" },
        { id: "2", text: "How are you doing?", sender: "other", time: "10:31 AM" },
        { id: "3", text: "I'm good, thanks!", sender: "me", time: "10:35 AM" },
      ]
    : [];

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    if (isMobile) setSidebarOpen(false);
  };

  const handleBackToChats = () => {
    setSelectedChat(null);
    if (isMobile) setSidebarOpen(true);
  };

  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "flex" : "hidden"} md:flex w-full md:w-80 lg:w-96 flex-col border-r bg-background`}
      >
        <Sidebar />
        <ChatList chats={chats} onSelectChat={handleChatSelect} selectedChat={selectedChat} />
      </div>

      {/* Main Chat Area */}
      <div className={`${!sidebarOpen || !isMobile ? "flex" : "hidden"} flex-1 flex-col`}>
        {selectedChat ? (
          <>
            <ChatHeader chat={chats.find(c => c.id === selectedChat)} onBack={handleBackToChats} />
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <Message key={message.id} message={message} />
              ))}
            </div>
            <ChatInput onSend={(text) => console.log("Sending:", text)} />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-muted/50">
            <div className="text-center p-6 max-w-md">
              <h2 className="text-xl font-semibold mb-2">No chat selected</h2>
              <p className="text-muted-foreground">
                {isMobile ? "Tap on a chat to start messaging" : "Select a chat from the sidebar to start messaging"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed bottom-4 right-4 md:hidden z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {sidebarOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}