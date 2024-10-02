import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/remix";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ramen Remix" },
    { name: "description", content: "Ramen Remix" },
  ];
};

export default function Index() {
  return (
    <div className="p-8">
      <h1>Index Route</h1>
      <SignedIn>
        <p>You are signed in!</p>
        <UserButton />

        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>

        <SignInButton />

        <SignUpButton />
      </SignedOut>
    </div>
  );
}
