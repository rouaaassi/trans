import Footer from "@/components/Footer";
export default function customersPage() {
  return (
    <div className="w-full h-full">
      <section className="w-full h-screen lg:h-screen max-w-3xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl my-4 font-Archivo font-normal text-center">
            Over 8,000,000 streamers worldwide choose TransLive
          </h1>
          <p className="text-xl sm:px-10 md:px-3 lg:px-3 text-center">
            Find out why gamers, opinion leaders, marketing managers, media
            companies, event streamers, and music creators are restreaming with
            us.
          </p>
          <div className="w-full h-80 mt-5 flex justify-center">
            <img
              alt="Restream customers collage"
              className="w-full h-[50vh] object-cover absolute px-10 pb-14"
              src="https://restream.io/landings-assets/img/hero-img-6a80ec945a5cce5fe3171af7afd2c72a.png"
            />
          </div>
          <hr className="w-full my-5" />
        </div>
      </section>
      <section className=" absolute left-0 h-100 w-full bg-white">
        <div>
          <ul className=" text-black flex space-x-4 justify-center text-xl gap-16 border border-b-1 border-gray-400 ">
            <li className=" text-blue-500 my-4" data-section="gaming">
              {" "}
              <a href="/">Gaming</a>
            </li>
            <li className=" my-4" data-section="tech">
              <a href="/">Tech</a>
            </li>
            <li className="my-4" data-section="sports">
              <a href="/">Sports</a>
            </li>
            <li className="my-4" data-section="media">
              <a href="/">Media</a>
            </li>
            <li className="my-4" data-section="music">
              <a href="/">Music</a>
            </li>
            <li className="my-4" data-section="government">
              <a href="/">Government</a>
            </li>
          </ul>
        </div>
        <div className=" py-10 text-black font-Roboto font-normal text-5xl">
          <h1 className="pb-16">Gamers and gaming companies</h1>
          <div className="flex justify-center items-center">
            <div className="relative  py-10 px-10 bg-[#daf4ff] rounded-lg h-96 w-[620px] text-2xl flex flex-col items-start text-start ">
              <div>
                <img
                  alt="comma"
                  src="https://restream.io/landings-assets/img/quote-white-43a24681ce38b1eee86084fbdf3a06de.svg"
                />
              </div>
              <div className="absolute inset-0 z-10 pt-20">
                <p className="pl-10">
                  Broadcasting across 3 platforms brings
                  <br /> us closer to our audience and builds <br />
                  engagement, with maximum exposure
                  <br /> and minimum effort.”
                </p>
              </div>
              <div className="relative mt-24 mb-16">
                <h1 className="font-bold">Chris Wilson,</h1>
                <p className="mb-2">Game Marketing Specialist</p>
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/futureplay-f1ca185801af68f04d871bb17e8aa0ac.svg"
                />
              </div>
            </div>
            <div className="absolute left-[40%] w-72 h-80  md:w-96 pt-64  md:pt-32 md:left-[60%] ">
              <img
                alt="game"
                src="https://restream.io/landings-assets/img/gamers-262d89ecb4483ae55d53e4bf76b617a4.png"
              />
            </div>
          </div>
        </div>
        {/* being providers */}
        {/* container */}
        <div className="w-full  flex justify-center items-center pt-24  md:pt-10 ">
          <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center">
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/blizzard-b94323314f5c33f44de5707bd8dbc513.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/capcom-ff304253ef38ccece3f6b94709fc415f.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/ubisoft-a3d997edcfd861542302b4c8d4cffd72.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/sega-8ac3f2c754df2974bc9d306b0e57256f.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/wargaming-e09384a461daaaf727ce7d2a73009ea0.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/gameloft-87974fb6ae26b5b77f297e517ffb032d.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/bethesda-db655556b2393dba97751b96de0ea314.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/roblox-8971a8862878dc7311c18b28519808f2.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/humble-81d9543f60faf5bd8d762fe51dae3fb3.svg"
              />
            </div>
            <div>
              {" "}
              <img
                alt="img"
                src="https://restream.io/landings-assets/img/origin-2336921e863bb852c6d9eb195a8e64e0.svg"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" w-full h-[800vh] md:h-[520vh] pt-36 bg-white">
          <div className="text-black font-bold text-4xl">
            <h1>Tech innovators</h1>
            <div className="lg:flex lg:justify-center lg:items-center lg:pl-36 grid grid-cols-1 ">
              <div className="  md:w-[500px] w-full h-3/4 md:h-[80vh] pt-32 ">
                <img
                  alt="game"
                  className="md:absolute md:w-[500px]"
                  src="https://restream.io/landings-assets/img/brands-e323594fd7e20a16a53a19edb677908b.png"
                />
              </div>
              <div className=" w-full md:w-[70%] md:ml-5 flex flex-col justify-center md:pt-24">
                <div className="  bg-[#f6f3f6] rounded-xl md:-96 w-full h-[100]   md:w-[70%] text-2xl flex flex-col items-start text-start pt-20 pl-5">
                  <div>
                    <img
                      alt="comma"
                      src="https://restream.io/landings-assets/img/quote-yellow-c40ccadbb7398c8d82d723751cc2936a.svg"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="pl-5 text-gray-600 dark:text-gray-300">
                      &quot;TransLive has transformed how we reach our
                      international audience. The real-time translation feature
                      is a game-changer.&quot;
                    </p>
                  </div>
                  <div className="pt-5 mb-3">
                    <h1 className="font-bold">Kyle Johnstone</h1>
                    <p className="mb-1">Interactive Media Director</p>
                    <img
                      alt="img"
                      src="https://restream.io/landings-assets/img/zbrush-ee95f15ffbf575341c9dd5596b09663e.svg"
                    />
                  </div>
                </div>
                {/* pro */}
                <div className="pt-3 pl-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 justify-center items-center">
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/microsoft-d98850c291c7d487ea327b1c14875a0a.svg"
                      />
                    </div>
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/callaway-cad7269651479e70d07e0cea4e1372ae.svg"
                      />
                    </div>
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/adafruit-46f0305d0d176b02f2f3a0da5bfa5aed.svg"
                      />
                    </div>
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/imb-1a731576b96ccda54af99e2ff263f5b6.svg"
                      />
                    </div>
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/cisco-44252d341e0d68c16d3519a127c4fe25.svg"
                      />
                    </div>
                    <div>
                      <img
                        alt="img"
                        src="https://restream.io/landings-assets/img/zwift-463e57a3bff555a56d781050a669c652.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-black font-bold text-4xl py-24">
              <h1>Sports and eSports</h1>
            </div>
            <div className=" flex space-x-[50%] items-center  lg:pl-[10%]  text-black ">
              <div className="relative w-full   md:w-[70%]">
                <div className=" py-10 px-20 bg-[#daf4ff]  rounded-[30%] lg:h-96  text-2xl flex flex-col items-start text-start md:h-full ">
                  <div>
                    <img
                      alt="comma"
                      src="https://restream.io/landings-assets/img/quote-white-43a24681ce38b1eee86084fbdf3a06de.svg"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 pt-20">
                    <p className="pl-20 pb-7 text-gray-600 dark:text-gray-300">
                      &quot;We&apos;ve seen a 40% increase in our global
                      viewership since implementing TransLive.&quot;
                    </p>
                  </div>
                  <div className="relative mt-2 mb-16 md:pt-40 lg:pt-20 pt-44">
                    <h1 className="font-bold">Nicolas Chapart,</h1>
                    <p className="mb-2">Head of Digitalt</p>
                    <img
                      alt="img"
                      src="https://restream.io/landings-assets/img/fiba-fa48134d89c563fe12b00ddc9c39c7f0.svg"
                    />
                  </div>
                </div>
                <div className=" flex justify-center pr-20 pt-20 pl-10">
                  <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center  ">
                    <img
                      alt="img"
                      className=" w-30  transition-transform "
                      src="https://restream.io/landings-assets/img/dreamhack-0105e8eb6f1adad99b2711cd21e3b0bc.svg"
                    />
                    <div className="flex justify-center">
                      <img
                        alt="img"
                        className=" w-30  transition-transform "
                        src="https://restream.io/landings-assets/img/usa-97eef5be7a0515387c42a4e72817510f.svg"
                      />
                    </div>
                    <img
                      alt="img"
                      className=" w-30  transition-transform"
                      src="https://restream.io/landings-assets/img/esports-935d7df7ec6e7199b997db14a2450218.svg"
                    />
                    <img
                      alt="img"
                      className=" w-30  transition-transform"
                      src="https://restream.io/landings-assets/img/u-52e8940f2f7970f81a93313c7675b502.svg"
                    />
                    <img
                      alt="img"
                      className=" w-30 transition-transform"
                      src="https://restream.io/landings-assets/img/pokerstars-b1358df81b9c207b229a63c616eb91c3.svg"
                    />
                    <div className="flex justify-center">
                      <img
                        alt="img"
                        className=" w-30  transition-transform"
                        src="https://restream.io/landings-assets/img/useq-1ab19f03c65904f184e8398ab8fd0f31.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute lg:w-[30%] md:w-[70%]  pt-60 ">
                <img
                  alt="game"
                  src="https://restream.io/landings-assets/img/sports-4ae46c05fb13a36d21e45e268523aeaa.png"
                />
              </div>
            </div>
          </div>
          <div className=" py-16 text-black font-Roboto font-normal text-5xl">
            <h1 className="pb-16">Media</h1>
            <div className="lg:flex lg:justify-center lg:items-center lg:pl-36 grid grid-cols-1 ">
              <div className="  md:w-[500px] w-full h-3/4 md:h-[80vh] pt-32 ">
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/media-12426641677a2506b9e07d0ce621b733.png"
                />
              </div>
              <div className="relative ">
                <div className=" py-10 px-10 bg-[#f6f3f6] rounded-lg h-96 md:w-[620px] w-full text-2xl flex flex-col items-start text-start ">
                  <div>
                    <img
                      alt="comma"
                      src="https://restream.io/landings-assets/img/quote-yellow-c40ccadbb7398c8d82d723751cc2936a.svg"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 pt-20">
                    <p className="pl-10 pb-20 text-gray-600 dark:text-gray-300">
                      &quot;The platform&apos;s ease of use and reliability have
                      made it an essential tool for our content strategy.&quot;
                    </p>
                  </div>
                  <div className="relative pt-36 mb-16">
                    <h1 className="font-bold">Eileen Marable,</h1>
                    <p className="mb-2">Senior Digital/Social Site Producer</p>
                    <img
                      alt="img"
                      src="https://restream.io/landings-assets/img/discovery-5d6f464e38d121ccaa7b58cfb13fd4c2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* being providers */}
          {/* container */}
          <div className="pt-3 pl-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center items-center">
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/independent-e8205e9ee5ebd8c59b551a994c9b5fda.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/teamcoco-3f17274cdad24e1c3ef1145230c3cfc5.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/ign-d5768e18422711c03ddb94b6c531f26a.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/met-ofice-42f6dc023cfadb41f8770c6ef8c9ebc1.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/digital-0922d17ef1d5a00885da691b6d8465ce.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/rooster-fbbf86bdbe699914b7eb3e87df0bda07.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/cn-ee8c1104f28d5c94bcdc849d76caf7bf.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/yahoo-640b2593f02b1a9d2ba5d7c89c1e3c3b.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/fbe-e8846cee61db3048b938f03e85950622.svg"
                />
              </div>
              <div>
                {" "}
                <img
                  alt="img"
                  src="https://restream.io/landings-assets/img/cbs-1a978ea171fd2cbf33c37c548b5012e7.svg"
                />
              </div>
            </div>
          </div>
          <div className=" py-16 text-black font-bold  text-5xl">
            <h1 className="pb-1">Government & politics</h1>
            <div className="lg:flex lg:justify-center lg:items-center lg:pl-36 grid grid-cols-1 ">
              <div className="  md:w-[500px] w-full h-3/4 md:h-[80vh] pt-32 ">
                <img
                  alt="game"
                  src="https://restream.io/landings-assets/img/government-64eecd188e7b5b23224ada72ca9fdd04.png"
                />
              </div>
              <div className="relative ">
                <div className=" py-10 px-10 bg-[#f6f3f6] rounded-lg h-96 w-[620px] text-2xl flex flex-col items-start text-start ">
                  <div>
                    <img
                      alt="comma"
                      src="https://restream.io/landings-assets/img/quote-yellow-c40ccadbb7398c8d82d723751cc2936a.svg"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 pt-20">
                    <p className="pl-10 pb-20 text-gray-600 dark:text-gray-300">
                      &quot;We have been using your service
                      <br />
                      for seven consecutive months for <br />
                      the Mexican President&apos;s
                      <br /> broadcasts, from Monday to Friday,
                      <br />
                      without any problem.&quot;
                    </p>
                  </div>
                  <div className="relative pt-44 mb-16">
                    <h1 className="font-bold">Celeste Lugo,</h1>
                    <p className="mb-2">
                      Deputy Director of Digital Communication
                    </p>
                    <img
                      alt="img"
                      src="https://restream.io/landings-assets/img/mexico-78cef983b774d37141608f2f6ac246d4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 pl-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center items-center">
                <div>
                  {" "}
                  <img
                    alt="img"
                    src="https://restream.io/landings-assets/img/bernie-e2b30e84cfeadc93a255834da94b96b7.svg"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    alt="img"
                    src="https://restream.io/landings-assets/img/lima-2906fe764eb44cccf2ddb96fcc102907.svg"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    alt="img"
                    src="https://restream.io/landings-assets/img/imamoglu-c79d08559bbc29d15d4fc23b7d7ebee8.svg"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    alt="img"
                    src="https://restream.io/landings-assets/img/jis-beab2c74878f0698a3f57937eb1b2978.svg"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    alt="img"
                    src="https://restream.io/landings-assets/img/casey-8ee6fb295bf142826434684753bcb2b2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black w-full">
          <Footer />
        </div>
      </section>
    </div>
  );
}
