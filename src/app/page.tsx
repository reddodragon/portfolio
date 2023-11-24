export default function Home() {
    return (
        <main className="sm:h-screen bg-[#000814]">
            <svg
                style={{ width: 0, height: 0, position: "absolute" }}
                aria-hidden="true"
                focusable="false"
            >
                <linearGradient id="my-cool-gradient" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1a2a6c" />
                    <stop offset="50%" stop-color="#b21f1f" />
                    <stop offset="100%" stop-color="#fdbb2d" />
                </linearGradient>
            </svg>
            <div className="patterns flex">
                <div
                    style={{
                        backgroundImage: 'url("https://ibb.co/ZGCk6MX")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="  flex flex-col items-center justify-center h-full text-white flex-1"
                >
                    <svg width="auto" height="100px">
                        <text
                            x="50%"
                            y="60%"
                            className="svg"
                            text-anchor="middle"
                        >
                            Federico
                        </text>
                    </svg>
                    <svg width="auto" height="100px">
                        <text
                            x="50%"
                            y="60%"
                            className="svg"
                            text-anchor="middle"
                        >
                            Ameratte
                        </text>
                    </svg>
                    <p className="font-lora text-lg mt-4">Frontend Developer</p>
                </div>
            </div>
        </main>
    );
}
