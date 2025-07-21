// src/components/chat/ChatList.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  unread: number;
}

interface ChatListProps {
  chats: Chat[];
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map(chat => (
        <div
          key={chat.id}
          className={cn(
            "flex items-center p-4 border-b cursor-pointer hover:bg-muted/50",
            selectedChat === chat.id && "bg-muted"
          )}
          onClick={() => onSelectChat(chat.id)}
        >
          <Avatar className="mr-3">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.id}`} />
            <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <h3 className="font-medium truncate">{chat.name}</h3>
              {chat.unread > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}