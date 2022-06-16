import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
    const path = window.location.pathname;
  return (
    <nav className="nav">
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <CustomLink to="/Films">Films</CustomLink>
            <CustomLink to="/People">People</CustomLink>
            <CustomLink to="/Planets">Planets</CustomLink>
            <CustomLink to="/Species">Species</CustomLink>
            <CustomLink to="/Starships">Starships</CustomLink>
            <CustomLink to="/Vehicles">Vehicles</CustomLink>
        </ul>
    </nav>
    );
}

function CustomLink({to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                    </Link>
            </li>
    );
}
