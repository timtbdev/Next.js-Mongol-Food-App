export type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-xl bg-black/20 p-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20">
          {icon}
        </div>

        <h3 className="text-muted-light mb-2 mt-4 text-center text-lg font-semibold">
          {title}
        </h3>
        <p className="text-muted-dark text-center text-sm">{description}</p>
      </div>
    </div>
  );
};
