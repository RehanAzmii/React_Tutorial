import React from "react";

function Body(){
    return(
        <div>
                <div className="wrapper">
      <div className="container-fluid">
        {/* <!-- Page-Title --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box">
              <div className="float-right hide-phone">
                <ul className="list-inline">
                  <li className="list-inline-item mr-3">
                    <input
                      className="knob"
                      data-width="48"
                      data-height="48"
                      data-linecap="round"
                      data-fgcolor="#605daf"
                      value="80"
                      data-skin="tron"
                      data-angleoffset="180"
                      data-readonly="true"
                      data-thickness=".1"
                    />
                  </li>
                  <li className="list-inline-item">
                    <span className="text-muted">Storage used</span>
                    <h6>400GB/524.84GB</h6>
                  </li>
                </ul>
              </div>
              <h4 className="page-title">Dashboard</h4>
              <div className="btn-group mt-2">
                <ol className="breadcrumb hide-phone p-0 m-0">
                  <li className="breadcrumb-item"><a href="#">Zoogler</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end page title end breadcrumb --> */}
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="icon-contain">
                      <div className="row">
                        <div className="col-2 align-self-center">
                          <i className="fas fa-tasks text-gradient-success"></i>
                        </div>
                        <div className="col-10 text-right">
                          <h5 className="mt-0 mb-1">190</h5>
                          <p className="mb-0 font-12 text-muted">Active Tasks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body justify-content-center">
                    <div className="icon-contain">
                      <div className="row">
                        <div className="col-2 align-self-center">
                          <i className="far fa-gem text-gradient-danger"></i>
                        </div>
                        <div className="col-10 text-right">
                          <h5 className="mt-0 mb-1">62</h5>
                          <p className="mb-0 font-12 text-muted">Project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="icon-contain">
                      <div className="row">
                        <div className="col-2 align-self-center">
                          <i className="fas fa-users text-gradient-warning"></i>
                        </div>
                        <div className="col-10 text-right">
                          <h5 className="mt-0 mb-1">14</h5>
                          <p className="mb-0 font-12 text-muted">Teams</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="icon-contain">
                      <div className="row">
                        <div className="col-2 align-self-center">
                          <i className="fas fa-database text-gradient-primary"></i>
                        </div>
                        <div className="col-10 text-right">
                          <h5 className="mt-0 mb-1">$15562</h5>
                          <p className="mb-0 font-12 text-muted">Budget</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div
                  className="btn-group btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <label className="btn btn-primary btn-sm active"
                    ><input
                      type="radio"
                      name="options"
                      id="option1"
                      checked=""
                    />
                    This Week</label
                  >
                  <label className="btn btn-primary btn-sm"
                    ><input type="radio" name="options" id="option2" /> Last
                    Month</label
                  >
                </div>
                <h5 className="header-title mb-4 mt-0">Weekly Record</h5>
                <canvas id="lineChart" height="280"></canvas>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="dropdown d-inline-block float-right">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    id="dLabel4"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                    ><i className="fas fa-ellipsis-v font-20 text-muted"></i
                  ></a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dLabel4"
                  >
                    <a className="dropdown-item" href="#">Create Project</a>
                    <a className="dropdown-item" href="#">Open Project</a>
                    <a className="dropdown-item" href="#">Tasks Details</a>
                  </div>
                </div>
                <h5 className="header-title mb-4 mt-0">Activity</h5>
                <div><canvas id="dash-doughnut" height="200"></canvas></div>
                <ul className="list-unstyled list-inline text-center mb-0 mt-3">
                  <li className="mb-2 list-inline-item text-muted font-13">
                    <i className="mdi mdi-label text-success mr-2"></i>Active
                  </li>
                  <li className="mb-2 list-inline-item text-muted font-13">
                    <i className="mdi mdi-label text-danger mr-2"></i>Complete
                  </li>
                  <li className="mb-2 list-inline-item text-muted font-13">
                    <i className="mdi mdi-label text-warning mr-2"></i>Panding
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-6">
                    <p className="mb-0 text-muted font-13">
                      <i className="mdi mdi-album mr-2 text-warning"></i>New Leads
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0 text-muted font-13">
                      <i className="mdi mdi-album mr-2 text-danger"></i>New Leads
                      Target
                    </p>
                  </div>
                </div>
                <div className="progress bg-gradient1 mb-3" style={{height: "5px"}}>
                  <div
                    className="progress-bar bg-gradient3"
                    role="progressbar"
                    style={{width: "65%"}}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <a className="btn btn-primary btn-sm btn-block text-white"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4">
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
                    ><i className="fas fa-ellipsis-v font-20 text-muted"></i
                  ></a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dLabel5"
                  >
                    <a className="dropdown-item" href="#">New Messages</a>
                    <a className="dropdown-item" href="#">Open Messages</a>
                  </div>
                </div>
                <h5 className="header-title pb-3 mt-0">New Clients</h5>
                <div
                  className="table-responsive boxscroll"
                  style={{overflow: "hidden", outline: "none"}}
                >
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td className="border-top-0">
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Roy Saunders
                                <span className="badge badge-soft-danger">USA</span>
                              </p>
                              <span className="font-12 text-muted"
                                >CEO of facebook</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="border-top-0 text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Tiger Nixon
                                <span className="badge badge-soft-info">UK</span>
                              </p>
                              <span className="font-12 text-muted"
                                >CEO of WhatsApp</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Ashton Cox
                                <span className="badge badge-soft-pink">USA</span>
                              </p>
                              <span className="font-12 text-muted"
                                >founder of Google</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Cedric Kelly
                                <span className="badge badge-soft-purple"
                                  >Canada</span
                                >
                              </p>
                              <span className="font-12 text-muted"
                                >CEO of Paypal</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Garry Pearson
                                <span className="badge badge-soft-info">India</span>
                              </p>
                              <span className="font-12 text-muted"
                                >CEO of facebook</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Ashton Cox
                                <span className="badge badge-soft-pink"
                                  >Africa</span
                                >
                              </p>
                              <span className="font-12 text-muted"
                                >founder of Google</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="media">
                            <img
                              src="assets/images/users/avatar-1.jpg"
                              alt=""
                              className="thumb-md rounded-circle"
                            />
                            <div className="media-body ml-2">
                              <p className="mb-0">
                                Roy Saunders
                                <span className="badge badge-soft-success"
                                  >USA</span
                                >
                              </p>
                              <span className="font-12 text-muted"
                                >Manager of Bank</span
                              >
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <a href="#" className="btn btn-light btn-sm"
                            ><i className="far fa-comments mr-2 text-success"></i
                            >Chat</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <a href="#" className="btn btn-outline-success float-right"
                  >Withdraw Monthly</a
                >
                <h5 className="header-title mb-4 mt-0">Monthly Revenue</h5>
                <h4 className="mb-4">$15,421.50</h4>
                <p className="font-14 text-muted mb-3">
                  <i className="mdi mdi-message-reply text-danger mr-2 font-18"></i>
                  $ 1500 when an unknown printer took a galley.
                </p>
                <canvas id="bar-data" height="125"></canvas>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-sm-flex align-self-center">
                  <img
                    src="assets/images/widgets/code.svg"
                    alt=""
                    className=""
                    height="100"
                  />
                  <div className="media-body ml-3">
                    <h6 className="mt-0">Code Confirmed</h6>
                    <p className="text-muted font-13">
                      Contrary to popular belief, generators on Lorem Ipsum is
                      not simply random text.
                    </p>
                    <a href="#" className="btn btn-gradient-secondary">Confirm</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card timeline-card">
              <div className="card-body p-0">
                <div className="bg-gradient2 text-white text-center py-3 mb-4">
                  <p className="mb-0 font-18">
                    <i className="mdi mdi-clock-outline font-20"></i> This Week's
                    Activity
                  </p>
                </div>
              </div>
              <div className="card-body boxscroll">
                <div className="timeline">
                  <div className="entry">
                    <div className="title"><h6>10/ Oct</h6></div>
                    <div className="body">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available.....<a href="#" className="text-primary">
                          Read More</a
                        >
                      </p>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="title"><h6>9/ Oct</h6></div>
                    <div className="body">
                      <p>
                        All the Lorem Ipsum generators on the predefined chunks
                        as necessary.....<a href="#" className="text-primary">
                          Read More</a
                        >
                      </p>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="title"><h6>8/ Oct</h6></div>
                    <div className="body">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.....<a href="#" className="text-primary">
                          Read More</a
                        >
                      </p>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="title"><h6>7/ Oct</h6></div>
                    <div className="body">
                      <p className="pb-1">
                        Many desktop publishing packages and web page editors
                        now.....<a href="#" className="text-primary"> Read More</a>
                      </p>
                    </div>
                  </div>
                  <div className="entry">
                    <div className="title"><h6>6/ Oct</h6></div>
                    <div className="body">
                      <p className="pb-1 mb-0">
                        All the Lorem Ipsum generators on the predefined chunks
                        as necessary.....<a href="#" className="text-primary">
                          Read More</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <h5 className="header-title pb-3 mt-0">Payments</h5>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr className="align-self-center">
                        <th>Project Name</th>
                        <th>Client Name</th>
                        <th>Payment Type</th>
                        <th>Paid Date</th>
                        <th>Amount</th>
                        <th>Transaction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product Devlopment</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Kevin Heal
                        </td>
                        <td>Paypal</td>
                        <td>5/8/2018</td>
                        <td>$15,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning"
                            >panding</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>New Office Building</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Frank M. Lyons
                        </td>
                        <td>Paypal</td>
                        <td>15/7/2018</td>
                        <td>$35,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary"
                            >Success</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Market Research</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Angelo Butler
                        </td>
                        <td>Pioneer</td>
                        <td>30/9/2018</td>
                        <td>$45,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning"
                            >Panding</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Website &amp; Blog</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Phillip Morse
                        </td>
                        <td>Paypal</td>
                        <td>2/6/2018</td>
                        <td>$70,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-warning"
                            >Success</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>Product Devlopment</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Kevin Heal
                        </td>
                        <td>Paypal</td>
                        <td>5/8/2018</td>
                        <td>$15,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary"
                            >panding</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td>New Office Building</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            alt=""
                            className="thumb-sm rounded-circle mr-2"
                          />
                          Frank M. Lyons
                        </td>
                        <td>Paypal</td>
                        <td>15/7/2018</td>
                        <td>$35,000</td>
                        <td>
                          <span className="badge badge-boxed badge-soft-primary"
                            >Success</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!--end table-responsive--> */}
                <div className="pt-3 border-top text-right">
                  <a href="#" className="text-primary"
                    >View all <i className="mdi mdi-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </div>
        </div>
    )
}

export default Body;