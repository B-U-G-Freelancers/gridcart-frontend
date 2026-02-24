import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const LoginForm = () => {
  return (
    <div className="mx-auto max-w-md space-y-8 rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-emerald-900 dark:text-emerald-50">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Sign in to your royal account
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email Address</label>
          <input
            type="email"
            placeholder="king@gridcart.com"
            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none focus:border-gold dark:border-zinc-800 dark:bg-zinc-900"
          />
        </div>

        <Button className="w-full bg-emerald-900 py-6 text-lg font-bold">
          Sign In
        </Button>
      </form>

      <div className="text-center text-sm">
        <span className="text-zinc-500">Don&apos;t have an account? </span>
        <Link href="/register" className="font-bold text-gold hover:underline">
          Join the Kingdom
        </Link>
      </div>
    </div>
  );
};
