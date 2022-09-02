export const comapnyTableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    render: () => (
      <button className="text-[#3E79F7] border-[#3E79F7] border-[1px] px-4 py-1 rounded-sm">
        View
      </button>
    ),
  },
];
