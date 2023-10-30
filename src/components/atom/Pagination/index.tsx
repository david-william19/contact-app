import styled from '@emotion/styled';
import { colors } from '../../../data/colors';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  length: number;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: fit-content;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? colors.primary : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : colors.primary)};
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
    color: #fff;
  }
`;

const Dots = styled.span`
  margin: 0 5px;
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  length
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPages = () => {
    if (totalPages <= 5) {
      return pageNumbers;
    }

    if (currentPage <= 3) {
      return [...pageNumbers.slice(0, 3), -1, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, -1, ...pageNumbers.slice(totalPages - 4)];
    }

    return [1, -1, ...pageNumbers.slice(currentPage - 2, currentPage + 1), -1, totalPages];
  };

  const pages = getPages();

  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 10)}>
        Previous
      </PageButton>
      {pages.map((page) =>
        page === -1 ? (
          <Dots key={page}>...</Dots>
        ) : (
          <PageButton key={page} isActive={page === currentPage} onClick={() => onPageChange(page)}>
            {page}
          </PageButton>
        )
      )}
      <PageButton disabled={length < 10} onClick={() => onPageChange(currentPage + 10)}>
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
