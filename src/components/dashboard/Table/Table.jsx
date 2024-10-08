import React from "react"
import PropTypes from "prop-types"
import Row from "./Row"
import clipboard from "../../../assets/clipboard.svg"

const Table = ({ empty }) => {
  //Grab table data from serverside
  return (
    <div className="flex-1 flex relative h-full pb-4">
      <div
        className={
          empty
            ? "flex-1 flex flex-col w-full"
            : "flex-1 flex flex-col overflow-y-auto w-full"
        }
      >
        <div className="px-4">
          <div
            className={
              empty
                ? "whitespace-no-wrap md:whitespace-normal overflow-x-scroll md:overflow-auto w-full md:grid md:grid-cols-4 pb-4 text-table-header"
                : "w-full md:grid md:grid-cols-4 pb-4 text-table-header"
            }
          >
            <h1 className="px-4 w-1/2 md:w-full inline-block">IP</h1>
            <h1 className="px-4 w-1/2 md:w-full inline-block">Port</h1>
            <h1 className="px-4 w-1/2 md:w-full inline-block">Username</h1>
            <h1 className="px-4 w-1/2 md:w-full inline-block">Password</h1>
          </div>
        </div>
        <div
          className={
            empty
              ? "flex-1 w-full p-4 rounded-md border border-table-border flex items-center justify-center"
              : "md:flex-1 flex md:h-64 w-full px-4 pb-4 md:p-4 rounded-md md:border md:border-table-border overflow-y-auto"
          }
        >
          {empty ? (
            <div className="flex flex-col justify-center items-center text-center">
              <img src={clipboard} className="" alt="Empty list" />
              <h3 className="text-xl -mt-10 text-empty-title">
                No available proxies
              </h3>
              <p className="text-sm text-paragraph">
                Purchase a plan to get started
              </p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col">
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
              <Row
                first="158.100.29.123"
                second="3923"
                third="cuddly"
                fourth="password"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Table.propTypes = {
  empty: PropTypes.bool,
}

export default Table
