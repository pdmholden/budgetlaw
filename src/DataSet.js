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
    trigger: 'question-children',
  },
  {
    id: 'question-children',
    message: 'Ok, before we go into that, I have a few more questions. Do you and your spouse have children together?',
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
    trigger: 'question-custody',
  },
  {
    id: 'question-custody',
    message: 'Thanks. How likely are you and your spouse to agree on how to deal with your parenting and custody situation? (Likely, Unlikely)',
    trigger: 'question-custody-options',
  },
  {
    id: "question-custody-options",
    options: [
      { value: 'likely', label: 'Likely', trigger: 'question-financial-1' },
      { value: 'unlikely', label: 'Unlikely', trigger: 'question-financial-1' },
    ],
  },
  {
    id: 'question-financial-1',
    message: 'Has one of you had or lost financial opportunities as the result of the relationship? If so, who has benefitted?',
    trigger: 'question-financial-1-response',
  },
  {
    id: 'question-financial-1-response',
    user: true,
    // trigger: 'question-financial-2',
    trigger: 'question-working-together',
  },
  // {
  //   id: 'question-financial-2',
  //   message: 'Will either you or your partner be better off financially than the other?',
  //   trigger: 'question-financial-2-response',
  // },
  // {
  //   id: 'question-financial-2-response',
  //   user: true,
  //   trigger: 'question-working-together',
  // },
  {
    id: 'question-working-together',
    message: 'How likely are you and your spouse to come to an agreement that takes your differences in financials into account? (Likely, Unlikely)',
    trigger: 'question-working-together-options',
  },
  {
    id: "question-working-together-options",
    options: [
      { value: 'likely', label: 'Likely', trigger: 'question-house' },
      { value: 'unlikely', label: 'Unlikely', trigger: 'question-house' },
    ],
  },
  {
    id: 'question-house',
    message: 'Do you rent or own a home?',
    trigger: 'question-house-own',
  },
  {
    id: 'question-house-own',
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
      { value: 'very good', label: 'Very good', trigger: 'question-financial-limit' },
      { value: 'good', label: 'Good', trigger: 'question-financial-limit' },
      { value: 'poor', label: 'Poor', trigger: 'question-financial-limit' },
      { value: 'very poor', label: 'Very poor', trigger: 'question-financial-limit' },
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
    message: "Thanks for the info. Please click below for a breakdown of your situation.",
    end: true,
  },
  {
    id: 'default',
    message: "Sorry, I don't know how to answer that right now. Please contact xxx.",
    end: true,
  },
];
