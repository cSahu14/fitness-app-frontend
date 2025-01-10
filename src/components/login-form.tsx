
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
               
              <div className="grid gap-2">
                <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password <span className="text-red-600">*</span></Label>
                <Input id="password" type="password" placeholder="Enter Password" required />
              </div>
              <Button type="submit" className="w-full" disabled>
                <Loader2 className="animate-spin" />
                Login
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
              <Link to={"../../register"} className="underline underline-offset-4">
                Sign Up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
