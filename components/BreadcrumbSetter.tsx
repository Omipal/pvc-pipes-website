"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setBreadcrumb, BreadcrumbItem } from "@/store/slices/breadcrumbSlice";

export default function BreadcrumbSetter({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBreadcrumb(items));
  }, [dispatch, items]);

  return null; // ❗ UI कुछ नहीं
}
