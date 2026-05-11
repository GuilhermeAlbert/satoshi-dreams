"use client";

import { useState } from "react";
import { Icon } from "@/ui/components/icon";
import type { ShareActionsProps } from "./types";

export function ShareActions({ copiedLabel, copyLabel, label, shareLabel, sharedLabel, text, title }: ShareActionsProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "shared">("idle");

  async function copyCurrentUrl() {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    setStatus("copied");
    window.setTimeout(() => setStatus("idle"), 1600);
  }

  async function shareCurrentUrl() {
    if (!navigator.share) {
      await copyCurrentUrl();
      return;
    }

    await navigator.share({
      text,
      title,
      url: window.location.href,
    });
    setStatus("shared");
    window.setTimeout(() => setStatus("idle"), 1600);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-muted">{label}</span>
      <button
        aria-label={copyLabel}
        className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-ink/20"
        onClick={copyCurrentUrl}
        type="button"
      >
        <Icon name="link" size={17} />
      </button>
      <button
        aria-label={shareLabel}
        className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-ink/20"
        onClick={shareCurrentUrl}
        type="button"
      >
        <Icon name="share" size={17} />
      </button>
      <span className="min-w-14 text-xs font-bold uppercase text-gold">
        {status === "copied" ? copiedLabel : status === "shared" ? sharedLabel : ""}
      </span>
    </div>
  );
}
