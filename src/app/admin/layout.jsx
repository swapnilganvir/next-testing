import Sidebar from '@/components/admin/Sidebar';
import ProfileDropdown from '@/components/admin/ProfileDropdown';

export const metadata = {
  title: 'Uncram Admin Panel',
  icons: {
    icon: '/logo.png', // or .png/.svg
  },
  description:
    'A powerful and conceptual apps base dashboard template that especially build for developers and programmers.',
};

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <div className="flex justify-between h-16 px-1.5 sm:px-8 dark:bg-gray-950 border-b-1 border-gray-200 dark:border-gray-800">
          <div className="w-full flex justify-between">
            <div></div>
            <div></div>
            <div className="px-1 py-3.5">
              <ProfileDropdown />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {children}

          <div className="w-full min-w-[320px] mt-auto border-t bg-white  border-gray-200 dark:bg-gray-950 dark:border-gray-900 px-1.5 sm:px-5 py-5">
            <div className="flex items-center justify-between flex-wrap">
              <p className="text-sm font-[500] text-slate-500 pb-1 sm:pb-0">
                © 2025 UNCRAM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
