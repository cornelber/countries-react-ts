import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input, Select, Option } from '@material-tailwind/react'

interface FilterBarProps {
    searchTerm: string;
    region: string;
    onSearchChange: (value: string) => void;
    onRegionChange: (selectedRegion: string) => void;
}

const FilterBar = ({searchTerm, region, onSearchChange, onRegionChange} : FilterBarProps) => {
  return (
    <div className='mb-12 flex justify-between gap-4'>
        <div className="max-w-80 w-full rounded-md">
            <Input
            type="text"
            label='Search for a country...'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            crossOrigin={undefined}
            icon={<MagnifyingGlassIcon />}
            />
        </div>
        <div className='max-w-64 w-full rounded-md'>
        <Select
          label="Filter by Region"
          value={region}
          onChange={(value) => onRegionChange(value || "")}
        >
          <Option value="Africa">Africa</Option>
          <Option value="Americas">Americas</Option>
          <Option value="Asia">Asia</Option>
          <Option value="Europe">Europe</Option>
          <Option value="Oceania">Oceania</Option>
        </Select>
        </div>
    </div>
  )
}

export default FilterBar