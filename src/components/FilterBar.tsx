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
    <div className='mb-12 flex flex-col md:flex-row md:justify-between gap-4'>
        <div className="md:max-w-80 w-full rounded-md ">
            <Input
            type="text"
            label='Search for a country...'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            crossOrigin={undefined}
            icon={<MagnifyingGlassIcon />}
            className=' dark:bg-light-dark dark:border-light-dark dark:text-white'
            labelProps={{
              className: 'dark:peer-focus:text-white dark:peer-placeholder-shown:text-white dark:text-white dark:before:border-none dark:after:border-none'
            }}
            />
        </div>
        <div className='max-w-64 w-full rounded-md mt-6 md:mt-0'>
        <Select
          label="Filter by Region"
          value={region}
          onChange={(value) => onRegionChange(value || "")}
          className='dark:bg-light-dark dark:border-light-dark dark:text-white'
          labelProps={{
            className: 'dark:peer-focus:text-white dark:peer-placeholder-shown:text-white dark:text-white dark:before:border-none dark:after:border-none'
          }}
          menuProps={{
            className: 'dark:bg-light-dark dark:border-none dark:text-white'
          }}
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