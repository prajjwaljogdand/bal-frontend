import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Link from "@mui/material/Link";
import BlockIcon from "@mui/icons-material/Block";
import { Stack } from "@mui/material";

function createData(id, name, tx, mine, timeIn, timeOut, createdAt) {
  const d = new Date(createdAt * 1000);
  const created = d.toLocaleString();
  const isBlocked = true;

  return {
    id,
    name,
    tx,
    mine,
    timeIn,
    timeOut,
    created,
    isBlocked,
  };
}

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "Id",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Registration No.",
  },
  {
    id: "tx",
    numeric: false,
    disablePadding: false,
    label: "Txn Hash",
  },
  {
    id: "block",
    numeric: true,
    disablePadding: false,
    label: "Block",
  },
  {
    id: "weight",
    numeric: true,
    disablePadding: false,
    label: "Weight",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: false,
    label: "createdAt",
  },
  {
    id: "isBlocked",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

function ScamTableHead(props) {
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ScamTableHead.propTypes = {
  numSelected: PropTypes.number,
  rowCount: PropTypes.number.isRequired,
};

const ScamTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Trips
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

ScamTableToolbar.propTypes = {
  numSelected: PropTypes.number,
};

export default function ScamTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  let rows = [];

  rows = props.data.map((obj) => {
    return createData(
      obj.block,
      obj.truckId,
      obj.txHash,
      obj.block,
      obj.timeOut,
      obj.weight,
      obj.timeOut
    );
  });

  console.log(rows);

  const handleClick = (event, name) => {
    return;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "80%", margin: "auto", marginTop: "10px" }}>
      <Paper
        elevation={6}
        sx={{ width: "100%", mb: 2, border: "0.01px solid #3D95DF" }}
      >
        <ScamTableToolbar />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <ScamTableHead rowCount={rows.length} />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell id={labelId}>{row.id}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          maxWidth: 180, // Percentage Also Works
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Link
                          href={`https://goerli.etherscan.io/tx/${row.tx}`}
                          color="#00EDB4"
                          underline="none"
                          target="_blank"
                        >
                          {" "}
                          {row.tx}{" "}
                        </Link>
                      </TableCell>
                      <TableCell>{row.mine}</TableCell>
                      {/* <TableCell>{row.timeIn}</TableCell> */}
                      <TableCell>{row.timeOut}</TableCell>
                      <TableCell>{row.created}</TableCell>
                      <TableCell>
                        {row.isBlocked ? (
                          <Stack direction="row">
                            <BlockIcon sx={{ color: "#FE3131" }} />{" "}
                            <Typography sx={{px : 2}}>blocked</Typography>{" "}
                          </Stack>
                        ) : (
                          ""
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
