import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material';
import AddressCardArray from '../Address/AddressCardArray'
import { Box } from '@mui/system'
import { TextField } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../State/Order/Action';
import { AuthContext } from '../../context/AuthContext';


const DeliveryAddressForm = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { user, admin } = useContext(AuthContext);
    user.address.map(item=>(console.log(item)))
    console.log(user.address)

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            street: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("contactNumber")
        }
        
        const orderData={address, navigate}
        console.log("address", orderData)
        dispatch(createOrder(orderData))
        // console.log(address);
        // navigate(0)
        // navigate(`?step=3`,{ replace: true })
    }

    const handleCreateOrder = (address) => {
        // console.log(item)
        const orderData={address, navigate}
        console.log("address", orderData)
        dispatch(createOrder(orderData));
      };

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                {user.address.map((item)=>(<div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCardArray address={item}/>
                        <Button onClick={()=>handleCreateOrder(item)} sx={{ mt: 2 }} size="large" variant="contained">Deliver Here</Button>
                    </div>))}
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required id="address" name="address" label="Address" fullWidth autoComplete="given-name"
                                        multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="city" name="city" label="City" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="state" name="state" label="State/Province" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="zip" name="zip" label="Zip/ Postal Code" fullWidth autoComplete="shipping postal" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="contactNumber" name="contactNumber" label="Contact Number" fullWidth autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained" type="submit">Next</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default DeliveryAddressForm