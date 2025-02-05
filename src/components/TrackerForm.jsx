import { MdKeyboardArrowRight } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const IPAddressTrackerSchema = Yup.object().shape({
	ipAddress: Yup.string()
		.matches(/^(?=.*[0-9]+$)(?=.*[,])/, 'Please enter a valid IP Address')
		.min(16, 'The IP Address must be more than 16 characters')
		.max(16, 'The IP Address must be less than 16 characters')
		.required('Please enter a IP Address')
})

export default function TrackerForm() {
	return (
		<div className="form">
			<Formik
				initialValues={{ ipAddress: '' }}
				validationSchema={IPAddressTrackerSchema}
				onSubmit={values => {
					let ipAddress = values.ipAddress;
					console.log('Your IP is: ' + ipAddress);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="field">
							<p className="control">
								<Field className='input' name='ipAddress' placeholder='Search for any IP address or domain' />
								<button className="button" type="submit"><MdKeyboardArrowRight /></button>
							</p>
							{errors.ipAddress && touched.ipAddress ? (<p className='help is-danger'>{errors.ipAddress}</p>) : null}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}