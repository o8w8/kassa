# Графика

![Иконки](_images/icons.png)

## Иконки

В библиотеке [bem-icons](https://github.com/bemdesign/bem-icons) иконки предусмотрены для использования, как самостоятельно в интерфейсе, так и в паре с текстовым блоком. Поэтому все иконки существуют в тех же цветах, что и текст.

Размеров всего два: `s` – 16х16px и `m` – 20x20px.

Чтобы вставить иконку, нужно знать название иконки, размер и необходимый цвет. Название модификатора будет именем иконки, а значение 'размер-цвет'. Соответственно, чтобы вставить маленькую зеленую иконку фотоаппарата, надо написать `'photo': 's-success'`

<iframe height='500' scrolling='no' title='Графика. Иконки' src='//codepen.io/bem_design/embed/4dbf86f3563611eae9a2f6b447e7e818/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/4dbf86f3563611eae9a2f6b447e7e818/'>Графика. Иконки</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

![Векторы](_images/vectors.png)

## Векторы

Векторы — крупные маркерные иконки. Они не имеют никакого значения сами по себе, а всего лишь дополнительно поддерживают текст. Находятся они в библиотеке [bem-vectors](https://github.com/bemdesign/bem-vectors).

Состоят векторы из следующих частей:

![Векторная иконка](_images/vector-icon.png)

1. Декоративный строук для привлечения внимания;
1. Базовый строук отвечающий за форму;
1. Пустой слой, который нужен для того, чтобы иконку можно было использовать на различных подложках

Применяются векторы так же, как иконки.  Написав `'12': 'm-primary-action'`, мы получим маркерную иконку с черным базовым строуком и желтым декоративным.

Векторы можно перекрашивать. Для этого мы рекоммендуем использовать сервис Orion [https://orioniconlibrary.com](https://orioniconlibrary.com/), в нем можно указать цвета для каждого строука и выгрузить библиотеку. Затем разложить подкрашенные иконки по цветовым модификаторам и использовать их в разметке.

<iframe height='500' scrolling='no' title='Графика. Векторы' src='//codepen.io/bem_design/embed/27a671e29b22621062de8e15c85b2566/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/27a671e29b22621062de8e15c85b2566/'>Графика. Векторы</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Задание

Добавь текстовую и графическую часть с иконкой и вектором, используя блоки `text`, `icon` и `vector`

<iframe height='500' scrolling='no' title='Графика. Задание 1' src='//codepen.io/bem_design/embed/ee23a502ae8a8b97c97f40c2d0d750aa/?height=265&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/ee23a502ae8a8b97c97f40c2d0d750aa/'>Графика. Задание 1</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>