export const validationRules = {
  date: 'required',
  type: 'required|string',
  amount: 'required|number',
};

export const validationMessages = {
  'date.required': '*выберите дату транзакции',
  'type.required': '*выберите тип транзакции',
  'amount.required': '*введите сумму транзакции',
};

export const Type = {
  Income: '+',
  Expense: '-',
};

export const options = [
  { value: 'Основные расходы', label: 'Основные расходы' },
  { value: 'Продукты', label: 'Продукты' },
  { value: 'Машина', label: 'Машина' },
  { value: 'Забота о себе', label: 'Забота о себе' },
  { value: '"Забота о детях', label: '"Забота о детях' },
  { value: 'Товары для дома', label: 'Товары для дома' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Досуг', label: 'Досуг' },
  { value: 'Другие расходы', label: 'Другие расходы' },
];

export const getCategory = (value, label) => {
  return label.find(elem => elem.value === value);
};
