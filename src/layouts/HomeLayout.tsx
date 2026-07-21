import { NavLink, Outlet } from "react-router-dom";
import Jern from "../assets/Jern.png";
import { useEffect, useState } from "react";
import { useLanguage } from "../contex/LanguageContext";

function HomeLayout() {
  const [scrollY, setScrollY] = useState(0);

  const { t, language } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  const progress = Math.min(scrollY / 200, 1);


  return (
    <div className="bg-black min-h-screen text-white flex justify-center">


      <div className="w-full max-w-6xl px-4 sm:px-6">


        {/* ================= PROFILE SECTION ================= */}

        <section
          className="pt-8 sm:pt-12 pb-10"
          style={{
            opacity: 1 - progress,
            transform: `translateY(-${progress * 60}px)`,
            transition: "opacity .1s linear",
          }}
        >

          <div
            className="
              bg-[#05070d]
              rounded-3xl
              p-5
              sm:p-8
            "
          >

            <div
              className="
                flex
                flex-col
                lg:flex-row
                gap-10
                items-center
                lg:items-start
              "
            >


              {/* LEFT */}

              <div className="flex-1 flex flex-col justify-between min-h-[447px]">


                <div className="flex items-center gap-4">


                  <div className="relative shrink-0">

                    <img
                      src={Jern}
                      alt="Jern"
                      className="
                        w-20 h-20
                        sm:w-28 sm:h-28
                        rounded-full
                        object-cover
                        border-4
                        border-zinc-700
                      "
                    />


                    <span
                      className="
                        absolute
                        bottom-1
                        right-1
                        sm:bottom-2
                        sm:right-2
                        w-4 h-4
                        sm:w-5
                        sm:h-5
                        rounded-full
                        bg-green-400
                        border-4
                        border-[#05070d]
                      "
                    />

                  </div>



                  <div>

                    <p className="text-gray-400 text-base sm:text-lg">
                      Hi, I'm
                    </p>


                    <h1
                      className="
                        text-3xl
                        sm:text-5xl
                        font-bold
                      "
                    >
                      {t.common.admin.name} 👋🏾
                    </h1>


                    <p
                      className="
                        text-purple-400
                        text-lg
                        sm:text-xl
                        mt-1
                      "
                    >
                      {t.home.title}
                    </p>


                  </div>


                </div>



                <p
                  className="
                    text-gray-300
                    text-base
                    sm:text-lg
                    leading-relaxed
                    max-w-xl
                  "
                >
                  {t.home.description}
                </p>

<div className="flex flex-col gap-6">

  {/* Profile metadata */}
  <div
    className="
      flex
      flex-wrap
      items-center
      gap-x-6
      gap-y-3
      text-sm
      text-gray-400
    "
  >
    <span className="flex items-center gap-2">
      <span className="text-purple-400">◷</span>
      {t.home.joined}
    </span>

    <span className="h-4 w-px bg-gray-700 hidden sm:block" />

    <span className="flex items-center gap-2">
      <span className="text-purple-400">⌖</span>
      {t.home.location}
    </span>
  </div>


  {/* Swipe CTA */}
  <NavLink
    to="/projects"
    className="
      group
      relative
      flex
      w-full
      items-center
      gap-4
      overflow-hidden
      rounded-2xl
      border
      border-purple-500/40
      bg-white/5
      px-7
      py-3.5
      text-white
      backdrop-blur-sm
      transition-all
      duration-300
      hover:border-purple-400
    "
  >

    {/* Sliding background */}
    <span
      className="
        absolute
        inset-0
        -translate-x-full
        bg-purple-600
        transition-transform
        duration-500
        ease-out
        group-hover:translate-x-0
      "
    />

    <span
      className="
        relative
        z-10
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      {t.home.buttonProject}
    </span>


    <span
      className="
        relative
        z-10
        flex
        h-7
        w-7
        items-center
        justify-center
        rounded-full
        bg-purple-500/30
        transition-all
        duration-300
        group-hover:translate-x-2
        group-hover:bg-white/20
      "
    >
      →
    </span>

  </NavLink>

</div>
</div>


              {/* RIGHT CODE CARD */}


              <div className="max-w-[800px] justify-center align-center items-center hidden lg:flex">


                <div
                  className="
                    rounded-3xl
                    overflow-hidden
                    bg-[#0b0f19]
                    border
                    border-zinc-800
                    shadow-2xl
                  "
                >


                  {/* Header */}

                  <div
                    className="
                      flex
                      gap-2
                      px-5
                      py-4
                      border-b
                      border-zinc-800
                    "
                  >

                    <span className="w-3 h-3 rounded-full bg-red-500"/>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"/>
                    <span className="w-3 h-3 rounded-full bg-green-400"/>

                  </div>




                 <pre
  className="
    p-5
    sm:p-8
    text-xs
    sm:text-sm
    md:text-base
    overflow-x-auto
    font-mono
    leading-relaxed
    text-gray-300
  "
>

<span className="text-purple-400">
const
</span>{" "}

<span className="text-blue-400">
jern
</span>

{" = {"}

{`\n`}


{"  "}
<span className="text-gray-400">
role:
</span>{" "}

<span className="text-green-400">
"Full-stack Engineer"
</span>

,{`\n`}


{"  "}
<span className="text-gray-400">
skills:
</span>{" ["}

{`\n`}

{"    "}
<span className="text-green-400">
"Frontend Magic ✨"
</span>

,{`\n`}

{"    "}
<span className="text-green-400">
"Backend Logic ⚙️"
</span>

,{`\n`}

{"    "}
<span className="text-green-400">
"Database Wizardry 🗄️"
</span>

{`\n`}

{"  "}
],

{`\n`}


{"  "}
<span className="text-gray-400">
philosophy:
</span>

{" "}

<span className="text-green-400">
"Simple solutions. Powerful results"
</span>

{"}"}

{"\n\n"}


<span className="text-purple-400">
if
</span>{" ("}

<span className="text-blue-400">
coffee
</span>
.available) {" {"}

{`\n`}

{"  "}
<span className="text-blue-400">
jern
</span>
.energy =

{" "}

<span className="text-green-400">
"100% 🚀"
</span>

{`\n`}

{"} "}
<span className="text-purple-400">
else
</span>{" {"}

{`\n`}

{"  "}
<span className="text-blue-400">
jern
</span>
.energy =

{" "}

<span className="text-green-400">
"Loading coffee... ☕"
</span>

{`\n`}

{"}"}


</pre>


                </div>


              </div>


            </div>


          </div>


        </section>







        {/* ================= NAVIGATION ================= */}



        <div
          className="
            sticky top-14 z-40
            w-full
            self-start
            bg-black/90
            backdrop-blur-lg
            border-b
            border-zinc-800
          "
        >

          <nav
            key={language}
            className="
              h-14
              sm:h-16
              flex
              overflow-x-auto
            "
          >


            <NavLink
              to="/"
              end
              className={({isActive}) =>
                `
                flex-1
                min-w-[100px]
                text-center
                py-4
                transition
                ${
                  isActive
                  ?
                  "text-white border-b-2 border-white"
                  :
                  "text-gray-400 hover:text-white"
                }
                `
              }
            >
              {t.navbar.me}
            </NavLink>




            <NavLink
              to="/experience"
              className={({isActive}) =>
                `
                flex-1
                min-w-[100px]
                text-center
                py-4
                transition
                ${
                  isActive
                  ?
                  "text-white border-b-2 border-white"
                  :
                  "text-gray-400 hover:text-white"
                }
                `
              }
            >
              {t.navbar.experience}
            </NavLink>





         <div
  className="
    relative
    flex-1
    min-w-[100px]
    text-center
    py-4
    text-gray-500
    cursor-not-allowed
    overflow-hidden
  "
>
  {t.navbar.learningLog}

  <span
    className="
      absolute
      top-3
      -left-8

      -rotate-45

      w-28
      py-1

      text-center
      text-[10px]
      font-bold
      tracking-wider

      bg-gradient-to-r
      from-red-500
      to-rose-600

      text-white

      shadow-lg
      shadow-red-500/30

      border
      border-red-300/30
    "
  >
    SOON
  </span>
</div>

          </nav>


        </div>






        {/* ================= PAGE CONTENT ================= */}


        <main className="py-6 sm:py-10 flex justify-center">

          <Outlet />

        </main>




      </div>


    </div>
  );
}


export default HomeLayout;