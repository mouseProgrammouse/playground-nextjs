import Link from 'next/link';

const BackToHome = () => {
  return (
    <div className="p-2 absolute top-0 left-0">
      <Link
        className="outline outline-offset-2 rounded-xs pr-4 font-medium pl-4 text-black dark:text-white"
        href="/"
      >
        Back To 🏘
      </Link>
    </div>
  );
};

export default BackToHome;
