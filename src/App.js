import React, { Component } from "react";
import Modal from "./components/Modal";
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
      modal: false,
      activeItem: {
        title: "",
        description: "",
        med_form: "",
        med_type: ""
      },
      medicineList: medicineItems
    };
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    alert("save" + JSON.stringify(item));
  };
  handleDelete = item => {
    alert("delete" + JSON.stringify(item));
  };
  createItem = () => {
    const item = { name: "", description: "", med_form: "", med_type: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
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
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"> Edit </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger">Delete </button>
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
                <button onClick={this.createItem} className="btn btn-primary">Add medicine</button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;