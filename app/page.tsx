import { HeroParallax } from "@/components/connect-parallax";
import HomePage from "@/components/HomePage";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { CheckIcon } from "lucide-react";
import Link from 'next/link';

import { ContainerScroll } from "@/components/container-scroll-animation";
import Image from "next/image";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home() {

  return (
    <main style={{ backgroundColor: "#181818" }}className="overflow-x-hidden   ">
      <Navbar />
      <HomePage />
      <InfiniteMovingCards items={clients} direction="right" speed="slow" />
      <HeroParallax products={products}></HeroParallax>
      <div
        style={{
          backgroundImage: "url(/beams.jpg)",
        }}
        className="flex flex-col overflow-hidden  bg-gradient-to-r  "
      >
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl lg:text-7xl mb-11 font-semibold text-black">
                Unleash the power of <br /> Ai and browser all the template
              </h1>
            </>
          }
        >
          <Image
            src={`/linear.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto mt-4 rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <section className="min-h-screen px-5 py-10 flex items-center justify-center">
        <section className="">
          <div className="flex flex-wrap md:py-36 items-center justify-center flex-col md:flex-row gap-8 md:overflow-hidden ">
            <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
                >
                  Hobby
                  <h2 className="text-6xl ">$0</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      100 tasks per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Two-step Actions
                    </li>
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
                >
                  Pro Plan
                  <h2 className="text-6xl ">$29</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      100 tasks per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Two-step Actions
                    </li>
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var ">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
                >
                  Unlimited
                  <h2 className="text-6xl ">$99</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      100 tasks per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Two-step Actions
                    </li>
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </section>
      <section
        style={{
          backgroundImage: "url(/beams.jpg)",
        }}
        className="bg-white py-11"
      >
        <BentoGridThirdDemo />
      </section>
      <Footer />
    </main>
  );
}
