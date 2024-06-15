import useEmblaCarousel from 'embla-carousel-react';

import YoutubeIcon from 'public/icons/youtube.svg';
import ArrowRightIcon from 'public/icons/arrow_right.svg';
import videoData from 'data/videos.json';
import { usePrevNextButtons } from '../hooks/usePrevNextButton';

const AboutAusgCon = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="bg-primary p-5 md:py-20 md:text-center">
        <h2 className="text-2xl font-semibold text-white md:text-4xl">
          아우쓱이 세상에 공유하고자 하는 가치 <br className="md:hidden" />
          AUSGCON
        </h2>

        <p
          className="mt-4 text-white lg:mt-8"
          style={{ wordBreak: 'keep-all' }}
        >
          아우쓱은 클라우드 커뮤니티로서, 모두가 지식 공유자가 되어 성장하는
          공간을 만들어가고 있습니다. <br />
          AUSGCON은 아우쓱이 세상에 공유하고자 하는 가치를 담은 행사입니다.
        </p>
      </div>

      <div className="lg:mx-auto lg:max-w-screen-xl">
        <h3 className="ml-5 mt-8 text-lg font-bold md:ml-8 md:text-2xl lg:mt-16">
          AUSGCON 영상
        </h3>
        <div className="embla mt-3">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container touch-pan-x">
              {videoData.ausgconVideos.map(video => (
                <div className="embla__slide" key={video.speaker}>
                  <iframe
                    className="flex h-[var(--slide-height)] w-full"
                    src={video.embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full justify-end p-4">
            <div className="flex gap-6">
              <button
                className="disabled:text-gray-200"
                type="button"
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              >
                <svg width={32} height={32} viewBox="0 0 532 532">
                  <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                  />
                </svg>
              </button>
              <button
                className="disabled:text-gray-200"
                type="button"
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              >
                <svg width={32} height={32} viewBox="0 0 532 532">
                  <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                  />
                </svg>
              </button>
            </div>
          </div>
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

export default AboutAusgCon;
