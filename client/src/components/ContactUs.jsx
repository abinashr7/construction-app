import React from "react";
import fb from "../images/fb.png";
import ins from "../images/insta.png";
import lin from "../images/linkedin.png";
import tw from "../images/twitter.png";

export default function ContactUs() {
  return (
    <div className="grow mt-8 gap-2 flex flex-col items-center">
      <h1 className="text-2xl underline font-bold mb-4">Contact Us</h1>
      <div className="flex items-center gap-2">
        <a
          href="https://www.facebook.com/"
          alt="fb"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-9"
        >
          <img src={fb} alt="fb" />
        </a>
        <a
          href="https://www.instagram.com/"
          alt="insta"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-9"
        >
          <img src={ins} alt="insta" />
        </a>
        <a
          href="https://in.linkedin.com/"
          alt="linkedin"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-9"
        >
          <img src={lin} alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/login?lang=en"
          alt="twitter"
          target="_blank"
          rel="noreferrer"
          className="h-10 w-9"
        >
          <img src={tw} alt="twitter" />
        </a>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} A Constructions.All Rights Reserved
        </p>
      </div>
      <div>
        <p>Mobile No: 9863926522 | 6278890928</p>
      </div>
    </div>
  );
}
