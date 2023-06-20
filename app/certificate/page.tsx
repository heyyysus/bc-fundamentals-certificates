import { Certificate } from "./certificate"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Certificate name="John Doe" certificateId="TEST123ABC" dateIssued="June 5, 2023" />
    </main>
  )
}
