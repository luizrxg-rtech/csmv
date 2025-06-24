
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total de Clientes',
      value: '284',
      change: '+12%',
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Serviços Ativos',
      value: '47',
      change: '+3%',
      icon: Briefcase,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Receita Mensal',
      value: 'R$ 45.280',
      change: '+8%',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Crescimento',
      value: '23%',
      change: '+5%',
      icon: TrendingUp,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Visão geral do seu negócio</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="glass-card border-green-200/40 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} em relação ao mês anterior
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card border-green-200/40">
            <CardHeader>
              <CardTitle className="text-gray-900">Atividades Recentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { action: 'Novo cliente cadastrado', client: 'João Silva', time: '2 min' },
                { action: 'Serviço finalizado', client: 'Maria Santos', time: '15 min' },
                { action: 'Pagamento recebido', client: 'Pedro Costa', time: '1 hora' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/60 border border-green-200/50 rounded-lg">
                  <div>
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-gray-600 text-sm">{activity.client}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{activity.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-card border-green-200/40">
            <CardHeader>
              <CardTitle className="text-gray-900">Próximos Vencimentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { service: 'CPR - Bradesco S.A', client: 'Empresa ABC', value: 'R$ 2.500', date: '25/06' },
                { service: 'Consultoria Fiscal', client: 'Tech Corp', value: 'R$ 1.800', date: '27/06' },
                { service: 'Auditoria Interna', client: 'Indústria XYZ', value: 'R$ 5.200', date: '30/06' },
              ].map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/60 border border-green-200/50 rounded-lg">
                  <div>
                    <p className="text-gray-900 font-medium">{payment.service}</p>
                    <p className="text-gray-600 text-sm">{payment.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-medium">{payment.value}</p>
                    <p className="text-gray-500 text-sm">{payment.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
