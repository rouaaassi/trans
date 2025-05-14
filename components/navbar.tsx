"use client";

import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";

import axiosInstance from "@/lib/axiosInstance";
import { BACKEND_ROUTES } from "@/config/backendRoutes";
import { Logo } from "@/components/icons";
import { LoginModal } from "@/components/LoginModal";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

interface NavItem {
  title: string;
  href: string;
}

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");

        return;
      }

      const response = await axiosInstance.post(BACKEND_ROUTES.users, {
        email,
        password,
      });

      if (response.data) {
        setIsLoginModalOpen(false);
        toast.success("Account created successfully!");
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error("Error creating account:", error);
      setError(
        error.response?.data?.message ||
          "Failed to create account. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await axiosInstance.post(BACKEND_ROUTES.login, {
        email,
        password,
      });

      if (response.data) {
        setIsLoginModalOpen(false);
        toast.success("Logged in successfully!");
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error("Error logging in:", error);
      setError(
        error.response?.data?.message || "Failed to log in. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NextLink href="/">
                <Logo className="text-white" />
              </NextLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {siteConfig.mainNav.map((item: NavItem, index: number) => (
                  <NextLink
                    key={index}
                    className={clsx(
                      "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                      pathname === item.href && "bg-gray-900 text-white",
                    )}
                    href={item.href}
                  >
                    {item.title}
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeSwitch />
              <button
                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {siteConfig.mainNav.map((item: NavItem, index: number) => (
            <NextLink
              key={index}
              className={clsx(
                "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
                pathname === item.href && "bg-gray-900 text-white",
              )}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </NextLink>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <ThemeSwitch />
              <button
                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
              >
                Sign In
              </button>
            </div>
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
