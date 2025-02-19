import Socials from "../socials/page";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen space-y-6 px-4">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow space-y-6">
        {/* Introduction Text */}
        <div className="text-center max-w-xl">
          <h1 className="text-3xl font-semibold text-white mb-4">
            Welcome to the Movie Search App
          </h1>
          <p className="text-lg text-gray-400">
            This is a search bar where you can look up random things in movies.
            Start searching to explore!
          </p>
        </div>

        {/* Login Button */}
        <a
          href="/api/auth/login"
          className="px-7 py-3 bg-blue-500 text-white text-2xl font-semibold rounded-2xl shadow-xl text-center hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Login
        </a>
      </div>

      {/* Footer with Socials */}
      <footer className="mt-auto flex justify-center items-center p-6">
        <Socials />
      </footer>
    </div>
  );
}
