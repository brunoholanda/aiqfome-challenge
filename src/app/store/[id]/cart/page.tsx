"use client";

import { useEffect, useState } from "react";
import * as S from './styles';
import Icon from "@/app/components/Icon";
import { stores } from "@/app/data/stores";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import { CartItem, SavedItem } from "@/app/types";

export default function CartPage() {
  const router = useRouter();
  const [cart] = useState<CartItem[]>([]);
  const [cartRaw, setCartRaw] = useState<SavedItem[]>([]);
  const params = useParams();
  const store = stores.find((s) => s.id === params?.id?.toString());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartRaw(JSON.parse(saved));
  }, []);

  const persist = (data: SavedItem[]) => {
    localStorage.setItem("cart", JSON.stringify(data));
    setCartRaw(data);
  };

  useEffect(() => {
    if (cart.length) localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const subtotal = cartRaw.reduce((s, i) => s + i.total, 0);

  const inc = (idx: number) =>
    persist(
      cartRaw.map((it, i) =>
        i === idx
          ? { ...it, quantity: it.quantity + 1, total: it.total + it.total / it.quantity }
          : it
      )
    );

  const dec = (idx: number) =>
    persist(
      cartRaw.map((it, i) =>
        i === idx && it.quantity > 1
          ? { ...it, quantity: it.quantity - 1, total: it.total - it.total / it.quantity }
          : it
      )
    );

  const remove = (idx: number) => persist(cartRaw.filter((_, i) => i !== idx));
  const buildGroups = (it: SavedItem): CartItem['groups'] => [
    it.size && { title: "tamanho", lines: [{ label: it.size }] },
    it.accomp?.length && {
      title: "acompanhamentos",
      lines: it.accomp.map((a) => ({ label: a })),
    },
    it.drinks?.length && {
      title: "vai querer bebida?",
      lines: it.drinks.map((d) => ({ label: d.label, priceDiff: d.price })),
    },
    it.extras?.length && {
      title: "extras",
      lines: it.extras.map((e) => ({ label: e })),
    },
  ].filter(Boolean) as CartItem['groups'];

  return (
    <>
      <S.Wrapper>
        {store && (
          <S.StoreHeader onClick={() => router.push(`/store/${params?.id}`)}>
            <S.Logo src={store.logo} alt={store.name} />
            <div>
              <S.Small>seus itens em</S.Small>
              <S.StoreName>{store.name}</S.StoreName>
            </div>
          </S.StoreHeader>
        )}
        {cartRaw.map((item, idx) => (
          <div key={idx}>
            <S.Card>
              <S.Row>
                <S.Title>{item.name}</S.Title>
                <S.Price>R$ {item.total.toFixed(2)}</S.Price>
              </S.Row>
              <S.EditRow>
                <S.Edit>
                  <Icon name="edit" width={14} height={14} />
                  editar
                </S.Edit>
                <S.Qty>
                  {item.quantity === 1 ? (
                    <S.IconBtnPlain onClick={() => remove(idx)}>
                      <FiTrash2 size={16} />
                    </S.IconBtnPlain>
                  ) : (
                    <S.CircleBtnMinus onClick={() => dec(idx)}>
                      <FiMinus size={16} />
                    </S.CircleBtnMinus>
                  )}
                  <S.QtyText>{item.quantity}</S.QtyText>
                  <S.CircleBtnPlus onClick={() => inc(idx)}>
                    <FiPlus size={16} />
                  </S.CircleBtnPlus>
                </S.Qty>
              </S.EditRow>
              <S.Details>
                {buildGroups(item).map((g) => (
                  <S.OptionGroup key={g.title}>
                    <S.GroupHeader>• {g.title}</S.GroupHeader>
                    {g.lines.map((l, i) => (
                      <S.LineRow key={i}>
                        <span>{l.label}</span>
                        {l.priceDiff && <S.PriceDiff>+R$ {l.priceDiff.toFixed(2)}</S.PriceDiff>}
                      </S.LineRow>
                    ))}
                  </S.OptionGroup>
                ))}
                {item.note && <S.Note><strong>observação: </strong>{item.note}</S.Note>}
              </S.Details>
            </S.Card>
            {idx < cartRaw.length - 1 && <S.Divider />}
          </div>
        ))}
      </S.Wrapper>

      <S.Footer>
        <S.Subtotal>
          <span>subtotal</span>
          <strong>R$ {subtotal.toFixed(2)}</strong>
        </S.Subtotal>
        <S.PayBtn onClick={() => setShowModal(true)}>ir para pagamento</S.PayBtn>
      </S.Footer>
      {showModal && (
        <S.ModalOverlay onClick={() => setShowModal(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>💡 Quer transformar essa tela em um checkout real?</h2><br></br>
            <p>Integrações com métodos de pagamento (Pix, cartão, carteira digital e mais) podem ser adicionadas com segurança e performance.</p><br></br>
            <h3>📩 Me contrate como Dev Sênior e vamos implementar isso juntos!</h3>
            <S.CloseBtn onClick={() => setShowModal(false)}>Fechar</S.CloseBtn>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}