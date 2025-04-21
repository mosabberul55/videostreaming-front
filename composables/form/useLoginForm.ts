import { useForm } from 'vee-validate';
import * as yup from 'yup';

export function useLoginForm() {
    const { errors, handleSubmit, defineField, setErrors } = useForm({
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        }),
    });

    const [email, emailAttrs] = defineField('email');
    const [password, passwordAttrs] = defineField('password');

    return {
        errors,
        handleSubmit,
        setErrors,
        email,
        emailAttrs,
        password,
        passwordAttrs,
    };
}