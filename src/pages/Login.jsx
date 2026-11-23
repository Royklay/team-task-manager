<div className="flex min-h-screen items-center justify-center p-5">
  <div className="w-full max-w-[400px] rounded-xl bg-white p-6 shadow-md">
    <h1 className="mb-3 text-3xl font-bold text-[#198754]">Login</h1>

    <p className="my-4 text-gray-600">
      Welcome back! Please login to continue.
    </p>

    <input
      type="email"
      placeholder="Email address"
      className="mb-3 w-full rounded-md border border-gray-300 p-3 focus:border-[#198754] focus:outline-none"
    />

    <input
      type="password"
      placeholder="Password"
      className="mb-4 w-full rounded-md border border-gray-300 p-3 focus:border-[#198754] focus:outline-none"
    />

    <button className="w-full rounded-md bg-[#198754] p-3 text-white hover:bg-[#146c43]">
      Login
    </button>

    <p className="mt-4 text-center">
      Don't have an account?
      <a href="/register" className="ml-1 text-[#198754] underline">
        Register
      </a>
    </p>
  </div>
</div>;
