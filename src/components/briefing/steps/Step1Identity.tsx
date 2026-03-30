import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const TOM_DE_VOZ_OPTIONS = [
  "Sofisticado/premium",
  "Técnico/educativo",
  "Próximo/acolhedor",
  "Inspirador/aspiracional"
];

const PUBLICO_ALVO_OPTIONS = [
  "Esteticistas",
  "Clínicas pequeno porte",
  "Clínicas médicas",
  "Spas",
  "Revendedores"
];

const Step1Identity: React.FC<StepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">Identidade da Marca</h2>
        <p className="text-muted-foreground mb-6">Comece nos contando a essência da sua marca.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="field-label" htmlFor="nomeEmpresa">Nome da empresa</label>
          <input
            id="nomeEmpresa"
            type="text"
            className="field-input"
            placeholder="Ex: Skin Tech Switzerland"
            value={data.nomeEmpresa}
            onChange={(e) => updateData({ nomeEmpresa: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="storytelling">Storytelling da marca</label>
          <textarea
            id="storytelling"
            className="field-textarea"
            placeholder="Conte a história da marca, origem, propósito..."
            value={data.storytelling}
            onChange={(e) => updateData({ storytelling: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="diferenciais">3 principais diferenciais</label>
          <textarea
            id="diferenciais"
            className="field-textarea h-[120px]"
            placeholder="Liste os diferenciais competitivos..."
            value={data.diferenciais}
            onChange={(e) => updateData({ diferenciais: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label">Tom de voz da comunicação</label>
          <MultiSelect 
            options={TOM_DE_VOZ_OPTIONS} 
            selectedOptions={data.tomDeVoz} 
            onChange={(selected) => updateData({ tomDeVoz: selected })} 
          />
        </div>

        <div>
          <label className="field-label">Público-alvo principal</label>
          <MultiSelect 
            options={PUBLICO_ALVO_OPTIONS} 
            selectedOptions={data.publicoAlvo} 
            onChange={(selected) => updateData({ publicoAlvo: selected })} 
          />
        </div>
      </div>
    </div>
  );
};

export default Step1Identity;
