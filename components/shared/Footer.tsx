import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section: Logo and Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-1 mb-4">
            <Image
              src="/image/BEEHIT.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <h2 className="text-lg font-bold">Beeheit</h2>
          </div>
          <p className="text-gray-400">
            We design world-class digital products to help startups and Fortune
            500 companies delight humans on the other side of the screen.
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold">
              Subscribe To Our Newsletter
            </h4>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none placeholder:text-sm placeholder:font-light"
              />
              <Button size="lg" className="rounded-tl-none rounded-bl-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Venture Studio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Glossary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Locations Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Locations</h4>
          <div className="text-gray-400 space-y-4">
            <div>
              <h5 className="font-semibold text-white">US</h5>
              <p>1780 Stoney Hill Dr., Suite A, Hudson, OH 44236</p>
            </div>
            <div>
              <h5 className="font-semibold text-white">India</h5>
              <p>
                Upper Ground Floor, PEGASUS TOWER, Block A, Sector 68, Noida,
                UP, 201307
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 px-4 lg:px-8 border-t border-gray-700 pt-6 text-gray-500 text-center">
        <p>&copy; 2024 Beeheit All Rights Reserved</p>
        <a href="#" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
