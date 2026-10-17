import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Scrolls to the top of the window on every route change.
 *
 * - Fires on PUSH, REPLACE and POP (browser back/forward) navigations.
 * - Opts out of the browser's native scroll restoration so back/forward
 *   doesn't restore the previous scroll position.
 * - Uses `behavior: 'instant'` to avoid interfering with page animations
 *   or layout transitions.
 *
 * Mount once, high in the tree, inside the Router. Does not render any UI.
 */
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, search, navigationType]);

  return null;
};

export default ScrollToTopOnNavigate;
