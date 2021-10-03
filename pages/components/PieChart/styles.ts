import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartInfo = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  width: 100%;
  height: 43px;
  font-weight: 600;
`;

export const TooltipContainer = styled.div`
  background: ${colors.white};
  border-radius: 0.8rem;
  padding: 1rem;
  color: ${colors.grayDark};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
