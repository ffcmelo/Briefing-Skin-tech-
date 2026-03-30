import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';
import RadioSelect from '../RadioSelect';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const MODALIDADES_OPTIONS = [
  "Cartão de crédito",
  "Boleto bancário",
  "Twint",
  "Financiamento bancário",
  "Consórcio",
  "Leasing"
];

const PARCELAS_OPTIONS = [
  "12x",
  "24x",
  "36x",
  "48x+",
  "Varia por equipamento"
];

const Step3Financing: React.FC<StepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">Financiamento</h2>
        <p className="text-muted-foreground mb-6">Como seus clientes podem adquirir seus equipamentos?</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="field-label">Modalidades de pagamento aceitas</label>
          <MultiSelect 
            options={MODALIDADES_OPTIONS} 
            selectedOptions={data.modalidadesPagamento} 
            onChange={(selected) => updateData({ modalidadesPagamento: selected })} 
          />
        </div>

        <div>
          <label className="field-label">Máximo de parcelas</label>
          <RadioSelect 
            options={PARCELAS_OPTIONS} 
            selectedOption={data.maxParcelas} 
            onChange={(val) => updateData({ maxParcelas: val })} 
          />

          {data.maxParcelas === "Varia por equipamento" && data.equipamentos.length > 0 && (
            <div className="mt-4 space-y-3 p-4 bg-accent/5 rounded-[10px] border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">Parcelas por equipamento:</p>
              {data.equipamentos.map((eq) => (
                <div key={eq.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-sm text-muted-foreground sm:w-1/2 flex-shrink-0 font-medium">
                    {eq.nome || "Equipamento sem nome"}
                  </span>
                  <input 
                    type="text" 
                    className="field-input py-2 text-sm" 
                    placeholder="Ex: 24x"
                    value={data.parcelasPorEquipamento[eq.id] || ''}
                    onChange={(e) => updateData({ 
                      parcelasPorEquipamento: { 
                        ...data.parcelasPorEquipamento, 
                        [eq.id]: e.target.value 
                      } 
                    })}
                  />
                </div>
              ))}
            </div>
          )}

          {data.maxParcelas === "Varia por equipamento" && data.equipamentos.length === 0 && (
            <p className="mt-3 text-sm text-muted-foreground italic">
              Nenhum equipamento cadastrado. Adicione equipamentos na Etapa 2 para definir parcelas individuais.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <label className="field-label" htmlFor="jurosMinimo">Juros mínimo (%)</label>
            <input
              id="jurosMinimo"
              type="number"
              step="0.01"
              className="field-input"
              placeholder="Ex: 1.5"
              value={data.jurosMinimo}
              onChange={(e) => updateData({ jurosMinimo: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="jurosMaximo">Juros máximo (%)</label>
            <input
              id="jurosMaximo"
              type="number"
              step="0.01"
              className="field-input"
              placeholder="Ex: 3.5"
              value={data.jurosMaximo}
              onChange={(e) => updateData({ jurosMaximo: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="descontoVista">Desconto à vista</label>
            <input
              id="descontoVista"
              type="text"
              className="field-input"
              placeholder="Ex: 10% ou R$ 500"
              value={data.descontoVista}
              onChange={(e) => updateData({ descontoVista: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="entradaMinima">Entrada mínima</label>
            <input
              id="entradaMinima"
              type="text"
              className="field-input"
              placeholder="Ex: 20% ou R$ 2.000"
              value={data.entradaMinima}
              onChange={(e) => updateData({ entradaMinima: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Financing;
