const Navbar = () => {
  return (
    <div className='w-full sticky py-2 px-4 border-b-2'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex gap-2 items-end'>
          <span className='text-sm text-muted-foreground mb-0.5'>Welcome,</span>
          <p className='text-lg font-medium'>Lotfi</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
