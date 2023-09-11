import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* date section*/}
          <DateSelection />
          {/* hour section*/}
          <HoursSelection />
          {/* location section*/}
          <LocationSelection />
          {/* btn section*/}
          <div className="flex items-center px-6"> 
            <button className="btn btn-sm btn-accent w-[152px] mx-auto">Contacto</button>
          </div>
        </div>
      </div>
    </div>
  )
}