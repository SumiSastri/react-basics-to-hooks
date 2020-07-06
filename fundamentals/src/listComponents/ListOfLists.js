import React from "react";

import MapNames from "../iterations/MapNames";
import MapNumbers from "../iterations/MapNumbers";
import MockData from "../Mocks/ MockData";
import MapGitHubUsers from "../iterations/MapGitHubUsers";
import FindGitHubUser from "../iterations/FindGitHubUser";
import FilterGitHubUsers from "../iterations/FilterGitHubUsers";
import ForEachGitHubUser from "../iterations/ForEachGitHubUser";

function ListOfLists() {
  return (
    <div>
      <h3>Iterations - Map & Filter</h3>
      <MapNames />
      <MapNumbers />
      <MockData />
      <hr></hr>
      <MapGitHubUsers />
      <FindGitHubUser />
      <FilterGitHubUsers />
      <ForEachGitHubUser />
    </div>
  );
}

export default ListOfLists;
