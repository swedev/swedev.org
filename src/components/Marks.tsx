import type { ReactNode } from 'react'

/**
 * Project marks, reproduced from each project's own graphic profile. Each
 * sits on a tile in the project's paper colour so it reads in both themes.
 */

export interface Brand {
  accent: string
  paper: string
  mark: ReactNode
}

const openvera: Brand = {
  accent: '#C0562A',
  paper: '#FBFAF6',
  mark: (
    <svg viewBox="14 19 72 62" className="h-6 w-6">
      <path d="M22 27 C41 31 48 42 48 53 L48 75 C42 64 33 59 22 57 Z" fill="#14150F" />
      <path d="M78 27 C59 31 52 42 52 53 L52 75 C58 64 67 59 78 57 Z" fill="#C0562A" />
    </svg>
  ),
}

const styrla: Brand = {
  accent: '#00549B',
  paper: '#FFFFFF',
  mark: (
    <svg viewBox="0 0 500 640" className="h-6 w-auto">
      <g transform="translate(8 0)">
        <g fill="#00549B">
          <circle cx="69" cy="144" r="44" />
          <path d="M0 243 C50 244 94 234 135 212 L135 571 C93 545 60 512 37 474 C12 433 0 389 0 342 Z" />
        </g>
        <g fill="#03915A">
          <circle cx="242" cy="75" r="55" />
          <path d="M170 183 C215 198 269 198 315 183 L315 598 L242 640 L170 598 Z" />
        </g>
        <g fill="#F2B624">
          <circle cx="417" cy="144" r="44" />
          <path d="M350 212 C391 234 435 244 485 243 L485 342 C485 389 473 433 448 474 C425 512 392 545 350 571 Z" />
        </g>
      </g>
    </svg>
  ),
}

const timla: Brand = {
  accent: '#E69A2E',
  paper: '#FBF1DC',
  mark: (
    <svg viewBox="10 8 32 32" className="h-7 w-7" fill="none">
      <g transform="rotate(-90 24 24)">
        <rect x="12" y="14" width="5.5" height="24" rx="2.75" fill="#231D16" />
        <rect x="21.25" y="23" width="5.5" height="15" rx="2.75" fill="#E69A2E" />
        <circle cx="24" cy="17" r="2.9" fill="#E69A2E" />
        <rect x="30.5" y="19" width="5.5" height="19" rx="2.75" fill="#231D16" />
      </g>
    </svg>
  ),
}

export const brands: Record<string, Brand> = { openvera, styrla, timla }
