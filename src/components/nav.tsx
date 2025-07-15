import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        social.<strong>media</strong>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
        </ul>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <Image
              alt=""
              src="/avatar.jpg"
              className="size-8 rounded-full"
              height="32"
              width="32"
            />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href="/profile/1">Profile</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
