import { cn } from "@/lib/utils";

const DesktopTableHead = () => {
  const headingBaseClass = "text-lg font-bold tracking-tight text-white p-4";
  return (
    <thead className="bg-zinc-950/30">
      <tr>
        <th scope="col" className={cn(headingBaseClass, "text-center")}>
          Rank
        </th>
        <th scope="col" className={cn(headingBaseClass, "text-left")}>
          Dish
        </th>
        <th scope="col" className={cn(headingBaseClass, "text-center")}>
          Taste
        </th>
        <th scope="col" className={cn(headingBaseClass, "text-center")}>
          Healthy
        </th>
        <th scope="col" className={cn(headingBaseClass, "text-center")}>
          Calories
        </th>
        <th scope="col" className={cn(headingBaseClass, "text-center")}>
          Burn
        </th>
      </tr>
    </thead>
  );
};

export default DesktopTableHead;
