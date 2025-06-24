
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const services = [
    {
      id: '006349',
      client: 'Jair Ronaldo Vicente',
      company: 'Bradesco S.A',
      service: 'CPR',
      description: 'Cliente está pleiteando um crédito de R$ 650.000,00',
      status: 'Em Análise',
      value: 'R$ 650.000,00',
      serviceValue: 'R$ 13.000,00',
      date: '30/05/2025',
      days: 25,
      priority: 'high',
      progress: 45
    },
    {
      id: '006348',
      client: 'Dioclécio',
      company: 'Bradesco S.A',
      service: 'CPR',
      description: 'Cliente está pleiteando 640.000,00',
      status: 'Em acolhimento',
      value: 'R$ 640.000,00',
      serviceValue: 'R$ 13.000,00',
      date: '30/05/2025',
      days: 25,
      priority: 'medium',
      progress: 60
    },
    {
      id: '006214',
      client: 'Kamila Luisa Costa',
      company: 'Bradesco S.A',
      service: 'Crédito Rural',
      description: 'Emissão de CAR',
      status: 'Em acolhimento',
      value: 'R$ 100,00',
      serviceValue: 'R$ 2,00',
      date: '27/05/2025',
      days: 28,
      priority: 'low',
      progress: 10
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'em análise': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'em acolhimento': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'finalizado': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-white">Serviços</h1>
            <p className="text-white/70">Gerencie todos os seus serviços</p>
          </div>
          <div className="flex space-x-3">
            <Button className="glass-button">
              <Plus className="w-4 h-4 mr-2" />
              Cadastrar Serviços
            </Button>
            <Button variant="outline" className="glass border-orange-500/30 text-orange-300 hover:bg-orange-500/20">
              ⚠ Impedimentos
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="glass-card border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-white/70 text-sm mb-2 block">Cliente</label>
                <Input 
                  placeholder="Buscar cliente..." 
                  className="glass border-white/20 text-white placeholder:text-white/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">Empresa</label>
                <Select>
                  <SelectTrigger className="glass border-white/20 text-white">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="bradesco">Bradesco S.A</SelectItem>
                    <SelectItem value="nordeste">Nordeste S.A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">Status</label>
                <Select>
                  <SelectTrigger className="glass border-white/20 text-white">
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="analise">Em Análise</SelectItem>
                    <SelectItem value="acolhimento">Em acolhimento</SelectItem>
                    <SelectItem value="finalizado">Finalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-white/70 text-sm mb-2 block">Tipo Serviço</label>
                <Select>
                  <SelectTrigger className="glass border-white/20 text-white">
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="cpr">CPR</SelectItem>
                    <SelectItem value="credito">Crédito Rural</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button className="glass-button">
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Services List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Serviços Filtrado por: <span className="text-blue-400">3 Registros</span>
            </h2>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="glass-card border-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                  {/* Priority Indicator */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(service.priority)}`}></div>
                    <span className="text-white/60 text-sm">#{service.id}</span>
                  </div>

                  {/* Service Info */}
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400">{service.client}</h3>
                        <p className="text-white/70">{service.company}</p>
                        <p className="text-white/60 text-sm">{service.service}</p>
                      </div>
                      <Badge className={`${getStatusColor(service.status)} border`}>
                        {service.status}
                      </Badge>
                    </div>
                    
                    <p className="text-white/80">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-white/60">Valor: </span>
                        <span className="text-white font-medium">{service.value}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Vl. Serviço: </span>
                        <span className="text-green-400 font-medium">{service.serviceValue}</span>
                      </div>
                      <div>
                        <span className="text-white/60">Dias: </span>
                        <span className="text-white font-medium">{service.days}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Progresso</span>
                        <span className="text-white/60">{service.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${service.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
                    <Button size="sm" className="glass-button flex-1 lg:flex-none lg:w-full">
                      Ver Detalhes
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Services;
