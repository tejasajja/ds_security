import Image from "next/image";
import Link from 'next/link';
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import { ModeToggle } from "@/components/ModeToggle";
export const metadata = {
  title: 'DS Security',
  description: 'Page description',
}

export default function Home() {
  return (
    <>
    
      <Hero />
      
      <Features />
      <Zigzag />

      {/* <ModeToggle/> */}
      {/*<Testimonials />*/}
      {/*<Newsletter />*/}
    </>
  )
}
