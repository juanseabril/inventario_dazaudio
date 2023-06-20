import Link from "next/link";

const Form = ({type, item, setItem, submitting, handleSubmit}) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Producto</span>
            </h1>
            <p className="desc text-left max-w-md">
                Comienza a administrar tu inventario de manera eficiente y mantén un seguimiento riguroso de tus productos.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-7 mb-7 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Nombre
                    </span>
                    <input 
                        value={item.name}
                        onChange={(e) => setItem({ ...item,
                            name: e.target.value })}
                        placeholder="Escribe el nombre de la mercancía aquí"
                        required
                        className="form_input"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Categoría
                    </span>
                    <input 
                        value={item.category}
                        onChange={(e) => setItem({ ...item,
                            category: e.target.value })}
                        placeholder="Escribe la categoría de la mercancía aquí"
                        required
                        className="form_input"
                    />
                </label>         
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Precio Compra
                    </span>
                    <input 
                        value={item.buy}
                        onChange={(e) => setItem({ ...item,
                            buy: e.target.value })}
                        placeholder="Escribe el precio de compra de la mercancía aquí"
                        required
                        className="form_input"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Precio Venta
                    </span>
                    <input 
                        value={item.sell}
                        onChange={(e) => setItem({ ...item,
                            sell: e.target.value })}
                        placeholder="Escribe el precio de venta de la mercancía aquí"
                        required
                        className="form_input"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Stock
                    </span>
                    <input 
                        value={item.stock}
                        onChange={(e) => setItem({ ...item,
                            stock: e.target.value })}
                        placeholder="Escribe el stock de la mercancía aquí"
                        required
                        className="form_input"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Detalles
                    </span>
                    <textarea 
                        value={item.details}
                        onChange={(e) => setItem({ ...item,
                            details: e.target.value })}
                        placeholder="Escribe algunos detalles de la mercancía aquí"
                        required
                        className="form_textarea"
                    />
                </label>
                <div className="flex-end mx-3 mb-3 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancelar
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting ? `${type}...` : type}               
                    </button>
                </div>
            </form>        
        </section>
    );
};

export default Form;