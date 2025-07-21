import Brands from "@/components/Brand";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] items-center justify-center">
      <h1 className="text-5xl font-bold">Hello World</h1>
      <Brands />
    </div>
  );
}
