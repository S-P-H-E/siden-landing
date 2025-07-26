export default function Tag({children}: {children: React.ReactNode}) {
    return (
        <div className="px-4 py-2 rounded-md bg-[var(--border)] text-white font-semibold mb-4">
            <p>{children}</p>
        </div>
    )
}