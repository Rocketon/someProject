import styled from 'styled-components';

export const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton $type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  --green-color: #83bf46;
  --red-color: #ff5152;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;

  cursor: pointer;
  background: none;
  border-radius: 8px;

  color: ${({ $type }) =>
    $type === 'danger' ? 'var(--red-color)' : 'var(--green-color)'};
  border: 1px solid
    ${({ $type }) =>
      $type === 'danger' ? 'var(--red-color)' : 'var(--green-color)'};

  &:hover {
    background: ${({ $type }) =>
      $type === 'danger' ? 'var(--red-color)' : 'var(--green-color)'};

    color: #ffffff;
  }
`;
