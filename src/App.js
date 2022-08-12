import "./App.css";
import Header from "./Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Container, Typography } from "@material-ui/core";
import TextField from "./Components/FormFields/TextField";
import DateTimePicker from "./Components/FormFields/DateTimePicer";
import SelectWrapper from "./Components/FormFields/select";
import Country from "./Components/Datas/Country.json";
import CheckBox from "./Components/FormFields/CheckBox";
import Button from "./Components/FormFields/Button";
//Make Styles With Matierial Ui And Use Styles

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
//Creating Initial State For The Forms Fields
const INITIAL_STATE = {
  FirstName: "",
  LastName: "",
  Email: "",
  Phone: "",
  AddressLine1: "",
  AddressLine2: "",
  City: "",
  State: "",
  Country: "",
  ArrivalDate: "",
  ReturnDate: "",
  accept: false,
};
//Creatinng Validation Schema For Validating The Form
const VALIDATION_SCHEMA = Yup.object().shape({
  FirstName: Yup.string().required("required"),
  LastName: Yup.string().required("required"),
  Email: Yup.string().email("Please Enter Valid email").required("required"),
  Phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  AddressLine1: Yup.string().required("required"),
  AddressLine2: Yup.string(),
  City: Yup.string().required("required"),
  State: Yup.string().required("required"),
  Country: Yup.string().required("required"),
  accept: Yup.boolean()
    .oneOf([true], "The Terms And Condition Must be Acccepted")
    .required("required"),
  ArrivalDate: Yup.date().required("required"),
  ReturnDate: Yup.date().required("required"),
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md" spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              {/* we want to Create Our Form For Use */}
              {/* Formik has Initialvalue and Validation schema as props*/}
              {/* Then Its Also Have a onSubmit Function For Submiting The Form  */}
              <Formik
                initialValues={{
                  ...INITIAL_STATE,
                }}
                validationSchema={VALIDATION_SCHEMA}
                onSubmit={(values,props) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={2}>
                    {/* Field For User Details */}
                    <Grid item xs={12}>
                      <Typography>User Details</Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField name="FirstName" label="FirstName"></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="LastName" label="LastName"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField name="Email" label="Email"></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="Phone" label="Phone"></TextField>
                    </Grid>

                    {/* Field For User address */}
                    <Grid item xs={12}>
                      <Typography>Address</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="AddressLine1"
                        label="Address1"
                      ></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="AddressLine2"
                        label="Address2"
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="City" label="City" ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="State" label="State"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <SelectWrapper
                        name="Country"
                        label="Country"
                        options={Country}
                      />
                    </Grid>

                    {/* Field For Booking address */}
                    <Grid item xs={12}>
                      <Typography>Booking Address</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker
                        name="ArrivalDate"
                        label="ArrivalDate"
                      ></DateTimePicker>
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker
                        name="ReturnDate"
                        label="ReturnDate"
                      ></DateTimePicker>
                    </Grid>
                    <Grid item xs={12}>
                      <CheckBox
                        name="accept"
                        legend="privacy and policy"
                        label="I agree"
                      ></CheckBox>
                      <Grid />
                      <Grid item xs={12}>
                         <Button name="Submit" label="Submit" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
