"use client";

import { useEffect } from "react";
import { useBreadcrumb } from "@/components/Helper/BreadcrumbContext";

export default function ArticleClient({ title }: { title: string }) {
  const { setTitle } = useBreadcrumb();

  useEffect(() => {
    setTitle(title);

    return () => setTitle(undefined);
  }, [title, setTitle]);

  return null;
}
