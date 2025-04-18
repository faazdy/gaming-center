import { v4 as uuid } from "uuid"
import PS4 from "./icons/ps4.png"
import PC from "./icons/pc.png"
import PS5 from "./icons/ps5.png"
import XboxOne from "./icons/xboxseries.png"
import XboxSeries from "./icons/xboxseriesx.png"

export const services = [
    {
        id: uuid(),
        nameService: 'PS4',
        price: 5,
        icon: PS4
    },
    {
        id: uuid(),
        nameService: 'PS5',
        price: 6,
        icon: PS5
    },
    {
        id: uuid(),
        nameService: 'PC GAMER',
        price: 7,
        icon: PC
    },
    {
        id: uuid(),
        nameService: 'Xbox Series X|S',
        price: 6,
        icon: XboxSeries
    },
    {
        id: uuid(),
        nameService: 'Xbox One',
        price: 5,
        icon: XboxOne
    }
]
export const clientsReviews = [
  {
    id: uuid(),
    username: 'Shane Lawson',
    picUser: "https://randomuser.me/api/portraits/women/1.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "Amazing experience! The Xbox area is sick and the chairs are super comfy."
  },
  {
    id: uuid(),
    username: 'Martin Lloyd',
    picUser: "https://randomuser.me/api/portraits/men/2.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "The gaming vibe is top-notch. Came with friends and had a blast. Totally recommended!"
  },
  {
    id: uuid(),
    username: 'Verna Carroll',
    picUser: "https://randomuser.me/api/portraits/women/3.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "First time in a gaming center and I loved it! Great service and fast PCs."
  },
  {
    id: uuid(),
    username: 'Christina Reid',
    picUser: "https://randomuser.me/api/portraits/women/6.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "The tournaments are well organized and fun. I even won a couple of skins 😎"
  },
  {
    id: uuid(),
    username: 'Luis Gomez',
    picUser: "https://randomuser.me/api/portraits/men/10.jpg",
    stars: "⭐⭐⭐⭐",
    review: "Everything was great, but there was a bit of a wait for the PS5. Still worth it!"
  },
  {
    id: uuid(),
    username: 'Camila Duarte',
    picUser: "https://randomuser.me/api/portraits/women/11.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "Booked a session with my brother and it was perfect. Fast internet and tasty snacks."
  },
  {
    id: uuid(),
    username: 'Joshua Lee',
    picUser: "https://randomuser.me/api/portraits/men/12.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "Loved the gaming setup. Super clean, well-organized, and awesome background music."
  },
  {
    id: uuid(),
    username: 'Isabella Rossi',
    picUser: "https://randomuser.me/api/portraits/women/14.jpg",
    stars: "⭐⭐⭐⭐⭐",
    review: "If you love console gaming with friends, this is the spot. Great vibes all around!"
  }
];
