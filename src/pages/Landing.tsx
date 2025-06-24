
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Hero Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wheat className="w-8 h-8 text-green-600" />
              <h1 className="text-4xl lg:text-6xl font-bold text-green-900">
                CSMV
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-green-800 font-light">
              Solução White-Label para Agronegócio
            </p>
            <p className="text-lg text-green-700 max-w-md">
              Plataforma completa e personalizável para gestão do agronegócio, adaptável às necessidades da sua empresa.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-green-200/40 space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-green-900 font-semibold">Gestão de Produtores</h3>
              <p className="text-green-700 text-sm">
                Cadastre e acompanhe produtores rurais, fornecedores e parceiros comerciais
              </p>
            </div>

            <div className="glass-card p-6 border-green-200/40 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Tractor className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-green-900 font-semibold">Operações Agrícolas</h3>
              <p className="text-green-700 text-sm">
                Controle plantio, colheita, aplicações e todos os serviços da propriedade
              </p>
            </div>

            <div className="glass-card p-6 border-green-200/40 space-y-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-green-900 font-semibold">Controle Financeiro</h3>
              <p className="text-green-700 text-sm">
                Gerencie custos de produção, receitas e fluxo de caixa da atividade rural
              </p>
            </div>

            <div className="glass-card p-6 border-green-200/40 space-y-3">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="text-green-900 font-semibold">Relatórios & Analytics</h3>
              <p className="text-green-700 text-sm">
                Dashboards e relatórios detalhados para tomada de decisões estratégicas
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="glass-card border-green-200/40 w-full max-w-md">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl text-green-900">Acesse sua Plataforma</CardTitle>
              <CardDescription className="text-green-700">
                Entre com suas credenciais para gerenciar seu agronegócio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-green-800 text-sm">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass border-green-200/50 text-green-900 placeholder:text-green-500 pl-10 bg-white/80"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-green-800 text-sm">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                    <Input
                      type="password"
                      placeholder="sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="glass border-green-200/50 text-green-900 placeholder:text-green-500 pl-10 bg-white/80"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
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
                  <p className="text-green-600 text-sm">Credenciais de demonstração:</p>
                  <p className="text-green-700 text-xs">
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
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Landing;
