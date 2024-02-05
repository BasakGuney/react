
import { useState } from "react";
import NavBar from "./NavBar";

const Form = (props: { v1: string; setV1: (v: string) => void }) => {
  const [active, setActive] = useState("t");
  return (
    <>
      <br></br>
      <div className="mb-3">
        <input className="form-control" type="file" id="formFile" />
      </div>
      <br></br>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <a
            type="button"
            className="btn btn-outline-dark"
            onClick={() => setActive("take")}
          >
            Update Domain
          </a>
        </div>

        <div className="col-auto">
          {active === "take" && (
            <>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    Domain Name:
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="password"
                    id="inputPassword6"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                  />
                </div>

                <div className="col-auto">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                    onClick={() => setActive("t")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
