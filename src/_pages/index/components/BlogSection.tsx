import Card from '@/components/Card';
// import ArrowRightIcon from 'public/icons/arrow_right.svg';
import React from 'react';

// TODO: fetch data from API server
const posts = [
  {
    title: 'Chrome에서 HTTPS 걸린 로컬호스트 로그인하기',
    url: 'https://www.binaryflavor.com/chromeeseo-https-geolrin-rokeolhoseuteu-rogeuinhagi/',
    author: {
      name: 'Neil',
      profileImageUrl:
        'https://www.binaryflavor.com/content/images/2021/11/144378291_1570893433099864_3580879723569955477_n.jpeg',
    },
  },
  {
    title: 'Terraform 으로 aws lambda & function url 만들기',
    url: 'https://www.binaryflavor.com/terraform-euro-aws-lambda-url-gwa-hamgge-olrigi/',
    author: {
      name: 'Neil',
      profileImageUrl:
        'https://www.binaryflavor.com/content/images/2021/11/144378291_1570893433099864_3580879723569955477_n.jpeg',
    },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-primary">
      <div className="py-[48px] pl-[20px] md:mx-auto md:max-w-screen-xl xl:py-[100px]">
        <h1 className="text-[24px] font-bold leading-[34px] text-white xl:text-[36px] xl:leading-[52px]">
          멤버들이 공유한 <br className="xl:hidden" />
          지식과 경험을 확인해보세요!
        </h1>
        <section className="mt-[36px] flex gap-[16px] overflow-x-auto xl:mt-[60px] xl:gap-[48px]">
          <div className="w-full text-center text-[18px] font-bold text-white">
            <span className="text-[30px]">🚧</span>
            <br />
            컨텐츠를 준비중이에요.
            <br />
            조금만 더 기다려주세요!
          </div>
          {/* {posts.map(post => ( */}
          {/*  <Card */}
          {/*    key={post.url} */}
          {/*    title={post.title} */}
          {/*    url={post.url} */}
          {/*    author={post.author} */}
          {/*  /> */}
          {/* ))} */}
        </section>

        <div className="flex justify-center pr-[20px]">
          {/* TODO: 블로그 페이지 개발 후 주석 해제하기 */}
          {/* <button
          type="button"
          className="mt-[36px] flex items-center gap-x-[8px] rounded-[20px] bg-white py-[6px] px-[48px] text-[14px] font-bold leading-[36px]"
        >
          더 보러가기
          <ArrowRightIcon className="h-[24px] w-[24px]" />
        </button> */}
        </div>
      </div>
    </div>
  );
}
