import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BriefingData } from './types';
import { initialBriefingData } from './types';
import { loadFromStorage, saveToStorage } from './utils';
import ProgressBar from './ProgressBar';

import Step1Identity from './steps/Step1Identity';
import Step2Equipment from './steps/Step2Equipment';
import Step3Financing from './steps/Step3Financing';
import Step4ROI from './steps/Step4ROI';
import Step5Digital from './steps/Step5Digital';
import Step6Summary from './steps/Step6Summary';

const STORAGE_KEY = "skintech-briefing";
const TOTAL_STEPS = 6;

const BriefingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<BriefingData>(initialBriefingData);
  const [direction, setDirection] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from storage on mount
  useEffect(() => {
    const savedData = loadFromStorage<BriefingData>(STORAGE_KEY, initialBriefingData);
    setData(savedData);
    setIsLoaded(true);
  }, []);

  // Save to storage on change
  useEffect(() => {
    if (isLoaded) {
      saveToStorage(STORAGE_KEY, data);
    }
  }, [data, isLoaded]);

  const updateData = (fields: Partial<BriefingData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Framer motion variants
  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as const }
    })
  };

  if (!isLoaded) return null; // Prevent hydration mismatch / empty render

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-10 pb-6 border-b border-border">
        <h1 className="text-3xl md:text-4xl font-serif text-gold mb-2">Skin Tech Switzerland</h1>
        <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm md:text-base">Briefing Estratégico</p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="bg-card border border-border rounded-[14px] p-6 md:p-10 shadow-sm mt-8 relative overflow-hidden min-h-[400px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentStep === 1 && <Step1Identity data={data} updateData={updateData} />}
            {currentStep === 2 && <Step2Equipment data={data} updateData={updateData} />}
            {currentStep === 3 && <Step3Financing data={data} updateData={updateData} />}
            {currentStep === 4 && <Step4ROI data={data} updateData={updateData} />}
            {currentStep === 5 && <Step5Digital data={data} updateData={updateData} />}
            {currentStep === 6 && <Step6Summary data={data} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="btn-outline"
        >
          Anterior
        </button>

        {currentStep < TOTAL_STEPS && (
          <button
            onClick={nextStep}
            className="btn-primary"
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  );
};

export default BriefingForm;
