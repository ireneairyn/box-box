import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function AboutPage() {
  const handleBackClick = () => {
    router.push("/");
  };
  const handleImageClick = () => {
    router.push("/");
  };

  const router = useRouter();

  return (
    <>
      <div className="errorContent">
        <h1>ERROR!</h1>
        <h2>Sorry, wrong box!</h2>

        <div className="errorBox" onClick={handleImageClick}>
          <Image
            src="/box-404.png"
            alt="box error"
            width={400}
            height={400}
          />
        </div>
        <div className="backButton">
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
