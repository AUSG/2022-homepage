import useEmblaCarousel from 'embla-carousel-react';

const AboutBigChat = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="bg-primary p-5">
        <h2 className="text-2xl font-semibold text-white">
          경험과 노하우를 공유하는
          <br />
          BIG CHAT
        </h2>

        <p className="mt-4 text-white">
          다양한 분야의 AUSG 멤버들이 한 데 모여 클라우드 개발 경험과 노하우를
          공유해요.
        </p>
      </div>

      <div className="mt-8" ref={emblaRef}>
        <div className="-ml-3 flex w-full select-none">
          <div className="relative ml-4 min-w-[80%] rounded-3xl bg-gray-100 p-5">
            <h3>우리 모두가 지식 공유자</h3>
            <p className="mt-1.5 text-sm">
              AUSG에서는 모두가 빅챗에 참여해 저마다의 클라우드 개발 경험과
              노하우를 멤버들과 공유해요. AUSG에 조인하는 순간부터 모두가 지식
              공유자가 되는거죠.
            </p>
          </div>
          <div className="relative ml-4 min-w-[80%] rounded-3xl bg-gray-100 p-5">
            <h3>우리 모두가 지식 공유자</h3>
            <p className="mt-1.5 text-sm">
              AUSG에서는 모두가 빅챗에 참여해 저마다의 클라우드 개발 경험과
              노하우를 멤버들과 공유해요. AUSG에 조인하는 순간부터 모두가 지식
              공유자가 되는거죠.
            </p>
          </div>
          <div className="relative ml-4 min-w-[80%] rounded-3xl bg-gray-100 p-5">
            <h3>우리 모두가 지식 공유자</h3>
            <p className="mt-1.5 text-sm">
              AUSG에서는 모두가 빅챗에 참여해 저마다의 클라우드 개발 경험과
              노하우를 멤버들과 공유해요. AUSG에 조인하는 순간부터 모두가 지식
              공유자가 되는거죠.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBigChat;
