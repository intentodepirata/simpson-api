import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginacionProps {
  setPage: (page: number) => void;
  totalPage: number;
}

const Paginacion: React.FC<PaginacionProps> = ({ setPage,totalPage }) => {
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
      };

  return (
    <Stack sx={{ pt: 5 }} spacing={2}>
      <Pagination
        onChange={handlePageChange}
        size="large"
        count={totalPage}
        color="primary"
        
      />
    </Stack>
  );
};

export default Paginacion;