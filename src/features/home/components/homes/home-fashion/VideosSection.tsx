export default function VideosSection() {
  const videos = ["HtiC2xfb6us", "Xv5NgMcgtw0", "6VOBrGy_Z4k", "J-16DVDHxHE"];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            <span className="font-bold">We are on</span> Youtube Shorts
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videos.map((videoId, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden rounded-2xl bg-black aspect-[9/16] shadow-md group"
            >
              <iframe
                className="absolute inset-0 w-full h-full scale-[1.05] group-hover:scale-[1.1] transition-transform duration-500 pointer-events-none"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
                title="YouTube Short"
                allow="autoplay"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
