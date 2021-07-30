---
title: Тестова сторінка №3
comments: true
excerpt: Cторінка для тестування kroki.
date: 2021-08-30T12:40:20
author: Володимир М. Лісівка
thumb: https://placekitten.com/160/120
---

## Mermaid

```kroki imgType="mermaid" imgTitle="Collaborating containers"
graph TD
  subgraph Shop X
    Bx(Shop X) --> FX1((Fs X1)) --> Bx
    Bx --> FX2((Fs X2)) --> Bx
  end
  subgraph Shop Y
    By(Shop Y) --> FY1((Fs Y1)) --> By
    By --> FY2((Fs Y2)) --> By
  end
  subgraph Shop Z
    Bz(Shop Z) --> FZ1((Fs Z1)) --> Bz
    Bz --> FZ2((Fs Z2)) --> Bz
  end
  A(Data Center) --> Bx --> A
  A --> By --> A
  A --> Bz --> A
```


## Pikchr

```kroki imgType="pikchr" imgTitle="Неможливий тризуб"
# Impossible trident pikchr script
# https://en.wikipedia.org/wiki/Impossible_trident
# pikchr script by Kees Nuyt, license Creative Commons BY-NC-SA
# https://creativecommons.org/licenses/by-nc-sa/4.0/

scale = 1.0
eh = 0.5cm
ew = 0.2cm
ed = 2 * eh
er = 0.4cm
lws = 4.0cm
lwm = lws + er
lwl = lwm + er

ellipse height eh width ew
L1: line width lwl from last ellipse.n
line width lwm from last ellipse.s
LV: line height eh down

move right er down ed from last ellipse.n
ellipse height eh width ew
L3: line width lws right from last ellipse.n to LV.end then down eh right ew
line width lwm right from last ellipse.s then to LV.start

move right er down ed from last ellipse.n
ellipse height eh width ew
line width lwl right from last ellipse.n then to L1.end
line width lwl right from last ellipse.s then up eh
```

```kroki imgType="pikchr" imgTitle="Архітектура SQLite"
    lineht *= 0.4
    $margin = lineht*2.5
    scale = 0.75
    fontscale = 1.1
    charht *= 1.15
    down
In: box "Interface" wid 150% ht 75% fill white
    arrow
CP: box same "SQL Command" "Processor"
    arrow
VM: box same "Virtual Machine"
    arrow down 1.25*$margin
BT: box same "B-Tree"
    arrow
    box same "Pager"
    arrow
OS: box same "OS Interface"
    box same with .w at 1.25*$margin east of 1st box.e "Tokenizer"
    arrow
    box same "Parser"
    arrow
CG: box same ht 200% "Code" "Generator"
UT: box same as 1st box at (Tokenizer,Pager) "Utilities"
    move lineht
TC: box same "Test Code"
    arrow from CP to 1/4<Tokenizer.sw,Tokenizer.nw> chop
    arrow from 1/3<CG.nw,CG.sw> to CP chop

    box ht (In.n.y-VM.s.y)+$margin wid In.wid+$margin \
       at CP fill 0xd8ecd0 behind In
    line invis from 0.25*$margin east of last.sw up last.ht \
        "Core" italic aligned

    box ht (BT.n.y-OS.s.y)+$margin wid In.wid+$margin \
       at Pager fill 0xd0ece8 behind In
    line invis from 0.25*$margin east of last.sw up last.ht \
       "Backend" italic aligned

    box ht (Tokenizer.n.y-CG.s.y)+$margin wid In.wid+$margin \
       at 1/2<Tokenizer.n,CG.s> fill 0xe8d8d0 behind In
    line invis from 0.25*$margin west of last.se up last.ht \
       "SQL Compiler" italic aligned

    box ht (UT.n.y-TC.s.y)+$margin wid In.wid+$margin \
       at 1/2<UT,TC> fill 0xe0ecc8 behind In
    line invis from 0.25*$margin west of last.se up last.ht \
      "Accessories" italic aligned
```

```kroki imgType="pikchr" imgTitle="Доріжки"
    $laneh = 0.75

    # Draw the lanes
    down
    box width 3.5in height $laneh fill 0xacc9e3
    box same fill 0xc5d8ef
    box same as first box
    box same as 2nd box
    line from 1st box.sw+(0.2,0) up until even with 1st box.n \
      "Alan" above aligned
    line from 2nd box.sw+(0.2,0) up until even with 2nd box.n \
      "Betty" above aligned
    line from 3rd box.sw+(0.2,0) up until even with 3rd box.n \
      "Charlie" above aligned
    line from 4th box.sw+(0.2,0) up until even with 4th box.n \
       "Darlene" above aligned

    # fill in content for the Alice lane
    right
A1: circle rad 0.1in at end of first line + (0.2,-0.2) \
       fill white thickness 1.5px "1" 
    arrow right 50%
    circle same "2"
    arrow right until even with first box.e - (0.65,0.0)
    ellipse "future" fit fill white height 0.2 width 0.5 thickness 1.5px
A3: circle same at A1+(0.8,-0.3) "3" fill 0xc0c0c0
    arrow from A1 to last circle chop "fork!" below aligned

    # content for the Betty lane
B1: circle same as A1 at A1-(0,$laneh) "1"
    arrow right 50%
    circle same "2"
    arrow right until even with first ellipse.w
    ellipse same "future"
B3: circle same at A3-(0,$laneh) "3"
    arrow right 50%
    circle same as A3 "4"
    arrow from B1 to 2nd last circle chop

    # content for the Charlie lane
C1: circle same as A1 at B1-(0,$laneh) "1"
    arrow 50%
    circle same "2"
    arrow right 0.8in "goes" "offline"
C5: circle same as A3 "5"
    arrow right until even with first ellipse.w \
      "back online" above "pushes 5" below "pulls 3 &amp; 4" below
    ellipse same "future"

    # content for the Darlene lane
D1: circle same as A1 at C1-(0,$laneh) "1"
    arrow 50%
    circle same "2"
    arrow right until even with C5.w
    circle same "5"
    arrow 50%
    circle same as A3 "6"
    arrow right until even with first ellipse.w
    ellipse same "future"
D3: circle same as B3 at B3-(0,2*$laneh) "3"
    arrow 50%
    circle same "4"
    arrow from D1 to D3 chop
```

## Vega-lite

Редактор: https://vega.github.io/editor/ , приклади: https://vega.github.io/vega-lite/examples/ , https://github.com/aezarebski/vegacookbook .

Дані мають бути включені в графік, або доступні для читання по публічному URL.

```kroki imgType="vegalite" imgTitle="Графік відповідей"
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "A diverging stacked bar chart for sentiments towards a set of eight questions, displayed as percentages with neutral responses straddling the 0% mark",
  "data": {
    "values": [
      {"question": "Question 1", "type": "Strongly disagree", "value": 24, "percentage": 0.7},
      {"question": "Question 1", "type": "Disagree", "value": 294, "percentage": 9.1},
      {"question": "Question 1", "type": "Neither agree nor disagree", "value": 594, "percentage": 18.5},
      {"question": "Question 1", "type": "Agree", "value": 1927, "percentage": 59.9},
      {"question": "Question 1", "type": "Strongly agree", "value": 376, "percentage": 11.7},
      {"question": "Question 2", "type": "Strongly disagree", "value": 2, "percentage": 18.2},
      {"question": "Question 2", "type": "Disagree", "value": 2, "percentage": 18.2},
      {"question": "Question 2", "type": "Neither agree nor disagree", "value": 0, "percentage": 0},
      {"question": "Question 2", "type": "Agree", "value": 7, "percentage": 63.6},
      {"question": "Question 2", "type": "Strongly agree", "value": 11, "percentage": 0},
      {"question": "Question 3", "type": "Strongly disagree", "value": 2, "percentage": 20},
      {"question": "Question 3", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 3", "type": "Neither agree nor disagree", "value": 2, "percentage": 20},
      {"question": "Question 3", "type": "Agree", "value": 4, "percentage": 40},
      {"question": "Question 3", "type": "Strongly agree", "value": 2, "percentage": 20},
      {"question": "Question 4", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 4", "type": "Disagree", "value": 2, "percentage": 12.5},
      {"question": "Question 4", "type": "Neither agree nor disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 4", "type": "Agree", "value": 7, "percentage": 43.8},
      {"question": "Question 4", "type": "Strongly agree", "value": 6, "percentage": 37.5},
      {"question": "Question 5", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 5", "type": "Disagree", "value": 1, "percentage": 4.2},
      {"question": "Question 5", "type": "Neither agree nor disagree", "value": 3, "percentage": 12.5},
      {"question": "Question 5", "type": "Agree", "value": 16, "percentage": 66.7},
      {"question": "Question 5", "type": "Strongly agree", "value": 4, "percentage": 16.7},
      {"question": "Question 6", "type": "Strongly disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 6", "type": "Disagree", "value": 1, "percentage": 6.3},
      {"question": "Question 6", "type": "Neither agree nor disagree", "value": 2, "percentage": 12.5},
      {"question": "Question 6", "type": "Agree", "value": 9, "percentage": 56.3},
      {"question": "Question 6", "type": "Strongly agree", "value": 3, "percentage": 18.8},
      {"question": "Question 7", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 7", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 7", "type": "Neither agree nor disagree", "value": 1, "percentage": 20},
      {"question": "Question 7", "type": "Agree", "value": 4, "percentage": 80},
      {"question": "Question 7", "type": "Strongly agree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Strongly disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Neither agree nor disagree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Agree", "value": 0, "percentage": 0},
      {"question": "Question 8", "type": "Strongly agree", "value": 2, "percentage": 100}
    ]
  },
  "transform": [
    {
      "calculate": "if(datum.type === 'Strongly disagree',-2,0) + if(datum.type==='Disagree',-1,0) + if(datum.type =='Neither agree nor disagree',0,0) + if(datum.type ==='Agree',1,0) + if(datum.type ==='Strongly agree',2,0)",
      "as": "q_order"
    },
    {
      "calculate": "if(datum.type === 'Disagree' || datum.type === 'Strongly disagree', datum.percentage,0) + if(datum.type === 'Neither agree nor disagree', datum.percentage / 2,0)",
      "as": "signed_percentage"
    },
    {"stack": "percentage", "as": ["v1", "v2"], "groupby": ["question"]},
    {
      "joinaggregate": [
        {
          "field": "signed_percentage",
          "op": "sum",
          "as": "offset"
        }
      ],
      "groupby": ["question"]
    },
    {"calculate": "datum.v1 - datum.offset", "as": "nx"},
    {"calculate": "datum.v2 - datum.offset", "as": "nx2"}
  ],
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "nx",
      "type": "quantitative",
      "axis": {
        "title": "Percentage"
      }
    },
    "x2": {"field": "nx2"},
    "y": {
      "field": "question",
      "type": "nominal",
      "axis": {
        "title": "Question",
        "offset": 5,
        "ticks": false,
        "minExtent": 60,
        "domain": false
      }
    },
    "color": {
      "field": "type",
      "type": "nominal",
      "legend": {
        "title": "Response"
      },
      "scale": {
        "domain": ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"],
        "range": ["#c30d24", "#f3a583", "#cccccc", "#94c6da", "#1770ab"],
        "type": "ordinal"
      }
    }
  }
}
```

```kroki imgType="vegalite"
{
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": {
    "values": [
      {
        "state": "CA",
        "age": "Under 5 Years",
        "population": 2704659,
        "_id": 2
      },
      {
        "state": "TX",
        "age": "Under 5 Years",
        "population": 2027307,
        "_id": 3
      },
      {
        "state": "NY",
        "age": "Under 5 Years",
        "population": 1208495,
        "_id": 4
      },
      {
        "state": "FL",
        "age": "Under 5 Years",
        "population": 1140516,
        "_id": 5
      },
      {
        "state": "IL",
        "age": "Under 5 Years",
        "population": 894368,
        "_id": 6
      },
      {
        "state": "PA",
        "age": "Under 5 Years",
        "population": 737462,
        "_id": 7
      },
      {
        "state": "CA",
        "age": "5 to 13 Years",
        "population": 4499890,
        "_id": 8
      },
      {
        "state": "TX",
        "age": "5 to 13 Years",
        "population": 3277946,
        "_id": 9
      },
      {
        "state": "NY",
        "age": "5 to 13 Years",
        "population": 2141490,
        "_id": 10
      },
      {
        "state": "FL",
        "age": "5 to 13 Years",
        "population": 1938695,
        "_id": 11
      },
      {
        "state": "IL",
        "age": "5 to 13 Years",
        "population": 1558919,
        "_id": 12
      },
      {
        "state": "PA",
        "age": "5 to 13 Years",
        "population": 1345341,
        "_id": 13
      },
      {
        "state": "CA",
        "age": "14 to 17 Years",
        "population": 2159981,
        "_id": 14
      },
      {
        "state": "TX",
        "age": "14 to 17 Years",
        "population": 1420518,
        "_id": 15
      },
      {
        "state": "NY",
        "age": "14 to 17 Years",
        "population": 1058031,
        "_id": 16
      },
      {
        "state": "FL",
        "age": "14 to 17 Years",
        "population": 925060,
        "_id": 17
      },
      {
        "state": "IL",
        "age": "14 to 17 Years",
        "population": 725973,
        "_id": 18
      },
      {
        "state": "PA",
        "age": "14 to 17 Years",
        "population": 679201,
        "_id": 19
      },
      {
        "state": "CA",
        "age": "18 to 24 Years",
        "population": 3853788,
        "_id": 20
      },
      {
        "state": "TX",
        "age": "18 to 24 Years",
        "population": 2454721,
        "_id": 21
      },
      {
        "state": "NY",
        "age": "18 to 24 Years",
        "population": 1999120,
        "_id": 22
      },
      {
        "state": "FL",
        "age": "18 to 24 Years",
        "population": 1607297,
        "_id": 23
      },
      {
        "state": "IL",
        "age": "18 to 24 Years",
        "population": 1311479,
        "_id": 24
      },
      {
        "state": "PA",
        "age": "18 to 24 Years",
        "population": 1203944,
        "_id": 25
      },
      {
        "state": "CA",
        "age": "25 to 44 Years",
        "population": 10604510,
        "_id": 26
      },
      {
        "state": "TX",
        "age": "25 to 44 Years",
        "population": 7017731,
        "_id": 27
      },
      {
        "state": "NY",
        "age": "25 to 44 Years",
        "population": 5355235,
        "_id": 28
      },
      {
        "state": "FL",
        "age": "25 to 44 Years",
        "population": 4782119,
        "_id": 29
      },
      {
        "state": "IL",
        "age": "25 to 44 Years",
        "population": 3596343,
        "_id": 30
      },
      {
        "state": "PA",
        "age": "25 to 44 Years",
        "population": 3157759,
        "_id": 31
      },
      {
        "state": "CA",
        "age": "45 to 64 Years",
        "population": 8819342,
        "_id": 32
      },
      {
        "state": "TX",
        "age": "45 to 64 Years",
        "population": 5656528,
        "_id": 33
      },
      {
        "state": "NY",
        "age": "45 to 64 Years",
        "population": 5120254,
        "_id": 34
      },
      {
        "state": "FL",
        "age": "45 to 64 Years",
        "population": 4746856,
        "_id": 35
      },
      {
        "state": "IL",
        "age": "45 to 64 Years",
        "population": 3239173,
        "_id": 36
      },
      {
        "state": "PA",
        "age": "45 to 64 Years",
        "population": 3414001,
        "_id": 37
      },
      {
        "state": "CA",
        "age": "65 Years and Over",
        "population": 4114496,
        "_id": 38
      },
      {
        "state": "TX",
        "age": "65 Years and Over",
        "population": 2472223,
        "_id": 39
      },
      {
        "state": "NY",
        "age": "65 Years and Over",
        "population": 2607672,
        "_id": 40
      },
      {
        "state": "FL",
        "age": "65 Years and Over",
        "population": 3187797,
        "_id": 41
      },
      {
        "state": "IL",
        "age": "65 Years and Over",
        "population": 1575308,
        "_id": 42
      },
      {
        "state": "PA",
        "age": "65 Years and Over",
        "population": 1910571,
        "_id": 43
      }
    ]
  },
  "mark": "bar",
  "description": "A grouped bar chart using color to encode age bins. Each cell represents a state in the US.",
  "encoding": {
    "column": {
      "field": "state",
      "type": "nominal",
      "title": ""
    },
    "y": {
      "aggregate": "sum",
      "field": "population",
      "type": "quantitative",
      "axis": {
        "title": "",
        "grid": false
      }
    },
    "x": {
      "field": "age",
      "type": "ordinal",
      "axis": null,
      "scale": {
        "domain": [
          "Under 5 Years",
          "5 to 13 Years",
          "14 to 17 Years",
          "18 to 24 Years",
          "25 to 44 Years",
          "45 to 64 Years",
          "65 Years and Over"
        ],
        "rangeStep": 15
      }
    },
    "color": {
      "field": "age",
      "scale": {
        "domain": [
          "Under 5 Years",
          "5 to 13 Years",
          "14 to 17 Years",
          "18 to 24 Years",
          "25 to 44 Years",
          "45 to 64 Years",
          "65 Years and Over"
        ],
        "range": [
          "#98abc5",
          "#8a89a6",
          "#7b6888",
          "#6b486b",
          "#a05d56",
          "#d0743c",
          "#ff8c00"
        ]
      },
      "legend": {
        "title": "Age"
      }
    }
  }
}
```

```kroki imgType="vegalite"
{
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "description": "Waterfall chart",
  "width": 400,
  "height": 250,
  "padding": 5,
  "data": {
    "values": [
        {"year":"2005", "start":0,    "end": 8,    "cat": "increase"},
        {"year":"2006", "start":8,    "end": 13,   "cat": "increase"},
        {"year":"2007", "start":13,   "end": 16,   "cat": "increase"},
        {"year":"2008", "start":16,   "end": 18,   "cat": "increase"},
        {"year":"2009", "start":18,   "end": 20,   "cat": "increase"},
        {"year":"2010", "start":20,   "end": 19,   "cat": "decrease"},
        {"year":"2011", "start":19,   "end": 14,   "cat": "decrease"},
        {"year":"2012", "start":14,   "end": 12,   "cat": "decrease"},
        {"year":"2013", "start":12,   "end": 13,   "cat": "increase"},
        {"year":"2014", "start":13,   "end": 14,   "cat": "increase"},
        {"year":"2015", "start":14,   "end": 16,   "cat": "increase"},
        {"year":"2016", "start":16,   "end": 15, "cat": "decrease"},
        {"year":"2017", "start":14, "end": 12,   "cat": "decrease"},
        {"year":"2018", "start":12,   "end": 11,   "cat": "decrease"},
        {"year":"Total", "start":11,  "end": 0,    "cat": "total"}
    ]
  },
  "encoding": {
    "x": {
      "field": "year",
      "type": "nominal"
    },
    "y": {
      "field": "start",
      "type": "quantitative",
      "axis": {"title": "Number of costumers"}
    },
    "y2": {
      "field": "end",
      "type": "quantitative"
    }
  },
  "layer": [
    {"mark": "bar",
      "encoding": {
        "color": {
          "field": "cat",
          "type": "ordinal",
          "legend": {"title": ""},
          "scale": {
            "domain": ["total","increase","decrease"],
            "range": ["#4FC3F7","#B2FF59","#FF5252"]
          }
        }
      }
    },
    {"mark": "text",
      "encoding": {
        "y": {
          "field": "end", "type": "quantitative"
        },
        "text": {
          "condition": {"test": "datum['cat'] == 'total'", "field": "start"},
          "field": "end", "type": "nominal"
        },
        "color": {
          "condition": {"test": "datum['cat'] != 'increase'", "value": "white"},
          "value": "#1B5E20"
        }
      }
    }
  ],
  "config": {
    "text": {
      "baseline": "bottom",
      "align": "center",
      "fontWeight": "bold"
    }
  }
}
```

## Vega

```kroki imgType="vega" imgTitle="Семантична діаграма"
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 800,
  "height": 400,
  "padding": 0,

  "data": [
    {
      "name": "table",
      "values": [
        "Declarative visualization grammars can accelerate development, facilitate retargeting across platforms, and allow language-level optimizations. However, existing declarative visualization languages are primarily concerned with visual encoding, and rely on imperative event handlers for interactive behaviors. In response, we introduce a model of declarative interaction design for data visualizations. Adopting methods from reactive programming, we model low-level events as composable data streams from which we form higher-level semantic signals. Signals feed predicates and scale inversions, which allow us to generalize interactive selections at the level of item geometry (pixels) into interactive queries over the data domain. Production rules then use these queries to manipulate the visualization’s appearance. To facilitate reuse and sharing, these constructs can be encapsulated as named interactors: standalone, purely declarative specifications of interaction techniques. We assess our model’s feasibility and expressivity by instantiating it with extensions to the Vega visualization grammar. Through a diverse range of examples, we demonstrate coverage over an established taxonomy of visualization interaction techniques.",
        "We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega’s dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.",
        "We present Vega-Lite, a high-level grammar that enables rapid specification of interactive data visualizations. Vega-Lite combines a traditional grammar of graphics, providing visual encoding rules and a composition algebra for layered and multi-view displays, with a novel grammar of interaction. Users specify interactive semantics by composing selections. In Vega-Lite, a selection is an abstraction that defines input event processing, points of interest, and a predicate function for inclusion testing. Selections parameterize visual encodings by serving as input data, defining scale extents, or by driving conditional logic. The Vega-Lite compiler automatically synthesizes requisite data flow and event handling logic, which users can override for further customization. In contrast to existing reactive specifications, Vega-Lite selections decompose an interaction design into concise, enumerable semantic units. We evaluate Vega-Lite through a range of examples, demonstrating succinct specification of both customized interaction methods and common techniques such as panning, zooming, and linked selection."
      ],
      "transform": [
        {
          "type": "countpattern",
          "field": "data",
          "case": "upper",
          "pattern": "[\\w']{3,}",
          "stopwords": "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)"
        },
        {
          "type": "formula", "as": "angle",
          "expr": "[-45, 0, 45][~~(random() * 3)]"
        },
        {
          "type": "formula", "as": "weight",
          "expr": "if(datum.text=='VEGA', 600, 300)"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "text"},
      "range": ["#d5a928", "#652c90", "#939597"]
    }
  ],

  "marks": [
    {
      "type": "text",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "text": {"field": "text"},
          "align": {"value": "center"},
          "baseline": {"value": "alphabetic"},
          "fill": {"scale": "color", "field": "text"}
        },
        "update": {
          "fillOpacity": {"value": 1}
        },
        "hover": {
          "fillOpacity": {"value": 0.5}
        }
      },
      "transform": [
        {
          "type": "wordcloud",
          "size": [800, 400],
          "text": {"field": "text"},
          "rotate": {"field": "datum.angle"},
          "font": "Helvetica Neue, Arial",
          "fontSize": {"field": "datum.count"},
          "fontWeight": {"field": "datum.weight"},
          "fontSizeRange": [12, 56],
          "padding": 2
        }
      ]
    }
  ]
}
```

## PlantUML

```kroki imgType="plantuml" imgTitle="Work Breakdown Structure"
@startwbs
skinparam monochrome true
* Business Process Modelling WBS
** Launch the project
*** Complete Stakeholder Research
*** Initial Implementation Plan
** Design phase
*** Model of AsIs Processes Completed
**** Model of AsIs Processes Completed1
**** Model of AsIs Processes Completed2
*** Measure AsIs performance metrics
*** Identify Quick Wins
** Complete innovate phase
@endwbs
```
