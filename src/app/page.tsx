import Game from '../components/Game';

export default function Home() {
  return (
    <main 
      className="min-h-screen py-8 bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <Game />
      </div>
    </main>
  );
}
