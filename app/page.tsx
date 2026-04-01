import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">GadgetBD</h1>
      <p className="text-gray-400 bg-shop-light-pink">Your #1 Gadget Store in Bangladesh Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab totam alias omnis numquam libero quo quis praesentium nostrum sunt consectetur dolore optio deleniti rem, architecto tenetur suscipit distinctio similique.</p>
      <Button size="lg" variant="destructive">Buy now</Button>
    </main>
  );
}