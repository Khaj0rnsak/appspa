import React, { useState, useRef } from 'react'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableFooter,
    TableRow,
    Typography,
    IconButton
  } from '@mui/material'
  import TableCell from '@mui/material/TableCell'
  import { useTheme } from '@mui/material/styles'
  import Box from '@mui/material/Box'

  function TablePaginationActions(props) {
    const theme = useTheme()
    const { count, page, rowsPerPage, onPageChange } = props
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0)
    }
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1)
    }
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1)
    }
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
    }
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    )
  }

const Showdata = (props) => {
  const [page, setPage] = useState(0)
  const [empthyRow, setempthyRow] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const tableRef = useRef()

  const Dataslocal = JSON.parse(localStorage.getItem('myData')) || [];
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <TableContainer style={{width:'1200px', marginLeft:'400px', marginTop: '50px'}} component={Paper} ref={tableRef}>
        <Table stickyHeader >
          <TableHead >
            <TableRow >
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>No.</TableCell>
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>Name</TableCell>
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>Gender</TableCell>
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>Mobile Phone</TableCell>
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>Nationality</TableCell>
              <TableCell style={{backgroundColor: '#FFCC99'}} align='center'>View Detail</TableCell>
            </TableRow>
          </TableHead>
          {Dataslocal.length === 0
            ? <TableCell colSpan={10} align='center'>
              <Typography>No Results</Typography>
            </TableCell>
            : <TableBody>
              {(rowsPerPage > 0
                ? Dataslocal.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : Dataslocal
              ).map((val, i) => (
                <TableRow key={i}>
                  <TableCell scope="row" align='center'>
                    {page !== 0 ? page * rowsPerPage + i + 1 : i + 1}
                  </TableCell>
                  <TableCell scope="row" align='center'>
                    {val.Fristname ? val.Fristname : '-'}
                  </TableCell>
                  <TableCell scope="row" align='center'>
                    {val.radio ? val.radio : '-'}
                  </TableCell>
                  <TableCell scope="row" align='center'>
                    {console.log(val.country, 'val.country')}
                    {val.phone  ? val.phone  : '-'}
                  </TableCell>
                  <TableCell scope="row" align='center'>
                    {val.nationality ? val.nationality : '-'}
                  </TableCell>
                  <TableCell scope="row" align='center' >
                    <button>EDIT</button><button>DEL</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>}
          {Dataslocal.length > 9 &&
            empthyRow !== 0 &&
            <div style={{ height: empthyRow }}>
            </div>
          }
          {Dataslocal.length > 9 &&
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
                  colSpan={10}
                  count={Dataslocal.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page'
                    },
                    native: true
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          }
        </Table>
      </TableContainer>
  )
}

export default Showdata