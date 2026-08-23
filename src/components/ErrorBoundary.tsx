import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error in React lifecycle:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-supreme-black text-white flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 bg-supreme-gold/20 rounded-full flex items-center justify-center mb-6">
                        <ShieldAlert className="text-supreme-gold" size={32} />
                    </div>
                    <h2 className="text-3xl font-serif mb-4 text-white">System Notice</h2>
                    <p className="text-white/60 max-w-md mx-auto mb-8 font-light text-sm leading-relaxed">
                        The page encountered a minor interface rendering adjustment. We are restoring configurations to bring you back online.
                    </p>
                    <button
                        onClick={() => {
                            window.location.href = '/';
                        }}
                        className="bg-supreme-gold text-supreme-black px-8 py-3 rounded-full font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 flex items-center gap-2"
                    >
                        <RefreshCw size={14} />
                        <span>Restore Interface</span>
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
