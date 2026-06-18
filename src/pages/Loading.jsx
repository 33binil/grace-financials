export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <div className="animate-pulse">
          <img
            src="/grace_logo1_bgr.webp"
            alt="Grace Financial"
            className="h-16 w-auto object-contain mx-auto mb-lg animate-bounce"
          />
        </div>
        <div className="relative mx-auto w-14 h-14 mb-lg">
          <div className="absolute inset-0 border-4 border-secondary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-secondary rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-primary rounded-full animate-spin animate-pulse" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <p className="text-body-lg text-primary font-semibold animate-pulse">Loading...</p>
        <div className="flex justify-center gap-1 mt-md">
          <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </main>
  )
}
