import Header from '@/src/components/Header';
import React from 'react';
import CloudImage from 'public/images/cloud.svg';
import CloudTruncatedImage from 'public/images/cloud-truncated.svg';
import { Provider, LikeButton } from '@lyket/react';

export default function IntroSection() {
  return (
    <div className="bg-primary">
      <Header theme="colored" />
      <main className="flex flex-col overflow-hidden px-[20px] pb-[38px] pt-[30px] md:mx-auto md:max-w-screen-xl md:py-0">
        <div className="flex items-center md:py-10">
          <div className="hidden flex-1 md:mt-24 md:block">
            <CloudImage
              width="100%"
              height="100%"
              className="animate-floating"
            />
          </div>
          <div className="mt-[8px] flex flex-col items-center md:min-w-[400px] md:flex-1">
            <h1 className="text-[28px] font-bold text-white md:text-center md:text-[48px]">
              대학생 개발자를 위한
              <br />
              클라우드 커뮤니티
            </h1>
            <div>
              <Provider apiKey="pt_42fe46c843e030ddadfb059b67c6dd ">
                <LikeButton id="like" namespace="intro-section">
                  {({
                    handlePress,
                    totalLikes,
                    userLiked,
                    isLoading,
                    isCounterVisible,
                  }) => (
                    <div className="mt-[24px] flex items-center gap-4">
                      <button
                        type="button"
                        onClick={handlePress}
                        disabled={isLoading}
                        className="text-[48px] transition duration-300 ease-in-out hover:scale-125"
                      >
                        {userLiked ? '🌩' : '☁️'}
                      </button>
                      {isCounterVisible && (
                        <p className="text-[20px] font-bold text-white md:text-center md:text-[34px]">
                          {totalLikes}
                        </p>
                      )}
                    </div>
                  )}
                </LikeButton>
              </Provider>
            </div>
          </div>
        </div>

        <div className="-mx-[20px] mt-[18px] flex justify-end md:hidden">
          <CloudTruncatedImage
            width="80%"
            height="100%"
            className="right-0 animate-floating transition-[translate]"
          />
        </div>
      </main>
    </div>
  );
}
