export default function ClassificationOfRecyclingSkeleton() {
  return (
    <div className="min-h-screen bg-[#050608] px-6 py-10 text-white animate-pulse">

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">

        {/* Left */}
        <div className="flex-1">

          <div className="h-8 w-40 rounded-full bg-white/10" />

          <div className="mt-8 h-20 w-3/4 rounded-xl bg-white/10" />

          <div className="mt-5 h-10 w-1/2 rounded bg-white/10" />


          <div className="mt-6 space-y-3">
            <div className="h-5 w-full rounded bg-white/10" />
            <div className="h-5 w-5/6 rounded bg-white/10" />
          </div>


          {/* Tech stack */}
          <div className="mt-8 flex gap-3">
            {[1,2,3,4].map(i=>(
              <div
                key={i}
                className="h-10 w-24 rounded-lg bg-white/10"
              />
            ))}
          </div>


          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <div className="h-12 w-40 rounded-xl bg-white/10"/>
            <div className="h-12 w-40 rounded-xl bg-white/10"/>
          </div>

        </div>



        {/* Diagram */}
        <div className="flex flex-1 justify-center items-center">

          <div className="
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/10
          "/>

        </div>

      </section>



      {/* Stats */}
      <section className="mt-16">

        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-4
        ">

          {[1,2,3,4,5,6].map(i=>(
            <div
              key={i}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
              "
            >

              <div className="mx-auto h-14 w-14 rounded-full bg-white/10"/>

              <div className="mx-auto mt-5 h-10 w-20 rounded bg-white/10"/>

              <div className="mx-auto mt-3 h-4 w-24 rounded bg-white/10"/>

            </div>
          ))}

        </div>

      </section>




      {/* Details cards */}
      <SkeletonSection>
        <div className="grid gap-6 lg:grid-cols-3">

          {[1,2,3].map(i=>(
            <div
              key={i}
              className="rounded-2xl bg-white/5 p-8"
            >
              <div className="h-12 w-12 rounded-full bg-white/10"/>

              <div className="mt-6 h-6 w-40 rounded bg-white/10"/>

              <div className="mt-4 h-20 rounded bg-white/10"/>
            </div>
          ))}

        </div>
      </SkeletonSection>





      {/* Dataset */}
      <SkeletonSection>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="space-y-5">

            {[1,2,3,4].map(i=>(
              <div
                key={i}
                className="h-6 w-full rounded bg-white/10"
              />
            ))}

          </div>


          {/* Chart */}
          <div className="
            h-[320px]
            rounded-xl
            bg-white/10
          "/>

        </div>

      </SkeletonSection>





      {/* Methodology */}
      <SkeletonSection>

        <div className="flex justify-between">

          {[1,2,3,4].map(i=>(
            <div
              key={i}
              className="flex flex-col items-center"
            >

              <div className="
                h-16
                w-16
                rounded-full
                bg-white/10
              "/>

              <div className="
                mt-5
                h-10
                w-24
                rounded
                bg-white/10
              "/>

            </div>
          ))}

        </div>

      </SkeletonSection>





      {/* Models */}
      <SkeletonSection>

        <div className="grid gap-6 md:grid-cols-3">

          {[1,2,3].map(i=>(
            <div
              key={i}
              className="
                rounded-xl
                bg-white/5
                p-6
              "
            >

              <div className="h-14 w-14 rounded bg-white/10"/>

              <div className="mt-6 h-8 w-32 rounded bg-white/10"/>

              <div className="mt-8 h-32 rounded bg-white/10"/>

            </div>
          ))}

        </div>

      </SkeletonSection>





      {/* Training */}
      <SkeletonSection>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Chart */}
          <div className="
            h-[350px]
            rounded-xl
            bg-white/10
          "/>


          {/* Table */}
          <div className="
            h-[350px]
            rounded-xl
            bg-white/10
          "/>

        </div>

      </SkeletonSection>






      {/* Predictions */}
      <SkeletonSection>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">

          {[1,2,3,4].map(i=>(
            <div
              key={i}
              className="
                rounded-xl
                bg-white/5
                p-4
              "
            >

              <div className="
                aspect-square
                rounded-lg
                bg-white/10
              "/>

              <div className="mt-4 h-5 rounded bg-white/10"/>

            </div>
          ))}

        </div>

      </SkeletonSection>


    </div>
  );
}




function SkeletonSection({children}) {
  return (
    <section className="mt-16">
      {children}
    </section>
  );
}