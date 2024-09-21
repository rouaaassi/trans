export default function Question(){
    return(
        <div className="relative max-w-7xl mx-4 lg:px-6 lg:mx-auto px-4 py-8 ">
        <div className=" border rounded-lg border-gray-700/50 bg-gray-700/20 divi border-solid ">
        <details className="px-4 pb-4 pt-4">
            <summary className="flex justify-start items-center cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            <h3 className="text-base lg:text-xl font-medium text-blue-500 px-4">How do I transcribe video to text?</h3>
            </summary>
            <p className="ml-5 mt-5 block text-sm leading-relaxed text-gray-500 ">You can transcribe almost any video file using Restream's free AI transcription tool.</p>
            <ol className="ml-5 mt-4 pb-4 block text-sm leading-relaxed text-gray-500 list-decimal pl-10">
            <li className="pb-2">Select <strong className="font-bold">Choose File </strong> to get started. Browse your device files or drag and drop your video file into the video-to-text converter.</li>
            <li className="pb-2">Select <strong className="font-bold">Transcribe</strong> to upload your video and start the transcription process.</li>
            <li className="">Download your transcription file when it's done processing.</li></ol>
        </details>
        <details className="px-4 pb-4 pt-4">
            <summary className="flex justify-start items-center cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            <h3 className="text-base lg:text-xl font-medium text-blue-500 px-4">Can I transcribe audio to text?</h3>
            </summary>
            <p className="ml-5 mt-5 block text-sm leading-relaxed text-gray-500">Yes, you can use our
                <a href="/" className="text-blue-800"> audio-to-text transcription tool </a>to convert your audio recordings to text. Our AI-powered tool provides you with a full, accurate transcription for free. You don't have to create an account or download any software.</p>
            {/* <ol className="ml-5 mt-4 pb-4 block text-sm leading-relaxed text-gray-500 list-decimal pl-10">
            <li className="pb-2">Select <strong className="font-bold">Choose File </strong> to get started. Browse your device files or drag and drop your video file into the video-to-text converter.</li>
            <li className="pb-2">Select <strong className="font-bold">Transcribe</strong> to upload your video and start the transcription process.</li>
            <li className="">Download your transcription file when it's done processing.</li></ol> */}
        </details>
        <details className="px-4 pb-4 pt-4">
            <summary className="flex justify-start items-center cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            <h3 className="text-base lg:text-xl font-medium text-blue-500 px-4">Can I convert video to text for free?</h3>
            </summary>
            <p className="ml-5 mt-5 block text-sm leading-relaxed text-gray-500">Yes, our video transcription tool is free, ad-free and no account is required. Simply upload your video file and we’ll transcribe it in no time!</p>
          
        </details>
        <details className="px-4 pb-4 pt-4">
            <summary className="flex justify-start items-center cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            <h3 className="text-base lg:text-xl font-medium text-blue-500 px-4">How accurate is TransLive's video transcription tool?</h3>
            </summary>
            <p className="ml-5 mt-5 block text-sm leading-relaxed text-gray-500">Transcript accuracy varies by language — it’s more accurate for some than others. For English, accuracy is 99%. For other languages, it’s slightly lower.</p>
            
        </details>
        <details className="px-4 pb-4 pt-4">
            <summary className="flex justify-start items-center cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>
            <h3 className="text-base lg:text-xl font-medium text-blue-500 px-4">Which file formats does Restream’s video transcription tool support?</h3>
            </summary>
            <p className="ml-5 mt-5 block text-sm leading-relaxed text-gray-500">Our AI video-to-text converter supports MP4, AVI, MOV, MKV, MPEG and much more.</p>
            
        </details>
        </div>
      </div>
    );
}