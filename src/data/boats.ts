export type Boat = {
    id: number
    name: string
    width: string
    length: string
    type: '2-krona' | 'Big-Buster' | 'H-boat' | 'Optimist' | 'Viggen'
    image: string
}

export const boats: Boat[] = [
  {
    id: 1,
    name: "Vendela",
    width: "1,69 m",
    length: "4,63 m",
    type: '2-krona',
    image: '/img/ourboats-section/vendela.png',
  },
  {
    id: 2,
    name: "Piff",
    width: "1,10 m",
    length: "2,30 m",
    type: 'Optimist',
    image: '/img/ourboats-section/piff.png',
  },
  {
    id: 3,
    name: "Puff",
    width: "1,10 m",
    length: "2,30 m",
    type: 'Optimist',
    image: '/img/ourboats-section/fiveBoats.png',
  },
  {
    id: 4,
    name: "Goofy",
    width: "1,69 m",
    length: "4,63 m",
    type: '2-krona',
    image: '/img/ourboats-section/goofy.png',
  },
  {
    id: 5,
    name: "Tryggve",
    width: "1,9 m",
    length: "4,95 m",
    type: 'Big-Buster',
    image: '/img/ourboats-section/tryggve.png',
  },
  {
    id: 6,
    name: "Nocke",
    width: "1,69 m",
    length: "4,63 m",
    type: '2-krona',
    image: '/img/ourboats-section/threeBoats.png',
  },
  {
    id: 7,
    name: "Lumbago",
    width: "2,18 m",
    length: "8,28 m",
    type: 'H-boat',
    image: '/img/ourboats-section/lumbago.png',
  },
  {
    id: 8,
    name: "Cephalea",
    width: "2,20 m",
    length: "7,10 m",
    type: 'Viggen',
    image: '/img/ourboats-section/cephalea.png',
  },
]
