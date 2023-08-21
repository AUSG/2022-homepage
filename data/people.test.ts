import { VISIBLE_PEOPLE_YEARS_ORDER } from './../src/lib/config';
import { Person } from '@/data/people';
import peopleJson from '@/data/people.json';

const isValidPersonData = (person: Person): boolean => {
  return (
    person.name_en !== undefined ||
    person.name_ko !== undefined ||
    person.photo !== undefined ||
    person.short_bio !== undefined ||
    person.year !== undefined
  );
};

describe('validate people.json', () => {
  it('필수 데이터가 모두 채워져 있어야 합니다.', () => {
    peopleJson.people.forEach(person => {
      expect(isValidPersonData(person)).toBeTruthy();
    });
  });

  it('허용된 year 데이터만 존재해야 합니다.', () => {
    peopleJson.people.forEach(person => {
      expect(VISIBLE_PEOPLE_YEARS_ORDER.includes(person.year)).toBeTruthy();
    });
  });
});
