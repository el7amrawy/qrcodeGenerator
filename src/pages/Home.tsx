import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import qrcodeLogo from "../../assets/images/qr.png";
import QRCodeStyling from "qr-code-styling";
import logo from "../../assets/images/logo_150.png";

const qrcode = new QRCodeStyling({
  width: 243,
  height: 243,
  image: logo,
  imageOptions: {
    margin: 5,
    crossOrigin: "anonymous",
  },
  dotsOptions: {
    type: "extra-rounded",
    color: "#8C52FF",
  },
});

const Home = () => {
  const [text, setText] = useState("");

  const spanRef = useRef(null);
  const qrImageRef = useRef(null);
  const canvasConRef = useRef(null);

  useEffect(() => {
    const span = spanRef.current as unknown as HTMLElement;
    const qrImage = qrImageRef.current as unknown as HTMLElement;
    const canvasCon = canvasConRef.current as unknown as HTMLElement;

    qrcode.append(canvasCon);

    if (text.length) {
      span.classList.add("hidden");
      qrImage.classList.add("hidden");
      canvasCon.classList.replace("hidden", "flex");

      qrcode.update({ data: text });
    } else {
      span.classList.remove("hidden");
      qrImage.classList.remove("hidden");
      canvasCon.classList.replace("flex", "hidden");
    }
  }, [text]);

  return (
    <>
      <NavBar />
      <main className="font-sans">
        <section className="py-10 w-4/5 mx-auto flex flex-col xl:flex-row xl:items-start justify-between items-center">
          <div className="rounded-xl px-7 py-10 overflow-hidden bg-white w-full xl:w-[600px] h-64 relative flex items-center">
            <textarea
              className=" w-full resize-none outline-none font-bold sm:text-2xl h-24 max-h-32  text-gray-400 placeholder:text-gray-400 "
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
          <div className="bg-white rounded-xl  px-6 py-8 flex flex-col items-center justify-center mt-10 xl:mt-0">
            <img src={qrcodeLogo} className="opacity-50" ref={qrImageRef} />
            <div
              ref={canvasConRef}
              className="hidden items-center justify-center"
            ></div>
            <button
              onClick={async (ev) => {
                text.length
                  ? await qrcode.download({ name: "QRcode" })
                  : ev.preventDefault();
              }}
              className="inline-flex cursor-pointer mt-8 justify-center rounded-md border border-transparent bg-[#8C52FF] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#6317fc] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Download
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
