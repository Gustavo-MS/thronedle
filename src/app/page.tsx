import Game from '../components/Game';
import QuoteGame from '../components/QuoteGame';

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    }}>
      <Game />
      <QuoteGame />
    </main>
  );
}
