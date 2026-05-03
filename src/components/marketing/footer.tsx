import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/marketing/features";

const footerGroups = [
  {
    title: "Brand",
    links: ["About", "Work at Suno", "Blog", "Pricing", "Hub"],
  },
  {
    title: "Support",
    links: ["Help", "Contact Us", "Guidelines", "FAQs", "T&S", "Privacy"],
  },
];

const socialLinks = [
  { label: "X", Icon: XIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Threads", Icon: ThreadsIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "TikTok", Icon: TikTokIcon },
  { label: "YouTube", Icon: YouTubeIcon },
];

export function Footer() {
  return (
    <footer className="w-full bg-white px-6 pb-28 pt-20 md:px-12 lg:px-28 lg:pb-44 lg:pt-24">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:gap-24">
        <div className="flex min-h-[280px] flex-col justify-between gap-20">
          <div>
            <h2 className="text-3xl font-normal tracking-[-0.035em] text-black">
              Newsletter
            </h2>
            <form className="mt-4 flex max-w-[390px] items-center gap-2">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter Your Email"
                className="h-12 min-w-0 flex-1 border border-black/55 bg-white px-4 text-lg text-black outline-none placeholder:text-black/40 focus:border-black"
              />
              <button
                type="submit"
                className="h-12 bg-black px-4 text-lg font-normal text-white transition-colors hover:bg-black/85"
              >
                Submit
              </button>
            </form>
          </div>

          <div>
            <div className="flex items-center gap-4 text-black/55">
              {socialLinks.map(({ label, Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="transition-colors hover:text-black"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="mt-4 text-xl font-normal tracking-[-0.03em] text-black/40">
              © 2026 Suno AI, All rights reserved
            </p>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-14 lg:gap-20" aria-label="Footer">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-3xl font-normal tracking-[-0.035em] text-black">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-2xl font-normal tracking-[-0.04em] text-black/40 transition-colors hover:text-black"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
