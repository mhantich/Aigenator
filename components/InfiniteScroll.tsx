import Image from "next/image";
  const InfiniteScroll = () => {
    return (
      <section className="relative  flex flex-col justify-center  overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-1 ">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden ">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
           
              <li>
                <Image
                  className=" "
                  src={"/icons/docker.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/devops-2.svg"}
                  width={80}
                  height={80}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/Framer.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/nginx.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/git.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/github.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/Webflow.svg"}
                  width={100}
                  height={100}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/wordpress-icon-1.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            
              <li>
                <Image
                  className=" "
                  src={"/icons/docker.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/devops-2.svg"}
                  width={80}
                  height={80}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/Framer.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/nginx.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/git.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/github.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/Webflow.svg"}
                  width={100}
                  height={100}
                  alt="pic"
                />
              </li>
              <li>
                <Image
                  className=" "
                  src={"/icons/wordpress-icon-1.svg"}
                  width={30}
                  height={30}
                  alt="pic"
                />
              </li>
              </ul>
            </div>
          </div>
        </div>
     
      </section>
    );
  };
  
  export default InfiniteScroll;
  