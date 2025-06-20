const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-violet-50 to-violet-200">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/login.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
