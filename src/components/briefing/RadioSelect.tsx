import React from 'react';

interface RadioSelectProps {
  options: string[];
  selectedOption: string;
  onChange: (selected: string) => void;
}

const RadioSelect: React.FC<RadioSelectProps> = ({ options, selectedOption, onChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map((option) => {
        const isSelected = selectedOption === option;
        return (
          <div 
            key={option} 
            className={`radio-option ${isSelected ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
              isSelected ? 'border-gold' : 'border-border bg-transparent'
            }`}>
              {isSelected && <div className="w-2.5 h-2.5 bg-gold rounded-full" />}
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

export default RadioSelect;
