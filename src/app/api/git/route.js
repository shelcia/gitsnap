import axios from "axios";
import { ImageResponse } from "next/og";
import { Banner1 } from "@/app/templates/Template1";

const fetchRepoDetails = async (name, repo) => {
  try {
    const res = await axios.get(`https://api.github.com/repos/${name}/${repo}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching repo details", error);
    return {};
  }
};

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    if (!searchParams.has("name") || !searchParams.has("repo")) {
      return new ImageResponse("Invalid request", { status: 400 });
    }

    const name = await searchParams.get("name");
    const repo = await searchParams.get("repo");

    console.log(name, repo);

    // Fetch repo details asynchronously
    const detailsPromise = fetchRepoDetails(name, repo);

    const width = 1200;
    const height = 600;

    // Wait for repo details to be fetched
    const details = await detailsPromise;

    // Generate ImageResponse using the fetched data
    const newImg = new ImageResponse(
      (
        <Banner1
          repo={repo}
          description={details.description}
          forks={details.forks}
          issues={details.open_issues}
          stars={details.stargazers_count}
        />
      ),
      {
        width,
        height,
      }
    );

    return newImg;
  } catch (error) {
    console.error("Error generating OG image", error);
    return new ImageResponse("Internal Server Error", { status: 500 });
  }
}
