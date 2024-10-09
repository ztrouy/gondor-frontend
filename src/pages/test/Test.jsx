import { Button, Container, Paper, Stack, Typography } from "@mui/material"
import PageHeader from "../../components/base/PageHeader.jsx"
import ArticleHeader from "../../components/base/ArticleHeader.jsx"
import SectionHeader from "../../components/base/SectionHeader.jsx"
import { Add } from "@mui/icons-material"

const Test = () => {
    return (
        <Container variant={"page"}>
            <Stack variant={"list"}>
                <PageHeader>Test Header</PageHeader>
                <Paper sx={{padding: 3}}>
                    <Stack variant={"list"}>
                        <ArticleHeader>Article Header</ArticleHeader>
                        <Typography>Test Item</Typography>
                        <SectionHeader>Another Type</SectionHeader>
                        <Typography>Testing more</Typography>
                        <Typography>Testing yet again</Typography>
                        <Stack variant={"buttons-end"}>
                            <Button variant="contained" sx={{borderRadius: 28}} startIcon={<Add/>}>First</Button>
                            <Button variant="outlined">Second</Button>
                        </Stack>
                    </Stack>
                </Paper>
                <Paper sx={{padding: 1}}>
                    <Typography>Test Item</Typography>
                </Paper>
                <Paper sx={{padding: 1}}>
                    <Typography>Test Item</Typography>
                </Paper>
            </Stack>
        </Container>
    )
}

export default Test