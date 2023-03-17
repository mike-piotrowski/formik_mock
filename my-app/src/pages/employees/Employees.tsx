import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";



type Employee = { id: number; name: string; surname: string; salary: number, department: {
  id: number, name: string
} };
const getData = async (setData: any) => {
  const { data } = await axios.get(
    `http://192.168.200.252/test/mic_pio/employee`
  );
  setData(data);
};

declare function useNavigate(): navigate;


  interface navigate {
    (
      to: To,
      options?: {
        replace?: boolean;
        state?: any;
        relative?: RelativeRoutingType;
      }
    ): void;
    (delta: number): void;
  }

export default function App() {
  const [employees, setEmployees] = useState<Array<Employee>>([]);

  useEffect(() => {
    getData(setEmployees);
  }, []);

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Employee ID</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Employee surname</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Employee name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Salary</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>ID Department</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
            <TableCell>View/Edit</TableCell>
            <TableCell>Add New</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp, index) => (
            <TableRow
              key={emp.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{emp.surname}</TableCell>
              <TableCell component="th" scope="data">
                {emp.name}
              </TableCell>
              <TableCell>{emp.salary}</TableCell>
              <TableCell>{emp.department != null ? emp.department.id : ""}</TableCell>
              <TableCell>{emp.department != null ? emp.department.name : ""}</TableCell>
              <TableCell><EditIcon onClick={() => goTo('employees/' + employees.id)}/></TableCell>
              <TableCell><a href="url">link text</a></TableCell>
              <TableCell><a href="url">link text</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}