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
    <div className="card">
      <h3>Rendering lists with map & filter methods</h3>
      <div className="card">
        <MapNames />
        <MapNumbers />
        <MockData />
      </div>
      <div>
        <MapGitHubUsers />
        <FindGitHubUser />
        <FilterGitHubUsers />
        <ForEachGitHubUser />
      </div>
    </div>
  );
}

export default ListOfLists;
