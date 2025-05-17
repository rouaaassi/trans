import React from "react";

export default function Card(props: {
  title:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  price:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  decription:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  button:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  menuTitle:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  menuFirst:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  menuSecond:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
  menuthird:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
}) {
  return (
    <div className="w-full">
      <div className="px-container-x-mobile flex justify-center mx-auto w-full max-w-[1344px] lg:px-container-x-desktop pt-20">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[64px] lg:pl-[16px] lg:pr-[8px] md:justify-center w-[70%]">
          <div className="lg:flex-1 lg:last:shrink lg:last:grow-0 lg:last:basis-[280px] w-full rounded-[12px] border-[1px] border-white border-opacity-[0.21] lg:border-opacity-10 px-[24px] pt-[30px] pb-[32px] backdrop-blur-[7px] lg:backdrop-blur-none lg:p-[24px] lg:rounded-none lg:border-[1px] lg:border-x-0 lg:border-b-0 lg:px-0">
            <p className="text-[16px] font-500 leading-[20px] tracking-[0.16px] text-white lg:text-[12px] lg:tracking-[0.12px] !text-stream-200">
              {props.title}
            </p>
            <div className="mt-[32px] flex items-center justify-start gap-[8px] lg:mt-[40px]">
              <p className="text-[50px] font-400 leading-[56px] -tracking-[1px] text-white">
                {props.price}
              </p>
              <p className="text-[14px] font-400 !leading-[20px] lg:text-[12px] tracking-[0.14px] lg:tracking-[0.12px] text-stream-200">
                {props.decription}
              </p>
            </div>
            <p className="mt-[16px] lg:mt-[12px] text-[16px] font-450 leading-[24px] tracking-[0.16px] text-stream-300 lg:text-[12px] lg:leading-[20px] lg:tracking-[0.12px]" />
            <a
              className="cursor-pointer outline-none whitespace-nowrap flex items-center justify-center relative box-border rounded-lg text-base !leading-[20px] lg:text-sm font-500 transition-[color] w-full border px-[28px] py-[13px] lg:py-[7px] hover:bg-white/[0.15] active:bg-white/[0.07] border-white/[0.15] bg-white/10 text-white mt-[24px] font-500 text-[16px] lg:!text-[14px]"
              href="/"
            >
              {props.button}
            </a>
            <div className="visible mt-[32px] lg:mt-[40px] max-h-[1000px] overflow-hidden will-change-max-height">
              <div className="group/features mt-[24px] border-t border-white border-opacity-10 pt-[24px] first:mt-0 first:border-t-0 first:pt-0">
                <p className="text-start text-[14px] font-600 leading-[20px] tracking-[0.14px] text-white lg:text-[12px] lg:tracking-[0.12]">
                  {props.menuTitle}
                </p>
                <div className="mt-[20px] lg:mt-[16px] group-first/features:lg:min-h-[132px] group-[:nth-of-type(2)]/features:lg:min-h-[76px]">
                  <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px]">
                    <svg
                      className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px] block"
                      data-name="Check"
                      data-testid="icon"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 11.0357L8.9375 14.25L14.25 6.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{props.menuFirst}</span>
                  </p>
                  <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px]">
                    <svg
                      className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]"
                      data-name="Check"
                      data-testid="icon"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 11.0357L8.9375 14.25L14.25 6.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{props.menuSecond}</span>
                  </p>
                  <p className="mt-[8px] flex items-center justify-start gap-[12px] text-[16px] font-400 leading-[20px] text-stream-100 first:mt-0 lg:text-[14px]">
                    <svg
                      className="shrink-0 w-[24px] h-[24px] lg:w-[20px] lg:h-[20px]"
                      data-name="Check"
                      data-testid="icon"
                      fill="none"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 11.0357L8.9375 14.25L14.25 6.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>{props.menuthird}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
