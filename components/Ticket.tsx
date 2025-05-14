import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

const colors = [
  "bg-gradient-to-br from-blue-600 to-blue-800",
  "bg-gradient-to-br from-purple-600 to-purple-800",
  "bg-gradient-to-br from-pink-600 to-pink-800",
  "bg-gradient-to-br from-indigo-600 to-indigo-800",
];

const icons = [
  // MultiStreaming icon
  <svg key="multistream" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>,
  // Upload icon
  <svg key="upload" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>,
  // Chat icon
  <svg key="chat" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>,
  // Analytics icon
  <svg key="analytics" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
];

export default function Ticket(props: {
  title:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  para:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<AwaitedReactNode>
    | null
    | undefined;
  index?: number;
}) {
  const colorIndex = props.index ? props.index % colors.length : 0;
  
  return (
    <div className="transform transition-transform duration-300 hover:scale-105">
      <div className={`${colors[colorIndex]} text-white lg:w-72 lg:h-80 h-60 lg:rounded-md rounded-sm flex flex-col justify-center items-start text-start px-4 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
        <div className="w-full flex justify-center">
          {icons[colorIndex]}
        </div>
        <h1 className="font-bold font-serif mb-3 text-xl">{props.title}</h1>
        <p className="text-gray-100">{props.para}</p>
      </div>
    </div>
  );
}
