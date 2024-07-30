import React from "react";

export const AboutUs = () => {
  return (
    <div className="pt-20">
      <p className="text-center text-[#2c4152] text-4xl capitalize font-semibold mb-10">
        who we are
      </p>
      <div className="bg-[#2c4152] text-white py-20 text-center">
        <p className="w-5/6 mx-auto font-light">
          Our 'About Us' page would like to thank you from the bottom of its
          heart for visiting. It doesn't get a lot of attention usually, as
          people are busy surfing other, 'cooler' pages. The fact that you
          voluntarily decided to come here means a lot. Honestly. *sniff sniff*
        </p>
      </div>

      <div className="flex justify-between w-5/6 mx-auto text-[#2c4152] py-12">
        <div className="space-y-5">
          <p className="uppercase text-2xl">shopzy own</p>
          <p className="text-sm">
            SHOPZY OWN is our private label - that's designed by us, and owned
            by you. If you're looking for head-turning styles that are
            one-of-a-kind, SHOPZY OWN is what you should stock up on.
          </p>
        </div>
        <div className="space-y-5">
          <p className="uppercase text-2xl">exclusive international links</p>
          <p className="text-sm">
            We bring you the trendiest and most exclusive brands from around the
            world to your wardrobe. Forget scouring the net for what's hot
            globally, we've got you covered.
          </p>
        </div>
      </div>
      <div className="bg-[#2c4152] text-white text-center space-y-5 py-16">
        <p className="text-3xl font-light">Why we're called 'The Shopzy'</p>
        <p className="text-left w-5/6 mx-auto font-light">
          The Shopzy was born out of the idea of loving what you do - “following
          your soul”. Our philosophy is that life is short. Don't spend it doing
          something you don't like. There are too many Monday mornings, and you
          can't go dreading every single one of them.
        </p>
        <p className="text-left w-5/6 mx-auto font-light">
          We, at The Shopzy, love what we do- designs, products, marketing, and
          everything in between. Our goal is to give everyone something they'll
          love, something they can use to express themselves, and, simply put,
          something to put a smile on their face. So, whether it's superheroes,
          TV shows, pop culture, music, sports, or quirky, funny stuff you're
          looking for, we have something for everyone.
        </p>
      </div>
      <div className="flex justify-center py-12 text-[#2c4152] space-x-40">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <p className="uppercase text-xl">easy exchange</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-20"
          >
            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
          </svg>
          <p className="uppercase text-xl">100% handpicked</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-20"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="uppercase text-xl">asssured quality</p>
        </div>
      </div>
    </div>
  );
};
