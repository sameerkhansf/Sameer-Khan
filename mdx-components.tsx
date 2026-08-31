import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import CodeBlock from "@/components/blog/CodeBlock";

// Element styling comes from the `prose` wrapper on the post page; this file
// only maps what @tailwindcss/typography can't do on its own.

function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href || "#"} {...props}>
      {children}
    </Link>
  );
}

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
}) {
  const styles = {
    info: "border-border",
    warning: "border-yellow-600/50",
    error: "border-destructive/50",
    success: "border-green-600/50",
  };

  return (
    <aside className={`my-6 border-l-2 pl-4 text-muted-foreground ${styles[type]}`}>
      {children}
    </aside>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    a: CustomLink,

    // Wide tables scroll in their own keyboard-accessible container instead of
    // forcing page-level horizontal scroll on mobile.
    table: ({ children, ...props }) => (
      <div tabIndex={0} className="overflow-x-auto">
        <table {...props}>{children}</table>
      </div>
    ),

    img: ({ alt = "", ...props }) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={alt}
        {...(props as Omit<ImageProps, "alt">)}
      />
    ),

    Callout,
    Image: ({ alt = "", ...props }: ImageProps) => (
      <Image className="my-6" {...props} alt={alt} />
    ),

    ...components,
  };
}
