import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <TopText>
        feito com 💜 em maringá-PR
      </TopText>
      <BottomText>
        aiqfome.com © 2007-2023 aiqfome LTDA . <br />
        CNPJ: 09.186.786/0001-58
      </BottomText>
    </Container>
  );
}

const Container = styled.footer`
  background-color: #f3f4f8;
  padding: 30px 16px;
  text-align: center;
  font-size: 13px;
`;

const TopText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 8px;
`;

const BottomText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
