import { useRouter } from "next/router";
import Image from "next/image";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const hideBackground = router.pathname === "/";

  return (
    <>
      {!hideBackground && <div className="background"></div>}
      <div className="wrapper">
        {/* <div className="topLinks">
          <a
            href="https://github.com/ireneairyn/box-box"
            className="logo-link"
            target="_blank"
          >
            <Image
              src="/github-mark-white.png"
              alt="github logo"
              width={35}
              height={35}
            />
          </a>{" "}
          <a
            href="https://www.brooklynfitboxing.com"
            className="emoji-link"
            target="_blank"
          >
            🥊
          </a>
        </div> */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
