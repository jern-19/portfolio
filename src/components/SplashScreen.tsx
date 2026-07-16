import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({
  onFinish,
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  const container = useRef<HTMLDivElement>(null);
  const letters = useRef<HTMLSpanElement[]>([]);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(letters.current, {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    });

    gsap.to(letters.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.08,
      ease: "power3.out",
      duration: 0.8,
    });

    let value = 0;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, {
          y: "-100%",
          duration: 1.1,
          ease: "power4.inOut",
          onComplete: onFinish,
        });
      },
    });

    tl.to(
      {},
      {
        duration: 2.2,
        ease: "power2.out",
        onUpdate() {
          value = Math.round(this.progress() * 100);

          setProgress(value);

          gsap.set(bar.current, {
            width: `${value}%`,
          });
        },
      }
    );

    tl.to(
      letters.current,
      {
        scale: 1.08,
        letterSpacing: "0.5em",
        duration: 0.35,
        stagger: 0.02,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      },
      "-=0.25"
    );
  }, [onFinish]);

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#050505]"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-[180px]" />

        <div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-white/5 blur-[150px]"
          style={{
            animation: "pulse 7s infinite alternate",
          }}
        />
      </div>

      <div className="relative flex h-full flex-col justify-between">

        {/* Center */}
        <div className="flex flex-1 items-center justify-center">

          <h1 className="flex overflow-hidden text-6xl font-extralight tracking-[0.3em] text-white md:text-8xl">
            {"JEREN".split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) letters.current[index] = el;
                }}
              >
                {char}
              </span>
            ))}
          </h1>

        </div>

        {/* Bottom */}
        <div className="px-10 pb-10">

          <div className="mb-4 flex justify-between text-xs uppercase tracking-[0.4em] text-zinc-500">

            <span>Loading</span>

            <span className="font-mono text-white">
              {progress.toString().padStart(3, "0")}
            </span>

          </div>

          <div className="h-[1px] w-full bg-zinc-800">

            <div
              ref={bar}
              className="h-full bg-white"
              style={{ width: "0%" }}
            />

          </div>

        </div>

      </div>
    </div>
  );
}