import { createTheme } from "@mui/material"
import { indigo } from "@mui/material/colors"

export const baseTheme = createTheme({
    palette: {
        mode: "light",
        primary: indigo,
    },
    components: {
        MuiContainer: {
            variants: [
                // Custom Container variant used for webpages called "page"
                {
                    props: { variant: 'page' },
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: '40px',
                        paddingBottom: '40px',
                    },
                },
            ],
        },
        MuiStack: {
            variants: [
                // Custom Stack variant used for standard lists of elements called "list"
                {
                    props: { variant: 'list' },
                    style: {
                        flexDirection: 'column',
                        gap: "8px",
                        width: "100%",
                        maxWidth: "800px"
                    },
                },
                // Custom Stack variant used for groupings of Buttons called "buttons"
                {
                    props: { variant: 'buttons' },
                    style: {
                        flexDirection: 'row',
                        gap: "8px",
                        marginTop: '8px',
                    },
                },
                // Custom Stack variant used for groupings of end-aligned Buttons called "end-buttons"
                {
                    props: { variant: 'buttons-end' },
                    style: {
                        flexDirection: 'row',
                        gap: "8px",
                        justifyContent: 'flex-end',
                        marginTop: '8px',
                    },
                },
            ],
        },
    },
})

export default baseTheme