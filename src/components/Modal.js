import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };

    }
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Medicine item </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Medicine Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Medicine description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="med_form">Medicine form</Label>
                            <Input
                                type="text"
                                name="med_form"
                                value={this.state.activeItem.med_form}
                                onChange={this.handleChange}
                                placeholder="Enter Medicine form"
                            />
                        </FormGroup><FormGroup>
                            <Label for="med_type">Medicine type</Label>
                            <Input
                                type="text"
                                name="med_type"
                                value={this.state.activeItem.med_type}
                                onChange={this.handleChange}
                                placeholder="Enter Medicine type"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
              </Button>
                </ModalFooter>
            </Modal>
        );
    }
}