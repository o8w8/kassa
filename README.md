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

## Порядок создания визуала
  1 шаг: в BEMJSON описывается основная структура блока;  
  2 шаг: во внутрь насыпается сожержимое/контент (текст, графика, контролы);  
  3 шаг: к узлам блока миксуется паттерн (список, форма, карточка, ...);  
  4 шаг: по необходимоси дописываются уникальные стили (к основному блоку);  
  5 шаг: блок занимает свое место в обвязке/сетке.  

  Если уникальные стили начинают повторятся, они выносятся на уровень паттернов


## Библиотеки

## Тема
  Документация: http://bem.design/themes.html  
  Репозиторий: https://github.com/bemdesign/bem-themes  
  Пакет: https://www.npmjs.com/package/bem-themes  

### Переменные

Переменных не приклеиваются к конкретным значениям, а учитывают интерфейсные состояния блоков и типографики. В переменные вынесены все возможные состояния, этого хватает для того, чтобы покрыть основные интерфейсные потребности.

В стилях любого блока ни один цвета, оступы, размеры (текста) не пишутся руками, используются только переменные. Это делает блок по умолчанию кастомным и готовым к дальнейшим изменениям.

### Декоратор

Декоратор выполняет роль контролируемых (ограниченных) инлайн-стилей, относительно которых еще нет понимания по классификации. Он добавляет косметику, которая нужна для визуальной «подпорки».


## Контент
### Типографика

Для легкой манипуляции внешним видом блоков любой текст в интерфейсе выводится в блоке text. Мы вынесли блок text с модификаторами для цвета, размера, регистра, жирности, межбуквенного интервала. Их можно использовать в различных комбинациях, это помогает получить все необходимые вариации текста.

  Документация: http://bem.design/typo.html  
  Репозиторий: https://github.com/bemdesign/bem-typo  
  Пакет: https://www.npmjs.com/package/bem-typo  



### Иконки

Для отображения иконок используется блок icon.

  Примеры: http://bem.design/icons.html  
  Гайд: http://bem.design/article-icons.html  
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

Все бесконечное многообразие интерфейсных множеств сводится к числу понятных/базовых/фундаментальных конструкций, на основе которых можно получить практически любой визуал.

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

Шаблоны позволяют занять смысловым сущностям свое место в интерфейсе.

  Документация: http://bem.design/layouts.html  
  Репозиторий: https://github.com/bemdesign/bem-layouts  
  Пакет: https://www.npmjs.com/package/bem-layouts  

### Обвязка

Блок tpl-layout содержит в себе необходимые элементы в различных модификациях для реализации общих обвязок каркаса/проектов
https://github.com/bemdesign/bem-layouts/tree/master/common.blocks/tpl-layout

### Сетка

Блок tpl-grid управляет ритмом и композицией (расположением блоков) внутри секций
https://github.com/bemdesign/bem-layouts/tree/master/common.blocks/tpl-grid



