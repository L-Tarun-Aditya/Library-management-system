import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function DashboardPage() {
  const stats = [
    { label: "Currently Borrowed", value: 2 },
    { label: "Due Soon", value: 1 },
    { label: "Active Penalties", value: 0 },
    { label: "Group Memberships", value: 2 },
  ]
  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-balance">Dashboard</h1>
        <div className="flex gap-2">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/catalog">Browse Books</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/my-borrowings">My Borrowings</Link>
          </Button>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-card border border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">{s.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">{s.value}</CardContent>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-lg">Books Due Soon</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between rounded-md border border-border p-3">
              <div>
                <div className="font-medium">Clean Code</div>
                <div className="text-xs text-muted-foreground">Robert C. Martin</div>
              </div>
              <Badge className="bg-(--color-warning) text-(--color-warning-foreground)">Due in 3 days</Badge>
            </div>
            <div className="flex items-center justify-between rounded-md border border-border p-3">
              <div>
                <div className="font-medium">Design Patterns</div>
                <div className="text-xs text-muted-foreground">GoF</div>
              </div>
              <Badge variant="secondary">All good</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/catalog">Borrow a Book</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/groups">Create Group</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/penalties">View Penalties</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
