
import { useState } from "react";
import { Home, Users, Briefcase, DollarSign, LogOut, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Serviços", url: "/services", icon: Briefcase },
  { title: "Clientes", url: "/clients", icon: Users },
  { title: "Financeiro", url: "/financial", icon: DollarSign },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <div className={cn(
        "fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out",
        collapsed ? "-translate-x-full lg:translate-x-0 lg:w-20" : "translate-x-0 w-80 lg:w-64"
      )}>
        <div className="h-full glass-card border-r border-white/10 flex flex-col">
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            {!collapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">BusinessApp</h2>
                </div>
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="text-white/70 hover:text-white hover:bg-white/10 lg:hidden"
            >
              {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-white" 
                      : "text-white/70 hover:text-white hover:bg-white/5",
                    collapsed && "justify-center"
                  )}
                  onClick={() => setCollapsed(true)}
                >
                  <item.icon className={cn("w-5 h-5", isActive && "text-blue-400")} />
                  {!collapsed && <span className="font-medium">{item.title}</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* User Profile & Logout */}
          <div className="p-4 border-t border-white/10 space-y-4">
            {!collapsed && user && (
              <div className="flex items-center space-x-3 px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{user.name}</p>
                  <p className="text-white/60 text-xs truncate">{user.email}</p>
                </div>
              </div>
            )}
            
            <Button
              variant="ghost"
              onClick={handleLogout}
              className={cn(
                "w-full text-white/70 hover:text-white hover:bg-red-500/20 transition-colors",
                collapsed ? "px-2" : "justify-start"
              )}
            >
              <LogOut className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Sair</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(false)}
        className="fixed top-4 left-4 z-40 lg:hidden glass-card border-white/20 text-white"
      >
        <Menu className="w-5 h-5" />
      </Button>
    </>
  );
}
