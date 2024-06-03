import {ThemeProvider} from "../../providers/themeProvier";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
export const metadata: Metadata = {
    title: "DreamWeaver",
    description: "DreamWeaver",
};


export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/*<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >*/}
        <div className="flex flex-col min-h-screen">
            <Header/>
                {children}
            <Footer/>
        </div>

           {/* </ThemeProvider>*/}
        </body>
        </html>
);
}
