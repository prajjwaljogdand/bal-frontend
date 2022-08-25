import { React, useState, useEffect } from "react";
import VehicleTable from "../component/VehicleTable";
import data from "../sampleData.json";
import { useQuery, gql } from "@apollo/client";
import Header from "../component/Header";
import VehicleBanner from "../component/VehicleBanner";
import { useParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

function Vehicle(props) {

  let { id } = useParams();
  const vehicleId = id.slice(3);

  const sew = `{
    vehicle(id: "${vehicleId}") {
      id
      numberOfTrips
    }
    entries(where: { truckId : "${vehicleId}" }) {
      id
      txHash
      block
      truckId
      timeOut
      weight
    }
  }`

  const TRIPS_QUERY = gql(sew)

  const { data, loading, error } = useQuery(TRIPS_QUERY, {
    pollInterval: 500,
  });

  console.log(data);
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        {loading ? (
          "loading"
        ) : (
          <>
            <VehicleBanner countData={data.vehicle} />
            <VehicleTable data={data.entries} />
          </>
        )}
      </div>
    </div>
  );
}

export default Vehicle;
