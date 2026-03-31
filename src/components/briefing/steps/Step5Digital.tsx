import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const Step5Digital: React.FC<StepProps> = ({ data, updateData }) => {
  const { t } = useTranslation();

  const CANAIS_OPTIONS = t('steps.5.options.canais', { returnObjects: true }) as string[];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.5.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.5.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="field-label" htmlFor="instagram">{t('steps.5.fields.instagram')}</label>
          <input
            id="instagram"
            type="text"
            className="field-input"
            placeholder={t('steps.5.fields.instagram_placeholder')}
            value={data.instagram}
            onChange={(e) => updateData({ instagram: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="whatsapp">{t('steps.5.fields.whatsapp')}</label>
          <input
            id="whatsapp"
            type="text"
            className="field-input"
            placeholder={t('steps.5.fields.whatsapp_placeholder')}
            value={data.whatsapp}
            onChange={(e) => updateData({ whatsapp: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label className="field-label" htmlFor="coresMarca">{t('steps.5.fields.cores')}</label>
          <input
            id="coresMarca"
            type="text"
            className="field-input"
            placeholder={t('steps.5.fields.cores_placeholder')}
            value={data.coresMarca}
            onChange={(e) => updateData({ coresMarca: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <div>
          <label className="field-label">{t('steps.5.fields.canais_venda')}</label>
          <MultiSelect 
            options={CANAIS_OPTIONS} 
            selectedOptions={data.canalVendas} 
            onChange={(selected) => updateData({ canalVendas: selected })} 
          />
        </div>

        <div>
          <label className="field-label" htmlFor="dorCliente">{t('steps.5.fields.dor_cliente')}</label>
          <textarea
            id="dorCliente"
            className="field-textarea"
            placeholder={t('steps.5.fields.dor_placeholder')}
            value={data.dorCliente}
            onChange={(e) => updateData({ dorCliente: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="objecoes">{t('steps.5.fields.objecoes')}</label>
          <textarea
            id="objecoes"
            className="field-textarea"
            placeholder={t('steps.5.fields.objecoes_placeholder')}
            value={data.objecoes}
            onChange={(e) => updateData({ objecoes: e.target.value })}
          />
        </div>

        <div>
          <label className="field-label" htmlFor="transformacao">{t('steps.5.fields.transformacao')}</label>
          <textarea
            id="transformacao"
            className="field-textarea"
            placeholder={t('steps.5.fields.transformacao_placeholder')}
            value={data.transformacao}
            onChange={(e) => updateData({ transformacao: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Step5Digital;
