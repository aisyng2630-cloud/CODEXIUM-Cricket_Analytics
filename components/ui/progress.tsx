export function Progress({ value = 0 }: { value?: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-secondary">
      <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
