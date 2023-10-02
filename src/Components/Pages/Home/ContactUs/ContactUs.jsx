import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import appoinment from '../../../../assets/images/appointment.png'
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } ,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    console.log(errors);

    return (
        <section className='py-16' style={{
            background: `url(${appoinment})`
        }}>
            <div className='text-white text-center pb-6'>
                <SectionTitle bigText={'Stay connected with us'} SmallText={'Contact us'}></SectionTitle>
            </div>

            <div className=' flex justify-center'>
                <form className='flex  flex-col gap-6 w-[80%] lg:w-1/3' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input' type="email" placeholder="Enter Email" {...register("email", { required: true, maxLength: 80 })} />

                    <input className='input' type="text" placeholder="Subject" {...register("Subject", { required: true, maxLength: 100 })} />

                    <textarea className='textarea overscroll-auto textarea-lg h-32' type="textarea" placeholder="Your Message" {...register("message", { required: true })} />

                    <div className='flex justify-center'>
                        <button className='btn bg-gradient-to-r from-primary to-secondary  btn-primary text-white w-1/2 lg:w-1/4' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;