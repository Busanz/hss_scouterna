export type Boat = {
    name: string
    type: '2-krona' | 'Big-Buster' | 'H-boat' | 'Optimist' | 'Viggen'
    description: string
    facts: {
        year: string
        topSpeed: string
        width: string
        length: string
    }
    image: string
}

export const boats: Boat[] = [
  {
    name: 'Vendela',
    type: '2-krona',
    description:
      'Vendela är en stabil 2-krona som passar bra för seglingsträning, teamwork och övningar nära land.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 5 knop',
      width: '1,69 m',
      length: '4,63 m',
    },
    image: '/img/ourboats-section/vendela.png',
  },
  {
    name: 'Piff',
    type: 'Optimist',
    description:
      'Piff är en liten optimistjolle som passar perfekt för yngre scouter som lär sig grunderna i segling.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 4 knop',
      width: '1,10 m',
      length: '2,30 m',
    },
    image: '/img/ourboats-section/piff.png',
  },
  {
    name: 'Puff',
    type: 'Optimist',
    description:
      'Puff används för nybörjarsegling och hjälper scouter att träna styrning, balans och trygghet på vattnet.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 4 knop',
      width: '1,10 m',
      length: '2,30 m',
    },
    image: '/img/ourboats-section/fiveBoats.png',
  },
  {
    name: 'Goofy',
    type: '2-krona',
    description:
      'Goofy används för jollesegling och är en bra båt för scouter som vill utveckla sin känsla för segel, vind och balans.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 5 knop',
      width: '1,69 m',
      length: '4,63 m',
    },
    image: '/img/ourboats-section/goofy.png',
  },
  {
    name: 'Tryggve',
    type: 'Big-Buster',
    description:
      'Våran följebåt är en Big-Buster specialombyggd för scoutverksamheten. Båten lämpar sig väl för transporter och övervakning.',
    facts: {
      year: '1999',
      topSpeed: 'ca 27 knop',
      width: '1,9 m',
      length: '4,95 m',
    },
    image: '/img/ourboats-section/tryggve.png',
  },
  {
    name: 'Nocke',
    type: '2-krona',
    description:
      'Nocke är en lättseglad träningsbåt som fungerar bra för både nybörjare och scouter med lite mer erfarenhet.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 5 knop',
      width: '1,69 m',
      length: '4,63 m',
    },
    image: '/img/ourboats-section/threeBoats.png',
  },
  {
    name: 'Lumbago',
    type: 'H-boat',
    description:
      'Lumbago är en större segelbåt som passar för längre seglingar, navigationsträning och aktiviteter med flera scouter ombord.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 6 knop',
      width: '2,18 m',
      length: '8,28 m',
    },
    image: '/img/ourboats-section/lumbago.png',
  },
  {
    name: 'Cephalea',
    type: 'Viggen',
    description:
      'Cephalea är en trygg och kompakt segelbåt som passar bra för tursegling, övningar och scoutaktiviteter på Mälaren.',
    facts: {
      year: 'Okänt',
      topSpeed: 'ca 5-6 knop',
      width: '2,20 m',
      length: '7,10 m',
    },
    image: '/img/ourboats-section/cephalea.png',
  },
]
