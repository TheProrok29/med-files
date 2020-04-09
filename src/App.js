import React, { Component } from "react";
const medicineItems = [
  {
    id: 1,
    name: "Gripex",
    description: "Best ever",
    med_form: "Ointment",
    med_type: "Antybiotic"
  },
  {
    id: 2,
    name: "Apap",
    description: "Painkiller",
    med_form: "Ointment",
    med_type: "Antybiotic"
  },
  {
    id: 3,
    name: "ClearSKy",
    description: "For eye",
    med_form: "Ointment",
    med_type: "Antybiotic"
  },
  {
    id: 4,
    name: "WindWear",
    description: "Best probiotic for rain",
    med_form: "Ointment",
    med_type: "Probiotic"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicineList: medicineItems
    };
  }
  renderItems = () => {
    const newItems = this.state.medicineList;
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={"medicine-name mr-2"}
          title={item.name}
        >
          {item.id} - {item.name}
        </span>
        <span>
          <button className="btn btn-secondary mr-2"> Edit </button>
          <button className="btn btn-danger">Delete </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Med-files app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add medicine</button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;