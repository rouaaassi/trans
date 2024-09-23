import { title } from "@/components/primitives";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <div className="w-full h-screen font-bold text-xl">
    <section  className="  container lg:px-4 mx-auto px-27 max-w-1344 bg-black bg-cover w-full h-[80vh] sm:mb-4 ">
    <div>
      <div className=" flex flex-col  items-start h-full text-left pt-16   ">
      <h3 className="text-gray-300  mb-10 font-bold mt-2">ABOUT  US</h3>
      <h1 className="mb-6  text-gray-100 text-6xl font-extrabold">Empowering brands to create and connect through live video</h1>
      <div>
        <p className="text-gray-300 mb-7 text-lg ">Millions of people around the world use TransLive to reach, engage and monetize their audiences.<br/>
        Our customers include professional and amateur gamers, Fortune 500 companies, media, <br/> politicians and celebrities.
        </p>
      </div>
      </div>
       <button className="absolute bottom-0 right-0 mr-5 mb-5  "><a className="flex rounded-full bg-gray-700 from-neutral-500 text-xs w-12 h-12 border-1 pt-2 transition-transform duration-300 transform-gpu hover:scale-125 "   href="/">Need help?</a></button>
 </div>
 </section>
   <section className="absolute bg-white   w-full h-200 left-0 right-0">
    <div className="flex justify-center items-center text-center pt-14 bg-slate-300 h-44 w-full bg-[https://restream.io/landings-assets/img/facts-border-0a53ba273d037d823c8fe97780bed843.svg] bg-cover bg-center">
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
 {/* end  8 M+ */}
     <h1 className="text-black font-extrabold text-5xl px-28 mt-36 ">Our products</h1>
     <p className="text-black mt-8  px-28 text-1.5xl mb-10">At TransLive, we keep nurturing our product portfolio to empower content creators to
       reach wider<br/> audiences, and brands to spread their
       messages throughout a massive network of streamers.</p>
       <div>
        <div className=" px-20 flex justify-center  gap-8">
           <div className="bg-purple-700 text-white w-72 h-80 rounded-md flex flex-col justify-center items-start text-start px-4">
            <h1 className="font-bold font-serif mb-3 ">MultiStreaming</h1>
            <p><span>Reach</span>a wider audience by streaming to multiple platforms simultaneously</p>
           </div>
           <div className="bg-yellow-400 text-white w-72 h-80 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className="font-bold font-serif mb-3  ">Upload&Stream</h1>
          <p><span>Automate</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
         <div className="bg-blue-600 text-white w-72 h-80 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className="font-extrabold mb-3 text-black">Chat</h1>
          <p><span>Engage</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
         <div className="bg-orange-700 text-white w-72 h-80 rounded-md flex flex-col justify-center items-start text-start px-4">
          
          <h1 className=" font-extrabold mb-3 text-black ">Analytics</h1>
          <p><span>Measure</span>a wider audience by streaming to multiple platforms simultaneously</p>
         </div>
        </div>
        <div className="flex justify-center items-center  px-28">
        <img alt="Convert File to Audio" src="https://restream.io/landings-assets/img/how-it-started-img-85ad567c5ef4674a2d5da7f69adf9237.jpg" decoding="async" data-nimg="intrinsic"
              className="w-[30%] "/>
              <div>
        <h1 className="text-black font-extrabold text-5xl px-20 mt-36">How it started</h1>
        <p className="text-black mt-8  px-20 text-1.5xl mb-10">Andrew Surzhynskyi and Alexander Khuda founded Restream in 2015 with an obsession to help streamers get a wider audience.</p> 
        <p className="text-black mt-8  px-20 text-1.5xl mb-10" >Focusing first on the gaming community, and building initially a free product, they soon saw the potential of how Restream could help in all kind of circumstances – from every day IRL streaming to professional keynote broadcasting.</p>
        <p className="text-black mt-8  px-20 text-1.5xl mb-10">Over the next 5 years, Restream flourished into the robust ecosystem of tools it is today. Restream goes beyond streaming technology and into the complex infrastructure that continues to create millions of jobs for content creators worldwide.</p>
        </div>
        </div>
        <div className="bg-gray-200 h-100 flex justify-center items-center">
          <div className="pt-28">
          <h1 className="text-black font-extrabold text-5xl px-20">Join our team</h1>
         <p className="text-black font-extrabold text-xl px-20 mt-10"> We're looking for curious, data-driven, and result oriented<br/> teammates who want to make a lasting impact in the <br/>livestreaming ecosystem.</p>
          <button className="bg-[#286fff] tarnsition-background duration-200 ease-in rounded-md  font-extrabold font-serif text-xl px-5 py-3 mt-10 ml-20 mb-12">View Careers</button>
        </div>
        <div className="bg-white rounded-3xl w-100 h-70 flex justify-center  gap-5 px-10 py-20">
         <div className="text-black ">
          {/* <svg></svg> */}
          <h1 className="font-extrabold text-xl">Austin</h1>
          <span>
          Headquarters
          </span>
          <p>
          515 Congress Ave, Suite
            <br/>
            1050 Austin, TX 78701
          </p>
         </div>
         <div className="text-black">
          {/* <svg></svg> */}
          <h1 className="font-extrabold text-xl">Kyiv</h1>
          <span>
          Tech heart
          </span>
          <p>
          70, Volodymyrska Street
            <br/>
            Kyiv, Ukraine, 02000
          </p>
         </div>
        </div>
        </div>
        <div className="bg-black absolute">
        <Footer/>
        </div>
       
        </div>
        </section> 
       </div>
  
    

  );
}

 