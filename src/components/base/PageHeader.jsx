import { Box, Typography } from "@mui/material"

const PageHeader = ({ children }) => {
    return (
        <Box>
            <Typography variant="h3" sx={{my: 2}}>{children}</Typography>
        </Box>
    )
}

export default PageHeader