
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ShoppingCart, 
  Users, 
  BarChart2, 
  Settings,
  ChevronRight,
  LogOut,
  X,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, isMobile }) => {
  const location = useLocation();
  
  // Navigation items
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Products', path: '/products', icon: ShoppingBag },
    { name: 'Orders', path: '/orders', icon: ShoppingCart },
    { name: 'Customers', path: '/customers', icon: Users },
    { name: 'Analytics', path: '/analytics', icon: BarChart2 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  // Animation variants
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  // Handle close sidebar on mobile
  const handleCloseSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={handleCloseSidebar}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      )}

      {/* Sidebar */}
      <motion.div
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 bottom-0 w-64 bg-sidebar text-sidebar-foreground z-50 flex flex-col",
          "border-r border-sidebar-border transition-transform"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-sidebar-border">
          <Link to="/" className="flex items-center space-x-2" onClick={handleCloseSidebar}>
            <span className="font-bold text-xl tracking-tight text-white">Commerce<span className="text-blue-400">Keeper</span></span>
          </Link>
          {isMobile && (
            <button 
              onClick={handleCloseSidebar}
              className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleCloseSidebar}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all",
                  "group hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/70"
                )}
              >
                <item.icon size={18} className={cn(
                  "transition-transform group-hover:scale-110",
                  isActive ? "text-sidebar-primary" : "text-sidebar-foreground/70"
                )} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="ml-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} className="text-sidebar-primary" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <button className="flex items-center space-x-3 w-full px-3 py-2.5 rounded-lg transition-all text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
