import { useCallback } from 'react';
import styled from 'styled-components';

export const InputText = ({ value, placeholder, onChange }) => {
  const handleChange = useCallback(
    (e) => {
      const val = e.target.value;
      onChange(val);
    },
    [onChange]
  );

  const displayValue = value.length > 20 ? value.slice(0, 20) + '…' : value;

  return (
    <StyledTextField
      placeholder={placeholder || 'Placeholder'}
      value={displayValue}
      onChange={handleChange}
    />
  );
};

const StyledTextField = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;

  max-width: 240px;
  width: 100%;
  height: 40px;

  background: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;

  color: #f5f5f5;

  &:active,
  &:hover {
    background: #334466;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b3b3b3;
  }
`;
