import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

 

function PlatinumPlan() {

  return (

    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <Card variant="outlined" sx={{ maxWidth: 400 }}>

        <CardContent>

          <Typography variant="h4" gutterBottom>

            Platinum Package

          </Typography>

          <Typography variant="body1" gutterBottom>

            Included Features:

          </Typography>

          <ul>

            <li>Amazon Prime Video Content</li>

            <li>Hotstar Premium Content</li>

            <li>Zee Premium Content</li>

            <li>Netflix Premium Content</li>

            <li>4k Resolution</li>

            <li>No Ads</li>

            <li>Dolby Audio Supported</li>

          </ul>

          <Typography variant="h6" sx={{ mt: 2 }}>

            Price: ₹ 799 /-

          </Typography>
          <Link to="/platinum/create-user/Platinum">
          <Button variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>

            Buy Now

          </Button>
          </Link>
        </CardContent>

      </Card>

    </Container>

  );

}

 

export default PlatinumPlan;