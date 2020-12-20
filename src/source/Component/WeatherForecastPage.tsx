import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import { colors } from "../Const/Color";
import { Hidden, Slider, Typography } from "@material-ui/core";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

interface PropsData {
  countryName: String;
  tempValue: number;
  tempText: String;
  sysCountry: String;
  bgColorFunc: Function;
}

const WeatherForecastPage: React.FC<PropsData> = (props) => {
  const valuetext = (value: number) => {
    props.bgColorFunc(value);
    return `${value}°C`;
  };

  function onSetDefaultValue(noValue: number) {
    return noValue;
  }

  return (
    <div>
      <Row>
        <Col md={{ span: 12 }}>
          <div className="location-box">
            <div className="location">
              {props.countryName},{props.sysCountry}
            </div>
            <div className="date">{moment().format("dddd Do MMMM, YYYY")}</div>
          </div>

          <div className="weather-box">
            <div className="temp">{props.tempValue}°c</div>
            <div className="weather">{props.tempText}</div>
          </div>
          <div>
            <Typography id="discrete-slider">Temperature</Typography>
            <RangeSlider
              value={props.tempValue}
              onChange={(changeEvent) => valuetext(changeEvent.target.value)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WeatherForecastPage;
