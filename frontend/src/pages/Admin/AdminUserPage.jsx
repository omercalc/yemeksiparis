import { message, Table } from "antd";
import { useCallback, useEffect, useState } from "react";

const AdminUserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/api/users`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Giriş başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  }, [apiUrl]);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record) => (
        <img
          src={record.avatar}
          alt="Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "20%" }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username ",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record._id}
      />
      ;
    </div>
  );
};

export default AdminUserPage;
