import PropTypes from "prop-types";
import { FiCalendar, FiClock, FiPlay, FiStar, FiUser } from "react-icons/fi";

const Detail = ({ pr }) => {
  const watchTrailerUrl = () => {
    if (pr.trailerUrl) {
      window.open(pr.trailerUrl, "_blank");
    }
  };

  return (
    <main className="container mx-auto px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-2xl border border-white/5 relative group">
          <img
            className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
            src={
              pr.url ||
              "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500"
            }
            alt={pr.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050404] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-8 left-0 right-0 flex justify-center px-8">
            <button
              className="btn-primary w-full py-4 tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_8px_32px_-4px_rgba(137,49,104,0.6)]"
              onClick={watchTrailerUrl}
            >
              <FiPlay size={20} fill="white" />
              Watch Trailer
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col pt-4">
          <div className="flex items-center gap-3 text-[#893168] font-black text-sm uppercase tracking-[0.2em] mb-4">
            <span className="w-10 h-[2px] bg-[#893168]"></span>
            Now Playing
          </div>

          <h1 className="text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            {pr.name}
          </h1>

          <div className="flex flex-wrap items-center gap-8 mb-10">
            <div className="flex items-center gap-2">
              <FiStar className="text-yellow-500" />
              <span className="text-white font-bold">
                {pr.imdbRating || pr.rating || "8.5"}
              </span>
              <span className="text-gray-500 text-xs">IMDB</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-gray-500" />
              <span className="text-gray-300 font-bold text-sm">
                {pr.date || "2024"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-gray-500" />
              <span className="text-gray-300 font-bold text-sm">
                {pr.duration || "2.2"} hr
              </span>
            </div>
            <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-white/10">
              {pr.category}
            </div>
          </div>

          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                <FiUser size={12} /> Director
              </h3>
              <p className="text-white text-xl font-bold">
                {pr.director || "Director Information Not Available"}
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">
                Synopsis
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {pr.description ||
                  "The story unfolds in a cinematic masterpiece that pushes the boundaries of storytelling and visual excellence."}
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#2e1c2b] border border-[#893168]/10 p-8 rounded-xl">
            <h3 className="text-white text-lg font-bold mb-4">
              Critical Reception
            </h3>
            <p className="text-gray-400 font-medium italic">
              A breathtaking exploration of themes that resonate long after the
              credits roll. The direction and cinematography collaborate to
              create an unforgettable cinematic experience.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#893168] flex items-center justify-center text-[10px] font-black text-white">
                CH
              </div>
              <span className="text-xs text-gray-500 font-bold">
                CineHub Reviewer
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Detail.propTypes = {
  pr: PropTypes.object.isRequired,
};

export default Detail;
