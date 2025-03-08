interface MealsSlugPageProps {
  params: {
    slug: string;
  };
}

export default function MealsSlugPage({ params }: MealsSlugPageProps) {
  return <h1>Meals Page {params.slug}</h1>;
}
