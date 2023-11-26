import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SortDropdown = () => {
    const options = [
        { title: "Most Recent Activity" },
        { title: "Oldest Activity" },
        { title: "In alphabetical order, A-Z" },
        { title: "In alphabetical order, Z-A" },
      ]

    const [selected, setSelected] = useState(options[0])

  return (
    <div className="fixed w-56 ">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-dropdownBgColor py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate text-customGray">{selected.title}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ExpandMoreIcon className="h-5 w-5 text-customGray" aria-hidden="true" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-dropdownBgColor py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {options.map((option, optionIdx) => (
                        <Listbox.Option
                          key={optionIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-gray-500 text-gray-100"
                                : "text-customGray"
                            }`
                          }
                          value={option}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {option.title}
                              </span>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
  )
}

export default SortDropdown