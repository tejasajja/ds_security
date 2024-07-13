
"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

// Type definitions
interface ImageSectionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ListItemProps {
  href?: string;
  children: React.ReactNode;
}

// Component for Image and Description
const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, width, height }) => (
  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
    <Image src={src} alt={alt} className="max-w-5xl md:max-w-none h-auto" width={width} height={height} />
  </div>
);

// Component for the List Items
const ListItem: React.FC<ListItemProps> = ({ href, children }) => (
  <li className="flex items-center mb-2">
    {href ? (
      <a href={href} className="flex items-center">
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>{children}</span>
      </a>
    ) : (
      <>
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <span>{children}</span>
      </>
    )}
  </li>
);

const FormField: React.FC<{ name: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; className?: string }> = ({ name, placeholder, value, onChange, className }) => (
  <div className="flex items-center space-x-4 my-6">
    <Input name={name} placeholder={placeholder} value={value} onChange={onChange} className={`rounded-xl w-full ${className}`} />
  </div>
);

export default function Alpha() {
  const { data: session } = useSession();
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");
  const [key1Class, setKey1Class] = useState("");
  const [key2Class, setKey2Class] = useState("");

  const handleCheck = async () => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: 'beerus',  
        key1: !!key1,
        key2: !!key2,
      }),
    });

    const result = await response.json();

    if (response.ok && result.task) {
      if (key1 && result.task.key1 === key1) {
        setKey1Class("border-green-500");
      } else {
        setKey1Class("border-red-500");
      }

      if (key2 && result.task.key2 === key2) {
        setKey2Class("border-green-500");
      } else {
        setKey2Class("border-red-500");
      }
    } else {
      setKey1Class("border-red-500");
      setKey2Class("border-red-500");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session?.user?.id) {
      console.error("User is not authenticated");
      return;
    }

    const response = await fetch('/api/submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId: 'beerus',  // Replace with actual task ID
        userId: session.user.id, // Use session user ID
        key1,
        key2,
      }),
    });

    const result = await response.json();

    if (response.ok && result.submission) {
      alert('Submission successful');
    } else {
      alert('Submission failed');
    }
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto text-center my-32">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl">Beerus</h1>
          <p className="leading-7 [&:not(:first-child)]:mt-16 text-2xl">
          Dive into the digital depths with this specially crafted vulnerable machine. Explore a landscape rich with complex vulnerabilities designed to test your hacking abilities to the fullest. Your mission is to maneuver through layered security measures, exploit the system, and extract the hidden flag. Sharpen your penetration skills and ethical hacking knowledge in this immersive and challenging environment.
          </p>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-6 items-center my-32">
          {/* Image */}
          <ImageSection src="https://ds-security-web.s3.amazonaws.com/ui/media/images/beerus.png" alt="beerus Image" width={540} height={405} />
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
            <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <Link href={session?.user ? "https://drive.proton.me/urls/KHBQ74705M#zSkENqj3Pbqr" :"/signin"} target={session?.user ? "_blank" : ""}>
                  {/* <FileDownloadRoundedIcon /> */}
                  <div className="font-e text-4xl font-bold text-purple-600 mb-2">No Sweat</div>
                  <h3 className="h3 mb-3">Click to download
                  <FaDownload className=""/>
              </h3>
                </Link>
              
              <p className="leading-7 text-2xl mr-56 mb-3 [&:not(:first-child)]:mt-6">Download the OVA file, import it into our virtual machine environment, start the machine, and run</p>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xl font-semibold">nmap -sn (your-ip-subnet)`</code>
              {session?.user && (
                <p className="text-2xl font-bold text-green-400 my-4">Password: dssecurity</p>
              )}
              <ul className="text-lg text-gray-200 -mb-2">
                <ListItem>Linux</ListItem>
                <ListItem href="alpha/walkthrough">Walkthrough (coming soon)</ListItem>
                <ListItem href="beerus/vulnexp">Vulnerabilities explained (coming soon)</ListItem>
              </ul>
            </div>
          </div>
        </div>

        {session?.user && (<Card className="flex flex-col md:flex-row items-center h-rounded-3xl bg-black border border-slate-700 p-6 my-20 w-1/3">
          <CardContent className="w-full">
            <div className="text-left m-4 w-full">
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white">
                Submit Your Results
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <FormField name="key1" placeholder="Key 1" value={key1} onChange={(e) => setKey1(e.target.value)} className={key1Class} />
                <FormField name="key2" placeholder="Key 2" value={key2} onChange={(e) => setKey2(e.target.value)} className={key2Class} />
                <Button type="button" name="check" onClick={handleCheck} className="text-white bg-blue-500 hover:bg-blue-700 rounded-xl w-full">
                  Check
                </Button>
                <div className="flex">
                  <Button type="submit" onClick={handleCheck} className="text-white bg-green-500 hover:bg-green-700 rounded-xl w-full">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>)}
      </div>
    </section>
  );
}