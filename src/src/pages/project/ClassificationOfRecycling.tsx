
import RecyclingDiagram from "../../assets/projects/classificationOfRecycling1.png";
export default function ClassificationOfRecycling() {
    return (
        <div className="w-full h-full flex flex-col gap-4 overflow-auto pr-8">
             <section className="relative overflow-hidden bg-[#050608] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[140px]" />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:justify-between">
        {/* Left Side */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-sm font-medium text-green-400">
              Research Project
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight text-white">
            Recycling Material
            <br />
            Classification
          </h1>

          <h2 className="mt-5 text-3xl font-semibold text-green-400">
            Using Deep Learning
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A comparative study of VGG16, MobileNet and ResNet50 for six-class
            recyclable waste classification.
          </p>

          {/* Technologies */}
          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            {[
              "Computer Vision",
              "Deep Learning",
              "CNN",
              "Transfer Learning",
              "TensorFlow",
              "Keras",
            ].map((tech) => (
              <span
                key={tech}
                className="
                        rounded-lg
                        border
                        border-zinc-700
                        bg-[#161616]
                        px-4
                        py-2
                        text-sm
                        text-gray-300
                        transition-all
                        hover:border-green-400
                        hover:bg-[#1b221d]
                        hover:text-green-300
                        hover:shadow-[0_0_12px_rgba(74,222,128,0.35)]
                    ">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-medium text-black transition hover:bg-green-400">
              <i className="fa-brands fa-github text-xl"></i>
              View on GitHub
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-[#111] px-6 py-4 font-medium text-white transition hover:border-green-400">
              <i className="fa-regular fa-file-lines text-green-400"></i>
              Paper / Report
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          {/* Large Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px]" />

          {/* Animated Ring */}
          <div
            className="absolute h-[430px] w-[430px] rounded-full border border-green-500/10"
            style={{
              animation: "spin 40s linear infinite",
            }}
          />

          {/* Diagram */}
          <img
            src={RecyclingDiagram}
            alt="Recycling Diagram"
            className="relative z-10 w-full max-w-[700px] animate-float object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.15)] transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
        </div>
    );
}