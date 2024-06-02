"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { subtitle, title } from "@/components/primitives";
import { BACKEND_ROUTES } from "@/constants";
import { axiosInstance } from "@/tools/axios";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
  const router = useRouter();

  const [streamURL, setStreamURL] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [tonconnect, setTonConnect] = useTonConnectUI();

  useEffect(() => {
    tonconnect.onStatusChange((wallet) => {
      if (wallet?.account) {
        setWalletAddress(wallet.account.address);
      }
    });
  });

  const onChangeStreamURLInput = (value: string) => {
    setStreamURL(value);
  };

  const postData = async () => {
    try {
      const response = await axiosInstance.post(BACKEND_ROUTES.streams, {
        streamURL,
        user: walletAddress,
      });
      return response.data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Could not get data");
    }
  };

  const validateStreamURL = async (streamURL: string) => {
    try {
      const response = await axiosInstance.post(BACKEND_ROUTES.validateStream, {
        streamURL,
      });

      return response.data;
    } catch (error) {
      console.error("Error retrieving data:", error);
      throw new Error("Could not get data");
    }
  };

  const onClickButton = async () => {
    if (streamURL) {
      const validStreamURL = await validateStreamURL(streamURL);

      if (!validStreamURL) {
        throw new Error("Invalid Stream URL");
      }

      const hash = await postData();

      router.push(`/streams?hash=${hash}`);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Translate&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>any live streams&nbsp;</h1>
        <br />
        <h1 className={title()}>into your language.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Real-Time, Reliable, Robust.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <TonConnectButton />

        <Input label="Stream URL" onValueChange={onChangeStreamURLInput} />

        <Link
          isDisabled={!walletAddress}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          onPress={onClickButton}
        >
          TransLive
        </Link>
      </div>
    </section>
  );
}
