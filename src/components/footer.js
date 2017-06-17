import React from 'react';

const Footer = () =>
(
    <footer className="section section-invert">
        <div className="foo container">
            <div className="row">
              <div className="col-sm-6">
                <h1>Star Wars Api Test</h1>
                <p>A simple reactjs based test application
                    <br/>implemented along with redux, webpack, es6, scss
                    <br/>and bootstrap
                </p>
              </div>
              <div className="col-sm-6">
                <p className="text-info text-right">
                    <br/>
                    <br/>
                </p>
                <div className="row">
                  <div className="col-md-12 hidden-lg hidden-md hidden-sm text-left">
                    <a href="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                    <a href="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                    <a href="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 hidden-xs text-right">
                    <a href="#"><i className="fa fa-3x fa-fw fa-instagram text-inverse"></i></a>
                    <a href="#"><i className="fa fa-3x fa-fw fa-twitter text-inverse"></i></a>
                    <a href="#"><i className="fa fa-3x fa-fw fa-facebook text-inverse"></i></a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </footer>
);

export default Footer;

