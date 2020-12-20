import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../logo.svg";
import Footer from "../Component/Footer";
import Search from "../Component/Search";
import ShowColorBox from "../Component/ShowColorBox";
import WeatherForecastPage from "../Component/WeatherForecastPage";
import { GETWEATHERAPI } from "../Network/GetServer";

import { colors } from "../Const/Color";
export default function Home() {
  const [forecastCountryName, setForecastCountryName] = useState("");
  const [SysCountry, setSysCountry] = useState("");
  const [weatherValue, SetWeatherValue] = useState(0);
  const [windFlow, setWindFlow] = useState(0);
  const [himidityFlow, setHumidityFlow] = useState(0);
  const [bgColor, setBgColor] = useState(colors.userColor);
  const windowHeight = window.innerHeight;
  const [loading, setLoading] = useState(false);
  const [weatherText, setWeatherText] = useState("");

  useEffect(() => {
    getWeatherForcast();
    setLoading(true);
  }, []);

  const getWeatherForcast = () => {
    GETWEATHERAPI("Nepal").then((response) => {
      try {
        setForecastCountryName(response.name);
        setSysCountry(response.sys.country);
        setHumidityFlow(response.main.humidity);
        setWindFlow(response.wind.speed);
        calculateTemp(response.main.temp);
      } catch (e) {
        console.log("server error");
      }
    });
  };

  function calculateTemp(tempValue: number) {
    const degreeToCelsius = tempValue - 273.15;
    const roundOff = Math.round(degreeToCelsius);
    SetWeatherValue(roundOff);
    if (roundOff <= 18) {
      setBgColor(colors.coldColor);
      setWeatherText("Cold");
    } else if (roundOff <= 24) {
      setBgColor(colors.warmColor);
      setWeatherText("Warm");
    } else {
      setBgColor(colors.hotColor);
      setWeatherText("Hot");
    }
  }

  const todyaWeatherForecast = (tempNo: number) => {};

  const bgColorBox = (tempNo: number) => {
    SetWeatherValue(tempNo);
    if (tempNo <= 18) {
      setBgColor(colors.coldColor);
      setWeatherText("Cold");
    } else if (tempNo <= 24) {
      setBgColor(colors.warmColor);
      setWeatherText("Warm");
    } else {
      setBgColor(colors.hotColor);
      setWeatherText("Hot");
    }
  };

  const searchingBox = (searchingResult: any) => {
    setForecastCountryName(searchingResult.name);
    setSysCountry(searchingResult.sys.country);
    SetWeatherValue(searchingResult.main.temp);
    setHumidityFlow(searchingResult.main.humidity);
    setWindFlow(searchingResult.wind.speed);
  };

  return (
    <div
      className="p-2"
      style={{ backgroundColor: bgColor, height: windowHeight }}
    >
      <Container>
        <Row>
          <Col md="3" className="d-none d-sm-block">
            <div className="mt-3 text-center">
              <h1>
                <strong className="text-white">Weather App </strong>
              </h1>
            </div>
          </Col>
          <Col md="6">
            <div className="text-center">
              <Search
                searchingCountry={(searchRes: any) => searchingBox(searchRes)}
              />
            </div>
          </Col>
          <Col md="3" className="d-none d-sm-block">
            <ShowColorBox />
          </Col>
        </Row>

        {loading && (
          <>
            {/* weather forecasting page */}
            <WeatherForecastPage
              countryName={forecastCountryName}
              tempValue={weatherValue}
              tempText={weatherText}
              sysCountry={SysCountry}
              bgColorFunc={(colorCom: number) => bgColorBox(colorCom)}
            />
            {/* close eather forecasting page */}
            {/* footer */}
            <Footer himidityFlow={himidityFlow} windFlow={windFlow} />
            {/* close footer */}
          </>
        )}
      </Container>
    </div>
  );
}
