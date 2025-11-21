import { LoaderProps } from "../types"

export const Loader = ({ className = "", fullScreen = false }: LoaderProps) => {
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="relative flex h-12 w-12 items-center justify-center">
                    <div className="absolute h-full w-full animate-spin rounded-full border-4 border-bg1 border-t-accent"></div>
                </div>
            </div>
        )
    }

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="relative flex h-8 w-8 items-center justify-center">
                <div className="absolute h-full w-full animate-spin rounded-full border-[3px] border-bg1 border-t-accent"></div>
            </div>
        </div>
    )
}