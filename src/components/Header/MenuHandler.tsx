import { BiMenuAltLeft } from 'react-icons/bi'

interface MenuHandlerProps {}

export const MenuHandler: React.FC<MenuHandlerProps> = () => {
  return (
    <div className="tooltip tooltip-bottom" data-tip="Menu">
      <label className="btn btn-primary">
        <BiMenuAltLeft className="text-xl" />
      </label>
    </div>
  )
}
