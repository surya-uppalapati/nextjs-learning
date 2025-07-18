"use client";

import { usePathname } from "next/navigation";

export default function DocsNotFound() {
  const path = usePathname(); // e.g., /docs/hooks/useState/23
  console.log(path.split("/"));
  const [, , feature, topic, submodule] = path.split("/");

  let message = "This documentation page was not found.";
  if (feature && topic && submodule) {
    message = `Sub-module ${submodule} not available for ${topic} topic of ${feature} feature.`;
  }

  return (
    <div>
      <h1>📄 Docs 404</h1>
      <p>{message}</p>
    </div>
  );
}
