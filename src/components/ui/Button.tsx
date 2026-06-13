import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  HTMLAttributeAnchorTarget,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "text";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps &
  {
    href: string;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
    download?: boolean | string;
    "aria-label"?: string;
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-primary hover:bg-primary-soft",
  text: "border border-transparent px-2 text-primary hover:text-primary-hover",
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const isAnchor = href.startsWith("#");
    const isInternalPath = href.startsWith("/");
    const isDocument = /\.(pdf)$/i.test(href);
    const shouldUseNextLink = (isAnchor || isInternalPath) && !isDocument;

    if (!shouldUseNextLink) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
