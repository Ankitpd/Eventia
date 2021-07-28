import React from 'react'
import './Contact.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
const Contact = () => {
      return (
        <div className="contact">
          <Grid>
            <Card style={{ maxWidth: 550, padding: "10px 5px" , margin: "0 auto"}}>
              <CardContent> 
              <Typography gutterBottom variant="h5">
                  Enquiry Form
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                  Fill up the form and our team will get back to you within 24 hours.
              </Typography> 
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Card style={{ maxWidth: 400, padding: "25px 5px", margin: "0 auto" }}>
              <CardContent> 
              <Typography variant="h4">
                  Contact US
              </Typography>
                <Typography variant="h6">
                  For any support or any questions:
              </Typography> 
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                        <h5>Mail Us At:</h5>
                        <h6>eventia@gmail.com</h6>
                    </Grid>
                    <Grid xs={12}item>
                        <h5>Connect at:</h5>
                        <h6>1234567890</h6>
                    </Grid>
                    <Grid xs={12}item>
                        <h5>Address:</h5>
                        <h6>288E Jurong East Street</h6>
                        <h6>#12-410</h6>
                        <h6>Singapore,605288</h6>
                    </Grid>
                  </Grid>
              </CardContent>
            </Card>



          </div>
      );
    }

export default Contact;
