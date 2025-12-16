import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '0xAsta',
  description: 'Cybersecurity writeups, notes, and research by 0xAsta.',
  href: 'https://astro-erudite.vercel.app',
  author: '0xAsta',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/writeups',
    label: 'writeups',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/0xAstaaa',
    label: 'GitHub',
  },
  {
    href: 'https://tryhackme.com/p/0xAsta',
    label: 'TryHackMe',
  },
  {
    href: 'https://www.instagram.com/x0jb',
    label: 'Instagram',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Instagram: 'lucide:instagram',
}
