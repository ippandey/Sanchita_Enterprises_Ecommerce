const Welcome = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to the Admin Dashboard!
        </h1>
        <p className="text-lg text-gray-600">
          Use the menu to manage products and your profile.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
