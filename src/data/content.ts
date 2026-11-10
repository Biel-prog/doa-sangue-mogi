import type { BloodUnit, BloodComponent, DonationStep, FaqItem, OfficialSource } from '../types';

export const BLOOD_UNITS: BloodUnit[] = [
  {
    id: 'hemocentro-santacasa',
    name: 'Hemocentro Transfusão',
    subname: 'Santa Casa de Misericórdia de Mogi das Cruzes',
    address: 'Rua Barão de Jaceguai, 1.148',
    neighborhood: 'Centro',
    city: 'Mogi das Cruzes',
    state: 'SP',
    cep: '08710-100',
    phone: '(11) 4752-9999',
    phoneClean: '1147529999',
    scheduleNotes: 'A instituição consultada informa necessidade de agendamento prévio. Entre em contato por telefone para agendar seu melhor horário.',
    appointmentRequired: true,
    appointmentStatusText: 'Agendamento prévio necessário',
    verifiedHours: 'Confirmar diretamente por telefone antes de comparecer (a unidade não opera com horário livre sem prévio contato).',
    websiteUrl: 'https://santacasamc.com.br/servicos/banco-de-sangue/',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hemocentro+Transfusao+Rua+Barao+de+Jaceguai+1148+Mogi+das+Cruzes',
    coordinates: [-23.52627, -46.18688],
    notes: 'Ponto tradicional de doação localizado no complexo central da Santa Casa de Mogi das Cruzes. Atendimento humanizado com triagem rigorosa e agendada.',
    lastVerified: 'Novembro de 2026',
  },
  {
    id: 'centrho-hematologia',
    name: 'Centrho',
    subname: 'Centro de Hematologia e Hemoterapia',
    address: 'Rua Dona Afife Nassif Jafet, 223',
    neighborhood: 'Vila Industrial',
    city: 'Mogi das Cruzes',
    state: 'SP',
    cep: '08770-070',
    phone: '(11) 4799-2892',
    phoneClean: '1147992892',
    scheduleNotes: 'Consulte a unidade previamente para confirmar disponibilidade de triagem e eventuais orientações de agendamento.',
    appointmentRequired: false,
    appointmentStatusText: 'Confirmar com a unidade',
    verifiedHours: 'Segunda a sexta-feira, das 7h30 às 12h (cadastros públicos sujeitos à confirmação antes de se deslocar).',
    websiteUrl: 'https://centrho.com.br/',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Centrho+Banco+de+Sangue+Rua+Dona+Afife+Nassif+Jafet+223+Mogi+das+Cruzes',
    coordinates: [-23.51862, -46.19535],
    notes: 'Serviço especializado em hematologia e hemoterapia na Vila Industrial. Recomenda-se ligar antes do deslocamento para confirmar o atendimento do dia.',
    lastVerified: 'Novembro de 2026',
  },
];

export const BLOOD_COMPONENTS: BloodComponent[] = [
  {
    id: 'hemacias',
    name: 'Hemácias',
    scientificName: 'Glóbulos Vermelhos (Concentrado)',
    description: 'Células responsáveis pelo transporte de oxigênio a todos os órgãos e tecidos vitais do corpo.',
    usage: [
      'Vítimas de acidentes de trânsito e traumas com grande perda de sangue',
      'Cirurgias de alta complexidade (cardíacas, ortopédicas e vasculares)',
      'Pacientes com anemias crônicas ou agudas graves',
      'Tratamentos de hemorragias pós-parto e cirúrgicas',
    ],
    shelfLife: 'Validade de até 35 a 42 dias sob refrigeração controlada',
    colorClass: 'text-red-700 border-red-200 bg-red-50/60',
    accentBg: '#B3263A',
  },
  {
    id: 'plaquetas',
    name: 'Plaquetas',
    scientificName: 'Concentrado de Plaquetas',
    description: 'Pequenos fragmentos celulares vitais para a formação de coágulos e contenção de sangramentos.',
    usage: [
      'Pacientes oncológicos em quimioterapia agressiva',
      'Pessoas com leucemias e linfomas',
      'Pacientes submetidos a transplantes de medula óssea',
      'Pessoas com distúrbios graves de coagulação e plaquetopenia',
    ],
    shelfLife: 'Validade de apenas 5 a 7 dias em agitação constante',
    colorClass: 'text-amber-800 border-amber-200 bg-amber-50/60',
    accentBg: '#D97706',
  },
  {
    id: 'plasma',
    name: 'Plasma',
    scientificName: 'Plasma Fresco Congelado',
    description: 'A porção líquida do sangue (cerca de 55%), rica em água, sais minerais, anticorpos e fatores de coagulação.',
    usage: [
      'Vítimas de grandes queimaduras e choques hipovolêmicos',
      'Tratamento de deficiências de fatores de coagulação',
      'Pacientes com doenças hepáticas em estado crítico',
      'Produção de hemoderivados como albumina e imunoglobulina',
    ],
    shelfLife: 'Pode ser conservado congelado por até 1 a 2 anos',
    colorClass: 'text-yellow-800 border-yellow-200 bg-yellow-50/60',
    accentBg: '#EAB308',
  },
  {
    id: 'crioprecipitado',
    name: 'Crioprecipitado',
    scientificName: 'Fração concentrada de Fibrinogênio e Fator VIII',
    description: 'Subfração obtida a partir do descongelamento do plasma, concentrada em fatores essenciais de estanque de sangue.',
    usage: [
      'Pacientes com hemofilia A e deficiência de fator VIII',
      'Casos graves de Doença de von Willebrand',
      'Hemorragias obstétricas e cirurgias com hipofibrinogenemia',
      'Coagulopatias intravasculares disseminadas',
    ],
    shelfLife: 'Conservado ultracongelado por até 1 ano',
    colorClass: 'text-rose-900 border-rose-200 bg-rose-50/60',
    accentBg: '#9F1239',
  },
];

export const DONATION_STEPS: DonationStep[] = [
  {
    number: 1,
    title: 'Cadastro e Identificação',
    subtitle: 'Recepção e registro seguro',
    description: 'Apresentação de documento oficial original com foto. O cadastro registra seus dados no sistema de hemoterapia com total sigilo e proteção.',
    tips: 'Leve documento com foto oficial (RG, CNH ou e-Título com foto). O consentimento é formal e rápido.',
    duration: '5 a 10 min',
    iconName: 'UserCheck',
  },
  {
    number: 2,
    title: 'Avaliação Inicial',
    subtitle: 'Checagem de sinais vitais e hemoglobina',
    description: 'Verificação básica e indolor de peso, pressão arterial, frequência cardíaca, temperatura e um microteste na ponta do dedo para checar se você tem anemia.',
    tips: 'Procedimento simples e rápido para garantir que seu corpo está perfeitamente seguro para doar.',
    duration: '5 a 8 min',
    iconName: 'Activity',
  },
  {
    number: 3,
    title: 'Triagem Clínica Individual',
    subtitle: 'Entrevista confidencial com a enfermagem',
    description: 'Conversa privada e acolhedora com profissional de saúde especializado. Serve para analisar histórico de viagens, medicamentos, hábitos e segurança para você e o paciente.',
    tips: 'Seja 100% sincero nas respostas. O sigilo médico é inviolável e protege você e quem receberá a transfusão.',
    duration: '10 a 15 min',
    iconName: 'ClipboardCheck',
  },
  {
    number: 4,
    title: 'Coleta de Sangue',
    subtitle: 'Procedimento tranquilo e 100% esterilizado',
    description: 'Você se acomoda em uma poltrona confortável. Profissionais experientes realizam a punção com agulha descartável de uso único. São retirados aproximadamente 450 ml de sangue.',
    tips: 'Não há risco algum de contrair doenças: todos os materiais são descartáveis. Relaxe e respire normalmente.',
    duration: '8 a 12 min',
    iconName: 'HeartHandshake',
  },
  {
    number: 5,
    title: 'Lanche e Recuperação',
    subtitle: 'Hidratação e retorno gradual à rotina',
    description: 'Após a coleta, você permanece descansando por alguns minutos na sala de lanche e recebe suco, água e opções nutritivas para repor líquidos e energia rapidamente.',
    tips: 'Coma seu lanche com calma, beba bastante água durante as horas seguintes e solicite o atestado/comprovante.',
    duration: '15 min',
    iconName: 'Coffee',
  },
];

export const ELIGIBILITY_RULES = {
  requirements: [
    {
      title: 'Idade',
      text: 'Entre 16 e 69 anos. A primeira doação precisa ser realizada até os 60 anos incompletos. Jovens de 16 e 17 anos precisam de consentimento formal assinado pelos pais ou responsáveis legais com documento comprobatório.',
    },
    {
      title: 'Peso Mínimo',
      text: 'Ter no mínimo 50 kg (necessário para que o volume de coleta de 450 ml permaneça rigorosamente dentro da margem fisiológica segura de menos de 10% do sangue total).',
    },
    {
      title: 'Estado Geral de Saúde',
      text: 'Sentir-se bem, sem febre, sem sintomas de resfriado, sem mal-estar ou infecções agudas nas semanas anteriores à doação.',
    },
    {
      title: 'Sono e Descanso',
      text: 'Ter dormido no mínimo 6 horas nas últimas 24 horas antes da doação. Não compareça virado da noite de trabalho ou de vigília.',
    },
    {
      title: 'Alimentação Prévia',
      text: 'Estar bem alimentado. Nunca vá em jejum. Evite apenas refeições excessivamente gordurosas (como feijoada, frituras ou carnes pesadas) nas 3 horas anteriores.',
    },
    {
      title: 'Documentação Oficial',
      text: 'Apresentar documento de identificação com foto emitido por órgão oficial (RG, CNH, Passaporte, Carteira de Trabalho física ou digital oficial no celular).',
    },
  ],
  temporaryBlocks: [
    {
      cause: 'Gripe, resfriado ou febre',
      period: 'Aguardar 7 a 14 dias após o desaparecimento completo de todos os sintomas.',
    },
    {
      cause: 'Gravidez e Pós-parto',
      period: 'Durante toda a gestação; 90 dias após parto normal; 180 dias após cesariana; período de amamentação integral (até 12 meses da criança).',
    },
    {
      cause: 'Tatuagens e Micropigmentação',
      period: 'Em geral 6 a 12 meses após a realização, dependendo das normas sanitárias vigentes e da avaliação da unidade de hemoterapia.',
    },
    {
      cause: 'Cirurgias e Procedimentos Odontológicos',
      period: 'De 72 horas (limpezas ou extrações simples) até 6 meses para procedimentos cirúrgicos maiores com anestesia geral.',
    },
    {
      cause: 'Vacinas Recentes',
      period: 'De 48 horas (gripe, tétano) a 4 semanas (febre amarela, tríplice viral, sarampo, rubéola, dengue). Informe a vacina na triagem.',
    },
    {
      cause: 'Ingestão de Bebidas Alcoólicas',
      period: 'Aguardar pelo menos 12 horas antes da coleta sem ingerir álcool.',
    },
    {
      cause: 'Medicamentos Específicos',
      period: 'Antibióticos, anti-inflamatórios ou moduladores de pressão exigem prazos específicos. Leve o nome de todos os remédios anotado.',
    },
  ],
  permanentBlocks: [
    {
      cause: 'Hepatite após os 11 anos',
      description: 'Pessoas com histórico de hepatite viral após os 11 anos de idade não estão aptas à doação de sangue.',
    },
    {
      cause: 'Infecções transmissíveis pelo sangue',
      description: 'Diagnóstico positivo ou evidência clínica/laboratorial para HIV, Hepatite B, Hepatite C, HTLV I/II ou Doença de Chagas.',
    },
    {
      cause: 'Uso de drogas ilícitas injetáveis',
      description: 'Histórico de uso de drogas injetáveis não prescritas que elevem risco de contaminação cruzada.',
    },
    {
      cause: 'Doenças hematológicas ou autoimunes graves',
      description: 'Determinadas condições crônicas que comprometam a imunidade ou a formação regular dos elementos do sangue.',
    },
  ],
};

export const INTERVALS_INFO = {
  men: {
    minDays: 60,
    maxPerYear: 4,
    label: 'Homens',
    description: 'Intervalo mínimo de 60 dias entre coletas convencionais, com teto de até 4 doações em um período de 12 meses.',
  },
  women: {
    minDays: 90,
    maxPerYear: 3,
    label: 'Mulheres',
    description: 'Intervalo mínimo de 90 dias entre coletas convencionais, com teto de até 3 doações em um período de 12 meses, respeitando a recomposição das reservas biológicas de ferro.',
  },
  notes: 'Esses intervalos são balizadores gerais do Ministério da Saúde para doação de sangue total. Cada serviço pode aplicar critérios complementares conforme a triagem do dia.',
};

export const WORKPLACE_RIGHTS_INFO = {
  article: 'Artigo 473, Inciso IV da Consolidação das Leis do Trabalho (CLT)',
  summary: 'O empregado sob regime da CLT pode deixar de comparecer ao serviço, sem prejuízo do seu salário integral, por 1 (um) dia a cada período de 12 meses de trabalho, em caso de doação voluntária de sangue devidamente comprovada.',
  rules: [
    {
      step: '1. Realize a doação voluntária',
      detail: 'Compareça à unidade de coleta oficial e conclua o processo voluntário de doação.',
    },
    {
      step: '2. Solicite a declaração oficial',
      detail: 'Peça ao setor de recepção ou enfermagem do hemocentro o atestado/comprovante de comparecimento e doação com carimbo e assinatura da instituição.',
    },
    {
      step: '3. Apresente ao RH / Empregador',
      detail: 'Entregue o documento ao departamento pessoal da sua empresa de acordo com os procedimentos internos e prazos de justificativa.',
    },
    {
      step: '4. Atenção ao limite de 12 meses',
      detail: 'A legislação garante 1 dia remunerado por ciclo de 12 meses de trabalho. Isso não significa folga em toda e qualquer doação realizada ao longo do ano.',
    },
  ],
  legislationUrl: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
};

export const FAQS: FaqItem[] = [
  {
    question: 'Doar sangue dói?',
    category: 'procedimento',
    answer: 'Pode haver um leve desconforto de um segundo no momento da picada da agulha, semelhante a um exame comum de sangue. Durante a coleta você não sente dor alguma. O ambiente é calmo, os profissionais são treinados e o processo costuma ser muito tranquilo.',
  },
  {
    question: 'Posso doar sangue em jejum?',
    category: 'requisitos',
    answer: 'Não! Nunca vá doar sangue em jejum. É essencial estar alimentado para evitar tontura ou queda de pressão. Faça uma refeição leve (pão, café sem excesso, frutas, sucos) e evite apenas alimentos gordurosos (frituras, embutidos, maionese) nas 3 horas que antecedem a coleta.',
  },
  {
    question: 'Posso trabalhar normalmente depois da doação?',
    category: 'rotina',
    answer: 'Na maioria dos casos de funções de escritório ou trabalho intelectual leve, a pessoa segue suas tarefas sem problema. No entanto, é fundamental evitar esforço físico intenso, carregar peso ou praticar esportes pesados nas primeiras 12 a 24 horas. Se você trabalha com carteira assinada (CLT), tem direito legal a 1 dia de ausência remunerada a cada 12 meses mediante o comprovante emitido pela unidade.',
  },
  {
    question: 'Posso dirigir após a doação de sangue?',
    category: 'rotina',
    answer: 'Se você estiver se sentindo perfeitamente bem, sem tontura ou fraqueza, dirigir em trajetos habituais costuma ser permitido após os 15 minutos de descanso e lanche na unidade. Entretanto, caso sinta qualquer mal-estar ou visão turva, não dirija e avise a equipe imediatamente. Profissionais de transporte coletivo ou condutores de carga pesada devem evitar a atividade no restante do dia.',
  },
  {
    question: 'Quanto tempo dura todo o procedimento?',
    category: 'procedimento',
    answer: 'O tempo total de permanência no local gira em torno de 40 a 50 minutos, incluindo todas as etapas (cadastro, pré-triagem de sinais vitais, triagem confidencial, os 8 a 12 minutos de coleta na poltrona e o lanche de recuperação). Esse período é uma estimativa de referência, podendo variar conforme o fluxo da unidade no dia.',
  },
  {
    question: 'Preciso pagar algum valor para doar sangue?',
    category: 'requisitos',
    answer: 'Não. A doação de sangue no Brasil é 100% voluntária e gratuita por determinação da Constituição Federal e da Lei nº 10.205/2001. Não é cobrada nenhuma taxa do doador, e o ato não pode ser remunerado em dinheiro.',
  },
  {
    question: 'Posso doar se tiver feito tatuagem ou micropigmentação?',
    category: 'requisitos',
    answer: 'Sim, desde que respeitados os prazos e normas sanitárias vigentes. Em geral, recomenda-se aguardar entre 6 e 12 meses após a realização de tatuagens, maquiagem definitiva ou colocação de piercings, dependendo das condições de biossegurança do estúdio e da avaliação individual na triagem clínica.',
  },
  {
    question: 'Posso doar sangue tomando medicamentos?',
    category: 'requisitos',
    answer: 'Depende de qual é o medicamento, da dosagem e da condição clínica que está sendo tratada. Alguns remédios não impedem a doação (como anticoncepcionais e certos remédios para pressão), enquanto antibióticos e anticoagulantes exigem suspensão temporária. Leve sempre o nome de todos os remédios anotado para a entrevista médica de triagem.',
  },
  {
    question: 'Posso doar sangue mais de uma vez ao ano?',
    category: 'procedimento',
    answer: 'Sim, e sua regularidade é fundamental para os estoques! Homens podem realizar até 4 doações em um período de 12 meses, respeitando o intervalo mínimo de 60 dias. Mulheres podem doar até 3 vezes em 12 meses, com intervalo mínimo de 90 dias entre as coletas.',
  },
  {
    question: 'É necessário agendar horário para doar em Mogi das Cruzes?',
    category: 'unidades',
    answer: 'Depende da unidade. O Hemocentro Transfusão (Santa Casa de Mogi das Cruzes) informa expressamente a necessidade de agendamento prévio pelo telefone (11) 4752-9999. No caso do Centrho, recomenda-se ligar com antecedência para o telefone (11) 4799-2892 para verificar as regras e o fluxo de atendimento da semana antes de se deslocar.',
  },
  {
    question: 'Qual documento devo levar no dia da doação?',
    category: 'requisitos',
    answer: 'Apresente um documento oficial de identificação com foto emitido por órgão público, em perfeito estado de conservação: RG, Carteira Nacional de Habilitação (CNH), Passaporte, Carteira de Trabalho física ou a versão digital oficial em aplicativo governamental (como Carteira Digital de Trânsito ou RG Digital).',
  },
];

export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    title: 'Ministério da Saúde',
    institution: 'Governo Federal do Brasil',
    description: 'Diretrizes nacionais, critérios de elegibilidade, normas de hemoterapia e campanhas públicas de doação.',
    url: 'https://www.gov.br/saude/pt-br/composicao/saes/doacao-de-sangue',
    badge: 'Federal',
  },
  {
    title: 'Prefeitura de Mogi das Cruzes',
    institution: 'Administração Municipal',
    description: 'Portal institucional e notícias da saúde municipal com publicações e comunicados de conscientização.',
    url: 'https://www.mogidascruzes.sp.gov.br/',
    badge: 'Municipal',
  },
  {
    title: 'Secretaria de Estado da Saúde de SP',
    institution: 'Governo do Estado de São Paulo',
    description: 'Informações estaduais sobre a rede de sangue, hemocentros e políticas de saúde pública paulistas.',
    url: 'https://saude.sp.gov.br/',
    badge: 'Estadual',
  },
  {
    title: 'Santa Casa de Mogi das Cruzes — Banco de Sangue',
    institution: 'Hemocentro Transfusão',
    description: 'Página oficial de serviços do complexo hospitalar de Mogi das Cruzes com orientações da unidade.',
    url: 'https://santacasamc.com.br/servicos/banco-de-sangue/',
    badge: 'Unidade Local',
  },
  {
    title: 'Centrho Hemoterapia',
    institution: 'Centro de Hematologia e Hemoterapia',
    description: 'Site oficial com informações clínicas, contatos e serviços de hematologia em Mogi das Cruzes.',
    url: 'https://centrho.com.br/',
    badge: 'Unidade Local',
  },
  {
    title: 'Presidência da República — CLT Art. 473',
    institution: 'Portal da Legislação / Planalto',
    description: 'Texto legal oficial sobre ausência justificada ao serviço com remuneração em caso de doação voluntária.',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm',
    badge: 'Legislação Oficial',
  },
];

export const USEFUL_PHONES = [
  {
    entity: 'Hemocentro Transfusão (Santa Casa)',
    phone: '(11) 4752-9999',
    tel: 'tel:1147529999',
    purpose: 'Agendamento e dúvidas sobre doação de sangue',
    isPrimary: true,
  },
  {
    entity: 'Centrho (Vila Industrial)',
    phone: '(11) 4799-2892',
    tel: 'tel:1147992892',
    purpose: 'Informações de coleta, horários e atendimento',
    isPrimary: true,
  },
  {
    entity: 'Prefeitura de Mogi das Cruzes',
    phone: '(11) 4798-5000',
    tel: 'tel:1147985000',
    purpose: 'Central de informações municipais',
    isPrimary: false,
  },
  {
    entity: 'Secretaria Municipal de Saúde',
    phone: '(11) 4798-6701',
    tel: 'tel:1147986701',
    purpose: 'Contato institucional da gestão da saúde',
    isPrimary: false,
  },
  {
    entity: 'Disque Saúde (Ministério da Saúde)',
    phone: '136',
    tel: 'tel:136',
    purpose: 'Ouvidoria-Geral do SUS e orientações nacionais gratuitas',
    isPrimary: false,
  },
];
