import NavBar from "@/components/NavBar/NavBar"
import Logo from "@/components/Logo/Logo";
import Alert from "@/components/Alert/Alert";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
      </div>

      <div>
        <Logo />
      </div>

      <div className="mt-8">
        <Alert />
      </div>
    </main>
  )
}
