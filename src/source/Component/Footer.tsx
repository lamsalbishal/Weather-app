import moment from "moment";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { colors } from "../Const/Color";

interface Props {
  himidityFlow: number;
  windFlow: number;
}
export const Footer: React.FC<Props> = (props) => {
  return (
    <div>
      <Row>
        <Col md={{ offset: 4, span: 8 }}>
          <div className="sunBox pl-2">
            <div className="d-flex align-items-center">
              <div>
                <WiSunrise color={colors.yellowColor} className="sunSize" />
                <div>
                  <strong>06.49</strong>
                </div>
              </div>
              <div className="connectionBox">------------------------</div>
              <div>
                <WiSunset color={colors.yellowColor} className="sunSize" />
                <div>
                  <strong>17:13</strong>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className="sunBox ">
            <div className="mt-2">
              <h3>
                <strong>Humidity:</strong>
                <span>&nbsp;{props.himidityFlow}%</span>
              </h3>
            </div>
            <div className="mt-2">
              {" "}
              <h3>
                <strong>Wind:</strong>
                <span>&nbsp;{props.windFlow} Km/h</span>
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
