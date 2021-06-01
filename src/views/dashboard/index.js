import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CCardFooter
} from '@coreui/react'
import * as serviceWorker from '../../serviceWorker';

const Jumbotrons = () => {

  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Selamat Datang!
              <small> Vmedis</small>
            </CCardHeader>
            <CCardBody>
              <CJumbotron fluid>
                <CContainer fluid>
                  <h1 className="display-3">Dashboard React Vmedis</h1>
                  <p className="lead">{JSON.stringify(items)}</p>
                </CContainer>
              </CJumbotron>
            </CCardBody>
            <CCardFooter>
              <CButton to="/penjualan-obat" color="primary" size="lg">Klik Untuk menuju Penjualan Obat</CButton>
              <br /> <br />
              <CButton onClick={() => {
                serviceWorker.unregister()
                window.location.reload();
              }} color="primary" size="lg">UnRegister SW</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Jumbotrons
