import { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export function Select({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  const handleOptionClick = useCallback(
    (opt) => () => {
      onChange(opt);
      setOpen(false);
    },
    [onChange]
  );

  const handleClickOutside = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <StyledSelectWrapper ref={wrapperRef}>
      <StyledSelectInput onClick={toggleOpen}>
        {value || placeholder}
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          )}
        </StyledIcon>
      </StyledSelectInput>
      {open && (
        <StyledOptions>
          {options.map((opt) => (
            <StyledOption key={opt} onClick={handleOptionClick(opt)}>
              {opt}
            </StyledOption>
          ))}
        </StyledOptions>
      )}
    </StyledSelectWrapper>
  );
}

const StyledSelectWrapper = styled.div`
  position: relative;
  max-width: 240px;
  width: 100%;
`;

const StyledSelectInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;

  height: 40px;
  background: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  color: #f5f5f5;
  cursor: pointer;

  &:hover {
    background: #334466;
  }
`;

const StyledOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  margin: 4px 0 0;
  padding: 0;
  list-style: none;

  max-height: 220px;
  overflow-y: auto;

  background: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  z-index: 10;
`;

const StyledOption = styled.li`
  padding: 12px 16px;
  color: #f5f5f5;
  cursor: pointer;

  &:hover {
    background: #334466;
  }
`;

const StyledIcon = styled.svg`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #f5f5f5;
  pointer-events: none;
`;
