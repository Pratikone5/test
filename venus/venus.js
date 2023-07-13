import React from "react";
import { SubPara } from "./black-moon-lilith-calculator";
import useLang from "../components/context/contexthook/languagexontexthook";
import Head from "next/head";
import Form from "../components/form/form";
import { GradientBorderCard } from "./big-3-calculator";

const Chiron = () => {
  const { formdata } = useLang();
  return (
    <div className="">
      <Head>
        <title>
          Discover your Chiron placement and start your healing journey today |
          UpAstrology
        </title>
        <meta
          name="description"
          content=" Chiron represents our deepest wounds and our greatest potential for healing. Calculate your Chiron placement to start your healing journey today with our free Chiron Calculator"
        />
        <meta
          name="keywords"
          content="Chiron Calculator,Chiron,Chiron placement "
        />
      </Head>
      <div className="dark:bg-[#2F2F31]   bg-white">
        <div className="">
          <div className=" flex pt-12 pb-20 md:py-14 max-w-6xl mx-auto items-center">
            <div className="w-full items-center text-center flex flex-col gap-6 md:gap-10 ">
              <div className=" flex flex-col gap-10 max-w-4xl w-full mx-auto md:px-10">
                <div className="flex flex-col gap-6 px-5">
                  <h2
                    style={{ lineHeight: 1.1 
                    
                    }}
                    
                    className="text-transparent pb-1 bg-gradient-to-r from-[#40f0c7] to-[#955b9e] via-[#d16ee0]  font-cera_bold md:text-5xl text-4xl text-center leading-norma bg-clip-text "
                  >
                    {staticData.section1.title}
                  </h2>
                  <p className="dark:text-zinc-300 text-base max-w-sm sm:max-w-2xl mx-auto sm:text-lg leading-7 text-center">
                    {staticData.section1.subtitle}
                  </p>
                </div>
                <div>
                  <Form
                    withoutText={true}
                    data={{
                      ...formdata.en,
                      key: {
                        ...formdata.en.key,
                        button: "Calculate Your Venus Report Now",
                      },
                    }}
                    id="venus"
                    url="/venusrespone"
                  />
                </div>
              </div>
              <p className="text-zinc-700 px-5 dark:text-zinc-300 max-w-xl mx-auto  md:text-lg">
                {staticData.section1.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-100/80   dark:bg-zinc-800 md:py-24 py-14 px-5 ">



        

<div className="w-full max-w-6xl md:gap-36  gap-14  mx-auto flex md:flex-row flex-col">
          
          
          <div className="w-full">
            <div className="max-w-4xl  mx-auto flex flex-col gap-6">
            

              <div className="  max-w-3xl mt-16 flex flex-col gap-5">
                {staticData.section2.list.map((item, i) => (
                  <SubPara extra="dark:text-zinc-300 text-zinc-700" key={i}>
                    {item}
                  </SubPara>
                ))}
              </div>
              <a
                href="venus"
                className="bg-fuchsia-400 text-center  md:ml-2 max-w-max  mx-auto  px-10 py-3 rounded-md text-zinc-800 hover:bg-white font-cera_medium md:text-lg"
              >
                {staticData.section1.btntxt}
              </a>

              
            </div>
          </div>
          <div className="w-full">
            <img src="/imgs/venus.png" className="w-full" />
          </div>
        </div>

      

       
      </div>

      <div className="items-center  overflow-hidden md:py-24 py-14 space-y-10 dark:bg-zinc-900 relative px-5 ">

      <div className="  md:ml-16 max-w-7xl items-center justify-center self-center  dark:bg-zinc-900">
          <section className="md:py-24  px-5 py-14 flex flex-col gap-14">
            {/*left*/}
            <div className="flex w-full self-start ml-3  flex-col gap-6 max-w-3xl mx-auto">
              <h2 className="md:text-5xl dark:text-white lineHeight font-cera_bold text-3xl ">
               {staticData.section3.title}
              </h2>
              {staticData.section3.desc.map((item, i) => (
                  <SubPara extra="dark:text-zinc-300 text-start text-zinc-700" key={i}>
                    {item}
                  </SubPara>
                ))}
            </div>
         
            <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 md:gap-6 max-w-full mx-auto">
              <Card2
                bg="linear-gradient(200deg, #fecfef 10%, #ff9a9e 100%)"
               text="text-rose-800"
               title="Love Expression"
                desc={staticData.section3.list[0]}
              
              />
              
              <Card2
              title="Personal Aesthetics"
              text="text-yellow-700"
                bg="linear-gradient( 100deg, #fdfcfb 10%, #e2d1c3 100%)"
              desc={staticData.section3.list[1]}
              />
              <Card2
              text="text-lime-800"
              title="Personal Values"
                bg="linear-gradient(200deg, #DAD299 10%, #B0DAB9 100%);"
               desc={staticData.section3.list[2]}
              />

              <Card2
              text="text-indigo-800"
              title="Joy and Happiness"
                bg="linear-gradient(to top, #bdc2e8 0%, #e6dee9 100%)"
              desc={staticData.section3.list[3]}
              />
             
            </div>
         
          </section>
        </div>



    
    
      </div>

      <div className="px-5 from-zinc-100/80 to-white overflow-hidden items-center justify-center space-y-6  py-14 md:py-24 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 relative before:left-0 z-[2] before:z-[-1] after:z-[-1] before:top-[0px] before:opacity-60 before:w-[600px] before:h-[650px] md:before:h-full  before:rotate-180 before:absolute after:right-0 after:bottom-[0] dark:after:bottom-[-130px] after:opacity-80 after:w-[600px] after:h-[600px] md:after:h-full  after:absolute ">
        
      <div className="">
          <div className="max-w-5xl flex flex-col md:gap-14 w-full mx-auto">
            <div className="max-w-3xl items-center mx-auto flex flex-col gap-6">
              <h3 className="font-cera_bold text-center  md:text-4xl text-3xl dark:text-white text-zinc-800">
                {staticData.section4.title}
              </h3>
             
              <div className=" md:text-xl self-center dark:text-zinc-300 flex flex-col gap-3">
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-5">
                  <GradientBorderCard
                    bg="bg-gradient-to-br  from-teal-600 to-pink-400 dark:from-teal-600 dark:to-pink-400 to-transparent"
                    text={staticData.section4.list[0]}

                  
                  />
                  <GradientBorderCard
                    bg="bg-gradient-to-bl  from-teal-600 to-pink-400  dark:from-teal-600 dark:to-pink-400 to-transparent"
                    text={staticData.section4.list[1]}
                  />
                   <GradientBorderCard
                    bg="bg-gradient-to-tr  from-teal-600  to-pink-400 dark:from-teal-600 dark:to-pink-400 to-transparent"
                    text={staticData.section4.list[2]}
                  />
                   <GradientBorderCard
                    bg="bg-gradient-to-tl  from-teal-600 to-pink-400  dark:from-teal-600 dark:to-pink-400 to-transparent"
                    text={staticData.section4.list[3]}
                  />
               
                </div>
              </div>
              {staticData.section4.desc.map((item, i) => (
                  <SubPara extra="dark:text-zinc-300 text-start text-zinc-700" key={i}>
                    {item}
                  </SubPara>
                ))}
              <a
                href="venus"
                className="bg-fuchsia-400 text-center max-w-max self-start mx-auto  px-10 py-3 rounded-md text-zinc-800 hover:bg-white font-cera_medium md:text-lg"
              >
                {staticData.section1.btntxt}
              </a>
            </div>
          </div>
        </div>

        
      
      </div>
    </div>
  );
};

export default Chiron;

const staticData = {
  section1: {
    title: "Understanding Your Venus Sign: What's The Meaning Behind It?",
    subtitle:
      "Gain valuable insights into your romantic expressions and aesthetics for a fulfilling, pleasurable life using our free Venus Sign calculator",

    
    btntxt: "Calculate Your Venus Sign Now",
  },
  section2: {
   
    list: [
      "Everyone has a Venus sign in their astrological birth chart, shedding light on their romantic tendencies, personal aesthetics, and sources of joy. These Venus-driven tendencies can be incredibly diverse, reflecting in our relationships, self-value, and pursuit of pleasure.",
      "By finding your Venus sign, you can better understand your romantic desires, your personal values, and the things that bring you maximum joy in life.",
      "Ensure the exactness of your birth details. Any discrepancies can lead to miscalculations and might not reflect your true Venus sign."
    ],
  },

  section3: {
    title: "What does the Venus sign signify in my birth chart?",
     list: [
      "How you express your feelings and relate to others romantically correlates with Venus.",
      "Your sense of beauty, your style, and what you are attracted to aesthetically are linked with the Venus sign.",
      "What you consider worthy or valuable, and where you derive the greatest pleasure from, are also determined by Venus.",
      "What brings delight and joy, and how you pursue leisure and pleasure tie back to your Venus sign."

        ],
        desc:[
            "Venus in your birth chart is the astrological cheat sheet to your love style, aesthetic preferences, and financial habits. It's like a cosmic mirror reflecting your heart's desires and your approach to pleasure and value in life.",
            "The placement of Venus in your chart reflects the way you express love, how you appreciate beauty, what you value most in life and how well you utilize your resources. ",
            "Here are some common implications of Venus sign within our astrological chart:"
        ]
  },

  section4: {
    title: "Our free Venus sign calculator is created to provide you with",
    desc: [
      "Genuine self-growth is deeply rooted in self-recognition, in understanding our Venus-influenced tendencies, and capitalizing on what truly makes us happy. ",
      "From understanding your love style to your key personal values, our Venus Sign calculator is your compass towards improved relationships and enriching personal experiences.",
      "Start your journey today towards better self-understanding, personal growth, and enhanced relationships."
    ],
    list: [
     
    "<b class='bold'>How You Love</b>: Our Venus Sign calculator delivers insights into your unique romantic style, highlighting how you express affection and form emotional connections.",
    "<b class='bold'>What You Find Beautiful</b>: The calculator uncovers your personal aesthetic preferences, showing what you find attractive in people, art, and the world around you.",
    "<b class='bold'>What You Value</b>: It provides a clear picture of your personal value system, revealing what you cherish and prioritize in your life.",
    "<b class='bold'>How You Use Your Resources</b>: The calculator indicates how you utilize your material resources, including your approach towards finances and personal possessions."
    ],
    
  },

  

  
};


export function Card2({ text, bg, title, desc , img}) {
    return (
     
          <div
          style={{ backgroundImage: bg }}
            className={` rounded-md gap-4 space-y-2 px-4 py-8 justify-between w-full items-start`}
          >
            <h6
              className={` duration-[200ms] flex ease-in font-cera_medium ${text}  md:text-xl text-lg  text-zinc-700	  text-left`}
            >
              <span>
{img}
              </span>
              {title}
            </h6>

            <p className="-mt-2">
                {desc}
            </p>
           
           
           
          </div>
         
    );
  }