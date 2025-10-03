export default function BootstrapFroms() {
    return (
        <div id="wd-css-styling-forms">
            <h2>Forms</h2>
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" placeholder="name@example.com" />
            <FormLabel>Example textarea</FormLabel>
            <FormControl as="textarea" rows={3} />
            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <FormSelect>
                    <option value="0" defaultChecked>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </FormSelect>
            </div>
            <div id="wd-css-styling-switches">
                <h3>Switches</h3>
                <FormCheck type="switch" defaultChecked={false} label="Unchecked switch checkbox input" />
                <FormCheck type="switch" defaultChecked={true} label="Checked switch checkbox input" />
                <FormCheck type="switch" defaultChecked={false} label="Unchecked disabled switch checkbox input" disabled />
                <FormCheck type="switch" defaultChecked={true} label="Checked disabled switch checkbox input" disabled />
            </div>
            <div id="wd-css-styling-range-and-sliders">
                <h3>Range</h3>
                <FormLabel>Example range</FormLabel>
            </div>
            <div id="wd-css-responsive-forms-1">
                <h3>Responsive forms</h3>
                <Row className="mb-3" controlid="email1">
                    <FormLabel column sm={2}> Email </FormLabel>
                    <Col sm={10}>
                        <FormControl type="email" defaultValue="email@example.com" />
                    </Col>
                </Row>
                <Row className="mb-3" controlid="password1">
                    <FormLabel column sm={2}> Password </FormLabel>
                    <Col sm={10}>
                        <FormControl type="password" />
                    </Col>
                </Row>
                <Row className="mb-3" controlid="textarea2">
                    <FormLabel column sm={2}> Bio </FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
import { Row, Col } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";
import { FormSelect } from "react-bootstrap";
import { FormLabel, FormControl } from "react-bootstrap";