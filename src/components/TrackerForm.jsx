import { MdKeyboardArrowRight } from "react-icons/md";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useCoordinates } from "../../context/CoordinatesContext";

const IPAddressTrackerSchema = Yup.object().shape({
	ipAddress: Yup.string()
		.matches(/^(?=.*[0-9]+$)(?=.*[.])/, 'Please enter a valid IP Address')
		.required('Please enter a IP Address')
});

export default function TrackerForm() {
	const { addToCoordinates, clearCoordinates } = useCoordinates();
	return (
		<div className="form">
			<Formik
				initialValues={{ ipAddress: '' }}
				validationSchema={IPAddressTrackerSchema}
				onSubmit={async (values) => {
					let ipAddress = values.ipAddress;
					let key = process.env.NEXT_PUBLIC_API_KEY;
					await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ipAddress}`)
						.then(res => res.json())
						.then(res => {
							addToCoordinates(res)
						})
						.catch(error => {
							console.log('Error: ' + error);
						});
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="field">
							<p className="control">
								<Field className='input' name='ipAddress' placeholder='Search for any IP address or domain' onClick={() => clearCoordinates()} />
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