// // import { Banner1 } from "@/app/templates/Template1";
// // // import { ImageResponse } from "@vercel/og";
// // import axios from "axios";
// // import satori from "satori";

// // // const satoshiRegular = fetch("/assets/fonts/satoshi/Satoshi-Regular.otf").then(
// // //   (res) => res.arrayBuffer()
// // // );

// // // const satoshiMedium = fetch("/assets/fonts/satoshi/Satoshi-Medium.otf").then(
// // //   (res) => res.arrayBuffer()
// // // );

// // // const satoshiBold = fetch("/assets/fonts/satoshi/Satoshi-Bold.otf").then(
// // //   (res) => res.arrayBuffer()
// // // );

// // export default async function handler(req, res) {
// //   const { name, repo } = req.query;

// //   const results = await axios.get(
// //     `https://api.github.com/repos/${name}/${repo}`
// //   );

// //   const generatedSvg = await satori(
// //     <Banner1
// //       repo={repo}
// //       // repo={"mocker"}
// //       description={results.data.description}
// //       forks={results.data.forks}
// //       issues={results.data.open_issues}
// //       stars={results.data.stargazers_count}
// //     />,
// //     {
// //       width: 1200,
// //       height: 460,
// //       fonts: [
// //         {
// //           name: "Satoshi",
// //           // data: await satoshiRegular,
// //           url: "/assets/fonts/satoshi/Satoshi-Regular.otf",
// //           weight: 400,
// //           style: "normal",
// //         },
// //         {
// //           name: "Satoshi",
// //           // data: await satoshiMedium,
// //           url: "/assets/fonts/satoshi/Satoshi-Medium.otf",
// //           weight: 500,
// //           style: "medium",
// //         },
// //         {
// //           name: "Satoshi",
// //           // data: await satoshiBold,
// //           url: "/assets/fonts/satoshi/Satoshi-Bold.otf",
// //           weight: 700,
// //           style: "normal",
// //         },
// //       ],
// //     }
// //   );

// //   console.log(generatedSvg);

// //   res.set("Content-Type", "image/svg+xml");
// //   res.status(200).send(generatedSvg);

// //   try {
// //     // Process the parameters and perform actions
// //     // For example, you can query a database or perform any server-side operation
// //     // Send back a JSON response
// //     // res.status(200).json({
// //     //   message: results.data,
// //     // });
// //   } catch (error) {
// //     // Handle errors and send an appropriate error response
// //     res.status(500).json({ error: "Something went wrong" });
// //   }
// // }

// import { Banner1 } from "@/app/templates/Template1";
// import { ImageResponse } from "@vercel/og";
// // import fetch from "node-fetch";
// // import axios from "axios";

// export const config = {
//   runtime: "edge",
// };

// export default async function handler(request) {
//   const { searchParams } = request.nextUrl;
//   const name = searchParams.get("name");
//   const repo = searchParams.get("repo");

//   // if (!name && !repo) {
//   //   return new ImageResponse(<p style={{ color: "violet" }}>Error !</p>, {
//   //     width: 1200,
//   //     height: 640,
//   //   });
//   // }

//   // console.log(name);

//   let results = await fetch(`https://api.github.com/repos/${name}/${repo}`);
//   results = results.json();

//   console.log(results);

//   const generatedSvg = new satori(
//     (
//       <Banner1
//         repo={repo}
//         description={results?.data?.description}
//         forks={results?.data?.forks}
//         issues={results?.data?.open_issues}
//         stars={results?.data?.stargazers_count}
//       />
//     ),
//     {
//       width: 1200,
//       height: 640,
//       // fonts: [
//       //   {
//       //     name: "Satoshi",
//       //     // data: await satoshiRegular,
//       //     url: "/assets/fonts/satoshi/Satoshi-Regular.otf",
//       //     weight: 400,
//       //     style: "normal",
//       //   },
//       //   {
//       //     name: "Satoshi",
//       //     // data: await satoshiMedium,
//       //     url: "/assets/fonts/satoshi/Satoshi-Medium.otf",
//       //     weight: 500,
//       //     style: "medium",
//       //   },
//       //   {
//       //     name: "Satoshi",
//       //     // data: await satoshiBold,
//       //     url: "/assets/fonts/satoshi/Satoshi-Bold.otf",
//       //     weight: 700,
//       //     style: "normal",
//       //   },
//       // ],
//     }
//   );

//   res.status(200).send(`${generatedSvg}`);

//   // const satoshiRegular = fetch(
//   //   "/assets/fonts/satoshi/Satoshi-Regular.otf"
//   // ).then((res) => res.arrayBuffer());

//   // const satoshiMedium = fetch("/assets/fonts/satoshi/Satoshi-Medium.otf").then(
//   //   (res) => res.arrayBuffer()
//   // );

//   // const satoshiBold = fetch("/assets/fonts/satoshi/Satoshi-Bold.otf").then(
//   //   (res) => res.arrayBuffer()
//   // );

//   // return new ImageResponse(
//   //   (
//   //     <Banner1
//   //       repo={repo}
//   //       // description={""}
//   //       // forks={10}
//   //       // issues={10}
//   //       // stars={10}
//   //       description={results?.data?.description}
//   //       forks={results?.data?.forks}
//   //       issues={results?.data?.open_issues}
//   //       stars={results?.data?.stargazers_count}
//   //     />
//   //   ),
//   //   {
//   //     width: 1200,
//   //     height: 640,
//   //     // fonts: [
//   //     //   {
//   //     //     name: "Satoshi",
//   //     //     // data: await satoshiRegular,
//   //     //     url: "/assets/fonts/satoshi/Satoshi-Regular.otf",
//   //     //     weight: 400,
//   //     //     style: "normal",
//   //     //   },
//   //     //   {
//   //     //     name: "Satoshi",
//   //     //     // data: await satoshiMedium,
//   //     //     url: "/assets/fonts/satoshi/Satoshi-Medium.otf",
//   //     //     weight: 500,
//   //     //     style: "medium",
//   //     //   },
//   //     //   {
//   //     //     name: "Satoshi",
//   //     //     // data: await satoshiBold,
//   //     //     url: "/assets/fonts/satoshi/Satoshi-Bold.otf",
//   //     //     weight: 700,
//   //     //     style: "normal",
//   //     //   },
//   //     // ],
//   //   }
//   // );
// }
