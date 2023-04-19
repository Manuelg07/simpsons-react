import { useForm } from "react-hook-form";
import ErrorsMessage from "../../components/ErrorsMessage/ErrorsMessage";
import { LanguageContext } from "../../App";
import { useContext } from "react";

export default function ContactPage() {
    const {language} = useContext(LanguageContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (dataF) => {
        console.log(dataF)
    }

    console.log(errors)

    return <div>
        Asegurate de escribir en {language}
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("name", { required: true })} />
            <ErrorsMessage error={errors.name} />

            <input type="text" {...register("surname", { required: true, minLength: 10 })} />
            <ErrorsMessage error={errors.surname} />

            <input type="number" {...register("age", { required: true, min: 18 })} />
            <ErrorsMessage error={errors.age} />

            <input type="email" {...register("email")} />
            <ErrorsMessage error={errors.email} />


            <button>Enviar</button>
        </form>
    </div>
}