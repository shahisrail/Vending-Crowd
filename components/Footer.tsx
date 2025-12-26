import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black xl:min-w-[1620px] mx-auto text-gray-300 pt-16">
      <div className="   px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo & About */}
        <div>
          <Image
            src="/logo/logo-white.png"
            alt="VendingCrowd Logo"
            width={180}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-gray-400 mb-6">
            VendingCrowd was built by vending operators, for vending operators.
          </p>

          <p className="mb-3 font-medium">Follow Us</p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Instagram">
              <Image src="/logo/instagram-w.svg" alt="Instagram" width={32} height={32} />
            </Link>
            <Link href="#" aria-label="TikTok">
              <Image src="/logo/tiktalk-w.svg" alt="TikTok" width={32} height={32} />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Image src="/logo/facebook-w.svg" alt="Facebook" width={32} height={32} />
            </Link>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms Of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              📞 <span>(617) 533-3510</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <span>support@vendingcrowd.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm text-gray-500">
        All rights reserved VendingCrowd © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
