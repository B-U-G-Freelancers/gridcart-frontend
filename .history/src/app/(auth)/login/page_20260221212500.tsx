import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  return (
    <form className="mt-8 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-1.5 block">
            Email Address
          </label>
          <Input type="email" placeholder="name@example.com" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1.5 block">Password</label>
          <Input type="password" placeholder="••••••••" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <Button className="w-full">Sign In</Button>

      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <a
          href="/signup"
          className="font-semibold text-primary hover:underline"
        >
          Create account
        </a>
      </p>
    </form>
  );
}
