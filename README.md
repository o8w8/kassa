# BEM DESIGN STUB

## Установка
```bash
npm i
```

```bash
export PATH=./node_modules/.bin:$PATH
```

```bash
enb make
```

## Библиотека

## Тема
Переменные
Переменных не приклеиваются к конкретным значениям, а учитывают интерфейсные состояния блоков и типографики. В переменные вынесены все возможные состояния, этого хватает для того, чтобы покрыть основные интерфейсные потребности.
https://bitbucket-public.yamoney.ru/pages/~MEEQ/prototype/master/browse/bundles/desktop/demo/const/const.ru.html

https://bitbucket-public.yamoney.ru/projects/FRONTEND-YAMONEY-LIBS/repos/yamoney-guidelines/browse/common.blocks/theme

## Контент
### Типографика
Текст — фундамент практически любой визуальной сущности. Для легкой манипуляции внешним видом блоков любой текст в интерфейсе выводится в блоке text. Мы вынесли блок text с модификаторами для цвета, размера, регистра, жирности, межбуквенного интервала. Их можно использовать в различных комбинациях. В итоге мы получаем все необходимые вариации текста при помощи небольшого количества комбинаций.

Документация: http://bem.design/typo.html
Репозиторий: https://github.com/bemdesign/bem-typo
Пакет: https://www.npmjs.com/package/bem-typo



### Иконки
Любая иконка, которая отрисовывается для вашей задачи, должны быть должна быть подготовлена во всех размерах и цветовых модификациях. 

Документация: http://bem.design/icons.html
Репозиторий: https://github.com/bemdesign/bem-icons
Пакет: https://www.npmjs.com/package/bem-icons


## Крупные (маркерные иконки)
Документация: http://bem.design/vectors.html
Репозиторий: https://github.com/bemdesign/bem-vectors
Пакет: https://www.npmjs.com/package/bem-vectors


## Логотипы
Документация: http://bem.design/logotypes.html
Репозиторий: https://github.com/bemdesign/bem-logos
Пакет: https://www.npmjs.com/package/bem-logos

### LEGO
https://ru.bem.info/platform/libs/bem-components/6.0.0/


## Паттерны
Все бесконечное многообразие интерфейсных множеств сводится к числу понятных/базовых/фундаментальных конструкций, на основе которых можно получить практически любой визуал

Документация: http://bem.design/patterns.html
Репозиторий: https://github.com/bemdesign/bem-patterns
Пакет: https://www.npmjs.com/package/bem-patterns


## Таблицы
http://bem.design/pt-table.html

### Списки
http://bem.design/pt-list.html

### Информеры
http://bem.design/pt-informer.html

### Иконка + Любой блок
http://bem.design/pt-icon-plus.html

### Форма
http://bem.design/pt-form.html

### Карточки
http://bem.design/pt-cards.html

### Бейджи
http://bem.design/pt-badge.html

### Аватар
http://bem.design/pt-avatar.html




## Шаблоны(Обвязки)
### Обвязка
.tpl-layout содержит в себе необходимые элементы в различных модификациях для реализации общих обвязок каркаса/проектов
https://bitbucket-public.yamoney.ru/projects/FRONTEND-YAMONEY-LIBS/repos/yamoney-guidelines/pull-requests/64/overview

### Сетка
.tpl-grid управляет ритмом и композицией (расположением блоков) внутри секций
https://bitbucket-public.yamoney.ru/projects/FRONTEND-YAMONEY-LIBS/repos/yamoney-guidelines/pull-requests/65/overview



