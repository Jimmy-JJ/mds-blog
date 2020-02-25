import React from "react"

const Footer = () => (
  <>
    <section className="bg-dark d-none text-white" id="contact">
      <div className="container py-md-5">
        <article className="row py-5 text-urls">
          <div className="col-12 col-lg-4 pb-3">
            <svg className="text-faded mb-4" viewBox="0 0 40 40" width="55">
              <use xlinkHref="symbol-defs.svg#accents"></use>
            </svg>
            <p className="font-weight-bold text-muted text-uppercase small m-0">
              Contact Us
            </p>
            <p className="font-weight-bold text-faded lead mt-4 mt-md-0 mb-4">
              Have something on your mind?
              <br />
              We’re happy to hear it.
            </p>
            <a
              className="btn btn-outline-light mr-3 mb-3"
              href="tel:+2349012709052"
            >
              Give us a call
            </a>
            <a
              className="btn btn-outline-light mb-3"
              href="mailto:hello@motionwares.com"
            >
              Send us an email
            </a>
          </div>
          <aside className="col-12 col-sm col-lg-auto pb-4 pb-md-0 ml-lg-auto mt-lg-5 pt-md-4">
            <p className="small font-weight-bold m-0 text-muted">VISIT US</p>
            <p className="m-0">
              No 29 Mambilla Street,
              <br />
              Off Aso Drive,
              <br />
              Maitama, Abuja, Nigeria.
            </p>
          </aside>
          <aside className="col-12 col-sm col-lg-auto pb-4 pb-md-0 mt-lg-5 pt-md-4">
            <p className="small font-weight-bold text-muted">WE'RE SOCIAL</p>
            <div className="d-flex flex-row mt-3">
              <a
                href="https://twitter.com/motionwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <svg className="text-icon h5">
                  <use xlinkHref="symbol-defs.svg#twitter"></use>
                </svg>
              </a>
              <a
                href="https://facebook.com/motionwares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light ml-4"
              >
                <svg className="text-icon h5">
                  <use xlinkHref="symbol-defs.svg#facebook"></use>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/motionware/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light ml-4"
              >
                <svg className="text-icon h5">
                  <use xlinkHref="symbol-defs.svg#instagram"></use>
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2349012709052/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light ml-4"
              >
                <svg className="text-icon h5">
                  <use xlinkHref="symbol-defs.svg#whatsapp"></use>
                </svg>
              </a>
            </div>
          </aside>
          <aside className="col-12 col-sm col-lg-auto pb-3 pb-md-0 mt-lg-5 pt-md-4">
            <p className="small font-weight-bolder text-muted">GET IN TOUCH</p>
            <a className="text-white" href="tel:+2349012709052">
              +2349012709052
            </a>
            <br />
            <a className="text-white" href="mailto:hello@motionwares.com">
              hello@motionwares.com
            </a>
          </aside>
        </article>
      </div>
    </section>

    <footer className="bg-light">
      <div className="container py-3 pt-sm-5">
        <div className="row py-5 justify-content-between text-urls">
          <div className="col-12 col-sm-4 text-center m-auto">
            <svg className="text-icon text-muted display-3">
              <use xlinkHref="../symbol-defs.svg#logo"></use>
            </svg>
          </div>
        </div>
      </div>
      <aside className="p-4 container text-center text-muted font-weight-bold">
        <div className="px-2">
          <small className="font-weight-bold">Disclaimers</small>
          <p className="small">
            Motionwares, MDS and the Motionwares logo are trademarks of
            Motionwaress Digital Solutions, Ltd.
            <br /> Motionwares Digital Solutions Ltd, a company duly registered
            with the Corporate Affairs Commission, Nigeria.
          </p>
          <p className="mb-5 small">
            ©COPYRIGHT {new Date().getFullYear()}. ALL RIGHTS RESERVED ツ
          </p>
        </div>
      </aside>
    </footer>
  </>
)

export default Footer
