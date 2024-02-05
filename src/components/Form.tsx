import { useState } from "react";
import NavBar from "./NavBar";

const Form = (props: { v1: string; setV1: (v: string) => void }) => {
  const [domainActive, setDomainActive] = useState("not active");
  const [ipActive, setIpActive] = useState("not active");
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
            onClick={() => setDomainActive("active")}
          >
            Update Domain
          </a>
        </div>

        <div className="col-auto">
          {domainActive === "active" && (
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
                    onClick={() => setDomainActive("not active")}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <br></br>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <a
            type="button"
            className="btn btn-outline-dark"
            onClick={() => setIpActive("active")}
          >
            Update IP
          </a>
        </div>

        <div className="col-auto">
          {ipActive === "active" && (
            <>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputPassword6" className="col-form-label">
                    IP:
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
                    onClick={() => setIpActive("not active")}
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
