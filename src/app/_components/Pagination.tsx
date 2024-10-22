"use client";

import { usePokemonStore } from "@/store";
import { POKEMON_LIMIT } from "@/app/utilities/constants";

const Pagination: React.FC = () => {
  const currentPage = usePokemonStore((state) => state.currentPage);
  const pokemonCount = usePokemonStore((state) => state.count);
  const setCurrentPage = usePokemonStore((state) => state.setCurrentPage);
  const setOffset = usePokemonStore((state) => state.setOffSet);

  const totalPages = Math.ceil(pokemonCount / POKEMON_LIMIT);
  const totalPageArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const hadleOnPageClick = (page: number) => {
    setCurrentPage(page);
    setOffset(page * POKEMON_LIMIT);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOffset((currentPage + 1) * POKEMON_LIMIT);
    }
  };
  const handleLastPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(totalPages);
      setOffset(totalPages * POKEMON_LIMIT);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset((currentPage - 1) * POKEMON_LIMIT);
    }
  };
  const handleFirstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
      setOffset(0);
    }
  };
  const getPagesToShow = () => {
    if (currentPage < 3) {
      return totalPageArray.slice(0, 5);
    }
    if (currentPage > totalPages - 3) {
      return totalPageArray.slice(totalPages - 5, totalPages);
    }
    return totalPageArray.slice(currentPage - 3, currentPage + 2);
  };

  return (
    <nav className="flex text-xl mt-4 justify-center lg:justify-end">
      <ul className="flex gap-1 sm:gap-3 text-white text-center">
        <li
          className={`font-semibold ${
            currentPage === 1
              ? "text-gray-500 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handleFirstPage}
        >
          {"<<"}
        </li>
        <li
          className={`font-semibold ${
            currentPage === 1
              ? "text-gray-500 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handlePrevPage}
        >
          {"<"}
        </li>
        {currentPage > 3 && totalPages > 3 && (
          <li className="hover:cursor-default">...</li>
        )}
        {getPagesToShow().map((page) => (
          <li
            key={page}
            className={`font-semibold w-4 ${
              currentPage === page
                ? "text-gray-500 hover:cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
            onClick={() => hadleOnPageClick(page)}
          >
            {page}
          </li>
        ))}
        {currentPage <= totalPages - 3 && (
          <li className="hover:cursor-default">...</li>
        )}
        <li
          className={`font-semibold ${
            currentPage === totalPageArray.length
              ? "text-gray-500 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handleNextPage}
        >
          {">"}
        </li>
        <li
          className={`font-semibold ${
            currentPage === totalPageArray.length
              ? "text-gray-500 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
          onClick={handleLastPage}
        >
          {">>"}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
