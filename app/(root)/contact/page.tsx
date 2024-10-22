import { ContactForm } from "@/feature/Contact/contact-form";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Facebook, MessagesSquare, PhoneCall } from "lucide-react";
import Link from "next/link";

function Contact() {
  return (
    <div className="py-16 container mx-auto min-h-dvh px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/** Left  Section */}
        <div className="flex flex-col gap-8 lg:min-h-svh items-start ">
          <div className="md:flex-grow w-full">
            <div className="flex flex-col gap-8 items-start">
              {/** Chat */}
              <div className="flex flex-col items-start gap-1 md:flex-row md:gap-1.5">
                <div className="flex justify-center items-center border-2 border-gray-200 px-2.5 py-1.5 rounded-lg">
                  <MessagesSquare />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-lg">Chat with us</h4>
                  <p className="font-light text-muted-foreground text-base">
                    Our friendly team is here to help
                  </p>
                  <h2 className="font-bold text-lg">Thebeeheit@gmail.com</h2>
                </div>
              </div>

              {/** Phone */}
              <div className="flex flex-col items-start gap-1 md:flex-row md:gap-1.5">
                <div className="flex justify-center items-center border-2 border-gray-200 px-2.5 py-1.5 rounded-lg">
                  <PhoneCall />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <p className="font-light text-muted-foreground text-base">
                    Sunday to Thursday from 10am to 6pm
                  </p>
                  <h2 className="font-bold text-lg">+880 1621 453014</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-7">
            <Link href="/facebook.com">
              <Facebook />
            </Link>
            <Link href="/x.com">
              <TwitterLogoIcon className="w-5 h-5" />
            </Link>
            <Link href="/instagram.com">
              <InstagramLogoIcon className="w-5 h-5" />
            </Link>
            <Link href="/linkedin.com">
              <LinkedInLogoIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/** Right Section */}
        <div className="bg-orange-50 dark:bg-black px-8 py-8  rounded flex flex-col gap-6 min-h-svh  ">
          <div className="flex flex-col w-full gap-4 dark:text-white">
            <h2 className="font-semibold text-3xl sm:text-4xl   text-center md:text-left dark:text-white">
              Got ideas? We&apos;ve got <br /> the skills. Let&apos;s team up.
            </h2>
            <p className="font-medium text-base">
              Tell us more about yourself and what you&#39;re got in mind.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default Contact;
