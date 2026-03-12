import Link from 'next/link'

import { FaAngleLeft } from '~/components/icons'
import { MobileMenu } from '~/components/MobileMenu'

type Props = {
  about: string
  projects: string
  contact: string
  backLabel?: string
  backHref?: string
  onAboutClick?: () => void
  onProjectsClick?: () => void
  onContactClick?: () => void
  onBlogClick?: () => void
}

export default function Header({
  about,
  projects,
  contact,
  backLabel,
  backHref,
  onAboutClick,
  onProjectsClick,
  onContactClick,
  onBlogClick,
}: Props) {
  return (
    <div className="header">
      <ul>
        {backLabel && backHref && (
          <li>
            <Link href={backHref} scroll={false} className="backLink">
              <FaAngleLeft size={16} /> {backLabel}
            </Link>
          </li>
        )}
        <li>
          <a href="#about" onClick={onAboutClick}>
            {about}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onProjectsClick}>
            {projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onContactClick}>
            {contact}
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@eduardofelipi"
            target="_blank"
            rel="noreferrer"
            onClick={onBlogClick}
          >
            Blog
          </a>
        </li>
      </ul>
      <MobileMenu>
        {backLabel && backHref && (
          <li>
            <Link href={backHref} scroll={false} className="backLink">
              <FaAngleLeft size={16} /> {backLabel}
            </Link>
          </li>
        )}
        <li>
          <a href="#about" onClick={onAboutClick}>
            {about}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onProjectsClick}>
            {projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onContactClick}>
            {contact}
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@eduardofelipi"
            target="_blank"
            rel="noreferrer"
            onClick={onBlogClick}
          >
            Blog
          </a>
        </li>
      </MobileMenu>
    </div>
  )
}
