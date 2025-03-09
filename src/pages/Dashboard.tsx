import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Grid, Paper, Switch, Typography, CircularProgress } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import useAuth from "../hooks/useAuth";

const Dashboard: React.FC = () => {
    const { news, loading, error, covidData } = useAuth();
    const [darkMode, setDarkMode] = useState(false);

    const processedData = news.map((article, index) => ({
        name: new Date(article.publishedAt).toLocaleDateString(),
        popularity: index + 1,
    }));
    console.log(news, 'news')
    console.log(covidData, 'covid')
    console.log(processedData, 'datata')

    const Data = covidData.map((item) => ({
        date: item.date,
        cases: item.cases,
        deaths: item.deaths
    }))
    console.log(Data, 'covidDAtatatat')

    const theme = createTheme({
        palette: { mode: darkMode ? "dark" : "light" },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Grid container spacing={3} sx={{ mt: 4 }}>
                    <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">News Dashboard</Typography>
                        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    </Grid>

                    {/* Flex Grid Layout for Both Charts */}
                    <Grid container spacing={3} justifyContent="center" alignItems='center'>
                        {/* First Chart */}
                        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant="h6" align="center">News Popularity Over Time (Chart 1)</Typography>

                                {loading ? (
                                    <CircularProgress />
                                ) : error ? (
                                    <Typography color="error">{error}</Typography>
                                ) : (
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={processedData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line type="monotone" dataKey="popularity" stroke="#8884d8" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                )}
                            </Paper>
                        </Grid>

                        {/* Second Chart */}
                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant="h6" align="center">Covid</Typography>

                                {loading ? (
                                    <CircularProgress />
                                ) : error ? (
                                    <Typography color="error">{error}</Typography>
                                ) : (
                                    <ResponsiveContainer width="100%" height={400}>
                                        <LineChart data={Data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="date" />
                                            <YAxis tickFormatter={(value) => `${(value / 1_000_000).toFixed(1)}M`} domain={[0, "auto"]} />
                                            <Tooltip />
                                            <Legend />

                                            {/* Cases (Blue) */}
                                            <Line type="monotone" dataKey="cases" stroke="blue" strokeWidth={2} />

                                            {/* Deaths (Green) */}
                                            <Line type="monotone" dataKey="deaths" stroke="green" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Dashboard;
