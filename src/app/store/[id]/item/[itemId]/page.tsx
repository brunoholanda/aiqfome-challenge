"use client";

import { notFound } from "next/navigation";
import { fakeMenu } from "@/app/data/fakeMenu";
import * as S from './styles';
import { useMemo, useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Icon from "@/app/components/Icon";
import { useRouter } from "next/navigation";
import { ExtraItem } from "@/app/types";

interface Props {
  params: { id: string; itemId: string };
}

const SIZES: ExtraItem[] = [
  { id: "medium", label: "médio", price: 0 },
  { id: "large", label: "grande", price: 9 },
];

const ACCOMPANIMENTS: ExtraItem[] = [
  { id: "shoyu", label: "shoyu", price: 0 },
  { id: "gengibre", label: "gengibre", price: 0 },
  { id: "wasabi", label: "wasabi", price: 0 },
  { id: "none", label: "sem acompanhamentos", price: 0 },
];

const DRINKS: ExtraItem[] = [
  { id: "coca", label: "coca-cola", price: 5 },
  { id: "fanta", label: "fanta laranja", price: 5 },
  { id: "guarana", label: "guaraná antarctica", price: 5 },
  { id: "suco", label: "suco prats laranja", price: 6 },
  { id: "agua", label: "água sem gás", price: 3 },
];

const UTENSILS: ExtraItem[] = [
  { id: "hashi", label: "hashi", price: 0 },
  { id: "cutlery", label: "garfo e faca descartável", price: 1 },
];

const EXTRAS: ExtraItem[] = [
  { id: "biscoito", label: "biscoito da sorte", price: 2 },
  { id: "rolinho", label: "rolinho primavera", price: 8 },
  { id: "guioza", label: "guioza", price: 6 },
];

export default function ItemPage({ params }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(SIZES[0].id);
  const [accomp, setAccomp] = useState<string[]>([]);
  const [drinkQty, setDrinkQty] = useState<Record<string, number>>({});
  const [utensil, setUtensil] = useState<string | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const router = useRouter();

  const handleFinish = () => {
    if (quantity <= 0) return;

    const addedDrinks = Object.entries(drinkQty)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const drink = DRINKS.find(d => d.id === id);
        return drink ? { ...drink, quantity: qty } : null;
      })
      .filter(Boolean);

    const cartItem = {
      name: item?.name,
      quantity,
      note,
      size,
      accomp,
      utensils: utensil,
      extras,
      drinks: addedDrinks,
      price: item?.price,
      total,
    };

    const existingCart: typeof cartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = [...existingCart, cartItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    router.push(`/store/${params.id}/cart`);
  };

  const toggleArrayValue = (
    value: string,
    arr: string[],
    limit = Infinity,
  ): string[] => {
    if (arr.includes(value)) return arr.filter((v) => v !== value);
    if (arr.length < limit) return [...arr, value];
    return arr;
  };

  const { itemId } = params;
  const allItems = Object.values(fakeMenu).flatMap((s) => s.items);
  const item = allItems.find(
    (i) => i.name.toLowerCase() === decodeURIComponent(itemId).toLowerCase(),
  );

  const total = useMemo(() => {
    if (!item) return 0;
    const sizeExtra = SIZES.find((s) => s.id === size)?.price ?? 0;

    const drinksExtra = Object.entries(drinkQty).reduce(
      (sum, [id, qty]) =>
        sum + (DRINKS.find((d) => d.id === id)?.price ?? 0) * qty,
      0,
    );

    const extrasExtra = extras.reduce(
      (sum, id) => sum + (EXTRAS.find((e) => e.id === id)?.price ?? 0),
      0,
    );

    const utensilsExtra = utensil
      ? UTENSILS.find((u) => u.id === utensil)?.price ?? 0
      : 0;

    const accompanimentExtra = 0;

    const singleTotal =
      item.price + sizeExtra + drinksExtra + extrasExtra + utensilsExtra + accompanimentExtra;

    return singleTotal * quantity;
  }, [item, size, drinkQty, extras, utensil, quantity]);

  if (!item) return notFound();
  return (
    <S.PageWrapper>
      <S.Image src="/img/ceviche.webp" alt={item.name} />
      <S.SectionContainer>
        <S.Title>{item.name}</S.Title>
        <S.Subtitle>a partir de <S.BasePrice>R$ {item.price.toFixed(2)}</S.BasePrice></S.Subtitle>
        <S.Description>{item.description}</S.Description>
        <S.Section>
          <S.SectionTitle>quantos?</S.SectionTitle>
          <S.Row justify="space-between">
            <S.TotalLabel>total <strong>R$ {total.toFixed(2)}</strong></S.TotalLabel>
            {quantity === 0 ? (
              <S.AddBtn onClick={() => setQuantity(1)}>adicionar</S.AddBtn>
            ) : (
              <S.QtyControls>
                <S.IconBtn
                  onClick={() =>
                    setQuantity(q => {
                      const next = q - 1;
                      return next < 0 ? 0 : next;
                    })
                  }
                >
                  {quantity === 1 ? <FiTrash2 size={18} /> : <FiMinus size={16} />}
                </S.IconBtn>
                <S.Qty>{quantity}</S.Qty>=
                <S.CircleBtn onClick={() => setQuantity(q => q + 1)}>
                  <FiPlus size={18} />
                </S.CircleBtn>
              </S.QtyControls>
            )}
          </S.Row>
        </S.Section>
      </S.SectionContainer>
      <S.SectionContainer>
        <S.OptionGroup borderTop>
          <S.GroupHeader>
            <span>qual o tamanho?</span>
            <S.Tag>obrigatório</S.Tag>
          </S.GroupHeader>
          <S.Hint>escolha 1</S.Hint>

          {SIZES.map((s) => (
            <S.RadioRow key={s.id} selected={size === s.id}>
              <input
                type="radio"
                checked={size === s.id}
                onChange={() => setSize(s.id)}
              />
              <label>
                {s.id === "medium" && <Icon name="money" width={17} height={17} />
                }
                <span>{s.label}</span>
                {s.price > 0 ? (
                  <S.PriceDiff>R$ {(item.price + s.price).toFixed(2)}</S.PriceDiff>
                ) : (
                  <S.Promo>de R$ 22,90 por <strong>R$ {(item.price + s.price).toFixed(2)}</strong></S.Promo>
                )}
              </label>
            </S.RadioRow>
          ))}

        </S.OptionGroup>
      </S.SectionContainer>
      <S.SectionContainer>
        <S.OptionGroup borderTop>
          <S.GroupHeader>
            <span>acompanhamentos</span>
            <S.Tag>obrigatório</S.Tag>
          </S.GroupHeader>
          <S.Hint>escolha de 1 a 2</S.Hint>

          {ACCOMPANIMENTS.map((a) => (
            <S.CheckRow key={a.id}>
              <input
                type="checkbox"
                checked={accomp.includes(a.id)}
                onChange={() =>
                  setAccomp(toggleArrayValue(a.id, accomp, 2))
                }
              />
              <label>{a.label}</label>
            </S.CheckRow>
          ))}
        </S.OptionGroup>
      </S.SectionContainer>
      <S.SectionContainer>
        <S.OptionGroup borderTop>
          <S.GroupHeader>
            <span>vai querer bebida?</span>
          </S.GroupHeader>
          <S.Hint>escolha quantos quiser</S.Hint>

          {DRINKS.map((d) => {
            const qty = drinkQty[d.id] || 0;
            const dec = () =>
              setDrinkQty((prev) => ({
                ...prev,
                [d.id]: Math.max(qty - 1, 0),
              }));
            const inc = () =>
              setDrinkQty((prev) => ({
                ...prev,
                [d.id]: qty + 1,
              }));

            return (
              <S.CounterRow key={d.id}>
                <S.CircleBtnMinus disabled={!qty} onClick={dec}>
                  <FiMinus size={14} />
                </S.CircleBtnMinus>

                <S.Qty>{qty}</S.Qty>

                <S.CircleBtnPlus onClick={inc}>
                  <FiPlus size={14} />
                </S.CircleBtnPlus>

                <S.DrinkLabel>{d.label}</S.DrinkLabel>
                <S.PriceDiff>+R$ {d.price.toFixed(2)}</S.PriceDiff>
              </S.CounterRow>
            );
          })}
        </S.OptionGroup>
      </S.SectionContainer>
      <S.SectionContainer>
        <S.OptionGroup borderTop>
          <S.GroupHeader>
            <span>precisa de talher?</span>
          </S.GroupHeader>
          <S.Hint>escolha até 1</S.Hint>

          {UTENSILS.map((u) => (
            <S.RadioRow key={u.id} selected={utensil === u.id}>
              <input
                type="radio"
                checked={utensil === u.id}
                onChange={() =>
                  setUtensil(utensil === u.id ? null : u.id)
                }
              />
              <label>
                <span>{u.label}</span>
                {u.price > 0 && (
                  <S.PriceDiff>+R$ {u.price.toFixed(2)}</S.PriceDiff>
                )}
              </label>
            </S.RadioRow>
          ))}
        </S.OptionGroup>

      </S.SectionContainer>
      <S.SectionContainer>
        <S.OptionGroup borderTop>
          <S.GroupHeader>
            <span>mais alguma coisa?</span>
          </S.GroupHeader>
          <S.Hint>escolha até 2</S.Hint>

          {EXTRAS.map((e) => (
            <S.CheckRow key={e.id}>
              <input
                type="checkbox"
                checked={extras.includes(e.id)}
                onChange={() => setExtras(toggleArrayValue(e.id, extras, 2))}
              />
              <label>
                <span>{e.label}</span>
              </label>
              <S.PriceDiff>+R$ {e.price.toFixed(2)}</S.PriceDiff>
            </S.CheckRow>
          ))}
        </S.OptionGroup>

      </S.SectionContainer>
      <S.SectionContainer>
        <S.NoteArea
          placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

      </S.SectionContainer>
      {quantity > 0 && (
        <S.FloatingButton onClick={handleFinish}>
          ver ticket
        </S.FloatingButton>
      )}

    </S.PageWrapper >
  );
}