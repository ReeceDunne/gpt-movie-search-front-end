"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Search from "../search/page";
import Login from "../login/page";
import Socials from "../socials/page";
import UserProfile from "../userProfile/page";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      user && (
        <div className="flex flex-col min-h-screen">
          <UserProfile user={user} />
          <Search />
          {/* Footer with Socials */}
          <footer className="mt-auto flex justify-center items-center p-6">
            <Socials />
          </footer>
        </div>
      )
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
