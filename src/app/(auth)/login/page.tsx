import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-80px-400px)] items-center justify-center px-4 py-20">
      <LoginForm />
    </div>
  );
}
