import React from 'react';
import type { BriefingData } from '../types';
import RadioSelect from '../RadioSelect';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const TEMPO_RETORNO_OPTIONS = [
  "Até 3 meses",
  "3 a 6 meses",
  "6 a 12 meses",
  "Mais de 12 meses"
];

const CASOS_SUCESSO_OPTIONS = [
  "Sim, tenho cases documentados",
  "Tenho depoimentos informais",
  "Ainda não tenho"
];

const FORMATO_CALCULADORA_OPTIONS = [
  "Calculadora interativa no site",
  "Tabela comparativa",
  "Simulador personalizado"
];

const Step4ROI: React.FC<StepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">Calculadora de ROI</h2>
        <p className="text-muted-foreground mb-6">Informações para simular o retorno sobre o investimento do cliente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="procedimentosDia">Procedimentos por dia estimativa</label>
          <textarea
            id="procedimentosDia"
            className="field-textarea h-[80px]"
            placeholder="Ex: 5 a 10 procedimentos por dia dependendo da clínica..."
            value={data.procedimentosDia}
            onChange={(e) => updateData({ procedimentosDia: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="valorSessaoMin">Valor mínimo por sessão (R$)</label>
          <input
            id="valorSessaoMin"
            type="number"
            className="field-input"
            placeholder="Ex: 150"
            value={data.valorSessaoMin}
            onChange={(e) => updateData({ valorSessaoMin: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="valorSessaoMax">Valor máximo por sessão (R$)</label>
          <input
            id="valorSessaoMax"
            type="number"
            className="field-input"
            placeholder="Ex: 800"
            value={data.valorSessaoMax}
            onChange={(e) => updateData({ valorSessaoMax: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="diasMesUso">Dias de uso por mês</label>
          <input
            id="diasMesUso"
            type="number"
            className="field-input"
            placeholder="Ex: 22"
            value={data.diasMesUso}
            onChange={(e) => updateData({ diasMesUso: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <div>
          <label className="field-label">Tempo estimado de retorno</label>
          <RadioSelect 
            options={TEMPO_RETORNO_OPTIONS} 
            selectedOption={data.tempoRetorno} 
            onChange={(val) => updateData({ tempoRetorno: val })} 
          />
        </div>

        <div>
          <label className="field-label">Possui casos de sucesso?</label>
          <RadioSelect 
            options={CASOS_SUCESSO_OPTIONS} 
            selectedOption={data.casosSucesso} 
            onChange={(val) => updateData({ casosSucesso: val })} 
          />
        </div>

        <div>
          <label className="field-label">Formato da calculadora no site</label>
          <RadioSelect 
            options={FORMATO_CALCULADORA_OPTIONS} 
            selectedOption={data.formatoCalculadora} 
            onChange={(val) => updateData({ formatoCalculadora: val })} 
          />
        </div>
      </div>
    </div>
  );
};

export default Step4ROI;
