import React from 'react';
import type { BriefingData, Equipment } from '../types';
import RadioSelect from '../RadioSelect';
import { generateId } from '../utils';
import { Plus, X } from 'lucide-react';

interface StepProps {
  data: BriefingData;
  updateData: (fields: Partial<BriefingData>) => void;
}

const FREQUENCIA_OPTIONS = [
  "A cada 3 meses",
  "A cada 6 meses",
  "Anualmente"
];

const CATEGORIA_OPTIONS = [
  "Laser",
  "Radiofrequência",
  "Ultrassom",
  "Criolipólise",
  "LED/Fototerapia",
  "Microagulhamento",
  "HIFU",
  "Eletroestimulação",
  "Outros"
];

const Step2Equipment: React.FC<StepProps> = ({ data, updateData }) => {

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
        <h2 className="text-2xl font-serif text-foreground mb-4">Equipamentos</h2>
        <p className="text-muted-foreground mb-6">Descreva os equipamentos que sua marca oferece.</p>
      </div>

      <div className="space-y-6">
        <label className="field-label">Lista de Equipamentos</label>
        
        {data.equipamentos.map((eq, index) => (
          <div key={eq.id} className="equipment-card">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-primary">Equipamento #{index + 1}</h3>
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
                <label className="text-sm text-muted-foreground mb-1 block">Nome/Modelo</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.nome}
                  onChange={(e) => updateEquipment(eq.id, 'nome', e.target.value)}
                  placeholder="Ex: UltraLift HD"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Categoria</label>
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
                    placeholder="Especifique a categoria..."
                  />
                )}
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Preço à vista (R$)</label>
                <input 
                  type="number" 
                  className="field-input py-2 text-sm" 
                  value={eq.preco}
                  onChange={(e) => updateEquipment(eq.id, 'preco', e.target.value)}
                  placeholder="Ex: 150000"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Tratamentos realizados</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.tratamentos}
                  onChange={(e) => updateEquipment(eq.id, 'tratamentos', e.target.value)}
                  placeholder="Ex: Flacidez, Celulite"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-muted-foreground mb-1 block">Diferencial técnico</label>
                <input 
                  type="text" 
                  className="field-input py-2 text-sm" 
                  value={eq.diferencial}
                  onChange={(e) => updateEquipment(eq.id, 'diferencial', e.target.value)}
                  placeholder="Ex: Refrigeração a -10ºC"
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
          Adicionar equipamento
        </button>
      </div>

      <div className="space-y-4 pt-6 border-t border-border">
        <div>
          <label className="field-label">Frequência de lançamentos</label>
          <RadioSelect 
            options={FREQUENCIA_OPTIONS} 
            selectedOption={data.frequenciaLancamentos} 
            onChange={(val) => updateData({ frequenciaLancamentos: val })} 
          />
        </div>

        <div>
          <label className="field-label" htmlFor="certificacoes">Certificações e selos</label>
          <textarea
            id="certificacoes"
            className="field-textarea"
            placeholder="Ex: ANVISA, CE, FDA..."
            value={data.certificacoes}
            onChange={(e) => updateData({ certificacoes: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2Equipment;
