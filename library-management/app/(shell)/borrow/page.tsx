import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function IndividualBorrowingPage() {
  const rules = ["One book at a time per person", "Maximum 3 copies per category", "1 month loan period"]
  const current = [
    { book: "Clean Code", borrowed: "2025-09-01", due: "2025-10-01", daysRemaining: -3 },
    { book: "Atomic Habits", borrowed: "2025-09-15", due: "2025-10-15", daysRemaining: 9 },
  ]
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Individual Borrowing</h1>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="bg-card border border-border lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Book Selection</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Browse the <span className="text-primary">Catalog</span> to borrow a book.
          </CardContent>
        </Card>

        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle className="text-lg">Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3">
        <h2 className="text-xl font-medium">Current Borrowings</h2>
        <div className="grid gap-3">
          {current.map((c) => {
            const overdue = c.daysRemaining < 0
            return (
              <div
                key={c.book}
                className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border p-3"
              >
                <div>
                  <div className="font-medium">{c.book}</div>
                  <div className="text-xs text-muted-foreground">
                    Borrowed {c.borrowed} • Due {c.due}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {overdue ? (
                    <Badge className="bg-destructive text-destructive-foreground">
                      Overdue {Math.abs(c.daysRemaining)}d
                    </Badge>
                  ) : (
                    <Badge className="bg-(--color-success) text-(--color-success-foreground)">
                      {c.daysRemaining} days left
                    </Badge>
                  )}
                  <Button variant="outline" size="sm">
                    Return
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <PenaltyPanel />
    </div>
  )
}

function PenaltyPanel() {
  return (
    <Card className="bg-card border border-border">
      <CardHeader>
        <CardTitle className="text-lg">Penalties</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <div>Late return: ₹50/day after 1 month</div>
        <div>Damage: 10% (minor) or 50% (major) of book cost</div>
        <div>Missing book: 200% of book cost after 1 month overdue</div>
      </CardContent>
    </Card>
  )
}
