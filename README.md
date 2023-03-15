# calendar-filler

## Installation
``` npm install calendar-filler ```

## Usage

```javascript

import { generateCalendarMonth } from 'calendar-filler'

const jan = generateCalendarMonth(2023, 0) // All months start from index 0 
/*
 [
      { date: '2023-01-01', day: 0 },
      { date: '2023-01-02', day: 1 },
      { date: '2023-01-03', day: 2 },
      { date: '2023-01-04', day: 3 },
      { date: '2023-01-05', day: 4 },
      { date: '2023-01-06', day: 5 },
      { date: '2023-01-07', day: 6 },
      { date: '2023-01-08', day: 0 },
      { date: '2023-01-09', day: 1 },
      { date: '2023-01-10', day: 2 },
      { date: '2023-01-11', day: 3 },
      { date: '2023-01-12', day: 4 },
      { date: '2023-01-13', day: 5 },
      { date: '2023-01-14', day: 6 },
      { date: '2023-01-15', day: 0 },
      { date: '2023-01-16', day: 1 },
      { date: '2023-01-17', day: 2 },
      { date: '2023-01-18', day: 3 },
      { date: '2023-01-19', day: 4 },
      { date: '2023-01-20', day: 5 },
      { date: '2023-01-21', day: 6 },
      { date: '2023-01-22', day: 0 },
      { date: '2023-01-23', day: 1 },
      { date: '2023-01-24', day: 2 },
      { date: '2023-01-25', day: 3 },
      { date: '2023-01-26', day: 4 },
      { date: '2023-01-27', day: 5 },
      { date: '2023-01-28', day: 6 },
      { date: '2023-01-29', day: 0 },
      { date: '2023-01-30', day: 1 },
      { date: '2023-01-31', day: 2 },
      { date: '2023-02-01', day: 3 },
      { date: '2023-02-02', day: 4 },
      { date: '2023-02-03', day: 5 },
      { date: '2023-02-04', day: 6 },
      { date: '2023-02-05', day: 0 },
      { date: '2023-02-06', day: 1 },
      { date: '2023-02-07', day: 2 },
      { date: '2023-02-08', day: 3 },
      { date: '2023-02-09', day: 4 },
      { date: '2023-02-10', day: 5 },
      { date: '2023-02-11', day: 6 }
    ]
*/

/*
Jan - 0
Feb - 1
Mar - 2
Apr - 3
May - 4
June - 5
July - 6
Aug - 7
Sep - 8
Oct - 9
Nov - 10
Dec - 11
*/

```

## generating dates without padded dates

If you just want to get the days of a specific month then you can pass a third boolean argument false to remove the padded dates

```javascript


import { generateCalendarMonth } from 'calendar-filler'

const jan = generateCalendarMonth(2023, 0) // All months start from index 0 
/*
 [
      { date: '2023-01-01', day: 0 },
      { date: '2023-01-02', day: 1 },
      { date: '2023-01-03', day: 2 },
      { date: '2023-01-04', day: 3 },
      { date: '2023-01-05', day: 4 },
      { date: '2023-01-06', day: 5 },
      { date: '2023-01-07', day: 6 },
      { date: '2023-01-08', day: 0 },
      { date: '2023-01-09', day: 1 },
      { date: '2023-01-10', day: 2 },
      { date: '2023-01-11', day: 3 },
      { date: '2023-01-12', day: 4 },
      { date: '2023-01-13', day: 5 },
      { date: '2023-01-14', day: 6 },
      { date: '2023-01-15', day: 0 },
      { date: '2023-01-16', day: 1 },
      { date: '2023-01-17', day: 2 },
      { date: '2023-01-18', day: 3 },
      { date: '2023-01-19', day: 4 },
      { date: '2023-01-20', day: 5 },
      { date: '2023-01-21', day: 6 },
      { date: '2023-01-22', day: 0 },
      { date: '2023-01-23', day: 1 },
      { date: '2023-01-24', day: 2 },
      { date: '2023-01-25', day: 3 },
      { date: '2023-01-26', day: 4 },
      { date: '2023-01-27', day: 5 },
      { date: '2023-01-28', day: 6 },
      { date: '2023-01-29', day: 0 },
      { date: '2023-01-30', day: 1 },
      { date: '2023-01-31', day: 2 }
    ]
*/
```
