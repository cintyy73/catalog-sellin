import { Dispatch, SetStateAction, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@primer/octicons-react";

import { ButtonGroup, IconButton, Tag } from "@chakra-ui/react";

import { Meta } from "@/types";

interface PaginationProps {
  meta: Meta;

  setMeta: Dispatch<SetStateAction<Meta>>;
  currentPage: number;
  total: number;
  per_page: number;
}

export const Pagination = ({
  meta,
  setMeta,
  currentPage = 1,
  total,
  per_page,
}: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const pageParam = searchParams.get("page");
    const savedPage = pageParam ? parseInt(pageParam, 10) : currentPage;
    setMeta((prev) => ({ ...prev, page: savedPage }));
  }, [setMeta, searchParams, currentPage]);

  const handleDecrement = () => {
    if (currentPage > 1) {
      setMeta((prev) => ({ ...prev, page: currentPage - 1 }));
      let filteredFilter = {};

      filteredFilter = Object.fromEntries(
        Object.entries(meta).filter(([, value]) => value !== "")
      );
      setSearchParams({
        ...filteredFilter,
        page: (currentPage - 1).toString(),
      });
    }
  };

  const handleIncrement = () => {
    if (total === per_page) {
      setMeta((prev) => ({ ...prev, page: currentPage + 1 }));
      let filteredFilter = {};

      filteredFilter = Object.fromEntries(
        Object.entries(meta).filter(([, value]) => value !== "")
      );
      setSearchParams({
        ...filteredFilter,
        page: (currentPage + 1).toString(),
      });
    }
  };

  return (
    <ButtonGroup size="sm" colorScheme="primary">
      <IconButton
        aria-label="Prev page"
        icon={<ArrowLeftIcon />}
        variant="outline"
        onClick={handleDecrement}
        isDisabled={currentPage === 1}
      />
      <Tag bg="transparent" color="primary.default" fontWeight="bold" size="lg">
        {currentPage}
      </Tag>
      <IconButton
        icon={<ArrowRightIcon />}
        aria-label="Next page"
        variant="outline"
        onClick={handleIncrement}
        isDisabled={total < per_page}
      />
    </ButtonGroup>
  );
};
