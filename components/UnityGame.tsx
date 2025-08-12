"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";

declare global {
  function createUnityInstance(
    canvas: HTMLCanvasElement,
    config: {
      dataUrl: string;
      frameworkUrl: string;
      codeUrl: string;
      streamingAssetsUrl?: string;
      companyName?: string;
      productName?: string;
      productVersion?: string;
    },
    onProgress?: (progress: number) => void
  ): Promise<{ SetFullscreen: (flag: number) => void; Quit: () => Promise<void>; }>;
}

export const UnityGame = () => {
  const unityCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [unityInstance, setUnityInstance] = useState<{
    SetFullscreen: (flag: number) => void;
    Quit: () => Promise<void>;
  } | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let instance: { Quit: () => Promise<void> } | null = null;

    const script = document.createElement("script");
    script.src = "/Build/payleh.loader.js";
    script.onload = () => {
      if (unityCanvasRef.current && isMounted) {
        createUnityInstance(
          unityCanvasRef.current,
          {
            dataUrl: "/Build/payleh.data.unityweb",
            frameworkUrl: "/Build/payleh.framework.js.unityweb",
            codeUrl: "/Build/payleh.wasm.unityweb",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "6OFUS",
            productName: "please payleh!",
            productVersion: "1.0",
          },
          (progress) => {
            setLoadingProgress(progress);
            if (progress >= 1) {
              setTimeout(() => setShowSplash(false), 500);
            }
          }
        )
          .then((unityInstance) => {
            console.log("Unity loaded");
            setUnityInstance(unityInstance);
            instance = unityInstance;
          })
          .catch((message) => alert(message));
      }
    };

    document.body.appendChild(script);

    return () => {
      isMounted = false;
      // Cleanup Unity instance on unmount
      if (instance) {
        instance.Quit().then(() => {
          console.log("Unity instance quit");
          setUnityInstance(null);
        });
      }
      // Remove the script element to avoid duplication if remounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (orientation: landscape) and (max-width: 768px) {
          #unity-container {
            transform: rotate(90deg);
            transform-origin: left top;
            width: 100vh;
            height: 100vw;
            position: absolute;
            top: 0;
            left: 0;
          }
          body, html, #__next {
            overflow: hidden;
          }
        }
      `}</style>
      <div className="w-screen h-auto flex flex-col items-center bg-[url(/oriBg.png)] bg-cover bg-top bg-center overflow-hidden px-4 py-6 relative">
        <Navbar />
        <div
          id="unity-container"
          className="mt-40 w-full max-w-[960px] aspect-video bg-black relative"
        >
          <canvas
            id="unity-canvas"
            ref={unityCanvasRef}
            className="w-full h-full"
          ></canvas>

          {showSplash && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-10 transition-opacity duration-700">
              <h2 className="text-3xl font-bold mb-4 select-none">
                Loading...
              </h2>
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

              <div className="w-64 h-3 bg-gray-700 rounded mt-6 overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${loadingProgress * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {unityInstance && !showSplash && (
          <button
            onClick={() => unityInstance.SetFullscreen(1)}
            className="bg-white border-4 border-black px-10 py-2 rounded-2xl mx-auto shadow-orangeGlow mt-16 mb-64"
            aria-label="Go fullscreen"
          >
            Fullscreen
          </button>
        )}
      </div>
    </>
  );
};
