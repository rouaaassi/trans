"use client";

import { useEffect, useState } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";

import UploadModal from "@/components/UploadModal";
import { LoginModal } from "@/components/LoginModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [tonConnectUI] = useTonConnectUI();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && tonConnectUI.connected) {
      setWalletAddress(tonConnectUI.account?.address || "");
    }
  }, [isMounted, tonConnectUI.connected, tonConnectUI.account?.address]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to TransLive</h1>
        <p className="mt-4 text-lg">
          Upload your video or enter a stream URL to get started
        </p>
        <div className="mt-8 flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsUploadModalOpen(true)}
          >
            Upload Video
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </section>
  );
}
