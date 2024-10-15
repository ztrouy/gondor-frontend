import { Modal, Box, Typography, TextField, Button } from "@mui/material"
import { useState, useEffect } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import { updateAccountDetailsForCurrentUser } from "../../managers/accountManager.js"

const EditAccountModal = ({open, handleClose, accountDetails, getAndSetAccountDetails}) => {
    const [firstName, setFirstName] = useState(accountDetails.firstName || "")
    const [lastName, setLastName] = useState(accountDetails.lastName || "")
    const [dateOfBirth, setDateOfBirth] = useState(dayjs(accountDetails.dateOfBirth).format('YYYY-MM-DD'))
    const [email, setEmail] = useState(accountDetails.email || "")

    useEffect(() => {
        setFirstName(accountDetails.firstName || "")
        setLastName(accountDetails.lastName || "")
        setDateOfBirth(dayjs(accountDetails.dateOfBirth).format('YYYY-MM-DD'))
        setEmail(accountDetails.email || "")
    }, [accountDetails])

    const handleConfirm = () => {
        const updatedDetails = {
            email,
            firstName,
            lastName,
            dateOfBirth,
        }
        updateAccountDetailsForCurrentUser(updatedDetails).then(() => {
            getAndSetAccountDetails()
            handleClose()
        })
    }

    const handleCancel = () => {
        setFirstName(accountDetails.firstName || "")
        setLastName(accountDetails.lastName || "")
        setDateOfBirth(dayjs(accountDetails.dateOfBirth).format('YYYY-MM-DD'))
        setEmail(accountDetails.email || "")
        handleClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleCancel}
            aria-labelledby="edit-account-modal-title"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxWidth: 400,
                width: '90%',
            }}>
                <Typography id="edit-account-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    Edit Account Details
                </Typography>
                <TextField
                    fullWidth
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Birth"
                        value={dayjs(dateOfBirth)}
                        onChange={(newValue) => setDateOfBirth(newValue.format('YYYY-MM-DD'))}
                        renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2 }} />}
                    />
                </LocalizationProvider>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button onClick={handleCancel} sx={{ mr: 1 }}>Cancel</Button>
                    <Button onClick={handleConfirm} variant="contained">Confirm</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default EditAccountModal;
