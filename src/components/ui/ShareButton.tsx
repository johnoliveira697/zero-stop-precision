"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Confira este artigo na Zero Stop Precision: ${title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share or error
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Erro ao copiar link", err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 text-steel hover:text-pure-white transition-colors bg-graphite border border-white/10 px-4 py-2 text-sm font-subheading tracking-widest uppercase rounded hover:border-steel hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]"
    >
      <Share2 size={16} />
      {copied ? "Link Copiado!" : "Compartilhar"}
    </button>
  );
}
