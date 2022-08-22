// 노션에서 내용 복사 => 아래 사이트에서 HTML로 변환 => 링크 밑줄 등 추가적인 스타일 적용이 필요하다면 HTML 태그 직접 수정
// https://www.ttmkt.com/kr/tools/markdown-to-html/

const QUESTIONS = [
  {
    title: '현재 모집 중인가요?',
    description:
      '<p>2022년 6기 모집은 종료되었어요. 2023년 하반기에 찾아올 7기 모집을 기대해 주세요!</p>',
  },
  {
    title: '문의사항이 있어요.',
    description:
      "<p>하단의 '아직 궁금한 점이 있다면' 버튼을 클릭하셔서 문의사항을 남겨주세요!</p>",
  },
  {
    title: 'AUSG는 어떤 동아리인가요?',
    description:
      '<p>AUSG는 AWSKRUG University Student Group의 약자로, AWS와 Cloud, 프로그래밍에 관심있는 대학생들의 모임이에요.</p>' +
      '<p>자유로운 분위기에서 다양한 사람을 만나 각자의 경험을 나누고 소통할 수 있습니다. <strong><a href="https://awskrug.github.io/" class="underline">AWS 한국사용자모임</a></strong>과 함께하고 있어요! 😎</p>',
  },
  {
    title: 'AUSG는 어떤 활동을 하나요?',
    description:
      '<p>격주 1회 약 2시간 정도 정기모임을 갖습니다. 클라우드, 개발, 프로덕트 등 다양한 주제로 대화를 나누는 시간을 가져요! 또한 스터디, 외부 강연, AWS 한국사용자모임 행사 등에도 참여하고 있답니다.</p>' +
      '<p>이외에도 친목 모임을 가지면서 좋은 사람들과 함께 즐거운 추억을 만들어요.</p>' +
      '<p>(소곤소곤) AUSG 커뮤니티의 최고 자랑은 좋은 사람들! 이랍니다 :)</p>',
  },
  {
    title: '클라우드 경험이 반드시 있어야 하나요?',
    description:
      '<p>AUSG에서는 개발자가 아니라도, AWS 및 클라우드 경험이 없어도 활동할 수 있어요. 하지만 클라우드 및 개발에 대한 관심과 열정은 반드시 필요해요!</p>',
  },
  {
    title: '모임은 어떻게 진행되나요?',
    description:
      '<p><b>격주 월요일 저녁 8-10시에 오프라인 정기 모임</b>이 진행됩니다.</p>' +
      '<p>발표 세션과 스터디, 친목을 위주로 많은 분들이 활발하게 활동하고 있어요!</p>',
  },
  {
    title: '대학 재학 중이 아니어도 지원 가능한가요?',
    description:
      '<p><b>아쉽지만 불가능합니다.</b></p>' +
      '<p>AUSG는 대학생 동아리인만큼, 대학생이 아닌 분들의 지원은 받지 않고 있어요 😢 다만, 대학생 신분으로 직장을 병행하고 있는 직장인은 지원 가능합니다.</p>' +
      '<p>지원 가능: 대학교 재학생, 휴학생, 수료생(졸업유예생), 대학과 병행 중인 직장인\n' +
      '지원 불가능: 대학교 졸업생, 대학원생, 대학생이 아닌 직장인</p>',
  },
];

export default QUESTIONS;
