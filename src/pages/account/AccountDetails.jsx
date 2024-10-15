import { Container, Stack, Typography , Paper} from "@mui/material"
import ArticleHeader from "../../components/base/ArticleHeader.jsx"
import SectionHeader from "../../components/base/SectionHeader.jsx"
import { EditOutlined } from "@mui/icons-material"
import { Button } from "@mui/material"
import { getAccountDetailsForCurrentUser } from "../../managers/accountManager.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import EditAccountModal from "./EditAccountModal.jsx"
import dayjs from "dayjs"

const AccountDetails = () => {
    const [accountDetails, setAccountDetails] = useState({})
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const getAndSetAccountDetails = () => {
        getAccountDetailsForCurrentUser().then((accountDetails) => {
            setAccountDetails(accountDetails)
        })
    }
    
    useEffect(() => {
       getAndSetAccountDetails()
    }, [])

    const dateOfBirth = dayjs(accountDetails.dateOfBirth).format('MMMM D, YYYY')
    
    return (
        <Container variant={"page"}>
            <Paper sx={{ padding: 3, width: "60%"}}>
              <Stack variant={"list"}>
                        <ArticleHeader>Account Details</ArticleHeader>
                        <Typography sx={{ textDecoration: 'underline', color: "#ACACAC", fontSize: 12}}>Change Password</Typography>
                        <SectionHeader sx={{fontWeight: "bold", textDecoration: 'underline' }}>Full Name</SectionHeader>
                        <Typography>{ accountDetails.fullName}</Typography>
                        <SectionHeader sx={{fontWeight: "bold"}}>Email Address</SectionHeader>
                        <Typography>{accountDetails.email}</Typography>
                        <SectionHeader sx={{fontWeight: "bold"}}>Date of Birth</SectionHeader>
                        <Typography>{dateOfBirth}</Typography>
                        <SectionHeader sx={{fontWeight: "bold"}}>Primary Address</SectionHeader>
                        <Typography>{accountDetails.primaryAddress?.line1}{accountDetails.primaryAddress?.line2} </Typography>
                        <Typography>{accountDetails.primaryAddress?.city}, {accountDetails.primaryAddress?.stateCode} {accountDetails.primaryAddress?.postalCode}</Typography>
                        <Typography sx={{ textDecoration: 'underline', color: "#ACACAC", fontSize: 12}} onClick={() => navigate("/account/addresses")}>Manage Addresses</Typography>
                    <Button variant="contained" sx={{ borderRadius: 28, width: "fit-content", marginTop: 1 }} onClick={handleOpen} startIcon={<EditOutlined />}>Edit</Button>
                    <EditAccountModal getAndSetAccountDetails={getAndSetAccountDetails} accountDetails={accountDetails} open={open} handleClose={handleClose} />
                </Stack>
            </Paper>
        </Container>
    )
}

export default AccountDetails
