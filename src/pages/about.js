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
      <div className="aboutContent">
        <h1>Instructions</h1>
        <div className="aboutMove">
          <h3>Choose your moves!</h3>
          <p>Click on the corner of each cell to choose the move.</p>
          <p>
            Each round has 8 moves, you can choose from the most common ones:
            JAB, CROSS, HOOK, UPPER, LOW kick, MIDDLE kick, SLIP, WEAVE, STEP
          </p>

          <p>
            Or some of the least common moves: rock BACK, FRONT kick, back KICK.
          </p>
        </div>

        <div className="aboutColour">
          <h3>Add some colour!</h3>
          <p>Double click on the cell to change the colour.</p>
          <p>
            By default blue is used for moves that use your non-dominant hand
            and red for your dominant hand.
          </p>
          <p>So, if you are a righty Blue = Left hand and Red = Right hand.</p>
          <p>We use grey for moves like ROCK BACK or STEP FORWARD/BACKWARD.</p>
        </div>
        <div className="aboutPlay">
          <h3>Play each round!</h3>
          <p>Each round is 2 minutes long.</p>
          <p>
            For a full training sesion there are 8 rounds. Basic rounds are 1,
            2, 4 and 5.
          </p>
          <p>Round 3 = R1 + R2 and Round 6 = R4 + R5</p>
          <p>
            And you guessed it, the final two rounds are the combination of all
            previous original rounds.
          </p>
          <p>R7 & R8 = R3 + R6</p>
          <p>or, if you prefer:</p>
          <p>R7 & R8 = R1 + R2 + R4 + R5</p>
          <p>
            As reference, in these final rounds you will have to repeat the
            challenge routine a total of 8 times!{" "}
          </p>
        </div>
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
