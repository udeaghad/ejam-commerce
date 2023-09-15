import NavBar from "@/components/NavBar/NavBar"
import Logo from "@/components/Logo/Logo";
import Alert from "@/components/Alert/Alert";
import Stages from "@/components/Stages/Stages";

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

      <div className="mt-8">
        <Stages />
      </div>
    </main>
  )
}
