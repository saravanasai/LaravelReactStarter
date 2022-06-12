const Header = () => {
    return (
        <header className="navbar navbar-expand-md navbar-dark d-print-none">
            <div className="container-xl">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                        <img
                            src="./static/logo-white.svg"
                            alt="Tabler"
                            className="navbar-brand-image"
                            width={110}
                            height={32}
                        />
                    </a>
                </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                        <div className="btn-list">
                            <a
                                href="https://github.com/tabler/tabler"
                                className="btn btn-dark"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/brand-github */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <desc>
                                        Download more icon variants from
                                        https://tabler-icons.io/i/brand-github
                                    </desc>
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                                Source code
                            </a>
                            <a
                                href="https://github.com/sponsors/codecalm"
                                className="btn btn-dark"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon text-pink"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <desc>
                                        Download more icon variants from
                                        https://tabler-icons.io/i/heart
                                    </desc>
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                                Sponsor
                            </a>
                        </div>
                    </div>
                    <div className="d-none d-md-flex">
                        <a
                            href="?theme=dark"
                            className="nav-link px-0 hide-theme-dark"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            {/* Download SVG icon from http://tabler-icons.io/i/moon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/moon
                                </desc>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                        </a>
                        <a
                            href="?theme=light"
                            className="nav-link px-0 hide-theme-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            {/* Download SVG icon from http://tabler-icons.io/i/sun */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <desc>
                                    Download more icon variants from
                                    https://tabler-icons.io/i/sun
                                </desc>
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx={12} cy={12} r={4} />
                                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                            </svg>
                        </a>
                        <div className="nav-item dropdown d-none d-md-flex me-3">
                            <a
                                href="#"
                                className="nav-link px-0"
                                data-bs-toggle="dropdown"
                                tabIndex={-1}
                                aria-label="Show notifications"
                            >
                                {/* Download SVG icon from http://tabler-icons.io/i/bell */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <desc>
                                        Download more icon variants from
                                        https://tabler-icons.io/i/bell
                                    </desc>
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                </svg>
                                <span className="badge bg-red" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Last updates
                                        </h3>
                                    </div>
                                    <div className="list-group list-group-flush list-group-hoverable">
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="status-dot status-dot-animated bg-red d-block" />
                                                </div>
                                                <div className="col text-truncate">
                                                    <a
                                                        href="#"
                                                        className="text-body d-block"
                                                    >
                                                        Example 1
                                                    </a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Change deprecated html
                                                        tags to text decoration
                                                        classes (#29604)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a
                                                        href="#"
                                                        className="list-group-item-actions"
                                                    >
                                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon text-muted"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <desc>
                                                                Download more
                                                                icon variants
                                                                from
                                                                https://tabler-icons.io/i/star
                                                            </desc>
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="status-dot d-block" />
                                                </div>
                                                <div className="col text-truncate">
                                                    <a
                                                        href="#"
                                                        className="text-body d-block"
                                                    >
                                                        Example 2
                                                    </a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        justify-content:between
                                                        ⇒
                                                        justify-content:space-between
                                                        (#29734)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a
                                                        href="#"
                                                        className="list-group-item-actions show"
                                                    >
                                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon text-yellow"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <desc>
                                                                Download more
                                                                icon variants
                                                                from
                                                                https://tabler-icons.io/i/star
                                                            </desc>
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="status-dot d-block" />
                                                </div>
                                                <div className="col text-truncate">
                                                    <a
                                                        href="#"
                                                        className="text-body d-block"
                                                    >
                                                        Example 3
                                                    </a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Update change-version.js
                                                        (#29736)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a
                                                        href="#"
                                                        className="list-group-item-actions"
                                                    >
                                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon text-muted"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <desc>
                                                                Download more
                                                                icon variants
                                                                from
                                                                https://tabler-icons.io/i/star
                                                            </desc>
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <span className="status-dot status-dot-animated bg-green d-block" />
                                                </div>
                                                <div className="col text-truncate">
                                                    <a
                                                        href="#"
                                                        className="text-body d-block"
                                                    >
                                                        Example 4
                                                    </a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Regenerate
                                                        package-lock.json
                                                        (#29730)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a
                                                        href="#"
                                                        className="list-group-item-actions"
                                                    >
                                                        {/* Download SVG icon from http://tabler-icons.io/i/star */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon text-muted"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <desc>
                                                                Download more
                                                                icon variants
                                                                from
                                                                https://tabler-icons.io/i/star
                                                            </desc>
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                                fill="none"
                                                            />
                                                            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link d-flex lh-1 text-reset p-0"
                            data-bs-toggle="dropdown"
                            aria-label="Open user menu"
                        >
                            <span
                                className="avatar avatar-sm"
                                style={{
                                    backgroundImage:
                                        "url(./static/avatars/000m.jpg)"
                                }}
                            />
                            <div className="d-none d-xl-block ps-2">
                                <div>Paweł Kuna</div>
                                <div className="mt-1 small text-muted">
                                    UI Designer
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="#" className="dropdown-item">
                                Set status
                            </a>
                            <a href="#" className="dropdown-item">
                                Profile &amp; account
                            </a>
                            <a href="#" className="dropdown-item">
                                Feedback
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                Settings
                            </a>
                            <a href="#" className="dropdown-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
