"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "../../Icon";
import { Store } from "@/app/types";

type Props = Store & { closed?: boolean };

export function StoreCard({ closed = false, ...store }: Props) {
  const { id, name, logo, deliveryIcon, deliveryText, deliveryColor, rating } =
    store;

  const router = useRouter();

  const handleClick = () => {
    if (!closed) {
      router.push(`/store/${id}`);
    }
  };
  return (
    <Card $closed={closed} onClick={handleClick}>
      <Logo src={logo} alt={name} width={72} height={72} priority />
      <Info>
        <Title>{name}</Title>
        <SubInfo>
          <Delivery>
            <Icon name={deliveryIcon} width={16} height={16} alt="entrega" />
            <span style={{ color: deliveryColor }}>{deliveryText}</span>
          </Delivery>
          <Rating>
            <Icon name="star" width={14} height={14} alt="avaliação" />
            {rating.toFixed(1)}
          </Rating>
        </SubInfo>
      </Info>
    </Card>
  );
}

const Card = styled.div<{ $closed: boolean }>`
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 18px;
  opacity: ${({ $closed }) => ($closed ? 0.45 : 1)};
  cursor: ${({ $closed }) => ($closed ? "not-allowed" : "pointer")};
`;

const Logo = styled(Image)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 4px;
`;

const SubInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Delivery = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
`;

const Rating = styled.div`
  display: flex;
  gap: 4px;
  font-size: 13px;
  color: #ffc107;
`;
