import CardList from "@/components/CardList";
import { Appareachart } from "@/components/ui/Appareachart";
import AppBarchart from "@/components/ui/AppBarchart";
import { Apppiechart } from "@/components/ui/Apppiechart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 round-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarchart />
      </div>
      <div className="bg-primary-foreground p-4 round-lg">test </div>
      <div className="bg-primary-foreground p-4 round-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 round-lg">
        <Apppiechart />
      </div>
      <div className="bg-primary-foreground p-4 round-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <Appareachart />
      </div>
      <div className="bg-primary-foreground p-4 round-lg">
        {" "}
        <CardList title="Popular Content" />{" "}
      </div>
    </div>
  );
}
