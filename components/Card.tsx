import React from "react";
export default function Card(props){
    return(
<div className="w-full">
         <div className="px-container-x-mobile flex justify-center mx-auto w-full max-w-[1344px] lg:px-container-x-desktop pt-20  ">
         <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[64px] lg:pl-[16px] lg:pr-[8px] md:justify-center w-[70%]"> 
         <div className="lg:flex-1 lg:last:shrink lg:last:grow-0 lg:last:basis-[280px] w-full rounded-[12px] border-[1px] border-white border-opacity-[0.21] lg:border-opacity-10 px-[24px] pt-[30px] pb-[32px] backdrop-blur-[7px] lg:backdrop-blur-none lg:p-[24px] lg:rounded-none lg:border-[1px] lg:border-x-0 lg:border-b-0 lg:px-0">
        <p className="text-[16px] font-500 leading-[20px] tracking-[0.16px] text-white lg:text-[12px] lg:tracking-[0.12px] !text-stream-200">{props.title}</p>
        <div className="mt-[32px] flex items-center justify-start gap-[8px] lg:mt-[40px]">
        <p className="text-[50px] font-400 leading-[56px] -tracking-[1px] text-white">{props.price}</p>
        <p className="text-[14px] font-400 !leading-[20px] lg:text-[12px] tracking-[0.14px] lg:tracking-[0.12px] text-stream-200">{props.decription}</p>
        </div>
        <p className="mt-[16px] lg:mt-[12px] text-[16px] font-450 leading-[24px] tracking-[0.16px] text-stream-300 lg:text-[12px] lg:leading-[20px] lg:tracking-[0.12px]"></p>
        <a className="cursor-pointer outline-none whitespace-nowrap flex items-center justify-center relative box-border rounded-lg text-base !leading-[20px] lg:text-sm font-500 transition-[color] w-full border px-[28px] py-[13px] lg:py-[7px]  hover:bg-white/[0.15] active:bg-white/[0.07] border-white/[0.15] bg-white/10 text-white mt-[24px] font-500 text-[16px] lg:!text-[14px]"
         href="/">{props.button}</a>
        <div className="visible mt-[32px] lg:mt-[40px] max-h-[1000px] overflow-hidden will-change-max-height">
        <div className="group/features mt-[24px] border-t border-white border-opacity-10 pt-[24px] first:mt-0 first:border-t-0 first:pt-0 ">
        <p className="text-start text-[14px] font-600 leading-[20px] tracking-[0.14px] text-white lg:text-[12px] lg:tracking-[0.12]">{props.menuTitle}</p>
        <div className="mt-[20px] lg:mt-[16px] group-first/features:lg:min-h-[132px] group-[:nth-of-type(2)]/features:lg:min-h-[76px]">
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] ">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] block">
        <path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path></svg>
            <span>{props.menuFirst}</span></p>
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] ">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
        <path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path></svg>
            <span>{props.menuSecond}</span>
            </p>
            <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] ">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]">
        <path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path></svg>
            <span>{props.menuthird}</span>
            </p>
        <p className="  lg:hidden mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ><path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Restream watermark</span></p>
        <p className="lg:hidden mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ><path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Cross-platform chat</span></p>
        <p className="lg:hidden mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ><path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Stream analytics</span></p>
        <p className="lg:hidden mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ><path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Live health monitor</span></p></div></div>
        <div className="lg:hidden group/features mt-[24px] border-t border-white border-opacity-10 pt-[24px] first:mt-0 first:border-t-0 first:pt-0 ">
        <p className="text-[14px] font-600 leading-[20px] tracking-[0.14px] text-white lg:text-[12px] lg:tracking-[0.12]">Restream Studio</p>
        <div className="mt-[20px] lg:mt-[16px] group-first/features:lg:min-h-[132px] group-[:nth-of-type(2)]/features:lg:min-h-[76px]">
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] ">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] block">
        <path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>6 on-screen participants</span></p>
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] block" >
        <path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>720p, HD resolution</span></p>
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] ">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ><path d="M5.75 11.0357L8.9375 14.25L14.25 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>Basic graphics</span>
        </p>
        </div>
        </div>
        <div className="lg:hidden group/features mt-[24px] border-t border-white border-opacity-10 pt-[24px] first:mt-0 first:border-t-0 first:pt-0 ">
        <p className="text-[14px] font-600 leading-[20px] tracking-[0.14px] text-white lg:text-[12px] lg:tracking-[0.12]">Upload and Stream</p>
        <div className="mt-[20px] lg:mt-[16px] group-first/features:lg:min-h-[132px] group-[:nth-of-type(2)]/features:lg:min-h-[76px]">
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ></svg><span>15 minute videos</span></p>
        <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px] "><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="Check" className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]" ></svg><span>250MB per video</span></p>
        </div>
        </div>
        </div>
        <div className="lg:hidden relative mt-[24px] flex items-center justify-center gap-[16px] before:h-[1px] before:flex-1 before:bg-white before:bg-opacity-10 before:content-[''] after:h-[1px] after:flex-1 after:bg-white after:bg-opacity-10 after:content-['']">
        <button className="flex items-center justify-center gap-[4px]" >
        <span className="text-[16px] font-500 leading-[20px] tracking-[0.16px] text-white lg:text-[12px] lg:font-600 lg:tracking-[0.12px]">Show all features</span>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="icon" data-name="ArrowDown" className="width: 32px; height: 32px; display: block; opacity: 0.5; transition: transform 400ms;">
          </svg>
          </button>
          </div>
          </div>  
            </div>
        </div>
</div>
        

    );
}