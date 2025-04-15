import Link from 'next/link';
import Header from './_components/Header';

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-700">
      <Header showBackToHome={false} />
      <main className="flex flex-col gap-[16px] row-start-1 item-start sm:items-start text-gray-900 dark:text-white">
        <h1 className="text-2xl">Next.js experiments:</h1>
        <ul className="list-disc">
          <li key="pagination">
            <Link href="experiment/pagination">Pagination</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
