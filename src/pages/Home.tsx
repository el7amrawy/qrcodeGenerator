import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  const [text, setText] = useState("");
  const spanRef = useRef(null);

  useEffect(() => {
    const span = spanRef.current as unknown as HTMLElement;
    if (text.length) {
      span.classList.add("hidden");
    } else {
      span.classList.remove("hidden");
    }
  }, [text]);
  return (
    <>
      <NavBar />
      <main className=" bg-violet-100 flex font-sans">
        <section className="py-10 w-4/5 mx-auto flex justify-between">
          <div className="rounded-xl px-7 py-10 overflow-hidden bg-white w-[45%] h-64 relative flex items-center">
            <textarea
              className=" w-full resize-none outline-none font-bold text-2xl h-24 max-h-32  text-gray-400 placeholder:text-gray-400 "
              placeholder="Enter your website or text here "
              value={text}
              onChange={(ev) => {
                setText(ev.target.value);
              }}
            />
            <span
              className=" text-gray-400 text-xs absolute top-[115px] left-7"
              ref={spanRef}
            >
              (Your QR Code will be generated automatically)
            </span>
          </div>
          <div className="bg-white rounded-xl w-[45%]">
            {/* <img src="#" /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
