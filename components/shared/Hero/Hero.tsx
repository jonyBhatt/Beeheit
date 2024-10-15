"use client";
export const Hero = () => {
  return (
    <section className="bg-hero py-32">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-start justify-between">
          {/* Headline and Subtext */}
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-8">
              A Different Kind of Custom{" "}
            </h1>
            <span className="text-teal-600 mt-4 text-4xl lg:text-6xl font-bold  ">
              Software Development Company
            </span>
          </div>

          {/* Rating and Supporting Text */}
          <div className="lg:w-1/2   flex flex-col lg:flex-row lg:items-center items-start justify-between gap-6 mt-8 ">
            {/* Rating */}
            <div className="text-center flex  items-center ">
              <div className="flex flex-col items-start">
                <p className="text-gray-600 text-sm font-semibold">
                  TOP LEADER
                </p>

                <p className="text-black font-bold mt-1">Clutch</p>
              </div>
              <div className="flex flex-col -mt-2.5 ">
                <span className="text-primary text-lg font-bold">★★★★★</span>
                <span className="text-gray-600 text-sm ml-2">
                  Based on 28 Reviews
                </span>
              </div>
            </div>

            {/* Supporting Text */}
            <div className="text-left">
              <p className="text-gray-700 font-medium">
                Humans deserve better <br />
                software products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
