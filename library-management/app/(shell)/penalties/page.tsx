import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PenaltiesPage() {
  const penalties = [
    { book: "Clean Code", type: "Late Return", amount: 150, date: "2025-09-05", status: "Unpaid" },
    { book: "Sapiens", type: "Damage (minor)", amount: 120, date: "2025-08-12", status: "Paid" },
  ]
  const total = penalties.filter((p) => p.status === "Unpaid").reduce((s, p) => s + p.amount, 0)

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Penalties & Fines</h1>

      <Card className="bg-card border border-border">
        <CardHeader>
          <CardTitle>Total Outstanding</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-semibold">₹{total}</CardContent>
      </Card>

      <section className="grid gap-3">
        {penalties.map((p, idx) => (
          <div
            key={idx}
            className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border p-3"
          >
            <div>
              <div className="font-medium">{p.book}</div>
              <div className="text-xs text-muted-foreground">
                {p.type} • {p.date}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-medium">₹{p.amount}</div>
              {p.status === "Paid" ? (
                <Badge className="bg-(--color-success) text-(--color-success-foreground)">Paid</Badge>
              ) : (
                <>
                  <Badge className="bg-destructive text-destructive-foreground">Unpaid</Badge>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Pay Now
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </section>

      <Card className="bg-card border border-border">
        <CardHeader>
          <CardTitle>Penalty Rules Reference</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-1">
          <div>Late return: ₹50/day after 1 month</div>
          <div>Damage penalties: 10% (minor) or 50% (major) of book cost</div>
          <div>Missing book: 200% of book cost after 1 month overdue</div>
        </CardContent>
      </Card>
    </div>
  )
}
