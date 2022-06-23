import React from "react";
import Avatar1 from "../assets/images/users/avatar-2.jpg";
import Avatar2 from "../assets/images/users/avatar-3.jpg";
import Avatar3 from "../assets/images/users/avatar-4.jpg";
import Avatar4 from "../assets/images/users/avatar-5.jpg";

import Avatar7 from "../assets/images/users/avatar-1.jpg";

function Newclient() {
  return (
    <div>
      {" "}
      <div className="card">
        <div className="card-body">
          <div className="dropdown d-inline-block float-right">
            <a
              className="nav-link dropdown-toggle arrow-none"
              id="dLabel5"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v font-20 text-muted"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dLabel5"
            >
              <a className="dropdown-item" href="#">
                New Messages
              </a>
              <a className="dropdown-item" href="#">
                Open Messages
              </a>
            </div>
          </div>
          <h5 className="header-title pb-3 mt-0">New Clients</h5>
          <div
            className="table-responsive boxscroll"
            style={{ overflow: "hidden", outline: "none" }}
          >
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td className="border-top-0">
                    <div className="media">
                      <img
                        src={Avatar1}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Roy Saunders
                          <span className="badge badge-soft-danger">USA</span>
                        </p>
                        <span className="font-12 text-muted">
                          CEO of facebook
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="border-top-0 text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src={Avatar2}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Tiger Nixon
                          <span className="badge badge-soft-info">UK</span>
                        </p>
                        <span className="font-12 text-muted">
                          CEO of WhatsApp
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src={Avatar3}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Ashton Cox
                          <span className="badge badge-soft-pink">USA</span>
                        </p>
                        <span className="font-12 text-muted">
                          founder of Google
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src={Avatar4}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Cedric Kelly
                          <span className="badge badge-soft-purple">
                            Canada
                          </span>
                        </p>
                        <span className="font-12 text-muted">
                          CEO of Paypal
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="">
                    <div className="media">
                      <img
                        src={Avatar1}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Garry Pearson
                          <span className="badge badge-soft-info">India</span>
                        </p>
                        <span className="font-12 text-muted">
                          CEO of facebook
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src={Avatar3}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Ashton Cox
                          <span className="badge badge-soft-pink">Africa</span>
                        </p>
                        <span className="font-12 text-muted">
                          founder of Google
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        src={Avatar7}
                        alt=""
                        className="thumb-md rounded-circle"
                      />
                      <div className="media-body ml-2">
                        <p className="mb-0">
                          Roy Saunders
                          <span className="badge badge-soft-success">USA</span>
                        </p>
                        <span className="font-12 text-muted">
                          Manager of Bank
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <a href="#" className="btn btn-light btn-sm">
                      <i className="far fa-comments mr-2 text-success"></i>Chat
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newclient;
