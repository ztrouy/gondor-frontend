import { Container, Stack, Typography , Paper} from "@mui/material"
import ArticleHeader from "../../components/base/ArticleHeader.jsx"
import SectionHeader from "../../components/base/SectionHeader.jsx"
import { EditOutlined } from "@mui/icons-material"
import { Button } from "@mui/material"
import { getAccountDetailsForCurrentUser } from "../../managers/accountManager.js"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AccountDetails = () => {
    const [accountDetails, setAccountDetails] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getAccountDetailsForCurrentUser().then(setAccountDetails)
    }, [])

    const dateOfBirth = new Date(accountDetails.dateOfBirth)
    const longDateOfBirth = dateOfBirth.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) 
    
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
                        <Typography>{longDateOfBirth}</Typography>
                        <SectionHeader sx={{fontWeight: "bold"}}>Primary Address</SectionHeader>
                        <Typography>{accountDetails.primaryAddress}</Typography>
                        <Typography sx={{ textDecoration: 'underline', color: "#ACACAC", fontSize: 12}} onClick={() => navigate("/account/addresses")}>Manage Addresses</Typography>
                    <Button variant="contained" sx={{borderRadius: 28, width: "fit-content", marginTop: 1}} startIcon={<EditOutlined/>}>Edit</Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default AccountDetails
