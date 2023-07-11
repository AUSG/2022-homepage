import peopleJson from '@/data/people.json';

interface Person {
  year: string;
  name_ko: string;
  name_en: string;
  photo: string;
  short_bio: string;
  github_username?: string;
  linkedin_username?: string;
  homepage_url?: string;
}

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
      expect(isValidPersonData(person));
    });
  });
});
