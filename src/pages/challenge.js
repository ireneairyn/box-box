import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function AboutPage() {
  const handleImageClick = () => {
    router.push("/");
  };

  const router = useRouter();

  return (
    <>
      <div className="challengeContent">
        <h1>Challenge</h1>
        <div className="aboutLogo" onClick={handleImageClick}>
          <Image
            src="/box-back.png"
            alt="box box logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
