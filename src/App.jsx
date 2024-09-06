import Profile from './components/Profile';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center space-y-10 p-8">
      <div className="space-y-8 w-full max-w-3xl">
        <Profile />
        <Gallery />
      </div>
    </div>
  );
};

export default App;