import Playground from '@/components/forms/playground';
import Header from '@/components/header';
import { Container, styled } from '@mui/material';
import Head from 'next/head';

const ResponsiveContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

export default function Home() {
    return (
        <>
            <Head>
                <title>GitHub Contributions Playground</title>
                <meta
                    name="description"
                    content="A playground for styling GitHub contribution graphs and generating the markdown for displaying them in READMEs"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ResponsiveContainer maxWidth="md">
                    <Header />
                    <Playground />
                </ResponsiveContainer>
            </main>
        </>
    );
}
