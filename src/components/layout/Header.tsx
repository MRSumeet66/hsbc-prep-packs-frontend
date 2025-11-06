
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { User, Home, ShoppingBag, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface HeaderProps {
  showRefreshButton?: boolean;
}

export const Header = ({ showRefreshButton }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[rgb(255,230,230)] backdrop-blur supports-[backdrop-filter]:bg-[rgb(255,230,230)]/95">
      <div className="container max-w-full mx-auto flex h-16 items-center px-2 sm:px-4">
        <div className="flex flex-1 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/HSBC_Logo_2018.png" 
              alt="HSBC Logo" 
              className="h-6 sm:h-7 md:h-8 w-auto"
            />
            <span className="font-semibold text-sm sm:text-base md:text-lg hidden sm:inline-block">  CMB D&A - Customer Pack</span>
          </div>

          {/* Navigation and Actions - Aligned Right */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Navigation Links - Hidden on mobile, visible on desktop */}
            <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "flex items-center transition-colors hover:text-primary py-2 relative group",
                    isActive ? "text-primary font-semibold" : "text-foreground/70"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Home className="w-4 h-4 mr-2" />
                    <span>Home</span>
                    {isActive && <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary" />}
                  </>
                )}
              </NavLink>
              <NavLink
                to="/marketplace"
                className={({ isActive }) =>
                  cn(
                    "flex items-center transition-colors hover:text-primary py-2 relative group",
                    isActive ? "text-primary font-semibold" : "text-foreground/70"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span>Marketplace</span>
                    {isActive && <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary" />}
                  </>
                )}
              </NavLink>
            </div>

            {/* Notification Button */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="hidden sm:inline-block text-xs md:text-sm">Iman</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-destructive">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu - Visible only on mobile */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Mobile menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        cn(
                          "flex items-center transition-colors hover:text-primary py-2",
                          isActive ? "text-primary font-semibold" : "text-foreground/70"
                        )
                      }
                    >
                      <Home className="w-4 h-4 mr-3" />
                      <span>Home</span>
                    </NavLink>
                    <NavLink
                      to="/marketplace"
                      className={({ isActive }) =>
                        cn(
                          "flex items-center transition-colors hover:text-primary py-2",
                          isActive ? "text-primary font-semibold" : "text-foreground/70"
                        )
                      }
                    >
                      <ShoppingBag className="w-4 h-4 mr-3" />
                      <span>Marketplace</span>
                    </NavLink>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
