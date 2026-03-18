import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled UI error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#6B6B6B] mb-5">
              Unexpected Error
            </p>
            <h1 className="text-[2.25rem] md:text-[3rem] font-medium text-[#111827] leading-tight tracking-tight mb-4">
              Something went wrong.
            </h1>
            <p className="text-[15px] text-[#6B6B6B] font-light leading-relaxed mb-8">
              We hit an unexpected issue while rendering this page. Please try reloading, or return to the home page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1E5AA5] text-white text-[13px] font-semibold hover:bg-[#174F94] transition-colors duration-200"
              >
                Reload Page
              </button>
              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-black/10 text-[#1B1D1E] text-[13px] font-medium hover:border-black/20 transition-colors duration-200"
              >
                Go to Home
              </button>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
