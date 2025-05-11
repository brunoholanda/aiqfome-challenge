"use client";

import styled from "styled-components";
import { stores as allStores } from "@/app/data/stores";
import { StoreCard } from "./StoreCard";
import { Store } from "@/app/types";

type Props = {
  stores?: Store[];
  closed?: boolean;
};

export function StoreList({ stores = allStores, closed = false }: Props) {
  return (
    <List>
      {stores.map((s) => (
        <StoreCard key={s.id} {...s} closed={closed} />
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
