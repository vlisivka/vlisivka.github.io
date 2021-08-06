---
title: Тестова сторінка №1
comments: true
excerpt: Cторінка для тестування mermaid, gfm, ремарок.
date: 2021-08-27T16:00:21+0300
author: Володимир М. Лісівка
thumb: https://placekitten.com/160/120
image: https://placekitten.com/800/600
---

## Основний синтаксис Markdown

I just love **bold text**. Italicized text is the _cat's meow_. At the command prompt, type `nano`.

My favorite markdown editor is [ByteMD](https://github.com/bytedance/bytemd).

Редактор з підсвіткою та переглядом: https://bytemd.netlify.app/ .

Список:
1. First item
2. Second item
3. Third item

Цитата:
> Dorothy followed her through many of the beautiful rooms in her castle.

Блок коду з підсвіткою:
```js
import { Editor, Viewer } from 'bytemd'
import gfm from '@bytemd/plugin-gfm'

const plugins = [
  gfm(),
  // Add more plugins here
]

const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
})

editor.on('change', (e) => {
  editor.$set({ value: e.detail.value })
})
```

## Git Flavoured Markdown

Автоматичне перетворення URL на посилання: https://github.com/bytedance/bytemd

~~Закреслений текст.~~ Звичайний текст.

TODO:
- [x] Зробити щось.
- [ ] Потім ще щось.
- [ ] Відпочити від роботи.

Таблиця:
| Стовпець1 | Стовпець два |
| --------- | -----------  |
| Комірка   | Комірка      |
| Комірка   | Комірка      |

## Зноски

Проста зноска[^1] і довга зноска.[^довга_зноска]

[^1]: Це проста зноска.
[^довга_зноска]: Це довга зноска з кількома параграфами тексту.

    Відступіть текст для включення його у довгу зноску.

    `{ my code }`

    $a+b=c$

    Додавайте стільки параграфів, скільки вам потрібно.

## Математичні формули

Вбудовані формули: $a+b$

$$
\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

## Зображення

![Котик](https://placekitten.com/2000/1000)

## Діаграми Mermaid

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

```mermaid
graph TD
Початок --> Кінець
```

```mermaid
sequenceDiagram
Аліса->>Джон: Вітаю Джоне, як почуваєшся?
Джон-->>Аліса: Чудово!
Аліса-)Джон: Ще побачимося!
```

```mermaid
classDiagram
Animal <|-- Качка
Animal <|-- Риба
Animal <|-- Зебра
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Качка {
+String beakColor
+swim()
+quack()
}
class Риба {
-int sizeInFeet
-canEat()
}
class Зебра {
+bool is_wild
+run()
}
```

```mermaid
erDiagram
CUSTOMER ||--o{ ORDER : places
ORDER ||--|{ LINE-ITEM : contains
CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```
```mermaid
stateDiagram-v2
[*] --> Still
Still --> [*]

Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
```

```mermaid
journey
title Mій робочий день
section Іду на роботу
Роблю собі чай: 5: Я
Піднімаюся сходами: 3: Я
Роблю роботу: 1: Я, кіт
section Іду додому
Спускаюся сходами: 5: Я
Сиджу: 5: Я
```


```mermaid
gantt
title Діаграма Ґанта
dateFormat  YYYY-MM-DD
section Секція 1
Завдання 1           : a1, 2014-01-01, 30d
Інше завдання        : after a1  , 20d
section Інша секція
Завдання 3           : 2014-01-12, 12d
Зовсім інше завдання : 24d
```

```mermaid
pie title Домашні улюбленці приручені добровольцями
"Собаки" : 386
"Коти" : 85
"Пацюки" : 15
```

## Вбудовані обʼєкти:

Ютуб:

https://www.youtube.com/watch?v=5D4YVRdeGzs

Твіттер:

https://twitter.com/lviv1256/status/1307545411410972672

