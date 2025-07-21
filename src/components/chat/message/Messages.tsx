// src/components/chat/Message.tsx
import { cn } from "@/lib/utils";

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: "me" | "other";
    time: string;
  };
}

export function Message({ message }: MessageProps) {
  return (
    <div
      className={cn(
        "flex",
        message.sender === "me" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-xs md:max-w-md lg:max-w-lg",
          message.sender === "me"
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        <p>{message.text}</p>
        <p
          className={cn(
            "text-xs mt-1 text-right",
            message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}