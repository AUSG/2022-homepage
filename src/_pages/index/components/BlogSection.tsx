import Link from 'next/link';
import Card from '@/src/components/Card';
// import ArrowRightIcon from 'public/icons/arrow_right.svg';
import React from 'react';
import ArrowRight from '../../../../public/icons/arrow_right.svg';
import videoData from '../../../../data/videos.json';
import BigChatBackground from '../../../../public/images/2021-bigchat-background.svg';

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
          AUSG 멤버들이 공유한 <br className="xl:hidden" />
          지식과 경험을 확인해보세요!
        </h1>
        <section className="mt-6 flex gap-[16px] xl:mt-12 xl:gap-[48px]">
          <div className="w-full text-center text-[18px] font-bold text-white">
            <div className="flex overflow-x-scroll pb-4">
              {videoData.videos.slice(0, 5).map((video: any) => (
                <a
                  key={video.title}
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative mr-4 flex-shrink-0 flex-grow basis-36 overflow-hidden rounded-[20px]"
                >
                  <BigChatBackground width="100%" height="100%" />
                  <div className="absolute inset-x-1 bottom-1 rounded-[20px] bg-gray-900 bg-opacity-70 p-2.5 text-white">
                    <div className="text-xs">{video.speaker}</div>
                    <div
                      className="mt-0.5 text-sm font-semibold"
                      style={{ wordBreak: 'keep-all' }}
                    >
                      {video.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <Link href="/activities">
              <a className="mt-6 flex items-center">
                <span className="mr-[8px] text-[20px] font-bold text-white md:text-2xl">
                  모든 BIG CHAT 영상들 보러가기
                </span>
                <ArrowRight
                  width="36"
                  height="36"
                  className="h-9 w-9 fill-white"
                />
              </a>
            </Link>
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
