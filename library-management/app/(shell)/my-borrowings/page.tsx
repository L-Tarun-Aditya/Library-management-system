"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function MyBorrowingsPage() {
  const active = [
    { type: "Individual", book: "Atomic Habits", borrowed: "2025-09-15", due: "2025-10-15", status: "Active" },
  ]
  const group = [{ type: "Group", book: "Design Systems", borrowed: "2025-04-01", due: "2025-10-01", status: "Active" }]
  const history = [
    { type: "Individual", book: "Clean Code", borrowed: "2025-08-01", due: "2025-09-01", status: "Returned" },
  ]

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">My Borrowings</h1>
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="group">Group</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-4">
          <BorrowList items={active} />
        </TabsContent>
        <TabsContent value="group" className="mt-4">
          <BorrowList items={group} />
        </TabsContent>
        <TabsContent value="history" className="mt-4">
          <BorrowList items={history} showActions={false} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BorrowList({ items, showActions = true }: { items: any[]; showActions?: boolean }) {
  return (
    <div className="grid gap-3">
      {items.map((it, idx) => (
        <div
          key={idx}
          className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border p-3"
        >
          <div>
            <div className="font-medium">{it.book}</div>
            <div className="text-xs text-muted-foreground">
              {it.type} • Borrowed {it.borrowed} • Due {it.due}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={it.status} />
            {showActions && (
              <>
                <Button variant="outline" size="sm">
                  Return
                </Button>
                <Button variant="outline" size="sm">
                  Report Damage
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Overdue") {
    return <Badge className="bg-destructive text-destructive-foreground">Overdue</Badge>
  }
  if (status === "Returned") {
    return <Badge variant="secondary">Returned</Badge>
  }
  return <Badge className="bg-(--color-success) text-(--color-success-foreground)">Active</Badge>
}
