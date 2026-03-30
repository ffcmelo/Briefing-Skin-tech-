import React, { useState } from 'react';
import type { BriefingData } from '../types';
import { Copy, Check, FileDown } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface StepProps {
  data: BriefingData;
}

const Step6Summary: React.FC<StepProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const sections = [
    {
      title: "Identidade da Marca",
      items: [
        { label: "Nome da empresa", value: data.nomeEmpresa },
        { label: "Storytelling", value: data.storytelling },
        { label: "Diferenciais", value: data.diferenciais },
        { label: "Tom de voz", value: data.tomDeVoz.join(", ") },
        { label: "Público-alvo", value: data.publicoAlvo.join(", ") }
      ]
    },
    {
      title: "Equipamentos",
      items: [
        ...data.equipamentos.map((eq, i) => ({
          label: `Equipamento ${i + 1} (${eq.nome})`,
          value: `Categoria: ${eq.categoria} | Preço: R$ ${eq.preco} | Tratamentos: ${eq.tratamentos} | Diferencial: ${eq.diferencial}`
        })),
        { label: "Frequência de lançamentos", value: data.frequenciaLancamentos },
        { label: "Certificações", value: data.certificacoes }
      ]
    },
    {
      title: "Financiamento",
      items: [
        { label: "Modalidades aceitas", value: data.modalidadesPagamento.join(", ") },
        { label: "Máximo de parcelas", value: data.maxParcelas },
        { label: "Juros", value: (data.jurosMinimo || data.jurosMaximo) ? `Mín: ${data.jurosMinimo}% | Máx: ${data.jurosMaximo}%` : "" },
        { label: "Desconto à vista", value: data.descontoVista },
        { label: "Entrada mínima", value: data.entradaMinima }
      ]
    },
    {
      title: "Calculadora de ROI",
      items: [
        { label: "Procedimentos/dia", value: data.procedimentosDia },
        { label: "Valor sessão", value: (data.valorSessaoMin || data.valorSessaoMax) ? `R$ ${data.valorSessaoMin} a R$ ${data.valorSessaoMax}` : "" },
        { label: "Tempo de retorno", value: data.tempoRetorno },
        { label: "Dias de uso/mês", value: data.diasMesUso },
        { label: "Casos de sucesso", value: data.casosSucesso },
        { label: "Formato calculadora", value: data.formatoCalculadora }
      ]
    },
    {
      title: "Presença Digital",
      items: [
        { label: "Instagram", value: data.instagram },
        { label: "WhatsApp", value: data.whatsapp },
        { label: "Cores da marca", value: data.coresMarca },
        { label: "Canais de venda", value: data.canalVendas.join(", ") },
        { label: "Dor do cliente", value: data.dorCliente },
        { label: "Objeções comuns", value: data.objecoes },
        { label: "Transformação", value: data.transformacao }
      ]
    }
  ];

  const handleCopy = () => {
    let textToCopy = "SKIN TECH SWITZERLAND - BRIEFING ESTRATÉGICO\n\n";
    
    sections.forEach(section => {
      const validItems = section.items.filter(item => item.value && item.value.trim() !== "");
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

    // Header Navy (26,46,90) - hsl(221, 55%, 23%) approx
    doc.setFillColor(26, 46, 90);
    doc.rect(0, 0, 210, 30, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Skin Tech Switzerland", 15, 15);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Briefing Estratégico", 15, 23);

    yPos = 40;

    sections.forEach(section => {
      const validItems = section.items.filter(item => item.value && item.value.trim() !== "");
      if (validItems.length === 0) return;

      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }

      // Section Banner Gold (201,168,76) - hsl(44, 55%, 54%) approx
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
        head: [['Pergunta', 'Resposta']],
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
          fillColor: [248, 247, 244] // Creme #F8F7F4
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
    link.download = 'briefing-skintech.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-foreground mb-4">Resumo e Conclusão</h2>
        <p className="text-muted-foreground mb-6">Revise as informações preenchidas antes de exportar.</p>
      </div>

      <div className="bg-white rounded-[14px] border border-border p-6 shadow-sm space-y-8">
        {sections.map(section => {
          const validItems = section.items.filter(item => item.value && item.value.trim() !== "");
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
              Copiado!
            </>
          ) : (
            <>
              <Copy size={20} />
              Copiar Briefing
            </>
          )}
        </button>
        
        <button 
          onClick={handleExportPDF}
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <FileDown size={20} />
          Exportar PDF
        </button>
      </div>
    </div>
  );
};

export default Step6Summary;
