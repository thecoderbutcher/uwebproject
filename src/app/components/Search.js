import { useContext } from "react";
import { SearchContext } from "../context/search";

export default function Search() {
  const {searcActive } = useContext(SearchContext);

  return (
    <div className={`${searcActive ? 'bg-white rounded-none xl:h-[80px]':'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} hidden xl:block w-full relative shadow-lg `}>
      as
    </div>
  )
}


