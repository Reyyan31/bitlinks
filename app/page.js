import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
  <main className="bg-purple-200">
    <section className="grid grid-cols-2 h-[50vh]">
   <div className="items-center justify-center flex flex-col gap-2 ">
    <p className="text-2xl font-extrabold">
      The Best URL Shortener In The World
    </p>
    <p className="">
      Shorten Any URL Easily
    </p>
    <div className='flex gap-4 my-3 text-white '>
        <Link href="/shorten"> <button className='cursor-pointer rounded-full bg-purple-500 shadow-lg p-3 py-2 font-bold hover:bg-purple-700  '>Try Now</button> </Link>
        <Link href="/github"> <button className='cursor-pointer  rounded-full bg-purple-500 shadow-lg p-3 py-2 font-bold hover:bg-purple-700 '>GitHuB</button> </Link>
        </div>
   </div>
 
   <div className=" flex justify-start relative mx-20  ">
    <Image className="rounded-lg mix-blend-darken " alt="an image" src={"/vectorrr.jpeg"} fill={true}/> 
   </div>
   
    </section>
  </main>
  );
}
