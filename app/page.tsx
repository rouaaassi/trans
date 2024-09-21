"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { subtitle, title } from "@/components/primitives";
import { BACKEND_ROUTES } from "@/constants";
import { axiosInstance } from "@/tools/axios";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { TonConnectButton } from "@tonconnect/ui-react";
import Question from "@/components/Qeustion";
import Footer from "@/components/Footer";
export default function Home() {
  const router = useRouter();

  const [streamURL, setStreamURL] = useState("");
  // const [walletAddress, setWalletAddress] = useState(""); TODO: fix this
  const [walletAddress, setWalletAddress] = useState("walletAddress");
  const [tonconnect, setTonConnect] = useTonConnectUI();

  useEffect(() => {
    tonconnect.onStatusChange((wallet) => {
      if (wallet?.account) {
        setWalletAddress(wallet.account.address);
      }
    });
  });

  const onChangeStreamURLInput = (value: string) => {
    setStreamURL(value);
  };

  const postData = async () => {
    try {
      const response = await axiosInstance.post(BACKEND_ROUTES.streams, {
        streamUrl: streamURL,
        streamDuration: "10m",
        user: "walletAddress", // TODO: fix this
      });
      return response.data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Could not get data");
    }
  };

  const validateStreamURL = async (streamURL: string) => {
    try {
      const response = await axiosInstance.post(BACKEND_ROUTES.validateStream, {
        streamURL,
      });

      return response.data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Could not get data");
    }
  };

  const onClickButton = async () => {
    if (streamURL) {
      const validStreamURL = await validateStreamURL(streamURL);

      if (!validStreamURL) {
        throw new Error("Invalid Stream URL");
      }

      const hash = await postData();

      router.push(`/streams?hash=${hash}`);
    }
  };

  return (
   
    <section className=" bg-cover bg-center h-screen " style={{backgroundImage:`url()`}}>
      <div className="flex flex-col items-center justify-center gap-8 ">
      <div className="inline-block max-w-lg text-center justify-center pt-8">
     
        <h1 className={title()}>Translate&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>any live streams&nbsp;</h1>
        <br />
        <h1 className={title()}>into your language.</h1>
        <h2 className={subtitle({ class: "mt-20" })}>
          Real-Time, Reliable, Robust.
        </h2>
      </div>
      <div className="flex flex-col gap-4 w-full  h-[300px]  items-center justify-center ">
        <div className="relative mt-6 mb-4 bg-gray-800/[0.5] w-full lg:w-[740px] border-dashed  rounded-xl
         py-16 px-14 border border-transparent">
        <span className="block text-center text-2xl font-semibold pb-2 text-gray-500">Upload Your Video</span>
        <span className="block mx-auto text-sm text-center w-full lg:w-[65%] leading-6 text-gray-600">Click Choose Video button to get started or drag and drop Videos to upload </span>
        <div className="block text-center text-2xl font-semibold pb-2 text-gray-500 py-4">
        <Link 
          isDisabled={!walletAddress}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onPress={onClickButton}
        >
          choose Video
        </Link>
       
      </div>
        </div>
        <div className="   lg:max-w-[65%] pt-5 block text-center mx-auto text-gray-600 text-[11px] leading-6  mb-32">
         <span>  "By Uploading your video ,your are agreeing to the TransLive ,Inc . </span>
          <a href="/" target="_blank" rel="noreferrer" className="text-blue-500 ">Terms of Service</a>
           <span className="inline-block mx-1  ">and </span>
          <a href="/" target="_blank" rel="noreferrer" className="text-blue-500 ">Privacy Policy</a>
        </div>
        </div>
      </div>
      <div>
      <div className=" mx-w-7xl w-full mx-4 px-6 lg:px-8 lg:mx-auto pt-4 mb-1 border-t-1  border-gradient-to-r from-orange-400 via-white">
         <h2 className="font-bold text-3xl mt-12 ">Video-to-text conventer-Online,free</h2>

        </div>
        <div className="relative mx-w-7xl mx-4 px-6 lg:px-8 lg:mx-auto ">
         
          <div className=" relative mx-w-7xl mx-4 px-6 lg:px-8 lg:mx-auto pt-8">
       <p className="block mb-4 text-gray-500 text-lg ">
       Convert your video to text in any of our 15 supported languages: Dutch, English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Mandarin, Portuguese, Spanish, Swedish, Turkish and Ukrainian.

          You can get a free, accurate video transcription in minutes — without having to download any software or create an account. Since our video-to-text converter is powered by AI, you can be sure you’re getting accurate results. Use our free video transcription tool for a wide range of uses from social media videos to podcasts.
          Convert your video to text in any of our 15 supported languages: Dutch, English, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Mandarin, Portuguese, Spanish, Swedish, Turkish and Ukrainian.
      
          You can get a free, accurate video transcription in minutes — without having to download any software or create an account. Since our video-to-text converter is powered by AI, you can be sure you’re getting accurate results. Use our free video transcription tool for a wide range of uses from social media videos to podcasts.
       </p>
       </div>
       </div>
       </div>
       <div className="flex items-center justify-center  pt-24">
        <div>
        <h2 className="font-bold text-3xl mt-12 ">Secure and easy to use </h2>
        <p className="block mb-4 text-gray-500 text-lg mt-10">You don't have to download any software to use our AI video transcription tool. You also don’t need to create an account,
           and we don't show ads. After you're done transcribing your video,
            we'll delete your data from our servers.</p></div>
            <img alt="Convert File to Audio" src="https://public-frontend.restream.io/_next/static/media/secure-transcription-software.504666c7.png" decoding="async" data-nimg="intrinsic"
              className="w-[40%] "/>
       </div>
       <div className="flex items-center justify-center  pt-24">
       <img alt="Convert File to Audio" src="https://public-frontend.restream.io/_next/static/media/multiple-uses-for-your-transcript.1ffc154e.png" decoding="async" data-nimg="intrinsic"
              className="w-[40%] "/>
        <div>
        <h2 className="font-bold text-3xl mt-12 ">Multiple uses for your transcript </h2>
        <p className="block mb-4 text-gray-500 text-lg mt-10">You can use your video transcription anywhere, whether you're preparing a presentation for your boss, a lesson for your class,
           or a video for social media. Our AI transcription tool
           provides you with accurate text and easily lets you add subtitles — no matter what you're using it for.</p></div>
       </div>
      <div className="flex items-center justify-center  pt-24">
        <div>
        <h2 className="font-bold text-3xl mt-12 ">Record a new video using Restream Studio</h2>
        <p className="block mb-4 text-gray-500 text-lg mt-10">Use<a href="">Restream Studio's record-only mode</a>to record a new video. You can take advantage of features like 
        custom captions, backgrounds and logos, as well as add remote guests and change screen layouts. When you're done recording,
         download your video, 
        then use our AI video-to-text converter to get the transcription and add subtitles.</p></div>
            <img alt="Convert File to Audio" src="https://public-frontend.restream.io/_next/static/media/record-new-video-audio-restream-studio.d3a2dae1.png" decoding="async" data-nimg="intrinsic"
              className="w-[40%] "/>
       </div>
       <div className=" mx-w-7xl w-full mx-4 px-6 lg:px-8 lg:mx-auto pt-4 mb-1 border-t-1  border-gradient-to-r from-orange-400 via-white">
       <h2 className="font-bold text-3xl mt-12 font-w-10">Frequently Asked Questions</h2>
       <Question/>
       </div>
       <div className="container mx-auto mt-12 mb-20">
       <div className=" mx-w-7xl w-full mx-4 px-6 lg:px-8 lg:mx-auto pt-4 mb-1 border-t-1  border-gradient-to-r from-orange-400 via-white">
        <h3>Discover</h3>
       <h1 className=" text-orange-500 px-10 py-10 font-bold text-3xl font-w-10">More nifty tools from Restream</h1> </div>
      <div className="flex flex-wrap justify-center items-center box-border gap-6">
        
      <a href="/tools/webcam-test" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10">
      <span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5556 9H24.4444C26.087 8.99999 27.3809 8.99999 28.4222 9.08507C29.4846 9.17186 30.3717 9.35217 31.1779 9.76295C32.4951 10.4341 33.5659 11.5049 34.237 12.8221C34.6478 13.6283 34.8281 14.5154 34.9149 15.5778C35 16.6191 35 17.913 35 19.5556V21.5858L40.5939 15.9919C40.9946 15.5912 41.3421 15.2437 41.6365 14.9971C41.9135 14.7652 42.3225 14.4614 42.8431 14.4204C43.4813 14.3701 44.105 14.6285 44.5208 15.1153C44.86 15.5124 44.9343 16.0164 44.9661 16.3763C45 16.7589 45 17.2503 45 17.8171V30.1829C45 30.7497 45 31.2411 44.9661 31.6237C44.9343 31.9836 44.86 32.4876 44.5208 32.8847C44.105 33.3715 43.4813 33.6299 42.8431 33.5796C42.3225 33.5387 41.9135 33.2348 41.6365 33.0029C41.342 32.7563 40.9945 32.4087 40.5937 32.0079L35 26.4142V28.4444C35 30.087 35 31.3809 34.9149 32.4222C34.8281 33.4846 34.6478 34.3717 34.237 35.1779C33.5659 36.4951 32.4951 37.5659 31.1779 38.237C30.3717 38.6478 29.4846 38.8281 28.4222 38.9149C27.3809 39 26.087 39 24.4444 39H13.5556C11.913 39 10.6191 39 9.57778 38.9149C8.51543 38.8281 7.62827 38.6478 6.82207 38.237C5.50493 37.5659 4.43407 36.4951 3.76295 35.1779C3.35217 34.3717 3.17186 33.4846 3.08507 32.4222C2.99999 31.3809 2.99999 30.087 3 28.4444V19.5556C2.99999 17.913 2.99999 16.6191 3.08507 15.5778C3.17186 14.5154 3.35217 13.6283 3.76295 12.8221C4.43407 11.5049 5.50493 10.4341 6.82207 9.76295C7.62827 9.35217 8.51543 9.17186 9.57778 9.08507C10.6191 8.99999 11.913 8.99999 13.5556 9ZM33 19.6C33 17.9033 32.9992 16.691 32.9216 15.7406C32.8449 14.802 32.6982 14.2073 32.455 13.73C31.9757 12.7892 31.2108 12.0243 30.27 11.545C29.7927 11.3018 29.198 11.1551 28.2594 11.0784C27.309 11.0008 26.0967 11 24.4 11H13.6C11.9033 11 10.691 11.0008 9.74064 11.0784C8.80197 11.1551 8.20732 11.3018 7.73005 11.545C6.78924 12.0243 6.02433 12.7892 5.54497 13.73C5.30179 14.2073 5.15512 14.802 5.07842 15.7406C5.00078 16.691 5 17.9033 5 19.6V28.4C5 30.0967 5.00078 31.309 5.07842 32.2594C5.15512 33.198 5.30179 33.7927 5.54497 34.27C6.02433 35.2108 6.78924 35.9757 7.73005 36.455C8.20732 36.6982 8.80197 36.8449 9.74064 36.9216C10.691 36.9992 11.9033 37 13.6 37H24.4C26.0967 37 27.309 36.9992 28.2594 36.9216C29.198 36.8449 29.7927 36.6982 30.27 36.455C31.2108 35.9757 31.9757 35.2108 32.455 34.27C32.6982 33.7927 32.8449 33.198 32.9216 32.2594C32.9992 31.309 33 30.0967 33 28.4V19.6ZM35.4142 24L41.9757 30.5615C42.4181 31.0039 42.7024 31.2868 42.9204 31.4693C42.9374 31.4836 42.9533 31.4965 42.9679 31.5082C42.9699 31.4896 42.972 31.4693 42.974 31.4471C42.999 31.164 43 30.7629 43 30.1373V17.8627C43 17.2371 42.999 16.836 42.974 16.5529C42.972 16.5307 42.9699 16.5104 42.9679 16.4918C42.9533 16.5035 42.9374 16.5164 42.9204 16.5307C42.7024 16.7132 42.4181 16.9961 41.9757 17.4385L35.4142 24Z" fill="currentColor"></path></svg></span><span class="block text-center mt-5"><span class="block text-lg text-gray-300">Camera Test</span><span class="block text-sm text-gray-400">Test your webcam</span></span></a><a href="/tools/audio-converter" class="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span class="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto w-12 h-12 text-gray-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 5.81345C17.9122 3.26606 23.1 2.40955 28.0969 3.4035C33.0938 4.39744 37.5589 7.17404 40.6604 11.216C43.7619 15.258 45.2883 20.2896 44.955 25.3735C44.6619 29.8461 42.947 34.0908 40.0858 37.5H41.5C42.0523 37.5 42.5 37.9477 42.5 38.5C42.5 39.0523 42.0523 39.5 41.5 39.5H37.5C36.9477 39.5 36.5 39.0523 36.5 38.5V34.5C36.5 33.9477 36.9477 33.5 37.5 33.5C38.0523 33.5 38.5 33.9477 38.5 34.5V36.2781C41.1211 33.1828 42.6923 29.3173 42.9593 25.2426C43.2608 20.643 41.8798 16.0905 39.0737 12.4335C36.2676 8.77651 32.2277 6.26435 27.7067 5.36507C23.1857 4.46579 18.492 5.24072 14.5 7.5455C14.0217 7.82164 13.4101 7.65777 13.134 7.17948C12.8578 6.70118 13.0217 6.08959 13.5 5.81345ZM28.5 14C29.0523 14 29.5 14.4477 29.5 15V33C29.5 33.5523 29.0523 34 28.5 34C27.9477 34 27.5 33.5523 27.5 33V15C27.5 14.4477 27.9477 14 28.5 14ZM24 17C24.5523 17 25 17.4477 25 18V30C25 30.5523 24.5523 31 24 31C23.4477 31 23 30.5523 23 30V18C23 17.4477 23.4477 17 24 17ZM15 21C15.5523 21 16 21.4477 16 22V26C16 26.5523 15.5523 27 15 27C14.4477 27 14 26.5523 14 26V22C14 21.4477 14.4477 21 15 21ZM33 21C33.5523 21 34 21.4477 34 22V26C34 26.5523 33.5523 27 33 27C32.4477 27 32 26.5523 32 26V22C32 21.4477 32.4477 21 33 21ZM19.5 22C20.0523 22 20.5 22.4477 20.5 23V25C20.5 25.5523 20.0523 26 19.5 26C18.9477 26 18.5 25.5523 18.5 25V23C18.5 22.4477 18.9477 22 19.5 22ZM6.5 8.5L10.5 8.5C11.0523 8.5 11.5 8.94772 11.5 9.5V13.5C11.5 14.0523 11.0523 14.5 10.5 14.5C9.94772 14.5 9.5 14.0523 9.5 13.5L9.5 11.7219C6.87895 14.8171 5.30774 18.6827 5.04068 22.7573C4.7392 27.357 6.12016 31.9094 8.92628 35.5665C11.7324 39.2235 15.7723 41.7356 20.2933 42.6349C24.8143 43.5342 29.508 42.7592 33.5 40.4545C33.9783 40.1783 34.5899 40.3422 34.866 40.8205C35.1422 41.2988 34.9783 41.9104 34.5 42.1865C30.0878 44.7339 24.9 45.5904 19.9031 44.5965C14.9062 43.6025 10.4411 40.8259 7.33958 36.784C4.23807 32.742 2.71174 27.7104 3.04496 22.6265C3.33811 18.1539 5.05297 13.9091 7.91423 10.5H6.5C5.94772 10.5 5.5 10.0523 5.5 9.5C5.5 8.94772 5.94772 8.5 6.5 8.5Z" fill="currentColor"></path></svg></span>
      <span className="block text-center mt-5">
        <span className="block text-lg text-gray-300">Audio Converter</span>
      <span className="block text-sm text-gray-400">Convert to MP3 and WAV</span></span></a>
      <a href="/tools/video-converter" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10">
      <span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 5.81345C17.9122 3.26606 23.1 2.40955 28.0969 3.4035C33.0938 4.39744 37.5589 7.17404 40.6604 11.216C43.7619 15.258 45.2883 20.2896 44.955 25.3735C44.6619 29.8461 42.947 34.0908 40.0858 37.5H41.5C42.0523 37.5 42.5 37.9477 42.5 38.5C42.5 39.0523 42.0523 39.5 41.5 39.5H37.5C36.9477 39.5 36.5 39.0523 36.5 38.5V34.5C36.5 33.9477 36.9477 33.5 37.5 33.5C38.0523 33.5 38.5 33.9477 38.5 34.5V36.2781C41.1211 33.1828 42.6923 29.3173 42.9593 25.2426C43.2608 20.643 41.8798 16.0905 39.0737 12.4335C36.2676 8.77651 32.2277 6.26435 27.7067 5.36507C23.1857 4.46579 18.492 5.24072 14.5 7.5455C14.0217 7.82164 13.4101 7.65777 13.134 7.17948C12.8578 6.70118 13.0217 6.08959 13.5 5.81345ZM10.5 8.5L6.5 8.5C5.94772 8.5 5.5 8.94772 5.5 9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H7.91423C5.05297 13.9091 3.33811 18.1539 3.04496 22.6265C2.71174 27.7104 4.23807 32.742 7.33958 36.784C10.4411 40.8259 14.9062 43.6025 19.9031 44.5965C24.9 45.5904 30.0878 44.7339 34.5 42.1865C34.9783 41.9104 35.1422 41.2988 34.866 40.8205C34.5899 40.3422 33.9783 40.1783 33.5 40.4545C29.508 42.7592 24.8143 43.5342 20.2933 42.6349C15.7723 41.7356 11.7324 39.2235 8.92628 35.5665C6.12016 31.9094 4.7392 27.357 5.04068 22.7573C5.30774 18.6827 6.87895 14.8171 9.5 11.7219L9.5 13.5C9.5 14.0523 9.94772 14.5 10.5 14.5C11.0523 14.5 11.5 14.0523 11.5 13.5V9.5C11.5 8.94772 11.0523 8.5 10.5 8.5ZM15 16.18C15 15.5283 15.5283 15 16.18 15H18V18H15V16.18ZM13 16.18C13 14.4237 14.4237 13 16.18 13H31.82C33.5763 13 35 14.4237 35 16.18V31.82C35 33.5763 33.5763 35 31.82 35H16.18C14.4237 35 13 33.5763 13 31.82V16.18ZM20 23V15H28V23H20ZM30 18V15H31.82C32.4717 15 33 15.5283 33 16.18V18H30ZM30 20H33V23H30V20ZM30 25H33V28H30V25ZM30 30H33V31.82C33 32.4717 32.4717 33 31.82 33H30V30ZM28 25V33H20V25H28ZM18 30V33H16.18C15.5283 33 15 32.4717 15 31.82V30H18ZM18 28H15V25H18V28ZM18 23H15V20H18V23Z" fill="currentColor"></path></svg></span>
      <span className="block text-center mt-5"><span className="block text-lg text-gray-300">Video Converter</span>
      <span className="block text-sm text-gray-400">Convert to MP4 and WEBM</span></span></a>
      <a href="/tools/mic-test" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10">
      <span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 6.13401 20.134 3 24 3C27.866 3 31 6.13401 31 10V24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24V10ZM24 5C21.2386 5 19 7.23858 19 10V24C19 26.7614 21.2386 29 24 29C26.7614 29 29 26.7614 29 24V10C29 7.23858 26.7614 5 24 5ZM10 19C10.5523 19 11 19.4477 11 20V24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24V20C37 19.4477 37.4477 19 38 19C38.5523 19 39 19.4477 39 20V24C39 31.9482 32.818 38.4526 25 38.9672V43H32C32.5523 43 33 43.4477 33 44C33 44.5523 32.5523 45 32 45H16C15.4477 45 15 44.5523 15 44C15 43.4477 15.4477 43 16 43H23V38.9672C15.182 38.4526 9 31.9482 9 24V20C9 19.4477 9.44772 19 10 19Z" fill="currentColor"></path></svg></span>
      <span className="block text-center mt-5">
        <span className="block text-lg text-gray-300">Mic Test</span><span className="block text-sm text-gray-400">Test your microphone</span></span></a>
      <a href="/tools/audio-extractor" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.4444 3H17.5556H17.5556C15.913 2.99999 14.6191 2.99999 13.5778 3.08507C12.5154 3.17186 11.6283 3.35217 10.8221 3.76295C9.50493 4.43407 8.43407 5.50493 7.76295 6.82207C7.35217 7.62827 7.17186 8.51543 7.08507 9.57778C6.99999 10.6191 6.99999 11.913 7 13.5556V13.5556V34.4444V34.4444C6.99999 36.087 6.99999 37.3809 7.08507 38.4222C7.17186 39.4846 7.35217 40.3717 7.76295 41.1779C8.43407 42.4951 9.50493 43.5659 10.8221 44.237C11.6283 44.6478 12.5154 44.8281 13.5777 44.9149C14.619 45 15.9128 45 17.5553 45H25C25.5523 45 26 44.5523 26 44C26 43.4477 25.5523 43 25 43H17.5997C15.9032 43 14.6909 42.9992 13.7406 42.9216C12.802 42.8449 12.2073 42.6982 11.73 42.455C10.7892 41.9757 10.0243 41.2108 9.54497 40.27C9.30179 39.7927 9.15512 39.198 9.07842 38.2594C9.00078 37.309 9 36.0967 9 34.4V13.6C9 11.9033 9.00078 10.691 9.07842 9.74064C9.15512 8.80197 9.30179 8.20732 9.54497 7.73005C10.0243 6.78924 10.7892 6.02433 11.73 5.54497C12.2073 5.30179 12.802 5.15512 13.7406 5.07842C14.691 5.00078 15.9033 5 17.6 5H30.4C32.0967 5 33.309 5.00078 34.2594 5.07842C35.198 5.15512 35.7927 5.30179 36.27 5.54497C37.2108 6.02433 37.9757 6.78924 38.455 7.73005C38.6982 8.20732 38.8449 8.80197 38.9216 9.74064C38.9992 10.691 39 11.9033 39 13.6V25C39 25.5523 39.4477 26 40 26C40.5523 26 41 25.5523 41 25V13.5556C41 11.913 41 10.6191 40.9149 9.57778C40.8281 8.51543 40.6478 7.62827 40.237 6.82207C39.5659 5.50493 38.4951 4.43407 37.1779 3.76295C36.3717 3.35217 35.4846 3.17186 34.4222 3.08507C33.3809 2.99999 32.087 2.99999 30.4444 3H30.4444ZM37 32C37 31.4477 36.5523 31 36 31C35.4477 31 35 31.4477 35 32V41.5858L30.7071 37.2929C30.3166 36.9024 29.6834 36.9024 29.2929 37.2929C28.9024 37.6834 28.9024 38.3166 29.2929 38.7071L35.2929 44.7071C35.6834 45.0976 36.3166 45.0976 36.7071 44.7071L42.7071 38.7071C43.0976 38.3166 43.0976 37.6834 42.7071 37.2929C42.3166 36.9024 41.6834 36.9024 41.2929 37.2929L37 41.5858V32ZM31.3014 12.2969C31.6394 12.2406 31.8297 12.2098 31.968 12.1988L31.9855 12.1976L31.9872 12.2151C31.9991 12.3532 32 12.5461 32 12.8888V20.5351C31.4117 20.1948 30.7286 20 30 20C27.7909 20 26 21.7909 26 24C26 26.2092 27.7909 28 30 28C32.2091 28 34 26.2092 34 24L34 12.8534C34 12.5591 34.0001 12.2777 33.9797 12.0425C33.9577 11.7887 33.9056 11.4831 33.7349 11.1854C33.5022 10.7797 33.1347 10.4685 32.6964 10.3056C32.3747 10.1861 32.0646 10.185 31.8106 10.205C31.5753 10.2236 31.2977 10.2699 31.0074 10.3183L22.1445 11.7955C21.9313 11.831 21.7204 11.8661 21.542 11.9099C21.3436 11.9586 21.1159 12.0332 20.8925 12.1818C20.5783 12.3907 20.3296 12.6843 20.1752 13.0285C20.0654 13.2733 20.0292 13.5101 20.0138 13.7139C19.9999 13.897 20 14.1109 20 14.327V14.327L20 14.3554V22.5351C19.4117 22.1948 18.7286 22 18 22C15.7909 22 14 23.7909 14 26C14 28.2092 15.7909 30 18 30C20.2091 30 22 28.2092 22 26V14.3554C22 14.0996 22.0007 13.9631 22.0081 13.8647L22.0089 13.8547L22.0186 13.8523C22.1145 13.8287 22.249 13.8056 22.5014 13.7636L31.3014 12.2969ZM30 22C31.1046 22 32 22.8955 32 24C32 25.1046 31.1046 26 30 26C28.8954 26 28 25.1046 28 24C28 22.8955 28.8954 22 30 22ZM18 24C19.1046 24 20 24.8955 20 26C20 27.1046 19.1046 28 18 28C16.8954 28 16 27.1046 16 26C16 24.8955 16.8954 24 18 24Z" fill="#9CA3AF"></path></svg></span><span className="block text-center mt-5">
      <span className="block text-lg text-gray-300">Audio Extractor</span><span className="block text-sm text-gray-400">Separate audio from your video</span></span></a>
      <a href="/tools/remove-audio-from-video" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10">
      <span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4332 9.09871C22.7797 9.26523 23 9.6156 23 10V38C23 38.3844 22.7797 38.7348 22.4332 38.9013C22.0867 39.0678 21.6755 39.021 21.3753 38.7809L11.6492 31H4C3.44772 31 3 30.5523 3 30V18C3 17.4477 3.44772 17 4 17H11.6492L21.3753 9.21914C21.6755 8.979 22.0867 8.93219 22.4332 9.09871ZM21 12.0806L12.6247 18.7809C12.4474 18.9227 12.2271 19 12 19H5V29H12C12.2271 29 12.4474 29.0773 12.6247 29.2191L21 35.9194V12.0806ZM33.2929 17.2929C33.6834 16.9024 34.3166 16.9024 34.7071 17.2929L40 22.5858L45.2929 17.2929C45.6834 16.9024 46.3166 16.9024 46.7071 17.2929C47.0976 17.6834 47.0976 18.3166 46.7071 18.7071L41.4142 24L46.7071 29.2929C47.0976 29.6834 47.0976 30.3166 46.7071 30.7071C46.3166 31.0976 45.6834 31.0976 45.2929 30.7071L40 25.4142L34.7071 30.7071C34.3166 31.0976 33.6834 31.0976 33.2929 30.7071C32.9024 30.3166 32.9024 29.6834 33.2929 29.2929L38.5858 24L33.2929 18.7071C32.9024 18.3166 32.9024 17.6834 33.2929 17.2929Z" fill="currentColor"></path></svg></span>
      <span className="block text-center mt-5"><span className="block text-lg text-gray-300">Audio Remover</span>
      <span className="block text-sm text-gray-400">Mute your video</span></span></a>
      <a href="/tools/transcribe-audio-to-text" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4645 4.46447C13.4021 3.52678 14.6739 3 16 3H32C32.2652 3 32.5196 3.10536 32.7071 3.29289L44.7071 15.2929C44.8946 15.4804 45 15.7348 45 16V40C45 41.3261 44.4732 42.5979 43.5355 43.5355C42.5979 44.4732 41.3261 45 40 45H16C14.6739 45 13.4021 44.4732 12.4645 43.5355C11.7571 42.8282 11.2836 41.9307 11.0936 40.9632C5.44249 40.5023 1 35.77 1 30C1 24.262 5.3935 19.5501 11 19.0448V8C11 6.67392 11.5268 5.40215 12.4645 4.46447ZM13 19.0448C16.8473 19.3915 20.1234 21.7192 21.8006 25H36C36.5523 25 37 25.4477 37 26C37 26.5523 36.5523 27 36 27H22.5859C22.8557 27.9537 23 28.96 23 30C23 31.04 22.8557 32.0463 22.5859 33H36C36.5523 33 37 33.4477 37 34C37 34.5523 36.5523 35 36 35H21.8006C20.1455 38.2377 16.9331 40.5472 13.1512 40.9405C13.2968 41.3814 13.5442 41.7868 13.8787 42.1213C14.4413 42.6839 15.2044 43 16 43H40C40.7956 43 41.5587 42.6839 42.1213 42.1213C42.6839 41.5587 43 40.7957 43 40V17H32C31.4477 17 31 16.5523 31 16V5H16C15.2044 5 14.4413 5.31607 13.8787 5.87868C13.3161 6.44129 13 7.20435 13 8V19.0448ZM33 6.41421L41.5858 15H33V6.41421ZM19 18C19 17.4477 19.4477 17 20 17H24C24.5523 17 25 17.4477 25 18C25 18.5523 24.5523 19 24 19H20C19.4477 19 19 18.5523 19 18ZM3 30C3 25.0294 7.02944 21 12 21C16.9706 21 21 25.0294 21 30C21 34.9706 16.9706 39 12 39C7.02944 39 3 34.9706 3 30ZM15 25C15 24.4477 14.5523 24 14 24C13.4477 24 13 24.4477 13 25V35C13 35.5523 13.4477 36 14 36C14.5523 36 15 35.5523 15 35V25ZM11 27C11 26.4477 10.5523 26 10 26C9.44772 26 9 26.4477 9 27V33C9 33.5523 9.44772 34 10 34C10.5523 34 11 33.5523 11 33V27ZM7 29C7 28.4477 6.55228 28 6 28C5.44772 28 5 28.4477 5 29V31C5 31.5523 5.44772 32 6 32C6.55228 32 7 31.5523 7 31V29ZM19 29C19 28.4477 18.5523 28 18 28C17.4477 28 17 28.4477 17 29V31C17 31.5523 17.4477 32 18 32C18.5523 32 19 31.5523 19 31V29Z" fill="currentColor"></path></svg></span><span className="block text-center mt-5"><span className="block text-lg text-gray-300">Audio Transcription</span><span className="block text-sm text-gray-400">Transcribe audio to text</span></span></a><a href="/tools/transcribe-podcast" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span className="block"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4645 4.46447C13.4021 3.52678 14.6739 3 16 3H32C32.2652 3 32.5196 3.10536 32.7071 3.29289L44.7071 15.2929C44.8946 15.4804 45 15.7348 45 16V40C45 41.3261 44.4732 42.5979 43.5355 43.5355C42.5979 44.4732 41.3261 45 40 45H16C14.6739 45 13.4021 44.4732 12.4645 43.5355C11.7306 42.8017 11.2484 41.8632 11.0735 40.8542C9.87007 40.4638 9 39.3335 9 38V36C9 34.3431 10.3431 33 12 33C13.6569 33 15 34.3431 15 36V38C15 39.2663 14.2154 40.3494 13.1058 40.7896C13.242 41.2889 13.5064 41.749 13.8787 42.1213C14.4413 42.6839 15.2044 43 16 43H40C40.7956 43 41.5587 42.6839 42.1213 42.1213C42.6839 41.5587 43 40.7957 43 40V17H32C31.4477 17 31 16.5523 31 16V5H16C15.2044 5 14.4413 5.31607 13.8787 5.87868C13.3161 6.44129 13 7.20435 13 8V19.0484C16.7066 19.4094 19.8334 21.7551 21.2253 25H36C36.5523 25 37 25.4477 37 26C37 26.5523 36.5523 27 36 27H21.8344C21.9431 27.5784 22 28.1749 22 28.785C22 30.2971 21.6487 31.7258 21.0237 33H36C36.5523 33 37 33.4477 37 34C37 34.5523 36.5523 35 36 35H20C19.9113 35 19.8252 34.9884 19.7433 34.9668C19.1477 35.6781 18.4523 36.3054 17.6791 36.8283C17.2216 37.1377 16.5999 37.0177 16.2905 36.5602C15.9811 36.1027 16.1012 35.4811 16.5586 35.1717C18.6458 33.7601 20 31.4239 20 28.785C20 24.5082 16.4411 21 12 21C7.55893 21 4 24.5082 4 28.785C4 31.4239 5.3542 33.7601 7.44135 35.1717C7.89883 35.4811 8.01887 36.1027 7.70947 36.5602C7.40006 37.0177 6.77838 37.1377 6.3209 36.8283C3.72122 35.0701 2 32.1319 2 28.785C2 23.6912 5.96506 19.5387 11 19.0484V8C11 6.67392 11.5268 5.40215 12.4645 4.46447ZM33 6.41421L41.5858 15H33V6.41421ZM19 18C19 17.4477 19.4477 17 20 17H24C24.5523 17 25 17.4477 25 18C25 18.5523 24.5523 19 24 19H20C19.4477 19 19 18.5523 19 18ZM8 28.7505C8 26.727 9.74225 25 12 25C14.2578 25 16 26.727 16 28.7505C16 29.7259 15.5999 30.619 14.9294 31.2967C14.541 31.6893 14.5444 32.3225 14.937 32.7109C15.3296 33.0993 15.9628 33.0959 16.3512 32.7033C17.3626 31.681 18 30.2931 18 28.7505C18 25.5272 15.2646 23 12 23C8.73536 23 6 25.5272 6 28.7505C6 30.2922 6.63731 31.6809 7.64878 32.7033C8.03721 33.0959 8.67036 33.0993 9.06297 32.7109C9.45558 32.3225 9.45898 31.6893 9.07055 31.2967C8.40019 30.6191 8 29.7251 8 28.7505ZM12 27C10.8954 27 10 27.8954 10 29C10 30.1046 10.8954 31 12 31C13.1046 31 14 30.1046 14 29C14 27.8954 13.1046 27 12 27ZM11 36C11 35.4477 11.4477 35 12 35C12.5523 35 13 35.4477 13 36V38C13 38.5523 12.5523 39 12 39C11.4477 39 11 38.5523 11 38V36Z" fill="currentColor"></path></svg></span><span className="block text-center mt-5"><span className="block text-lg text-gray-300">Podcast Transcription</span><span className="block text-sm text-gray-400">Transcribe podcast to text</span></span></a><a href="/tools/ai-tiktok-script-generator" className="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span className="block"><svg width="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto w-12 h-12 text-gray-400"><g filter="url(#filter0_d_1079_283)"><path d="M17 23V24C17 25.6569 15.6569 27 14 27H8C6.34315 27 5 25.6569 5 24V14C5 12.3431 6.34315 11 8 11H9" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 25C24.1046 25 25 24.1046 25 23C25 24.1046 25.8954 25 27 25C25.8954 25 25 25.8954 25 27C25 25.8954 24.1046 25 23 25Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.4004 9.48922L22.1956 9.80331C22.3442 9.90028 22.5405 9.87973 22.6659 9.75407L22.4004 9.48922ZM21.2274 7.73503L20.8586 7.80318L20.8586 7.80328L21.2274 7.73503ZM22.4008 9.48882L22.6058 9.17478C22.4571 9.07774 22.2607 9.09827 22.1354 9.22397L22.4008 9.48882ZM23.8576 9.92225H24.2326C24.2326 9.71514 24.0647 9.54725 23.8576 9.54725V9.92225ZM23.8576 11.8454V12.2204C24.0647 12.2204 24.2326 12.0525 24.2326 11.8454H23.8576ZM21.182 10.985L21.4007 10.6803C21.2865 10.5983 21.1359 10.5871 21.0108 10.6513C20.8857 10.7155 20.807 10.8443 20.807 10.985H21.182ZM15.6136 17.7914L15.8291 17.4845L15.8291 17.4845L15.6136 17.7914ZM18.1195 11.3883H18.4945C18.4945 11.2007 18.356 11.042 18.1701 11.0167L18.1195 11.3883ZM18.1195 13.3516L18.0075 13.7094C18.1214 13.7451 18.2454 13.7244 18.3416 13.6537C18.4377 13.5831 18.4945 13.4709 18.4945 13.3516H18.1195ZM16.8927 16.3242L16.7179 16.656L16.7181 16.6561L16.8927 16.3242ZM19.2557 14.954L19.6306 14.9682L19.6307 14.9542L19.2557 14.954ZM19.2589 7.24702V6.87202C19.0518 6.87202 18.8839 7.03982 18.8839 7.24686L19.2589 7.24702ZM21.182 7.24702H21.557C21.557 7.03991 21.3891 6.87202 21.182 6.87202V7.24702ZM19 21.375C23.6254 21.375 27.375 17.6254 27.375 13H26.625C26.625 17.2112 23.2112 20.625 19 20.625V21.375ZM10.625 13C10.625 17.6254 14.3746 21.375 19 21.375V20.625C14.7888 20.625 11.375 17.2112 11.375 13H10.625ZM19 4.625C14.3746 4.625 10.625 8.37461 10.625 13H11.375C11.375 8.78883 14.7888 5.375 19 5.375V4.625ZM27.375 13C27.375 8.37461 23.6254 4.625 19 4.625V5.375C23.2112 5.375 26.625 8.78883 26.625 13H27.375ZM22.6053 9.17512C22.0862 8.83657 21.7125 8.29562 21.5961 7.66678L20.8586 7.80328C21.0135 8.64008 21.5099 9.35607 22.1956 9.80331L22.6053 9.17512ZM22.1354 9.22397L22.135 9.22437L22.6659 9.75407L22.6663 9.75367L22.1354 9.22397ZM23.8576 9.54725C23.3961 9.54725 22.9665 9.41018 22.6058 9.17478L22.1959 9.80285C22.6739 10.1149 23.2452 10.2972 23.8576 10.2972V9.54725ZM24.2326 11.8454V9.92225H23.4826V11.8454H24.2326ZM20.9633 11.2896C21.7789 11.8751 22.7791 12.2204 23.8576 12.2204V11.4704C22.9416 11.4704 22.0933 11.1776 21.4007 10.6803L20.9633 11.2896ZM21.557 14.893V10.985H20.807V14.893H21.557ZM17.6423 18.8077C19.801 18.8077 21.557 17.0522 21.557 14.893H20.807C20.807 16.638 19.3869 18.0577 17.6423 18.0577V18.8077ZM15.3982 18.0983C16.0339 18.5446 16.8078 18.8077 17.6423 18.8077V18.0577C16.9679 18.0577 16.3435 17.8456 15.8291 17.4845L15.3982 18.0983ZM13.7276 14.8934C13.7276 16.2189 14.3903 17.391 15.3982 18.0984L15.8291 17.4845C15.0117 16.9108 14.4776 15.9631 14.4776 14.8934H13.7276ZM17.6423 10.9788C15.4836 10.9788 13.7276 12.7347 13.7276 14.8934H14.4776C14.4776 13.1489 15.8978 11.7288 17.6423 11.7288V10.9788ZM18.1701 11.0167C18.001 10.9937 17.8248 10.9788 17.6423 10.9788V11.7288C17.7841 11.7288 17.9258 11.7404 18.0689 11.7598L18.1701 11.0167ZM18.4945 13.3516V11.3883H17.7445V13.3516H18.4945ZM17.6423 13.6519C17.7674 13.6519 17.8889 13.6723 18.0075 13.7094L18.2315 12.9937C18.0475 12.9361 17.8504 12.9019 17.6423 12.9019V13.6519ZM16.4008 14.8934C16.4008 14.2092 16.9581 13.6519 17.6423 13.6519V12.9019C16.5439 12.9019 15.6508 13.795 15.6508 14.8934H16.4008ZM17.0674 15.9924C16.6703 15.7833 16.4008 15.3683 16.4008 14.8934H15.6508C15.6508 15.6595 16.0861 16.3233 16.7179 16.656L17.0674 15.9924ZM17.6423 16.135C17.4353 16.135 17.2401 16.0832 17.0672 15.9923L16.7181 16.6561C16.9939 16.8011 17.3083 16.885 17.6423 16.885V16.135ZM18.8809 14.9399C18.8559 15.6034 18.3099 16.135 17.6423 16.135V16.885C18.7165 16.885 19.5904 16.0311 19.6304 14.9682L18.8809 14.9399ZM18.8839 7.24686L18.8807 14.9539L19.6307 14.9542L19.6339 7.24718L18.8839 7.24686ZM21.182 6.87202H19.2589V7.62202H21.182V6.87202ZM21.5961 7.66688C21.5707 7.5295 21.557 7.38939 21.557 7.24702H20.807C20.807 7.43775 20.8254 7.62352 20.8586 7.80318L21.5961 7.66688Z" fill="#9CA3AF"></path><path d="M8 15H9.01" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 19H11" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 23H14" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><filter id="filter0_d_1079_283" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.603922 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_283"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_283" result="shape"></feBlend></filter></defs></svg></span><span class="block text-center mt-5"><span class="block text-lg text-gray-300">AI TikTok Script Generator</span><span class="block text-sm text-gray-400">Generate TikTok scripts using AI</span></span></a><a href="/tools/ai-youtube-script-generator" class="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span class="block"><svg width="48" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto w-12 h-12 text-gray-400"><g filter="url(#filter0_d_1079_290)"><path d="M17 20V23C17 24.6569 15.6569 26 14 26H8C6.34315 26 5 24.6569 5 23V13C5 11.3431 6.34315 10 8 10H9" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14H9.01" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18H10" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 22H14" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.2508 6.99917C25.9395 7.1825 26.4815 7.72184 26.6655 8.4065C26.9995 9.64784 26.9995 12.2385 26.9995 12.2385C26.9995 12.2385 26.9995 14.8278 26.6655 16.0698C26.4815 16.7545 25.9395 17.2938 25.2508 17.4765C24.0028 17.8092 18.9995 17.8092 18.9995 17.8092C18.9995 17.8092 13.9968 17.8092 12.7488 17.4765C12.0602 17.2938 11.5182 16.7545 11.3342 16.0698C10.9995 14.8278 10.9995 12.2385 10.9995 12.2385C10.9995 12.2385 10.9995 9.64784 11.3342 8.4065C11.5182 7.72184 12.0602 7.1825 12.7488 6.99917C13.9968 6.6665 18.9995 6.6665 18.9995 6.6665C18.9995 6.6665 24.0028 6.6665 25.2508 6.99917ZM21.5566 12.2379L17.3999 14.6259V9.84991L21.5566 12.2379Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 24C24.1046 24 25 23.1046 25 22C25 23.1046 25.8954 24 27 24C25.8954 24 25 24.8954 25 26C25 24.8954 24.1046 24 23 24Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><filter id="filter0_d_1079_290" x="0" y="-1" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.603922 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_290"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_290" result="shape"></feBlend></filter></defs></svg></span><span class="block text-center mt-5"><span class="block text-lg text-gray-300">AI YouTube Script Generator</span><span class="block text-sm text-gray-400">Generate YouTube scripts using AI</span></span></a><a href="/tools/ai-sales-script-generator" class="block basis-full sm:basis-[48%] lg:basis-[25%] box-border p-8 border rounded-lg border-gray-700/[0.4] bg-gray-700/[0.3] py-10"><span class="block"><svg width="48" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto w-12 h-12 text-gray-400"><g filter="url(#filter0_d_1079_297)"><path d="M17 20V23C17 24.6569 15.6569 26 14 26H8C6.34315 26 5 24.6569 5 23V13C5 11.3431 6.34315 10 8 10H9" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14H9.01" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18H10" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 22H14" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10L19 18L26 10L22 6H16L12 10Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 10H26" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 6L15.5 10L19 6L22.5 10L22 6" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 18L15.5 10" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.5 10L19 18" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 24C24.1046 24 25 23.1046 25 22C25 23.1046 25.8954 24 27 24C25.8954 24 25 24.8954 25 26C25 24.8954 24.1046 24 23 24Z" stroke="#9CA3AF" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><filter id="filter0_d_1079_297" x="0" y="-1" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.603922 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_297"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_297" result="shape"></feBlend></filter></defs></svg></span><span className="block text-center mt-5"><span className="block text-lg text-gray-300">AI Sales Script Generator</span><span className="block text-sm text-gray-400">Generate sales scripts using AI</span></span></a></div>
       </div>
       <div className=" mx-w-7xl w-full mx-4 px-6 lg:px-8 lg:mx-auto pt-4  border-t-1  border-gradient-to-r from-orange-400 via-white mb-9"></div>
       <div className="p-8 lg:p-24 bg-gradient-to-r from bg-blue-800 via-gray-300 to-gray-700 w-[60%] h-[45%] rounded-lg"><span className="block text-2xl lg:text-4xl leading-normal">Get Started Today.</span>
       <span className="block text-xl lg:text-4xl leading-normal font-bold">Bring your recordings to live.</span>
       <a href="/" className="mt-5 lg:mt-10 inline-flex justify-center items-center font-semibold h-[40px] px-8 py-4 bg-white rounded-full text-[#4252e7] hover:bg-blue-100 transition-colors">Try for free</a></div>
        <div>
          <Footer/>
        
        </div>
    </section>
  
  );
}
