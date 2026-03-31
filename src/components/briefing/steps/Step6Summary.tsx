import React, { useState } from 'react';
import type { BriefingData } from '../types';
import { Copy, Check, FileDown } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useTranslation } from 'react-i18next';

interface StepProps {
  data: BriefingData;
}

const Step6Summary: React.FC<StepProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);

  const sections = [
    {
      title: t('steps.1.title'),
      items: [
        { label: t('steps.1.fields.company_name'), value: data.nomeEmpresa },
        { label: t('steps.1.fields.storytelling'), value: data.storytelling },
        { label: t('steps.1.fields.diferenciais'), value: data.diferenciais },
        { label: t('steps.1.fields.tom_de_voz'), value: data.tomDeVoz.join(", ") },
        { label: t('steps.1.fields.publico_alvo'), value: data.publicoAlvo.join(", ") }
      ]
    },
    {
      title: t('steps.2.title'),
      items: [
        ...data.equipamentos.map((eq, i) => ({
          label: `${t('steps.2.fields.equipment_label')} ${i + 1} (${eq.nome})`,
          value: `${t('steps.2.fields.category')}: ${eq.categoria} | ${t('steps.2.fields.price')}: ${eq.preco} | ${t('steps.2.fields.treatments')}: ${eq.tratamentos} | ${t('steps.2.fields.diferencial')}: ${eq.diferencial}`
        })),
        { label: t('steps.2.fields.frequency'), value: data.frequenciaLancamentos },
        { label: t('steps.2.fields.certifications'), value: data.certificacoes }
      ]
    },
    {
      title: t('steps.3.title'),
      items: [
        { label: t('steps.3.fields.modalities'), value: data.modalidadesPagamento.join(", ") },
        { label: t('steps.3.fields.max_installments'), value: data.maxParcelas },
        { label: t('steps.3.fields.min_interest'), value: data.jurosMinimo ? `${data.jurosMinimo}%` : "" },
        { label: t('steps.3.fields.max_interest'), value: data.jurosMaximo ? `${data.jurosMaximo}%` : "" },
        { label: t('steps.3.fields.cash_discount'), value: data.descontoVista },
        { label: t('steps.3.fields.min_entry'), value: data.entradaMinima }
      ]
    },
    {
      title: t('steps.4.title'),
      items: [
        { label: t('steps.4.fields.procedimentos_dia'), value: data.procedimentosDia },
        { label: t('steps.4.fields.valor_min'), value: data.valorSessaoMin ? `${data.valorSessaoMin}` : "" },
        { label: t('steps.4.fields.valor_max'), value: data.valorSessaoMax ? `${data.valorSessaoMax}` : "" },
        { label: t('steps.4.fields.tempo_retorno'), value: data.tempoRetorno },
        { label: t('steps.4.fields.dias_mes'), value: data.diasMesUso },
        { label: t('steps.4.fields.casos_sucesso'), value: data.casosSucesso },
        { label: t('steps.4.fields.formato_calc'), value: data.formatoCalculadora }
      ]
    },
    {
      title: t('steps.5.title'),
      items: [
        { label: t('steps.5.fields.instagram'), value: data.instagram },
        { label: t('steps.5.fields.whatsapp'), value: data.whatsapp },
        { label: t('steps.5.fields.cores'), value: data.coresMarca },
        { label: t('steps.5.fields.canais_venda'), value: data.canalVendas.join(", ") },
        { label: t('steps.5.fields.dor_cliente'), value: data.dorCliente },
        { label: t('steps.5.fields.objecoes'), value: data.objecoes },
        { label: t('steps.5.fields.transformacao'), value: data.transformacao }
      ]
    }
  ];

  const handleCopy = () => {
    let textToCopy = `${t('app.title')} - ${t('app.subtitle')}\n\n`;
    
    sections.forEach(section => {
      const validItems = section.items.filter(item => item.value && String(item.value).trim() !== "");
      if (validItems.length > 0) {
        textToCopy += `## ${section.title.toUpperCase()}\n`;
        validItems.forEach(item => {
          textToCopy += `${item.label}: ${item.value}\n`;
        });
        textToCopy += "\n";
      }
    });

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    let yPos = 20;

    doc.setFillColor(26, 46, 90);
    doc.rect(0, 0, 210, 30, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(t('app.title'), 15, 15);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(t('app.subtitle'), 15, 23);

    yPos = 40;

    sections.forEach(section => {
      const validItems = section.items.filter(item => item.value && String(item.value).trim() !== "");
      if (validItems.length === 0) return;

      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFillColor(201, 168, 76);
      doc.rect(15, yPos, 180, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(section.title.toUpperCase(), 20, yPos + 7);
      
      yPos += 15;

      const tableData = validItems.map(item => [item.label, item.value]);

      autoTable(doc, {
        startY: yPos,
        head: [[t('steps.6.table.question'), t('steps.6.table.answer')]],
        body: tableData,
        theme: 'plain',
        headStyles: {
          fillColor: [26, 46, 90],
          textColor: 255,
          fontStyle: 'bold'
        },
        bodyStyles: {
          textColor: 50,
        },
        alternateRowStyles: {
          fillColor: [248, 247, 244]
        },
        columnStyles: {
          0: { cellWidth: 55, fontStyle: 'bold' }
        },
        margin: { left: 15, right: 15 }
      });

      yPos = (doc as any).lastAutoTable.finalY + 15;
    });

    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `briefing-skintech-${i18n.language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">{t('steps.6.title')}</h2>
        <p className="text-muted-foreground mb-6">{t('steps.6.subtitle')}</p>
      </div>

      <div className="bg-white rounded-[14px] border border-border p-6 shadow-sm space-y-8">
        {sections.map(section => {
          const validItems = section.items.filter(item => item.value && String(item.value).trim() !== "");
          if (validItems.length === 0) return null;

          return (
            <div key={section.title}>
              <h3 className="text-lg font-serif text-gold mb-3 border-b border-border pb-2">{section.title}</h3>
              <div className="space-y-3">
                {validItems.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                    <span className="font-semibold text-foreground sm:w-1/3 flex-shrink-0">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          onClick={handleCopy}
          className="btn-gold flex-1 flex items-center justify-center gap-2"
        >
          {copied ? (
            <>
              <Check size={20} />
              {t('nav.copied')}
            </>
          ) : (
            <>
              <Copy size={20} />
              {t('nav.copy')}
            </>
          )}
        </button>
        
        <button 
          onClick={handleExportPDF}
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <FileDown size={20} />
          {t('nav.export_pdf')}
        </button>
      </div>
    </div>
  );
};

export default Step6Summary;
