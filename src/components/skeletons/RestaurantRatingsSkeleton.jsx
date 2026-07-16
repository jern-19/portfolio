export default function RestaurantRatingsSkeleton() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-12 py-10 animate-pulse">

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <div className="h-8 w-28 rounded bg-white/10" />

        <div className="flex gap-5">
          <div className="h-4 w-16 rounded bg-white/10" />
          <div className="h-4 w-16 rounded bg-white/10" />
        </div>
      </div>


      {/* Hero */}
      <section className="mt-24">

        {/* Category */}
        <div className="h-4 w-32 rounded bg-white/10" />


        {/* Title */}
        <div className="
          mt-6
          h-20
          w-3/4
          rounded-xl
          bg-white/10
        "/>


        {/* Description */}
        <div className="mt-8 space-y-3">
          <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
          <div className="h-5 w-4/5 max-w-xl rounded bg-white/10" />
        </div>


        {/* Main project image */}
        <div className="mt-16 aspect-video w-full rounded-3xl bg-white/10"/>

      </section>



      <section className="
        mt-20
        grid
        grid-cols-1
        md:grid-cols-3
        gap-10
        ">

        <InfoBlock title="Role" />
        <InfoBlock title="Technology" />
        <InfoBlock title="Year" />

      </section>



      {/* Content sections */}
      <section className="mt-24 space-y-16">

        {[1,2].map((item) => (
          <div key={item}>

            <div className="
              h-10
              w-64
              rounded
              bg-white/10
            "/>


            <div className="
              mt-8
              aspect-[16/9]
              rounded-3xl
              bg-white/10
            "/>

          </div>
        ))}

      </section>



      {/* Gallery */}
      <section className="mt-24">

        <div className="
          h-10
          w-48
          rounded
          bg-white/10
        "/>


        <div className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {[1,2,3,4].map((item)=>(
            <div
              key={item}
              className="
                aspect-square
                rounded-2xl
                bg-white/10
              "
            />
          ))}

        </div>

      </section>

    </div>
  );
}



function InfoBlock({title}) {
  return (
    <div>
      <div className="h-4 w-20 rounded bg-white/10" />

      <div className="
        mt-4
        h-6
        w-40
        rounded
        bg-white/10
      "/>
    </div>
  );
}