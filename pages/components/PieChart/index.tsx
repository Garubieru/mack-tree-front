import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  PieLabelRenderProps,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { ChartItem, ChartInfo, TooltipContainer } from './styles';
import { useChart } from '../../hooks/useChart';
import { ChartKey, ChartOperator } from '../../../enums/Chart';
import { KEY, COLORS, OPERATOR } from '../../../constants/ChartConstants';

type ChartProps = {
  price: number;
  operator: ChartOperator;
  chartKey: ChartKey;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}: PieLabelRenderProps) => {
  const RADIAN = Math.PI / 180;

  const radius =
    Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#33333"
      textAnchor={x > Number(cx) ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(Number(percent) * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip: React.FC<any> = ({ payload, active, label }) => {
  if (payload && payload.length && active) {
    return <TooltipContainer>{payload[0].name}</TooltipContainer>;
  }
  return null;
};

const PChart: React.FC<ChartProps> = ({ chartKey, operator, price }) => {
  const { chartData, isLoading } = useChart({
    chartKey: chartKey,
    operator: operator,
    price: price,
  });

  return !isLoading ? (
    <ChartItem>
      <ChartInfo>
        Porcentagem de {KEY[chartKey]} para carros vendidos {OPERATOR[operator]}{' '}
        $
        {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(
          price
        )}
      </ChartInfo>

      <PieChart width={220} height={220}>
        <Pie
          dataKey="value"
          data={chartData}
          outerRadius={80}
          height="100%"
          width="100%"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} cursor="pointer" />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ChartItem>
  ) : (
    <p>Loading...</p>
  );
};

export default PChart;
