import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios"


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
      medicineList: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("/api/medicines/")
      .then(res => this.setState({ medicineList: res.data }))
      .catch(err => console.log(err));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/api/medicines/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post(`/api/medicines/`, item)
      .then(res => this.refreshList());
    return;
  };
  handleDelete = item => {
    axios
      .delete(`/api/medicines/${item.id}`)
      .then(res => this.refreshList());
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