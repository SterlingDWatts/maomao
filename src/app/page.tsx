"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RoyalPalace from "./assets/RoyalPalace.jpg";
import "./page.css";

export default function Home() {
  const [eventDate] = useState(new Date("July 04, 2025 13:00:00").getTime());
  const [countdownText, setCountdownText] = useState("Loading countdown...");
  const [distance, setDistance] = useState(eventDate - new Date().getTime());
  const [spoilerVisible, setSpoilerVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to update the countdown text
  const updateCountdown = () => {
    const now = new Date().getTime();
    const newDistance = eventDate - now;
    setDistance(newDistance);

    if (newDistance < 0) {
      setCountdownText("It's time!");
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    const days = Math.floor(newDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((newDistance % (1000 * 60)) / 1000);

    setCountdownText(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  };

  // Set up the countdown interval
  useEffect(() => {
    updateCountdown(); // Initial call to set the countdown text
    intervalRef.current = setInterval(updateCountdown, 1000); // Update every second

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [eventDate, updateCountdown]);

  return (
    <div className="postcard-container">
      {/* <!-- Left side of the postcard (Image/Theme) --> */}
      <div className="postcard-left relative">
        <div className="decorative-element">🌸</div>
        <div className="decorative-element-bottom">🌿</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow">The Apothecary Diaries</h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-shadow">Royal Guard</p>
        <Image
          src={RoyalPalace}
          alt="Apothecary Diaries Character Maomao With Cat Ears"
          width={168}
          height={128}
          className="w-42 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <p className="mt-4 text-sm font-medium">up next</p>
      </div>

      {/* <!-- Right side of the postcard (Invitation details) --> */}
      <div className="postcard-right">
        <p className="text-md leading-relaxed mb-4">
          Dearest 晨曦 (Chénxī),
          <br />
          <br />
          <span id="spoiler-warning" className={!spoilerVisible ? "visible" : "hidden"}>
            A new episode awaits, but be warned, the plot is thickening!
          </span>
          <span id="spoiler" className={spoilerVisible ? "visible" : "hidden"}>
            The imperial army camps in front of the fortress while Zicui contemplates a secret strategy.
          </span>
        </p>
        <button
          id="spoiler-btn"
          className={
            !spoilerVisible
              ? "visible button button-secondary mb-6 text-sm"
              : "hidden button button-secondary mb-6 text-sm"
          }
          onClick={() => setSpoilerVisible(true)}
        >
          Reveal Details
        </button>

        <div id="countdown">{countdownText}</div>

        <div className="mb-6 text-lg font-semibold text-gray-700">
          <p>When: July 4th at 1:00 PM</p>
          <p>Where: Watts Living Room</p>
        </div>

        <a
          id="watch-btn"
          href="https://www.crunchyroll.com/watch/GQJUMZWW8/royal-guard"
          target="_blank"
          className={
            distance > 0 ? "button button-secondary inline-block mb-6" : "button button-primary inline-block mb-6"
          }
        >
          {distance > 0 ? "Not Available Yet" : "Watch Now!"}
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Hope to see you there!
          <br />
          Best, 卓然 (Zhuórán)
        </p>
      </div>
    </div>
  );
}
