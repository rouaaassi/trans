"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTonConnectUI } from "@tonconnect/ui-react";

import { LoginModal } from "./LoginModal";

export const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [tonConnectUI] = useTonConnectUI();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link className="text-xl font-bold text-blue-600" href="/">
                TransLive
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isMounted && tonConnectUI.connected ? (
              <span className="text-gray-600">
                Connected: {tonConnectUI.account?.address.slice(0, 6)}...
                {tonConnectUI.account?.address.slice(-4)}
              </span>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </nav>
  );
};
