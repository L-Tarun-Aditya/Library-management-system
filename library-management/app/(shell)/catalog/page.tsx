"use client"

import { BookCard } from "@/components/book-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const data = [
  { id: "1", title: "Clean Code", author: "Robert C. Martin", category: "Programming", available: true },
  { id: "2", title: "Design Patterns", author: "GoF", category: "Programming", available: false },
  { id: "3", title: "Atomic Habits", author: "James Clear", category: "Self-help", available: true },
  { id: "4", title: "Sapiens", author: "Yuval Noah Harari", category: "History", available: true },
]

export default function CatalogPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string | undefined>(undefined)
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  const filtered = data.filter((b) => {
    const matchesSearch = [b.title, b.author, b.category].some((t) => t.toLowerCase().includes(search.toLowerCase()))
    const matchesCategory = category ? b.category === category : true
    const matchesAvailability = onlyAvailable ? b.available : true
    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div className="grid gap-4 lg:grid-row">
      <aside className="space-y-4">
        <Card className="bg-card border border-border p-4 space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Title, author, category"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Category</Label>
            <Select value={category} onValueChange={(v) => setCategory(v)}>
              <SelectTrigger>
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Programming">Programming</SelectItem>
                <SelectItem value="Self-help">Self-help</SelectItem>
                <SelectItem value="History">History</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="available" checked={onlyAvailable} onCheckedChange={(v) => setOnlyAvailable(!!v)} />
            <Label htmlFor="available" className="text-sm text-muted-foreground">
              Only available
            </Label>
          </div>
        </Card>
      </aside>

      <section className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {filtered.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </section>
    </div>
  )
}
