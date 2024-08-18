import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
import { Grid, Box, Container, Toolbar, AppBar, Button, Typography} from "@mui/material";
import Head from "next/head";




export default function Home() {
  return (
    <Container maxwidth="lg">
      <Head>
        <title> Flashcard SaaS</title>
        <meta name ="description" content="Create flashcards from your text"></meta>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Flashcard Saas</Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </Toolbar>

      </AppBar>

    <Box sx={{textAlign: 'center', my:4}}>
      <Typography variant="h2">
        Welcome to Flashcard SaaS
      </Typography>
      <Typography variant="h5">
        {' '}
        The easiest way to make flashcards from your text

      </Typography>
      <Button varirant="contained" color="primary" sx={{mt: 2}}>
        Get Started

      </Button>
    </Box>

    <Box sx={{my: 6}}>
      <Typography variant="h2" component="h2">
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant = "h6" >
          Easy Text Input
          </Typography>
          <Typography>
            Simply input your text and let our software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant = "h6" >
          Easy Text Input
          </Typography>
          <Typography>
            Simply input your text and let our software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant = "h6" >
          Easy Text Input
          </Typography>
          <Typography>
            Simply input your text and let our software do the rest. Creating flashcards has never been easier.
          </Typography>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{my: 6, textAlign: "center"}}>
      <Typography variant="h4" gutterBottom>Pricing</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ p:3, border: '1px solid', borderColor:'grey.300', borderRadius: 2}}>
          <Typography variant = "h5" >
            Basic
          </Typography>
          <Typography variant="h6">
            $5/month    
          </Typography>
          <Typography>
            Flashcard generation with one time use
          </Typography>
          <Button variant ="contained">Choose plan</Button>
          </Box>  
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ p:3, border: '1px solid', borderColor:'grey.300', borderRadius: 2}}>
          <Typography variant = "h5" >
            Pro
          </Typography>
          <Typography variant="h6">
            $10/month    
          </Typography>
          <Typography>
            Access to flashcard generation with limited storage
          </Typography>
          <Button variant ="contained">Choose plan</Button>
          </Box>
          </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ p:3, border: '1px solid', borderColor:'grey.300', borderRadius: 2}}>
          <Typography variant = "h5" >
            Premium
          </Typography>
          <Typography variant="h6">
            $20/month    
          </Typography>
          <Typography>
            Unlimited flashcards and storage with priority support.
          </Typography>
          <Button variant ="contained">Choose plan</Button>
          </Box>

      </Grid>
      </Grid>

    </Box>
  </Container>
  )
}
