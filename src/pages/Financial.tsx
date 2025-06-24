
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Calendar, TrendingUp, TrendingDown, Eye, FileDown, AlertTriangle, Receipt } from 'lucide-react';
import { useState } from 'react';

const Financial = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const receivables = [
    {
      id: 1,
      client: 'Kamila Luisa Costa',
      description: '#013257 -> #006214 - Crédito Rural - 123123',
      value: 'R$ 2,00',
      date: '27/06/2025',
      status: 'Pendente'
    },
    {
      id: 2,
      client: 'Dioclécio',
      description: 'Cliente está pleiteando...',
      value: 'R$ 13.000,00',
      date: '16/06/2025',
      status: 'Pendente'
    },
    {
      id: 3,
      client: 'Jair Ronaldo Vicente',
      description: 'cliente está pleiteando...',
      value: 'R$ 13.000,00',
      date: '16/06/2025',
      status: 'Pendente'
    },
    {
      id: 4,
      client: 'Jair Ronaldo Vicente',
      description: '#013765 -> #006349 - CPR - Bradesco S.A',
      value: 'R$ 13.000,00',
      date: '16/06/2025',
      status: 'Pendente'
    }
  ];

  const payables = [
    {
      id: 1,
      vendor: 'AgroAliado TESTE',
      description: '#013251 -> #006346 - Comissão de serviço - (6348) CPR',
      value: 'R$ 6.500,00',
      date: '10/07/2025',
      status: 'Pendente'
    },
    {
      id: 2,
      vendor: 'Enrico de Albuquerque Potting',
      description: '#013519 -> #006349 - Comissão de serviço - (6349) CPR - Bradesco S.A',
      value: 'R$ 6.500,00',
      date: '10/07/2025',
      status: 'Pendente'
    },
    {
      id: 3,
      vendor: 'Enrico de Albuquerque Potting',
      description: '#013767 -> #006349 - Comissão de serviço - (6349) CPR - Bradesco S.A',
      value: 'R$ 6.500,00',
      date: '10/07/2025',
      status: 'Pendente'
    },
    {
      id: 4,
      vendor: 'AgroAliado TESTE',
      description: '#013758 -> #006214 - Comissão de serviço - (6214) Crédito Rural - 123123',
      value: 'R$ 1,00',
      date: '00/00/0000',
      status: 'Pendente'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-white">Financeiro</h1>
            <p className="text-white/70">Controle suas finanças e fluxo de caixa</p>
          </div>
          <div className="flex space-x-3">
            <Button className="glass-button">
              <Plus className="w-4 h-4 mr-2" />
              Cadastrar
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Ações/Config
            </Button>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="glass-card border-white/20">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">R$ 0,00</div>
              <div className="text-white/60">Saldo em contas</div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Receipt className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">R$ 0,00</div>
              <div className="text-white/60 text-sm">Receita</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">R$ 0,00</div>
              <div className="text-white/60 text-sm">Receita Prevista</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <div className="text-xl font-bold text-white">R$ 0,00</div>
              <div className="text-white/60 text-sm">Despesas</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/20">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xl font-bold text-white">R$ 0,00</div>
              <div className="text-white/60 text-sm">Despesas Prevista</div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Tabs */}
        <Card className="glass-card border-white/20">
          <CardContent className="p-6">
            <Tabs defaultValue="receivables" className="w-full">
              <TabsList className="grid w-full grid-cols-5 glass">
                <TabsTrigger value="receivables" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300">
                  📈 Receber
                </TabsTrigger>
                <TabsTrigger value="payables" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-300">
                  📉 Pagar
                </TabsTrigger>
                <TabsTrigger value="alerts" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-300">
                  ⚠ Avisos de Pagamento
                </TabsTrigger>
                <TabsTrigger value="collections" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300">
                  💰 Cobranças
                </TabsTrigger>
                <TabsTrigger value="reports" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300">
                  📊 Relatório DRE
                </TabsTrigger>
              </TabsList>

              {/* Receivables Tab */}
              <TabsContent value="receivables" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Contas a Receber</h3>
                  
                  {/* Period Selection */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Data Inicial</label>
                        <Input type="date" className="glass border-white/20 text-white" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Data Final</label>
                        <Input type="date" className="glass border-white/20 text-white" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Cliente</label>
                        <Input placeholder="Pesquisar cliente..." className="glass border-white/20 text-white placeholder:text-white/50" />
                      </div>
                    </div>
                    <div className="flex space-x-2 items-end">
                      <Button className="glass-button">
                        <Search className="w-4 h-4 mr-2" />
                        Pesquisar
                      </Button>
                    </div>
                  </div>

                  {/* Generate Actions */}
                  <div className="flex space-x-2">
                    <Button className="glass-button">
                      📄 Gerar Recibo
                    </Button>
                    <Button className="glass-button">
                      ✓ Marcar
                    </Button>
                    <Button className="glass-button">
                      ❌ Desmarcar
                    </Button>
                  </div>

                  {/* Receivables Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Ação</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Cliente</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Descrição</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Data Vencimento</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Valor</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Valor Pago</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receivables.map((item, index) => (
                          <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4">
                              <Button size="sm" className="glass-button px-3">
                                📋
                              </Button>
                            </td>
                            <td className="py-4 px-4 text-white">{item.client}</td>
                            <td className="py-4 px-4 text-white/80 max-w-xs truncate">{item.description}</td>
                            <td className="py-4 px-4 text-white/80">{item.date}</td>
                            <td className="py-4 px-4 text-green-400 font-medium">{item.value}</td>
                            <td className="py-4 px-4 text-white/80">R$ 0,00</td>
                            <td className="py-4 px-4">
                              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 border">
                                {item.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="text-right">
                      <span className="text-white font-semibold">Total: R$ 39.002,00</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Payables Tab */}
              <TabsContent value="payables" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Contas a Pagar</h3>
                  
                  {/* Period Selection */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Data Inicial</label>
                        <Input type="date" className="glass border-white/20 text-white" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Data Final</label>
                        <Input type="date" className="glass border-white/20 text-white" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Cliente</label>
                        <Input placeholder="Cliente..." className="glass border-white/20 text-white placeholder:text-white/50" />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Vendedor</label>
                        <Input placeholder="Vendedor..." className="glass border-white/20 text-white placeholder:text-white/50" />
                      </div>
                    </div>
                    <div className="flex items-end">
                      <Button className="glass-button">
                        <Search className="w-4 h-4 mr-2" />
                        Pesquisar
                      </Button>
                    </div>
                  </div>

                  {/* Payables Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Ação</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Cliente</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Descrição</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Data Vencimento</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Valor</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Valor Pago</th>
                          <th className="text-left py-3 px-4 text-white/70 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {payables.map((item, index) => (
                          <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4">
                              <Button size="sm" className="glass-button px-3">
                                📋
                              </Button>
                            </td>
                            <td className="py-4 px-4 text-white">{item.vendor}</td>
                            <td className="py-4 px-4 text-white/80 max-w-xs truncate">{item.description}</td>
                            <td className="py-4 px-4 text-white/80">{item.date}</td>
                            <td className="py-4 px-4 text-red-400 font-medium">{item.value}</td>
                            <td className="py-4 px-4 text-white/80">R$ 0,00</td>
                            <td className="py-4 px-4">
                              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 border">
                                {item.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="text-right">
                      <span className="text-white font-semibold">Total: R$ 19.501,00</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Payment Alerts Tab */}
              <TabsContent value="alerts" className="space-y-6">
                <div className="text-center py-12">
                  <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Nenhum aviso de pagamento</h3>
                  <p className="text-white/60">No data available in table</p>
                </div>
              </TabsContent>

              {/* Collections Tab */}
              <TabsContent value="collections" className="space-y-6">
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Receipt className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cobranças</h3>
                  <p className="text-white/60">Funcionalidade em desenvolvimento</p>
                </div>
              </TabsContent>

              {/* DRE Report Tab */}
              <TabsContent value="reports" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Relatório DRE</h3>
                    <div className="flex space-x-2">
                      <Button className="glass-button">
                        <Search className="w-4 h-4 mr-2" />
                        Pesquisar
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <FileDown className="w-4 h-4 mr-2" />
                        Imprimir
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Data Inicial</label>
                      <Input type="date" className="glass border-white/20 text-white" />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Data Final</label>
                      <Input type="date" className="glass border-white/20 text-white" />
                    </div>
                  </div>

                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileDown className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Relatório DRE</h3>
                    <p className="text-white/60">Selecione o período para gerar o relatório</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Financial;
