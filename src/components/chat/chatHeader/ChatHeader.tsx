// src/components/chat/ChatHeader.tsx
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  chat?: {
    id: string;
    name: string;
  };
  onBack: () => void;
}

export function ChatHeader({ chat, onBack }: ChatHeaderProps) {
  return (
    <div className="flex items-center p-4 border-b">
      <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
      </Button>
      {chat && (
        <>
          <Avatar className="mr-3">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.id}`} />
            <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="font-medium">{chat.name}</h2>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}