import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CCardFooter,
  CButton
} from '@coreui/react'

const usersData = [

]

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Kode Obat','Nama Obat', 'Satuan', 'Harga']

const Tables = () => {
  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
            <CCardFooter>
              <p className="lead">
                <CButton to="/penjualan-obat" color="danger" size="lg" style={{marginRight: 10}}>Kembali</CButton>
              </p>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default Tables
