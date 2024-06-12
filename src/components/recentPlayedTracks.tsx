"use client";

import React, { useEffect } from "react";
import { Section } from "./ui/section";
import axios from "axios";

interface Props {
  userName: string;
  api_key: string;
}

function RecentPlayedTracks({ userName, api_key }: Props) {
  const [tracks, setTracks] = React.useState<any[]>([]);
  const getRecentPLayedTracks = async () => {
    const response = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${api_key}&format=json&limit=5`,
    );
    if (response.status === 200) {
      setTracks(response?.data?.recenttracks?.track);
    }
  };
  useEffect(() => {
    getRecentPLayedTracks();
  }, []);

  return (
    <Section className="print-force-new-page scroll-mb-16 print:hidden">
      <h2 className="text-xl font-bold">Random Section</h2>
      <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
        I listen to music alot while coding. Here are some of the tracks I
        recently listened to:
      </p>
      <div className="">
        <ul className="divide-y divide-gray-800">
          {tracks?.length > 0 &&
            tracks.map((track, index) => (
              <li key={index} className="hover:bg-gray-850 grid grid-cols-[40px_2fr_1fr] items-center gap-4 px-3 py-2 transition-colors">
                <img
                  src={track?.image[2]["#text"]}
                  alt="Album Art"
                  width={38}
                  height={38}
                  className="rounded"
                />
                <div>
                  <h3 className="text-sm font-medium">{track?.name}</h3>
                  <p className="text-xs text-gray-400">
                    {track?.artist["#text"]}
                  </p>
                </div>
                <p className="text-end text-xs text-gray-400">
                  {track?.date?.["#text"]
                    ? track?.date?.["#text"]
                    : "Currently Listening..."}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
}

export default RecentPlayedTracks;
