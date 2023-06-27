'use client'
import './styles/index.scss'
import {Roboto} from 'next/font/google'
import {ReactNode} from "react";
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";
import styles from "./main.module.scss";
import {useDynamicViewHeight} from "@/shared/hooks";
import {StoreProvider} from "@/app/providers/StoreProvider";

const roboto = Roboto({
    weight: ["100", "400", "700"],
    style: ["normal", "italic"],
    subsets: ["cyrillic"],
    variable: "--font-family-main"
})

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    useDynamicViewHeight()
    return (
        <html lang="en" className={roboto.variable}>
        <body>
        <StoreProvider>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </StoreProvider>
        <div id="portal"/>
        </body>
        </html>
    )
}
