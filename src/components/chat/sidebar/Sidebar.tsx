// src/components/chat/Sidebar.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

export function Sidebar() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Chaty</h1>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search chats..." className="pl-9" />
      </div>
    </div>
  );
}