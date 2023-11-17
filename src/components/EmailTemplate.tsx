interface EmailTemplateProps {
  name: string | null;
  email: string | null;
  message: string | null;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>Formulario de contacto enviado</h1>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Mensaje: {message}</p>
  </div>
);