import Image from "next/image";
import React from "react";

const VisionSection = () => {
  return (
    <section className="  ">
      <div className="bg-teal-900 text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 px-6">
          {/* Left Side - Headline */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold"
              style={{ lineHeight: 1.5 }}
            >
              You bring the <br /> vision, we bring <br /> the spark
            </h2>
          </div>

          {/* Right Side - Description and Button */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p
              className="text-base sm:text-lg mb-4 font-light "
              style={{ lineHeight: 1.5 }}
            >
              The size of your vision is more important than the size of your
              organization. Whether you&lsquo;re a mid-sized business, an <br />
              enterprise, or somewhere in between, Beeheit is your Goldilocks{" "}
              <br />
              software partner.
            </p>
            <p className="text-base sm:text-lg mb-6 font-light">
              Our iterative, high-empathy design approach reduces risk and
              ensures a software solution that’s just right for your business.
            </p>
            <button className="bg-teal-700 hover:bg-teal-600 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between space-y-8 lg:space-y-0 px-6 mt-8">
        <div className="flex flex-col items-center gap-2.5">
          <Image
            src="/icons/cashback.gif"
            alt="cashback"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold text-xl">Mid Sized</h4>
            <span className="text-lg text-center">
              Launch your core software and get to <br />
              market faster
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <Image src="/icons/diagram.gif" alt="more" width={100} height={100} />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold text-xl">More</h4>
            <span className="text-lg text-center">
              Easily scale your business to meet <br /> increased demand
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <Image
            src="/icons/skyline.gif"
            alt="cashback"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold text-xl">Enterprises</h4>
            <span className="text-lg text-center">
              Innovate quickly without burdening <br />
              your internal teams
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
