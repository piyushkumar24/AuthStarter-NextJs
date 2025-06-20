// This component is used to prevent flash of wrong theme on page load
// It should be placed in the head of the document

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = localStorage.getItem('theme') || 'system';
              
              if (theme === 'dark' || (theme === 'system' && systemPreference === 'dark')) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              console.error('Error setting theme:', e);
            }
          })();
        `,
      }}
      async
    />
  );
} 