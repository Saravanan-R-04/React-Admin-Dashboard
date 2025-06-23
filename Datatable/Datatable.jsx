
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datasource.jsx";
import "./datatable.scss";

const Datatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users
        <a href="/users/new" className="link">Add New</a>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
