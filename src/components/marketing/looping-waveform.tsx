"use client";

import { type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LoopingWaveformProps = HTMLAttributes<HTMLDivElement> & {
  bars?: number;
  barWidth?: number;
  barGap?: number;
  barColor?: string;
  height?: number;
  fadeEdges?: boolean;
};

const pattern = [
  0.22, 0.5, 0.34, 0.72, 0.42, 0.28, 0.62, 0.38, 0.2, 0.46, 0.3, 0.76,
  0.36, 0.58, 0.26, 0.44, 0.7, 0.32, 0.52, 0.24, 0.48, 0.64, 0.4, 0.3,
];

export function LoopingWaveform({
  bars = 58,
  barWidth = 3,
  barGap = 3,
  barColor = "currentColor",
  height = 64,
  fadeEdges = true,
  className,
  ...props
}: LoopingWaveformProps) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden text-black/22",
        fadeEdges &&
        "mask-[linear-gradient(90deg,transparent,black_14%,black_86%,transparent)]",
        className
      )}
      style={{ height }}
      role="img"
      aria-label="Looping audio waveform"
      {...props}
    >
      <div className="flex h-full items-center justify-center" style={{ gap: barGap }}>
        {Array.from({ length: bars }, (_, index) => {
          const value = pattern[index % pattern.length];
          const distanceFromCenter = Math.abs(index - (bars - 1) / 2) / (bars / 2);
          const centerWeight = 1 - distanceFromCenter * 0.34;
          const scale = Math.max(0.16, value * centerWeight);

          return (
            <motion.span
              key={index}
              className="block origin-center bg-current"
              style={{
                width: barWidth,
                height: `${Math.max(8, height * scale)}px`,
                color: barColor,
              }}
              animate={{
                scaleY: [0.48, 1.14, 0.68, 0.48],
                opacity: [0.46, 0.9, 0.56, 0.46],
              }}
              transition={{
                duration: (1700 + (index % 7) * 120) / 1000,
                ease: "easeInOut",
                repeat: Infinity,
                delay: (index * -72) / 1000,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
