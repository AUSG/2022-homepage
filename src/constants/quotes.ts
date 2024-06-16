const QUOTES = [
  {
    content:
      '쉽사리 뵐 수 없는 멋진 분들이 많은 동아리입니다. 그런 분들에게 많이 배우며, 또 그들이 가지고 있는 시야를 함께 가지고 싶어 공부하고 성장하게 되는 건강한 동아리입니다. AUSG 다니고, 나의 성공시대 시작됐다.',
    name: '이태현',
    profile: 'AUSG 7기, 당근마켓 Backend Engineer',
    imagePath: '/people/taehyun.lee.jpeg',
  },
  {
    content:
      '저는 지식 공유와 함께 성장하는 경험을 좋아해서 AUSG 합류했고 구성원분들 만나 몰입하고 함께하는 시간이 정말 즐거웠어요. 그리고 AUSG에는 지식 공유를 좋아하면서 열정적이고 수준높은 인재들이 함께 있는데요! 이 사람들과 함께 하는 순간순간이 서로에게 자극이 되고 좋은 에너지를 주고받는 시간이었던 것 같습니다 :) 앞으로 AUSG에 함께하실 분들도 이 소중한 경험을 꼭 느껴보셨으면 좋겠어요!',
    name: '김한수',
    profile: 'AUSG 6기, 뱅크샐러드 Server Engineer',
    imagePath: '/people/mokhs00.jpeg',
  },
  {
    content:
      '아 : 아우쓱에서는 무엇이든 도전 할 수 있었고, 무엇이든 경험 할 수 있었어요. 저와 함께' +
      '\n' +
      '우 : 우주 끝까지 지식을 넓혀가는 cloud 전문가가 되기 위해' +
      '\n' +
      '쓱 : 쓱쓱 배우고 쑥쑥 성장해보아요' +
      '\n' +
      '\n' +
      '감사합니다.',
    name: '이해송',
    profile: 'AUSG 7기, 가톨릭대학교',
    imagePath: '/people/haesong.jpg',
  },
  {
    content:
      '클라우드에 대한 경험과 지식을 쌓고 싶다면 AUSG를 추천해요. 이전 기수 분들이 클라우드 짱짱맨이셔서 도움을 많이 받았고 AUSG 활동을 통해 많은 것들을 알아가고 경험할 수 있었어요! 클라우드 진로에 대해 고민하고 있다면 AUSG과 함께해도 좋을 것 같아요 :)',
    name: '김수민',
    profile: 'AUSG 6기, AWS Cloud Support Associate, 경희대학교',
    imagePath: '/people/Eeap.jpeg',
  },
  {
    content:
      '꿈을 위해 무모하게 도전하는 대학생들이 모이는 곳. Cloud라는 관심사 아래 다양하고 구체적인, 가끔은 이상한 경험을 나누는 곳. 여기 AUSG. 낭만적이지 않나요?',
    name: '우수연',
    profile: 'AUSG 4기, IBM Technology Engineer',
    imagePath: '/people/suyeonwoo.jpeg',
  },
  {
    content:
      'AUSG 활동을 하면서 굉장히 좋은 기회들을 많이 얻을 수 있었습니다. 지금 회사도 AUSG 활동을 하지 않았더라면 들어올 수 없었을 거예요. 다양한 경험과 좋은 기회를 추구하시는 분들에게 꼭 추천해 드리고 싶습니다.',
    name: '배진수',
    profile: 'AUSG 4기, 당근마켓 Software Engineer',
    imagePath: '/people/naru200.jpg',
  },
  {
    content:
      '업계 최고 대학생들과 함께할 수 있는, 단언컨대 오직 하나뿐인 동아리라고 생각합니다.',
    name: '김태강',
    profile: 'AUSG 7기, Splab Frontend Developer',
    imagePath: '/people/taekang.jpg',
  },
  {
    content:
      '지금껏 많은 개발 동아리, 커뮤니티 활동을 해왔지만 결국 AUSG에 정착했습니다. 묵직한 머리와 소중한 사람들을 동시에 얻을 수 있는 곳!',
    name: '이다은',
    profile: 'AUSG 7기, 카카오 Backend Engineer',
    imagePath: '/people/danna.jpg',
  },
  {
    content:
      '대학생 때 AUSG에 합류해 좋은 사람들을 만나고 성장할 수 있었던 건 큰 행운이었어요. 다양한 분야의 학생 개발자들과 네트워킹할 수 있는 AUSG 활동은 제가 첫 커리어를 정하는 데나 기술 공부를 할 때 좋은 밑바탕이 되어주었어요. 지금도 항상 좋은 영향을 받고 있네요 ㅎㅎ 우리 AUSG에서 같이 놀아요!',
    name: '김윤서',
    profile: 'AUSG 6기, AWS Solutions Architect',
    imagePath: '/people/yoonseo.jpg',
  },
  {
    content:
      '개발자 커리어를 함께 성공적으로 쌓아나갈 동반자들을 아우쓱에서 찾았습니다. 현시대가 필요로 하는 인재들이 모여 있는 동아리라고 생각합니다. 아우쓱은 서로를 존중하는 분위기에서 자유롭게 지식을 공유합니다. 또 놀 땐 화끈하게 노는 분위기입니다. 이런 분위기의 동아리를 찾고 있다면 합류해서 함께 성장해요!',
    name: '황성찬',
    profile: 'AUSG 5기, 네이버 클라우드',
    imagePath: '/people/prayme.jpg',
  },
  {
    content:
      '개발과 클라우드라는 세상을 얼마나 좁게 보고있었는지 여기서 깨달았습니다. 아우쓱을 통해 시야를 넓히고 멋진 인연들을 만들 수 있었습니다!',
    name: '오규태',
    profile: 'AUSG 4기, 국방통합데이터센터',
    imagePath: '/people/einokt.jpg',
  },
  {
    content:
      'AUSG에서 다양한 사람들을 많이 만나서 발전한 것 같습니다 :) 우리 AUSG 멤버들을 볼 때 내가 부족한 점과 내가 발전해야 하는 점 등을 항상 느끼고 있어요. 함께 발전해 나아갈 수 있는 엄청난 커뮤니티에 함께 하는 것만으로도 대단한 영광입니다.',
    name: '김민태',
    profile: 'AUSG 4기, 우아한형제들 서버 개발자',
    imagePath: '/people/connor614.jpeg',
  },
  {
    content:
      'AUSG에서 꽤 구체적인 (동시에 한없이 러프한) 관심사를 가진 분들과의 대화를 통해 여러 가지로 느낀 것도 많고 배운 것도 많았습니다. 클라우드와 AWS, 그리고 IT에 관심이 있는 분들은 많이 지원해 주세요!',
    name: '문성혁',
    profile: 'AUSG 3기, 데브시스터즈 DevOps Engineer',
    imagePath: '/people/roeniss.png',
  },
  {
    content:
      '다양한 클라우드 지식을 얻는 것은 물론, 개발적으로 어떻게 지속적으로 성장할 수 있을지 방향을 잡는 데 큰 도움이 되었습니다. AUSG 전의 나와 후의 나는 많이 달라져 있다고 느껴요. AUSG 멤버들과 재미있게 소통하며 성장하고 싶다면 주저하지 마세요!',
    name: '강영우',
    profile: 'AUSG 5기, 야놀자 Software Engineer',
    imagePath: '/people/yeongwoooo.jpg',
  },
  {
    content:
      '클라우드뿐만 아니라 개발에 관심 있는 대학생들이 모여서 정말 재밌는 것들을 만들어 나가는 모임이에요. 덕분에 제 대학 생활을 행복하게 보냈던 것 같아요! Join us!',
    name: '윤서현',
    profile: 'AUSG 1기, NCSOFT Software Engineer',
    imagePath: '/people/seohyunyoon.jpg',
  },
];

export default QUOTES;
