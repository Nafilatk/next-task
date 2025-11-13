import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
        <Link href = "/users">Users</Link>
    </header>
  );
}
