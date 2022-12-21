import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";
import axios from "axios";
const endpoint = "http://localhost:8000/api";

function PanelAdmin() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const response = await axios.get(`${endpoint}/accounts`);
    setAccounts(response.data);
  };

  // console.log(accounts);
  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={accounts}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="tipo" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
}

export default PanelAdmin;
