export default function ChatApplicationSkeleton() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-12 py-10 animate-pulse">

      {/* Navbar */}
      <header className="flex justify-between items-center">
        <div className="h-8 w-28 rounded bg-white/10" />

        <div className="flex gap-6">
          <div className="h-4 w-16 rounded bg-white/10" />
          <div className="h-4 w-16 rounded bg-white/10" />
        </div>
      </header>


      {/* Hero */}
      <section className="mt-24">

        {/* Label */}
        <div className="h-4 w-28 rounded bg-white/10" />


        {/* Title */}
        <div className="
          mt-6
          h-20
          w-3/4
          rounded-xl
          bg-white/10
        " />


        {/* Description */}
        <div className="mt-8 space-y-3">
          <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
          <div className="h-5 w-4/5 max-w-xl rounded bg-white/10" />
        </div>


        {/* Chat preview */}
        <div className="
          mt-16
          mx-auto
          max-w-5xl
          rounded-3xl
          bg-white/10
          p-6
        ">

          <div className="
            h-[500px]
            rounded-2xl
            bg-black/30
            p-6
          ">

            {/* Chat header */}
            <div className="flex items-center gap-4">
              <div className="
                h-12
                w-12
                rounded-full
                bg-white/10
              "/>

              <div>
                <div className="h-4 w-32 rounded bg-white/10" />
                <div className="mt-2 h-3 w-20 rounded bg-white/10" />
              </div>
            </div>


            {/* Messages */}
            <div className="mt-12 space-y-6">

              <div className="
                ml-auto
                h-12
                w-48
                rounded-2xl
                bg-white/10
              "/>

              <div className="
                h-16
                w-64
                rounded-2xl
                bg-white/10
              "/>

              <div className="
                ml-auto
                h-14
                w-56
                rounded-2xl
                bg-white/10
              "/>

              <div className="
                h-12
                w-52
                rounded-2xl
                bg-white/10
              "/>

            </div>


            {/* Input */}
            <div className="
              mt-auto
              h-12
              rounded-full
              bg-white/10
            "/>

          </div>

        </div>

      </section>



      {/* Info */}
      <section className="
        mt-24
        grid
        grid-cols-1
        md:grid-cols-3
        gap-10
      ">

        <InfoItem />
        <InfoItem />
        <InfoItem />

      </section>



      {/* Screenshots */}
      <section className="mt-24">

        <div className="
          h-10
          w-48
          rounded
          bg-white/10
        "/>


        <div className="
          mt-10
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {[1,2,3,4].map((item)=>(
            <div
              key={item}
              className="
                aspect-[4/3]
                rounded-3xl
                bg-white/10
              "
            />
          ))}

        </div>

      </section>

    </div>
  );
}



function InfoItem() {
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