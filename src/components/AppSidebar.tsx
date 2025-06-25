import { Building2, LayoutDashboard, Users, Briefcase, DollarSign, CreditCard, LogOut } from 'lucide-react';
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
    { icon: DollarSign, label: 'Financeiro', path: '/financial' },
    { icon: CreditCard, label: 'Empréstimo', path: '/loan' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div className="lg:hidden fixed inset-0 bg-black/20 z-40"></div>
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-xl border-r border-green-200 z-50 lg:z-auto shadow-lg">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-green-200">
            <div className="flex items-center space-x-3">
              <img
                src="logo.jpg"
                alt="Logo"
                className="size-16"
              />
              <div>
                <h1 className="text-xl font-bold text-green-900">CSMV</h1>
                <p className="text-xs text-green-600">Sistema de Gestão</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-900'
                    : 'text-green-700 hover:text-green-900 hover:bg-green-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-green-200">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full flex items-center space-x-3 px-4 py-3 text-green-700 hover:text-red-700 hover:bg-red-50"
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
