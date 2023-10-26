import React, { useEffect, useState } from "react";
import "../appSection/mainSection.css";
import PostLink from "./PostLink";
const MainSection = () => {
  const [orginalUrl, setOrginalUrl] = useState();
  const [errorMassage, setErrorMassage] = useState();
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("shortenedData")) || [];
    setShortenedUrls(storedUrls);
  }, []);

  const handleGenerate = async () => {
    if (!orginalUrl) {
      setErrorMassage("please enter a valid url to be shorten");
      return;
    }
    if (!orginalUrl.startsWith("https://")) {
      setErrorMassage("url must start with https:// ");
      return;
    }
    const apiUrl = "https://owo.vc/api/v2/link";

    const requestData = {
      link: orginalUrl,
      generator: "owo",
      metadata: "OWOIFY",
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const result = await response.json();
        setErrorMassage("");

        setShortenedUrls((prev) => [
          ...prev,
          { originalUrl: orginalUrl, shortenedUrl: result.id },
        ]);

        const updatedData = [
          ...shortenedUrls,
          { originalUrl: orginalUrl, shortenedUrl: result.id },
        ];

        localStorage.setItem("shortenedData", JSON.stringify(updatedData));
      } else {
        console.error("Failed to shorten url");
      }
    } catch (err) {
      console.error("an error occurred:", err);
    }
  };
  return (
    <div className="relative">
      <div className="w-full ">
        {/* link input section  */}
        <div className=" w-full flex justify-center md:mt-[-80px]  pb-16 ">
          <div className="flex flex-col md:flex-row justify-around md:px-5 md:gap-5 items-center w-[70%] h-[10rem] bg-DarkViolet rounded-xl section__bg">
            <input
              value={orginalUrl}
              onChange={(e) => setOrginalUrl(e.target.value)}
              className="bg-white w-[90%]  md-[80%] xl:w-[90%] h-[50px] rounded-lg px-4"
              type="text"
              placeholder="shorten a link here..."
            />
            <button
              onClick={handleGenerate}
              className="w-[90%]  md:w-[26%] xl:w-[26%] bg-primaryCyan h-[50px] rounded-lg"
            >
              Shorten it!
            </button>
          </div>
        </div>
        {errorMassage && (
          <div className="absolute w-full text-center ">
            <p className="text-red-500">{errorMassage}</p>
          </div>
        )}
      </div>
      {shortenedUrls.length > 0 && <PostLink data={shortenedUrls} />}
    </div>
  );
};

export default MainSection;
