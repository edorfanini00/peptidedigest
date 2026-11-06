import { NewsroomArticle, newsroomMetadata } from "@/components/NewsroomArticle";
import { PeptideCalculator } from "@/components/PeptideCalculator";
import { IQONICBanner } from "@/components/IQONICBanner";
import { story } from "./story";

export const metadata = newsroomMetadata(story);
export default function Page() {
  return <NewsroomArticle story={story} calculatorFirst><PeptideCalculator /><IQONICBanner /></NewsroomArticle>;
}
