import React, { useEffect, useMemo, useState } from "react";
// import "./styles.css";
//import Item from "./Item";
import custom from "./custom.module.css";
import { Table } from "react-bootstrap";





export default function Checkbox() {
    // Default Value
    var defaultSports = [
        { name: "Table Tennis", category: "Indoor" },
        { name: "Football", category: "Outdoor" },
        { name: "Swimming", category: "Aquatics" },
        { name: "Chess", category: "Indoor" },
        { name: "BaseBall", category: "Outdoor" }
    ];
    
    // Add default value on page load
    useEffect(() => {
        setSportList(defaultSports);
    }, []);


    const [sportList, setSportList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    // Function to get filtered list

    function getFilteredList() {                             
        if (!selectedCategory) {                     // Avoid filter when selectedCategory is null
            return sportList;
           
        }
        return sportList.filter((item) => item.category === selectedCategory);
    }

     // Avoid duplicate function calls with useMemo
     var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

    

    return (
        <div className={`checkbox ${custom.checkbox}`}>
            <div className={`filter-container ${custom.filter}`}>
                <div>Filter Sports by Category:</div>
                <div>
                    <select
                        name="category-list" id={`category-list ${custom.category}`}
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Aquatics">Aquatics</option>
                    </select>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-6">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                filteredList && filteredList.map((element) =>
                                    <tr>
                                        <td>{element.name}</td>
                                        <td>{element.category}</td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}




{/* <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div> */}