import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { Appareachart } from "@/components/Appareachart";
import AppBarchart from "@/components/AppBarchart";
import { Apppiechart } from "@/components/Apppiechart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 round-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 round-lg">
        <AppBarchart />
      </div>
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
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
