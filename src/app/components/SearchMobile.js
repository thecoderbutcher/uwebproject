import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location section*/}
          <LocationSelection />
          {/* date section*/}
          <DateSelection />
          {/* hour section*/}
          <HoursSelection />
          {/* btn section*/}
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  )
}