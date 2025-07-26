import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/images/logo/samriddhi-logo.png"
                alt="Team Samriddhi"
                width={60}
                height={60}
                className="h-14 w-auto bg-white/10 rounded-lg p-2"
              />
              <div>
                <Link href="/" className="text-2xl font-bold">
                  Team Samriddhi
                </Link>
                <p className="text-sm text-blue-400">ABLE Program - JCI India</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Proud participants of the Academy for Business Leadership Excellence (ABLE) program by JCI India.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p><span className="text-gray-300 font-semibold">LED Coach:</span> JFS Himadri Shailendra Sinha - Global Branding Specialist</p>
              <p><span className="text-gray-300 font-semibold">Team Coach:</span> JF Harishkumar C</p>
              <p><span className="text-gray-300 font-semibold">Date:</span> January 25-26, 2025</p>
              <p><span className="text-gray-300 font-semibold">Venue:</span> Bengaluru, Karnataka</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about-samriddhi" className="text-gray-300 hover:text-white transition-colors">
                  About Samriddhi
                </Link>
              </li>
              <li>
                <Link href="/able-program" className="text-gray-300 hover:text-white transition-colors">
                  ABLE Program
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Team Leader</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="text-white font-medium">Vikas BC</li>
              <li className="text-sm">Team Leader - Samriddhi</li>
              <li className="text-sm">Associate Financial Planner</li>
              <li className="text-sm">Wealth Builders - Investment Service</li>
              <li className="text-sm mt-2">Mobile: +91 81237 65014</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300">
            <p>&copy; 2025 Team Samriddhi. All rights reserved.</p>
            <p className="mt-2 md:mt-0 text-sm">
              Designed & Developed by{" "}
              <a 
                href="https://eagleminds.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Eagleminds Technologies Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}