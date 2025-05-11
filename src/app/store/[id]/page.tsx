"use client";

import { notFound, useParams } from "next/navigation";
import * as S from './styles';
import { stores } from "@/app/data/stores";
import Icon from "@/app/components/Icon";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { fakeMenu } from "@/app/data/fakeMenu";
import Link from "next/link";

export default function StorePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const params = useParams();
  const storeId = Array.isArray(params.id) ? params.id[0] : params.id;

  const store = stores.find((s) => s.id === storeId);
  if (!store) return notFound();
  const handleShare = () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: store.name,
        text: `Confira ${store.name} no Ai que Fome`,
        url: shareUrl,
      }).catch((err) => console.error("Erro ao compartilhar:", err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("Link copiado para a área de transferência!");
      });
    }
  };

  return (
    <S.Container>
      <S.StoreHeader>
        <S.HeaderTop>
          <S.HeaderInfo>
            <S.TitleRow>
              <S.Logo src={store.logo} alt={store.name} />
              <S.Name>{store.name}</S.Name>
            </S.TitleRow>

            <S.ActionRow>
              <S.Social>
                <S.ShareBtn onClick={handleShare}>
                  <Icon name="share" width={20} height={20} />
                </S.ShareBtn>
                <Icon name="like" width={20} height={20} />
              </S.Social>
              <S.MoreInfos>mais infos ›</S.MoreInfos>
            </S.ActionRow>

            <S.Row>
              <Icon name="moto" width={22} height={22} />
              <S.DeliveryText>{store.deliveryText} ›</S.DeliveryText>
              <span> • hoje, 30-40 min</span>
              <span> • 5.2km</span>
            </S.Row>

            <S.Highlight>entrega grátis acima de R$ 35,00</S.Highlight>

            <S.Row>
              <Icon name="star" width={14} height={14} />
              <span>4.5 de 5</span>
              <S.GreenText> • fecha às 20:00</S.GreenText>
            </S.Row>

            <span>pedido mínimo: R$ 15,00</span>
          </S.HeaderInfo>
        </S.HeaderTop>
      </S.StoreHeader>


      <S.SectionList>
        {Object.entries(fakeMenu).map(([section, { description, items }]) => {
          const isExpanded = expandedSections[section] || false;

          const toggleSection = () => {
            setExpandedSections((prev) => ({
              ...prev,
              [section]: !isExpanded,
            }));
          };

          return (
            <S.Section key={section}>
              <S.SectionTitle onClick={toggleSection}>
                {section}
                {(section === "Niguiris" || section === "Ceviches") && (
                  <Icon name="money" width={18} height={18} />
                )}
                <S.ExpandIcon $expanded={isExpanded}>
                  {isExpanded ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </S.ExpandIcon>
              </S.SectionTitle>


              {description && <S.SectionSubtitle>{description}</S.SectionSubtitle>}

              <S.ItemsList $expanded={isExpanded}>
                {items.map((item, index) => (
                  <Link
                    key={`${item.name}-${index}`}
                    href={`/store/${params.id}/item/${encodeURIComponent(item.name)}`}
                  >
                    <S.MenuItem key={item.name} $highlight={item.highlight}>
                      <S.ItemInfo>
                        <S.ItemNameWithIcons>
                          <span>{item.name}</span>
                          {item.icons?.map((iconName) => (
                            <Icon key={iconName} name={iconName} width={16} height={16} />
                          ))}
                        </S.ItemNameWithIcons>
                        <S.ItemDescription>{item.description}</S.ItemDescription>
                      </S.ItemInfo>

                      <S.ItemPriceWrapper>
                        {item.originalPrice && (
                          <S.OriginalPrice>R$ {item.originalPrice.toFixed(2)}</S.OriginalPrice>
                        )}
                        <S.ItemPrice $highlight={item.highlight || item.discounted}>
                          {item.discounted && <Icon name="money" width={14} height={14} />}
                          R$ {item.price.toFixed(2)}
                        </S.ItemPrice>
                      </S.ItemPriceWrapper>
                    </S.MenuItem>
                  </Link>
                ))}
              </S.ItemsList>
            </S.Section>
          );
        })}
      </S.SectionList>
    </S.Container>
  );
}
