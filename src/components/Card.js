import styled from 'styled-components';

import { useCallback } from 'react';
import { genderIcons } from '../shared/helpers/genders';

export function Card({ character, onClickHandler }) {
  const { status, name, species, type, gender, image } = character;

  const handleClick = useCallback(() => {
    onClickHandler(character);
  }, [character, onClickHandler]);

  return (
    <StyledCard onClick={handleClick}>
      <CardImg src={image} alt={name} />
      <CardInfo>
        <CardTitle name={name} icon={genderIcons[gender] || null} />
        <CardStatus status={status} species={species} type={type} />
      </CardInfo>
    </StyledCard>
  );
}

export function CardTitle({ name, icon, className }) {
  return (
    <CardTitleContainer className={className}>
      <StyledCardTitle className="card-title">{name}</StyledCardTitle>
      <IconContainer>{icon}</IconContainer>
    </CardTitleContainer>
  );
}

export function CardStatus({ status, species, type, className }) {
  return (
    <CardStatusContainer className={className}>
      <StyledCardStatus status={status}>{status}</StyledCardStatus>
      &nbsp;-&nbsp;
      <CardSpecies>{species}</CardSpecies>
      {type && <CardType>{type}</CardType>}
    </CardStatusContainer>
  );
}

const CardStatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCardStatus = styled.span`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  &::before {
    content: '';
    display: block;
    margin-right: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      switch (status) {
        case 'Alive':
          return '#83bf46';
        case 'Dead':
          return '#ff5152';
        default:
          return '#968c9d';
      }
    }};
  }
`;

const CardSpecies = styled.span``;

const CardType = styled.p`
  margin-top: 20px;
  width: 100%;
  color: #ddd;
  font-size: 16px;
`;

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  background: #263750;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover .card-title {
    color: #83bf46;
  }
`;

const CardImg = styled.img`
  border-radius: 10px 10px 0 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
`;

const IconContainer = styled.div`
  display: flex;
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledCardTitle = styled.h2`
  margin-right: 8px;
  transition: color 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  font-size: 24px;

  @media (max-width: 450px) {
    max-width: 130px;
    font-size: 18px;
  }
`;
