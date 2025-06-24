
import { Building2, LayoutDashboard, Users, Briefcase, DollarSign, LogOut } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const AppSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Briefcase, label: 'Serviços', path: '/services' },
    { icon: Users, label: 'Clientes', path: '/clients' },
    { icon: DollarSign, label: 'Financeiro', path: '/financial' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div className="lg:hidden fixed inset-0 bg-black/50 z-40"></div>
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-xl border-r border-white/10 z-50 lg:z-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CSMV</h1>
                <p className="text-xs text-white/60">Sistema de Gestão</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 animate-fade-in ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full flex items-center space-x-3 px-4 py-3 text-white/70 hover:text-white hover:bg-red-500/10 hover:border-red-500/30"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair do Sistema</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
