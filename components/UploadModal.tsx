import { useState } from "react";
import { useRouter } from "next/navigation";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LANGUAGES = [
  { code: "ar", name: "العربية" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "pt", name: "Português" },
  { code: "ru", name: "Русский" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "hi", name: "हिन्दी" },
  { code: "tr", name: "Türkçe" },
  { code: "nl", name: "Nederlands" },
  { code: "pl", name: "Polski" },
];

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const router = useRouter();

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoUrl,
          targetLanguage: selectedLanguage,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        router.push(`/translation/${data.id}`);
      } else {
        throw new Error("Translation failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error - show error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setIsLoading(true);
    try {
      const formData = new FormData();

      formData.append("video", file);
      formData.append("targetLanguage", selectedLanguage);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        router.push(`/translation/${data.id}`);
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error - show error message
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upload Video</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {/* Language Selection */}
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Target Language
            </label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* URL Input */}
          <form className="space-y-4" onSubmit={handleUrlSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="videoUrl"
              >
                Video URL
              </label>
              <input
                id="videoUrl"
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter video URL"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Processing..." : "Submit URL"}
            </button>
          </form>

          {/* File Upload */}
          <div className="relative">
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <input
                accept="video/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isLoading}
                type="file"
                onChange={handleFileUpload}
              />
              <div className="space-y-2">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-blue-600 hover:text-blue-500">
                    Upload a video
                  </span>{" "}
                  or drag and drop
                </div>
                <p className="text-xs text-gray-500">MP4, MOV up to 100MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
