# Backoff Table

A simple script for printing a table over execution times given an exponentional backoff equation.

Clone the repo and run `npm install` to install dependencies.
Edit `index.js` and run `npm start` to generate the table.

```
┌─────────┬───────┬─────────────────────┬──────────────────────────┬──────────────────────────────┐
│ (index) │ retry │       backoff       │      nextRetryDate       │        timeSinceStart        │
├─────────┼───────┼─────────────────────┼──────────────────────────┼──────────────────────────────┤
│    0    │   1   │     '4 minutes'     │ 2022-08-26T10:13:09.455Z │         '4 minutes'          │
│    1    │   2   │     '4 minutes'     │ 2022-08-26T10:17:09.455Z │         '8 minutes'          │
│    2    │   3   │     '5 minutes'     │ 2022-08-26T10:22:09.455Z │         '13 minutes'         │
│    3    │   4   │     '5 minutes'     │ 2022-08-26T10:27:09.455Z │         '18 minutes'         │
│    4    │   5   │     '7 minutes'     │ 2022-08-26T10:34:09.455Z │         '25 minutes'         │
│    5    │   6   │     '8 minutes'     │ 2022-08-26T10:42:09.455Z │         '33 minutes'         │
│    6    │   7   │    '11 minutes'     │ 2022-08-26T10:53:09.455Z │         '44 minutes'         │
│    7    │   8   │    '14 minutes'     │ 2022-08-26T11:07:09.455Z │         '58 minutes'         │
│    8    │   9   │    '19 minutes'     │ 2022-08-26T11:26:09.455Z │     '1 hour 17 minutes'      │
│    9    │  10   │    '25 minutes'     │ 2022-08-26T11:51:09.455Z │     '1 hour 42 minutes'      │
│   10    │  11   │    '35 minutes'     │ 2022-08-26T12:26:09.455Z │     '2 hours 17 minutes'     │
│   11    │  12   │    '48 minutes'     │ 2022-08-26T13:14:09.455Z │     '3 hours 5 minutes'      │
│   12    │  13   │ '1 hour 7 minutes'  │ 2022-08-26T14:21:09.455Z │     '4 hours 12 minutes'     │
│   13    │  14   │ '1 hour 33 minutes' │ 2022-08-26T15:54:09.455Z │     '5 hours 45 minutes'     │
│   14    │  15   │      '2 hours'      │ 2022-08-26T17:54:09.455Z │     '7 hours 45 minutes'     │
│   15    │  16   │      '2 hours'      │ 2022-08-26T19:54:09.455Z │     '9 hours 45 minutes'     │
│   16    │  17   │      '2 hours'      │ 2022-08-26T21:54:09.455Z │    '11 hours 45 minutes'     │
│   17    │  18   │      '2 hours'      │ 2022-08-26T23:54:09.455Z │    '13 hours 45 minutes'     │
│   18    │  19   │      '2 hours'      │ 2022-08-27T01:54:09.455Z │    '15 hours 45 minutes'     │
│   19    │  20   │      '2 hours'      │ 2022-08-27T03:54:09.455Z │    '17 hours 45 minutes'     │
│   20    │  21   │      '2 hours'      │ 2022-08-27T05:54:09.455Z │    '19 hours 45 minutes'     │
│   21    │  22   │      '2 hours'      │ 2022-08-27T07:54:09.455Z │    '21 hours 45 minutes'     │
│   22    │  23   │      '2 hours'      │ 2022-08-27T09:54:09.455Z │    '23 hours 45 minutes'     │
│   23    │  24   │      '2 hours'      │ 2022-08-27T11:54:09.455Z │  '1 day 1 hour 45 minutes'   │
│   24    │  25   │      '2 hours'      │ 2022-08-27T13:54:09.455Z │  '1 day 3 hours 45 minutes'  │
│   25    │  26   │      '2 hours'      │ 2022-08-27T15:54:09.455Z │  '1 day 5 hours 45 minutes'  │
│   26    │  27   │      '2 hours'      │ 2022-08-27T17:54:09.455Z │  '1 day 7 hours 45 minutes'  │
│   27    │  28   │      '2 hours'      │ 2022-08-27T19:54:09.455Z │  '1 day 9 hours 45 minutes'  │
│   28    │  29   │      '2 hours'      │ 2022-08-27T21:54:09.455Z │ '1 day 11 hours 45 minutes'  │
│   29    │  30   │      '2 hours'      │ 2022-08-27T23:54:09.455Z │ '1 day 13 hours 45 minutes'  │
│   30    │  31   │      '2 hours'      │ 2022-08-28T01:54:09.455Z │ '1 day 15 hours 45 minutes'  │
│   31    │  32   │      '2 hours'      │ 2022-08-28T03:54:09.455Z │ '1 day 17 hours 45 minutes'  │
│   32    │  33   │      '2 hours'      │ 2022-08-28T05:54:09.455Z │ '1 day 19 hours 45 minutes'  │
│   33    │  34   │      '2 hours'      │ 2022-08-28T07:54:09.455Z │ '1 day 21 hours 45 minutes'  │
│   34    │  35   │      '2 hours'      │ 2022-08-28T09:54:09.455Z │ '1 day 23 hours 45 minutes'  │
│   35    │  36   │      '2 hours'      │ 2022-08-28T11:54:09.455Z │  '2 days 1 hour 45 minutes'  │
│   36    │  37   │      '2 hours'      │ 2022-08-28T13:54:09.455Z │ '2 days 3 hours 45 minutes'  │
│   37    │  38   │      '2 hours'      │ 2022-08-28T15:54:09.455Z │ '2 days 5 hours 45 minutes'  │
│   38    │  39   │      '2 hours'      │ 2022-08-28T17:54:09.455Z │ '2 days 7 hours 45 minutes'  │
│   39    │  40   │      '2 hours'      │ 2022-08-28T19:54:09.455Z │ '2 days 9 hours 45 minutes'  │
│   40    │  41   │      '2 hours'      │ 2022-08-28T21:54:09.455Z │ '2 days 11 hours 45 minutes' │
│   41    │  42   │      '2 hours'      │ 2022-08-28T23:54:09.455Z │ '2 days 13 hours 45 minutes' │
│   42    │  43   │      '2 hours'      │ 2022-08-29T01:54:09.455Z │ '2 days 15 hours 45 minutes' │
│   43    │  44   │      '2 hours'      │ 2022-08-29T03:54:09.455Z │ '2 days 17 hours 45 minutes' │
│   44    │  45   │      '2 hours'      │ 2022-08-29T05:54:09.455Z │ '2 days 19 hours 45 minutes' │
│   45    │  46   │      '2 hours'      │ 2022-08-29T07:54:09.455Z │ '2 days 21 hours 45 minutes' │
│   46    │  47   │      '2 hours'      │ 2022-08-29T09:54:09.455Z │ '2 days 23 hours 45 minutes' │
│   47    │  48   │      '2 hours'      │ 2022-08-29T11:54:09.455Z │  '3 days 1 hour 45 minutes'  │
│   48    │  49   │      '2 hours'      │ 2022-08-29T13:54:09.455Z │ '3 days 3 hours 45 minutes'  │
│   49    │  50   │      '2 hours'      │ 2022-08-29T15:54:09.455Z │ '3 days 5 hours 45 minutes'  │
└─────────┴───────┴─────────────────────┴──────────────────────────┴──────────────────────────────┘
```
