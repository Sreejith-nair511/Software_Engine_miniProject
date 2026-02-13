'use client';

import { Search, Bell, Settings, Menu, LogOut } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

interface NavbarProps {
  onMenuClick: () => void;
}

export function DashboardNavbar({ onMenuClick }: NavbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="border-b border-border bg-card shadow-sm transition-colors duration-300">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left side - Menu and search */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs bg-muted border border-border rounded-lg px-4 py-2 hover:bg-input transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Right side - Notifications and profile */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Notifications */}
          <button className="relative p-2 hover:bg-muted rounded-lg transition-colors group">
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-muted rounded-lg transition-colors group">
            <Settings className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <span className="hidden sm:block text-sm font-medium text-foreground">John Dev</span>
            </button>

            {/* Profile menu */}
            {showProfileMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 card-elevated rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">John Developer</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
                <div className="p-2 space-y-1">
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-red-600 rounded-lg transition-colors">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
