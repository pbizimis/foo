import { currentUser } from "@clerk/nextjs";

export default async function Example() {
  const user = await currentUser();
  if (!user) return null;
  console.log(user);

  return <div>Hello, {user.id} welcome to Clerk</div>;
}
