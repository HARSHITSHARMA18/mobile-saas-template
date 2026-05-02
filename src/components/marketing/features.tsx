"use client"
import { LoopingWaveform } from "@/components/marketing/looping-waveform";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";

type SocialIconProps = React.ComponentProps<typeof motion.svg>;

export const XIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M9.46617 12.6219L14.625 19.5H22.2083L13.6955 8.14883L20.7783 0H17.9075L12.3641 6.3765L7.58333 0H0L8.13583 10.8496L0.6175 19.5H3.48833L9.46617 12.6219ZM15.7083 17.3333L4.33333 2.16667H6.5L17.875 17.3333H15.7083Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const LinkedInIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: -5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M20 0C20.663 0 21.2989 0.263392 21.7678 0.732233C22.2366 1.20107 22.5 1.83696 22.5 2.5V20C22.5 20.663 22.2366 21.2989 21.7678 21.7678C21.2989 22.2366 20.663 22.5 20 22.5H2.5C1.83696 22.5 1.20107 22.2366 0.732233 21.7678C0.263392 21.2989 0 20.663 0 20V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H20ZM19.375 19.375V12.75C19.375 11.6692 18.9457 10.6328 18.1815 9.86854C17.4172 9.10433 16.3808 8.675 15.3 8.675C14.2375 8.675 13 9.325 12.4 10.3V8.9125H8.9125V19.375H12.4V13.2125C12.4 12.25 13.175 11.4625 14.1375 11.4625C14.6016 11.4625 15.0467 11.6469 15.3749 11.9751C15.7031 12.3033 15.8875 12.7484 15.8875 13.2125V19.375H19.375ZM4.85 6.95C5.40695 6.95 5.9411 6.72875 6.33492 6.33492C6.72875 5.9411 6.95 5.40695 6.95 4.85C6.95 3.6875 6.0125 2.7375 4.85 2.7375C4.28973 2.7375 3.75241 2.96007 3.35624 3.35624C2.96007 3.75241 2.7375 4.28973 2.7375 4.85C2.7375 6.0125 3.6875 6.95 4.85 6.95ZM6.5875 19.375V8.9125H3.125V19.375H6.5875Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const FacebookIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M28.3333 14.1667C28.3333 6.34667 21.9867 0 14.1667 0C6.34667 0 0 6.34667 0 14.1667C0 21.0233 4.87333 26.7325 11.3333 28.05V18.4167H8.5V14.1667H11.3333V10.625C11.3333 7.89083 13.5575 5.66667 16.2917 5.66667H19.8333V9.91667H17C16.2208 9.91667 15.5833 10.5542 15.5833 11.3333V14.1667H19.8333V18.4167H15.5833V28.2625C22.7375 27.5542 28.3333 21.5192 28.3333 14.1667Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const ThreadsIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: -5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M17.4167 6.92196C15.5768 0.0771293 9.25 0.505296 9.25 0.505296C9.25 0.505296 0.5 -0.0780373 0.5 10.9995C0.5 22.077 9.25 21.4948 9.25 21.4948C9.25 21.4948 14.451 21.8401 16.8333 16.9238C17.6115 14.7561 17.4167 10.422 9.83333 10.422C9.83333 10.422 6.33333 10.422 6.33333 13.3386C6.33333 14.4773 7.5 15.672 9.25 15.672C11 15.672 12.9495 14.4738 13.3333 12.172C14.5 5.17196 8.08333 4.58863 6.33333 7.5053"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const InstagramIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M6.76667 0H16.5667C20.3 0 23.3333 3.03333 23.3333 6.76667V16.5667C23.3333 18.3613 22.6204 20.0824 21.3514 21.3514C20.0824 22.6204 18.3613 23.3333 16.5667 23.3333H6.76667C3.03333 23.3333 0 20.3 0 16.5667V6.76667C0 4.97204 0.712915 3.25091 1.98191 1.98191C3.25091 0.712915 4.97204 0 6.76667 0ZM6.53333 2.33333C5.41942 2.33333 4.35114 2.77583 3.56349 3.56349C2.77583 4.35114 2.33333 5.41942 2.33333 6.53333V16.8C2.33333 19.1217 4.21167 21 6.53333 21H16.8C17.9139 21 18.9822 20.5575 19.7699 19.7699C20.5575 18.9822 21 17.9139 21 16.8V6.53333C21 4.21167 19.1217 2.33333 16.8 2.33333H6.53333ZM17.7917 4.08333C18.1784 4.08333 18.5494 4.23698 18.8229 4.51047C19.0964 4.78396 19.25 5.15489 19.25 5.54167C19.25 5.92844 19.0964 6.29937 18.8229 6.57286C18.5494 6.84635 18.1784 7 17.7917 7C17.4049 7 17.034 6.84635 16.7605 6.57286C16.487 6.29937 16.3333 5.92844 16.3333 5.54167C16.3333 5.15489 16.487 4.78396 16.7605 4.51047C17.034 4.23698 17.4049 4.08333 17.7917 4.08333ZM11.6667 5.83333C13.2138 5.83333 14.6975 6.44792 15.7915 7.54188C16.8854 8.63584 17.5 10.1196 17.5 11.6667C17.5 13.2138 16.8854 14.6975 15.7915 15.7915C14.6975 16.8854 13.2138 17.5 11.6667 17.5C10.1196 17.5 8.63584 16.8854 7.54188 15.7915C6.44792 14.6975 5.83333 13.2138 5.83333 11.6667C5.83333 10.1196 6.44792 8.63584 7.54188 7.54188C8.63584 6.44792 10.1196 5.83333 11.6667 5.83333ZM11.6667 8.16667C10.7384 8.16667 9.84817 8.53542 9.19179 9.19179C8.53542 9.84817 8.16667 10.7384 8.16667 11.6667C8.16667 12.5949 8.53542 13.4852 9.19179 14.1415C9.84817 14.7979 10.7384 15.1667 11.6667 15.1667C12.5949 15.1667 13.4852 14.7979 14.1415 14.1415C14.7979 13.4852 15.1667 12.5949 15.1667 11.6667C15.1667 10.7384 14.7979 9.84817 14.1415 9.19179C13.4852 8.53542 12.5949 8.16667 11.6667 8.16667Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const TikTokIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: -5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M14.5133 3.29C13.716 2.37945 13.2765 1.2103 13.2767 0H9.67167V14.4667C9.64444 15.2497 9.31411 15.9916 8.75036 16.5357C8.18661 17.0799 7.43353 17.3838 6.65 17.3833C4.99333 17.3833 3.61667 16.03 3.61667 14.35C3.61667 12.3433 5.55333 10.8383 7.54833 11.4567V7.77C3.52333 7.23333 0 10.36 0 14.35C0 18.235 3.22 21 6.63833 21C10.3017 21 13.2767 18.025 13.2767 14.35V7.01167C14.7385 8.06149 16.4936 8.62475 18.2933 8.62167V5.01667C18.2933 5.01667 16.1 5.12167 14.5133 3.29Z"
      fill="currentColor"
    />
  </motion.svg>
);

export const YouTubeIcon = ({ className, ...props }: SocialIconProps) => (
  <motion.svg
    className={cn("h-5 w-5", className)}
    width="29"
    height="21"
    viewBox="0 0 29 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    {...props}
  >
    <path
      d="M28.0501 3.13163C27.7206 1.8991 26.7497 0.928222 25.5172 0.59876C23.2832 -1.51787e-07 14.3244 0 14.3244 0C14.3244 0 5.36561 -1.51787e-07 3.13164 0.59876C1.8991 0.928222 0.928222 1.8991 0.59876 3.13163C0 5.36561 0 10.0271 0 10.0271C0 10.0271 0 14.6886 0.59876 16.9225C0.928222 18.1551 1.8991 19.126 3.13164 19.4554C5.36561 20.0542 14.3244 20.0542 14.3244 20.0542C14.3244 20.0542 23.2832 20.0542 25.5172 19.4554C26.7497 19.126 27.7206 18.1551 28.0501 16.9225C28.6488 14.6886 28.6488 10.0271 28.6488 10.0271C28.6488 10.0271 28.6488 5.36561 28.0501 3.13163ZM11.4595 14.3244V5.72977L18.9025 10.0271L11.4595 14.3244Z"
      fill="currentColor"
    />
  </motion.svg>
);

const socials = [
  { id: "X", Icon: XIcon },
  { id: "LinkedIn", Icon: LinkedInIcon },
  { id: "Facebook", Icon: FacebookIcon },
  { id: "Threads", Icon: ThreadsIcon },
  { id: "Instagram", Icon: InstagramIcon },
  { id: "TikTok", Icon: TikTokIcon },
  { id: "YouTube", Icon: YouTubeIcon },
];

export function Features() {
  return (
    <section className="w-full bg-white px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <h2 className="max-w-2xl text-center text-3xl leading-[0.95] tracking-[-0.04em] text-black/40 md:text-5xl lg:text-4xl">
          Everything You Need To
          <br />
          Make Music Your Way
        </h2>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <article className="flex min-h-[430px] flex-col border border-black/12 bg-white p-8 md:p-9">
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.055em] text-black md:text-2xl lg:text-[2.55rem] lg:max-w-[13rem]">
              100 free songs daily
            </h3>
            <p className="mt-5 text-sm leading-6 text-black/50 md:text-xs md:leading-5 lg:text-[13px] lg:leading-6">
              Turn any moment into customized music instantly from your commute
              to inside jokes. Express what words can&apos;t. Free forever, no
              subscription needed.
            </p>

            <div className="mt-auto border-l border-black/5 pl-5">
              <LoopingWaveform
                className="max-w-[260px] text-primary/40"
                height={96}
                bars={54}
                barWidth={4}
                barGap={3}
              />
            </div>
          </article>

          <article className="flex min-h-[430px] flex-col border border-primary bg-white p-8 md:p-9">
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.055em] text-black md:text-2xl lg:text-[2.55rem] lg:max-w-[15rem]">
              Free AI music generator
            </h3>
            <p className="mt-5 text-sm leading-6 text-black/50 md:text-xs md:leading-5 lg:text-[13px] lg:leading-6 mb-2">
              Discover what&apos;s possible when anyone can make music. Access the
              market-leading AI song generator &mdash; millions of songs,
              remixes, jokes, and raw emotion awaiting.
            </p>

            <div className="mt-auto">
              <button className="ml-auto block w-fit max-w-full rounded-tl-full rounded-tr-full rounded-bl-full bg-primary px-5 py-2.5 text-left text-[11px] font-medium leading-[1.4] text-white shadow-sm transition-colors hover:bg-primary/85 md:px-4 md:py-2 md:text-[10px] lg:px-5 lg:py-2.5 lg:text-[11px]">
                Make a house song about quitting your job
              </button>
              <div className="mt-8 flex items-center gap-1.5 ml-2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-2.5 rounded-full bg-black/20"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <p className="mt-3 ml-2 text-[8px] font-medium text-black/40">
                Generating a house song about quitting the job
              </p>
            </div>
          </article>

          <article className="flex min-h-[430px] flex-col border border-black/12 bg-white p-8 md:p-9">
            <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.055em] text-black md:text-2xl lg:text-[2.55rem] lg:max-w-[15rem]">
              Share It with the world
            </h3>
            <p className="mt-5 text-sm leading-6 text-black/50 md:text-xs md:leading-5 lg:text-[13px] lg:leading-6">
              Make music that matters to you, then share it with people
              who&apos;ll feel it too. From your inner circle to millions of music
              fans, your next track can go far.
            </p>

            <div className="mt-auto mb-10 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <motion.div
                className="flex w-max items-center gap-6 pr-6 text-primary/40"
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
              >
                {[1, 2].map((key) => (
                  <React.Fragment key={key}>
                    {socials.map((social) => {
                      const Icon = social.Icon;
                      return (
                        <Icon key={`${key}-${social.id}`} className="hover:text-primary transition-colors cursor-pointer shrink-0" />
                      );
                    })}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
