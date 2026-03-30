import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "Identidade",
  "Equipamentos",
  "Financiamento",
  "ROI",
  "Digital",
  "Resumo"
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // calculate progress percentage
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 relative">
      <div className="flex justify-between relative z-10">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNumber = i + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.div
                initial={false}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                  backgroundColor: isCurrent ? "hsl(var(--gold))" : isCompleted ? "hsl(var(--primary))" : "hsl(var(--card))",
                  borderColor: (isCurrent || isCompleted) ? "transparent" : "hsl(var(--border))",
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors duration-300 ${
                  isCurrent || isCompleted ? "text-white" : "text-muted-foreground"
                }`}
              >
                {stepNumber}
              </motion.div>
              <span className={`text-xs md:text-sm hidden sm:block font-medium ${isCurrent || isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                {stepLabels[i]}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Background Line */}
      <div className="absolute top-4 left-0 w-full h-[2px] bg-border -z-10 px-4">
        <div className="w-full h-full relative">
          <motion.div 
            className="absolute top-0 left-[-16px] h-full bg-gold origin-left"
            initial={{ width: 0 }}
            animate={{ width: `calc(${progress}% + 32px)` }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
