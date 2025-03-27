"use client"
import React, { useState } from 'react';
import { 
  Search, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Smile 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DashboardNav from '@/app/_components/dashboard/Nav';

// Types for strong typing
interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isActive?: boolean;
}

interface Message {
  id: number;
  sender: 'me' | 'contact';
  text: string;
  timestamp: string;
}

// Sample data
const chatContacts: ChatContact[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    avatar: "/api/placeholder/200/200",
    lastMessage: "Sure, let's schedule the meeting",
    timestamp: "10:30 AM",
    unreadCount: 2,
    isActive: true
  },
  {
    id: 2,
    name: "Alex Thompson",
    avatar: "/api/placeholder/200/200",
    lastMessage: "I'll send the project details soon",
    timestamp: "9:45 AM",
    unreadCount: 1
  },
  {
    id: 3,
    name: "Sarah Chen",
    avatar: "/api/placeholder/200/200",
    lastMessage: "Thanks for the feedback!",
    timestamp: "Yesterday",
    unreadCount: 0
  }
];

const sampleMessages: Message[] = [
  {
    id: 1,
    sender: 'contact',
    text: "Hi there! Can we discuss the upcoming project?",
    timestamp: "10:25 AM"
  },
  {
    id: 2,
    sender: 'me',
    text: "Sure, I'm available. What details would you like to go over?",
    timestamp: "10:27 AM"
  },
  {
    id: 3,
    sender: 'contact',
    text: "I wanted to discuss the timeline and resource allocation.",
    timestamp: "10:30 AM"
  }
];

const ChatSidebar: React.FC<{
  contacts: ChatContact[];
  selectedContactId: number | null;
  onContactSelect: (id: number) => void;
}> = ({ contacts, selectedContactId, onContactSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-96 border-r bg-white h-full">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search chats" 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-150px)]">
        {filteredContacts.map(contact => (
          <div 
            key={contact.id}
            className={`
              flex items-center p-4 cursor-pointer hover:bg-gray-50 
              ${selectedContactId === contact.id ? 'bg-blue-50' : ''}
            `}
            onClick={() => onContactSelect(contact.id)}
          >
            <Avatar className="w-12 h-12 mr-4">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{contact.name}</h3>
                <span className="text-xs text-gray-500">{contact.timestamp}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 truncate max-w-[200px]">
                  {contact.lastMessage}
                </p>
                {contact.unreadCount && contact.unreadCount > 0 ? (
                  <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {contact.unreadCount}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatWindow: React.FC<{
  contact: ChatContact | null;
  messages: Message[];
}> = ({ contact, messages }) => {
  const [newMessage, setNewMessage] = useState('');

  if (!contact) {
    return (
      <div className="flex-grow flex items-center justify-center bg-gray-50 text-gray-500">
        Select a chat to begin conversation
      </div>
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you'd send this to your backend
      setNewMessage('');
    }
  };

  return (
    <div className="flex-grow flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <Avatar className="w-12 h-12 mr-4">
            <AvatarImage src={contact.avatar} alt={contact.name} />
            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{contact.name}</h3>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical />
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`
                max-w-[70%] p-3 rounded-lg 
                ${message.sender === 'me' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-black'}
              `}
            >
              {message.text}
              <div className="text-xs mt-1 opacity-70 text-right">
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Paperclip />
        </Button>
        <Button variant="ghost" size="icon">
          <Smile />
        </Button>
        <Input 
          placeholder="Type a message" 
          className="flex-grow"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button 
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          <Send className="mr-2" size={18} /> Send
        </Button>
      </div>
    </div>
  );
};

export default function DashboardMessages() {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);

  const selectedContact = selectedContactId 
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    ? chatContacts.find(contact => contact.id === selectedContactId) || null
    : null;

  return (
    <main className="p-6 bg-gray-50 min-h-screen h-screen overflow-y-hidden bg w-full">
      <nav>
        <DashboardNav />
      </nav>
      <div className="flex flex-grow ml-4">
        <ChatSidebar 
          contacts={chatContacts}
          selectedContactId={selectedContactId}
          onContactSelect={setSelectedContactId}
        />
        <ChatWindow 
          contact={selectedContact} 
          messages={sampleMessages}
        />
      </div>
    </main>
  );
}