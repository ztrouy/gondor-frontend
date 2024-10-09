import { Container, Stack, Typography , Paper} from "@mui/material"
import ArticleHeader from "../../components/base/ArticleHeader.jsx"
import SectionHeader from "../../components/base/SectionHeader.jsx"
import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import { getAccountDetailsForCurrentUser } from "../../managers/accountManager.js"
import { useEffect, useState } from "react"

const AccountDetails = () => {
    const [accountDetails, setAccountDetails] = useState({})
    useEffect(() => {
        getAccountDetailsForCurrentUser().then(setAccountDetails)
    }, [])

    const dateOfBirth = new Date(accountDetails.dateOfBirth)
    const longDateOfBirth = dateOfBirth.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) 
    
    return (
        <Container variant={"page"}>
            <Paper sx={{ padding: 3, width: "60%"}}>
              <Stack variant={"list"}>
                        <ArticleHeader sx={{fontWeight: "bold"}}>Account Details</ArticleHeader>
                        <Typography></Typography>
                        <SectionHeader class>Full Name</SectionHeader>
                        <Typography>{ accountDetails.fullName}</Typography>
                        <SectionHeader>Email Address</SectionHeader>
                        <Typography>{accountDetails.email}</Typography>
                        <SectionHeader>Date of Birth</SectionHeader>
                        <Typography>{longDateOfBirth}</Typography>
                        <Button variant="contained" sx={{borderRadius: 28}} startIcon={<Add/>}>Edit</Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default AccountDetails