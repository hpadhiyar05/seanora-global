import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { Home } from 'lucide-react';

const Breadcrumb = ({ crumbs = [] }) => (
  <m.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className="mb-7 md:mb-9"
  >
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-2 bg-black/[0.04] border border-black/[0.05] rounded-full px-4 py-1.5">

        {/* Home — always first */}
        <li>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[12px] font-medium text-[#6B6B6B] hover:text-[#1B1D1E] transition-colors duration-200"
          >
            <Home className="w-3 h-3 shrink-0" strokeWidth={1.5} />
            <span>Home</span>
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <Fragment key={crumb.label}>
            {/* Separator */}
            <li aria-hidden="true" className="text-[10px] text-black/20 select-none leading-none">
              /
            </li>

            {/* Crumb */}
            <li>
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="text-[12px] font-medium text-[#6B6B6B] hover:text-[#1B1D1E] transition-colors duration-200 max-w-[180px] truncate block"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[12px] font-semibold text-[#1B1D1E] max-w-[200px] truncate block">
                  {crumb.label}
                </span>
              )}
            </li>
          </Fragment>
        ))}

      </ol>
    </nav>
  </m.div>
);

export default Breadcrumb;
