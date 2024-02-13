
import { Inter } from "next/font/google";
import {  useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
const inter = Inter({ subsets: ["latin"] });
interface dataType {
   email:string
	mx:boolean;
	dmarc:boolean;
 spf:boolean;
  SPF_Record:string;
	DMARC_Record:string;
	Catch_All_Set_up:boolean;
   Role_Based:boolean;
	Role:string;
	SMTP_Verfied:boolean;
	website_Association:boolean;
	Websites:string;
  

}
export default function Home() {
  const [email,setEmail]=useState("")
  const [data,setData]=useState<dataType[]>([])
  const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
  return (
    <main
      className={`flex min-h-screen bg-slate-600 flex-col gap-4 items-center justify-center p-24 ${inter.className}`}
    >
      
     
      
      
        <input type="text" className="lg:w-1/2 md:w-1/2 w-1/2 px-4 py-2 text-black rounded shadow" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Paste an email to be verified" /> 
     

        <button className="bg-green-800  text-black px-4 py-1 rounded shadow">Verify</button>
     

  
  <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
     
    </main>
  );
}
