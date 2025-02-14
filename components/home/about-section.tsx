import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const highlightClass = "text-xl font-semibold text-white";
  return (
    <section
      id="about"
      className="border-dark-gray/50 w-full border-y-2 border-dashed bg-black/20 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full">
            <div className="from-brand-400/20 to-brand-200/20 absolute inset-0 rounded-2xl bg-gradient-to-tr" />
            <Image
              src="/images/tim.jpg"
              fill
              alt="Tim - Creator of Mongol.Food"
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl/8 font-medium text-zinc-400">
              👋 Hello, I’m Tim.
            </p>
            <p className="text-xl/8 font-medium text-zinc-400">
              I&apos;m the <span className={highlightClass}>creator</span> of
              this app, based in the 🇺🇸
              <span className={highlightClass}>Bay Area, CA</span>.
            </p>
            <p className="text-xl/8 font-medium text-zinc-400">
              If you own a{" "}
              <span className={highlightClass}>Mongolian 🍜restaurant</span>,
              run a <span className={highlightClass}>🎥YouTube channel</span>{" "}
              about <span className={highlightClass}>Mongolian food</span>, or
              work in{" "}
              <span className={highlightClass}>
                Mongolia’s ✈️travel business
              </span>
              , I’d love to work together to help your business 📈grow.
            </p>
            <p className="text-xl/8 font-medium text-zinc-400">
              Feel free to reach out at{" "}
              <a
                href="mailto:timtb.dev@gmail.com"
                className={cn(
                  "hover:text-brand-500 underline underline-offset-4",
                  highlightClass,
                )}
              >
                timtb.dev@gmail.com
              </a>
              . Looking forward to connecting! 😊
            </p>

            <div className="flex flex-col gap-3">
              <div>
                <h4 className="text-xl font-bold text-white">
                  <Link
                    href="https://timtb.dev"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-brand-500 underline underline-offset-4"
                  >
                    Tim
                  </Link>
                </h4>
                <p className="text-lg font-medium text-zinc-400">
                  Creator of Mongol.Food
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
