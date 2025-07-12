function AdminUserTable() {
  const users = [
    { id: 1, name: "Alice", status: "Active" },
    { id: 2, name: "Bob", status: "Banned" },
    { id: 3, name: "Charlie", status: "Active" },
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.status}</td>
            <td>
              {user.status === "Active" ? (
                <button onClick={() => alert(`Banned ${user.name}`)}>
                  Ban
                </button>
              ) : (
                <span>--</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminUserTable;
