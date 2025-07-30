import styled from 'styled-components';
import { Button } from '../../shared/ui/Button';
import { InputText } from '../../shared/ui/InputText';
import { Select } from '../../shared/ui/Select';
import { useCallback, useState } from 'react';
import { useData } from '../providers';

export const Filter = () => {
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const { apiURL, setApiURL, setActivePage } = useData();

  const handleApply = useCallback(() => {
    const url = new URL(apiURL.toString());

    if (status) url.searchParams.set('status', status);
    if (gender) url.searchParams.set('gender', gender);
    if (species) url.searchParams.set('species', species);
    if (name) url.searchParams.set('name', name);
    if (type) url.searchParams.set('type', type);
    url.searchParams.set('page', 0);
    setActivePage(0);

    setApiURL(url.toString());
  }, [status, gender, species, name, type, apiURL, setApiURL, setActivePage]);

  const handleReset = useCallback(() => {
    setStatus('');
    setGender('');
    setSpecies('');
    setName('');
    setType('');
    setApiURL('https://rickandmortyapi.com/api/character/');
  }, [setApiURL]);

  return (
    <StyledFilterGrid>
      <Select
        placeholder={'Status'}
        options={['alive', 'dead', 'unknown']}
        value={status}
        onChange={setStatus}
      />
      <Select
        placeholder={'Gender'}
        options={['female', 'male', 'genderless', 'unknown']}
        value={gender}
        onChange={setGender}
      />
      <Select
        placeholder={'Species'}
        options={[
          'Human',
          'Alien',
          'Humanoid',
          'Poopybutthole',
          'Mythological Creature',
          'Robot',
          'Cronenberg',
          'Animal',
          'Disease',
          'unknown'
        ]}
        value={species}
        onChange={setSpecies}
      />
      <InputText placeholder={'Name'} value={name} onChange={setName} />
      <InputText placeholder={'Type'} value={type} onChange={setType} />
      <StyledButtonContainer>
        <Button onClick={handleApply}>Apply</Button>
        <Button type={'danger'} onClick={handleReset}>
          Reset
        </Button>
      </StyledButtonContainer>
    </StyledFilterGrid>
  );
};

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

const StyledFilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 530px) {
    width: 240px;
    grid-template-columns: 1fr;
  }
`;
