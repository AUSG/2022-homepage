import Header from '@/components/Header';
import ContactImage from 'public/images/contact.png';
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>AUSG - Contact</title>
      </Head>
      <div className="md:mx-auto md:max-w-screen-xl">
        <Header />
        <div className="mt-3 ml-5 text-2xl font-bold md:text-center md:text-4xl">
          Contact
        </div>

        <div
          className="mx-5 mt-[26px] overflow-hidden rounded-[20px] shadow-[0px_0px_8px_rgba(0,0,0,0.1)]
          md:mt-[100px] md:flex md:h-[286px] md:items-center md:justify-between"
        >
          <div className="ml-4 mt-4 text-2xl font-bold text-gray-900 md:flex-1 md:text-center">
            궁금한게 있다면 <br className="xl:hidden" />
            언제든지 + 24시간 <br className="xl:hidden" />
            질문 받습니다.
          </div>
          <div
            className="relative mr-3 mt-1 ml-auto mb-3 aspect-[441/226] h-24
            md:m-0 md:mr-12 md:h-[calc(100%-60px)] md:w-auto"
          >
            <Image
              src={ContactImage}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>

        <div className="mx-5 my-6 md:my-10">
          <iframe
            src="https://tally.so/embed/w447O5?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            height="440"
            title="AUSG로 문의하기"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
