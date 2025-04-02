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