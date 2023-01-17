import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { randomCreatedDate} from '@mui/x-data-grid-generator';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const initialRows = [
  {
    id: 1,
    Code: 'C33',
    Désignation: 'CocaCola',
    DateExpiration: randomCreatedDate(),
    Prix: 34.5,
   Stock: 56,
    Categorie: 'Boissons',
  },
  {
    id: 2,
    Code:'SF44' ,
    Désignation: 'Safia',
    DateExpiration: randomCreatedDate(),
    Prix: 1600,
   Stock: 56, 
    Categorie: 'Boissons',
  },
  {
    id: 3,
    Code:'YA84' ,
    Désignation: 'Yaourt',
    DateExpiration: randomCreatedDate(),
    Prix: 500,
   Stock: 44, 
    Categorie: 'Alimentation',
  },
];

export default function ColumnTypesGrid() {
  const [rows, setRows] = React.useState(initialRows);

  const Delete = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const update = React.useCallback(
    (id) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id);
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      { field: 'Code', type: 'string' },
      { field: 'Désignation', type: 'string' },
      { field: 'DateExpiration', type: 'date', width: 180 },
      { field: 'Prix', type: 'number'},
      { field: 'Stock', type: 'number'},
      {
        field: 'Categorie',
        type: 'singleSelect',
        width: 120,
        valueOptions: [
          'Boissons',
          'Fromage',
          'Eau Minerale',
          'Alimentation',
          'Chocolat',
        ],
      },
      {
        field: 'Actions',
        type: 'actions',
        width: 150,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={Delete(params.id)}
          />,
          <GridActionsCellItem
            icon={<BorderColorIcon />}
            label="update"
            onClick={update(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [Delete , update],
  );

  return (

    <div style={{ height: 300, width: 820 }}>
      <h2>Liste des Articles </h2>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}