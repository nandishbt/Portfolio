/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

export default function Hero() {

  function handleWhatsAppClick() {
    var phoneNumber = "+916361464986"; 
    var message = "Hello, I would like to inquire about..."; 

    // Build the WhatsApp URL
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect to the WhatsApp URL
    window.location.href = whatsappLink;
  }


  
  return (
    <div className="relative w-full  container px-4 mx-auto flex flex-col justify-center items-center h-screen -mt-20 ">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="flex flex-col items-start relative ">
        <div className="flex flex-col items-start SpaceGroteskBold text-[28px] md:text-[50px] lg:text-[64px] ">
          <h1>Hello!👋🏻</h1>
          <h1>My name is Nandish B Tippashetty</h1>
          <h1>
            I'm a Full Stack <span className="text">Developer</span>
          </h1>
        </div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="SpaceGroteskRegular text-[16px] md:text-[20px] lg:text-[24px] py-5">
          <p>
            Let me help you grow your business and make your product look pretty
            while at it{" "}
          </p>
        </div>
        <>

        <div className="flex gap-5">

        <div className="relative block group  my-7 ml-4 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <p onClick={handleWhatsAppClick} className="mt-1 text-xl">Say Hello</p>
              </div>
            </div>
          </div>

          <div className="relative block group  my-7 ml-4 cursor-pointer">
            <span className="absolute inset-0 border-2  border-green-500 rounded-lg"></span>
            <div className="transition bg-green-500 text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <Link href={'https://drive.google.com/file/d/1uzZjidqaIfop94qQvGV37wpGdyAui8XJ/view?usp=sharing'} ><p className="mt-1 text-xl">My Resume</p></Link>
              </div>
            </div>
          </div>
        </div>
         

         
        </>
      </div>
    </div>
  );
}
