import Image from 'next/image'
import Link from 'next/link'
import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image
        src={'/favicon.ico'}
        alt="Biblia Online Logo"
        width={'30'}
        height={'30'}
      ></Image>
      <span style={{ marginLeft: '.4em', fontWeight: 'bold' }}>
        Biblia Online
      </span>
    </>
  ),
  footer: {
    content: (
      <span>
        Made with ♥︎ by{' '}
        <strong>
          <Link href={'https://alejandroch.com'}> alejandroch.com</Link>
        </strong>
      </span>
    ),
  },
  feedback: { content: null },
  search: { placeholder: 'Buscar' },
  editLink: { component: null },
  head: () => {
    const config = useConfig()
    const dynamicTitle = `${config.title} – Biblia Online`
    return (
      <>
        <title>{dynamicTitle}</title>
        {/* Add other head elements here if necessary */}
      </>
    )
  },
}

export default config
