import { generateCalendarMonth } from '..';


test('it should test JAN 2023', () => {
  const results = generateCalendarMonth(2023, 0);
  expect(results[0].date).toBe('2023-01-01');
  expect(results[results.length - 1].date).toBe('2023-02-11');
});
test('it should test FEB 2023', () => {
  const results = generateCalendarMonth(2023, 1);
  expect(results[0].date).toBe('2023-01-29');
  expect(results[results.length - 1].date).toBe('2023-03-11');
});
test('it should test MARCH 2023', () => {
  const results = generateCalendarMonth(2023, 2);
  expect(results[0].date).toBe('2023-02-26');
  expect(results[results.length - 1].date).toBe('2023-04-08');
});
test('it should test APRIL 2023', () => {
  const results = generateCalendarMonth(2023, 3);
  expect(results[0].date).toBe('2023-03-26');
  expect(results[results.length - 1].date).toBe('2023-05-06');
});
test('it should test MAY 2023', () => {
  const results = generateCalendarMonth(2023, 4);
  expect(results[0].date).toBe('2023-04-30');
  expect(results[results.length - 1].date).toBe('2023-06-10');
});
test('it should test JUNE 2023', () => {
  const results = generateCalendarMonth(2023, 5);
  expect(results[0].date).toBe('2023-05-28');
  expect(results[results.length - 1].date).toBe('2023-07-08');
});
test('it should test JULY 2023', () => {
  const results = generateCalendarMonth(2023, 6);
  expect(results[0].date).toBe('2023-06-25');
  expect(results[results.length - 1].date).toBe('2023-08-05');
});
test('it should test AUGUST 2023', () => {
  const results = generateCalendarMonth(2023, 7);
  expect(results[0].date).toBe('2023-07-30');
  expect(results[results.length - 1].date).toBe('2023-09-09');
});
test('it should test SEPTEMBER 2023', () => {
  const results = generateCalendarMonth(2023, 8);
  expect(results[0].date).toBe('2023-08-27');
  expect(results[results.length - 1].date).toBe('2023-10-07');
});
test('it should test OCTOBER 2023', () => {
  const results = generateCalendarMonth(2023, 9);
  expect(results[0].date).toBe('2023-10-01');
  expect(results[results.length - 1].date).toBe('2023-11-11');
});
test('it should test NOVEMBER 2023', () => {
  const results = generateCalendarMonth(2023, 10);
  expect(results[0].date).toBe('2023-10-29');
  expect(results[results.length - 1].date).toBe('2023-12-09');
});
test('it should test DECEMBER 2023', () => {
  const results = generateCalendarMonth(2023, 11);
  expect(results[0].date).toBe('2023-11-26');
  expect(results[results.length - 1].date).toBe('2024-01-06');
});

