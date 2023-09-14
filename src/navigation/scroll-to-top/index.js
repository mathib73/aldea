import { withRouter } from '../../helpers/withRouter';
import { ScrollToTop } from './scroll-to-top';

const WrappedScrollToTop = withRouter(ScrollToTop);

export { WrappedScrollToTop as ScrollToTop };
