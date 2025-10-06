import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle>User</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="text-sm text-muted-foreground">jane@example.com</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border border-border lg:col-span-2">
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            <Button variant="outline">Edit Profile</Button>
            <Button variant="outline">Account Settings</Button>
            <Button className="bg-primary text-primary-foreground">Logout</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="bg-card border border-border">
          <CardHeader>
            <CardTitle>Borrowing Statistics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Total Borrowed: 18 • Active: 2 • Overdue: 0
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
