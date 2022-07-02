import React, { useState } from "react";


 function Model({ closeModal, setData }) {
  const [input, setInput] = useState({
    id: " ",
    email: " ",
    first_name: " ",
    last_name: " ",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInput((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };
  const handleForm = () => {
    setData((data) => [...data, input]);
  };

  return (
    <>
      <div>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle-1">
              Card Image
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {/* <input
                type="text"
                name="id"
                value={input.id}
                onChange={changeHandler}
              /> */}
            <div class="form-group row">
              <label for="example-text-input" class="col-sm-2 col-form-label">
                ID
              </label>
              <div class="col-sm-10">
                <input
                  class="form-control"
                  type="text"
                  value={input.id}
                  name="id"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  class="form-control"
                  type="text"
                  value={input.email}
                  name="email"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-sm-2 col-form-label">
                First Name
              </label>
              <div class="col-sm-10">
                <input
                  class="form-control"
                  type="text"
                  value={input.first_name}
                  name="first_name"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="example-text-input" class="col-sm-2 col-form-label">
                Last Name
              </label>
              <div class="col-sm-10">
                <input
                  class="form-control"
                  type="text"
                  value={input.last_name}
                  name="last_name"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model
