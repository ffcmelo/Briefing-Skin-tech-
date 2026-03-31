import React from 'react';
import type { BriefingData, Equipment } from '../types';
import RadioSelect from '../RadioSelect';
import { generateId } from '../utils';
import { Plus, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const Step2Equipment: React.FC<StepProps> = ({ data, updateData }) => {
  const { t } = useTranslation();

  const FREQUENCIA_OPTIONS = t('steps.2.options.frequency', { returnObjects: true }) as string[];
  const CATEGORIA_OPTIONS = t('steps.2.options.categories', { returnObjects: true }) as string[];

  const addEquipment = () => {
    const newEq: Equipment = {
      id: generateId(),
      nome: '',
      categoria: CATEGORIA_OPTIONS[0],
      categoriaOutros: '',
      preco: '',
      tratamentos: '',
      diferencial: ''
    };
    updateData({ equipamentos: [...data.equipamentos, newEq] });
  };

  const removeEquipment = (id: string) => {
    updateData({ equipamentos: data.equipamentos.filter(eq => eq.id !== id) });
  };

  const updateEquipment = (id: string, field: keyof Equipment, value: string) => {
    updateData({
      equipamentos: data.equipamentos.map(eq => 
        eq.id === id ? { ...eq, [field]: value } : eq
      )
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.2.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.2.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <label className="field-label">{t('steps.2.fields.list_title')}</label>
        
        {data.equipamentos.map((eq, index) => (
          <div key={eq.id} className="equipment-card">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-primary">{t('steps.2.fields.equipment_label')} #{index + 1}</h3>
              <button 
                onClick={() => removeEquipment(eq.id)}
                className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                aria-label="Remover equipamento"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">{t('steps.2.fields.name')}</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.nome}
                  onChange={(e) => updateEquipment(eq.id, 'nome', e.target.value)}
                  placeholder={t('steps.2.fields.name_placeholder')}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">{t('steps.2.fields.category')}</label>
                <select 
                  className="field-input py-2 text-sm"
                  value={eq.categoria}
                  onChange={(e) => updateEquipment(eq.id, 'categoria', e.target.value)}
                >
                  {CATEGORIA_OPTIONS.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {eq.categoria === "Outros" && (
                  <input 
                    type="text" 
                    className="field-input py-2 text-sm mt-2" 
                    value={eq.categoriaOutros}
                    onChange={(e) => updateEquipment(eq.id, 'categoriaOutros', e.target.value)}
                    placeholder={t('steps.2.fields.category_other')}
                  />
                )}
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">{t('steps.2.fields.price')}</label>
                <input 
                  type="number" 
                  className="field-input py-2 text-sm" 
                  value={eq.preco}
                  onChange={(e) => updateEquipment(eq.id, 'preco', e.target.value)}
                  placeholder={t('steps.2.fields.price_placeholder')}
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">{t('steps.2.fields.treatments')}</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.tratamentos}
                  onChange={(e) => updateEquipment(eq.id, 'tratamentos', e.target.value)}
                  placeholder={t('steps.2.fields.treatments_placeholder')}
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-muted-foreground mb-1 block">{t('steps.2.fields.diferencial')}</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.diferencial}
                  onChange={(e) => updateEquipment(eq.id, 'diferencial', e.target.value)}
                  placeholder={t('steps.2.fields.diferencial_placeholder')}
                />
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={addEquipment}
          className="w-full py-4 border-2 border-dashed border-border rounded-[14px] text-muted-foreground hover:border-gold hover:text-gold transition-colors flex items-center justify-center gap-2 font-medium bg-card"
        >
          <Plus size={20} />
          {t('steps.2.fields.add_equipment')}
        </button>
      </div>

      <div className="space-y-4 pt-6 border-t border-border">
        <div>
          <label className="field-label">{t('steps.2.fields.frequency')}</label>
          <RadioSelect 
            options={FREQUENCIA_OPTIONS} 
            selectedOption={data.frequenciaLancamentos} 
            onChange={(val) => updateData({ frequenciaLancamentos: val })} 
          />
        </div>

        <div>
          <label className="field-label" htmlFor="certificacoes">{t('steps.2.fields.certifications')}</label>
          <textarea
            id="certificacoes"
            className="field-textarea"
            placeholder={t('steps.2.fields.certifications_placeholder')}
            value={data.certificacoes}
            onChange={(e) => updateData({ certificacoes: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2Equipment;
