import { notFound } from "next/navigation";

const FeatureDoc = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slugParams = await params;
  const { slug } = slugParams;

  if (!slug) {
    return (
      <div>
        <h3>Feature Docs</h3>
        <p>Docs for all features</p>
      </div>
    );
  }

  if (slug.length === 1) {
    return (
      <div>
        <h3>Feature Docs</h3>
        <p>Feature Name: {slug[0]}</p>
      </div>
    );
  }

  if (slug.length === 2) {
    return (
      <div>
        <h3>Feature Docs</h3>
        <p>Feature Name: {slug[0]}</p>
        <p>Topic Name: {slug[1]}</p>
      </div>
    );
  }

  if (slug.length > 2) {
    return notFound();
  }
};

export default FeatureDoc;
