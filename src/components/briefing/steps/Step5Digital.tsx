import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const CANAIS_OPTIONS = [
  "Instagram",
  "WhatsApp",
  "Site próprio",
  "Marketplace",
  "Representantes comerciais",
  "Eventos/feiras"
];

const Step5Digital: React.FC<StepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">Presença Digital</h2>
        <p className="text-muted-foreground mb-6">Entenda como sua marca se posiciona na internet e nas vendas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="field-label" htmlFor="instagram">Instagram</label>
          <input
            id="instagram"
            type="text"
            className="field-input"
            placeholder="@seuinstagram"
            value={data.instagram}
            onChange={(e) => updateData({ instagram: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            type="text"
            className="field-input"
            placeholder="(11) 99999-9999"
            value={data.whatsapp}
            onChange={(e) => updateData({ whatsapp: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label className="field-label" htmlFor="coresMarca">Cores da marca</label>
          <input
            id="coresMarca"
            type="text"
            className="field-input"
            placeholder="Ex: Azul marinho, dourado, branco"
            value={data.coresMarca}
            onChange={(e) => updateData({ coresMarca: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <div>
          <label className="field-label">Canal de vendas principal</label>
          <MultiSelect 
            options={CANAIS_OPTIONS} 
            selectedOptions={data.canalVendas} 
            onChange={(selected) => updateData({ canalVendas: selected })} 
          />
        </div>

        <div>
          <label className="field-label" htmlFor="dorCliente">Dor do cliente antes da compra</label>
          <textarea
            id="dorCliente"
            className="field-textarea"
            placeholder="O que motiva o seu cliente a procurar seus equipamentos?"
            value={data.dorCliente}
            onChange={(e) => updateData({ dorCliente: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="objecoes">Objeções comuns na venda</label>
          <textarea
            id="objecoes"
            className="field-textarea"
            placeholder="O que costuma impedir o fechamento no primeiro momento?"
            value={data.objecoes}
            onChange={(e) => updateData({ objecoes: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="transformacao">Transformação entregue ao paciente</label>
          <textarea
            id="transformacao"
            className="field-textarea"
            placeholder="Qual o resultado/sentimento gerado no paciente final?"
            value={data.transformacao}
            onChange={(e) => updateData({ transformacao: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Step5Digital;
