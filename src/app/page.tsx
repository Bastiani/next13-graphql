import RootLayout from "./layout";
import HomeComponent from "./HomeComponent";
import Providers from "./Providers";

export default function Home() {
  return (
    <Providers>
      <RootLayout>
        <HomeComponent />
      </RootLayout>
    </Providers>
  );
}
