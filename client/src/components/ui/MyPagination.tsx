import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const MyPagination = styled(Pagination)({
    '& .MuiPaginationItem-root': {
      backgroundColor: '#cecbf1',
      marginRight: '20px'
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#7E76DA',
      color: 'white',
      transform: 'scale(1.2)'
    },
  });

export default MyPagination