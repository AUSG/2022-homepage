import useEmblaCarousel from 'embla-carousel-react';

import BigChatBackground from 'public/images/2021-bigchat-background.svg';
import YoutubeIcon from 'public/icons/youtube.svg';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import ShareImage from 'public/images/share.svg';
import BooksImage from 'public/images/books.svg';

import videoData from 'data/videos.json';

const AboutBigChat = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="bg-primary p-5 md:py-20 md:text-center">
        <h2 className="text-2xl font-semibold text-white md:text-4xl">
          경험과 노하우를 공유하는 <br className="md:hidden" />
          BIG CHAT
        </h2>

        <p
          className="mt-4 text-white lg:mt-8"
          style={{ wordBreak: 'keep-all' }}
        >
          다양한 분야의 AUSG 멤버들이 한 데 모여 클라우드 개발 경험과 노하우를
          공유해요.
        </p>
      </div>

      <div className="lg:mx-auto lg:max-w-screen-xl">
        <div className="mt-6 overflow-hidden lg:hidden" ref={emblaRef}>
          <div className="flex w-full select-none">
            <div className="relative mx-2 min-w-[80%] justify-between rounded-3xl bg-gray-100 p-5 md:min-w-[90%]">
              <div className="mr-8">
                <h4 className="text-base font-semibold">
                  우리 모두가 지식 공유자
                </h4>
                <p className="mt-1.5 text-sm" style={{ wordBreak: 'keep-all' }}>
                  AUSG에서는 모두가 빅챗에 참여해 저마다의 클라우드 개발 경험과
                  노하우를 멤버들과 공유해요. AUSG에 합류하는 그 순간부터,
                  모두가 지식 공유자가 되는거죠.
                </p>
              </div>
              <div className="mt-4 -mb-4 flex justify-end">
                <ShareImage className="h-[100px] w-[105px]" />
              </div>
            </div>

            <div className="relative mx-2 min-w-[80%] justify-between rounded-3xl bg-gray-100 p-5 md:min-w-[90%]">
              <div className="mr-8">
                <h4 className="text-base font-semibold">
                  나누면서 더 커지는 지식
                </h4>
                <p className="mt-1.5 text-sm" style={{ wordBreak: 'keep-all' }}>
                  내가 알고 있던 것도, 모르고 있던 것도 나누는 순간 내 것이 되는
                  경험. AUSG 멤버들과 함께 성장해요.
                </p>
              </div>
              <div className="mt-4 -mb-4 flex justify-end">
                <BooksImage className="h-[120px] w-[105px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-8 mt-16 hidden select-none gap-12 lg:flex">
          <div className="flex flex-1 justify-between rounded-3xl bg-gray-100 p-5">
            <div className="mr-6">
              <h4 className="text-xl font-semibold">우리 모두가 지식 공유자</h4>
              <p className="mt-3 text-base" style={{ wordBreak: 'keep-all' }}>
                AUSG에서는 모두가 빅챗에 참여해 저마다의 클라우드 개발 경험과
                노하우를 멤버들과 공유해요. AUSG에 합류하는 순간부터, 모두가
                지식 공유자가 되는거죠.
              </p>
            </div>
            <div className="-mb-4 mt-10 flex items-end">
              <ShareImage className="h-[150px] w-[180px]" />
            </div>
          </div>
          <div className="flex flex-1 justify-between rounded-3xl bg-gray-100 p-5">
            <div className="mr-6">
              <h4 className="text-xl font-semibold">나누면서 더 커지는 지식</h4>
              <p className="mt-3 text-base" style={{ wordBreak: 'keep-all' }}>
                내가 알고 있던 것도, 모르고 있던 것도 나누는 순간 내 것이 되는
                경험. AUSG 멤버들과 함께 성장해요.
              </p>
            </div>
            <div className="-mb-4 mt-10 flex items-end">
              <BooksImage className="h-[160px] w-[140px]" />
            </div>
          </div>
        </div>

        <h3 className="ml-5 mt-8 text-lg font-bold md:ml-8 md:text-2xl lg:mt-16">
          BIG CHAT Featured
        </h3>
        <div className="mt-3 flex overflow-x-scroll px-5 pb-4 md:mt-12 md:grid md:grid-cols-4 md:gap-4 md:px-8 lg:grid-cols-5">
          {videoData.videos.map((video: any) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="relative mr-4 h-[240px] flex-shrink-0 basis-[180px] overflow-hidden rounded-[20px]
                md:h-auto md:basis-auto"
            >
              <BigChatBackground width="100%" height="100%" />
              <div className="absolute inset-x-1 bottom-1 rounded-[20px] bg-gray-900 bg-opacity-70 p-2.5 text-white">
                <div className="text-xs">{video.speaker}</div>
                <div className="mt-0.5 text-sm font-semibold">
                  {video.title}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mb-16 mt-4 flex justify-center md:mt-8">
          <a
            href="https://www.youtube.com/channel/UCaN1L9bj7pCuv1PiKzx-2rQ"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center p-2"
          >
            <YoutubeIcon className="h-6 w-6 fill-gray-900 md:h-8 md:w-8" />
            <div className="mx-2 font-semibold md:text-xl">유튜브 보러가기</div>
            <ArrowRightIcon className="h-6 w-6 fill-sub md:h-8 md:w-8" />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutBigChat;
