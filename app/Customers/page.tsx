import { VideoPlayer } from "@/components/video-player";
import Footer from "@/components/Footer";
export default function CustomersPage() {
  return (
    <div  className="w-full h-full">
      <section className=" w-full  h-[100vh] max-w-1344 ">
    <div className=" flex  flex-col pt-2 ">
      <div className=" w-full ">
      <h1 className="text-4xl my-4 font-bold ">Over 8,000,000 streamers<br/> worldwide choose TransLive</h1>
      <p className="text-xl">Find out why gamers, opinion leaders, marketing managers, media companies,
       event streamers, and music creators are restreaming with us.</p>
      </div>
   <div className=" w-full h-80 mt-5   flex justify-center">
   <img  className=" absolute h-80" src="https://restream.io/landings-assets/img/hero-img-6a80ec945a5cce5fe3171af7afd2c72a.png"  alt="Restream customers collage"/>
   </div>
   <span>_______________________________________________________________________</span>
    </div>
    </section>
    <section className=" absolute left-0 h-100 w-full bg-white">
      <div>
      <ul className="  text-black flex space-x-4 justify-center text-xl gap-16 border border-b-1 border-gray-400 ">
      <li className=" text-blue-500 my-4" data-section="gaming"> <a>Gaming</a></li>
      <li className=" my-4" data-section="tech"><a>Tech</a></li>
      <li className="my-4" data-section="sports"><a>Sports</a></li>
      <li className="my-4" data-section="media"><a>Media</a></li>
      <li className="my-4" data-section="music"><a>Music</a></li>
      <li className="my-4" data-section="government"><a>Government</a></li>
      </ul>
      </div>
      <div className=" py-16 text-black font-Roboto font-normal text-5xl">
        <h1 className="pb-16">Gamers and gaming companies</h1>
      <div className="flex justify-center items-center">
        <div className="relative  py-10 px-10 bg-[#daf4ff] rounded-lg h-96 w-[620px] text-2xl flex flex-col items-start text-start ">
          <div >
            <img src="https://restream.io/landings-assets/img/quote-white-43a24681ce38b1eee86084fbdf3a06de.svg" alt="comma"/>
            </div>
            <div className="absolute inset-0 z-10 pt-20">
              <p className="pl-10">Broadcasting across 3 platforms brings<br/> us closer
                 to our audience and builds <br/>engagement, with maximum exposure<br/> and minimum effort.”</p>
            </div>
            <div className="relative mt-24 mb-16">
              <h1 className="font-bold">Chris Wilson,</h1>
              <p className="mb-2">Game Marketing Specialist</p>
              <img src="https://restream.io/landings-assets/img/futureplay-f1ca185801af68f04d871bb17e8aa0ac.svg" alt="img"/>
            </div>
        </div>
        <div className="absolute left-[60%] w-96 h-80 pt-32">
          <img src="https://restream.io/landings-assets/img/gamers-262d89ecb4483ae55d53e4bf76b617a4.png" alt="game"/>
        </div>
      </div>
      </div>
      {/* being providers */}
      {/* container */}
      <div className="w-full  flex justify-center items-center pt-10">
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center items-center">
      <div> <img src="https://restream.io/landings-assets/img/blizzard-b94323314f5c33f44de5707bd8dbc513.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/capcom-ff304253ef38ccece3f6b94709fc415f.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/ubisoft-a3d997edcfd861542302b4c8d4cffd72.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/sega-8ac3f2c754df2974bc9d306b0e57256f.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/wargaming-e09384a461daaaf727ce7d2a73009ea0.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/gameloft-87974fb6ae26b5b77f297e517ffb032d.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/bethesda-db655556b2393dba97751b96de0ea314.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/roblox-8971a8862878dc7311c18b28519808f2.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/humble-81d9543f60faf5bd8d762fe51dae3fb3.svg"/></div>
      <div> <img src="https://restream.io/landings-assets/img/origin-2336921e863bb852c6d9eb195a8e64e0.svg"/></div>
      </div>
      </div>
      {/*  */}
      <div className=" w-full h-screen pt-36 bg-white">
      <div className="text-black font-bold text-4xl">
        <h1>Tech innovators</h1>
        <div className="flex justify-center items-center">
        <div className="relative  py-10 px-10 bg-[#f6f3f6] rounded-xl h-96 w-[620px] text-2xl flex flex-col items-start text-start ">
        <div className="absolute left-[60%] w-96 h-80 pt-32">
          <img src="https://restream.io/landings-assets/img/brands-e323594fd7e20a16a53a19edb677908b.png" alt="game"/>
        </div>
          <div >
            <img src="https://restream.io/landings-assets/img/quote-yellow-c40ccadbb7398c8d82d723751cc2936a.svg" alt="comma"/>
            </div>
            <div className="absolute inset-0 z-10 pt-20">
              <p className="pl-10">Restream definitely simplifies our live<br/> stream process, but we value most the <br/>outreach that Restream assists with.”</p>
            </div>
            <div className="relative mt-24 mb-16">
              <h1 className="font-bold">Kyle Johnstone</h1>
              <p className="mb-2">Interactive Media Director</p>
              <img src="https://restream.io/landings-assets/img/zbrush-ee95f15ffbf575341c9dd5596b09663e.svg" alt="img"/>
            </div>
        </div>
      
      </div>
      </div>
      </div>
      <div className="bg-black absolute">
      <Footer/>

      </div>
    
    </section>

    </div>
  );
}
{/* <div className="mt-3">
        <VideoPlayer />
      </div> */}