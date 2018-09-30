export const Steps = [
  {
    id: 'start',
    message: 'What can I help you with today?',
    trigger: 'start-response',
  },
  {
    id: 'start-response',
    user: true,
    trigger: 'question-separated',
  },
  {
    id: 'question-separated',
    message: 'Ok. I can help with that but I’ll need to ask you a few questions. First, are you currently separated?',
    trigger: 'question-separated-yes',
  },
  {
    id: 'question-separated-yes',
    user: true,
    trigger: 'question-separated-time',
  },
  {
    id: 'question-separated-time',
    message: 'Have you been separated for more than a year?',
    trigger: 'question-separated-time-yes',
  },
  {
    id: 'question-separated-time-yes',
    user: true,
    trigger: 'divorce-process-bc',
  },
  {
    id: 'divorce-process-bc',
    message: 'Ok, Thanks here is some more information on the divorce process in BC https://www.supremecourtbc.ca/family-law/divorce-and-separation. But, before we go into that, I have a few more questions.',
    trigger: 'question-children',
  },
  {
    id: 'question-children',
    message: 'Do you and your spouse have children together?',
    trigger: 'question-children-yes',
  },
  {
    id: 'question-children-yes',
    user: true,
    trigger: 'question-children-age',
  },
  {
    id: 'question-children-age',
    message: 'Are they over 19?',
    trigger: 'question-children-age-no',
  },
  {
    id: 'question-children-age-no',
    user: true,
    trigger: 'question-financial-1',
  },
  {
    id: 'question-financial-1',
    message: 'Has one of you had or lost financial opportunities as the result of the relationship? If so, who has benefitted?',
    trigger: 'question-financial-1-response',
  },
  {
    id: 'question-financial-1-response',
    user: true,
    trigger: 'question-financial-2',
  },
  {
    id: 'question-financial-2',
    message: 'Will either you or your partner be better off financially than the other?',
    trigger: 'question-financial-2-response',
  },
  {
    id: 'question-financial-2-response',
    user: true,
    trigger: 'question-house',
  },
  {
    id: 'question-house',
    message: 'Do you rent or own a home?',
    trigger: 'question-house-own',
  },
  {
    id: 'question-house-own',
    user: true,
    trigger: 'question-property',
  },
  {
    id: 'question-property',
    message: 'Do you and your spouse share any of the following types of property: bank accounts, physical property, possessions (vehicles, art, etc), investments or a business',
    trigger: 'question-property-yes',
  },
  {
    id: 'question-property-yes',
    user: true,
    trigger: 'question-debt',
  },
  {
    id: 'question-debt',
    message: 'Do you and your spouse have any debt?',
    trigger: 'question-debt-yes',
  },
  {
    id: 'question-debt-yes',
    user: true,
    trigger: 'question-communication',
  },
  {
    id: 'question-communication',
    message: 'How is the communication between you and your spouse (Very good, good, poor, very poor)?',
    trigger: 'question-communication-options',
  },
  {
    id: "question-communication-options",
    options: [
      { value: 'very good', label: 'Very good', trigger: 'question-working-together' },
      { value: 'good', label: 'Good', trigger: 'question-working-together' },
      { value: 'poor', label: 'Poor', trigger: 'question-working-together' },
      { value: 'very poor', label: 'Very poor', trigger: 'question-working-together' },
    ],
  },
  {
    id: 'question-working-together',
    message: 'How likely are you and your spouse agree on how to deal with your parenting, support, and property and debt issues? (Likely, Unlikely)',
    trigger: 'question-working-together-options',
  },
  {
    id: "question-working-together-options",
    options: [
      { value: 'likely', label: 'Likely', trigger: 'question-financial-limit' },
      { value: 'unlikely', label: 'Unlikely', trigger: 'question-financial-limit' },
    ],
  },
  {
    id: 'question-financial-limit',
    message: 'Do you have a financial limit on the amount of are able to spend on an agreement? If so, what is it?',
    trigger: 'question-financial-limit-response',
  },
  {
    id: 'question-financial-limit-response',
    user: true,
    trigger: 'end',
  },
  {
    id: 'end',
    message: "---",
    end: true,
  },
  {
    id: 'default',
    message: "Sorry, I don't know how to answer that right now. Please contact xxx.",
    end: true,
  },
];
