import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
const MenuItem = ({item, addItem}: MenuItemProps) => {
  return (
    <button
        className="border-2 border-teal-500 w-full p-3 flex justify-between hover:bg-teal-400"
        onClick={() => addItem(item)}
    >        
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}

export default MenuItem