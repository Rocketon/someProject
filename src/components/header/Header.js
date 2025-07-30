import styled from 'styled-components';
import { Logo } from './Logo';
import { Filter } from '../filter';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Filter />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1090px) {
    flex-direction: column;
    gap: 30px;
  }
`;
