"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import Link from "next/link";
import { useMemo, useState } from "react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/siteData";

const logoSrc = "/logo/logo-black.png";

const TopNav = () => {
  const [open, setOpen] = useState(false);

  const mobileContent = useMemo(
    () => (
      <nav className="flex flex-col gap-8">
        <img src={logoSrc} alt="VendingCrowd logo" className="w-40" />

        <ul className="flex flex-col gap-4 text-lg font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.name} href={link.path}>
              <img src={link.icon} alt="" className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </nav>
    ),
    []
  );

  return (
    <header className="relative bg-[#fff7e8]   ">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="relative xl:min-w-[1620px] mx-auto px-20 py-4 flex items-center justify-between">
        {/* Left socials */}
        <div className="hidden md:flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.name} href={link.path}>
              <span className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center bg-white">
                <img src={link.icon} alt="" className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="VendingCrowd" className="h-8" />
        </Link>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-black font-medium text-sm hover:bg-black hover:text-white transition"
          >
            Get Free Demo Access →
          </Link>

          <Button
            aria-label="Open navigation"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            className="md:hidden"
          />
        </div>
      </div>

      <Drawer
        placement="right"
        open={open}
        width={320}
        onClose={() => setOpen(false)}
        styles={{ body: { padding: "2rem" }, header: { display: "none" } }}
      >
        {mobileContent}
      </Drawer>
    </header>
  );
};

export default TopNav;
