import type { Status } from '@/data/projects'

const tone: Record<Status, string> = {
  Publicerad: 'bg-blue text-white',
  Alfa: 'bg-blue-wash text-blue-deep',
  'Proof-of-concept': 'bg-blue-wash text-blue-deep',
  Tidigt: 'border border-line text-ink-soft',
  Idéfas: 'border border-line text-ink-soft',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wide ${tone[status]}`}
    >
      {status}
    </span>
  )
}
