import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/' || pathnames.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="bg-supreme-black/5 py-4 border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-12 flex items-center gap-2 text-[10px] md:text-xs font-sans uppercase tracking-widest">
                <Link to="/" className="text-gray-400 hover:text-supreme-gold transition-colors flex items-center gap-1">
                    <Home size={12} />
                    <span>Home</span>
                </Link>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const name = value.replace(/-/g, ' ');

                    return (
                        <div key={to} className="flex items-center gap-2">
                            <ChevronRight size={12} className="text-gray-300" />
                            {last ? (
                                <span className="text-supreme-gold font-semibold">{name}</span>
                            ) : (
                                <Link to={to} className="text-gray-400 hover:text-supreme-gold transition-colors">
                                    {name}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
