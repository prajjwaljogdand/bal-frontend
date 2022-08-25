import { React } from "react";
import VehicleTable from "../component/VehicleTable";
import { useQuery, gql } from "@apollo/client";
import Header from "../component/Header";
import VehicleBanner from "../component/VehicleBanner";
import { useParams } from "react-router-dom";
import WeightChart from "../component/WeightChart";
import { Paper, Stack, Typography } from "@mui/material";

function Vehicle(props) {
  let { id } = useParams();
  const vehicleId = id.slice(3);

  const sew = `{
    vehicle(id: "${vehicleId}") {
      id
      numberOfTrips
    }
    entries(where: {truckId : "${vehicleId}" }, orderBy: timeOut, orderDirection: desc,) {
      id
      txHash
      block
      truckId
      timeOut
      weight
    }
  }`;

  const TRIPS_QUERY = gql(sew);

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
            <Stack direction="row" spacing={2}>
              <VehicleTable data={data.entries} />
              <WeightChart data={data.entries} />
            </Stack>
          </>
        )}
      </div>
    </div>
  );
}

export default Vehicle;
