import { Logo } from "@/components/icons";
export default function Footer(){
    return(
    <div  className="flex flex-col-reverse space-y-10 mx-20 my-10   w-[100%]">
        <div className="flex w-full gap-x-40 border-b border-gray-500  pb-3 pt-10 ">
            <div className="">
            <Logo />
            <p className="font-bold text-inherit">TransLive</p>
              </div>
                <div>
                    <span className="block pb-3 text-lg text-gray-500">Products</span>
                <ul>
                    <li>
                        <a href="/">Studio</a></li>
                <li>
                    <a href="/">Multistreaming</a></li>
                <li>
                    <a href="/">Chat</a></li>
                    <li><a href="/">Analytics</a></li></ul></div><div><span className="block pb-5 text-lg text-gray-500">Community</span>
                <ul>
                    <li>
                        <a href="/">Discord</a></li><li><a href="/">Customers</a>
                        </li>
                        <li>
                            <a href="/">Developers</a></li><li><a href="/">Referral Program</a>
                            </li>
                            </ul>
                            </div>
                        <div>
                            <span className="block pb-5 text-lg text-gray-500">Resources</span>
                        <ul>
                            <li>
                                <a href="/">Blog</a></li>
                        <li><a href="/">Help center</a></li><li>
                            <a href="/">Integrations</a></li>
                            <li><a href="">Terms of use</a>
                            </li>
                            </ul>
                            </div>
                        <div>
                            <span className="block pb-5 text-lg text-gray-500">Company</span>
                            <ul>
                                <li>
                                    <a href="">About</a></li>
                            <li>
                                <a href="">Careers</a></li>
                            <li>
                                <a href="">Pricing</a></li>
                            <li
                            ><a href="">Media kit</a>
                            </li>
                            </ul>
                            </div>
                            </div>
         <div className="">
           <span className="block">
              © 2024 Restream, Inc.
               </span>
            <span className="block">Restream® is a property of Restream, Inc.</span>
                 <div>
              <div className="lg:ml-auto flex items-center justify-center lg:justify-end gap-4 lg:gap-8">
           
                 <a className="block opacity-75 hover:opacity-100 transition-opacity" href="/">
                <svg xmlns="" fill="none" viewBox="0 0 36 36" className="w-6 h-6">
                </svg>
              <span className="sr-only">X</span></a></div>
             </div>
          </div>
    </div>    
    );
}
