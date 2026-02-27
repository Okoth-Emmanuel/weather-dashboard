function ErrorMessage({ message }) {
  return (
    <div className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
      {message}
    </div>
  );
}

export default ErrorMessage;