const UserTable = ({ userdata }) => {

    const handleDelete = (id) => {
        fetch('http://localhost:8080/users/' + id, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }).then(() => {
            console.log('User added' + " " + id)
            window.location.reload(false);
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>CPF</td>
                        <td>Address</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.cpf}</td>
                                <td>{item.address}</td>
                                <td><button onClick={() => handleDelete(item.id)}>X</button></td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;