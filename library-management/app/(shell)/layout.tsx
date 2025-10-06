import type { ReactNode } from "react"
import { AppShell } from "@/components/app-sidebar"

export default function ShellLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>
}
