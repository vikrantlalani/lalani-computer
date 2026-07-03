import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: "Contact Us | Request an IT Quote",
  description: "Get in touch with Lalani Computers for custom IT hardware quotes, bulk corporate orders, turnkey networking setups, and AMC support.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
