import React, { Component } from 'react';

import NavState from './NavState.js'

const Navigation = () => {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">vspace.one</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li><a className="dropdown-item" href="/#Mitmachen">Mitmachen</a></li>
                  <li><a className="dropdown-item" href="/#Ausstattung">Ausstattung</a></li>
                  <li><a className="dropdown-item" href="/#Ort">Ort</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Events">Termine</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">F &amp; A</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="supportDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Unterstützen
                </a>
                <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                  <li><a className="dropdown-item" href="/mitglied_werden">Mitglied werden</a></li>
                  <li><a className="dropdown-item" href="/spenden">Spenden</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/sponsoren">Unsere Sponsoren</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://wiki.vspace.one">Wiki</a>
              </li>
              <li className="nav-item">
                <a className="nav-link faw-link" href="https://t.me/joinchat/DmNdswpnKgox_zzqENYXiA" target="_blank" rel="noreferrer">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link faw-link" href="https://github.com/vspaceone" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link faw-link" href="https://twitter.com/vspaceone" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <NavState />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }



export default Navigation;