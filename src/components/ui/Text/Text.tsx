import classNames from "classnames";

interface TextProps {
    children: string
    className?: string
    isFaded?: boolean
    isOrange?: boolean
    isBold?: boolean
}

function Text({ children, className, isFaded, isOrange, isBold }: TextProps) {
    return (
      <p
        className={classNames(
          className,{
          'text-slate-400': !!isFaded,
          'text-amber-600': !!isOrange,
          'font-semibold': !!isBold
          }
        )}
      >
        {children}
      </p>
    )
  }
  
  export default Text