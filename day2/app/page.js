import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8 bg-white">
    <div className="min-h-screen min-w-full grid grid-cols-12 gap-4 border">
    <div className="flex flex-col col-span-6 text-slate-950 p-5  justify-center">
        <h1 className="font-semibold text-5xl">Welcome back</h1>

        <h3 className="text-slate-950/45 pb-8">Welcome back ! please enter your details</h3>
        <div className="pr-36">
        <label for="Email" class="block  text-md font-normal mb-1">Email</label>
       <input className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight font-light " id="username" type="text" placeholder="Enter your email"></input>
       <label for="Email" class="block  text-md font-normal mb-1 pt-5">Password</label>
       <input className="  border rounded w-full py-2 px-3 text-gray-700 leading-tight font-light" id="username" type="text" placeholder="Enter your password"></input>
       <div className="flex justify-between pt-5 pb-5">
         <div className="flex items-center">
         <input className="p-2" type='checkbox' ></input>
      <h4 className="pl-2">Remember for 30 days</h4>
         </div>
        
      <h4>Forget password</h4>
       </div>

        <button className="w-full bg-slate-900  text-white font-light py-2 px-4 rounded text-center mb-6">Sign in</button>
        <button className="w-full border text-black font-light py-2 px-4 rounded text-center mb-6">Sign in with google</button>
        <h3 className="text-center">Don't have an account ?<span className="text-bold"> Sign up for free </span></h3>


          </div>
        
      </div>
      <div className="col-span-6 relative">
        <Image 
          src="/hero.png"
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-5  ">
          <div className='p-4 text-white justify-center backdrop-blur-xl bg-[#fdfdfd]/35  '>
            <h1 className='text-7xl text-center pb-2'>Naomi Niko</h1>
            <h3 className='text-2xl text-center pb-2 '>Developer</h3>
          </div>
        </div>
      </div>
      
    </div>
  </main>
  );
}
