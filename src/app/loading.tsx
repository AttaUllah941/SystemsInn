export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-screen items-center justify-center bg-brand-navy"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-electric/30 border-t-brand-cyan" />
    </div>
  );
}
