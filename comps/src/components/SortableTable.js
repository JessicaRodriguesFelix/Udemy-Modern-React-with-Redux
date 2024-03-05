import { useState } from 'react';
import Table from './Table'

function SortableTable(props) {
    // console.log('props from sortable', props)
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
            // console.log("sortOrder", sortOrder);
            // console.log("sortBy", sortBy);
        } else if( sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
            // console.log("sortOrder", sortOrder);
            // console.log("sortBy", sortBy);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null)
            // console.log("sortOrder", sortOrder);
            // console.log("sortBy", sortBy);
        }
    }

    const updatedConfig = config.map((column)=> {
        if (!column.sortValue) {
            return column;
        } else {
            return {
              ...column,
              header: () => (
                <th onClick={() => handleClick(column.label)}>
                  {" "}
                  {column.label} is sortable
                </th>
              ),
            };
        }
    })
       // make a copy of the 'data' props
       let sortedData = data;
       // only sort data if sortOrder && sortBy are not null
       if (sortOrder && sortBy) {
       const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
               return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }
    return (
      <div>
        {sortBy} - {sortOrder}
        <Table {...props} data={sortedData} config={updatedConfig} />
      </div>
    );
}
export default SortableTable;