import { NewsroomArticle, newsroomMetadata } from "@/components/NewsroomArticle";
import { story } from "./story";

export const metadata = newsroomMetadata(story);
export default function Page() { return <NewsroomArticle story={story} />; }
