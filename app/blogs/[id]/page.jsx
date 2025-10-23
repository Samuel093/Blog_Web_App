import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Page({ params }) {
  const { id } = React.use(params); // ✅ Only valid in server component

  const data = blog_data.find((item) => item.id === Number(id));

  return (data?<>
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
            <Link href="/">
            <Image src={assets.logo} alt="" width={180} className="w-[130px] sm:w-auto"/>
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 
            sm:px-6 border border-black
             shadow-[-7px_7px_0px_#000000]">Get started <Image src={assets.arrow} alt=""/></button>
        </div>
        <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-bold max-w-[700px] mx-auto">{data.title}</h1>
            <Image src={data.author_img} alt="" width={60} height={60} 
            className="mx-auto mt-6 border border-white rounded-full"/>
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} width={1280} height={720} alt="" className="border-4 border-white"/>
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
            Before you can manage your Lifestyle, you must have a clear understanding of what you want to achieve.
            Start by reflecting on your values, aspirations, and long-term goals.
        </p>
          <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
            Before you can manage your Lifestyle, you must have a clear understanding of what you want to achieve.
            Start by reflecting on your values, aspirations, and long-term goals.
        </p>
          <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
        <p className="my-3">
            Before you can manage your Lifestyle, you must have a clear understanding of what you want to achieve.
            Start by reflecting on your values, aspirations, and long-term goals.
        </p>
          <h3 className="my-5 text-[18px] font-semibold">Conclution:</h3>
        <p className="my-3">
            Managing your Lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step
            you shall achieve all your aspirations.
        </p>
        <div className="my-24 ">
             <p className="text-black font-semibold my-4">Share this articles on social media</p>
             <div className="flex">
                <Image src={assets.facebook_icon} alt="" width={50}/>
                <Image src={assets.twitter_icon} alt="" width={50}/>
                <Image src={assets.googleplus_icon} alt="" width={50}/>

             </div>
        </div>
    </div>
    <Footer/>
    </>:<></>
  );
}
