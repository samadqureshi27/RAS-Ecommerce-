import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-bold text-[#E8E6E1] mb-4">404</p>
      <h1 className="text-2xl font-bold text-[#1B2A4A] mb-3">
        Page Not Found
      </h1>
      <p className="text-[#9B9489] mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase">
        Back to Home
      </Link>
    </div>
  );
}
