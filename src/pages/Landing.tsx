
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, BarChart3, CreditCard, Lock, Mail, Wheat, Tractor } from 'lucide-react';

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
              <Wheat className="w-8 h-8 text-green-400" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                CSMV
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white/80 font-light">
              Plataforma de Gestão do Agronegócio
            </p>
            <p className="text-lg text-white/60 max-w-md">
              Gerencie sua propriedade rural, clientes e operações agrícolas com tecnologia de ponta e interface intuitiva.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold">Gestão de Produtores</h3>
              <p className="text-white/60 text-sm">
                Cadastre e acompanhe produtores rurais, fornecedores e parceiros comerciais
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Tractor className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Operações Agrícolas</h3>
              <p className="text-white/60 text-sm">
                Controle plantio, colheita, aplicações e todos os serviços da propriedade
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold">Controle Financeiro</h3>
              <p className="text-white/60 text-sm">
                Gerencie custos de produção, receitas e fluxo de caixa da atividade rural
              </p>
            </div>

            <div className="glass-card p-6 border-white/20 space-y-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold">Relatórios & Analytics</h3>
              <p className="text-white/60 text-sm">
                Dashboards e relatórios detalhados para tomada de decisões estratégicas
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="glass-card border-white/20 w-full max-w-md">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl text-white">Acesse sua Plataforma</CardTitle>
              <CardDescription className="text-white/60">
                Entre com suas credenciais para gerenciar seu agronegócio
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
                      placeholder="seu@email.com"
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
                      placeholder="sua senha"
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
                  {isLoading ? 'Entrando...' : 'Acessar Plataforma'}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-white/40 text-sm">Credenciais de demonstração:</p>
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
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Landing;
