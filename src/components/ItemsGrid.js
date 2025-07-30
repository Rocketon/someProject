import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './Card';
import { scrollBarWidth } from '../shared/helpers/scrollBarWidth';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  const cardOnClickHandler = useCallback((character) => {
    document.body.style.paddingRight = `${scrollBarWidth()}px`;
    document.body.style.overflow = 'hidden';
    setPopupSettings({
      visible: true,
      content: { ...character }
    });
  }, []);

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((character) => (
        <Card
          key={character.id}
          onClickHandler={cardOnClickHandler}
          character={character}
        />
      ))}

      <Popup settings={popupSettings} setSettings={setPopupSettings} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
