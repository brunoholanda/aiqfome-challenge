import styled from "styled-components";

export const Container = styled.div`
`;

export const StoreHeader = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0 18px 0;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 4px;
`;

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    margin: 0 20px 0 5px;
  }
`;

export const ShareBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.defaultGrey};
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;


export const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;

export const HeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.defaultGrey};
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MoreInfos = styled.span`
  color: ${({ theme }) => theme.colors.defaultGreen} !important;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;

export const DeliveryText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 14px;
`;

export const GreenText = styled.span`
  color: #02A117;
  font-weight: 600;
`;

export const Highlight = styled.div`
  background-color: #F2FAFA;
  color: ${({ theme }) => theme.colors.defaultGreen};
  font-weight: 700;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

export const Section = styled.div`
  padding: 18px;
  background-color: white;
  margin-bottom: 6px;

`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ExpandIcon = styled.span<{ $expanded: boolean }>`
  margin-left: auto;
  display: flex;
  transition: transform 0.6s ease;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});
`;

export const ItemsList = styled.div<{ $expanded: boolean }>`
  max-height: ${({ $expanded }) => ($expanded ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.6s ease;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: ${({ $expanded }) => ($expanded ? "12px" : "0")};

  a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryText};
}
`;

export const MenuItem = styled.div<{ $highlight?: boolean }>`
  background: ${({ theme }) => theme.colors.defaultWhite};
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  border-left: ${({ $highlight }) => ($highlight ? "4px solid #00bb72" : "none")};
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.defaultGrey};
  margin-top: 2px;
  line-height: 1.4;
  max-width: 260px;
`;

export const ItemPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;

export const ItemPrice = styled.span<{ $highlight?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${({ $highlight }) => ($highlight ? "#00bb72" : "#8900bb")};
  display: flex;
  align-items: center;
  width: 60px;
  img {
    margin-right: 5px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.defaultGrey};
  margin: 4px 40px 0 0;
  padding-left: 4px;
`;

export const ItemNameWithIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    font-weight: 700;
    font-size: 14px;
  }
`;



