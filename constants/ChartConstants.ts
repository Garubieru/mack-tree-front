import { ChartKey, ChartOperator } from '../enums/Chart';

export const COLORS = [
  '#CF9FFF',
  '#E0B0FF',
  '#DA70D6',
  '#CCCCFF',
  '#C3B1E1',
  '#9932CC',
  '#BA55D3',
  '#D8BFD8',
  '#7F00FF',
  '#AA336A',
];

export const KEY = {
  [ChartKey.MODEL]: 'modelos',
  [ChartKey.FUEL_TYPE]: 'tipos de gasolina',
  [ChartKey.TRANSMISSION]: 'tipos de câmbio',
  [ChartKey.YEAR]: 'cada ano',
};

export const OPERATOR = {
  [ChartOperator.EQUAL]: 'à',
  [ChartOperator.LESS]: 'à menos de',
  [ChartOperator.LESS_THAN]: 'à menos ou igual a',
  [ChartOperator.MORE]: 'à mais de',
  [ChartOperator.MORE_THAN]: 'à mais ou igual a',
};
