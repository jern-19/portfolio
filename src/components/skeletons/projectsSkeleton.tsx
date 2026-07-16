export default function ProjectsSkeleton() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-12 py-10 animate-pulse">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-8 w-28 rounded-md bg-white/10" />

        <div className="flex gap-6">
          <div className="h-4 w-16 rounded bg-white/10" />
          <div className="h-4 w-16 rounded bg-white/10" />
          <div className="h-4 w-16 rounded bg-white/10" />
        </div>
      </div>


      {/* Page title */}
      <div className="mt-24">
        <div className="h-16 w-72 rounded-lg bg-white/10" />

        <div className="mt-5 h-5 w-96 max-w-full rounded bg-white/10" />
      </div>


      {/* Filter buttons */}
      <div className="mt-12 flex gap-3">
        <div className="h-10 w-24 rounded-full bg-white/10" />
        <div className="h-10 w-28 rounded-full bg-white/10" />
        <div className="h-10 w-20 rounded-full bg-white/10" />
      </div>


      {/* Projects grid */}
      <div className="
        mt-16
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">
        {[1,2,3,4,5,6].map((item) => (
          <ProjectCardSkeleton key={item} />
        ))}
      </div>

    </div>
  );
}


function ProjectCardSkeleton() {
  return (
    <div className="group">

      {/* Image */}
      <div className="
        aspect-[4/3]
        rounded-2xl
        bg-white/10
      "/>


      {/* Text */}
      <div className="mt-5">

        <div className="
          h-6
          w-2/3
          rounded
          bg-white/10
        "/>

        <div className="
          mt-3
          h-4
          w-full
          rounded
          bg-white/10
        "/>

        <div className="
          mt-2
          h-4
          w-4/5
          rounded
          bg-white/10
        "/>

      </div>

    </div>
  );
}