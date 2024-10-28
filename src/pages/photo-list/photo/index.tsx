import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";
import { Photo } from "@/types/photo";
import { useNavigate } from "react-router-dom";

const GalleryPhoto = ({
  id,
  urls,
  user,
  // description,
  alt_description,
}: Photo) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className="pt-7 max-h-fit">
      <div className="cursor-pointer" onClick={handleClick}>
        {/* <div className="flex flex-col justify-center">
          <img key={id} src={urls.small} alt={alt_description} />
        </div>
        <div className="mt-2.5">
          <CardTitle>{alt_description}</CardTitle>
          <div className="flex items-center gap-x-2.5 mt-2.5">
            <Avatar>
              <AvatarImage src={user.profile_image.medium} />
              <AvatarFallback> {user.name}</AvatarFallback>
            </Avatar>
            <CardTitle>{user.name}</CardTitle>
          </div>

          <div className="mt-2.5 text-balance text-ellipsis overflow-hidden">
            {description}
          </div>
        </div> */}
        <div className="card dark:border-0">
          <img
            key={id}
            src={urls.thumb}
            className="card-img"
            alt={alt_description}
          />
          <div className="card-img-overlay flex items-end p-2">
            <div className="max-h-fit w-full bg-black bg-opacity-50 p-1.5 rounded-md">
              {/* <h5 className="card-title">{alt_description}</h5> */}
              <div className="flex items-center gap-x-2.5 text-white">
                <Avatar>
                  <AvatarImage src={user.profile_image.medium} />
                  <AvatarFallback> {user.name}</AvatarFallback>
                </Avatar>
                <CardTitle>{user.name}</CardTitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhoto;
