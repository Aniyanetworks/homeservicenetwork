import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import ConnectButton from "@/components/ConnectButton";
import { CONNECT } from "@/lib/content";
import { GA_ID } from "@/lib/track";

export const metadata: Metadata = {
  title: "Connect with HSN and Isael García Business",
  description: "Follow Home Service Network TX and Isael García Business.",
};

export default function ConnectPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-navy-950 px-4 pb-32 pt-10 text-white sm:py-16">
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      <div className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <Image
          src="/home-service-network-logo.png"
          alt="Home Service Network TX"
          width={747}
          height={337}
          priority
          className="h-14 w-auto"
        />
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{CONNECT.heading}</h1>

        <div className="flex w-full flex-col gap-4">
          {CONNECT.buttons.map((button) => (
            <ConnectButton key={button.id} {...button} />
          ))}
        </div>

        <p className="text-sm text-white/60">{CONNECT.instruction}</p>
      </div>
    </main>
  );
}
