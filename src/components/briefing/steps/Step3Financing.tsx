import React from 'react';
import type { BriefingData } from '../types';
import MultiSelect from '../MultiSelect';
import RadioSelect from '../RadioSelect';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const Step3Financing: React.FC<StepProps> = ({ data, updateData }) => {
  const { t } = useTranslation();

  const MODALIDADES_OPTIONS = t('steps.3.options.modalities', { returnObjects: true }) as string[];
  const PARCELAS_OPTIONS = t('steps.3.options.installments', { returnObjects: true }) as string[];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.3.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.3.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="field-label">{t('steps.3.fields.modalities')}</label>
          <MultiSelect 
            options={MODALIDADES_OPTIONS} 
            selectedOptions={data.modalidadesPagamento} 
            onChange={(selected) => updateData({ modalidadesPagamento: selected })} 
          />
        </div>

        <div>
          <label className="field-label">{t('steps.3.fields.max_installments')}</label>
          <RadioSelect 
            options={PARCELAS_OPTIONS} 
            selectedOption={data.maxParcelas} 
            onChange={(val) => updateData({ maxParcelas: val })} 
          />

          {data.maxParcelas === "Varia por equipamento" && data.equipamentos.length > 0 && (
            <div className="mt-4 space-y-3 p-4 bg-accent/5 rounded-[10px] border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">{t('steps.3.fields.installments_per_eq')}</p>
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
              {t('steps.3.fields.no_equipment')}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <label className="field-label" htmlFor="jurosMinimo">{t('steps.3.fields.min_interest')}</label>
            <input
              id="jurosMinimo"
              type="number"
              step="0.01"
              className="field-input"
              placeholder={t('steps.3.fields.juros_placeholder')}
              value={data.jurosMinimo}
              onChange={(e) => updateData({ jurosMinimo: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="jurosMaximo">{t('steps.3.fields.max_interest')}</label>
            <input
              id="jurosMaximo"
              type="number"
              step="0.01"
              className="field-input"
              placeholder={t('steps.3.fields.juros_placeholder')}
              value={data.jurosMaximo}
              onChange={(e) => updateData({ jurosMaximo: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="descontoVista">{t('steps.3.fields.cash_discount')}</label>
            <input
              id="descontoVista"
              type="text"
              className="field-input"
              placeholder={t('steps.3.fields.desconto_placeholder')}
              value={data.descontoVista}
              onChange={(e) => updateData({ descontoVista: e.target.value })}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="entradaMinima">{t('steps.3.fields.min_entry')}</label>
            <input
              id="entradaMinima"
              type="text"
              className="field-input"
              placeholder={t('steps.3.fields.entrada_placeholder')}
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
