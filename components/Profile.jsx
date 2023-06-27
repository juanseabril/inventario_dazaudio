import ItemCard from "./ItemCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
    return (
        <section className="w-full;">
            <h1 className="head_text text-left">
                <span className="blue_gradient">
                    {name} Perfil                
                </span>
            </h1>
            <p className="desc text-left">{desc}</p>
            <div className="mt-6 prompt_layout">
                {data.map((item) => (
                    <ItemCard
                        key = {item._id}
                        item = {item}
                        handleEdit = {() => handleEdit && handleEdit(item)}
                        handleDelete = {() => handleDelete && handleDelete(item)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Profile