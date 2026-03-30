import React from 'react';
import { Check } from 'lucide-react';

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange }) => {
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(o => o !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option);
        return (
          <div 
            key={option} 
            className={`check-option ${isSelected ? 'selected' : ''}`}
            onClick={() => toggleOption(option)}
          >
            <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
              isSelected ? 'bg-gold border-gold' : 'border-border bg-transparent'
            }`}>
              {isSelected && <Check size={14} className="text-white" />}
            </div>
            <span className={isSelected ? 'font-medium text-foreground' : 'text-muted-foreground'}>
              {option}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelect;
