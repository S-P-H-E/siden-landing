import Link from "next/link";
import Image from "next/image";

export default function TOS() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">Terms of Service</h1>
                <p className="text-[var(--description)] mt-4">Last updated: 7/20/2025</p>
            </div>

            {/* Content Card */}
            <div className="p-6 md:p-10 shadow-lg rounded-2xl border border-[#e8e8e8] space-y-8 w-full bg-white/80 backdrop-blur-sm">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Acceptance of Terms</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        By accessing and using Siden&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Use of Services</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        You may use our services for lawful purposes only. You agree not to use the service:
                    </p>
                    <ul className="list-disc list-inside text-[var(--description)] space-y-2 text-left">
                        <li>In any way that violates applicable laws or regulations</li>
                        <li>To transmit harmful, offensive, or inappropriate content</li>
                        <li>To interfere with or disrupt the service or servers</li>
                        <li>To attempt unauthorized access to our systems</li>
                    </ul>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">User Accounts</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Intellectual Property</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        The service and its original content, features, and functionality are owned by Siden and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Limitation of Liability</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        In no event shall Siden be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the service.
                    </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Changes to Terms</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our service.
                    </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[var(--border)]">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--foreground)]">Contact Information</h2>
                    <p className="text-[var(--description)] text-base md:text-lg">
                        If you have any questions about these Terms of Service, please contact us at{" "}
                        <a href="mailto:legal@siden.ai" className="text-[var(--accent)] hover:underline">
                            legal@siden.ai
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