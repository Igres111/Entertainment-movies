import React, { useContext } from "react";
import { GlobalAPI } from "./ContextAPI";
import Searched from "./Searched";

function Bookmark(props) {
  const { movies, search } = useContext(GlobalAPI);
  return (
    <>
      {search.length === 0 ? (
        <div className="pl-4 text-white flex flex-wrap bg-hole">
          <h1 className="  text-xl h-[25px] mt-[26px] mb-6	">
            Bookmarked Movies
          </h1>
          <div className="flex justify-center items-center flex-wrap w-full min-w-[340px]  ">
            {movies.map(
              (el) =>
                el.isBookmarked &&
                el.category === "Movie" && (
                  <div className="flex-grow w-1/2" key={Math.random() * 1000}>
                    <div className="relative ">
                      <img
                        className="rounded-lg w-[164px]"
                        src={el.thumbnail.regular.small}
                      />
                      <button className="w-8 h-8 flex justify-center items-center bg-hole opacity-50 absolute top-0 rounded-full ml-[124px] mt-2">
                        {el.isBookmarked ? (
                          <svg
                            width="12"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                              fill="#FFF"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="12"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                              stroke="#FFF"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-2 opacity-75	">
                      <span>{el.year}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="2"
                        viewBox="0 0 2 2"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1"
                          cy="1"
                          r="1"
                          fill="white"
                        />
                      </svg>

                      <svg
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                          fill="#FFF"
                          opacity=".75"
                        />
                      </svg>

                      <span>{el.category}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="2"
                        viewBox="0 0 2 2"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1"
                          cy="1"
                          r="1"
                          fill="white"
                        />
                      </svg>
                      <span>{el.rating}</span>
                    </div>
                    <h1 className="text-sm mb-4">{el.title}</h1>
                  </div>
                )
            )}
          </div>

          <h1 className="mt-2 mb-6">Bookmarked TV Series</h1>
          <div className="flex justify-center items-center flex-wrap w-full min-w-[340px]  ">
            {movies.map(
              (el) =>
                el.isBookmarked &&
                el.category === "TV Series" && (
                  <div className="flex-grow w-1/2" key={Math.random() * 1000}>
                    <div className="relative ">
                      <img
                        className="rounded-lg w-[164px]"
                        src={el.thumbnail.regular.small}
                      />
                      <button className="w-8 h-8 flex justify-center items-center bg-hole opacity-50 absolute top-0 rounded-full ml-[124px] mt-2">
                        {el.isBookmarked ? (
                          <svg
                            width="12"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                              fill="#FFF"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="12"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                              stroke="#FFF"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-2 opacity-75	">
                      <span>{el.year}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="2"
                        viewBox="0 0 2 2"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1"
                          cy="1"
                          r="1"
                          fill="white"
                        />
                      </svg>

                      <svg
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                          fill="#FFF"
                          opacity=".75"
                        />
                      </svg>

                      <span>{el.category}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2"
                        height="2"
                        viewBox="0 0 2 2"
                        fill="none"
                      >
                        <circle
                          opacity="0.5"
                          cx="1"
                          cy="1"
                          r="1"
                          fill="white"
                        />
                      </svg>
                      <span>{el.rating}</span>
                    </div>
                    <h1 className="text-sm mb-4">{el.title}</h1>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <Searched />
      )}
    </>
  );
}

export default Bookmark;
