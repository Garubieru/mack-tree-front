import useSWR from 'swr';
import { ChartKey, ChartOperator } from '../../enums/Chart';

type Data = {
  name: string;
  value: number;
};

type Params = {
  price: number;
  operator: ChartOperator;
  chartKey: ChartKey;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useChart = (params: Params) => {
  const { chartKey, operator, price } = params;
  const { data, error } = useSWR<Data[]>(
    `http://localhost:3333/getBmw?price=${price}&operator=${operator}&key=${chartKey}`,
    fetcher
  );
  return {
    chartData: data,
    isLoading: !data && !error,
    error: error,
  };
};
