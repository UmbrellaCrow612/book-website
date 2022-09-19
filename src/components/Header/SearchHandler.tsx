import { BiSearch } from "react-icons/bi"


interface SearchHandlerProps {

}

export const SearchHandler: React.FC<SearchHandlerProps> = () => {
  return (
    <div className="tooltip tooltip-bottom" data-tip="Search">
      <label className="btn btn-secondary">
        <BiSearch className="text-xl" />
      </label>
    </div>
  )
}