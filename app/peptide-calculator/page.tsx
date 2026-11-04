import { NewsroomArticle, newsroomMetadata } from "@/components/NewsroomArticle";
import { PeptideCalculator } from "@/components/PeptideCalculator";
import { story } from "./story";

export const metadata = newsroomMetadata(story);
export default function Page() {
  return <NewsroomArticle story={story}><PeptideCalculator /></NewsroomArticle>;
}
