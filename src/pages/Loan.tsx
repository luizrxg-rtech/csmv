
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Check } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

const Loan = () => {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [manualAmount, setManualAmount] = useState('500000');
  const [isAmountConfirmed, setIsAmountConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    nomeFantasia: '',
    cnpj: '',
    email: '',
    telefone: '',
    endereco: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState({
    matricula: null,
    ccir: null,
    itr: null,
    cnd: null,
    car: null,
    lau: null
  });
  const { toast } = useToast();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleSliderChange = (value: number[]) => {
    setLoanAmount(value);
    setManualAmount(value[0].toString());
  };

  const handleManualAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numValue = parseInt(value || '0');
    if (numValue <= 3000000) {
      setManualAmount(value);
      setLoanAmount([numValue]);
    }
  };

  const confirmAmount = () => {
    setIsAmountConfirmed(true);
    toast({
      title: "Valor confirmado!",
      description: `Empréstimo de ${formatCurrency(loanAmount[0])} confirmado. Preencha os dados abaixo.`
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [field]: file
      }));
      toast({
        title: "Arquivo enviado!",
        description: `${file.name} foi anexado com sucesso.`
      });
    }
  };

  const submitLoanRequest = () => {
    // Validar se todos os campos estão preenchidos
    const requiredFields = Object.values(formData).every(field => field.trim() !== '');
    const requiredFiles = Object.values(uploadedFiles).every(file => file !== null);

    if (!requiredFields || !requiredFiles) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os dados e anexe todos os documentos.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitação enviada!",
      description: "Sua solicitação de empréstimo foi enviada com sucesso. Entraremos em contato em breve."
    });
  };

  const fileFields = [
    { key: 'matricula', label: 'Matrícula atualizada com certidão de ônus reais' },
    { key: 'ccir', label: 'Certificado de Cadastro do Imóvel Rural (CCIR)' },
    { key: 'itr', label: 'Comprovantes do ITR dos últimos 5 anos' },
    { key: 'cnd', label: 'Certidão Negativa de Débitos (CND)' },
    { key: 'car', label: 'Cadastro Ambiental Rural (CAR)' },
    { key: 'lau', label: 'Licença Ambiental Única (LAU)' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-900">Solicitação de Empréstimo</h1>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-green-900">Valor do Empréstimo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label className="text-green-800">Selecione o valor desejado:</Label>
              <div className="px-4">
                <Slider
                  value={loanAmount}
                  onValueChange={handleSliderChange}
                  max={3000000}
                  min={0}
                  step={10000}
                  className="w-full"
                  disabled={isAmountConfirmed}
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Label htmlFor="manual-amount" className="text-green-800">Ou digite o valor:</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-700">R$</span>
                    <Input
                      id="manual-amount"
                      value={manualAmount}
                      onChange={handleManualAmountChange}
                      className="pl-10"
                      placeholder="0"
                      disabled={isAmountConfirmed}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-2xl font-bold text-green-900">
                    {formatCurrency(loanAmount[0])}
                  </div>
                  {!isAmountConfirmed && (
                    <Button onClick={confirmAmount} className="bg-green-600 hover:bg-green-700">
                      Confirmar Valor
                    </Button>
                  )}
                  {isAmountConfirmed && (
                    <div className="flex items-center text-green-600">
                      <Check className="w-4 h-4 mr-1" />
                      Confirmado
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {isAmountConfirmed && (
          <>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-green-900">Dados da Empresa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome-fantasia" className="text-green-800">Nome Fantasia</Label>
                    <Input
                      id="nome-fantasia"
                      value={formData.nomeFantasia}
                      onChange={(e) => handleInputChange('nomeFantasia', e.target.value)}
                      placeholder="Digite o nome fantasia"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj" className="text-green-800">CNPJ</Label>
                    <Input
                      id="cnpj"
                      value={formData.cnpj}
                      onChange={(e) => handleInputChange('cnpj', e.target.value)}
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-green-800">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="empresa@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-green-800">Telefone</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="endereco" className="text-green-800">Endereço</Label>
                    <Input
                      id="endereco"
                      value={formData.endereco}
                      onChange={(e) => handleInputChange('endereco', e.target.value)}
                      placeholder="Endereço completo"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-green-900">Documentos Necessários</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fileFields.map((field) => (
                    <div key={field.key} className="space-y-2">
                      <Label className="text-green-800 text-sm">{field.label}</Label>
                      <div className="relative">
                        <input
                          type="file"
                          id={field.key}
                          onChange={(e) => handleFileUpload(field.key, e)}
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        />
                        <label
                          htmlFor={field.key}
                          className={`flex items-center justify-center w-full h-20 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                            uploadedFiles[field.key as keyof typeof uploadedFiles]
                              ? 'border-green-400 bg-green-50'
                              : 'border-green-300 hover:border-green-400 hover:bg-green-50'
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            {uploadedFiles[field.key as keyof typeof uploadedFiles] ? (
                              <>
                                <Check className="w-6 h-6 text-green-600 mb-1" />
                                <span className="text-xs text-green-700 text-center">
                                  {(uploadedFiles[field.key as keyof typeof uploadedFiles] as File)?.name}
                                </span>
                              </>
                            ) : (
                              <>
                                <Upload className="w-6 h-6 text-green-600 mb-1" />
                                <span className="text-xs text-green-700 text-center">
                                  Clique para anexar
                                </span>
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button 
                onClick={submitLoanRequest}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                Solicitar Empréstimo
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Loan;
