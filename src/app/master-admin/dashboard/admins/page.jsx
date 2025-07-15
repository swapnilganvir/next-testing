'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa6';
import { IoArrowBack } from 'react-icons/io5';

import BackgroundGlow from '../_components/BackgroundGlow';
import ActionsDropdown from '../_components/ActionsDropdown';
import PageSizeSelector from '../_components/PageSizeSelector';
import PageNavigation from '../_components/PageNavigation';
import ExcelExporter from '../_components/ExcelExporter';
import Image from 'next/image';

const [colors] = ['#1ee0ac', '#09c2de'];

export default function page() {
  const [staff, setStaff] = useState([]);

  // refresh when item gets deleted
  const [refresh, setRefresh] = useState(false);

  // for searching and sorting
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // for pagination and sizing
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredUsers = staff
    .filter(user =>
      ['name', 'email'].some(key =>
        user[key].toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      const valA = a[sortKey].toLowerCase();
      const valB = b[sortKey].toLowerCase();
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSort = key => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  async function getStaff() {
    try {
      const { data } = await axios.get('/api/dashboard/master/admin/read');

      // console.log(data, 'data');

      if (data.success) {
        setStaff(data.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getStaff();
  }, [refresh]);

  return (
    <div className="p-7">
      <div className="flex justify-between items-center pb-7">
        <div>
          <h3 className="font-semibold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2">
            Admins List
          </h3>
        </div>

        <div className="hidden sm:flex items-center gap-4 py-5 sm:py-0">
          <ExcelExporter tableData={paginatedUsers} />

          <div className="ms-auto">
            <Link
              href="/master-admin/dashboard/add-admin"
              className="flex items-center text-sm font-bold rounded p-2 border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-300"
            >
              <FaPlus size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-y sm:border-x sm:rounded-md bg-white border-gray-300 dark:border-gray-900 dark:bg-gray-950 sm:m-0">
        <div className="flex items-center justify-between p-5">
          <div
            onClick={() => setSearchVisible(false)}
            className={`h-9 w-9 flex items-center justify-center cursor-pointer ${
              !searchVisible && 'opacity-0'
            }`}
          >
            <span>
              <IoArrowBack size={20} className="text-slate-600" />
            </span>
          </div>

          {searchVisible && (
            <input
              type="text"
              placeholder="Search by user or email"
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoComplete="off"
              className="flex-grow text-sm leading-4.5 pe-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all"
            />
          )}

          <div className="flex gap-2.5">
            <div onClick={() => setSearchVisible(true)}>
              <BackgroundGlow>
                <FiSearch size={20} />
              </BackgroundGlow>
            </div>

            <div className="h-9 border-s border-gray-200 dark:border-gray-800"></div>

            <PageSizeSelector
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start w-12 sm:w-13">
                <input
                  type="checkbox"
                  className="peer h-4 w-4 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-900 checked:dark:border-primary-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
                  id="cid-all"
                />
              </th>

              <th
                onClick={() => handleSort('name')}
                className="py-2 px-2 first:ps-6 border-b border-t border-gray-300 dark:border-gray-900 text-start"
              >
                <div className="flex items-center gap-1 text-sm text-slate-400 font-normal">
                  <span>Name</span>
                  {sortKey &&
                    (sortOrder === 'asc' ? (
                      <span className="mt-1">
                        <FaArrowUp size={12} />
                      </span>
                    ) : (
                      <span className="mt-1">
                        <FaArrowDown size={12} />
                      </span>
                    ))}
                </div>
              </th>

              <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Email</p>
              </th>

              <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Password</p>
              </th>

              {/* <th className="py-2 px-2 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                <p className="text-sm text-slate-400 font-normal">Type</p>
              </th> */}

              <th className="py-2 px-2 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-end">
                <p className="text-sm text-slate-400 font-normal">Action</p>
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map(user => (
                <tr
                  key={user.id}
                  className="transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group"
                >
                  <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 w-12 sm:w-13">
                    <input
                      type="checkbox"
                      className="peer h-4 w-4 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-900 checked:dark:border-primary-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-300"
                      id="cid-1"
                    />
                  </td>

                  <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                    <div className="flex items-center">
                      {user.image_url ? (
                        <span className="relative size-7">
                          <Image
                            src={user.image_url}
                            fill
                            alt="profile image"
                            className="object-cover [transform:translateZ(0)]"
                          />
                        </span>
                      ) : (
                        <span
                          className={`relative flex-shrink-0 flex items-center justify-center text-xs text-white  h-7 w-7 rounded-full font-medium ${
                            user.id % 2 ? 'bg-primary-600' : 'bg-red-600'
                          }`}
                        >
                          <span>{user.name[0].toUpperCase()}</span>
                        </span>
                      )}
                      <span className="ms-3 block text-xs font-medium text-slate-700 dark:text-white">
                        {user.name}
                        <span className="h-2 w-2 inline-block rounded-full bg-green-600 lg:hidden ms-1"></span>
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                    <span className="text-sm text-slate-400">{user.email}</span>
                  </td>

                  <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                    <span className="text-sm text-slate-400">
                      {user.password}
                    </span>
                  </td>

                  {/* <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell">
                  <span
                    className={`text-sm font-medium ${
                      user.type === 'admin'
                        ? 'text-[#1ee0ac]'
                        : 'text-[#09c2de]'
                    }`}
                  >
                    {user.type}
                  </span>
                </td> */}

                  <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden sm:table-cell ">
                    <span className="flex justify-end">
                      <ActionsDropdown user={user} setRefresh={setRefresh} />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-4 text-lg dark:text-white"
                >
                  No result found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
