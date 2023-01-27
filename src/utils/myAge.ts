import dayjs from 'dayjs';

function getMyAge() {
  const birthDay = '1999-06-24T22:00:00.000Z';

  const birthDayDate = dayjs(birthDay);
  const today = dayjs(new Date());

  const age = today.diff(birthDayDate, 'year');

  return age;
}

export const myAge = getMyAge();
