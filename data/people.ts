import peopleJson from '@/data/people.json';

export interface Person {
  year: string;
  name_ko: string;
  name_en: string;
  photo: string;
  short_bio: string;
  github_username?: string;
  linkedin_username?: string;
  homepage_url?: string;
}

export interface PeopleData {
  people: Person[];
}

export const getPeopleData = (): PeopleData => {
  return peopleJson;
};
