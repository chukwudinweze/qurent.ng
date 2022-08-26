import React from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import useFetchData from "./useFetchApi";
import { fetchLands } from "../actions/products";
import { useEffect } from "react";
import SingleProperty from "./SingleProperty";
import PageHeader from "./PageHeader";
import "../Styles/propertyCategory.css";

const LandProperty = () => {
  const url =
    "https://qurent-a1b03-default-rtdb.firebaseio.com/property/land.json";
  const { fetchData } = useFetchData(url, fetchLands);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // call current states to update components
  const lands = useSelector((state) => state.products.lands);
  const loading = useSelector((state) => state.uiInteraction.loading);
  const error = useSelector((state) => state.uiInteraction.error);

  if (loading) {
    return <Loading title="featured rooms" />;
  }

  if (error) {
    return <p>Something happened. Please refresh your browser</p>;
  }

  if (!loading && !error && lands.length === 0) {
    return <p>No property listed in this category, Please check out others</p>;
  }
  return (
    <section className="room__self__contain ">
      <PageHeader titleLeft="Lands for sale" />

      <article className="room__list ">
        {lands.map((property) => {
          return <SingleProperty key={property.id} property={property} />;
        })}
      </article>
    </section>
  );
};

export default LandProperty;
