import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const credentials = [
    {
      id: 'efset-english',
      alt: 'EFSET English Certificate',
      title: 'EFSET English Certificate',
      subtitle: 'C1 Advanced',
      issuer: 'EF Standard English Test',
      issued: 'Jun 2025',
      credentialUrl: '',
      status: 'completed'
    },
    {
      id: 'sql-basic',
      alt: 'SQL (Basic) Certificate',
      title: 'SQL (Basic)',
      subtitle: 'HackerRank',
      issuer: 'HackerRank',
      issued: 'Aug 2025',
      credentialUrl: 'https://www.hackerrank.com/certificates/139793089e41',
      status: 'completed'
    },
    {
      id: 'python-basic',
      alt: 'Python (Basic) Certificate',
      title: 'Python (Basic)',
      subtitle: 'HackerRank',
      issuer: 'HackerRank',
      issued: 'Aug 2025',
      credentialUrl: 'https://www.hackerrank.com/certificates/2e9cc1b345c1',
      status: 'completed'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Credentials</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => {
              const CredentialComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg" style={{
                    background: isDarkMode ? 'linear-gradient(135deg, rgba(234, 190, 195, 0.2), rgba(234, 190, 195, 0.1))' : 'linear-gradient(135deg, rgba(234, 190, 195, 0.3), rgba(234, 190, 195, 0.2))'
                  }}>
                    <span className="text-3xl font-bold" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                      ✓
                    </span>
                  </div>
                  <h3 className="text-center text-sm font-medium mb-1" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {credential.title}
                  </h3>
                  <p className="text-center text-xs mb-2" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {credential.subtitle}
                  </p>
                  <p className="text-center text-xs" style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[500] }}>
                    {credential.issued}
                  </p>
                </div>
              );

              return credential.credentialUrl ? (
                <a
                  key={credential.id}
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${credential.title} credential`}
                >
                  <CredentialComponent />
                </a>
              ) : (
                <div key={credential.id} className="block">
                  <CredentialComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;