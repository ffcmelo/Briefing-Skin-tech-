import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const Step1Identity: React.FC<StepProps> = ({ data, updateData }) => {
  const { t } = useTranslation();

  const TOM_DE_VOZ_OPTIONS = t('steps.1.options.tom_de_voz', { returnObjects: true }) as string[];
  const PUBLICO_ALVO_OPTIONS = t('steps.1.options.publico_alvo', { returnObjects: true }) as string[];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.1.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.1.subtitle')}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="field-label" htmlFor="nomeEmpresa">{t('steps.1.fields.company_name')}</label>
          <input
            id="nomeEmpresa"
            type="text"
            className="field-input"
            placeholder={t('steps.1.fields.company_placeholder')}
            value={data.nomeEmpresa}
            onChange={(e) => updateData({ nomeEmpresa: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="storytelling">{t('steps.1.fields.storytelling')}</label>
          <textarea
            id="storytelling"
            className="field-textarea"
            placeholder={t('steps.1.fields.storytelling_placeholder')}
            value={data.storytelling}
            onChange={(e) => updateData({ storytelling: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="diferenciais">{t('steps.1.fields.diferenciais')}</label>
          <textarea
            id="diferenciais"
            className="field-textarea h-[120px]"
            placeholder={t('steps.1.fields.diferenciais_placeholder')}
            value={data.diferenciais}
            onChange={(e) => updateData({ diferenciais: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label">{t('steps.1.fields.tom_de_voz')}</label>
          <MultiSelect 
            options={TOM_DE_VOZ_OPTIONS} 
            selectedOptions={data.tomDeVoz} 
            onChange={(selected) => updateData({ tomDeVoz: selected })} 
          />
        </div>

        <div>
          <label className="field-label">{t('steps.1.fields.publico_alvo')}</label>
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
