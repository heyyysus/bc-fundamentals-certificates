"use client"

import { FC } from 'react';
import { CldImage } from "next-cloudinary";
import Image from 'next/image';

export interface CertificateProps {
  name: string;
  certificateId: string,
};

export const Certificate: FC<CertificateProps> =  ({ name, certificateId }) => {
    return (<>
    
    <div
  className="leading-7 text-center bg-white bg-no-repeat bg-none border border-solid md:text-left border-neutral-500 text-zinc-700"
  style={{margin: "1%", boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", padding: "8% 4% 4%"}}
>
  <div className="flex flex-wrap mx-0 text-left">
    <div
      className="block relative p-0 mt-2 mb-0 w-full text-4xl font-light uppercase text-slate-900 md:inline-block md:flex-shrink-0 md:flex-grow-0 md:basis-1/2 md:align-middle"
      style={{lineHeight: 1.1}}>
      {/* <img
        src="https://edxuploads.s3.amazonaws.com/certificate_template_assets/122/verified-certificate-logo.svg"
        className="w-64 uppercase align-middle border-none md:w-64 lg:w-64"
        style={{lineHeight: "44px"}}
      /> */}
      {/* <CldImage
              width={300}
              height={300}
              quality={100}
              src={`logos/hero`}
              alt="Blockchain @ UCSB logo"
              priority
            /> */}
      <Image
        src="/logos/logo.png"
        alt="Blockchain @ UCSB logo"
        width={300}
        height={300}
        />
        {/* ISSUE WITH IMAGE QUALITY */}
      <span className="uppercase sr-only" style={{lineHeight: "44px"}}>
        Verified Certificate
    </span>
    </div>

    <div
      className="relative p-0 my-6 w-full text-center md:mt-0 md:mb-12 md:inline-block md:flex-shrink-0 md:flex-grow-0 md:basis-1/2 md:text-right md:align-middle"
    >
      <h3
        className="text-xl font-bold leading-tight text-right sr-only text-slate-900"
      >
        Supported by the following organizations
      </h3>
      <ul className="pl-0 mt-0 mb-4 text-right" style={{listStyle: "none"}}>
        <li className="text-zinc-700" style={{listStyle: "outside none none"}}>
          <div className="" style={{listStyle: "outside none none"}}>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="flex flex-wrap mx-0 text-left">
    <div
      className="relative px-0 pt-12 pb-6 mt-0 mb-12 w-full border-b border-solid lg:inline-block lg:flex-shrink-0 lg:flex-grow-0 lg:border-0 lg:align-middle border-neutral-500"
    >
      <p className="mt-0 mb-4 text-zinc-700">
        <span
          className="block mx-0 mt-0 mb-6 text-sm leading-normal md:text-lg text-neutral-500"
          >This is to certify that</span
        >
        <strong
          className="block mx-0 mt-0 mb-6 text-3xl font-semibold md:text-4xl"
          style={{lineHeight : 1.2}}>{ name }</strong>
        <span
          className="block mx-0 mt-0 mb-6 text-sm leading-normal md:text-lg text-neutral-500"
          >successfully completed and received a passing grade in</span
        >

        <span
          className="block mx-0 mt-0 mb-6 text-xl font-semibold md:text-3xl"
          style={{lineHeight: "1.2"}}
        >
          <span className="text-3xl leading-8">Blockchain Fundamentals</span>
        </span>

        <span
          className="block mx-0 mt-0 mb-6 text-sm leading-normal md:text-lg text-neutral-500"
          >a course of study offered by Blockchain@UCSB, a student led organization at the University of California, Santa Barbara</span>
      </p>
    </div>
    <div
      className="relative px-0 pb-6 w-full border-b border-solid lg:inline-block lg:flex-shrink-0 lg:flex-grow-0 lg:border-b-0 lg:pb-0 lg:text-right lg:align-top border-neutral-500"
    >
      <h3
        className="text-xl font-bold leading-tight text-right sr-only text-slate-900"
      >
        Noted by
      </h3>
      <div className="text-right">
        <div className="flex text-zinc-700" style={{flexFlow: "row wrap"}}>
          <div className="mx-0 mt-0 mb-2 w-full md:w-1/2">
            {/* Signature goes here */ }
            <h4
              className="mt-0 mb-2 text-sm font-semibold"
              style={{lineHeight: 1.6}}
            >
              Instructor Name 1
            </h4>
            <p className="mt-0 mb-4 text-xs leading-normal text-neutral-500">
              <span className="leading-4 whitespace-pre-line"
                >Blockchain @ UCSB, Lead Instructor</span
              >
              <span className="block mt-1 italic leading-4"
                >University of California, Santa Barbara</span
              >
            </p>
          </div>
          <div className="m-0 w-full md:w-1/2">
            {/* Signature goes here */ }
            <h4
              className="mt-0 mb-2 text-sm font-semibold"
              style={{lineHeight: 1.6}}
            >
              Instructor Name 2
            </h4>
            <p className="mt-0 mb-4 text-xs leading-normal text-neutral-500">
              <span className="leading-4 whitespace-pre-line"
                >Blockchain @ UCSB, Instructor</span
              >
              <span className="block mt-1 italic leading-4"
                >University of California, Santa Barbara</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-12 text-left">
    <ul className="pl-0 mt-0 mb-4 whitespace-nowrap" style={{listStyle: "none"}}>
      <li
        className="mb-4 lg:mr-6 lg:mb-2 lg:inline-block lg:align-middle"
        style={{listStyle: "outside none none"}}
      >
        <a
          className="p-0 bg-transparent cursor-pointer text-slate-900 hover:border-b-0 hover:text-zinc-700 focus:border-b-0"
          href="http://edx.org"
          style={{textDecoration: "none", listStyle: "outside none none"}}
        >
        </a>
      </li>
      <li
        className="mb-2 lg:mr-6 lg:inline-block lg:align-middle"
        style={{listStyle: "outside none none"}}
      >
        <span
          className="block mb-0 text-xs font-semibold tracking-wide leading-normal text-gray-500"
          style={{listStyle: "outside none none"}}
          >Verified Certificate</span>
        <span
          className="block text-xs font-bold leading-normal text-gray-500"
          style={{listStyle: "outside none none"}}
          >Issued June 4, 2022</span> {/* TODO: Change Date. Possibly make it a prop */}
      </li>
      <li
        className="mb-2 lg:mr-6 lg:inline-block lg:align-middle"
        style={{listStyle: "outside none none"}}
      >
        <span
          className="block mb-0 text-xs font-semibold tracking-wide leading-normal text-gray-500"
          style={{listStyle: "outside none none"}}
          >Certificate ID</span>
        <span
          className="block text-xs font-bold leading-normal text-gray-500"
          style={{listStyle: "outside none none"}}
          ><a
            href="https://courses.edx.org/certificates/cacb10803c064e24b18f8a4f9d5c62b2"
            className="leading-4 bg-transparent cursor-pointer text-slate-900 hover:text-zinc-700"
            style={{textDecoration: "none", listStyle: "outside none none"}}>{certificateId}</a></span>
      </li>
    </ul>
  </div>
</div>


    </>);
};