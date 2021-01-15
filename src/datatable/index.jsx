import React from "react";
import '../App.css';
import Table from 'react-bootstrap/Table';

export default function Datatable({ data, pro}){
    const columns = data[0] && Object.keys(data[0]);
    return (
        <div className="tabeCan">
     <Table responsive="lg" striped bordered hover className="table table-striped">
        <thead>
            <tr>{data[0] && columns.map((heading, index) => <th key={index}>{heading}</th>)}</tr>

        </thead>
        <tbody>
            {data.map((row, rowIndex) =>
                <tr key={rowIndex} className="tRow">
                    {columns.map((column, columnIndex) =>
                        <td key={columnIndex}>{row[column]}</td>
                    )}
                </tr>
            )}
        </tbody>
    </Table>
    </div>
    );
}