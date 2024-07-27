import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const MyPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
      backgroundColor: 'transparent',
      marginRight: '20px'
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      transform: 'scale(1.2)'
    },
  });

export default MyPagination