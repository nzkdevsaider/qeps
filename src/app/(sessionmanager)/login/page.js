export default function Login() {
  return (
    <div className="flex flex-col items-center px-8 h-screen justify-center gap-2">
      <form
        className="flex flex-col w-full justify-center gap-2 text-foreground max-w-md"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" type="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" type="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
