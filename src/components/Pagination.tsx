import { Button } from '@material-tailwind/react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
}

const Pagination = ({currentPage, totalPages, onNext, onPrev} : PaginationProps) => {

  return (
    <div className="flex justify-center items-center mt-12 space-x-4">
        <Button
          onClick={onPrev}
          disabled={currentPage === 1}
          variant="outlined"
          color="blue-gray"
          className="rounded-full dark:text-white dark:border-white"
        >
          Prev
        </Button>
        <span className="text-gray-700 dark:text-white dark:border-white">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={onNext}
          disabled={currentPage === totalPages}
          variant="outlined"
          color="blue-gray"
          className="rounded-full dark:text-white dark:border-white"
        >
          Next
        </Button>
    </div>
  )
}

export default Pagination