import React from "react";
import data from "../public/data.json";

function Content() {
  return (
    <div>
      <h1 className="text-white">Trending</h1>
      <div className="  flex  gap-2 ml-4 overflow-x-hidden ">
        {data.map(
          (el: TDataItem) =>
            el.isTrending && (
              <div className="w-forimage inline-block  ">
                <img
                  className="rounded-lg  h-36	!w-96"
                  src={el.thumbnail.trending?.small}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Content;
// flex justify-around w-screen gap-2 ml-4
