function AdminSwapTable() {
  const swaps = [
    { id: 1, from: "Alice", to: "Bob", status: "Pending" },
    { id: 2, from: "Charlie", to: "Alice", status: "Accepted" },
    { id: 3, from: "Bob", to: "Charlie", status: "Cancelled" },
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {swaps.map((swap) => (
          <tr key={swap.id}>
            <td>{swap.from}</td>
            <td>{swap.to}</td>
            <td>{swap.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminSwapTable;
