
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, BarChart3, CreditCard, Lock, Mail } from 'lucide-react';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Email ou senha incorretos');
      }
    } catch (error) {
      setError('Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                CSMV
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white/80 font-light">
              Sistema de Gestão Empresarial
            </p>
            <p className="text-lg text-white/60 max-w-md">
              Gerencie seus serviços, clientes e finanças em uma plataforma moderna e intuitiva.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Gestão de Clientes</h3>
              <p className="text-white/60 text-sm">
                Organize e gerencie sua base de clientes de forma eficiente
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold">Controle de Serviços</h3>
              <p className="text-white/60 text-sm">
                Acompanhe o progresso e status de todos os seus serviços
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold">Gestão Financeira</h3>
              <p className="text-white/60 text-sm">
                Controle completo do fluxo de caixa e contas a pagar/receber
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold">Seguro & Confiável</h3>
              <p className="text-white/60 text-sm">
                Seus dados protegidos com tecnologia de ponta
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="glass-card border-white/20 w-full max-w-md">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl text-white">Bem-vindo ao CSMV</CardTitle>
              <CardDescription className="text-white/60">
                Entre com suas credenciais para acessar o sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white/70 text-sm">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-white/40 pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/70 text-sm">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-white/40 pl-10"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full glass-button h-12 text-base font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Entrar no Sistema'}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-white/40 text-sm">Credenciais de teste:</p>
                  <p className="text-white/60 text-xs">
                    Email: admin@example.com | Senha: password
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Landing;
