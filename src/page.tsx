import { Link, Outlet } from "react-router-dom";

export function Page() {
  return (
    <>
      <div>Page 01</div>
      <Link to="/page/modal/1">Open Modal</Link>
      <Outlet />
    </>
  )
}
