import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Book = {
  id: string
  title: string
  author: string
  category: string
  available: boolean
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Card className="bg-card border border-border flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{book.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border">
          <Image
            src={`/placeholder.svg?height=360&width=270&query=book%20cover%20placeholder`}
            alt={`Cover of ${book.title}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-sm text-muted-foreground">{book.author}</div>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{book.category}</Badge>
          {book.available ? (
            <Badge className="bg-(--color-success) text-(--color-success-foreground)">Available</Badge>
          ) : (
            <Badge className="bg-destructive text-destructive-foreground">Borrowed</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full bg-primary text-primary-foreground" disabled={!book.available}>
          Borrow
        </Button>
      </CardFooter>
    </Card>
  )
}
