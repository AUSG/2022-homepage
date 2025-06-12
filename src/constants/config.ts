import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// 모집 설정
export const RECRUITMENT_CONFIG = {
  generation: 9, // 기수
  openDate: dayjs('2025-06-13 00:00:00').tz('Asia/Seoul'), // 모집 시작일
  deadlineDate: dayjs('2025-06-30 23:59:59').tz('Asia/Seoul'), // 모집 마감일
  tallyFormUrl: 'https://tally.so/r/nrbQ2N', // Tally 폼 URL
  emailApiUrl:
    'https://ovshxcxfyslspeeqa26og2uvya0gqkfc.lambda-url.ap-northeast-2.on.aws/email/register', // 이메일 등록 API URL
  showEmailInput: true, // 모집 알림 이메일 여부
};

// 빅챗 설정
export const BIGCHAT_CONFIG = {
  openDate: dayjs('2025-06-13 00:00:00').tz('Asia/Seoul'), // 퍼블릭 빅챗 시작일
  deadlineDate: dayjs('2025-06-23 23:59:59').tz('Asia/Seoul'), // 퍼블릭 빅챗 마감일
  url: 'https://www.meetup.com/awskrug/events/308459192', // 퍼블릭 빅챗 URL
};
