import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}
const MenuItem = ({item}: MenuItemProps) => {
  return (
    <button
        className="border-2 border-teal-500 w-full p-3 flex justify-between hover:bg-teal-400"
    >        
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem