import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  'pt-BR': {
    translation: {
      "app": {
        "title": "Skin Tech Switzerland",
        "subtitle": "Briefing Estratégico"
      },
      "nav": {
        "prev": "Anterior",
        "next": "Próximo",
        "submit": "Enviar",
        "copy": "Copiar Briefing",
        "copied": "Copiado!",
        "export_pdf": "Exportar PDF"
      },
      "steps": {
        "1": {
          "title": "Identidade da Marca",
          "subtitle": "Comece nos contando a essência da sua marca.",
          "fields": {
            "company_name": "Nome da empresa",
            "company_placeholder": "Ex: Skin Tech Switzerland",
            "storytelling": "Storytelling da marca",
            "storytelling_placeholder": "Conte a história da marca, origem, propósito...",
            "diferenciais": "3 principais diferenciais",
            "diferenciais_placeholder": "Liste os diferenciais competitivos...",
            "tom_de_voz": "Tom de voz da comunicação",
            "publico_alvo": "Público-alvo principal"
          },
          "options": {
            "tom_de_voz": ["Sofisticado/premium", "Técnico/educativo", "Próximo/acolhedor", "Inspirador/aspiracional"],
            "publico_alvo": ["Esteticistas", "Clínicas pequeno porte", "Clínicas médicas", "Spas", "Revendedores"]
          }
        },
        "2": {
          "title": "Equipamentos",
          "subtitle": "Descreva os equipamentos que sua marca oferece.",
          "fields": {
            "list_title": "Lista de Equipamentos",
            "equipment_label": "Equipamento",
            "name": "Nome/Modelo",
            "name_placeholder": "Ex: UltraLift HD",
            "category": "Categoria",
            "category_other": "Especifique a categoria...",
            "price": "Preço à vista (R$)",
            "price_placeholder": "Ex: 150000",
            "treatments": "Tratamentos realizados",
            "treatments_placeholder": "Ex: Flacidez, Celulite",
            "diferencial": "Diferencial técnico",
            "diferencial_placeholder": "Ex: Refrigeração a -10ºC",
            "add_equipment": "Adicionar equipamento",
            "frequency": "Frequência de lançamentos",
            "certifications": "Certificações e selos",
            "certifications_placeholder": "Ex: ANVISA, CE, FDA..."
          },
          "options": {
            "frequency": ["A cada 3 meses", "A cada 6 meses", "Anualmente"],
            "categories": ["Laser", "Radiofrequência", "Ultrassom", "Criolipólise", "LED/Fototerapia", "Microagulhamento", "HIFU", "Eletroestimulação", "Outros"]
          }
        },
        "3": {
          "title": "Financiamento",
          "subtitle": "Como seus clientes podem adquirir seus equipamentos?",
          "fields": {
            "modalities": "Modalidades de pagamento aceitas",
            "max_installments": "Máximo de parcelas",
            "installments_per_eq": "Parcelas por equipamento:",
            "no_equipment": "Nenhum equipamento cadastrado. Adicione equipamentos na Etapa 2 para definir parcelas individuais.",
            "min_interest": "Juros mínimo (%)",
            "max_interest": "Juros máximo (%)",
            "cash_discount": "Desconto à vista",
            "min_entry": "Entrada mínima",
            "juros_placeholder": "Ex: 1.5",
            "desconto_placeholder": "Ex: 10% ou R$ 500",
            "entrada_placeholder": "Ex: 20% ou R$ 2.000"
          },
          "options": {
            "modalities": ["Cartão de crédito", "Boleto bancário", "Twint", "Financiamento bancário", "Consórcio", "Leasing"],
            "installments": ["12x", "24x", "36x", "48x+", "Varia por equipamento"]
          }
        },
        "4": {
          "title": "Calculadora de ROI",
          "subtitle": "Informações para simular o retorno sobre o investimento do cliente.",
          "fields": {
            "procedimentos_dia": "Procedimentos por dia estimativa",
            "procedimentos_placeholder": "Ex: 5 a 10 procedimentos por dia dependendo da clínica...",
            "valor_min": "Valor mínimo por sessão (R$)",
            "valor_max": "Valor máximo por sessão (R$)",
            "valor_placeholder_min": "Ex: 150",
            "valor_placeholder_max": "Ex: 800",
            "dias_mes": "Dias de uso por mês",
            "dias_mes_placeholder": "Ex: 22",
            "tempo_retorno": "Tempo estimado de retorno",
            "casos_sucesso": "Possui casos de sucesso?",
            "formato_calc": "Formato da calculadora no site"
          },
          "options": {
            "tempo_retorno": ["Até 3 meses", "3 a 6 meses", "6 a 12 meses", "Mais de 12 meses"],
            "casos_sucesso": ["Sim, tenho cases documentados", "Tenho depoimentos informais", "Ainda não tenho"],
            "formato_calc": ["Calculadora interativa no site", "Tabela comparativa", "Simulador personalizado"]
          }
        },
        "5": {
          "title": "Presença Digital",
          "subtitle": "Entenda como sua marca se posiciona na internet e nas vendas.",
          "fields": {
            "instagram": "Instagram",
            "whatsapp": "WhatsApp",
            "cores": "Cores da marca",
            "canais_venda": "Canal de vendas principal",
            "dor_cliente": "Dor do cliente antes da compra",
            "objecoes": "Objeções comuns na venda",
            "transformacao": "Transformação entregue ao paciente",
            "instagram_placeholder": "@seuinstagram",
            "whatsapp_placeholder": "(11) 99999-9999",
            "cores_placeholder": "Ex: Azul marinho, dourado, branco",
            "dor_placeholder": "O que motiva o seu cliente a procurar seus equipamentos?",
            "objecoes_placeholder": "O que costuma impedir o fechamento no primeiro momento?",
            "transformacao_placeholder": "Qual o resultado/sentimento gerado no paciente final?"
          },
          "options": {
            "canais": ["Instagram", "WhatsApp", "Site próprio", "Marketplace", "Representantes comerciais", "Eventos/feiras"]
          }
        },
        "6": {
          "title": "Resumo e Conclusão",
          "subtitle": "Revise as informações preenchidas antes de exportar.",
          "table": {
            "question": "Pergunta",
            "answer": "Resposta"
          }
        }
      }
    }
  },
  'pt-PT': {
    translation: {
      "app": {
        "title": "Skin Tech Switzerland",
        "subtitle": "Briefing Estratégico"
      },
      "nav": {
        "prev": "Anterior",
        "next": "Seguinte",
        "submit": "Submeter",
        "copy": "Copiar Briefing",
        "copied": "Copiado!",
        "export_pdf": "Exportar PDF"
      },
      "steps": {
        "1": {
          "title": "Identidade da Marca",
          "subtitle": "Comece por partilhar a essência da sua marca.",
          "fields": {
            "company_name": "Nome da empresa",
            "company_placeholder": "Ex: Skin Tech Switzerland",
            "storytelling": "Storytelling da marca",
            "storytelling_placeholder": "Conte a história da marca, origem, propósito...",
            "diferenciais": "3 principais diferenciais",
            "diferenciais_placeholder": "Liste os diferenciais competitivos...",
            "tom_de_voz": "Tom de voz da comunicação",
            "publico_alvo": "Público-alvo principal"
          },
          "options": {
            "tom_de_voz": ["Sofisticado/premium", "Técnico/educativo", "Próximo/acolhedor", "Inspirador/aspiracional"],
            "publico_alvo": ["Esteticistas", "Clínicas pequeno porte", "Clínicas médicas", "Spas", "Revendedores"]
          }
        },
        "2": {
          "title": "Equipamentos",
          "subtitle": "Descreva os equipamentos que a sua marca oferece.",
          "fields": {
            "list_title": "Lista de Equipamentos",
            "equipment_label": "Equipamento",
            "name": "Nome/Modelo",
            "category": "Categoria",
            "category_other": "Especifique a categoria...",
            "price": "Preço a pronto (CHF)",
            "treatments": "Tratamanentos realizados",
            "diferencial": "Diferencial técnico",
            "add_equipment": "Adicionar equipamento",
            "frequency": "Frequência de lançamentos",
            "certifications": "Certificações e selos"
          },
          "options": {
            "frequency": ["A cada 3 meses", "A cada 6 meses", "Anualmente"],
            "categories": ["Laser", "Radiofrequência", "Ultrassom", "Criolipólise", "LED/Fototerapia", "Microagulhamento", "HIFU", "Eletroestimulação", "Outros"]
          }
        },
        "3": {
          "title": "Financiamento",
          "subtitle": "Como os seus clientes podem adquirir os seus equipamentos?",
          "fields": {
            "modalities": "Modalidades de pagamento aceites",
            "max_installments": "Máximo de prestações",
            "installments_per_eq": "Prestações por equipamento:",
            "no_equipment": "Nenhum equipamento registado. Adicione equipamentos na Etapa 2 para definir prestações individuais.",
            "min_interest": "Juros mínimos (%)",
            "max_interest": "Juros máximos (%)",
            "cash_discount": "Desconto pronto pagamento",
            "min_entry": "Entrada mínima"
          },
          "options": {
            "modalities": ["Cartão de crédito", "Boleto bancário", "Twint", "Financiamento bancário", "Consórcio", "Leasing"],
            "installments": ["12x", "24x", "36x", "48x+", "Varia por equipamento"]
          }
        },
        "4": {
          "title": "Calculadora de ROI",
          "subtitle": "Informações para simular o retorno sobre o investimento do cliente.",
          "fields": {
            "procedimentos_dia": "Procedimentos por dia (estimativa)",
            "valor_min": "Valor mínimo por sessão (CHF)",
            "valor_max": "Valor máximo por sessão (CHF)",
            "dias_mes": "Dias de uso por mês",
            "tempo_retorno": "Tempo estimado de retorno",
            "casos_sucesso": "Possui casos de sucesso?",
            "formato_calc": "Formato da calculadora no site"
          },
          "options": {
            "tempo_retorno": ["Até 3 meses", "3 a 6 meses", "6 a 12 meses", "Mais de 12 meses"],
            "casos_sucesso": ["Sim, tenho cases documentados", "Tenho depoimentos informais", "Ainda não tenho"],
            "formato_calc": ["Calculadora interativa no site", "Tabela comparativa", "Simulador personalizado"]
          }
        },
        "5": {
          "title": "Presença Digital",
          "subtitle": "Garantir a presença da marca online e nas vendas.",
          "fields": {
            "instagram": "Instagram",
            "whatsapp": "WhatsApp",
            "cores": "Cores da marca",
            "canais_venda": "Canal de vendas principal",
            "dor_cliente": "Dores do cliente antes da compra",
            "objecoes": "Objeções comuns na venda",
            "transformacao": "Transformação entregue ao paciente"
          },
          "options": {
            "canais": ["Instagram", "WhatsApp", "Site próprio", "Marketplace", "Representantes comerciais", "Eventos/feiras"]
          }
        },
        "6": {
          "title": "Resumo e Conclusão",
          "subtitle": "Reveja as informações preenchidas antes de exportar.",
          "table": {
            "question": "Pergunta",
            "answer": "Resposta"
          }
        }
      }
    }
  },
  'fr-CH': {
    translation: {
      "app": {
        "title": "Skin Tech Switzerland",
        "subtitle": "Briefing Stratégique"
      },
      "nav": {
        "prev": "Précédent",
        "next": "Suivant",
        "submit": "Soumettre",
        "copy": "Copier le Briefing",
        "copied": "Copié!",
        "export_pdf": "Exporter en PDF"
      },
      "steps": {
        "1": {
          "title": "Identité de la Marque",
          "subtitle": "Commencez par nous raconter l'essence de votre marque.",
          "fields": {
            "company_name": "Nom de l'entreprise",
            "company_placeholder": "Ex: Skin Tech Switzerland",
            "storytelling": "Storytelling de la marque",
            "storytelling_placeholder": "Racontez l'histoire de la marque, son origine, son but...",
            "diferenciais": "3 principaux différentiels",
            "diferenciais_placeholder": "Listez vos avantages concurrentiels...",
            "tom_de_voz": "Ton de voix de la communication",
            "publico_alvo": "Public cible principal"
          },
          "options": {
            "tom_de_voz": ["Sophistiqué/premium", "Technique/éducatif", "Proche/chaleureux", "Inspirant/aspirationnel"],
            "publico_alvo": ["Esthéticiennes", "Petites cliniques", "Cliniques médicales", "Spas", "Revendeurs"]
          }
        },
        "2": {
          "title": "Équipements",
          "subtitle": "Décrivez les équipements que votre marque propose.",
          "fields": {
            "list_title": "Liste des Équipements",
            "equipment_label": "Équipement",
            "name": "Nom/Modèle",
            "name_placeholder": "Ex: UltraLift HD",
            "category": "Catégorie",
            "category_other": "Spécifiez la catégorie...",
            "price": "Prix au comptant (CHF)",
            "price_placeholder": "Ex: 25000",
            "treatments": "Traitements réalisés",
            "treatments_placeholder": "Ex: Relâchement, Cellulite",
            "diferencial": "Différentiel technique",
            "diferencial_placeholder": "Ex: Refroidissement à -10ºC",
            "add_equipment": "Ajouter un équipement",
            "frequency": "Fréquence des lancements",
            "certifications": "Certifications et labels",
            "certifications_placeholder": "Ex: ANVISA, CE, FDA..."
          },
          "options": {
            "frequency": ["Tous les 3 mois", "Tous les 6 mois", "Annuellement"],
            "categories": ["Laser", "Radiofréquence", "Ultrasons", "Cryolipolyse", "LED/Photothérapie", "Micro-aiguilletage", "HIFU", "Électrostimulation", "Autres"]
          }
        },
        "3": {
          "title": "Financement",
          "subtitle": "Comment vos clients peuvent-ils acquérir vos équipements ?",
          "fields": {
            "modalities": "Modalités de paiement acceptées",
            "max_installments": "Maximum de mensualités",
            "installments_per_eq": "Mensualités par équipement :",
            "no_equipment": "Aucun équipement enregistré. Ajoutez des équipements à l'étape 2 pour définir des mensualités individuelles.",
            "min_interest": "Intérêt minimum (%)",
            "max_interest": "Intérêt maximum (%)",
            "cash_discount": "Remise au comptant",
            "min_entry": "Acompte minimum",
            "juros_placeholder": "Ex: 1.5",
            "desconto_placeholder": "Ex: 10% ou 500 CHF",
            "entrada_placeholder": "Ex: 20% ou 2.000 CHF"
          },
          "options": {
            "modalities": ["Carte de crédit", "Virement bancaire", "Twint", "Financement bancaire", "Consortium", "Leasing"],
            "installments": ["12x", "24x", "36x", "48x+", "Varie par équipement"]
          }
        },
        "4": {
          "title": "Calculateur de ROI",
          "subtitle": "Informations pour simuler le retour sur investissement du client.",
          "fields": {
            "procedimentos_dia": "Procédures par jour (estimation)",
            "procedimentos_placeholder": "Ex: 5 à 10 procédures par jour selon la clinique...",
            "valor_min": "Valeur minimale par séance (CHF)",
            "valor_max": "Valeur maximale par séance (CHF)",
            "valor_placeholder_min": "Ex: 150",
            "valor_placeholder_max": "Ex: 800",
            "dias_mes": "Jours d'utilisation par mois",
            "dias_mes_placeholder": "Ex: 22",
            "tempo_retorno": "Temps de retour estimé",
            "casos_sucesso": "Avez-vous des cas de réussite ?",
            "formato_calc": "Format du calculateur sur le site"
          },
          "options": {
            "tempo_retorno": ["Jusqu'à 3 mois", "3 à 6 mois", "6 à 12 mois", "Plus de 12 mois"],
            "casos_sucesso": ["Oui, j'ai des cas documentés", "J'ai des témoignages informels", "Pas encore"],
            "formato_calc": ["Calculateur interactif sur le site", "Tableau comparatif", "Simulateur personnalisé"]
          }
        },
        "5": {
          "title": "Présence Digitale",
          "subtitle": "Comprendre comment votre marque se positionne sur internet et dans les ventes.",
          "fields": {
            "instagram": "Instagram",
            "whatsapp": "WhatsApp",
            "cores": "Couleurs de la marque",
            "canais_venda": "Canal de vente principal",
            "dor_cliente": "Douleur du client avant l'achat",
            "objecoes": "Objections communes lors de la vente",
            "transformacao": "Transformation livrée au patient",
            "instagram_placeholder": "@votreinstagram",
            "whatsapp_placeholder": "079 000 00 00",
            "cores_placeholder": "Ex: Bleu marine, doré, blanc",
            "dor_placeholder": "Qu'est-ce qui motive votre client à rechercher vos équipements ?",
            "objecoes_placeholder": "Qu'est-ce qui empêche habituellement la clôture au premier moment ?",
            "transformacao_placeholder": "Quel est le résultat/sentiment généré chez le patient final ?"
          },
          "options": {
            "canais": ["Instagram", "WhatsApp", "Propre site web", "Marketplace", "Représentants commerciaux", "Événements/salons"]
          }
        },
        "6": {
          "title": "Résumé et Conclusion",
          "subtitle": "Révisez les informations remplies avant d'exporter.",
          "table": {
            "question": "Question",
            "answer": "Réponse"
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
