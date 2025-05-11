import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 26px;
  padding-bottom: 140px;
`;

export const StoreHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Small = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.defaultGrey};
  font-weight: 700;
`;

export const StoreName = styled.div`
   font-size: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
`;

export const Card = styled.div`
  padding: 16px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EditRow = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 12px;
`;

export const Title = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: 700;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
`;

export const Details = styled.div`
  margin-top: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const OptionGroup = styled.div`
  margin: 10px 0;

`;

export const GroupHeader = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.defaultGrey};
  font-weight: 700;
`;

export const LineRow = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 2px;
    font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.defaultGrey};
`;

export const PriceDiff = styled.span`
  color: ${({ theme }) => theme.colors.defaultGreen};
  font-weight: 700;
  font-size: 12px;
  margin-left: 25px;
`;

export const Note = styled.div`
  background: #F5F6F9;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 8px;
`;

export const Edit = styled.button`
  display: flex;
  margin-right: 26px;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.defaultGreen};
  font-weight: 600;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-weight: 600;
    width: 16px;
    text-align: center;
  }
`;

export const IconBtnPlain = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: ${({ theme }) => theme.colors.defaultGreen};
  cursor: pointer;
`;

export const CircleBase = styled.button<{ disabled?: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 2px solid ${({ theme }) => theme.colors.defaultGreen};
  background: transparent;
  color: ${({ theme }) => theme.colors.defaultGreen};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
      border: none;
      background: #EEF0F5;
      color: #9ea0a6;
      cursor: not-allowed;
    `}
`;

export const CircleBtnPlus = styled(CircleBase)``;
export const CircleBtnMinus = styled(CircleBase)``;

export const QtyText = styled.span`
  width: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 6px solid ${({ theme }) => theme.colors.background};
  margin: 0 -26px;
  width: calc(100% + 52px);
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 30px;
  background: ${({ theme }) => theme.colors.defaultWhite};
  display: flex;
  height: 80;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  z-index: 1000;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
`;

export const Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 800;
    margin-top: 2px;
  }
`;

export const PayBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.defaultWhite};
  border: none;
  border-radius:8px;
  width: 200px;
  height: 48px;
  padding: 14px 24px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  text-align: center;
`;

export const CloseBtn = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;