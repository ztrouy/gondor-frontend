import { Box, Typography } from "@mui/material"

const SectionHeader = ({ children }) => {
    return (
        <Box>
            <Typography variant="h5" sx={{fontWeight: 700}}>{children}</Typography>
        </Box>
    )
}

export default SectionHeader