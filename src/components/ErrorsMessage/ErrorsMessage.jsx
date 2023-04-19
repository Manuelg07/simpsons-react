export default function ErrorsMessage({ error }) {
    return <div>
        {error && <>
            {error.type === "required" && <p>Campo requerido</p>}
            {error.type === "minLength" && <p>El campo es muy pequeño</p>}
            {error.type === "min" && <p>El numero es muy pequeño</p>}
        </>}
    </div>
}