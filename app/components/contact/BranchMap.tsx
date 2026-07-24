interface BranchMapProps {
  branch: {
    city: string;
    mapEmbedUrl: string;
  };
}

export default function BranchMap({ branch }: BranchMapProps) {
  return (
    <section className="h-[450px] w-full border-b border-zinc-900 relative">
      <iframe
        src={branch.mapEmbedUrl}
        className="w-full h-full border-0  focus:outline-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${branch.city} branch location map`}
      ></iframe>
    </section>
  );
}
