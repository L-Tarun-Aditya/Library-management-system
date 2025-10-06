"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { BookOpen, Library, Users, FileText, Coins, UserCircle2, SquareLibrary, LayoutDashboard } from "lucide-react"
import type { ReactNode } from "react"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="offcanvas" className="border-r border-border">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <SquareLibrary className="size-5 text-primary" aria-hidden />
            <span className="text-sm font-semibold">Library System</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <NavMain />
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <div className="px-2 text-xs text-muted-foreground">Dark mode only</div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b border-border bg-background px-3">
          <SidebarTrigger />
          <div className="text-sm text-muted-foreground">Welcome to the Library Management System</div>
        </header>
        <main className="flex-1 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}

function NavMain() {
  const pathname = usePathname()
  const items = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/catalog", label: "Catalog", icon: Library },
    { href: "/borrow", label: "Individual Borrowing", icon: BookOpen },
    { href: "/groups", label: "Group Reading", icon: Users },
    { href: "/my-borrowings", label: "My Borrowings", icon: FileText },
    { href: "/penalties", label: "Penalties & Fines", icon: Coins },
    { href: "/profile", label: "Profile", icon: UserCircle2 },
  ]

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={active} className={cn(active && "data-[active=true]:bg-accent")}>
                  <Link href={item.href}>
                    <Icon className="text-muted-foreground" aria-hidden />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
