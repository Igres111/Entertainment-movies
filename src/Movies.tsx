import { useContext, useEffect } from "react";
import { GlobalAPI } from "./ContextAPI";
import Searched from "./Searched";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

function Movies() {
  const { movies, handleClickMark, search } = useContext(GlobalAPI);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("pass")) {
      navigate("/login");
    }
  }, []);

  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return (
    <>
      {search.length === 0 ? (
        <div className="pl-4 text-white flex flex-wrap bg-hole lg:pl-40">
          <h1 className="  text-xl h-[25px] mt-[26px] mb-6 lg:text-[32px]	">
            Movies
          </h1>
          <div className="flex items-center flex-wrap min-w-[340px] gap-5 ">
            {movies.map(
              (el) =>
                el.category === "Movie" && (
                  <div
                    className="flex-grow w-[46%] lg:max-w-[23%] "
                    key={Math.random() * 1000}
                  >
                    <div className="relative ">
                      <img
                        className="rounded-lg w-[164px] lg:w-auto"
                        src={
                          isExtraLargeDevice
                            ? el.thumbnail.regular.large
                            : el.thumbnail.regular.small
                        }
                      />
                      <button
                        onClick={() => handleClickMark(el)}
                        className="w-8 h-8 flex justify-center items-center bg-hole/50 opacity-50 absolute top-0 rounded-full ml-[124px] lg:ml-auto lg:right-6 lg:mt-4 mt-2 hover:bg-white/50  hover:text-black"
                      >
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
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-xs mt-2 opacity-75 lg:text-[13px]	">
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
                          d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
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
                    <h1 className="text-sm mb-4 lg:text-lg	">{el.title}</h1>
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

export default Movies;
