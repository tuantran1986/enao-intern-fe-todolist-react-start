import React, { useEffect, useState } from "react";
import "./App.css";
// import FormAddOrEdit from "./components/FormAddOrEdit";
// import ButtonAdd from "./components/ButtonAdd";
// import ButtonSearch from "./components/ButtonSearch";
// import ButtonSort from "./components/ButtonSort";
// import TableTask from "./components/TableTask";
// import ButtonGenerate from "./components/ButtonGenerate";

function App() {
  // RENDER
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row mt-15">
        {/* FormAddOrEdit */}
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-warning">
            <div className="panel-heading ">
              <h3 className="panel-title">
                {/* {task.id === null ? "Thêm Công Việc" : "Sửa Công Việc"} */}
                Thêm Công Việc
              </h3>
              <i
                // onClick={closeFormAddEdit}
                className="fa fa-close"
                style={{ float: "right", marginTop: "-15px" }}
              ></i>
            </div>
            <div className="panel-body ">
              <form>
                <div className="form-group">
                  <label>Tên :</label>
                  {/* FORM: NAME, VALUE, TYPE, CHECKED, ONCHANGE */}
                  <input
                    type="text"
                    name="name"
                    // value={task.name}
                    // onChange={onChangeSaveTask}
                    className="form-control"
                  />
                </div>
                <label>Trạng Thái :</label>
                {/* FORM: NAME, VALUE, TYPE, CHECKED, ONCHANGE */}
                <select
                  name="status"
                  // value={task.status}
                  // onChange={onChangeSaveTask}
                  className="form-control"
                  required="required"
                >
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                  <button
                    // onClick={onSubmit}
                    type="submit"
                    className="btn btn-warning"
                  >
                    {/* {task.id === null ? "Thêm" : "Sửa"} */}
                    Thêm
                  </button>
                  &nbsp;
                  <button
                    // onClick={onReset}
                    type="reset"
                    className="btn btn-danger"
                  >
                    Hủy Bỏ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          // className={
          //   displayForm
          //     ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
          //     : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          // }
          className={
            true
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          {/* <ButtonAdd */}
          <button type="button" className="btn btn-primary">
            <span className="fa fa-plus mr-5" />
            Thêm Công Việc
          </button>

          {/* <ButtonGenerate */}
          <button type="button" className="btn btn-success">
            <span className="fa fa-plus mr-5" />
            GENERATE DATA
          </button>

          <div className="row mt-15">
            {/* <ButtonSearch */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group">
                {/* NAME, VALUE, TYPE, CHECKED, ONCHANGE */}
                <input
                  type="text"
                  name="searchKey"
                  // value={searchKey}
                  // onChange={onChangeSaveSearchKey}
                  className="form-control"
                  placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <span className="fa fa-search mr-5" />
                    Tìm
                  </button>
                </span>
              </div>
            </div>
            {/* <ButtonSort */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li
                    // className={
                    //   fieldSort.by === "name" && fieldSort.type === 1
                    //     ? "liActive"
                    //     : ""
                    // }
                    className="liActive"
                    // onClick={() => {
                    //   handleSort("name", 1);
                    // }}
                  >
                    <a role="button">
                      <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
                    </a>
                  </li>
                  <li
                    // className={
                    //   fieldSort.by === "name" && fieldSort.type === -1
                    //     ? "liActive"
                    //     : ""
                    // }
                    className="liActive"
                    // onClick={() => {
                    //   handleSort("name", -1);
                    // }}
                  >
                    <a role="button">
                      <span className="fa fa-sort-alpha-desc pr-5">
                        Tên Z-A
                      </span>
                    </a>
                  </li>
                  <li role="separator" className="divider" />
                  <li
                    // className={
                    //   fieldSort.by === "status" && fieldSort.type === 1
                    //     ? "liActive"
                    //     : ""
                    // }
                    className="liActive"
                    // onClick={() => {
                    //   handleSort("status", 1);
                    // }}
                  >
                    <a role="button">Trạng Thái Kích Hoạt</a>
                  </li>
                  <li
                    // className={
                    //   fieldSort.by === "status" && fieldSort.type === -1
                    //     ? "liActive"
                    //     : ""
                    // }
                    className="liActive"
                    // onClick={() => {
                    //   handleSort("status", -1);
                    // }}
                  >
                    <a role="button">Trạng Thái Ẩn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-15">
            {/* TableTask */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td>
                      {/* TYPE, NAME, VALUE, CHECKED, ONCHANGE */}
                      <input
                        type="text"
                        name="name"
                        // value={fieldFilter.name}
                        // onChange={onChangeFilter}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <select
                        name="status"
                        // value={fieldFilter.status}
                        // onChange={onChangeFilter}
                        className="form-control"
                      >
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                      </select>
                    </td>
                    <td />
                  </tr>
                  {/* ItemTask */}
                  <tr>
                    <td>1</td>
                    <td>Hoc JS</td>
                    <td className="text-center">
                      <span
                        className={
                          true ? "label label-success" : "label label-danger"
                        }
                        // onClick={() => { onUpdateStatusTask(id) }}
                      >
                        {true ? "Kích Hoạt" : "Ẩn"}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-warning"
                        // onClick={() => { onUpdateTask(id) }}
                      >
                        <span className="fa fa-pencil mr-5" />
                        Sửa
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onClick={() => {
                        //   onDeleteTask(id);
                        // }}
                      >
                        <span className="fa fa-trash mr-5" />
                        Xóa
                      </button>
                    </td>
                  </tr>
                  {/* ItemTask */}
                  <tr>
                    <td>2</td>
                    <td>Hoc CSS</td>
                    <td className="text-center">
                      <span
                        className={
                          false ? "label label-success" : "label label-danger"
                        }
                        // onClick={() => { onUpdateStatusTask(id) }}
                      >
                        {false ? "Kích Hoạt" : "Ẩn"}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-warning"
                        // onClick={() => { onUpdateTask(id) }}
                      >
                        <span className="fa fa-pencil mr-5" />
                        Sửa
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                        // onClick={() => {
                        //   onDeleteTask(id);
                        // }}
                      >
                        <span className="fa fa-trash mr-5" />
                        Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
