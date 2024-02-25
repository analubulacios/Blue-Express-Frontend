import Form from "@/components/Form";
import Hero from "@/components/Hero";
import URLGrid from "@/components/URLGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Form />
      <URLGrid />
    </main>
  );
}
