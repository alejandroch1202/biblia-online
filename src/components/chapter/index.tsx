import { Cards } from 'nextra/components'

interface ChapterProps {
  book: string
  slug: string
  chapter: string
  text: string[]
}

export const Chapter = ({ book, chapter, text, slug }: ChapterProps) => {
  if (text === undefined || text.length === 0) {
    return <p>Capítulo no encontrado.</p>
  }

  const groups: string[][] = []

  for (let i = 0; i < text.length; i += 3) {
    const group = text.slice(i, i + 3)
    groups.push(group)
  }

  return (
    <div>
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        {book} {chapter}
      </h1>

      <hr className="_my-8 _border-neutral-200/70 contrast-more:_border-neutral-400 dark:_border-primary-100/10 contrast-more:dark:_border-neutral-400" />

      {groups.map((group, index) => (
        <div key={`div-${index}`}>
          <p key={`p-${index}`}>
            {group.map((verse, verseIndex) => (
              <span key={`span-${verseIndex}`}>
                {' '}
                <strong>{index * 3 + 1 + verseIndex}</strong> {verse}
              </span>
            ))}
          </p>
          <br />
        </div>
      ))}
      <Cards num={2}>
        <Cards.Card
          icon={<>←</>}
          title=" Anterior"
          href={`/${slug}/capitulo-${Number(chapter) - 1}`}
        />
        <Cards.Card
          arrow
          title="Siguiente"
          href={`/${slug}/capitulo-${chapter + 1}`}
        />
      </Cards>
    </div>
  )
}
