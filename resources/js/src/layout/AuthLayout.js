const AuthLayout = () => {
    return (
        <>
            <div class="page page-center">
                <div className="container-tight py-4">
                    <form
                        className="card card-md"
                        action="."
                        method="get"
                        autoComplete="off"
                    >
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <h2 className="card-title">Account Locked</h2>
                                <p className="text-muted">
                                    Please enter your password to unlock your
                                    account
                                </p>
                            </div>
                            <div className="mb-4">
                                <span
                                    className="avatar avatar-xl mb-3"
                                    style={{
                                        backgroundImage:
                                            "url(./static/avatars/000m.jpg)"
                                    }}
                                />
                                <h3>Paweł Kuna</h3>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password…"
                                />
                            </div>
                            <div>
                                <a href="#" className="btn btn-primary w-100">
                                    {/* Download SVG icon from http://tabler-icons.io/i/lock-open */}
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
                                            https://tabler-icons.io/i/lock-open
                                        </desc>
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <rect
                                            x={5}
                                            y={11}
                                            width={14}
                                            height={10}
                                            rx={2}
                                        />
                                        <circle cx={12} cy={16} r={1} />
                                        <path d="M8 11v-5a4 4 0 0 1 8 0" />
                                    </svg>
                                    Unlock
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthLayout
