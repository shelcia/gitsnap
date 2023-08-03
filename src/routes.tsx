/* eslint-disable react-refresh/only-export-components */
import { ReactNode, Suspense, ComponentType } from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import BannerMaker from "./pages/BannerMaker";

type ComponentProps = {
  children: ReactNode;
};

const Loadable =
  (Component: ComponentType<ComponentProps>) => (props: ComponentProps) =>
    (
      <Suspense
        fallback={
          <div>
            <p>Loading</p>
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );

const LoadableHomePage = Loadable(HomePage);
const LoadableBannerMaker = Loadable(BannerMaker);

const routes = [
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <LoadableHomePage children={undefined} />,
      },
      {
        path: "/:name/:repo",
        element: <LoadableBannerMaker children={undefined} />,
      },
    ],
  },
];

export default routes;
