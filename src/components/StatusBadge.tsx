import type { Status } from '@/data/projects'

const tone: Record<Status, string> = {
  Publicerad: 'status-badge--live',
  Alfa: 'status-badge--alpha',
  'Proof-of-concept': 'status-badge--build',
  Tidigt: 'status-badge--build',
  Idéfas: 'status-badge--idle',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`status-badge ${tone[status]}`}
    >
      {status}
    </span>
  )
}
