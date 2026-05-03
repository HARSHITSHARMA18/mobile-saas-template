"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "hobbyist",
    name: "Hobbyist Plan",
    description: "Our starter plan.",
    priceMonthly: 0,
    priceYearly: 0,
    buttonText: "Sign Up",
    buttonVariant: "outline",
    cardClassName: "border-black/10 bg-white",
    hasShadow: false,
    features: [
      { name: "Access to v4.5-all", included: true },
      { name: "50 credits renew daily (10 songs)", included: true },
      { name: "Standard features only", included: true },
      { name: "Upload up to 1 min of audio", included: true },
      { name: "Shared creation queue", included: true },
      { name: "No commercial use", included: false },
      { name: "No add-on credit purchases", included: false },
    ],
  },
  {
    id: "artist",
    name: "Artist Plan",
    description: "Access to our best models and editing tools",
    priceMonthly: 10,
    priceYearly: 8, // Per month when billed yearly
    buttonText: "Subscribe",
    buttonVariant: "primary",
    cardClassName: "border-primary bg-white",
    isPopular: true,
    hasShadow: true,
    shadowClassName: "bg-[repeating-linear-gradient(45deg,#F97C00_0,#F97C00_1px,transparent_1px,transparent_6px)] opacity-30",
    features: [
      { name: "Access to latest and most advanced v5 model", included: true },
      { name: "2,500 credits (up to 500 songs), refreshes monthly", included: true },
      { name: "Commercial use rights for new songs made", included: true },
      { name: "Standard + Pro features (personas and advanced editing)", included: true },
      { name: "Split songs into up to 12 vocal and instrument stems", included: true },
      { name: "Upload up to 8 min of audio", included: true },
      { name: "Add new vocals or instrumentals to existing songs", included: true },
      { name: "Early access to new features", included: true },
      { name: "Ability to purchase add-on credits", included: true },
    ],
  },
  {
    id: "professional",
    name: "Professional Plan",
    description: "Maximum credits and every feature unlocked",
    priceMonthly: 30,
    priceYearly: 24, // Per month when billed yearly
    buttonText: "Subscribe",
    buttonVariant: "dark",
    cardClassName: "border-black/10 bg-white",
    hasShadow: true,
    shadowClassName: "bg-[repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_1px,transparent_6px)] opacity-20",
    features: [
      { name: "Access to Suno Studio", included: true },
      { name: "Access to latest and most advanced v5 model", included: true },
      { name: "10,000 credits (up to 2,000 songs), refreshes monthly", included: true },
      { name: "Commercial use rights for new songs made", included: true },
      { name: "Standard + Pro features (personas and advanced editing)", included: true },
      { name: "Split songs into up to 12 vocal and instrument stems", included: true },
      { name: "Upload up to 8 min of audio", included: true },
      { name: "Ability to purchase add-on credits", included: true },
      { name: "Priority queue, up to 10 songs at once", included: true },
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-white pb-24 flex flex-col">
      {/* Dashed Top Divider */}
      <div className="w-full h-8 border-y border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-black"></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pt-20 md:px-8 flex flex-col items-center">
        <h2 className="text-center text-4xl font-medium tracking-tight text-black md:text-[3.5rem] leading-none mb-8">
          Pricing
        </h2>

        {/* Toggle */}
        <div className="flex items-center border border-black/20 p-1 mb-16">
          <button
            onClick={() => setIsYearly(false)}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-colors",
              !isYearly ? "bg-black text-white" : "bg-transparent text-black hover:bg-black/5"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-colors",
              isYearly ? "bg-black text-white" : "bg-transparent text-black hover:bg-black/5"
            )}
          >
            Yearly ( 20% Off )
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {plans.map((plan) => (
            <div key={plan.id} className="relative flex flex-col w-full h-full">
              {/* Decorative Background Shadow */}
              {plan.hasShadow && (
                <div
                  className={cn(
                    "absolute top-4 -right-4 md:top-6 md:-right-6 bottom-0 left-4 md:left-6 w-full h-full -z-10",
                    plan.shadowClassName
                  )}
                />
              )}

              {/* Card Content */}
              <div
                className={cn(
                  "relative flex flex-col w-full h-full border p-8 bg-white z-10",
                  plan.cardClassName
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-4 right-4 bg-primary px-2 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-3xl font-semibold text-black tracking-tight mb-4">
                  {plan.name}
                </h3>

                <p className="text-black/60 text-sm leading-relaxed mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-semibold text-black tracking-tighter">
                    ${isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-black/50 text-sm">/mo</span>
                </div>

                <div className="flex flex-col gap-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "mt-1 shrink-0",
                          feature.included
                            ? "size-3.5 bg-black"
                            : "size-3.5 border border-black/30 bg-transparent"
                        )}
                      />
                      <span className="text-[13px] leading-relaxed text-black/80">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={cn(
                    "w-max px-8 py-2.5 text-sm font-medium transition-colors mt-auto",
                    plan.buttonVariant === "outline" && "border border-black/20 text-black hover:bg-black/5",
                    plan.buttonVariant === "primary" && "bg-primary text-white hover:bg-primary/90",
                    plan.buttonVariant === "dark" && "bg-black text-white hover:bg-black/90"
                  )}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
