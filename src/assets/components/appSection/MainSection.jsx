import React, { useEffect, useState } from "react";
import "../appSection/mainSection.css";
import PostLink from "./PostLink";
const MainSection = () => {
  const [orginalUrl, setOrginalUrl] = useState();
  const [errorMassage, setErrorMassage] = useState();
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    // Load shortenedUrls from localStorage when the component mounts
    const storedUrls = JSON.parse(localStorage.getItem("shortenedData")) || [];
    setShortenedUrls(storedUrls);
    console.log(shortenedUrls)
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

        const existingData =
          JSON.parse(localStorage.getItem("shorendedData")) || [];
        existingData.push({
          originalUrl: orginalUrl,
          shortenedUrl: result.id,
        });

        localStorage.setItem("shorendedData", JSON.stringify(existingData));
      }
    } catch (err) {}
  };
  return (
    <div>
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
        {errorMassage && <p className="text-red-500">{errorMassage}</p>}
      </div>
      <PostLink data={shortenedUrls} />
    </div>
  );
};

export default MainSection;
