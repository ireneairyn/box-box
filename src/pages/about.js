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
      <div className="aboutContent">
        <h1>How it works</h1>
        <div className="aboutMove">
          <h3>Choose your moves!</h3>
          <p className="highlight">
            Click on the corner of each cell to choose the move.
          </p>
          <div className="dottedLine"></div>
          <p>
            Each round has 8 moves. You can choose from the most common ones:
            JAB, CROSS, HOOK, UPPER, ELBOW, LOW kick, MIDDLE kick, SLIP, WEAVE
            and STEP
          </p>

          <p>
            Or some of the least common moves: rock BACK, FRONT kick, back KICK.
          </p>
        </div>

        <div className="aboutColour">
          <h3>Add some colour!</h3>
          <p className="highlight">
            Double click on the cell to change the colour.
          </p>
          <div className="dottedLine"></div>
          <p>
            By default, blue is used for moves with your dominant hand (the one you use for JAB) and
            red with your less dominant hand (the one you use for CROSS).
          </p>
          <p>In a nutshell:</p>
          <div className="handed">
            <Image
              src="/handed.png"
              alt="right or left handed"
              width={280}
              height={140}
            />
          </div>
          <p>We use grey for moves like ROCK BACK or STEP FORWARD/BACKWARD.</p>
        </div>
        <div className="aboutPlay">
          <h3>Play each round!</h3>
          <p className="highlight">Each round is 2 minutes long.</p>
          <div className="dottedLine"></div>
          <p>
            For a full training sesion there are 8 rounds. The basic rounds are
            1, 2, 4 and 5.
          </p>
          <p>
            Round 3 is the combination of R1 and R2 and Round 6 is the
            combination of R4 and R5.
          </p>
          <p>
            The final two rounds are the combination of all previous original
            rounds.
          </p>
          <p>R7 & R8 = R3 + R6</p>
          <p>
            As reference, in these final rounds you will have to repeat the
            challenge routine a total of 8 times in 2 minutes!{" "}
          </p>
        </div>
        <div className="backButton">
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
