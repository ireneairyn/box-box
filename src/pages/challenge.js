import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function AboutPage() {
  const handleBackClick = () => {
    router.push("/");
  };

  const router = useRouter();

  return (
    <>
      <div className="challengeContent">
        <h1>Challenge</h1>
        <div className="backButton">
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
