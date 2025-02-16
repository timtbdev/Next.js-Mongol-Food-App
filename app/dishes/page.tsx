import DesktopTable from "@/components/ui/table/desktop/desktop-table";
import DesktopTableHead from "@/components/ui/table/desktop/desktop-table-head";
import DesktopTableHeading from "@/components/ui/table/desktop/desktop-table-heading";
import DesktopTableWrapper from "@/components/ui/table/desktop/desktop-table-wrapper";
import { meatDishes } from "@/config/meat-dishes";

export default function DishesPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-2 py-10 sm:px-20 sm:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <DesktopTableHeading
          emoji="🍖"
          title="Mongolian Meat Dishes"
          description="Mongolian food is hearty, bold, and full of surprises!"
        />
        <DesktopTableWrapper>
          <DesktopTableHead />
          <DesktopTable dishes={meatDishes} />
        </DesktopTableWrapper>
      </div>
    </div>
  );
}
