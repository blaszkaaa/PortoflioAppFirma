
import React from 'react';
import { Bell, Search, Menu, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="w-full h-16 flex items-center justify-between px-4 border-b border-border bg-card z-10">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="focus:outline-none"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        
        <div className="relative hidden md:flex items-center">
          <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-9 w-64 bg-secondary/50 border-0 focus-visible:ring-1" 
          />
        </div>
      </div>
      
      {/* Right section */}
      <div className="flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleTheme}
          className="focus:outline-none"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="relative focus:outline-none"
            >
              <Bell className="h-5 w-5" />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-xs font-semibold">3</span>
              </motion.div>
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4">
              <h3 className="font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">You have 3 unread messages</p>
            </div>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-y-auto">
              {[1, 2, 3].map((i) => (
                <DropdownMenuItem key={i} className="p-4 focus:bg-accent cursor-pointer">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i}.jpg`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">New order #{1000 + i}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        A new order has been placed by Customer {i}.
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        5 min ago
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="p-2 focus:bg-accent cursor-pointer flex justify-center">
              <span className="text-sm text-primary">View all notifications</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center space-x-2 focus:outline-none"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@example.com</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="p-2">
              <p className="text-sm font-medium leading-none">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@example.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
