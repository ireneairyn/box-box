import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  const handleImageClick = () => {
    router.push("/challenge.js");
  };

  const handleCreateChallengeClick = () => {
    router.push("/challenge");
  };

  const handleInstructionsClick = () => {
    router.push("/about");
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>BOX BOX</title>
      </Head>

      <div className="content">
        <div className="title-logo" onClick={handleImageClick}>
          <Image
            src="/boxLogo.png"
            alt="box box title"
            width={200}
            height={200}
          />
        </div>
        <div className="image-logo" onClick={handleImageClick}>
          <Image src="/box.png" alt="box box logo" width={300} height={300} />
        </div>

        <div className="landingButtons">
          <button onClick={handleInstructionsClick}>How it works</button>
          <button onClick={handleCreateChallengeClick}>Create challenge</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
