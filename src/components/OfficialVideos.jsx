export default function OfficialVideos() {
  const videos = [
    { id: "dQw4w9WgXcQ" },
    { id: "dil3XmzfJCg" },
    { id: "ScMzIvxBSi4" },
    { id: "aqz-KE-bpKQ" },
    { id: "9bZkp7q19f0" },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80"
          alt="Concert"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-4">
          Official Video
        </h2>

        <p className="text-gray-300 text-sm uppercase tracking-wider mb-8">
          Official Videos Of Our Artists
        </p>

        <button className="bg-primary text-black font-semibold px-8 py-4 rounded-md hover:opacity-90 transition mb-20">
          All Music Videos
        </button>

        {/* Top Row - 2 Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {videos.slice(0, 2).map((video, index) => (
            <VideoCard key={index} videoId={video.id} />
          ))}
        </div>

        {/* Bottom Row - 3 Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {videos.slice(2).map((video, index) => (
            <VideoCard key={index} videoId={video.id} />
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({ videoId }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        className="w-full h-[260px]"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
