import React, { Component } from "react";
import { colors } from "../Const/Color";

export default function ShowColorBox() {
  return (
    <div className="d-flex">
      <div className="colorRoundBox  shadow-sm text-center">
        <div>
          <svg
            className="bd-placeholder-img  rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <rect width="100%" height="100%" fill={colors.coldColor} />
          </svg>
        </div>
        <div>
          <div className="warmSize">Cold</div>
        </div>
      </div>
      <div className="warmBoxAround warmRoundBox  shadow-sm text-center">
        <div>
          <svg
            className="bd-placeholder-img  rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <rect width="100%" height="100%" fill={colors.warmColor} />
          </svg>
        </div>
        <div>
          <div className="warmSize">Warm</div>
        </div>
      </div>
      <div className="colorRoundBox  shadow-sm text-center">
        <div>
          <svg
            className="bd-placeholder-img  rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <rect width="100%" height="100%" fill={colors.hotColor} />
          </svg>
        </div>
        <div>
          <div className="warmSize">Hot</div>
        </div>
      </div>
    </div>
  );
}
