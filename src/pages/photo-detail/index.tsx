import { photoApis } from "@/apis/photos";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Loading } from "../loading/index";
import ErrorPage from "../error/index";

const PhotoDetail = () => {
  const { id = "" } = useParams();
  console.log(id);
  const { isPending, data } = useQuery({
    queryKey: ["photo", id],
    queryFn: () => photoApis.getPhoto({ photoId: id }),
  });
  if (isPending) return <Loading />;
  if (data?.errors || !data?.response) return <ErrorPage />;
  const results = data.response;
  // console.log(results);

  return (
    <div className="flex justify-center">
      <div className="w-[75%] flex flex-col my-7 ">
        <div className="phone flex items-baseline px-7">
          <p className="title text-xl font-bold mr-2">Author’s name:</p>
          <p className="data font-mono">{results.user.name}</p>
        </div>
        <div className="phone flex items-baseline px-7">
          <p className="title text-xl font-bold mr-2"> Photo title: </p>
          <p className="data font-mono">
            {results.topics[0] ? results.topics[0].title : "No title provided"}
          </p>
        </div>
        <div className="phone flex items-baseline px-7">
          <p className="title text-xl font-bold mr-2"> Photo description: </p>
          <p
            className="data font-mono text-pretty"
            style={{ maxWidth: "897px" }}
          >
            {results.description ?? "No description for this image"}
          </p>
        </div>
        <img className=" mt-7 rounded-md" src={results.urls.full} />
      </div>
    </div>
  );
};

export default PhotoDetail;
