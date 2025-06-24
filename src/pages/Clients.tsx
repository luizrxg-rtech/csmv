
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, MoreHorizontal, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const clients = [
    {
      id: 1,
      name: 'Aglailton',
      phone: '88993696820',
      email: 'aglailton@email.com',
      city: 'São Paulo',
      state: 'SP',
      status: 'active'
    },
    {
      id: 2,
      name: 'Agronegócios BR',
      phone: '63999344125',
      email: 'contato@agronegociosbr.com',
      city: 'Palmas',
      state: 'TO',
      status: 'active'
    },
    {
      id: 3,
      name: 'Ailton Silva',
      phone: '94915111187',
      email: 'ailton.silva@email.com',
      city: 'Marabá',
      state: 'PA',
      status: 'active'
    },
    {
      id: 4,
      name: 'Alberto Santos',
      phone: '71999810572',
      email: 'alberto.santos@email.com',
      city: 'Salvador',
      state: 'BA',
      status: 'inactive'
    },
    {
      id: 5,
      name: 'Alcimar Trindade',
      phone: '63992718880',
      email: 'alcimar.trindade@email.com',
      city: 'Araguaína',
      state: 'TO',
      status: 'active'
    },
    {
      id: 6,
      name: 'Alcino Moreira',
      phone: '33999177210',
      email: 'alcino.moreira@email.com',
      city: 'Governador Valadares',
      state: 'MG',
      status: 'active'
    },
    {
      id: 7,
      name: 'Alessandro Costa',
      phone: '17996573435',
      email: 'alessandro.costa@email.com',
      city: 'São José do Rio Preto',
      state: 'SP',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'inactive': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'inactive': return 'Inativo';
      case 'pending': return 'Pendente';
      default: return 'Desconhecido';
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-white">Buscar Cliente</h1>
            <p className="text-white/70">Gerencie sua base de clientes</p>
          </div>
          <div className="flex space-x-3">
            <Button className="glass-button">
              <Plus className="w-4 h-4 mr-2" />
              Cadastrar Novo Cliente
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Recarregar Lista
            </Button>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="glass-card border-white/20">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Pesquisar clientes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="glass border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button className="glass-button">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-white">{filteredClients.length}</div>
              <div className="text-white/60 text-sm">Total de Clientes</div>
            </CardContent>
          </Card>
        </div>

        {/* Clients Table */}
        <Card className="glass-card border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Lista de Clientes</CardTitle>
            <div className="text-white/60 text-sm">
              Mostrando {filteredClients.length} registros por página • Página 4 de 84
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Ações</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Nome</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Telefone</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Email</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Localização</th>
                    <th className="text-left py-3 px-4 text-white/70 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client, index) => (
                    <tr 
                      key={client.id} 
                      className="border-b border-white/5 hover:bg-white/5 transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-3">
                            ✓
                          </Button>
                          <Button size="sm" variant="destructive" className="px-3">
                            ✕
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-white">{client.name}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-white/80">
                          <Phone className="w-4 h-4 mr-2 text-blue-400" />
                          {client.phone}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-white/80">
                          <Mail className="w-4 h-4 mr-2 text-green-400" />
                          {client.email}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-white/80">
                          <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                          {client.city}, {client.state}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={`${getStatusColor(client.status)} border`}>
                          {getStatusText(client.status)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
              <div className="text-white/60 text-sm">
                Página 4 de 84
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="glass border-white/20 text-white">
                  Primeiro
                </Button>
                <Button variant="outline" size="sm" className="glass border-white/20 text-white">
                  Anterior
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 4 ? "default" : "outline"}
                    size="sm"
                    className={page === 4 ? "glass-button" : "glass border-white/20 text-white"}
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm" className="glass border-white/20 text-white">
                  Próxima
                </Button>
                <Button variant="outline" size="sm" className="glass border-white/20 text-white">
                  Última
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Clients;
