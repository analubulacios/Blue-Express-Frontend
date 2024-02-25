import CardURLSkeleton from "@/components/CardURLSkeleton";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import URLGrid from "@/components/URLGrid";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <Hero />
      <Form />
      <Suspense fallback={<CardURLSkeleton />}>
        <URLGrid />
      </Suspense>
    </>
  );
}