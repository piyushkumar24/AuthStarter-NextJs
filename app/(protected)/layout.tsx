import { Navbar } from "./_components/navbar";

const ProtectedLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="pt-20 pb-10 px-4 md:px-8">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;