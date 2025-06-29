/**
 * Provides the Convex client context to its child components.
 *
 * This component initializes a `ConvexReactClient` using the URL specified in the
 * `NEXT_PUBLIC_CONVEX_URL` environment variable and wraps its children with the
 * `ConvexProvider`, making the Convex client available throughout the component tree.
 *
 * @param children - The React nodes that will have access to the Convex client context.
 * @returns The children wrapped with the Convex provider.
 */
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}