import Section from "@/components/ui/home/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const highlightClass = "text-xl text-white";
  const baseClass = "text-lg/7 text-zinc-400";
  return (
    <div className="border-dark-gray/50 w-full border-y-2 border-dashed bg-black/20">
      <Section id="about">
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
              <p className={cn(baseClass, "text-2xl")}>👋 Hello, I’m Tim.</p>
              <p className={baseClass}>
                I&apos;m the <span className={highlightClass}>creator</span> of
                this app, based in the 🇺🇸
                <span className={highlightClass}>Bay Area, CA</span>.
              </p>
              <p className="text-xl/8 font-medium text-zinc-400">
                Need a <span className={highlightClass}>🌎website</span> or
                <span className={highlightClass}>📱mobile app</span> to take
                your business to the{" "}
                <span className={highlightClass}>📈next level?</span>
              </p>
              <p className={baseClass}>Let’s turn your idea into reality!</p>
              <p className={baseClass}>
                Reach out at{" "}
                <a
                  href="mailto:timtb.dev@gmail.com"
                  className={cn("hover:text-brand-500", highlightClass)}
                >
                  timtb.dev@gmail.com
                </a>
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
      </Section>
    </div>
  );
};

export default AboutSection;
