"use client";

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

interface Props {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <Wrapper>
      <FiSearch size={18} color="#999" />
      <Input
        placeholder="busque pela loja ou culinária"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.defaultWhite};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 14px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin: 16px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  color: #333;
  background: transparent;

  &::placeholder {
    color: #aaa;
  }
`;
