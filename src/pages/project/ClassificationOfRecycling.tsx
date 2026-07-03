
import RecyclingDiagram from "../../assets/projects/classificationOfRecycling1.png";
import {
  faImage,
  faBorderAll,
  faShareNodes,
  faArrowTrendUp,
  faMicrochip,
  faComputer,
   faCircleQuestion,
  faBullseye,
  faLightbulb,
   faDatabase,
  faCheck,
  faFlask,
  faFolderOpen,
  faTableCells,
  faLayerGroup,
  faLaptopCode,
  faChartLine,
  faArrowRight,
  faCube,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const chartData = [
  { name: "trash", value: 140 },
  { name: "glass", value: 500 },
  { name: "plastic", value: 480 },
  { name: "cardboard", value: 400 },
  { name: "paper", value: 560 },
  { name: "metal", value: 400 },
];

const overview = [
  "2537 total images",
  "6 recyclable material classes",
  "70% Training / 13% Validation / 17% Test split",
  "Images collected from real-world scenarios",
  "Class imbalance exists (Trash has fewer samples)",
];

const methodology = [
  { icon: faFolderOpen, label: "Dataset\nCollection" },
  { icon: faImage, label: "Image\nPreprocessing" },
  { icon: faTableCells, label: "Train/Val/Test\nSplit (70/13/17)" },
  { icon: faLayerGroup, label: "Transfer\nLearning" },
  { icon: faLaptopCode, label: "Model\nTraining" },
  { icon: faChartLine, label: "Evaluation" },
];


const stats = [
  {
    icon: faImage,
    value: "2527",
    label: "Total Images",
    color: "text-green-500",
  },
  {
    icon: faBorderAll,
    value: "6",
    label: "Classes",
    color: "text-green-500",
  },
  {
    icon: faShareNodes,
    value: "3",
    label: "CNN Models",
    color: "text-green-500",
  },
  {
    icon: faArrowTrendUp,
    value: "97%",
    label: "Best Accuracy",
    color: "text-green-500",
  },
  {
    icon: faMicrochip,
    value: "TensorFlow",
    label: "Framework",
    color: "text-orange-500",
  },
  {
    icon: faComputer,
    value: "GPU",
    label: "Training",
    color: "text-green-500",
  },
];

const cards = [
  {
    icon: faCircleQuestion,
    title: "Problem",
    description:
      "Traditional waste sorting is manual, expensive and error-prone, leading to inefficient recycling processes.",
  },
  {
    icon: faBullseye,
    title: "Goal",
    description:
      "Build an accurate and efficient deep learning model that can classify six types of recyclable materials.",
  },
  {
    icon: faLightbulb,
    title: "Research Question",
    description:
      "Which pretrained CNN architecture provides the best balance between accuracy and computational cost?",
  },
];

const models = [
  {
    name: "VGG16",
    subtitle: "Classic CNN Architecture",
    color: "purple",
    icon: faLayerGroup,
    accuracy: "75%",
    points: [
      "Deep and simple architecture",
      "More parameters",
      "Higher computational cost",
    ],
  },
  {
    name: "MobileNet",
    subtitle: "Lightweight CNN",
    color: "green",
    icon: faCube,
    accuracy: "97%",
    featured: true,
    points: [
      "Designed for efficiency",
      "Fewer parameters",
      "Faster training & inference",
    ],
  },
  {
    name: "ResNet50",
    subtitle: "Residual Learning Framework",
    color: "blue",
    icon: faCube,
    accuracy: "96%",
    points: [
      "Very deep with skip connections",
      "High accuracy and stability",
      "Good generalization",
    ],
  },
];

const colors = {
  purple: {
    border: "border-purple-500/30",
    icon: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-300",
  },
  green: {
    border: "border-green-500/30",
    icon: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
  },
  blue: {
    border: "border-blue-500/30",
    icon: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
  },
};

const chartDataTrainingResults = [
  { epoch: "20 Epoch", ResNet50: 0.89, MobileNet: 0.83, VGG16: 0.63 },
  { epoch: "40 Epoch", ResNet50: 0.89, MobileNet: 0.84, VGG16: 0.56 },
  { epoch: "60 Epoch", ResNet50: 0.83, MobileNet: 0.95, VGG16: 0.57 },
  { epoch: "100 Epoch", ResNet50: 0.93, MobileNet: 0.97, VGG16: 0.55 },
];

const tableData = [
  {
    model: "MobileNet",
    e20: "89%",
    e40: "90%",
    e60: "95%",
    e100: "97%",
    color: "text-green-400",
  },
  {
    model: "ResNet50",
    e20: "90%",
    e40: "91%",
    e60: "88%",
    e100: "96%",
    color: "text-blue-400",
  },
  {
    model: "VGG16",
    e20: "75%",
    e40: "69%",
    e60: "70%",
    e100: "69%",
    color: "text-purple-400",
  },
];

const predictions = [
  {
    image: "/images/paper.png",
    actual: "Paper",
    predicted: "Paper",
    confidence: "98.6%",
  },
  {
    image: "/images/glass.png",
    actual: "Glass",
    predicted: "Glass",
    confidence: "97.3%",
  },
  {
    image: "/images/plastic.png",
    actual: "Plastic",
    predicted: "Plastic",
    confidence: "98.4%",
  },
  {
    image: "/images/cardboard.png",
    actual: "Cardboard",
    predicted: "Cardboard",
    confidence: "97.7%",
  },
  {
    image: "/images/metal.png",
    actual: "Metal",
    predicted: "Metal",
    confidence: "98.2%",
  },
  {
    image: "/images/trash.png",
    actual: "Trash",
    predicted: "Trash",
    confidence: "94.7%",
  },
];


export default function ClassificationOfRecycling() {
    return (
       <div className="h-full w-full  pr-2 sm:pr-4 lg:pr-8 ">
  <section className="relative overflow-hidden bg-[#050608] py-12 sm:py-16 lg:py-24">
    {/* Background Glow */}
    <div className="absolute left-0 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[80px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
      {/* Left Side */}
      <div className="max-w-xl">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 sm:px-4">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs font-medium text-green-400 sm:text-sm">
            Research Project
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Recycling Material
          <br />
          Classification
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-green-400 sm:text-2xl lg:mt-5 lg:text-3xl">
          Using Deep Learning
        </h2>

        <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          A comparative study of VGG16, MobileNet and ResNet50 for six-class
          recyclable waste classification.
        </p>

        {/* Technologies */}
        <div className="relative z-10 mt-8 flex flex-wrap gap-2 sm:gap-3">
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
              className="rounded-lg border border-zinc-700 bg-[#161616] px-3 py-2 text-xs text-gray-300 transition-all hover:border-green-400 hover:bg-[#1b221d] hover:text-green-300 hover:shadow-[0_0_12px_rgba(74,222,128,0.35)] sm:px-4 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-5 py-3 font-medium text-black transition hover:bg-green-400 sm:w-auto sm:px-6 sm:py-4">
            <i className="fa-brands fa-github text-lg sm:text-xl"></i>
            View on GitHub
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-[#111] px-5 py-3 font-medium text-white transition hover:border-green-400 sm:w-auto sm:px-6 sm:py-4">
            <i className="fa-regular fa-file-lines text-green-400"></i>
            Paper / Report
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex w-full justify-center">
        {/* Glow */}
        <div className="absolute h-[220px] w-[220px] rounded-full bg-green-500/10 blur-[70px] sm:h-[300px] sm:w-[300px] lg:h-[420px] lg:w-[420px] lg:blur-[120px]" />

        {/* Ring */}
        <div
          className="absolute h-[240px] w-[240px] rounded-full border border-green-500/10 sm:h-[320px] sm:w-[320px] lg:h-[430px] lg:w-[430px]"
          style={{
            animation: "spin 40s linear infinite",
          }}
        />

        {/* Diagram */}
        <img
          src={RecyclingDiagram}
          alt="Recycling Diagram"
          className="relative z-10 w-full max-w-xs object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.15)] transition duration-500 hover:scale-[1.02] sm:max-w-md lg:max-w-[700px]"
        />
      </div>
    </div>
  </section>
  <section className="mx-auto mt-12 sm:mt-16">
    <div className="w-full rounded-2xl border border-gray-700 bg-[#0d1117] shadow-lg overflow-hidden">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center py-8 px-6 ${
              index !== stats.length - 1
                ? "lg:border-r border-gray-700"
                : ""
            }`}
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-2xl ${item.color}`}
              />
            </div>

            <h2 className="text-4xl font-bold text-white">
              {item.value}
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
   
  </section>

  <section className="mx-auto mt-12 sm:mt-16">
    <div className="w-full rounded-2xl border border-gray-700 bg-[#0d1117] shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex gap-5 p-8 ${
              index !== cards.length - 1
                ? "lg:border-r border-gray-700"
                : ""
            }`}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/30">
              <FontAwesomeIcon
                icon={card.icon}
                className="text-xl text-purple-400"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7 text-[15px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="mx-auto mt-12 sm:mt-16">
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
    {/* ================= Dataset Overview ================= */}
    <div className="rounded-2xl border border-gray-700 bg-[#0d1117] p-6">
      <div className="flex items-center gap-3 mb-8">
        <FontAwesomeIcon
          icon={faDatabase}
          className="text-purple-400 text-2xl"
        />
        <h2 className="text-2xl font-semibold text-white">
          Dataset Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Overview */}
        <div className="space-y-5">
          {overview.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-400 mt-1 flex-shrink-0"
              />

              <p className="text-gray-300 leading-7">{item}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div>
          <h4 className="text-center text-white font-semibold uppercase text-sm tracking-wide mb-5">
            Total Images Per Class
          </h4>

          <div className="h-[280px] sm:h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 5,
                }}
              >
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  tick={{ fill: "#d1d5db", fontSize: 12 }}
                />

                <YAxis
                  stroke="#9ca3af"
                  tick={{ fill: "#d1d5db", fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />

                <Bar
                  dataKey="value"
                  fill="#a855f7"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>

    {/* ================= Methodology ================= */}
    <div className="rounded-2xl border border-gray-700 bg-[#0d1117] p-6">
      <div className="flex items-center gap-3 mb-8">
        <FontAwesomeIcon
          icon={faFlask}
          className="text-purple-400 text-2xl"
        />

        <h2 className="text-2xl font-semibold text-white">
          Methodology
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {methodology.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full border border-green-500/40 bg-green-500/10 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={step.icon}
                  className="text-green-400 text-xl"
                />
              </div>

              {/* Connector (Desktop only) */}
              {index !== methodology.length - 1 &&
                (index + 1) % 3 !== 0 && (
                  <div className="hidden sm:block absolute top-1/2 left-full w-8 h-[2px] bg-green-500/40 -translate-y-1/2" />
                )}
            </div>

            <p className="mt-4 text-sm text-gray-300 leading-6 whitespace-pre-line">
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* Optional Summary */}
      <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
        <p className="text-center text-gray-300 text-sm leading-7">
          The images are preprocessed, augmented, and trained using three
          deep learning architectures (<span className="text-green-400 font-medium">VGG16</span>,
          <span className="text-green-400 font-medium"> MobileNet</span>, and
          <span className="text-green-400 font-medium"> ResNet50</span>) to
          compare classification performance on recyclable waste images.
        </p>
      </div>
    </div>
  </div>
</section>
    <section className="mx-auto mt-12 sm:mt-16">
      <div className="bg-[#0b0b0d] min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl rounded-2xl border border-gray-800 bg-[#111214] p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon
            icon={faLayerGroup}
            className="text-purple-400 text-lg"
          />
          <h2 className="text-white text-xl font-semibold">
            Models Compared
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className={`rounded-xl border ${colors[model.color as keyof typeof colors].border} bg-[#18191d] p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-lg border ${colors[model.color as keyof typeof colors].border} flex items-center justify-center`}
                  >
                    <FontAwesomeIcon
                      icon={model.icon}
                      className={`text-3xl ${colors[model.color as keyof typeof colors].icon}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-white text-2xl font-bold">
                      {model.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {model.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  {model.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-8 rounded-lg px-4 py-3 ${colors[model.color as keyof typeof colors].badge} flex items-center justify-center gap-2 font-semibold text-lg`}
              >
                <span>Best Accuracy: {model.accuracy}</span>

                {model.featured && (
                  <FontAwesomeIcon icon={faStar} className="text-green-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>
      <section className="mx-auto mt-12 sm:mt-16">
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
      {/* Left Card */}
      <div className="bg-[#111214] border border-gray-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-green-400 text-xl"
          />
          <h2 className="text-white text-xl font-semibold">
            Training Results (Test Accuracy)
          </h2>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartDataTrainingResults}>
                <CartesianGrid stroke="#2a2a2a" />
                <XAxis
                  dataKey="epoch"
                  stroke="#9ca3af"
                  tick={{ fill: "#d1d5db", fontSize: 12 }}
                />
                <YAxis
                  domain={[0, 1]}
                  stroke="#9ca3af"
                  tick={{ fill: "#d1d5db", fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#18191d",
                    border: "1px solid #333",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="ResNet50"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />

                <Line
                  type="monotone"
                  dataKey="MobileNet"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />

                <Line
                  type="monotone"
                  dataKey="VGG16"
                  stroke="#facc15"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Accuracy Boxes */}
          <div className="w-32 flex flex-col gap-4">
            <div className="rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-center">
              <h3 className="text-5xl font-bold text-green-400">97%</h3>
              <p className="text-green-400 mt-2 font-semibold">MobileNet</p>
              <p className="text-gray-400 text-sm">Best Accuracy</p>
            </div>

            <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 text-center">
              <h3 className="text-5xl font-bold text-blue-400">96%</h3>
              <p className="text-blue-400 mt-2 font-semibold">ResNet50</p>
              <p className="text-gray-400 text-sm">Best Accuracy</p>
            </div>

            <div className="rounded-xl border border-purple-500/40 bg-purple-500/10 p-4 text-center">
              <h3 className="text-5xl font-bold text-purple-400">75%</h3>
              <p className="text-purple-400 mt-2 font-semibold">VGG16</p>
              <p className="text-gray-400 text-sm">Best Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-[#111214] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-white text-xl font-semibold mb-6">
          Accuracy Comparison Table
        </h2>

        <div className="overflow-hidden rounded-xl border border-gray-800">
          <table className="w-full">
            <thead className="bg-[#18191d]">
              <tr>
                <th className="text-left p-4 text-gray-300">Model</th>
                <th className="p-4 text-gray-300">20 Epoch</th>
                <th className="p-4 text-gray-300">40 Epoch</th>
                <th className="p-4 text-gray-300">60 Epoch</th>
                <th className="p-4 text-gray-300">100 Epoch</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.model}
                  className="border-t border-gray-800 hover:bg-[#18191d]"
                >
                  <td className="p-4 text-white font-medium">{row.model}</td>
                  <td className={`text-center p-4 ${row.color}`}>{row.e20}</td>
                  <td className={`text-center p-4 ${row.color}`}>{row.e40}</td>
                  <td className={`text-center p-4 ${row.color}`}>{row.e60}</td>
                  <td className={`text-center p-4 font-bold ${row.color}`}>
                    {row.e100}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </section>
        <section className="mx-auto mt-12 sm:mt-16">
          <div className="bg-[#111214] border border-gray-800 rounded-2xl p-6 mt-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg border border-green-500/30 bg-green-500/10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faImage}
            className="text-green-400 text-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-white">
          Prediction Examples
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {predictions.map((item) => (
          <div
            key={item.actual}
            className="bg-[#18191d] border border-gray-800 rounded-xl p-3 hover:border-green-500/30 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.actual}
                className="w-16 h-16 object-contain"
              />

              <div className="text-sm space-y-1">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Actual:</span>{" "}
                  {item.actual}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Predicted:
                  </span>{" "}
                  <span className="text-green-400 font-medium">
                    {item.predicted}
                  </span>
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Confidence:
                  </span>{" "}
                  <span className="text-green-400 font-medium">
                    {item.confidence}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
</div>
    );
}