import Navbar from "@/components/NavBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
