"use client";

import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import Icon from "../../Icon";
import Link from "next/link";

export function Header() {
  return (
    <Container>
      <Left>
        <Link href="/">
          <Icon name="logo" width={32} height={32} alt="logo do site" />
        </Link>
        <AddressInfo>
          <Icon name="gps" width={14} height={16} alt="icone gps e localizacao" />
          <TextAddress>
            <span>entregando em</span>
            <strong>
              Rua Mandaguari, 198 <FiChevronRight size={14} />
            </strong>
          </TextAddress>
        </AddressInfo>
      </Left>
      <Icon name="profile" width={32} height={32} alt="profile" />
    </Container>
  );
}

const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 20px;
`;

const TextAddress = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    color: #EECFFC;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.defaultWhite};
  }
`;
