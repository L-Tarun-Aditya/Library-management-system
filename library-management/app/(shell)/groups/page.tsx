import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function GroupReadingPage() {
  const groups = [
    {
      name: "Frontend Guild",
      members: ["AL", "BK", "CM", "DN"],
      book: "Design Systems",
      borrowed: "2025-04-01",
      due: "2025-10-01",
    },
    { name: "History Circle", members: ["EP", "FQ", "GR"], book: "Sapiens", borrowed: "2025-03-20", due: "2025-09-20" },
  ]
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Group Reading</h1>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="bg-card border border-border lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Create New Group</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="group">Group name</Label>
              <Input id="group" placeholder="e.g., Tuesday Readers" />
            </div>
            <div className="grid gap-2">
              <Label>Members (3–6)</Label>
              <Input placeholder="Add members (mock input)" />
            </div>
            <div className="grid gap-2">
              <Label>Book selection</Label>
              <Input placeholder="Choose a book (mock input)" />
            </div>
            <div className="text-xs text-muted-foreground">
              Benefit: Extended 6-month reading period for collaborative learning
            </div>
            <Button className="bg-primary text-primary-foreground w-fit">Create Group</Button>
          </CardContent>
        </Card>

        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-lg">Penalty Rules</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-1">
            <div>Late return: ₹50/day after 1 month</div>
            <div>Damage: 10% (minor) or 50% (major) of book cost</div>
            <div>Missing book: 200% of book cost after 1 month overdue</div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3">
        <h2 className="text-xl font-medium">Active Groups</h2>
        <div className="grid gap-3">
          {groups.map((g) => (
            <div key={g.name} className="rounded-md border border-border p-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-medium">{g.name}</div>
                  <div className="text-xs text-muted-foreground">Book: {g.book}</div>
                </div>
                <Badge variant="outline">Due {g.due}</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.members.map((m) => (
                  <Avatar key={m} className="h-8 w-8">
                    <AvatarFallback>{m}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
