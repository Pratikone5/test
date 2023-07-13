import React, { useEffect, useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import { FetchApi } from "../components/utils/FetchApi";
import { Loader2 } from "../components/utils/loader";
import { ampmconvertor } from "../components/utils/dateconvertor";
import { date, Time } from "../components/utils/smallFeature";
import { convert24hoursto12hours } from "../components/utils/features";
import { useRouter } from "next/router";
import { Cardlayout2 } from "../components/commonComponent/CardLayout";

export default function BlackMoonResponse({}) {
  const [userDetail, setUserDetails] = useState({});
  const [detail, setdetail] = useState({});
  const userdata = Cookies.get("userDetail");
  const router = useRouter();

  useEffect(async () => {
    if(userdata){
    setUserDetails(JSON.parse(userdata));
    const ApiCall = await FetchApi({
      apiName: "planets/tropical",
      userData: {
        ...JSON.parse(userdata),
      },
    });

    console.log(ApiCall)

    if (ApiCall.status) {
        const sign =
        venusresponse[`sign_${ApiCall.response.lilith.house}`];
    }
}
else{

}
  }, []);



  const venusresponse ={

  aries:{
    title:"Your Venus is in Aries.",
    sign : "a",
    list : {
        first: {
        title: "How You Love 🥰",
        desc: "With Venus in Aries, your love style is passionate, bold, and direct. You fall in love quickly, expressing your feelings without hesitation. Just remember, patience and understanding can add depth and longevity to your relationships."
        },
        second : {
            title : "What You Find Beautiful 😍",
            desc: "You appreciate audacious styles and vibrant colors, with a daring beauty regime to match. Red lipstick is your go-to. However, don't dismiss the charm of subtle shades.",
            
        },
        third: {
            title: "What You Value 😇",
            desc: "You hold bravery, honesty, and competition in high esteem. You're unafraid to stand for your beliefs. But remember, acknowledging other's values can lead to richer conversations.",

        },
        forth: {
            title: "How You Use Your Resources 🤑",
            desc: "You're impulsive with resources, often seeking instant gratification. Though financial planning might seem tedious, treating it like a game can lead to a spectacular payoff."
        }
    }
    },
    taurus: {
        "title": "Your Venus is in Taurus.",
        "sign": "b",
        "list": {
            "first": {
                "title": "How You Love",
                "desc": "With Venus in Taurus, you approach love with steady devotion and sensual pleasure. You enjoy taking your time, cherishing every moment of your relationships. But remember, flexibility and adaptability can also spice up your love life."
            },
            "second": {
                "title": "What You Find Beautiful",
                "desc": "You are drawn to timeless beauty and elegance. From classic fashion choices to a well-set dinner table, your aesthetics favor quality and comfort. Still, trying something bold and modern could add an interesting twist."
            },
            "third": {
                "title": "What You Value",
                "desc": "You place high value on reliability, practicality, and loyalty. Your rock-solid principles are admirable. However, being open to different perspectives can lead to enlightening experiences."
            },
            "forth": {
                "title": "How You Use Your Resources",
                "desc": "You are cautious and prudent when it comes to your resources, often opting for secure investments and savings. While your financial stability is commendable, occasionally splurging on something luxurious could bring joy and refreshment."
            }
        }
    },
    gemini: {
        "title": "Your Venus is in Gemini.",
        "sign": "c",
        "list": {
            "first": {
                "title": "How You Love 😍",
                "desc": "With Venus in Gemini, your love life is a whirlwind of fun and flirty conversation. You crave intellectual stimulation in a partner and thrive on change. Don't forget, though, consistency and depth in relationships are just as important."
            },
            "second": {
                "title": "What You Find Beautiful 💖",
                "desc": "You're attracted to eclectic styles, vibrant patterns, and fresh trends. Your beauty aesthetic is all about variety and fun. Yet, sometimes a classic look could present an appealing change."
            },
            "third": {
                "title": "What You Value 😇",
                "desc": "Communication, curiosity, and adaptability rank high in your values. You cherish the freedom to explore and learn. However, grounding yourself in certain principles can also lend a steadying force in your life."
            },
            "fourth": {
                "title": "How You Use Your Resources 💸",
                "desc": "You prefer to spend your resources on experiences that stimulate your mind and fuel your curiosity. You might find yourself buying books, courses, or travel experiences. Remember, a balanced approach to savings and spending can ensure future security."
            }
        }
    },
    cancer: {
        "title": "Your Venus is in Cancer.",
        "sign": "c",
        "list": {
        "first": {
        "title": "How You Love 🥰",
        "desc": "With Venus in Cancer, you love with deep emotion, empathy, and care. You're a nurturing soul who values emotional connection. But remember, it's okay to also establish boundaries in relationships."
        },
        "second": {
        "title": "What You Find Beautiful 😍",
        "desc": "You appreciate soothing colors, vintage styles, and homey aesthetics. You're drawn to beauty that evokes comfort and nostalgia. Although, trying out modern and edgy styles can be a fun deviation."
        },
        "third": {
        "title": "What You Value 😇",
        "desc": "You hold dear values such as family, loyalty, and emotional security. You're a firm believer in the power of emotional bonds. Yet, stepping out of your comfort zone occasionally can be enriching."
        },
        "forth": {
        "title": "How You Use Your Resources 🤑",
        "desc": "You prefer spending your resources on things that offer comfort, security, and emotional satisfaction. This could be your home, family, or close friends. Nevertheless, investing in yourself and your interests is also crucial for personal growth."
        }
        }
        },
        leo: 

  }
  const handleReset = () => {
    router.push("/venus");
    Cookies.remove("userDetail");
  };

  return (
    <>
      <Head>
        <title>
   
        </title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=" "
        />
      </Head>

      <div className="dark:bg-[#2F2F31] bg-zinc-100 pt-14">
        <h1
          style={{
            lineHeight: 1.3,
           
          }}
          className="text-transparent px-5 text-center max-w-4xl mx-auto mb-5 bg-gradient-to-r from-teal-400  to-fuchsia-500 md:mb-10 font-cera_bold md:text-5xl text-4xl text-center leading-norma bg-clip-text "
        >
         Your Venus Report 
        </h1>
        {userDetail !== null && (
          <div className="flex max-w-4xl px-5 mx-auto border-b border-zinc-300 dark:border-zinc-600 pb-10 gap-6 justify-between items-start">
            <div className="flex flex-col gap-4">
              <h6 className="dark:text-white text-zinc-800">
                {userDetail?.name}
              </h6>
              <p className="dark:text-zinc-200 flex items-center gap-3 text-zinc-700">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5  dark:fill-zinc-100 fill-zinc-800"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
                    />
                  </g>
                </svg>
                {date(userDetail?.month, userDetail?.day)}, {userDetail?.year}{" "}
                at{" "}
                {Time(
                  convert24hoursto12hours(userDetail?.hour),
                  userDetail?.min
                )}{" "}
                {ampmconvertor(userDetail?.hour)}
                {/*March 03, 2000 at 07:45 AM*/}
              </p>
              <p className="dark:text-zinc-200 flex gap-3  items-start text-zinc-700">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-[6px] dark:fill-zinc-100 fill-zinc-800"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
                    />
                    <path
                      d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                  </g>
                </svg>
                {userDetail?.place}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="hover:bg-zinc-800 dark:hover:bg-white hover:text-white dark:hover:text-zinc-800 text-zinc-800 dark:text-white p-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        )}
        {Object.keys(detail).length !== 0 ? (
          <>
          
          
          <div className="max-w-4xl px-5 md:pb-20 pb-14 mt-10 flex flex-col  gap-10 mx-auto ">
              <div className="flex flex-col gap-3">
                <div className="flex  items-end">
                  <h3 className=" text-zinc-700 dark:text-zinc-200  text-2xl font-cera_medium ">
                    {staticData.section1.title}
                  </h3>
                  
                </div>

                <div className=" md:text-lg text-zinc-700 dark:text-zinc-300 self-center  list-none   pt-3 flex flex-col gap-3">
                  <p className="">{staticData.section1.desc2}</p>
                </div>
              </div>
              <div className="flex   border-zinc-200 flex-col md:gap-8 gap-6">
                <div className="flex bg-gradient-to-tl from-fuchsia-400 to-fuchsia-200   p-5 rounded-md justify-between md:items-center gap-5 text-zinc-700">
                  <h3 className=" text-xl sm:text-2xl font-cera_medium ">
                    {response?.title}
                  </h3>
                  <p className="font-zodiac text-[40px] leading-9 md:text-[55px] text-zinc-800">
                    {response?.sign}
                  </p>
                </div>

                <div className="  rounded-md text-zinc-700  dark:text-zinc-200 self-center  gap-3 flex flex-col">
                  <div className="flex  items-end gap-2">
                    <h2
                     
                      className="text-pink-400 md:text-2xl font-cera_medium "
                    >
                      {response.list.first.title}
                    </h2>
                 
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {response.list.first.desc}
                  </p>
                </div>
                <div className=" flex flex-col  dark:text-zinc-300 text-zinc-700  gap-3  ">
                  <div className="flex items-end gap-2">
                    <h2
                     
                      className="text-xl md:text-2xl text-indigo-400 font-cera_medium"
                    >
                      {response.list.second.title}
                    </h2>
                    
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {response.list.second.desc}
                  </p>
                </div>

                <div>
                  <div className="flex gap-3     items-end">
                    <h3
                     
                      className=" text-red-400 md:text-2xl text-xl font-cera_medium "
                    >
                      {response.list.third.title}
                    </h3>
                   
                  </div>
                  <div className=" md:text-lg text-zinc-700 dark:text-zinc-300 self-center  list-none   pt-3 flex flex-col gap-3">
                    <p className="text-zinc-700 dark:text-zinc-300">
                      {response.list.third.desc}
                    </p>
                   
                  </div>
                </div>



                <div>
                
                  <div className="     items-end">
                    <h3
                     
                      className=" text-violet-400 md:text-2xl text-xl font-cera_medium "
                    >
                      {response.list.forth.title}
                    </h3>
                   
                  </div>
                  <div className=" md:text-lg text-zinc-700 dark:text-zinc-300 self-center  list-none   pt-3 flex flex-col gap-3">
                    <p className="text-zinc-700 dark:text-zinc-300">
                      {response.list.forth.desc}
                    </p>
                   
                  </div>
                </div>
              </div>
             
            </div>
            <section className="overflow-x-hidden w-full dark:bg-zinc-900 bg-white md:py-28 py-14  ">
              <div className="flex flex-col gap-7 md:gap-14 max-w-[1300px] mx-auto px-6 sm:px-10 ">
                <h2 className="md:text-5xl text-center lineHeight font-cera_bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-lime-400">
                  Premium Astrology Reports
                </h2>
                <div className="w-full ">
                  <div className="w-full justify-center py-10 flex-wrap  flex gap-7 md:gap-7 ">
                    <Cardlayout2
                      link="/reports/natal-chart-report"
                      img={"/book-covers/style-1/natal.png"}
                      id={0}
                      title="Natal Chart Report"
                      desc="Know your planetary positions, personality and temperament, motivations and desires, potential skills and talents. Once your life is aligned with the cosmos, you start creating magic!   "
                    />
                    <Cardlayout2
                      link="/reports/solar-return-report"
                      img={"/book-covers/style-1/solar.png"}
                      id={1}
                      title="Solar Return Report"
                      desc="Know important theme, events, warnings until your next birthday. Solar return report empowers your bucket list with important astrology clues to strategize your priorities in life.   "
                    />
                    <Cardlayout2
                      link="/reports/love-compatibility-report"
                      img={"/book-covers/style-1/compatibility.png"}
                      id={4}
                      title="Love Compatibility Report"
                      desc="Check your compatibility and know how your love and affection works with your partner. Match is made in heaven! Synastry chart reveals the compatibility results for you and your loved one. "
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <Loader2 />
        )}
      </div>
    </>
  );
}

const staticData = {
  section1: {
    title: "What does Venus in your Birth Chart signify? ",
    desc2:
      "Venus in your birth chart is the astrological cheat sheet to your love style, aesthetic preferences, and financial habits. It's like a cosmic mirror reflecting your heart's desires and your approach to pleasure and value in life. It's your celestial guide to understanding how you love, what you find beautiful, and how you use your resources.",
  },
};
