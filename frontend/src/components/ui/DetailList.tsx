export function DetailList({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return (
    <dl className="border-b border-stone">
      {items.map(([k, v]) => (
        <div key={k} className="flex justify-between gap-6 border-t border-stone py-3 text-sm">
          <dt className="text-mist">{k}</dt>
          <dd className="text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
