import React from 'react'
import { Button } from '@mui/material'

const AddressCardArray = ({address}) => {
  console.log(address)
  return (
    <>
      <div className="space-y-3">
        <p className="font-bold text-lg">{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.state},{address?.street},{address?.pinCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>

      </div>
    </>
    // <>
    //   <div className="space-y-3">
    //     <p className="font-bold text-lg">Kshitij Verma</p>
    //     <p>Awas Vikas Colony,Dehradun,262308</p>
    //     <div className="space-y-1">
    //       <p className="font-semibold">Phone Number</p>
    //       <p>7906615337</p>
    //     </div>

    //   </div>
    // </>


  )
}

export default AddressCardArray