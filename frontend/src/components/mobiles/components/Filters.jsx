import React, { useState } from "react";
import "../../../styles/filters.css";
import {
  brandsList,
  memoryList,
  osList,
  priceRangeList,
  processorsList,
  typesList,
} from "../../../utils/mobile-data";

const Filters = ({
  filters,
  filtersInputHandler,
  applyFiltersHandler,
  removeFiltersHandler,
  isFiltered,
}) => {
  return (
    <div className="filters-wrapper">
      <h2>Filters</h2>

      <div className="filters-dropdown">
        <div className="mobile-filters filter-brand">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={filters?.brands}
            onChange={(event) => filtersInputHandler(event, "brands")}
          >
            <option value="all">-- All Brands --</option>
            {brandsList?.map((eachBrand) => (
              <option value={eachBrand}>{eachBrand}</option>
            ))}
          </select>
        </div>

        <div className="mobile-filters filter-price">
          <label htmlFor="priceRange">Select Price Range:</label>
          <select
            id="priceRange"
            value={filters?.price}
            onChange={(event) => filtersInputHandler(event, "price")}
          >
            <option value="all">-- All Price Ranges --</option>
            {priceRangeList?.map((eachPriceRange) => (
              <option value={eachPriceRange}>{eachPriceRange}</option>
            ))}
          </select>
        </div>

        <div className="mobile-filters filter-processor">
          <label htmlFor="processor">Select Processor Series:</label>
          <select
            id="processor"
            value={filters?.processors}
            onChange={(event) => filtersInputHandler(event, "processors")}
          >
            <option value="all">-- All Processors --</option>
            {processorsList?.map((eachProcessor) => (
              <option value={eachProcessor}>{eachProcessor}</option>
            ))}
          </select>
        </div>

        <div className="mobile-filters filter-memory">
          <label htmlFor="memory">Select Memory:</label>
          <select
            id="memory"
            value={filters?.memory}
            onChange={(event) => filtersInputHandler(event, "memory")}
          >
            <option value="all">-- All Memory Sizes --</option>
            {memoryList?.map((eachMemory) => (
              <option value={eachMemory}>{eachMemory}</option>
            ))}
          </select>
        </div>

        <div className="mobile-filters filter-os">
          <label htmlFor="operatingSystem">Select Operating System:</label>
          <select
            id="operatingSystem"
            value={filters?.os}
            onChange={(event) => filtersInputHandler(event, "os")}
          >
            <option value="all">-- All Operating Systems --</option>
            {osList?.map((eachOS) => (
              <option value={eachOS}>{eachOS}</option>
            ))}
          </select>
        </div>

        <div className="mobile-filters filter-mobile-type">
          <label htmlFor="mobileType">Select Mobile Type:</label>
          <select
            id="mobileType"
            value={filters?.type}
            onChange={(event) => filtersInputHandler(event, "type")}
          >
            <option value="">-- All Mobile Types --</option>
            {typesList?.map((eachType) => (
              <option value={eachType}>{eachType}</option>
            ))}
          </select>
        </div>

        <button className="apply-button" onClick={applyFiltersHandler}>
          Apply Filters
        </button>
        {isFiltered && (
          <button className="apply-button" onClick={removeFiltersHandler}>
            Remove Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default Filters;
