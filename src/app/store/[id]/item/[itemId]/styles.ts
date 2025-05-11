import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.defaultWhite};
  padding: 16px;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin: 4px 0 12px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BasePrice = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.defaultGrey};
  font-weight: 600;
  margin-top: 4px;
`;

export const Section = styled.div`
  padding: 16px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: 8px;
`;

export const TotalLabel = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.defaultGrey};

  strong {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const AddBtn = styled.button`
  background: ${({ theme }) => theme.colors.defaultGrey};
  color: ${({ theme }) => theme.colors.defaultWhite};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  width: 108px;
  height: 40px;
  border: none;
  cursor: pointer;
`;

export const QtyControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconBtn = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.defaultGreen};
  display: flex;
  padding: 2px;
  cursor: pointer;
`;

export const CircleBtn = styled(IconBtn)`
  border: 2px solid ${({ theme }) => theme.colors.defaultGreen};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;


export const OptionGroup = styled.div`
  padding: 12px 0;
`;

export const GroupHeader = styled(Row)`
  font-weight: 700;
  text-transform: lowercase;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: 12px;
  font-weight: 700;
  width: 78px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Hint = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #777;
  margin: 4px 0 8px;
`;
export const RadioRow = styled(Row) <{ selected?: boolean }>`
  justify-content: space-between;
  padding: 6px 0;
  margin-bottom: 12px;

  input[type="radio"] {
    accent-color: ${({ selected }) => (selected ? "#8900bb" : "#ccc")};
    margin-right: 8px;
    transform: scale(1.4);
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.defaultGrey};
    flex: 1;
  }
`;

export const CheckRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 0;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #bbb;
    border-radius: 4px;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      width: 4px;
      height: 8px;
      border: solid #8900bb;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.defaultGrey};
    margin-left: 10px;
    cursor: pointer;

    span {
      flex: 1;
    }
  }
`;

export const PriceDiff = styled.span`
  margin-left: auto;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};;
  font-weight: 700;
`;

export const Promo = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.defaultGrey};
  font-size: 12px;
  font-weight: 700;

  strong {
  font-size: 14px;
  font-weight: 700;
  color: #02A117;
}
`;

export const DrinkLabel = styled.span`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.defaultGrey};
`;

export const NoteArea = styled.textarea`
  width: 100%;
  min-height: 58px;
  padding: 8px;
  border: 2px solid #CDD1D9;
  border-radius: 6px;
  padding: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.defaultGrey};
  font-weight: 600;
  margin-bottom: 55px;
  resize: vertical;
`;
export const FloatingButton = styled.button`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 45px);
  max-width: 450px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
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

export const Qty = styled.span`
  width: 16px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const CounterRow = styled(Row)`
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;
