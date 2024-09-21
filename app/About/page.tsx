import { title } from "@/components/primitives";
import {photo} from '@/assest/facetime-button.png';
export default function AboutPage() {
  return (
    <div className="w-full h-screen">
    <section  className="  container lg:px-4 mx-auto px-27 max-w-1344 bg-black bg-cover w-full h-[80vh]  ">
    <div>
      <img src="/"alt="Globe" role="presentation"/>
      <div className=" flex flex-col  items-start h-full text-left pt-16 ">
      <h3 className="text-gray-300  mb-10 font-bold mt-2">ABOUT  US</h3>
      <h1 className="mb-6  text-gray-100 text-6xl font-extrabold">Empowering brands to create and connect through live video</h1>
      <div>
        <p className="text-gray-300 mb-7 text-lg">Millions of people around the world use TransLive to reach, engage and monetize their audiences.<br/>
        Our customers include professional and amateur gamers, Fortune 500 companies, media, <br/> politicians and celebrities.
        </p>
      </div>
      </div>
       <button className="absolute bottom-0 right-0 mr-5 mb-5  "><a className="flex rounded-full bg-gray-700 from-neutral-500 text-xs w-12 h-12 border-1 pt-2 transition-transform duration-300 transform-gpu hover:scale-125 "   href="/">Need help?</a></button>
 </div>
 </section>
   <section className="absolute bg-white   w-full h-[100%] left-0 right-0">
    <div className="flex justify-center items-center text-center pt-14 bg-slate-300 h-44 w-full ">
    <div className="text-black font-extrabold text-7xl px-7 ">
    8M+
    <div className="text-black text-base">
    broadcasts delivered monthly
    </div>
    </div>
    <div className="text-black font-extrabold text-7xl px-7 ">
    600M+
    <div className="text-black text-base">
    viewers engaged monthly
    </div>
    </div>
    </div>

     <h1 className="text-black font-extrabold text-5xl px-28 mt-36 ">Our products</h1>
     <p className="text-black mt-8  px-28 text-1.5xl mb-10">At TransLive, we keep nurturing our product portfolio to empower content creators to
       reach wider<br/> audiences, and brands to spread their
       messages throughout a massive network of streamers.</p>
       <div className="w-full h-screen ">
        <div className="h-screen px-20 flex justify-center  gap-8">
           <div className="bg-purple-700 text-white w-72 h-64 rounded-md flex flex-col justify-center items-start text-start px-4">
          <div>{photo}</div>
            <h1 className="font-bold font-serif mb-3 ">MultiStreaming</h1>
            <p><span>Reach</span>a wider audience by streaming to multiple platforms simultaneously</p>
           </div>
           <div className="bg-yellow-400 text-white w-72 h-64 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className="font-bold font-serif mb-3 ">Upload&Stream</h1>
          <p><span>Automate</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
         <div className="bg-blue-600 text-white w-72 h-64 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className="font-bold font-serif mb-3 ">Chat</h1>
          <p><span>Engage</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
         <div className="bg-orange-700 text-white w-72 h-64 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className="font-bold font-serif mb-3 ">Analytics</h1>
          <p><span>Measure</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
        </div>
        <div className="bg-white absolute right-0 left-0 h-screen w-full flex justify-center items-center  ">
          <div className="text-black  ">
            <img src=""/>
            <h1 className="text-3xl font-extrabold">How it started</h1>
            <p>Andrew Surzhynskyi and Alexander Khuda founded Restream in 2015 with an obsession to help streamers get a wider audience</p>
            <p>Focusing first on the gaming community, and building initially a free product, they soon saw the potential of how Restream could help in all kind of circumstances – from every day IRL streaming to professional keynote broadcasting.</p>
            <p>Over the next 5 years, Restream flourished into the robust ecosystem of tools it is today. Restream goes beyond streaming technology and into the complex infrastructure that continues to create millions of jobs for content creators worldwide.</p>
          </div>
          <div>
        
          </div>
        </div>
       </div>
    </section> 
 </div>
    

  );
}

 