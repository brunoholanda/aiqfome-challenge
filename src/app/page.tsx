"use client";

import styled from "styled-components";
import { SearchBar } from "./components/SearchBar";
import { StoreList } from "./components/StoreList";
import { stores } from "./data/stores";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStores = stores.filter((store) => {
    const term = searchTerm.toLowerCase();
    return (
      store.name.toLowerCase().includes(term)
    );
  });

  const openStores = filteredStores.filter((store) => store.isOpen);
  const closedStores = filteredStores.filter((store) => !store.isOpen).slice(0, 6);

  return (
    <>
      <PageContainer>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </PageContainer>
      <Banner src="/banner.webp" alt="Promoção - 50% OFF" />
      <StoresContainer>
        <SectionTitle>abertos</SectionTitle>
        <StoreList stores={openStores} />
      </StoresContainer>
      <StoresContainer>
        <SectionTitle>fechados</SectionTitle>
        <StoreCardWrapper>
          <StoreList stores={closedStores} closed />
          <Tooltip>no momento esta loja está fechada</Tooltip>
        </StoreCardWrapper>
      </StoresContainer>
    </>
  );
}

const PageContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0;
  margin: 0;
  top: 65px;
  width: 100%;
  position: absolute;
`;

const Banner = styled.img`
  width: 100%;
  margin: 70px 0 0 0;
`;

const StoresContainer = styled.div`
  margin: 25px 20px;
`;
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
`;

const StoreCardWrapper = styled.div`
  position: relative;
  &:hover ${Tooltip} {
    opacity: 1;
  }
`;
