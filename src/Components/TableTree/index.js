import React, { useState } from 'react'
import styled from 'styled-components'
import { useTable, useExpanded, useBlockLayout } from 'react-table'
import { useSticky } from "react-table-sticky"
// import makeData, { data } from './makeData'

import getTableColumns, { getTableData } from './tableData'


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    // border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #CACACA;
      // border-right: 1px solid #CACACA;
      
      :last-child {
        border-right: 0;
      }
    }
    th{
      border-right: 1px solid #CACACA;
    }
  }
`

const Styles2 = styled.div`
  padding: 1rem;

  .table {
    border: 1px solid #ddd;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      padding: 5px;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;

        &.isResizing {
          background: red;
        }
      }
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px #ccc;
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px #ccc;
      }
    }
  }
`;

function Table({ columns: userColumns, data }) {
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, // state: { expanded },
  } = useTable(
    {columns: userColumns, data, initialState: { expanded: [{0: true}] }},
    useExpanded, // Use the useExpanded plugin hook
    // useSticky,
    )
  
  const [selectedRow, setSelectedRow] = useState()
  console.log('selectedRow', selectedRow)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} onClick={() => setSelectedRow(row.id)} style={{ backgroundColor: row.id === selectedRow ? '#E8FFFF': '' }} >
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

function TreeTable() {
  // const data = React.useMemo(() => makeData(5, 5, 0), [])
  // console.log('data', data)
  // React.useEffect(() => tableInstance.toggleAllRowsExpanded(true), []);

  return (
    <Styles>
      <Table columns={getTableColumns()} data={getTableData()} />
    </Styles>
  )
}

export default TreeTable
