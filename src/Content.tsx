import { useContext, useEffect } from "react";
import Reccs from "./Reccs";
import { GlobalAPI } from "./ContextAPI";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

function Content() {
  const { movies, setMovies } = useContext(GlobalAPI);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("email") || !localStorage.getItem("pass")) {
      navigate("/login");
    }
  }, []);

  function handleClick(index: number) {
    setMovies((prev) =>
      prev.map((el, ind) => {
        return ind === index
          ? { ...el, isBookmarked: !el.isBookmarked }
          : { ...el };
      })
    );
  }
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return (
    <div className="bg-hole">
      <h1 className="text-white ml-4 pt-6 text-[20px] ">Trending</h1>
      <div className="flex gap-2 ml-4 overflow-hidden	">
        {movies.map(
          (el: TDataItem, index: number) =>
            el.isTrending && (
              <div
                key={Math.random() * 1000}
                className="min-w-[240px] text-white lg:min-w-[470px]  lg:text-base "
              >
                <div className="relative">
                  <img
                    className="rounded-lg"
                    src={
                      isExtraLargeDevice
                        ? el.thumbnail.trending?.large
                        : el.thumbnail.trending?.small
                    }
                  />
                  <div className=" absolute flex items-center top-0 mt-[86px] ml-4 gap-1 text-[12px] lg:mt-[154px] lg:ml-6">
                    <span>{el.year}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <circle
                        opacity="0.5"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        fill="white"
                      />
                    </svg>
                    {el.category === "Movie" ? (
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
                    ) : (
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
                    )}

                    <span>{el.category}</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <circle
                        opacity="0.5"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        fill="white"
                      />
                    </svg>
                    <span>{el.rating}</span>
                  </div>

                  <button
                    onClick={() => handleClick(index)}
                    className="flex w-8 h-8 absolute top-0 ml-[200px] lg:ml-[414px] justify-center items-center rounded-full bg-hole/50  mt-2 hover:bg-white/50  hover:text-black  "
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
                  <h1 className="text-[15px] absolute bottom-0 ml-4 mb-4 lg:text-2xl lg:mb-6 lg:ml-6	">
                    {el.title}
                  </h1>
                </div>
              </div>
            )
        )}
      </div>
      <Reccs handleClick={handleClick} />
    </div>
  );
}

export default Content;
