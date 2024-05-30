import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import ThemeContextDefaultProvider from "@/context/ThemeContextProvider";


export default function Home() {
  return (
    <ThemeContextDefaultProvider>
      <main>
      <Navbar/>
      <MainPage/>
      </main>
    </ThemeContextDefaultProvider>
    
  );
}
