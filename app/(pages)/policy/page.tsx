import Link from "next/link";
import Image from "next/image";

export default function Policy() {
    return (
        <div className="min-h-[100dvh] flex flex-col items-center gap-3 p-4 md:p-20 w-full max-w-4xl mx-auto relative overflow-hidden">
            
            {/* Header with Logo and Navigation */}
            <div className="w-full flex items-center justify-between mb-8 z-10">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Image src="/Logo.svg" alt="Siden Logo" className="brightness-0" width={25} height={25} />
                    <h1 className="text-2xl font-bold">Siden</h1>
                </Link>
                <Link 
                    href="/"
                    className="text-[var(--accent)] hover:underline font-medium transition-colors"
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Main content */}
            <div className="text-center w-full z-10 mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">Privacy Policy</h1>
                <p className="text-[var(--description)] mt-4">Last updated: 7/20/2025</p>
            </div>

            {/* Content Card */}
            <div className="p-6 md:p-10 shadow-lg rounded-2xl border border-[#e8e8e8] space-y-8 w-full bg-white/80 backdrop-blur-sm">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Information We Collect</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
                    <ul className="list-disc list-inside text-[var(--description)] space-y-2 text-left">
                        <li>Account information (name, email address)</li>
                        <li>Profile information and preferences</li>
                        <li>Communications with us</li>
                        <li>Usage data and analytics</li>
                    </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">How We Use Your Information</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">We use the information we collect to provide, maintain, and improve our services:</p>
                    <ul className="list-disc list-inside text-[var(--description)] space-y-2 text-left">
                        <li>To provide and operate our AI services</li>
                        <li>To communicate with you about our services</li>
                        <li>To improve and personalize your experience</li>
                        <li>To ensure security and prevent fraud</li>
                    </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Information Sharing</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Data Security</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Your Rights</h2>
                    <ul className="list-disc list-inside text-[var(--description)] space-y-2 text-left">
                        <li>Access and update your personal information</li>
                        <li>Delete your account and associated data</li>
                        <li>Opt out of certain communications</li>
                        <li>Request a copy of your data</li>
                    </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Contact Us</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:privacy@siden.ai" className="text-[var(--accent)] hover:underline">
                            privacy@siden.ai
                        </a>.
                    </p>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] opacity-10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 md:w-32 md:h-32 bg-[var(--accent)] opacity-5 rounded-full blur-xl"></div>
        </div>
    )
}