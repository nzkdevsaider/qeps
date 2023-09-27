const Footer = () => {
    return (
        <footer className="flex bg-red-600 text-white p-3 px-5 gap-10 mt-auto">
            <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold">qeps</h1>
            <span className="text-white">Sistema de Matricula y Pagos</span>
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-2xl">Categoría</h1>
                <span>Enlace</span>
            </div>
        </footer>
    );
}

export default Footer;