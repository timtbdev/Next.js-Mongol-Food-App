"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Stargazer({ login, name }: { login: string; name: string }) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} key={login}>
        <TooltipContent className="text-brand-50 text-center">
          <p>{name}</p>
          <p className="text-muted-dark text-xs">@{login}</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            href={`https://github.com/${login}`}
            className={cn(
              "relative -mx-0.5 transition-all hover:z-10 hover:scale-125",
            )}
            rel="noreferrer"
          >
            <Avatar className="size-10 ring-4 ring-zinc-800">
              <AvatarImage
                src={`https://avatars.githubusercontent.com/${login}`}
              />
            </Avatar>
          </a>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
}

export function StargazerMore() {
  return (
    <div
      className={cn(
        "relative -mx-0.5 transition-all hover:z-10 hover:scale-125",
      )}
    >
      <Avatar className="flex size-10 items-center justify-center bg-zinc-800 ring-4 ring-zinc-800">
        <p className="text-muted-dark text-xs font-semibold">10+</p>
      </Avatar>
    </div>
  );
}

export function StargazerLoading() {
  return (
    <div className={cn("relative -mx-0.5 transition-all")}>
      <Avatar className="size-10 ring-4 ring-zinc-800">
        <div className="h-full w-full rounded-full bg-zinc-800">
          <div className="h-full w-full animate-pulse rounded-full bg-zinc-700" />
        </div>
      </Avatar>
    </div>
  );
}
