import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CJumbotron,
  CCol,
  CDataTable,
  CBadge,
  CRow,
} from '@coreui/react'

const BasicForms = () => {
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Penjualan Obat
            </CCardHeader>
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">Selamat Datang di penjualan obat offline!</h1>
                <hr className="my-2" />
                <p className="lead">
                  <CButton to="/penjualan-obat/pencarian" color="primary" size="lg">Klik Untuk menuju Pencarian</CButton>
                  <br /><br />
                  <CButton to="/penjualan-obat/bayar" color="primary" size="lg">Klik Untuk menuju Pembayaran</CButton>
                </p>
              </CJumbotron>
            </CCardBody>  
          </CCard>
          <CCard>
            <CCardHeader>
              Data Cart
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={[
                  'contoh data 1',
                  'contoh data 2',
                  'contoh data 3',
                  'contoh data 4',
                  'contoh data 5',
                ]}
                // fields={fields}
                striped
                itemsPerPage={5}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge>
                          {JSON.stringify(item)}
                        </CBadge>
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default BasicForms
