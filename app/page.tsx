// // export default function HomePage() {
// //   const products = [
// //     {
// //       title: 'BOOK COVER ROLLS',
// //       image: '/images/pro1.jpeg',
// //     },
// //     {
// //       title: 'SYNTHETIC BOOK COVER',
// //       image: '/images/pro2.jpeg',
// //     },
// //     {
// //       title: 'UNBREAKABLE CLIP BOARD',
// //       image: '/images/clipboard.jpeg',
// //     },
// //     {
// //       title: 'NOTE BOOK COVER ROLL',
// //       image: '/images/pro4.jpeg',
// //     },
// //     {
// //       title: 'NOTE BOOK COVER ROLL',
// //       image: '/images/pro5.jpeg',
// //     },
// //     {
// //       title: 'NOTE BOOK COVER ROLL',
// //       image: '/images/pro6.jpeg',
// //     },
// //   ];

// //   return (
// //     <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
// //       {/* Header */}
// //       <header className="sticky top-0 z-50 bg-[#2E3192] shadow-lg">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //           <div className="bg-white px-5 py-2 rounded-md">
// //             <h1 className="text-3xl font-bold text-[#2E3192]">KITTO</h1>
// //           </div>

// //           <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
// //             <a href="#" className="hover:text-gray-200 transition">Home</a>
// //             <a href="#" className="hover:text-gray-200 transition">About Us</a>
// //             <a href="#products" className="hover:text-gray-200 transition">Products</a>
// //             <a href="#" className="hover:text-gray-200 transition">Features</a>
// //             <a href="#" className="hover:text-gray-200 transition">Gallery</a>
// //             <a href="#contact" className="hover:text-gray-200 transition">Contact</a>

// //             <button className="bg-white text-[#2E3192] px-5 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg">
// //               Get In Touch
// //             </button>
// //           </nav>

// //           <button className="lg:hidden text-white">
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth={1.5}
// //               stroke="currentColor"
// //               className="w-8 h-8"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-b from-[#F6F6FB] to-[#ECECF8]">
// //         <div className="max-w-7xl mx-auto px-6 py-24 xl:py-32 grid grid-cols-1 xl:grid-cols-3 gap-10 items-center">
// //           {/* Left Content */}
// //           <div>
// //             <p className="text-[#2E3192] font-bold text-lg tracking-wide">
// //               MANUFACTURER OF
// //             </p>

// //             <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-[#2E3192]">
// //               Sheet roll & 
// //               <br />
// //  Book cover rolls.            </h2>

// //             <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
// //               Manufacture of school brown sheet roll & premium book cover rolls.
// //             </p>

// //             <div className="mt-8 space-y-4">
// //               {[
// //                 'Kitto clear exam pad',
// //                 'Namang glow exam pad',
// //                 'Kavish crystal exam pad',
// //                 'Priyansh classic exam pad',
// //               ].map((item) => (
// //                 <div key={item} className="flex items-center gap-3">
// //                   <div className="w-6 h-6 rounded-full bg-[#2E3192] flex items-center justify-center text-white text-sm">
// //                     ✓
// //                   </div>
// //                   <span className="text-lg">{item}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             <a
// //   href="#products"
// //   className="inline-block mt-10 bg-[#2E3192] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-xl"
// // >
// //   View Products
// // </a>
// //           </div>

// //           {/* Center Image */}
// // <div className="flex justify-center items-center">
// //   <div className="relative w-full max-w-[420px] xl:max-w-[500px]">
    
// //     {/* Background Glow */}
// //     <div className="absolute inset-0 bg-[#2E3192]/10 rounded-[40px] blur-3xl scale-105"></div>

// //     {/* Main Image */}
// //     <div className="relative overflow-hidden rounded-[32px] shadow-2xl bg-white h-[650px]">
// //   <img
// //     src="/images/clipboard1.png"
// //     alt="KITTO Clipboard"
// //     className="absolute top-0 left-0 w-full h-[820px] object-contain object-top"
// //   />
// // </div>
// //   </div>
// // </div>

// //           {/* Right Card */}
// //           <div className="bg-white rounded-[30px] p-10 shadow-2xl">
// //             <div className="text-center text-[#2E3192]">
// //               <div className="text-6xl">🏆</div>
// //             </div>

// //             <div className="mt-8 divide-y divide-gray-200">
// //               {[
// //                 'NO.1 PRODUCT',
// //                 'DURABLE THAN PAPER',
// //                 'WATER PROOF',
// //                 'PROTECT YOUR BOOKS',
// //               ].map((feature) => (
// //                 <div key={feature} className="py-5 text-center">
// //                   <p className="text-[#2E3192] font-bold text-lg">
// //                     {feature}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Products */}
// //       <section id="products" className="py-20 px-6 bg-white">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-center text-5xl font-black text-[#2E3192]">
// //             OUR PRODUCTS
// //           </h2>

// //           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
// //             {products.map((product, index) => (
// //               <div
// //                 key={index}
// // className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-1"              >
// //                 <div className="overflow-hidden">
// //                   <img
// //   src={product.image}
// //   alt={product.title}
// //   className="w-full h-[280px] md:h-[320px] object-cover transition duration-500 hover:scale-105"
// // />
// //                 </div>

// //                 <div className="p-6">
// //                   <h3 className="text-center text-2xl font-bold text-[#2E3192]">
// //                     {product.title}
// //                   </h3>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer
// //         id="contact"
// //         className="bg-gradient-to-r from-[#2E3192] to-[#3E42B5] py-20 px-6"
// //       >
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
// //           <FooterCard
// //             icon="📍"
// //             title="Mfg. by : SHUB IMPEX"
// //             subtitle="Plot No.4, Swaminarayan Industrial Park, Indore Highway, Amba Hotel, Ahmedabad - 382433"
// //           />

// //           <FooterCard
// //             icon="✅"
// //             title="WHY CHOOSE KITTO?"
// //             subtitle="Best Quality Products • Strong & Durable Material • Trusted by Thousands"
// //           />

// //           <FooterCard
// //             icon="📞"
// //             title="CALL US"
// //             subtitle="+91 74188 10020"
// //           />

// //           <FooterCard
// //             icon="✉️"
// //             title="EMAIL US"
// //             subtitle="nirmaljain896@gmail.com"
// //           />
// //         </div>
// //       </footer>
// //     </main>
// //   );
// // }

// // function FooterCard({
// //   icon,
// //   title,
// //   subtitle,
// // }: {
// //   icon: string;
// //   title: string;
// //   subtitle: string;
// // }) {
// //   return (
// //     <div className="border border-white/20 rounded-[24px] p-6 backdrop-blur-sm">
// //       <div className="flex items-start gap-4">
// //         <div className="text-4xl">{icon}</div>

// //         <div>
// //           <h3 className="text-white font-bold text-2xl">{title}</h3>

// //           <p className="text-white/80 mt-3 leading-7 text-base">
// //             {subtitle}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const products = [
//     {
//       title: 'BOOK COVER ROLLS',
//       image: '/images/pro1.jpeg',
//       description: 'Premium quality waterproof book cover rolls.',
//     },
//     {
//       title: 'SYNTHETIC BOOK COVER',
//       image: '/images/pro2.jpeg',
//       description: 'Durable synthetic covers for long-term use.',
//     },
//     {
//       title: 'UNBREAKABLE CLIP BOARD',
//       image: '/images/clipboard1.png',
//       description: 'Strong and reusable clip boards for students.',
//     },
//     {
//       title: 'NOTE BOOK COVER ROLL',
//       image: '/images/pro4.jpeg',
//       description: 'Stylish and protective notebook cover rolls.',
//     },
//     {
//       title: 'SCHOOL BROWN SHEET',
//       image: '/images/pro5.jpeg',
//       description: 'High-quality school brown paper rolls.',
//     },
//     {
//       title: 'PREMIUM EXAM PAD',
//       image: '/images/pro6.jpeg',
//       description: 'Heavy-duty premium exam writing pads.',
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/917418810020"
//         target="_blank"
//         className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
//       >
//         <FaWhatsapp className="text-white text-3xl" />
//       </a>

//       {/* Header */}
//       <header className="sticky top-0 z-50 bg-[#2E3192]/90 backdrop-blur-md shadow-lg">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <Link href="/" className="bg-white px-5 py-2 rounded-xl shadow-md">
//             <h1 className="text-3xl font-black text-[#2E3192] tracking-wide">
//               KITTO
//             </h1>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
//             <a href="#" className="hover:text-gray-200 transition">
//               Home
//             </a>
//             <a href="#about" className="hover:text-gray-200 transition">
//               About
//             </a>
//             <a href="#products" className="hover:text-gray-200 transition">
//               Products
//             </a>
//             <a href="#features" className="hover:text-gray-200 transition">
//               Features
//             </a>
//             <a href="#contact" className="hover:text-gray-200 transition">
//               Contact
//             </a>

//             <a
//               href="#contact"
//               className="bg-white text-[#2E3192] px-5 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
//             >
//               Get In Touch
//             </a>
//           </nav>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden text-white"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-8 h-8"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="lg:hidden bg-[#2E3192] px-6 pb-6 text-white space-y-4">
//             <a href="#" className="block">
//               Home
//             </a>
//             <a href="#about" className="block">
//               About
//             </a>
//             <a href="#products" className="block">
//               Products
//             </a>
//             <a href="#features" className="block">
//               Features
//             </a>
//             <a href="#contact" className="block">
//               Contact
//             </a>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-[#F6F6FB] to-[#ECECF8]">
//         <div className="max-w-7xl mx-auto px-6 py-24 xl:py-32 grid grid-cols-1 xl:grid-cols-3 gap-16 items-center">
//           {/* Left */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-[#2E3192] font-bold text-lg tracking-wide">
//               MANUFACTURER OF
//             </p>

//             <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-[#2E3192]">
//               Premium Book Cover Rolls & Unbreakable Clip Boards
//             </h2>

//             <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
//               KITTO manufactures premium school brown sheet rolls, waterproof
//               book covers and durable clip boards trusted by schools and
//               stationery suppliers across India.
//             </p>

//             <div className="mt-8 space-y-4">
//               {[
//                 'Premium Waterproof Material',
//                 'Strong & Durable Quality',
//                 'Trusted By Thousands',
//                 'Reusable Long Life Products',
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <div className="w-6 h-6 rounded-full bg-[#2E3192] flex items-center justify-center text-white text-sm">
//                     ✓
//                   </div>
//                   <span className="text-lg">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => {
//                 document
//                   .getElementById('products')
//                   ?.scrollIntoView({ behavior: 'smooth' });
//               }}
//               className="mt-10 bg-[#2E3192] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-xl"
//             >
//               View Products
//             </button>
//           </motion.div>

//           {/* Center Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center items-center"
//           >
//             <div className="relative w-full max-w-[500px]">
//               <div className="absolute inset-0 bg-[#2E3192]/10 rounded-[40px] blur-3xl scale-105"></div>

//               <div className="relative bg-white rounded-[32px] shadow-2xl p-6">
//                 <Image
//                   src="/images/clipboard1.png"
//                   alt="KITTO Unbreakable Clipboard"
//                   width={600}
//                   height={700}
//                   className="w-full h-auto object-contain rounded-[24px]"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white rounded-[30px] p-10 shadow-2xl"
//           >
//             <div className="text-center text-[#2E3192]">
//               <div className="text-6xl">🏆</div>
//             </div>

//             <div className="mt-8 divide-y divide-gray-200">
//               {[
//                 'NO.1 QUALITY PRODUCT',
//                 'DURABLE THAN PAPER',
//                 '100% WATER PROOF',
//                 'PROTECT YOUR BOOKS',
//               ].map((feature) => (
//                 <div key={feature} className="py-5 text-center">
//                   <p className="text-[#2E3192] font-bold text-lg">
//                     {feature}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-5xl font-black text-[#2E3192]">
//               About KITTO
//             </h2>

//             <p className="mt-6 text-lg leading-8 text-gray-700">
//               KITTO is a trusted manufacturer of premium book cover rolls,
//               school brown sheet rolls and unbreakable clip boards. We provide
//               durable, waterproof and long-lasting stationery products trusted
//               by schools, wholesalers and retailers across India.
//             </p>

//             <div className="mt-10 grid grid-cols-2 gap-6">
//               <div className="bg-[#F6F6FB] p-6 rounded-2xl text-center">
//                 <h3 className="text-4xl font-black text-[#2E3192]">5000+</h3>
//                 <p className="mt-2 text-gray-700">Happy Customers</p>
//               </div>

//               <div className="bg-[#F6F6FB] p-6 rounded-2xl text-center">
//                 <h3 className="text-4xl font-black text-[#2E3192]">10+</h3>
//                 <p className="mt-2 text-gray-700">Years Experience</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <Image
//               src="/images/pro2.jpeg"
//               alt="Premium Book Cover Roll"
//               width={700}
//               height={700}
//               className="rounded-[32px] shadow-2xl w-full"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Products */}
//       <section id="products" className="py-24 px-6 bg-[#F8F9FF]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <h2 className="text-5xl font-black text-[#2E3192]">
//               OUR PRODUCTS
//             </h2>

//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore our premium range of school and stationery products built
//               with durability, protection and long-lasting quality.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//             {products.map((product, index) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 key={index}
//                 className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#2E3192]"
//               >
//                 <div className="overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={600}
//                     height={600}
//                     className="w-full h-[280px] md:h-[320px] object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-center text-2xl font-bold text-[#2E3192]">
//                     {product.title}
//                   </h3>

//                   <p className="text-center text-gray-600 mt-3 leading-7">
//                     {product.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-5xl font-black text-[#2E3192]">
//             WHY CHOOSE KITTO?
//           </h2>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
//             {[
//               'Premium Quality',
//               'Waterproof Material',
//               'Strong Durability',
//               'Trusted Manufacturing',
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="bg-[#F6F6FB] rounded-[28px] p-10 shadow-lg"
//               >
//                 <div className="text-5xl">⭐</div>
//                 <h3 className="mt-6 text-2xl font-bold text-[#2E3192]">
//                   {item}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 px-6 bg-gradient-to-r from-[#2E3192] to-[#3E42B5] text-center text-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-5xl font-black leading-tight">
//             Ready To Order Premium School Products?
//           </h2>

//           <p className="mt-6 text-xl text-white/80 leading-8">
//             Contact KITTO today for premium quality book cover rolls,
//             waterproof stationery products and durable clip boards.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
//             <a
//               href="tel:+917418810020"
//               className="bg-white text-[#2E3192] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
//             >
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/917418810020"
//               target="_blank"
//               className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#2E3192] transition"
//             >
//               WhatsApp Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer
//         id="contact"
//         className="bg-[#1E1F6B] py-20 px-6 text-white"
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
//           <FooterCard
//             icon="📍"
//             title="Address"
//             subtitle="Plot No.4, Swaminarayan Industrial Park, Indore Highway, Ahmedabad - 382433"
//           />

//           <FooterCard
//             icon="📞"
//             title="Call Us"
//             subtitle="+91 74188 10020"
//           />

//           <FooterCard
//             icon="✉️"
//             title="Email"
//             subtitle="nirmaljain896@gmail.com"
//           />

//           <div>
//             <h3 className="text-3xl font-black">KITTO</h3>

//             <p className="mt-4 text-white/70 leading-7">
//               Premium manufacturer of waterproof book cover rolls and durable
//               school stationery products.
//             </p>

//             <div className="flex items-center gap-4 mt-6 text-2xl">
//               <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />
//               <FaFacebookF className="hover:text-blue-400 cursor-pointer transition" />
//               <FaWhatsapp className="hover:text-green-400 cursor-pointer transition" />
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60">
//           © 2026 KITTO. All Rights Reserved.
//         </div>
//       </footer>
//     </main>
//   );
// }

// function FooterCard({
//   icon,
//   title,
//   subtitle,
// }: {
//   icon: string;
//   title: string;
//   subtitle: string;
// }) {
//   return (
//     <div className="border border-white/10 rounded-[24px] p-6 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300">
//       <div className="flex items-start gap-4">
//         <div className="text-4xl">{icon}</div>

//         <div>
//           <h3 className="text-white font-bold text-2xl">{title}</h3>

//           <p className="text-white/80 mt-3 leading-7 text-base">
//             {subtitle}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    {
      title: 'BOOK COVER ROLLS',
      image: '/images/pro1.jpeg',
      description:
        'Premium waterproof book cover rolls for schools and stationery stores.',
    },
    {
      title: 'SYNTHETIC BOOK COVER',
      image: '/images/pro2.jpeg',
      description:
        'Durable synthetic covers with long-lasting protection.',
    },
    {
      title: 'UNBREAKABLE CLIP BOARD',
      image: '/images/clipboard1.png',
      description:
        'Strong and reusable clip boards designed for students.',
    },
    {
      title: 'NOTE BOOK COVER ROLL',
      image: '/images/pro4.jpeg',
      description:
        'Stylish notebook protection with premium quality material.',
    },
    {
      title: 'SCHOOL BROWN SHEET',
      image: '/images/pro5.jpeg',
      description:
        'High-quality school brown sheet rolls for daily usage.',
    },
    {
      title: 'PREMIUM EXAM PAD',
      image: '/images/pro6.jpeg',
      description:
        'Heavy-duty exam pads with durable and strong material.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917418810020"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2E3192]/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="bg-white px-5 py-2 rounded-xl shadow-md"
          >
            <h1 className="text-3xl font-black text-[#2E3192] tracking-wide">
              KITTO
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#features">Features</a>
            <a href="#business">Business</a>
            <a href="#contact">Contact</a>

            <a
              href="#contact"
              className="bg-white text-[#2E3192] px-5 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#2E3192] text-white px-6 pb-6 space-y-4">
            <a href="#" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#products" className="block">Products</a>
            <a href="#features" className="block">Features</a>
            <a href="#business" className="block">Business</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6FB] to-[#ECECF8]">
        <div className="max-w-7xl mx-auto px-6 py-24 xl:py-32 grid grid-cols-1 xl:grid-cols-3 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-[#2E3192] font-bold text-lg tracking-wide">
              MANUFACTURER OF
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-[#2E3192]">
              Premium Book Cover Rolls &
              <br />
              Unbreakable Clip Boards
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              SHUB IMPEX manufactures premium waterproof school book
              cover rolls, brown sheet rolls and durable clip boards
              trusted by schools and stationery suppliers across India.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Premium Waterproof Material',
                'Strong & Durable Products',
                'Trusted By Schools',
                'Long Lasting Quality',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2E3192] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>

                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                document
                  .getElementById('products')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-10 bg-[#2E3192] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition duration-300 shadow-xl"
            >
              View Products
            </button>
          </div>

          {/* Center Image */}
          {/* <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[500px]">

              <div className="absolute inset-0 bg-[#2E3192]/10 rounded-[40px] blur-3xl scale-105"></div>

              <div className="relative bg-white rounded-[32px] shadow-2xl p-6">
                <Image
                  src="/images/clipboard1.png"
                  alt="KITTO Unbreakable Clipboard"
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain rounded-[24px]"
                  priority
                />
              </div>
            </div>
          </div> */}

          {/* Right Card */}
          <div className="bg-white rounded-[30px] p-10 shadow-2xl">
            <div className="text-center text-[#2E3192] text-6xl">
              🏆
            </div>

            <div className="mt-8 divide-y divide-gray-200">
              {[
                'NO.1 QUALITY PRODUCT',
                '100% WATERPROOF',
                'DURABLE THAN PAPER',
                'PREMIUM MANUFACTURING',
              ].map((feature) => (
                <div key={feature} className="py-5 text-center">
                  <p className="text-[#2E3192] font-bold text-lg">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-black text-[#2E3192]">
              About SHUB IMPEX
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              SHUB IMPEX is a trusted manufacturer and supplier of
              premium book cover rolls, waterproof stationery products
              and durable unbreakable clip boards under the brand
              name KITTO.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Based in Ahmedabad, Gujarat, we provide high-quality
              stationery products trusted by schools, wholesalers
              and retailers across India.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="bg-[#F6F6FB] p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-black text-[#2E3192]">
                  5000+
                </h3>

                <p className="mt-2 text-gray-700">
                  Happy Customers
                </p>
              </div>

              <div className="bg-[#F6F6FB] p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-black text-[#2E3192]">
                  10+
                </h3>

                <p className="mt-2 text-gray-700">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/pro2.jpeg"
              alt="Premium Book Cover Roll"
              width={700}
              height={700}
              className="rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="py-24 px-6 bg-[#F8F9FF]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-black text-[#2E3192]">
              OUR PRODUCTS
            </h2>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premium range of school and stationery
              products built with durability and quality.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#2E3192]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={600}
                    className="w-full h-[320px] object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-center text-2xl font-bold text-[#2E3192]">
                    {product.title}
                  </h3>

                  <p className="text-center text-gray-600 mt-3 leading-7">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-black text-[#2E3192]">
            WHY CHOOSE KITTO?
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              'Premium Quality',
              'Waterproof Material',
              'Strong Durability',
              'Trusted Manufacturing',
            ].map((item) => (
              <div
                key={item}
                className="bg-[#F6F6FB] rounded-[28px] p-10 shadow-lg"
              >
                <div className="text-5xl">⭐</div>

                <h3 className="mt-6 text-2xl font-bold text-[#2E3192]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section
        id="business"
        className="py-24 px-6 bg-[#F8F9FF]"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <h2 className="text-5xl font-black text-[#2E3192]">
              BUSINESS INFORMATION
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Official business and GST registration details.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-[28px] p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#2E3192]">
                Company Details
              </h3>

              <div className="mt-6 space-y-4 text-gray-700 leading-8">
                <p>
                  <strong>Legal Name:</strong>
                  {' '}NIRMAL JAYANTILAL JAIN
                </p>

                <p>
                  <strong>Trade Name:</strong>
                  {' '}SHUB IMPEX
                </p>

                <p>
                  <strong>Business Type:</strong>
                  {' '}Proprietorship
                </p>

                <p>
                  <strong>GST Number:</strong>
                  {' '}24AGWPJ3473C1ZB
                </p>

                <p>
                  <strong>Registration Type:</strong>
                  {' '}Regular
                </p>

                <p>
                  <strong>State:</strong>
                  {' '}Gujarat
                </p>
              </div>
            </div>

            <div className="bg-white rounded-[28px] p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-[#2E3192]">
                Registered Address
              </h3>

              <div className="mt-6 text-gray-700 leading-8">
                <p>
                  Plot No. 4,
                  Swaminarayan Industrial Park,
                  Indore Highway,
                  Near Amba Hotel,
                  Chandial,
                  Ahmedabad,
                  Gujarat - 382433
                </p>

                <p className="mt-4">
                  <strong>Validity:</strong>
                  {' '}From 18/12/2025
                </p>

                <p>
                  <strong>Proprietor:</strong>
                  {' '}NIRMAL JAYANTILAL JAIN
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold text-green-700">
              GST Registered Business
            </h3>

            <p className="mt-3 text-gray-700">
              GSTIN: 24AGWPJ3473C1ZB
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#2E3192] to-[#3E42B5] text-center text-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-black leading-tight">
            Ready To Order Premium School Products?
          </h2>

          <p className="mt-6 text-xl text-white/80 leading-8">
            Contact KITTO today for premium quality book cover rolls,
            waterproof stationery products and durable clip boards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <a
              href="tel:+917418810020"
              className="bg-white text-[#2E3192] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917418810020"
              target="_blank"
              className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#2E3192] transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#1E1F6B] py-20 px-6 text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          <FooterCard
            icon="📍"
            title="SHUB IMPEX"
            subtitle="Plot No. 4, Swaminarayan Industrial Park, Indore Highway, Ahmedabad - 382433"
          />

          <FooterCard
            icon="📞"
            title="Call Us"
            subtitle="+91 74188 10020"
          />

          <FooterCard
            icon="✉️"
            title="Email"
            subtitle="nirmaljain896@gmail.com"
          />

          <div>
            <h3 className="text-3xl font-black">
              KITTO
            </h3>

            <p className="mt-4 text-white/70 leading-7">
              Premium manufacturer of waterproof book cover rolls
              and durable stationery products in India.
            </p>

            <div className="flex items-center gap-4 mt-6 text-2xl">
              <FaInstagram />
              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60">
          © 2026 KITTO | SHUB IMPEX. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

function FooterCard({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border border-white/10 rounded-[24px] p-6 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300">
      <div className="flex items-start gap-4">

        <div className="text-4xl">
          {icon}
        </div>

        <div>
          <h3 className="text-white font-bold text-2xl">
            {title}
          </h3>

          <p className="text-white/80 mt-3 leading-7 text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}