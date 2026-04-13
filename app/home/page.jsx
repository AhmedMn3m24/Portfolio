// "use client";
// import Image from "next/image";
// import imgcv from "../../public/cv.jpeg";

// export default function Page() {
//   return (
//     <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[calc(100vh-64px)] px-6 md:px-[10%] py-20 gap-10 bg-[#0b1120] text-white">
//       {/* النصوص على الشمال */}
//       <div className="flex-1 space-y-5">
      

//         <h1 className="text-4xl sm:text-5xl font-extrabold font-syne leading-tight">
//           Ahmed Abdelmonem
//         </h1>
//         <span className="text-white/50 uppercase tracking-widest text-sm">
//           Junior Front-End Developer
//         </span>

//         <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 font-syne">
//           Front-End Engineer
//         </h2>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
//           Specializing in React and Next.js — I build high-performance, scalable
//           & luxurious web experiences with clean code and pixel-perfect
//           precision.
//         </p>

//         <div className="flex gap-4 pt-2 flex-wrap">
//           <button className="px-7 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
//             About Me
//           </button>
//           <button className="px-7 py-3 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/50 hover:text-white transition cursor-pointer">
//             Contact Me
//           </button>
//         </div>
//       </div>

//       {/* الصورة على اليمين */}
//       <div className="flex-shrink-0">
//         <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-[4px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
//           <Image
//             className="w-full h-full rounded-full object-cover"
//             src={imgcv}
//             alt="Ahmed Abdelmonem - Front-End Engineer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
