import formateDate from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    views,
    _createAt,
    author: { _id: authId, name },
    title,
    category,
    image,
    _id,
    descripton,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between ">
        <p className="startup_card_date">{formateDate(_createAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between gap-5">
        <div className="flex-1">
          <Link href={`/user/${authId}`}>
            <p className="text-16-medium linecl1">{name}</p>
          </Link>
          <Link
            href={`/startup/${_id}`}
            className="text-26-semibold line-clamp-1"
          >
            {" "}
            {title}
          </Link>
        </div>
        <Link href={`/user/${authId}`}>
          <Image
            src={
              "https://cdn.vectorstock.com/i/preview-1x/88/56/triangular-female-user-avatar-icon-vector-5108856.jpg"
            }
            alt="placeHolder"
            height={48}
            width={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="startup-card_desc">
        <Link href={`/startup/${authId}`}>
          <p>{descripton}</p>
        </Link>
      </div>
      <Link href={`/user/${authId}`}>
        <img
          src={
            "https://i0.wp.com/picjumbo.com/wp-content/uploads/watercolor-backgrounds-images.jpg?w=1024&quality=50"
          }
          alt="StartUPImage"
          className="startup-card_img"
        />
      </Link>
      <div className="flex-between gap-3">
        <Link href={`/?query=${category?.toLowerCase()}`} >
        <p className="text-16-medium"> {category}</p>
        </Link>
        <button className="startup-card_btn mt-5">
          <Link href={`/startup/${_id}`}> Details</Link>
        </button>

      </div>
    </li>
  );
};
export default StartupCard;
