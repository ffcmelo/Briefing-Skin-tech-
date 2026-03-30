export interface Equipment {
  id: string;
  nome: string;
  categoria: string;
  categoriaOutros: string;
  preco: string;
  tratamentos: string;
  diferencial: string;
}

export interface BriefingData {
  // Step 1 - Identidade da Marca
  nomeEmpresa: string;
  storytelling: string;
  diferenciais: string;
  tomDeVoz: string[];
  publicoAlvo: string[];

  // Step 2 - Equipamentos
  equipamentos: Equipment[];
  frequenciaLancamentos: string;
  certificacoes: string;

  // Step 3 - Financiamento
  modalidadesPagamento: string[];
  maxParcelas: string;
  parcelasPorEquipamento: Record<string, string>;
  jurosMinimo: string;
  jurosMaximo: string;
  descontoVista: string;
  entradaMinima: string;

  // Step 4 - Calculadora ROI
  procedimentosDia: string;
  valorSessaoMin: string;
  valorSessaoMax: string;
  tempoRetorno: string;
  diasMesUso: string;
  casosSucesso: string;
  formatoCalculadora: string;

  // Step 5 - Presença Digital
  instagram: string;
  whatsapp: string;
  coresMarca: string;
  canalVendas: string[];
  dorCliente: string;
  objecoes: string;
  transformacao: string;
}

export const initialBriefingData: BriefingData = {
  nomeEmpresa: '',
  storytelling: '',
  diferenciais: '',
  tomDeVoz: [],
  publicoAlvo: [],
  
  equipamentos: [],
  frequenciaLancamentos: '',
  certificacoes: '',
  
  modalidadesPagamento: [],
  maxParcelas: '',
  parcelasPorEquipamento: {},
  jurosMinimo: '',
  jurosMaximo: '',
  descontoVista: '',
  entradaMinima: '',
  
  procedimentosDia: '',
  valorSessaoMin: '',
  valorSessaoMax: '',
  tempoRetorno: '',
  diasMesUso: '',
  casosSucesso: '',
  formatoCalculadora: '',
  
  instagram: '',
  whatsapp: '',
  coresMarca: '',
  canalVendas: [],
  dorCliente: '',
  objecoes: '',
  transformacao: '',
};
