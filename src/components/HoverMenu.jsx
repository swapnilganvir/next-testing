import Link from 'next/link';

export default function HoverMenu() {
  return (
    <div className="dropdown dropdown-center">
      <div tabIndex={0} role="button" className="font-semibold">
        Pages
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu mt-4 bg-white rounded-box z-1 w-40 p-2 shadow-sm"
      >
        <li>
          <Link href="/dashboard">
            <div>Dashboard</div>
          </Link>
        </li>
        <li>
          <Link href="/course">
            <div>Courses</div>
          </Link>
        </li>
        <li>
          <Link href="/checkout">
            <div>Checkout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
