import { cn } from "@/lib/utils";
import {
  ArrowBigUpDash,
  Atom,
  Bot,
  CloudUpload,
  Code,
  Plug,
} from "lucide-react";
import Link from "next/link";
import { Icons } from "../../icons";
import { FeatureCard } from "./feature-card";

export const FeatureDishesSection = () => {
  const headingBaseClass = "text-4xl font-semibold tracking-tight sm:text-5xl";
  return (
    <section className="border-dark-gray/50 relative mx-auto flex w-full flex-col items-center gap-8 border-y-2 border-dashed bg-black/20 py-10 sm:py-20">
      <h2 className="gap-1 text-center">
        <span className={cn("text-zinc-300", headingBaseClass)}>
          Find the best Mongolian{" "}
        </span>
        <span
          className={cn(
            "text-brand-400 relative inline-block whitespace-nowrap md:mt-0 md:inline",
            headingBaseClass,
          )}
        >
          <span className="bg-brand-200/10 absolute -left-[2.5%] -top-[2.5%] z-0 h-[105%] w-[105%] -rotate-1" />
          dishes
        </span>
      </h2>
      <p className="text-muted-light max-w-2xl text-pretty text-center text-xl sm:text-2xl">
        Mongolian food is hearty, bold, and full of surprises!
      </p>
      <div id="features">
        <div className="mx-auto grid grid-cols-1 gap-6 sm:w-[80%] sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={
              <ArrowBigUpDash
                className="text-brand-300"
                strokeWidth={1.5}
                size={28}
              />
            }
            title="High Performance"
            description="Built on the fast, lightweight Hono framework. Easy deployment for performance & reliability."
          />
          <FeatureCard
            title="Deploy Anywhere"
            icon={
              <CloudUpload
                className="text-brand-300"
                strokeWidth={1.5}
                size={28}
              />
            }
            description="Deploy JStack to Cloudflare, Vercel, Netlify or others in seconds. The same code runs anywhere."
          />
          <FeatureCard
            title="End-to-End Type-Safe"
            icon={
              <Code className="text-brand-300" strokeWidth={1.5} size={28} />
            }
            description="Clean APIs with first-class TypeScript support and auto-complete. No schemas or code generation."
          />
          <FeatureCard
            icon={
              <Bot className="text-brand-300" strokeWidth={1.5} size={28} />
            }
            title="AI-Optimized Docs (soon)"
            description="Integrate with Cursor AI - share one link to provide a complete understanding of JStack, including source code."
          />
          <FeatureCard
            icon={
              <Plug className="text-brand-300" strokeWidth={1.5} size={28} />
            }
            title="Serverless WebSockets"
            description="Add reliable and scalable real-time features to your app. 100% serverless with no infrastructure to manage."
          />
          <FeatureCard
            title="Any State Manager"
            icon={
              <Atom className="text-brand-300" strokeWidth={1.5} size={28} />
            }
            description="JStack is compatible with any state manager. Perfect for React Query, Zustand, Jotai, or even Redux (🤮)."
          />
        </div>
      </div>
      <div className="mx-auto mb-4 mt-16 w-full max-w-4xl">
        <div className="text-center">
          <p className="text-muted-dark mb-6 text-pretty text-center text-lg md:text-xl/8">
            Built on modern, battle-tested tools:
          </p>
        </div>
        <div className="grid w-full grid-cols-2 items-center justify-center gap-8 px-4 sm:flex sm:flex-wrap md:px-6">
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:border-r sm:pr-8"
          >
            <Icons.nextjs className="w-24 md:w-32" />
          </Link>
          <Link
            href="https://hono.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:border-r sm:pr-8"
          >
            <div className="flex items-center gap-0.5">
              <Icons.hono className="size-12 fill-orange-500 text-orange-500 md:size-16" />
              <p className="text-2xl font-bold md:text-3xl/7">Hono</p>
            </div>
          </Link>
          <Link
            href="https://orm.drizzle.team"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:border-r sm:pr-8"
          >
            <Icons.drizzle className="size-10 md:size-12" />
          </Link>
          <Link
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:border-dark-gray flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:border-r sm:pr-8"
          >
            <Icons.typescript className="size-10 md:size-12" />
          </Link>
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 flex items-center justify-center opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0 sm:col-span-1"
          >
            <Icons.tailwind className="my-4 h-6 w-auto sm:my-0 md:h-7" />
          </Link>
        </div>
      </div>

      <div className="mt-4 flex w-full max-w-xs">
        <Link
          href="/docs/getting-started/first-steps"
          className="from-brand-300 to-brand-400 hover:bg-brand-200/75 mt-4 inline-flex h-14 w-full max-w-xs cursor-pointer items-center justify-center gap-1.5 rounded-md bg-gradient-to-br px-5 py-2.5 font-semibold text-zinc-800 shadow-xl transition hover:scale-[0.98] active:scale-[0.95]"
        >
          Start Shipping Today &rarr;
        </Link>
      </div>
    </section>
  );
};
