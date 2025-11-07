import { useCallback, useEffect, useState } from "react";

type TProps = {
  timeout?: number;
};

export function useClipboard({ timeout = 2000 }: TProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.error("CLIPBOARD_NOT_SUPPORTED");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("COPY_FAILED", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return { isCopied, handleCopy };
}
