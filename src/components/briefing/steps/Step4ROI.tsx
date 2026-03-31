import React from 'react';
import type { BriefingData } from '../types';
import RadioSelect from '../RadioSelect';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const Step4ROI: React.FC<StepProps> = ({ data, updateData }) => {
  const { t } = useTranslation();

  const TEMPO_RETORNO_OPTIONS = t('steps.4.options.tempo_retorno', { returnObjects: true }) as string[];
  const CASOS_SUCESSO_OPTIONS = t('steps.4.options.casos_sucesso', { returnObjects: true }) as string[];
  const FORMATO_CALCULADORA_OPTIONS = t('steps.4.options.formato_calc', { returnObjects: true }) as string[];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.4.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.4.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="field-label" htmlFor="procedimentosDia">{t('steps.4.fields.procedimentos_dia')}</label>
          <textarea
            id="procedimentosDia"
            className="field-textarea h-[80px]"
            placeholder={t('steps.4.fields.procedimentos_placeholder')}
            value={data.procedimentosDia}
            onChange={(e) => updateData({ procedimentosDia: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="valorSessaoMin">{t('steps.4.fields.valor_min')}</label>
          <input
            id="valorSessaoMin"
            type="number"
            className="field-input"
            placeholder={t('steps.4.fields.valor_placeholder_min')}
            value={data.valorSessaoMin}
            onChange={(e) => updateData({ valorSessaoMin: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="valorSessaoMax">{t('steps.4.fields.valor_max')}</label>
          <input
            id="valorSessaoMax"
            type="number"
            className="field-input"
            placeholder={t('steps.4.fields.valor_placeholder_max')}
            value={data.valorSessaoMax}
            onChange={(e) => updateData({ valorSessaoMax: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="diasMesUso">{t('steps.4.fields.dias_mes')}</label>
          <input
            id="diasMesUso"
            type="number"
            className="field-input"
            placeholder={t('steps.4.fields.dias_mes_placeholder')}
            value={data.diasMesUso}
            onChange={(e) => updateData({ diasMesUso: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <div>
          <label className="field-label">{t('steps.4.fields.tempo_retorno')}</label>
          <RadioSelect 
            options={TEMPO_RETORNO_OPTIONS} 
            selectedOption={data.tempoRetorno} 
            onChange={(val) => updateData({ tempoRetorno: val })} 
          />
        </div>

        <div>
          <label className="field-label">{t('steps.4.fields.casos_sucesso')}</label>
          <RadioSelect 
            options={CASOS_SUCESSO_OPTIONS} 
            selectedOption={data.casosSucesso} 
            onChange={(val) => updateData({ casosSucesso: val })} 
          />
        </div>

        <div>
          <label className="field-label">{t('steps.4.fields.formato_calc')}</label>
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
