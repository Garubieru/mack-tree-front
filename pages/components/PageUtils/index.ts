import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const MainContainer = styled.main`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: scroll;
`;

export const PageTitle = styled.h1`
  font-size: 600;
  font-size: 3.4rem;
  align-self: center;
  margin: 3rem 0;
`;

export const ChartContainer = styled.div`
  background: ${colors.white};
  width: 100%;
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  align-self: center;
  padding: 3rem;
  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  grid-gap: 1.8rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
