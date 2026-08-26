import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import CodeBlock from "@/components/blog/CodeBlock";
import OptimizedImage from "@/components/ui/OptimizedImage";

// Inline code
function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-mono text-pink-600 dark:text-pink-400 border border-gray-200 dark:border-gray-700">
      {children}
    </code>
  );
}

// Custom link that opens external links in new tab
function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href?.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href || "#"} className="text-blue-600 dark:text-blue-400 hover:underline" {...props}>
      {children}
    </Link>
  );
}

// Callout/Note component
function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
}) {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    error:
      "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    success:
      "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    error: "🚫",
    success: "✅",
  };

  return (
    <div className={`my-6 rounded-lg border p-4 ${styles[type]}`}>
      <div className="flex gap-3">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with anchor links
    h1: ({ children, ...props }) => (
      <h1
        className="mt-8 mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100 scroll-mt-20 group"
        {...props}
      >
        {children}
        {id && (
          <a
            href={`#${id}`}
            className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
            aria-label="Link to section"
          >
            #
          </a>
        )}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="mt-6 mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100 scroll-mt-20 group"
        {...props}
      >
        {children}
        {id && (
          <a
            href={`#${id}`}
            className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
            aria-label="Link to section"
          >
            #
          </a>
        )}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="mt-4 mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h4>
    ),

    // Paragraph
    p: ({ children, ...props }) => (
      <p
        className="my-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base"
        {...props}
      >
        {children}
      </p>
    ),

    // Lists
    ul: ({ children, ...props }) => (
      <ul className="my-4 ml-6 list-disc text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="my-4 ml-6 list-decimal text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="my-1" {...props}>
        {children}
      </li>
    ),

    // Blockquote
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="my-8 border-l-4 border-blue-500 dark:border-blue-400 pl-6 pr-4 py-2 bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg italic text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </blockquote>
    ),

    // Code
    pre: CodeBlock,
    code: ({ children, className, ...props }) => {
      // If it has a className, it's a code block (handled by pre)
      if (className) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      // Otherwise it's inline code
      return <InlineCode>{children}</InlineCode>;
    },

    // Links
    a: CustomLink,

    // Images - Use OptimizedImage for WebP support
    img: (props) => (
      <div className="my-8">
        <OptimizedImage
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          {...(props as ImageProps)}
        />
      </div>
    ),

    // Horizontal rule
    hr: (props) => (
      <hr className="my-12 border-0 border-t-2 border-gray-200 dark:border-gray-700" {...props} />
    ),

    // Table
    table: ({ children, ...props }) => (
      <div className="my-6 overflow-x-auto">
        <table
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
        {...props}
      >
        {children}
      </td>
    ),

    // Custom components
    Callout,
    Image: ({ alt = "", ...props }: ImageProps) => (
      <Image
        className="rounded-lg my-6"
        {...props}
        alt={alt}
      />
    ),

    ...components,
  };
}
