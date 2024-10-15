import { Box, Typography } from "@mui/material"

const ArticleHeader = ({ children }) => {
    return (
        <Box>
            <Typography variant="h4" sx={{fontWeight: 700}}>{children}</Typography>
        </Box>
    )
}

export default ArticleHeader